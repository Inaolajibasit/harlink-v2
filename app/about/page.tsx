import type { Metadata } from "next";
import { ArrowUpRight, FileCheck2, Truck, Warehouse } from "lucide-react";
import { PageShell } from "../components/site/page-shell";
import { PageHero } from "../components/site/page-hero";
import { Reveal } from "../components/site/reveal";
import { EnquiryCTA } from "../components/site/enquiry-cta";
import { ActionLink } from "../components/site/action-link";

export const metadata: Metadata = {
  title: "About Harlink | Export Agency & Trade Facilitation",
  description:
    "Understand Harlink’s export-first operating model: agency coordination, advisory, company-owned trucking and partner-arranged warehousing.",
};

const values = [
  {
    title: "Clarity in the scope.",
    body: "Start with the requirement. Understand what needs to be done and agree the support relevant to the assignment.",
  },
  {
    title: "Attention to the details.",
    body: "Keep documentation, procedures and outstanding steps connected to the wider export plan.",
  },
  {
    title: "Coordination that connects.",
    body: "Bring clients and the relevant parties into a practical conversation about the work ahead.",
  },
];

export default function AboutPage() {
  return (
    <PageShell routeKey="about">
      <PageHero
        label="About Harlink"
        title="The work behind"
        accent="every export."
        description="Harlink Investment Ltd. is an export-focused agency and trade facilitation business in Nigeria. We connect documentation, procedural coordination and supporting cargo services around an agreed requirement."
        image="/terminal1.jpg"
        imageAlt="Aerial view of containers, a vessel and port handling equipment"
        caption="Preparation. Coordination. Practical follow-through."
        action={{ label: "Explore our services", href: "/services" }}
      />
      <section className="hl-section">
        <div className="hl-container">
          <Reveal className="hl-editorial-grid">
            <div className="hl-section-label">
              <span className="hl-section-index">01 /</span>
              <span className="hl-eyebrow">Our focus</span>
            </div>
            <div>
              <h2 className="hl-heading">
                An export is a connected effort.
                <br />
                <span className="hl-muted-heading">
                  We help bring it together.
                </span>
              </h2>
              <div className="hl-inner-prose">
                <p>
                  Moving goods is one part of an export. Documents, applicable
                  procedures, service providers and cargo arrangements also need
                  to line up. Harlink’s primary role is to coordinate that
                  practical and administrative work on behalf of clients.
                </p>
                <p>
                  We discuss what your operation needs, agree the scope and
                  support the relevant steps. Export advisory, company-owned
                  trucks and partner-arranged warehousing provide supporting
                  capabilities where the assignment calls for them.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="hl-section hl-inner-dark">
        <div className="hl-container">
          <Reveal className="hl-section-top">
            <div className="hl-section-label">
              <span className="hl-section-index">02 /</span>
              <span className="hl-eyebrow">Our operating model</span>
            </div>
            <h2 className="hl-heading">
              Different capabilities.
              <br />
              One export-first perspective.
            </h2>
          </Reveal>
          <div className="hl-capability-cards">
            {[
              {
                icon: FileCheck2,
                title: "Agency at the core",
                label: "Documentation & coordination",
                body: "The administrative and procedural work behind exports sits at the centre of our offer.",
              },
              {
                icon: Truck,
                title: "Trucks we own",
                label: "Supporting cargo movement",
                body: "Company-owned trucks support agreed movements of goods and containers.",
              },
              {
                icon: Warehouse,
                title: "Storage we coordinate",
                label: "Through partner arrangements",
                body: "Warehousing is arranged through partners when storage is needed; Harlink does not own the facilities.",
              },
            ].map(({ icon: Icon, title, label, body }) => (
              <article className="hl-value-card" key={title}>
                <Icon size={30} strokeWidth={1.25} aria-hidden="true" />
                <span className="hl-eyebrow">{label}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="hl-section">
        <div className="hl-container">
          <Reveal className="hl-section-top">
            <div className="hl-section-label">
              <span className="hl-section-index">03 /</span>
              <span className="hl-eyebrow">Our approach</span>
            </div>
            <div className="hl-section-heading-row">
              <h2 className="hl-heading">
                Practical by nature.
                <br />
                Focused on the details.
              </h2>
              <p className="hl-body">
                A clear assignment starts with understanding the work and the
                responsibilities involved.
              </p>
            </div>
          </Reveal>
          <div className="hl-values-grid">
            {values.map((value, index) => (
              <article className="hl-value-card" key={value.title}>
                <span className="hl-value-number">0{index + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="hl-section hl-team-invitation">
        <div className="hl-container">
          <Reveal className="hl-team-invitation-inner">
            <ArrowUpRight size={56} strokeWidth={1} aria-hidden="true" />
            <div>
              <span className="hl-eyebrow">A conversation with the team</span>
              <h2 className="hl-heading">
                Let’s understand
                <br />
                your next move.
              </h2>
              <p className="hl-body">
                Tell us about your business, your cargo and the support you
                need. We’ll discuss where Harlink can help.
              </p>
              <ActionLink href="/contact">Talk to Harlink</ActionLink>
            </div>
          </Reveal>
        </div>
      </section>
      <EnquiryCTA />
    </PageShell>
  );
}
