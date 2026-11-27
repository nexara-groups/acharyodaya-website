import type { ReactNode } from "react";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import { generateMetadata } from "@shared/seo";
import { ThemeDock } from "@/modules/wireframes/presentation/theme/ThemeDock";
import { THEME_INIT_SCRIPT } from "@/modules/wireframes/presentation/theme/theme-config";
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
    "Interactive 8-page B2B agricultural export website prototypes for Acharyodaya — The Rise of Excellence. Light and dark themes with a live accent colour picker.",
  path: "",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${cinzel.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>
        {children}
        <ThemeDock />
      </body>
    </html>
  );
}
