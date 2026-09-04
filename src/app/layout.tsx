import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Header from "@/components/header/Header";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Movie Tracker",
  description:
    "Discover popular movies, search for your favorite films, and build your watchlist",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable}  ${oswald.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
