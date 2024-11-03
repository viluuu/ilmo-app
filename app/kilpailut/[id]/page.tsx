import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

interface CompetitionDetailsPageProps {
  params: {
    id: string; // id tulee merkkijonona
  };
}

async function CompetitionDetailsPage({ params }: CompetitionDetailsPageProps) {
  const id = Number(params.id);

  const supabase = createClient();

  const { data: competition } = await supabase
    .from("competitions")
    .select(
      "id, name, short_description, start_date, end_date, rounds(id, date, start_time)"
    )
    .eq("id", id);
  // Muutetaan id numeroksi vertailua varten

  console.log(competition);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const formattedDate = new Intl.DateTimeFormat("fi-FI", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      return "Invalid time";
    }
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  if (!competition) {
    return <div>Kilpailua ei löytynyt</div>;
  } else
    return (
      <div>
        <h2 className="text-5xl text-white font-bold my-6">
          {competition[0].name}
        </h2>
        <p className="mt-2 text-gray-200">{competition[0].short_description}</p>
        <p className="mt-2 text-gray-200">{`Kilpailu alkaa: ${formatDate(
          competition[0].start_date
        )}`}</p>
        <p className="mt-2 text-gray-200">{`Kilpailu päättyy: ${formatDate(
          competition[0].end_date
        )}`}</p>
        <h3 className="text-2xl font-bold mt-6 mb-3 text-white">
          Tulevat erät
        </h3>
        {competition[0].rounds.map((round) => (
          <div
            key={round.date}
            className="p-4 mb-4 border rounded-lg shadow-lg flex flex-col relative "
          >
            <h4 className="text-lg font-semibold mb-2">{`${formatDate(
              round.date
            )}`}</h4>
            <p className="mb-1">{`Klo. ${formatTime(round.start_time)}`}</p>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Link href={`/kilpailut/${competition[0].id}/era/${round.id}`}>
                <button className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
                  Avaa →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
}

export default CompetitionDetailsPage;
