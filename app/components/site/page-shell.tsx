import type { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { InnerPageMotion } from "./inner-page-motion";

export function PageShell({
  children,
  routeKey,
}: {
  children: ReactNode;
  routeKey: string;
}) {
  return (
    <>
      <Navbar />
      <InnerPageMotion key={routeKey}>
        <main id="main-content" className="hl-home hl-inner-page" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </InnerPageMotion>
    </>
  );
}
