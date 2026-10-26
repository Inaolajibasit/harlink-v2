import Image from "next/image";
import { Plus } from "lucide-react";
import { ActionLink } from "../site/action-link";
import { Reveal } from "../site/reveal";
import { services, serviceEnquiryHref } from "../../content/services";

export function ExportServices() {
  return (
    <section
      id="services"
      className="hl-section hl-services"
      aria-labelledby="services-heading"
    >
      <div className="hl-container">
        <Reveal className="hl-section-top">
          <div className="hl-section-label">
            <span className="hl-section-index">02 /</span>
            <span className="hl-eyebrow">What we do</span>
          </div>
          <div className="hl-section-heading-row">
            <h2 id="services-heading" className="hl-heading">
              Your export.
              <br />
              Our focus.
            </h2>
            <p className="hl-body">
              The right support, where it matters.
              <br />
              From the first document to the practical work of moving goods.
            </p>
          </div>
        </Reveal>
        <div className="hl-services-grid">
          <div className="hl-service-list">
            {services.map((service, i) => (
              <details
                key={service.id}
                id={service.id}
                className="hl-service"
                open={i === 0}
              >
                <summary>
                  <span className="hl-service-number">0{i + 1}</span>
                  <h3>{service.title}</h3>
                  <span className="hl-service-toggle">
                    <Plus size={20} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                </summary>
                <div className="hl-service-body">
                  <p className="hl-service-label">{service.label}</p>
                  <p>{service.description}</p>
                  <ul className="hl-service-tags" aria-label="Service scope">
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="hl-service-actions">
                    <ActionLink
                      href={`/services/${service.slug}`}
                      variant="text"
                    >
                      Explore service
                    </ActionLink>
                    <ActionLink
                      href={serviceEnquiryHref(service.slug)}
                      variant="text"
                    >
                      Discuss this service
                    </ActionLink>
                  </div>
                </div>
              </details>
            ))}
          </div>
          <figure className="hl-services-media">
            <Image
              src="/bg-29.jpg"
              alt="Stacked shipping containers ready for cargo operations"
              fill
              sizes="(min-width: 960px) 40vw, 100vw"
              quality={80}
            />
            <figcaption>
              <span className="hl-eyebrow">Prepared. Coordinated. Moving.</span>
              <p>
                Good execution
                <br />
                starts with the details.
              </p>
              <span className="hl-media-caption-line" />
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
