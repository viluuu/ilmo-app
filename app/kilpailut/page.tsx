// app/competitions/page.tsx
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { currentUser } from "@clerk/nextjs/server";

export default async function CompetitionsPage() {
  const supabase = createClient();
  const { data: competitions } = await supabase
    .from("competitions")
    .select("*");

  const user = await currentUser();

  return (
    <div>
      <div>
        <div className="container mx-auto px-4 pb-2 mb-4">
          {user ? (
            <p className="text-xl font-mono text-white mt-6">
              Moi, {user?.fullName} 👋
            </p>
          ) : null}
          <h1 className="text-5xl font-bold text-white mt-10 pb-4 mx-auto">
            Kilpailut
          </h1>
          <p className="font-mono text-gray-200 ">
            Selaa käynnissä olevia ja tulevia kilpailuita. Ilmoittaudu mukaan
            helposti!
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions != null && competitions.length > 0 ? (
            competitions.map((competition) => (
              <div
                key={competition.id}
                className="bg-white border shadow-md rounded-lg transition-transform transform overflow-hidden"
              >
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">
                      {competition.name}
                    </h2>
                    <p className="text-gray-500 mb-4">
                      {competition.short_description.slice(0, 100)}
                    </p>
                  </div>
                  <Link
                    href={`/kilpailut/${competition.id}`}
                    className="mt-auto"
                  >
                    <button className="rounded-full w-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
                      Katso tiedot
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Ei kilpailuja</p>
          )}
        </div>
      </div>
    </div>
  );
}
