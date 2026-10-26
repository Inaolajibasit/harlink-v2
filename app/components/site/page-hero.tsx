import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { ActionLink } from "./action-link";

type PageHeroProps = {
  label: string;
  title: string;
  accent?: string;
  description: string;
  parent?: { label: string; href: string };
  image?: string;
  imageAlt?: string;
  caption?: string;
  action?: { label: string; href: string };
  compact?: boolean;
};

export function PageHero({
  label,
  title,
  accent,
  description,
  parent,
  image,
  imageAlt = "Cargo operations at a container terminal",
  caption,
  action,
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`hl-inner-hero ${compact ? "hl-inner-hero--compact" : ""}`}
      aria-labelledby="page-heading"
    >
      <div className="hl-container">
        <nav className="hl-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight size={12} aria-hidden="true" />
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <ChevronRight size={12} aria-hidden="true" />
            </>
          )}
          <span aria-current="page">{label}</span>
        </nav>
        <div className="hl-inner-heading" data-inner-heading>
          <span className="hl-eyebrow">
            <span className="hl-status-dot" />
            {label}
          </span>
          <div className="hl-inner-heading-grid">
            <h1 id="page-heading">
              {title}
              {accent && <span>{accent}</span>}
            </h1>
            <div className="hl-inner-lead">
              <p>{description}</p>
              {action && (
                <ActionLink href={action.href} variant="text">
                  {action.label}
                </ActionLink>
              )}
            </div>
          </div>
        </div>
        {image && (
          <figure className="hl-inner-cover">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1392px) calc(100vw - 80px), 1280px"
              quality={85}
            />
            {caption && (
              <figcaption>
                <ArrowUpRight size={30} strokeWidth={1.25} aria-hidden="true" />
                <span>{caption}</span>
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  );
}
