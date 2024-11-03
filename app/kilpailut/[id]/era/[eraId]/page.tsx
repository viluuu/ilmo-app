import { createClient } from "@/utils/supabase/server";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

interface RoundDetailsPageProps {
  params: {
    id: string;
    eraId: string; // id tulee merkkijonona
  };
}

async function RoundDetailsPage({ params }: RoundDetailsPageProps) {
  const eraId = Number(params.eraId);
  const supabase = createClient();

  const { data: round } = await supabase
    .from("rounds")
    .select("date, start_time, max_participants, id, registrations(*)")
    .eq("id", eraId);

  const user = await currentUser();

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

  console.log(round);

  if (!round) {
    return <div>Ladataan...</div>;
  } else
    return (
      <div>
        <div>
          <h1 className="text-3xl font-semibold mt-2 text-white">
            Erän tiedot
          </h1>
          <p className="mt-4 text-gray-300 font-mono">
            Aloitusaika: {formatDate(round[0].date)} klo.
            {formatTime(round[0].start_time)}
          </p>
          <p className="mt-2 text-gray-300 font-mono">
            Max osallistujat: {round[0].max_participants}
          </p>
          <div>
            <h2 className="text-2xl font-semibold mt-8 mb-2 text-white">
              Ilmoittautuneet
            </h2>
            {round[0].registrations.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Nimi</th>
                    <th>Seura</th>
                    <th>Ikä</th>
                    <th>Luokka</th>
                    <th>Erä</th>
                  </tr>
                </thead>
                <tbody>
                  {round[0].registrations.map((registration) => (
                    <tr key={registration.id}>
                      <td>{registration.user_name}</td>
                      <td>{registration.club}</td>
                      <td>{registration.age}</td>
                      <td>{registration.class}</td>
                      <td>{registration.round}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p> Ei ilmoittautumisia</p>
            )}
          </div>
          {!user ? (
            <div className="mt-4">
              <Link href="/kirjaudu">
                <button className="bg-slate-100 rounded-full font-mono px-6 mt-8 py-4 rounded hover:bg-green-900 transition-colors">
                  Kirjaudu sisään ilmoittautuaksesi
                </button>
              </Link>
            </div>
          ) : (
            <div className="mt-4">
              <Link href="">
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-900">
                  Ilmoittaudu {user?.fullName}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
}

export default RoundDetailsPage;
