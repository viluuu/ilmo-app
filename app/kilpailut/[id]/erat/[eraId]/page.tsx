import { getRoundID } from "@/app/actions";

interface RoundDetailsPageProps {
  params: {
    id: string; // id tulee merkkijonona
  };
}

async function RoundDetailsPage({ params }: RoundDetailsPageProps) {
  const id = Number(params.id);
  const data = await getRoundID(id);
  console.log(data);

  return (
    <div>
      <p>Ei mitään</p>
    </div>
  );
}

export default RoundDetailsPage;
