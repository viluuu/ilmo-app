// components/ConfirmationModal.tsx
import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  competitionName: string;
  roundDate: string;
  roundTime: string;
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  competitionName,
  roundDate,
  roundTime,
}: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 font-sans">
          Vahvista ilmoittautuminen
        </h2>
        <p className="text-gray-700 mb-4">
          Kilpailu: <span className="font-semibold">{competitionName}</span>
        </p>
        <p className="text-gray-700 mb-4">
          Päivämäärä: <span className="font-semibold">{roundDate}</span>
        </p>
        <p className="text-gray-700 mb-4">
          Aloitusaika: <span className="font-semibold">{roundTime}</span>
        </p>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Monta sarjaa heität?
          </label>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 rounded bg-green-800 text-white hover:bg-green-400 font-mono"
              onClick={() => console.log("Selected 3 series")}
            >
              3
            </button>
            <button
              className="px-4 py-2 rounded bg-green-800 text-white hover:bg-green-400 font-mono"
              onClick={() => console.log("Selected 6 series")}
            >
              6
            </button>
          </div>
        </div>
        <p className="text-gray-700 mb-6">
          Haluatko varmasti ilmoittautua tähän kilpailuun?
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 font-mono"
          >
            Peruuta
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 rounded bg-green-800 text-white hover:bg-green-700 font-mono"
          >
            Vahvista
          </button>
        </div>
      </div>
    </div>
  );
}
