import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./inner-pages.css";
import "./opening-sequence.css";
import { OpeningSequence } from "./components/site/opening-sequence";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harlink Investment | Export Agency & Trade Facilitation",
  description:
    "Harlink supports businesses exporting from Nigeria through export documentation, regulatory coordination, advisory and supporting cargo logistics.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Harlink Investment | Export Agency & Trade Facilitation",
    description:
      "The work behind every export. Documentation, coordination and supporting cargo services for exports from Nigeria.",
    siteName: "Harlink Investment",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${jakarta.variable} antialiased`}>
        <OpeningSequence />
        {children}
      </body>
    </html>
  );
}
