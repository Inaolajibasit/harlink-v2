import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ExportHero } from "./components/home/export-hero";
import {
  CompanyIntroduction,
  OperatingModel,
  ExportProcess,
} from "./components/home/export-story";
import { ExportServices } from "./components/home/export-services";
import { ExportQuestions } from "./components/home/export-questions";
import { EnquiryCTA } from "./components/site/enquiry-cta";
import { HomepageMotion } from "./components/site/homepage-motion";

export const metadata: Metadata = {
  title: "Harlink Investment | Export Agency & Trade Facilitation",
  description:
    "Export documentation, regulatory coordination, advisory and supporting cargo logistics for businesses exporting from Nigeria.",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomepageMotion>
        <main id="main-content" className="hl-home" tabIndex={-1}>
          <ExportHero />
          <CompanyIntroduction />
          <ExportServices />
          <OperatingModel />
          <ExportProcess />
          <ExportQuestions />
          <EnquiryCTA />
        </main>
        <Footer />
      </HomepageMotion>
    </>
  );
}
