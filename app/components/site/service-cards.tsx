import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../content/services";

export function ServiceCards() {
  return (
    <div className="hl-service-catalogue">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          id={service.slug}
          className={`hl-service-card ${index === 0 ? "hl-service-card--featured" : ""}`}
          href={`/services/${service.slug}`}
          aria-label={`Explore ${service.title}`}
        >
          <div className="hl-service-card-image">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes={
                index === 0
                  ? "(min-width: 960px) 80vw, 100vw"
                  : "(min-width: 640px) 45vw, 100vw"
              }
              quality={80}
            />
          </div>
          <div className="hl-service-card-content">
            <span className="hl-eyebrow">
              0{index + 1} / {service.category}
            </span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <span className="hl-service-card-link">
              Explore service
              <ArrowUpRight size={21} aria-hidden="true" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
