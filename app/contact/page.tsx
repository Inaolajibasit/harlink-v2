import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Phone, Plus } from "lucide-react";
import { PageShell } from "../components/site/page-shell";
import { PageHero } from "../components/site/page-hero";
import { ExportEnquiryForm } from "../components/contact/export-enquiry-form";
import { Reveal } from "../components/site/reveal";
import { services } from "../content/services";
import { exportFAQs } from "../content/home";
import { companyContact } from "../content/company";

export const metadata: Metadata = {
  title: "Contact Harlink | Discuss Your Export",
  description:
    "Tell Harlink about your export requirement, commodity and the documentation, coordination or cargo services you need.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const requested = (await searchParams).service;
  const initialService =
    services.find((service) => service.slug === requested)?.slug ?? "not-sure";
  return (
    <PageShell routeKey="contact">
      <PageHero
        label="Contact Harlink"
        title="Your next export."
        accent="Let’s talk."
        description="Tell us what you’re exporting, where you are in the process and the support you need. We’ll discuss the work relevant to your requirement."
      />
      <section className="hl-contact-section">
        <div className="hl-container hl-contact-layout">
          <ExportEnquiryForm
            key={initialService}
            initialService={initialService}
            serviceOptions={services.map(({ slug, title }) => ({
              slug,
              title,
            }))}
          />
          <aside className="hl-contact-aside">
            <article className="hl-contact-direct">
              <Mail size={28} strokeWidth={1.25} aria-hidden="true" />
              <span className="hl-eyebrow">Direct contact</span>
              <h2>Let’s connect.</h2>
              <p>Send your export requirement by email, or call the team.</p>
              <a href={`mailto:${companyContact.email}`}>
                {companyContact.email}
              </a>
              <div className="hl-contact-phone-list">
                <Phone size={17} aria-hidden="true" />
                <div>
                  {companyContact.phones.map((phone) => (
                    <a key={phone.href} href={phone.href}>
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hl-contact-office">
                <MapPin size={17} aria-hidden="true" />
                <p>{companyContact.address}</p>
              </div>
              <span className="hl-contact-country">
                Export agency & trade facilitation · Nigeria
              </span>
            </article>
            <article className="hl-contact-prompt">
              <span className="hl-eyebrow">A useful starting point</span>
              <h2>
                The details that
                <br />
                shape the conversation.
              </h2>
              <ol>
                <li>
                  <span>01</span>What you plan to export
                </li>
                <li>
                  <span>02</span>Approximate quantity and destination
                </li>
                <li>
                  <span>03</span>The help you need from Harlink
                </li>
              </ol>
              <p>Still deciding? Tell us what you know so far.</p>
            </article>
            <figure className="hl-contact-image">
              <Image
                src="/terminal1.jpg"
                alt="Aerial view of cargo containers and handling equipment"
                fill
                sizes="(min-width: 960px) 32vw, 100vw"
                quality={80}
              />
            </figure>
          </aside>
        </div>
      </section>
      <section className="hl-section hl-questions">
        <div className="hl-container hl-faq-grid">
          <Reveal className="hl-faq-intro">
            <span className="hl-eyebrow">Before you get in touch</span>
            <h2 className="hl-heading">
              A few useful
              <br />
              answers.
            </h2>
            <p className="hl-body">
              Not every detail needs to be decided before your first enquiry.
            </p>
          </Reveal>
          <div className="hl-faq-list">
            {exportFAQs.slice(1, 4).map((item) => (
              <details className="hl-faq" key={item.question}>
                <summary>
                  <h3>{item.question}</h3>
                  <Plus size={19} aria-hidden="true" />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
