import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import ClearThemeStorage from "@/components/clear-theme-storage";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yahweh's Touch Barbershop | Lakeland, Florida",
  description:
    "Professional barbershop services in Lakeland, Florida. Look Sharp, Feel Confident.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                // Remove any previously saved theme
                localStorage.removeItem('theme');
                
                // Check system preference and apply it immediately
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Listen for system theme changes
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
                  if (e.matches) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                });
              } catch (e) {
                console.error('Theme initialization error:', e);
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ClearThemeStorage />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
