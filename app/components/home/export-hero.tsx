import Image from "next/image";
import {
  ArrowDown,
  FileCheck2,
  Truck,
  Warehouse,
  Workflow,
} from "lucide-react";
import { ActionLink } from "../site/action-link";

const capabilities = [
  { icon: FileCheck2, label: "Export documentation" },
  { icon: Workflow, label: "Regulatory coordination" },
  { icon: Truck, label: "Owned-truck haulage" },
  { icon: Warehouse, label: "Partner-based storage" },
];

export function ExportHero() {
  return (
    <section aria-labelledby="hero-heading" className="hl-hero-section">
      <div className="hl-container hl-hero-kicker">
        <span className="hl-eyebrow">
          <span className="hl-status-dot" />
          Export agency & trade facilitation
        </span>
        <span className="hl-hero-location">
          Based in Nigeria. Built around your export.
        </span>
      </div>
      <div className="hl-hero">
        <Image
          src="/bg-42.jpg"
          alt="Shipping containers arranged at a cargo terminal"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="hl-hero-image"
        />
        <div className="hl-hero-scrim" />
        <div className="hl-container hl-hero-content">
          <div className="hl-hero-copy">
            <span className="hl-eyebrow hl-hero-eyebrow">
              The work behind every export.
            </span>
            <h1 id="hero-heading">
              <span className="hl-hero-line">
                <span data-hero-line>Nigerian exports.</span>
              </span>{" "}
              <span className="hl-hero-line">
                <span data-hero-line>Handled with</span>
              </span>{" "}
              <span className="hl-hero-line">
                <span data-hero-line className="hl-hero-accent">
                  precision.
                </span>
              </span>
            </h1>
            <p>
              Documentation. Coordination. Cargo movement.
              <br className="hl-desktop-break" /> The practical support your
              next export needs.
            </p>
            <div className="hl-hero-actions">
              <ActionLink href="/contact" variant="orange">
                Discuss your export
              </ActionLink>
              <a href="#services" className="hl-hero-secondary">
                Explore our services <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hl-hero-bottom">
            <a href="#introduction" className="hl-scroll-link">
              <span className="hl-scroll-icon">
                <ArrowDown size={18} aria-hidden="true" />
              </span>
              Discover Harlink
            </a>
            <span className="hl-hero-note">
              From preparation
              <br />
              to the next possibility.
            </span>
          </div>
        </div>
      </div>
      <div className="hl-container">
        <ul className="hl-capability-strip" aria-label="Our capabilities">
          {capabilities.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
