// components/RoundDetails.tsx
"use client";

import { useState } from "react";

interface RoundDetailsProps {
  round: {
    id: number;
    formattedDate: string; // Valmiiksi muotoiltu päivämäärä
    formattedTime: string; // Valmiiksi muotoiltu aika
    max_participants: number;
    registrations: Array<{ id: number; user_name: string }>; // Määrittele tarkempi rekisteröityneiden tietorakenne tarvittaessa
  };
  competitionId: number;
}

export default function RoundDetails({ round }: RoundDetailsProps) {
  const [showRegistrations, setShowRegistrations] = useState(false);

  const toggleRegistrations = () => {
    setShowRegistrations(!showRegistrations);
  };

  return (
    <li className="py-6">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-xl font-mono pb-2 font-bold text-gray-800">
            {round.formattedDate}
          </h4>
          <p className="font-mono text-gray-600">
            Aloitusaika: {round.formattedTime}
          </p>
          <p className="font-mono text-gray-600">
            Osallistujat: {round.registrations.length} /{" "}
            {round.max_participants}
          </p>
          <p className="font-mono text-gray-600">Jonossa: 1</p>
        </div>
        <button
          onClick={toggleRegistrations}
          className={
            "font-mono rounded-full border border-gray-300 text-gray-800 transition-colors py-2 px-4 hover:bg-gray-100 hover:border-green-800" +
            (showRegistrations
              ? "animate transition-transform -rotate-90"
              : " animate transition-transform rotate-90")
          }
        >
          →
        </button>
      </div>

      {showRegistrations && (
        <ul className="mt-4 bg-gray-50 border rounded-lg p-4">
          <h5 className="text-lg font-bold mb-2">Ilmoittautuneet pelaajat:</h5>
          {round.registrations.length > 0 ? (
            round.registrations.map((registration) => (
              <li key={registration.id} className="font-mono text-gray-700">
                {round.registrations.indexOf(registration) + 1}.{" "}
                {registration.user_name}
              </li>
            ))
          ) : (
            <p className="text-gray-500">Ei rekisteröityneitä pelaajia.</p>
          )}
        </ul>
      )}
    </li>
  );
}
