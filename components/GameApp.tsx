"use client";

import dynamic from "next/dynamic";

const Game = dynamic(() => import("@/App"), { ssr: false });

export default function GameApp() {
  return <Game />;
}
