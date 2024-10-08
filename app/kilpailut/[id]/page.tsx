import { getRounds, getCompetitonID } from "@/app/actions";
import Link from "next/link";

interface CompetitionDetailsPageProps {
  params: {
    id: string; // id tulee merkkijonona
  };
}

async function CompetitionDetailsPage({ params }: CompetitionDetailsPageProps) {
  const id = Number(params.id);
  const rounds = await getRounds(id);
  const competition = (await getCompetitonID(id))[0];
  // Muutetaan id numeroksi vertailua varten

  console.log(competition);
  console.log(rounds);

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

  return (
    <div>
      <h2 className="text-2xl font-bold">{competition.name}</h2>
      <p className="mt-2">{competition.description}</p>
      <p className="mt-2">{`Kilpailu alkaa: ${formatDate(
        competition.start_date
      )}`}</p>
      <p className="mt-2">{`Kilpailu päättyy: ${formatDate(
        competition.end_date
      )}`}</p>
      <h3 className="text-xl font-bold mt-6 mb-3">Tulevat erät</h3>
      {rounds &&
        rounds.map((round) => (
          <div
            key={round.date}
            className="p-4 mb-4 border rounded-lg shadow-lg flex flex-col relative bg-white"
          >
            <h4 className="text-lg font-semibold mb-2">{`${formatDate(
              round.date
            )}`}</h4>
            <p className="mb-1">{`Klo. ${formatTime(round.time)}`}</p>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Link href={`/kilpailut/${competition.id}/erat/${round.id}`}>
                <button className="rounded-full border border-solid border-black/[.08] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] hover:border-transparent text-sm h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
                  Avaa →
                </button>
              </Link>
            </div>
          </div>
        ))}
      <h3 className="text-xl font-bold mt-6">Menneet erät</h3>
    </div>
  );
}

export default CompetitionDetailsPage;
