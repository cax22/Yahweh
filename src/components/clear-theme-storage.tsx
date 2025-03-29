"use client";

import { useEffect } from "react";

export default function ClearThemeStorage() {
  useEffect(() => {
    // Get all localStorage keys
    const keys = Object.keys(localStorage);

    // Find and remove any theme-related keys
    keys.forEach((key) => {
      if (key === "theme" || key.includes("theme")) {
        console.log("Removing theme key from localStorage:", key);
        localStorage.removeItem(key);
      }
    });

    console.log("Theme preferences cleared");
  }, []);

  return null;
}
