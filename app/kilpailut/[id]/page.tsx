interface CompetitionDetailsPageProps {
  params: {
    id: string; // id tulee merkkijonona
  };
}

async function CompetitionDetailsPage({ params }: CompetitionDetailsPageProps) {
  const { id } = params; // Haetaan kilpailun ID suoraan parametreista

  // Muutetaan id numeroksi vertailua varten
  const competitionId = Number(id);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fi-FI", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">{competition.name}</h2>
      <p className="mt-2">{competition.description}</p>
      <p className="mt-2">{`Alkaa: ${formatDate(competition.start_date)}`}</p>
      <p className="mt-2">{`Päättyy: ${formatDate(competition.end_date)}`}</p>
      <h3 className="text-xl font-bold mt-6 mb-3">Tulevat erät</h3>
      {rounds &&
        rounds.map((round) => (
          <div key={round.id} className="p-3 mb-4 border rounded-sm shadow">
            <h4 className="text-lg font-semibold">{round.name}</h4>
            <p>{`Päivämäärä: ${formatDate(round.date)}`}</p>
            <p>{`Alkamisaika: ${round.time}`}</p>
          </div>
        ))}
      <h3 className="text-xl font-bold mt-6">Menneet erät</h3>
    </div>
  );
}

export default CompetitionDetailsPage;
