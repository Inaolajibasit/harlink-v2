import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import {
  findService,
  services,
  serviceEnquiryHref,
} from "../../content/services";
import { PageShell } from "../../components/site/page-shell";
import { PageHero } from "../../components/site/page-hero";
import { Reveal } from "../../components/site/reveal";
import { ActionLink } from "../../components/site/action-link";
import { EnquiryCTA } from "../../components/site/enquiry-cta";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findService((await params).slug);
  return service
    ? {
        title: `${service.title} | Harlink Investment`,
        description: service.description,
      }
    : { title: "Service not found | Harlink" };
}

export default async function ServicePage({ params }: Props) {
  const service = findService((await params).slug);
  if (!service) notFound();
  const enquiryHref = serviceEnquiryHref(service.slug);
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 2);
  return (
    <PageShell routeKey={service.slug}>
      <PageHero
        label={service.title}
        parent={{ label: "Services", href: "/services" }}
        title={service.title}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        caption={service.label}
        compact
        action={{ label: "Discuss this service", href: enquiryHref }}
      />
      <section className="hl-section">
        <div className="hl-container hl-detail-layout">
          <div>
            <Reveal>
              <span className="hl-eyebrow">{service.category}</span>
              <h2 className="hl-heading">{service.label}</h2>
              <p className="hl-body hl-detail-intro">{service.introduction}</p>
            </Reveal>
            <div id="scope" className="hl-detail-scope">
              <h2>What we can coordinate</h2>
              {service.scope.map((item, index) => (
                <article className="hl-info-item" key={item.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <Reveal className="hl-scope-note">
              <span className="hl-eyebrow">Scope & responsibilities</span>
              <p>{service.boundary}</p>
            </Reveal>
            <details className="hl-faq hl-detail-question">
              <summary>
                <h3>{service.question}</h3>
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{service.answer}</p>
            </details>
          </div>
          <aside className="hl-detail-aside">
            <span className="hl-eyebrow">Before we speak</span>
            <h2>A useful starting point.</h2>
            <p>Share these details so we can understand your requirement.</p>
            <ul>
              {service.inputs.map((input) => (
                <li key={input}>
                  <Check size={16} aria-hidden="true" />
                  <span>{input}</span>
                </li>
              ))}
            </ul>
            <ActionLink href={enquiryHref}>
              Enquire about this service
            </ActionLink>
            <Link className="hl-back-link" href="/services">
              View all services
            </Link>
          </aside>
        </div>
      </section>
      <section className="hl-section hl-related-section">
        <div className="hl-container">
          <Reveal className="hl-section-top">
            <span className="hl-eyebrow">Connected capabilities</span>
            <h2 className="hl-heading">
              Support around
              <br />
              the wider assignment.
            </h2>
          </Reveal>
          <div className="hl-related-grid">
            {related.map((item) => (
              <Link
                className="hl-related-card"
                href={`/services/${item.slug}`}
                key={item.slug}
              >
                <span className="hl-eyebrow">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.label}</p>
                <ArrowUpRight size={26} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <EnquiryCTA />
    </PageShell>
  );
}
