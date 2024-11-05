// components/RoundDetails.tsx
"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useRef, useEffect } from "react";
import ConfirmationModal from "./ConfirmationModal";
import Link from "next/link";

interface RoundDetailsProps {
  round: {
    id: number;
    formattedDate: string;
    formattedTime: string;
    max_participants: number;
    registrations: Array<{ id: number; user_name: string }>;
  };
  competitionId: number;
  competitionName: string;
}

export default function RoundDetails({
  round,
  competitionName,
}: RoundDetailsProps) {
  const [showRegistrations, setShowRegistrations] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    setHeight(
      showRegistrations ? `${contentRef.current?.scrollHeight}px` : "0px"
    );
  }, [showRegistrations]);

  const toggleRegistrations = () => {
    setShowRegistrations(!showRegistrations);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmRegistration = () => {
    console.log("Registration confirmed for round", round.id);
    // Add registration logic here (e.g., API call)
  };

  return (
    <li className="py-6 font-mono">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleRegistrations}
      >
        <div>
          <h4 className="text-xl pb-2 font-bold text-gray-800">
            {round.formattedDate}
          </h4>
          <p className="text-gray-600">Aloitusaika: {round.formattedTime}</p>
          <p className="text-gray-600">
            Osallistujat: {round.registrations.length} /{" "}
            {round.max_participants}
          </p>
          <p className="text-gray-600">Jonossa: 1</p>
        </div>
        <button
          className={
            "rounded-full border border-gray-300 text-gray-800 transition-transform duration-300 py-2 px-4 hover:bg-gray-100 hover:border-green-800" +
            (showRegistrations ? " -rotate-90" : " rotate-90")
          }
        >
          →
        </button>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: height }}
      >
        <ul className="mt-4 bg-gray-50 border rounded-lg p-4">
          <h5 className="text-lg font-bold mb-2">Ilmoittautuneet pelaajat:</h5>
          {round.registrations.length > 0 ? (
            round.registrations.map((registration) => (
              <li key={registration.id} className="text-gray-700">
                {round.registrations.indexOf(registration) + 1}.{" "}
                {registration.user_name}
              </li>
            ))
          ) : (
            <p className="text-gray-500">Ei rekisteröityneitä pelaajia.</p>
          )}
          {isSignedIn ? (
            <button
              onClick={handleOpenModal}
              className="mt-5 rounded-full border border-gray-300 text-gray-800 transition-transform duration-300 py-2 px-4 hover:bg-gray-100 hover:border-green-800"
            >
              Ilmoittaudu
            </button>
          ) : (
            <Link href="/kirjaudu">
              <button className="mt-5 rounded-full border border-gray-300 text-gray-800 transition-transform duration-300 py-2 px-4 hover:bg-gray-100 hover:border-green-800">
                Kirjaudu sisään ilmoittautuaksesi
              </button>
            </Link>
          )}
        </ul>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmRegistration}
        competitionName={competitionName}
        roundDate={round.formattedDate}
        roundTime={round.formattedTime}
      />
    </li>
  );
}
