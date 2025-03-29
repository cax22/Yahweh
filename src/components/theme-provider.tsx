"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// Clear previous theme from localStorage (hidden component)
function ThemeClearer() {
  React.useEffect(() => {
    try {
      // Remove any previously stored theme to start fresh
      localStorage.removeItem("theme");
    } catch (e) {
      console.error("Failed to clear theme storage:", e);
    }
  }, []);

  return null;
}

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
      storageKey="theme"
      {...props}
    >
      <ThemeClearer />
      {children}
    </NextThemesProvider>
  );
}
