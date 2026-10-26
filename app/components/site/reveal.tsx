import type { ReactNode } from "react";

// Server HTML stays visible; the homepage's GSAP controller enhances this group.
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}
