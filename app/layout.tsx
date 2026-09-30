import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Arya Saputra — Portfolio",
  description: "Personal portfolio of Arya Saputra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try {
              const savedTheme = localStorage.getItem("portfolio-theme");
              document.documentElement.dataset.theme =
                savedTheme === "light" || savedTheme === "dark"
                  ? savedTheme
                  : window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
            } catch {
              document.documentElement.dataset.theme =
                window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light";
            }`,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}