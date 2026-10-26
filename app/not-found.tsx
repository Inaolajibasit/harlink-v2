import type { Metadata } from "next";
import { PageShell } from "./components/site/page-shell";
import { PageHero } from "./components/site/page-hero";
import { ActionLink } from "./components/site/action-link";

export const metadata: Metadata = {
  title: "Page not found | Harlink Investment",
};
export default function NotFound() {
  return (
    <PageShell routeKey="not-found">
      <PageHero
        label="404 / Page not found"
        title="Let’s find"
        accent="a clearer route."
        description="The page you’re looking for may have moved. Explore our export services or get in touch with your requirement."
        compact
        action={{ label: "Explore our services", href: "/services" }}
      />
      <div className="hl-container hl-not-found-actions">
        <ActionLink href="/">Back to the homepage</ActionLink>
        <ActionLink href="/contact" variant="text">
          Contact Harlink
        </ActionLink>
      </div>
    </PageShell>
  );
}
