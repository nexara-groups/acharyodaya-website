import type { ReactNode } from "react";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import { generateMetadata } from "@shared/seo";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = generateMetadata({
  title: "Acharyodaya — Multi-Page Website Prototypes",
  description:
    "Interactive 8-page B2B agricultural export website prototypes for Acharyodaya (Connecting Farms to the World), built on Nexara Foundation V1.",
  path: "",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
