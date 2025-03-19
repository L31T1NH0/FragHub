"use client";

import { useState } from "react";

export default function WLRCalculator() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const wlr = losses === 0 ? wins : (wins / losses).toFixed(2);

    const reset = () => {
      setWins(0);
      setLosses(0);
    };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-zinc-100">
        WLR Calculator
      </h2>
      <small className="text-zinc-300 mb-2 block">Wins</small>
      <input
        type="text"
        placeholder="Wins"
        className="w-full mb-4 p-2 bg-zinc-700 rounded-md text-zinc-100"
        value={wins}
        onChange={(e) => setWins(Number(e.target.value))}
      />
      <small className="text-zinc-300 mb-2 block">Losses</small>
      <input
        type="text"
        placeholder="Losses"
        className="w-full mb-4 p-2 bg-zinc-700 rounded-md text-zinc-100"
        value={losses}
        onChange={(e) => setLosses(Number(e.target.value))}
      />
      <p className="mb-4 text-2xl font-bold text-zinc-100">WLR: {wlr}</p>
      <button
        onClick={reset}
        className="bg-zinc-700 hover:bg-zinc-600 transition-colors px-2 py-1 rounded-md text-zinc-100 text-sm"
      >
        Resetar
      </button>
    </div>
  );
}
