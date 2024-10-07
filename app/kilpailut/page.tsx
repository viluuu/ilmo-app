// app/competitions/page.tsx
import Link from "next/link";
import Image from "next/image";
import placeholder from "../assets/ibrahim-asad-uTI1aexMBls-unsplash.jpg";

export default async function CompetitionsPage() {
  return (
    <div>
      <div>
        <div className="container mx-auto px-4 pb-2 mb-4">
          <h1 className="text-3xl font-bold text-gray-800 pt-10 pb-4 mx-auto">
            Kilpailut
          </h1>
          <p className="font-mono text-gray-500 ">
            Selaa käynnissä olevia ja tulevia kilpailuita. Ilmoittaudu mukaan
            helposti!
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.length > 0 ? (
            competitions.map((competition) => (
              <div
                key={competition.id}
                className="bg-white border shadow-md rounded-lg transition-transform transform overflow-hidden"
              >
                <Image
                  src={placeholder}
                  width={500}
                  height={200}
                  alt="Competition Image"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    {competition.name}
                  </h2>
                  <p className="text-gray-500 mb-4">
                    {competition.description.slice(0, 100)}
                  </p>
                  <Link href={`/kilpailut/${competition.id}`}>
                    <button className="rounded-full w-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
                      Katso tiedot
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Ei kilpailuja saatavilla.</p>
          )}
        </div>
      </div>
    </div>
  );
}
