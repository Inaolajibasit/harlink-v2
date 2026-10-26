import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { companyContact } from "../../content/company";

export default function Footer() {
  return (
    <footer className="hl-footer">
      <div className="hl-container">
        <div className="hl-footer-top">
          <div className="hl-footer-about">
            <Link
              href="/"
              className="hl-brand"
              aria-label="Harlink Investment — Home"
            >
              <Image src="/Harlink3.svg" width={42} height={42} alt="" />
              <span>
                <span className="hl-brand-name">
                  HARLINK<span className="hl-brand-period">.</span>
                </span>
                <span className="hl-brand-descriptor">INVESTMENT LTD.</span>
              </span>
            </Link>
            <p>
              Export agency. Trade facilitation.
              <br />
              The work behind your next move.
            </p>
          </div>
          <nav className="hl-footer-links" aria-label="Footer navigation">
            <span className="hl-eyebrow">Explore</span>
            <Link href="/">Home</Link>
            <Link href="/services">Our services</Link>
            <Link href="/about">About Harlink</Link>
            <Link href="/#process">How we work</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Enquiry privacy</Link>
          </nav>
          <div className="hl-footer-contact">
            <span className="hl-eyebrow">Start a conversation</span>
            <Link href="/contact">
              Tell us about your export{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <a href={`mailto:${companyContact.email}`}>
              {companyContact.email}
            </a>
            <div className="hl-footer-phones">
              {companyContact.phones.map((phone) => (
                <a key={phone.href} href={phone.href}>
                  {phone.display}
                </a>
              ))}
            </div>
            <span className="hl-footer-location">
              Export facilitation · Nigeria
            </span>
          </div>
        </div>
        <div className="hl-footer-wordmark" aria-hidden="true">
          HARLINK<span>↗</span>
        </div>
        <div className="hl-footer-bottom">
          <p>© {new Date().getFullYear()} Harlink Investment Ltd.</p>
          <p>Export agency & trade facilitation</p>
          <a href="#top">
            Back to top <ArrowUp size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
