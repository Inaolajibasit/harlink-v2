import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Golos_Text,
} from "next/font/google";
import "./globals.css";
import { icons } from "lucide-react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const golosText = Golos_Text({
  variable: "--font-golos-text",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Add favicon to metadata


export const metadata: Metadata = {
  title: "Harlink Investment – Freight Forwarding & Logistics Experts in Lagos",
  description:
    "Harlink Investment offers top-tier freight forwarding, customs clearance, and logistics solutions across Nigeria. Based in Apapa Port, Lagos.",
  icons: {
    icon: "/favicon.svg",
  }, 
  keywords: [
    "freight forwarding",
    "customs clearance",
    "logistics Nigeria",
    "shipping company Lagos",
    "import export Lagos",
    "Ept Export processing terminal",  
    "shipping", 
    "Harlink", 
    "cargo", 
    "Nigeria"
  ],
  openGraph: {
    title: "Harlink Investment – Freight Forwarding & Logistics Experts",
    description:
      "Reliable logistics and freight forwarding services from Apapa Port, Lagos. Trusted by businesses across Nigeria.",
    url: "https://harlinkinvestment.com",
    siteName: "Harlink Investment",
    images: [
      {
        url: "/bg1.jpg", // Create a custom image in public folder
        width: 1200,
        height: 630,
        alt: "Harlink Investment – Logistics Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
