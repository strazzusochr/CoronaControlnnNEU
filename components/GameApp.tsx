"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Game = dynamic(() => import("@/App"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      Loading game...
    </div>
  ),
});

export default function GameApp() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Suppress the wasm-bindgen deprecation warning from Rapier WASM init
    const origWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("deprecated parameters for the initialization function")
      ) {
        return;
      }
      origWarn.apply(console, args);
    };

    setMounted(true);

    return () => {
      console.warn = origWarn;
    };
  }, []);

  if (!mounted) return null;

  return <Game />;
}
