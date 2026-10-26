"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** Decorative introduction; the document remains usable underneath it. */
export function OpeningSequence() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // Play on every full page load, including slow development compilations.
    // The root layout persists during navigation, so links do not replay it.
    if (motion.matches || window.location.hash) return;

    const events = ["pointerdown", "keydown", "wheel", "touchstart"] as const;
    const detach = () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
      events.forEach((event) => window.removeEventListener(event, dismiss));
      motion.removeEventListener("change", dismiss);
    };
    const dismiss = () => {
      detach();
      setVisible(false);
    };
    const frame = requestAnimationFrame(() => {
      setVisible(true);
      // Start the cleanup clock with the animation, even in a background tab.
      timeout = window.setTimeout(dismiss, 1750);
    });
    let timeout: number | undefined;
    events.forEach((event) =>
      window.addEventListener(event, dismiss, { passive: true }),
    );
    motion.addEventListener("change", dismiss);
    return detach;
  }, []);

  if (!visible) return null;
  return (
    <div className="hl-opening" aria-hidden="true">
      <div className="hl-opening-panel">
        <div className="hl-opening-brand">
          <Image src="/Harlink3.svg" width={68} height={68} alt="" />
          <div className="hl-opening-wordmark">
            Harlink<span>Investment Ltd.</span>
          </div>
        </div>
        <div className="hl-opening-rule">
          <span />
        </div>
        <p className="hl-opening-caption">Export agency & trade facilitation</p>
        <span className="hl-opening-location">
          Nigeria · Built around your next export
        </span>
      </div>
    </div>
  );
}
