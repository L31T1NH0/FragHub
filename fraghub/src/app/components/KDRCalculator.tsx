"use client";

import { useState } from "react";

export default function KDRCalculator() {
  const [kills, setKills] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [assists, setAssists] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const kdr = deaths === 0 ? kills : (kills / deaths).toFixed(2);
  const kda =
    deaths === 0 ? kills + assists : ((kills + assists) / deaths).toFixed(2);

  const reset = () => {
    setKills(0);
    setDeaths(0);
    setAssists(0);
    setShowMore(false);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-zinc-100">
        KDR Calculator
      </h2>
      <small className="text-zinc-300 mb-2 block">kills</small>
      <input
        type="text"
        placeholder="Kills"
        className="w-full mb-4 p-2 bg-zinc-700 rounded-md text-zinc-100"
        value={kills}
        onChange={(e) => setKills(Number(e.target.value))}
      />
      <small className="text-zinc-300 mb-2 block">deaths</small>
      <input
        type="text"
        placeholder="Deaths"
        className="w-full mb-4 p-2 bg-zinc-700 rounded-md text-zinc-100"
        value={deaths}
        onChange={(e) => setDeaths(Number(e.target.value))}
      />
      <p className="text-2xl font-bold text-zinc-100 mb-4">KDR: {kdr}</p>

      {/* Botão Ver Mais */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="bg-zinc-700 hover:bg-zinc-600 transition-colors px-4 py-2 rounded-md text-zinc-100 mb-4 w-full"
      >
        {showMore ? "Ver menos" : "Ver mais"}
      </button>

      {/* Seção de assistências (KDA) */}
      {showMore && (
        <div>
          <small className="text-zinc-300 mb-2 block">assistências</small>
          <input
            type="number"
            placeholder="Assists"
            className="w-full mb-4 p-2 bg-zinc-700 rounded-md text-zinc-100"
            value={assists}
            onChange={(e) => setAssists(Number(e.target.value))}
          />
          <p className="text-2xl font-bold text-zinc-100 mb-4">KDA: {kda}</p>
        </div>
      )}

      {/* Botão Reset */}
      <button
        onClick={reset}
        className="bg-zinc-700 hover:bg-zinc-600 transition-colors px-2 py-1 rounded-md text-zinc-100 text-sm"
      >
        Resetar
      </button>
    </div>
  );
}
