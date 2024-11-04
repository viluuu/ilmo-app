// app/competitions/page.tsx
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import placeholderimage from "/app/assets/ibrahim-asad-uTI1aexMBls-unsplash.jpg";

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
    <div className="sm:py-8 py-4">
      <div className="container mx-auto px-4">
        <header className="text-center mb-14">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {competitions != null && competitions.length > 0 ? (
            competitions.map((competition) => (
              <Link
                key={competition.id}
                href={`/kilpailut/${competition.id}`}
                className="flex bg-slate-100 rounded-lg overflow-hidden transition hover:shadow-xl transform"
              >
                {/* Kuva vasemmalla */}
                <div className="relative w-1/3">
                  <Image
                    src={placeholderimage}
                    alt="Tournament"
                    layout="fill"
                    objectFit="cover"
                    className="h-full"
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                    Käynnissä
                  </div>
                </div>

                {/* Tekstit oikealla */}
                <div className="w-2/3 p-6 md:py-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-green-800">
                      {competition.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2">
                      {competition.location}
                    </p>
                    <div className="flex items-center space-x-2 font-mono text-gray-500">
                      <span>{formatDate(competition.start_date)}</span>
                      <span>-</span>
                      <span>{formatDate(competition.end_date)}</span>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-12">
                    <button className="rounded-full font-mono w-full border border-solid border-gray-300 transition-colors flex items-center justify-center hover:bg-gray-100 hover:border-green-800 text-sm sm:text-base py-2 px-4">
                      Katso tiedot →
                    </button>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-200">Ei kilpailuja</p>
          )}
        </div>
      </div>
    </div>
  );
}
