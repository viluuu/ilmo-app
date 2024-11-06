// app/competitions/page.tsx
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import placeholderimage from "/app/assets/IMG_4091.jpg";

export default async function CompetitionsPage() {
  const supabase = createClient();
  const { data: competitions } = await supabase
    .from("competitions")
    .select("*");

  const user = await currentUser();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const formattedDate = new Intl.DateTimeFormat("fi-FI", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }).format(date);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <div className="sm:py-4 py-4">
      <div className="container mx-auto px-4">
        <header className="text-start mb-14">
          {user ? (
            <p className="text-xl font-mono text-gray-200 mt-6">
              Moi, {user?.fullName} 👋
            </p>
          ) : null}
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-8 pb-6 mx-auto">
            Kilpailut
          </h1>
          <p className="font-mono text-gray-300">
            Selaa käynnissä olevia ja tulevia kilpailuita. Ilmoittaudu mukaan
            helposti!
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {competitions != null && competitions.length > 0 ? (
            competitions.map((competition) => (
              <Link
                key={competition.id}
                href={`/kilpailut/${competition.id}`}
                className="flex flex-col bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition transform"
              >
                {/* Kuva */}
                <div className="relative">
                  <Image
                    src={competition.image || placeholderimage}
                    alt={competition.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-gray-600 text-white text-xs px-2 py-1 rounded">
                    {competition.status || "Käynnissä"}
                  </div>
                </div>

                {/* Tekstit ja tiedot */}
                <div className="p-4 flex flex-col justify-between">
                  {/* Otsikko */}
                  <h2 className="text-2xl font-semibold font-mono text-gray-800 truncate">
                    {competition.name}
                  </h2>

                  {/* Sijainti */}
                  <p className="font-mono text-base text-gray-600 mb-1 truncate">
                    {competition.location}
                  </p>
                  {/* Alateksti */}
                  <p className="font-mono text-base text-gray-600 mb-1 truncate">
                    {formatDate(competition.start_date)} -{" "}
                    {formatDate(competition.end_date)}
                  </p>

                  {/* Laji */}
                  <div className="flex items-center justify-between mt-2">
                    {/* Laji */}
                    <span className="text-sm font-mono text-gray-800">
                      🎳 Keilaus
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">Ei kilpailuja</p>
          )}
        </div>
      </div>
    </div>
  );
}
