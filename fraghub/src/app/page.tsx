"use client";

import { useState } from "react";
import KDRCalculator from "./components/KDRCalculator";
import WLRCalculator from "./components/WLRCalculator";
import CPSTester from "./components/CPSTester";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"KDR" | "WLR" | "CPS">("KDR");

  const renderContent = () => {
    switch (activeTab) {
      case "KDR":
        return <KDRCalculator />;
      case "WLR":
        return <WLRCalculator />;
      case "CPS":
        return <CPSTester />;
      default:
        return <KDRCalculator />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center p-4 gap-6">
      {/* Navbar em container arredondado */}
      <div className="bg-zinc-800 text-zinc-100 rounded-md shadow-md w-full max-w-md p-4">
        <nav className="flex justify-around">
          <button
            onClick={() => setActiveTab("KDR")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "KDR"
                ? "bg-zinc-600 text-zinc-100"
                : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
            } transition-colors`}
          >
            KDR
          </button>
          <button
            onClick={() => setActiveTab("WLR")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "WLR"
                ? "bg-zinc-600 text-zinc-100"
                : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
            } transition-colors`}
          >
            WLR
          </button>
          <button
            onClick={() => setActiveTab("CPS")}
            className={`px-4 py-2 rounded-md ${
              activeTab === "CPS"
                ? "bg-zinc-600 text-zinc-100"
                : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
            } transition-colors`}
          >
            CPS
          </button>
        </nav>
      </div>

      {/* Conteúdo em outro container */}
      <div className="bg-zinc-800 text-zinc-100 rounded-md shadow-md w-full max-w-md p-6">
        {renderContent()}
      </div>
    </div>
  );
}
