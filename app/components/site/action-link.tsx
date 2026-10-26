import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "ink" | "orange" | "outline" | "text";
  className?: string;
};

export function ActionLink({
  href,
  children,
  variant = "ink",
  className = "",
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={`hl-action hl-action--${variant} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={19} strokeWidth={1.6} aria-hidden="true" />
    </Link>
  );
}
