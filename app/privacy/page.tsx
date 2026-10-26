import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "../components/site/page-shell";
import { PageHero } from "../components/site/page-hero";

export const metadata: Metadata = {
  title: "Enquiry Privacy | Harlink Investment",
  description:
    "Information about the details shared through Harlink’s export enquiry form and how to contact the team about your submission.",
};

export default function PrivacyPage() {
  return (
    <PageShell routeKey="privacy">
      <PageHero
        label="Enquiry privacy"
        title="A clear conversation."
        accent="With care for your details."
        description="This notice explains the information requested by the export enquiry form and the email service used to submit it."
        compact
      />
      <section className="hl-section hl-privacy-section">
        <div className="hl-container hl-privacy-copy">
          <section>
            <h2>What the form asks for</h2>
            <p>
              The form requests your contact name, business name, email address,
              service requirement, commodity or cargo description and message.
              You can also provide a phone number, approximate volume,
              destination and preferred timing.
            </p>
          </section>
          <section>
            <h2>Why you share it</h2>
            <p>
              These details help Harlink understand your requirement and respond
              to your enquiry. Please send only what is relevant to that
              conversation. The form does not ask you to upload documents.
            </p>
          </section>
          <section>
            <h2>How your enquiry is submitted</h2>
            <p>
              The form uses EmailJS to submit your information through the
              existing business email configuration. That email service
              processes the details you enter. A successful form response
              confirms submission to the email service; it does not guarantee an
              inbox response time.
            </p>
            <p>
              You can choose to email{" "}
              <a href="mailto:harlinkinvestment@gmail.com">
                harlinkinvestment@gmail.com
              </a>{" "}
              directly instead of using the form.
            </p>
          </section>
          <section>
            <h2>Keep sensitive information out of your first message</h2>
            <p>
              Please do not send passwords, payment details, identity documents,
              confidential shipment files or sensitive customer information
              through the initial enquiry. Discuss any document-sharing
              requirements with the team separately.
            </p>
          </section>
          <section>
            <h2>Questions about information you have sent</h2>
            <p>
              For questions about your enquiry or a request relating to
              information you submitted, contact{" "}
              <a href="mailto:harlinkinvestment@gmail.com">
                harlinkinvestment@gmail.com
              </a>
              . Include enough context to identify your enquiry without
              repeating sensitive material.
            </p>
          </section>
          <Link href="/contact" className="hl-action hl-action--ink">
            Back to contact
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
