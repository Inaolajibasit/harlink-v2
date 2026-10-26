"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function InnerPageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let active = true;
    let dispose: (() => void) | undefined;
    async function initialise() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const scope = root.current;
      if (!active || !scope) return;
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      dispose = () => media.revert();
      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 960px)",
        },
        (context) => {
          if (!context.conditions?.motion) return;
          const desktop = Boolean(context.conditions.desktop);
          const select = gsap.utils.selector(scope);
          let running = true;
          let refreshFrame = 0;
          const refresh = () => {
            if (!running) return;
            cancelAnimationFrame(refreshFrame);
            refreshFrame = requestAnimationFrame(() => {
              if (running) ScrollTrigger.refresh();
            });
          };
          const entrance = (selector: string, horizontal = false) => {
            select(selector).forEach((element: HTMLElement, index: number) => {
              if (element.getBoundingClientRect().bottom <= 0) return;
              gsap.from(element, {
                x: horizontal ? (index % 2 ? 1 : -1) * (desktop ? 56 : 20) : 0,
                y: horizontal ? 0 : desktop ? 26 : 16,
                opacity: 0,
                duration: 0.85,
                delay: Math.min(index * 0.055, 0.2),
                ease: "power3.out",
                immediateRender: false,
                clearProps: "transform,opacity",
                scrollTrigger: {
                  trigger: element,
                  start: "top 92%",
                  once: true,
                },
              });
            });
          };
          entrance("[data-inner-heading] > *, .hl-inner-cover");
          entrance(
            "[data-reveal], .hl-service-card, .hl-value-card, .hl-info-item, .hl-related-card, .hl-process-grid > li, .hl-contact-aside > *, .hl-footer-top > *",
            true,
          );
          const progress = select("[data-scroll-progress]");
          gsap.set(progress, { visibility: "visible", scaleX: 0 });
          gsap.to(progress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              start: 0,
              end: () => Math.max(1, ScrollTrigger.maxScroll(window)),
              scrub: 0.2,
              invalidateOnRefresh: true,
            },
          });
          if (desktop) {
            select(".hl-inner-cover").forEach((frame: HTMLElement) => {
              gsap.fromTo(
                frame.querySelector("img"),
                { scale: 1.12, yPercent: -3 },
                {
                  scale: 1.12,
                  yPercent: 3,
                  ease: "none",
                  scrollTrigger: {
                    trigger: frame,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.7,
                  },
                },
              );
            });
          }
          select("[data-step-progress]").forEach((line: HTMLElement) => {
            gsap.fromTo(
              line,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: line.parentElement,
                  start: "top 80%",
                  end: "bottom 48%",
                  scrub: 0.5,
                },
              },
            );
          });
          const enquiry = scope.querySelector(".hl-enquiry");
          if (enquiry)
            gsap.from(enquiry.querySelector(".hl-enquiry-inner > div"), {
              x: desktop ? -56 : -20,
              opacity: 0,
              duration: 0.9,
              immediateRender: false,
              clearProps: "transform,opacity",
              scrollTrigger: { trigger: enquiry, start: "top 88%", once: true },
            });
          const onToggle = (event: Event) => {
            refresh();
            const detail = event.currentTarget as HTMLDetailsElement;
            const content = detail.querySelector(":scope > p");
            if (!content) return;
            context.add(() => {
              gsap.killTweensOf(content, "opacity");
              if (detail.open)
                gsap.fromTo(
                  content,
                  { opacity: 0 },
                  {
                    opacity: 1,
                    duration: 0.4,
                    clearProps: "opacity",
                    overwrite: "auto",
                  },
                );
              else gsap.set(content, { clearProps: "opacity" });
            });
          };
          const disclosures = scope.querySelectorAll("details");
          disclosures.forEach((detail) =>
            detail.addEventListener("toggle", onToggle),
          );
          let height = scope.offsetHeight;
          const observer =
            typeof ResizeObserver === "undefined"
              ? null
              : new ResizeObserver(() => {
                  if (Math.abs(height - scope.offsetHeight) > 1) {
                    height = scope.offsetHeight;
                    refresh();
                  }
                });
          observer?.observe(scope);
          void document.fonts.ready.then(refresh);
          refresh();
          return () => {
            running = false;
            cancelAnimationFrame(refreshFrame);
            observer?.disconnect();
            disclosures.forEach((detail) =>
              detail.removeEventListener("toggle", onToggle),
            );
          };
        },
        scope,
      );
    }
    void initialise().catch((error: unknown) => {
      dispose?.();
      if (active) console.warn("Page motion could not initialise.", error);
    });
    return () => {
      active = false;
      dispose?.();
    };
  }, []);
  return (
    <div ref={root}>
      <div
        className="hl-scroll-progress"
        data-scroll-progress
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
