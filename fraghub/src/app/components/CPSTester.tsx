"use client";

import { useState, useEffect } from "react";

export default function CPSTester() {
  const [clicks, setClicks] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0) setIsActive(false);
  }, [isActive, timeLeft]);

  const handleClick = () => {
    if (!isActive && timeLeft > 0) setIsActive(true);
    if (isActive) setClicks(clicks + 1);
  };

  const reset = () => {
    setClicks(0);
    setTimeLeft(5);
    setIsActive(false);
  };

  const cps = timeLeft === 0 && clicks > 0 ? (clicks / 5).toFixed(2) : 0;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-zinc-100">CPS Tester</h2>
      <button
        onClick={handleClick}
        disabled={timeLeft === 0}
        className="bg-zinc-700 hover:bg-zinc-600 transition-colors p-8 w-full h-95 rounded-md text-zinc-100 font-bold mb-4"
      >
        Clique aqui! ({clicks})
      </button>
      <div className="flex justify-center mb-4">
        <span className="text-xl border-2 border-zinc-600 rounded-md p-4 text-zinc-100">
          {timeLeft}s
        </span>
      </div>
      <p className="text-2xl font-bold text-zinc-100">CPS: {cps}</p>
      <button
        onClick={reset}
        className="mt-4 bg-zinc-700 hover:bg-zinc-600 transition-colors p-2 w-full rounded-md text-zinc-100"
      >
        Resetar
      </button>
    </div>
  );
}
