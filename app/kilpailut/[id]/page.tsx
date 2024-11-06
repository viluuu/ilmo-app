// app/competitions/[id]/page.tsx
import { createClient } from "@/utils/supabase/server";

import RoundDetails from "@/app/components/RoundDetails";

interface CompetitionDetailsPageProps {
  params: {
    id: string;
  };
}

async function CompetitionDetailsPage({ params }: CompetitionDetailsPageProps) {
  const id = Number(params.id);

  const supabase = createClient();

  const { data: competition } = await supabase
    .from("competitions")
    .select(
      "id, name, short_description, start_date, end_date, rounds(id, date, start_time, max_participants, registrations(*))"
    )
    .eq("id", id)
    .single();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }
    const formattedDate = Intl.DateTimeFormat("fi-FI", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return !isNaN(hours) && !isNaN(minutes)
      ? `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}`
      : "Invalid time";
  };

  if (!competition) {
    return <div>Kilpailua ei löytynyt</div>;
  }

  // Format dates and times in rounds data
  const formattedRounds = competition.rounds.map((round) => ({
    ...round,
    formattedDate: formatDate(round.date),
    formattedTime: formatTime(round.start_time),
  }));

  return (
    <div className="py-2 md:py-10">
      <header className="flex flex-col md:flex-row text-start mb-14">
        <div className="md:w-2/3">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mt-8 pb-6">
            {competition.name}
          </h1>
          <p className="font-mono text-gray-300">
            {competition.short_description}
          </p>
          <p className="mt-8 font-mono text-white">
            Kilpailu alkaa: {formatDate(competition.start_date)}
          </p>
          <p className="mt-2 font-mono text-white">
            Kilpailu päättyy: {formatDate(competition.end_date)}
          </p>
        </div>
      </header>

      <h3 className="text-3xl font-bold mt-6 mb-6 text-white">Tulevat erät</h3>

      {formattedRounds.length === 0 ? (
        <div>Ei eriä</div>
      ) : (
        <ul className="bg-slate-100 rounded-lg px-6 divide-y divide-gray-300">
          {formattedRounds.map((round) => (
            <RoundDetails
              key={round.id}
              round={round}
              competitionId={competition.id}
              competitionName={competition.name}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompetitionDetailsPage;
