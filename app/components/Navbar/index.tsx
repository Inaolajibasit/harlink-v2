"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Harlink", href: "/about" },
  { label: "How we work", href: "/#process" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    pathname === href ||
    (href === "/services" && pathname.startsWith("/services/"));
  const disclosure = useRef<HTMLDetailsElement>(null);
  const toggle = useRef<HTMLElement>(null);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && disclosure.current?.open) {
        disclosure.current.open = false;
        toggle.current?.focus();
      }
    };
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !disclosure.current?.contains(event.target) &&
        disclosure.current?.open
      )
        disclosure.current.open = false;
    };
    const desktop = window.matchMedia("(min-width: 960px)");
    const closeOnDesktop = () => {
      if (desktop.matches && disclosure.current)
        disclosure.current.open = false;
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);
  const closeMenu = () => {
    if (disclosure.current) disclosure.current.open = false;
  };

  return (
    <header className="hl-header" id="top">
      <a className="hl-skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="hl-container hl-header-inner">
        <Link
          href="/"
          className="hl-brand"
          aria-label="Harlink Investment — Home"
        >
          <Image src="/Harlink3.svg" width={40} height={40} alt="" />
          <span>
            <span className="hl-brand-name">
              HARLINK<span className="hl-brand-period">.</span>
            </span>
            <span className="hl-brand-descriptor">INVESTMENT LTD.</span>
          </span>
        </Link>
        <nav className="hl-desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="hl-header-cta" href="/contact">
          Discuss your export <ArrowUpRight size={18} aria-hidden="true" />
        </Link>
        <details ref={disclosure} className="hl-mobile-nav">
          <summary ref={toggle} aria-label="Toggle navigation">
            <Menu className="hl-menu-open-icon" size={25} aria-hidden="true" />
            <X className="hl-menu-close-icon" size={25} aria-hidden="true" />
          </summary>
          <nav className="hl-mobile-panel" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isCurrent(item.href) ? "page" : undefined}
              >
                {item.label}
                <ArrowUpRight size={20} aria-hidden="true" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="hl-mobile-contact"
              onClick={closeMenu}
            >
              Discuss your export
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <span className="hl-mobile-caption">
              Export agency & trade facilitation
            </span>
          </nav>
        </details>
      </div>
    </header>
  );
}
