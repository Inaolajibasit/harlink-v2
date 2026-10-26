"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** A single, route-scoped owner for the homepage's GSAP enhancements. */
export function HomepageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    let dispose: (() => void) | undefined;

    async function initialise() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      const scope = root.current;
      if (!mounted || !scope) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      dispose = () => media.revert();

      media.add(
        {
          desktop: "(min-width: 960px)",
          motion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          if (!context.conditions?.motion) return;
          const desktop = Boolean(context.conditions.desktop);
          const select = gsap.utils.selector(scope);
          let running = true;
          let refreshFrame = 0;

          // Re-measure after native disclosures, font loads or layout changes.
          // Only this context is reverted; other routes' triggers are untouched.
          const scheduleRefresh = () => {
            if (!running) return;
            cancelAnimationFrame(refreshFrame);
            refreshFrame = requestAnimationFrame(() => {
              if (running) ScrollTrigger.refresh();
            });
          };

          const progress = select("[data-scroll-progress]");
          gsap.set(progress, { scaleX: 0, visibility: "visible" });
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

          const hero = scope.querySelector<HTMLElement>(".hl-hero");
          if (hero && window.scrollY < 100) {
            gsap
              .timeline({ defaults: { ease: "power3.out" } })
              .from(select(".hl-hero-eyebrow"), {
                x: desktop ? -40 : -18,
                opacity: 0,
                duration: 0.65,
              })
              .from(
                select("[data-hero-line]"),
                { yPercent: 108, opacity: 0, duration: 1, stagger: 0.13 },
                0.08,
              )
              .from(
                select(".hl-hero-copy > p"),
                { x: desktop ? -56 : -22, opacity: 0, duration: 0.85 },
                0.45,
              )
              .from(
                select(".hl-hero-actions"),
                { x: desktop ? -64 : -24, opacity: 0, duration: 0.85 },
                0.6,
              )
              .from(
                select(".hl-hero-image"),
                { opacity: 0, duration: 1.25 },
                0,
              );
          }

          // Entrance tweens do not pre-hide the server-rendered page. They
          // acquire their start state only when the trigger actually plays.
          const reveal = (
            selector: string,
            direction: "up" | "left" | "right" | "alternate" = "up",
            stagger = 0,
          ) => {
            const elements = select(selector) as HTMLElement[];
            elements.forEach((element, index) => {
              if (element.getBoundingClientRect().bottom <= 0) return;
              const side =
                direction === "alternate"
                  ? index % 2 === 0
                    ? "left"
                    : "right"
                  : direction;
              const distance = desktop ? 88 : 24;
              gsap.from(element, {
                x:
                  side === "left" ? -distance : side === "right" ? distance : 0,
                y: side === "up" ? (desktop ? 36 : 18) : 0,
                opacity: 0,
                duration: desktop ? 1 : 0.75,
                delay: Math.min(index * stagger, 0.24),
                ease: "power3.out",
                immediateRender: false,
                clearProps: "transform,opacity",
                scrollTrigger: {
                  trigger: element,
                  start: "top 90%",
                  once: true,
                },
              });
            });
          };
          reveal("[data-reveal]", "alternate");
          reveal(".hl-capability-strip > li", "up", 0.06);
          reveal(".hl-service", "left", 0.065);
          reveal(".hl-process-grid > li", "alternate", 0.07);
          reveal(".hl-faq", "right", 0.055);
          reveal(".hl-services-media figcaption", "right");
          reveal(".hl-model-image-caption", "left");
          reveal(".hl-footer-top > *", "alternate", 0.08);

          // Fade the image frames; parallax remains on their child images so
          // the two effects do not compete for transforms.
          select(".hl-services-media, .hl-model-image").forEach(
            (frame: HTMLElement) => {
              if (frame.getBoundingClientRect().bottom <= 0) return;
              gsap.from(frame, {
                opacity: 0,
                duration: 1.1,
                ease: "power2.out",
                immediateRender: false,
                clearProps: "opacity",
                scrollTrigger: { trigger: frame, start: "top 88%", once: true },
              });
            },
          );

          if (desktop) {
            const parallax = (frame: string, image: string, travel: number) => {
              const trigger = scope.querySelector(frame);
              const target = scope.querySelector(image);
              if (!trigger || !target) return;
              gsap.fromTo(
                target,
                { scale: 1.14, yPercent: -travel },
                {
                  scale: 1.14,
                  yPercent: travel,
                  ease: "none",
                  scrollTrigger: {
                    trigger,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.7,
                    invalidateOnRefresh: true,
                  },
                },
              );
            };
            parallax(".hl-hero", ".hl-hero-image", 4);
            parallax(".hl-services-grid", ".hl-services-media img", 3);
            parallax(".hl-model", ".hl-model-image img", 4);

            gsap.fromTo(
              select(".hl-enquiry-arrow"),
              { y: 36, rotation: -14 },
              {
                y: -20,
                rotation: 4,
                ease: "none",
                scrollTrigger: {
                  trigger: ".hl-enquiry",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          }

          if (desktop) {
            gsap.fromTo(
              select("[data-step-progress]"),
              { scaleX: 0 },
              {
                scaleX: 1,
                duration: 1,
                stagger: 0.75,
                ease: "none",
                scrollTrigger: {
                  trigger: scope.querySelector(".hl-process-grid"),
                  start: "top 78%",
                  end: "bottom 48%",
                  scrub: 0.5,
                  invalidateOnRefresh: true,
                },
              },
            );
          } else
            select(".hl-process-grid > li").forEach((step: HTMLElement) => {
              gsap.fromTo(
                step.querySelector("[data-step-progress]"),
                { scaleX: 0 },
                {
                  scaleX: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: step,
                    start: "top 82%",
                    end: "top 42%",
                    scrub: 0.5,
                    invalidateOnRefresh: true,
                  },
                },
              );
            });

          gsap.from(select(".hl-enquiry-inner > div"), {
            x: desktop ? -88 : -24,
            y: 0,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            immediateRender: false,
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: ".hl-enquiry",
              start: "top 85%",
              once: true,
            },
          });
          gsap.fromTo(
            select(".hl-footer-wordmark"),
            { yPercent: 18 },
            {
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: ".hl-footer-wordmark",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 0.6,
              },
            },
          );

          const disclosures = scope.querySelectorAll("details");
          const onDisclosureToggle = (event: Event) => {
            scheduleRefresh();
            const disclosure = event.currentTarget as HTMLDetailsElement;
            const content = disclosure.querySelector(
              ".hl-service-body, :scope > p",
            );
            if (!content) return;
            context.add(() => {
              if (!disclosure.open) {
                gsap.killTweensOf(content, "opacity");
                gsap.set(content, { clearProps: "opacity" });
                return;
              }
              gsap.fromTo(
                content,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.45,
                  ease: "power2.out",
                  overwrite: "auto",
                  clearProps: "opacity",
                },
              );
            });
          };
          disclosures.forEach((item) =>
            item.addEventListener("toggle", onDisclosureToggle),
          );
          let previousHeight = scope.offsetHeight;
          const observer =
            typeof ResizeObserver === "undefined"
              ? null
              : new ResizeObserver(() => {
                  const height = scope.offsetHeight;
                  if (Math.abs(previousHeight - height) > 1) {
                    previousHeight = height;
                    scheduleRefresh();
                  }
                });
          observer?.observe(scope);
          void document.fonts.ready.then(scheduleRefresh);
          scheduleRefresh();

          return () => {
            running = false;
            cancelAnimationFrame(refreshFrame);
            observer?.disconnect();
            disclosures.forEach((item) =>
              item.removeEventListener("toggle", onDisclosureToggle),
            );
          };
        },
        scope,
      );
    }

    void initialise().catch((error: unknown) => {
      // Failed enhancement must leave the original, usable page intact.
      dispose?.();
      if (mounted) console.warn("Homepage motion could not initialise.", error);
    });
    return () => {
      mounted = false;
      dispose?.();
    };
  }, []);

  return (
    <div ref={root} className="hl-motion-root">
      <div
        className="hl-scroll-progress"
        data-scroll-progress
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
