import type { Metadata } from "next";
import { PageShell } from "../components/site/page-shell";
import { PageHero } from "../components/site/page-hero";
import { ServiceCards } from "../components/site/service-cards";
import { ExportProcess } from "../components/home/export-story";
import { EnquiryCTA } from "../components/site/enquiry-cta";
import { services } from "../content/services";

export const metadata: Metadata = {
  title: "Our Services | Harlink Investment",
  description:
    "Explore Harlink’s export agency, documentation, regulatory coordination, advisory, haulage and partner-based warehousing services.",
};

export default function ServicesPage() {
  return (
    <PageShell routeKey="services">
      <PageHero
        label="Our services"
        title="Your export."
        accent="Our focus."
        description="Export agency and documentation at the centre. Advisory, procedural coordination and cargo services around the requirement. Explore where Harlink can support your next assignment."
        action={{ label: "Discuss your requirements", href: "/contact" }}
      />
      <section className="hl-catalogue-section">
        <div className="hl-container">
          <nav className="hl-service-jumps" aria-label="Jump to a service">
            {services.map((service, index) => (
              <a href={`#${service.slug}`} key={service.slug}>
                <span>0{index + 1}</span>
                {service.title}
              </a>
            ))}
          </nav>
          <ServiceCards />
        </div>
      </section>
      <ExportProcess />
      <EnquiryCTA />
    </PageShell>
  );
}
