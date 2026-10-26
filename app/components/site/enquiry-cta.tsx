import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "./action-link";

export function EnquiryCTA() {
  return (
    <section className="hl-enquiry" aria-labelledby="enquiry-heading">
      <div className="hl-container hl-enquiry-inner">
        <div>
          <span className="hl-eyebrow">Your next move starts here</span>
          <h2 id="enquiry-heading">
            Planning an export?
            <br />
            Let’s talk.
          </h2>
          <p>
            Tell us what you’re exporting and where you need support.
            <br className="hl-desktop-break" /> We’ll discuss the work ahead.
          </p>
          <ActionLink href="/contact" variant="ink">
            Discuss your export
          </ActionLink>
        </div>
        <ArrowUpRight
          className="hl-enquiry-arrow"
          strokeWidth={0.7}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
