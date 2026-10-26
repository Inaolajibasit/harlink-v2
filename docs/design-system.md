# Harlink design system — first implementation

Direction approved to begin by the user on 22 October 2026 and extended to inner pages on 23 October. This records the implemented website design, not approval of every outstanding business claim.

## Visual foundation

Premium export-agency editorial design. Warm paper `#F7F5F0`, deep ink `#172027`, orange `#ED8236`, indigo `#424192`, supporting text `#596167`, dividers `#D9DCD6`. Orange and indigo come from the existing logo; the official brand-file/shade review remains pending. Logo geometry is unchanged. Orange buttons use ink text; inverse sections use off-white text and lighter secondary text.

Plus Jakarta Sans for headings/wordmark and Geist Sans for body/UI. Two variable fonts, Latin subsets, swap display. Legacy Montserrat variable aliases to Geist to avoid unnecessary additional font downloads. Hero type scales to 96px desktop; body text uses 16–17px with smaller UI/caption styles. Containers max out at 1280px with 56/40/20px responsive gutters. Sections use a shared fluid 64–120px spacing token. The namespace `hl-` keeps homepage layout rules separate from legacy inner-page layouts.

## Components

- Shared header and footer use canonical About and Services routes. How We Work links to the homepage process section; service details link to preselected Contact enquiries.
- `ActionLink`: ink, orange, outline and text variants; actual links with visible focus, no nested buttons.
- `Reveal`: server-rendered `data-reveal` groups are enhanced by the single homepage GSAP controller; content stays visible without JavaScript.
- Native `details`/`summary` service/FAQ disclosures: keyboard and no-JavaScript support, initial first item open, visible labels and plus/close affordance.
- Mobile navigation is a native disclosure, not a modal: normal tab order, Escape closes/returns focus, outside click closes, desktop breakpoint closes. Hidden content does not stay tabbable. No focus trap or scroll lock is needed for this disclosure pattern.
- Header skip link targets focusable `main-content` landmarks on all current page templates.

## Motion

Opening playback correction: play on every full document load, with no sessionStorage, scroll-position or hydration-time cutoff. Client navigation still does not replay the persistent root component. Reduced-motion and fragment-link bypasses remain; the cleanup clock starts when the sequence is shown. This replaces the initial first-session/late-hydration behaviour described below.

Opening sequence (26 October): optional, decorative first-session brand entrance in `OpeningSequence` and `opening-sequence.css`. Uses the existing logo, paper/ink/orange palette and typography. Brand rise/fade 650ms, line draw 900ms, panel lift 650ms beginning at 950ms; total 1.6 seconds. No loading percentage or wait for media/network. Reduced motion/deep links/restored scroll/late hydration skip it, and any keyboard/pointer/scroll interaction dismisses it. Storage failures retain a safe per-mount fallback. No-JavaScript content remains visible, and route navigation does not retrigger the sequence.

The user requested stronger GSAP animation and scroll behaviours after reviewing the first build. `HomepageMotion` now owns dynamically imported GSAP/ScrollTrigger and supersedes the original CSS/IntersectionObserver entrances. No additional packages were installed for this motion update.

- Hero: three masked text lines enter with a 130ms stagger, with supporting copy/actions sequenced in one timeline.
- Desktop imagery: scrubbed parallax for hero, service image and operational story. Images are scaled 1.14 with travel limited to ±3–4% inside clipped frames to preserve edge coverage. Desktop service photography also sticks naturally within its section; no scroll pinning or extra spacer distance.
- Capabilities, service rows, process cards and section groups: once-only 18–32px entrances, 850ms power3 easing, short stagger delays. Scroll tweens do not pre-hide offscreen content at initialisation.
- Process: scrubbed orange progress rules fill sequentially across desktop cards; each mobile rule follows its individual step.
- Closing sections: enquiry copy entrance, gently rotating/translating desktop arrow and scroll-linked footer wordmark.
- A thin, decorative top rule shows overall page scroll progress. Native wheel/touch/keyboard scroll and CSS anchor behaviour remain intact; no snap, forced scrolling, scroll lock or replacement scroller.

Follow-up slide-in direction: section groups and process cards alternate left/right; service rows enter from the left, FAQs and service captions from the right, and footer columns alternate. Hero supporting text/actions and enquiry copy enter from the left. Sideways travel is 88px desktop / 24px mobile (hero uses shorter offsets), with 750–1000ms power3 easing and capped stagger delays. Existing image scrub and wordmark transforms keep separate targets so entrance and scroll effects do not compete. Reduced-motion setup continues to skip these animations entirely.

Responsive/reduced-motion settings are managed by `gsap.matchMedia`, which reverts the owning animations and inline styles when conditions change. Route cleanup cancels its resize/refresh work, disconnects observers and removes disclosure listeners. It never kills other components' triggers globally. Native disclosure changes, font readiness and root-height changes refresh scroll measurements. Hover transitions remain CSS; the old CSS entrance keyframes are removed so they cannot compete with GSAP.

## Content and media boundaries

Fade-in follow-up (23 October): hero layers and scroll entrances now fade from zero opacity alongside their existing slides. Service/model image frames get independent 1.1s opacity reveals while parallax stays on child images. Opening service or FAQ disclosures fades their contents over 450ms, with rapid-toggle cancellation and context-owned cleanup. Reduced-motion settings skip all of these; server HTML remains visible without the enhancement.

The homepage excludes the old counters, unverified accreditation, client-logo carousel and warehouse/terminal ownership claims. EPT listings, commodity case examples and team proof are deferred until approved scope/assets are supplied. Existing repository photos are contextual cargo imagery with neutral alt text, not evidence of Harlink ownership/location. Rights/provenance still require review before launch. The old 14.8MB video and service GIFs are absent from the new homepage.

New copy lives in `app/content/home.ts`; homepage sections and reveal groups are server components, with a client homepage motion controller and navigation behaviour. Inner pages retain legacy layouts/content for the next bounded phase. No enquiry backend was changed or tested by sending a message in this phase.

## QA boundary

Use actual typecheck, lint, production compilation and HTTP/HTML checks; record outcomes in progress.md. Browser inventory was empty at implementation start. Do not claim desktop/mobile screenshots, keyboard runtime testing, interactive behaviour verification, Lighthouse or inbox delivery until a browser/recipient is available and those checks are performed.

# Inner-page extension — 23 October 2026

About, Services/index/detail, Contact, privacy and not-found reuse the approved paper/ink/orange/indigo tokens and typography. `app/inner-pages.css` owns responsive editorial heroes, breadcrumb navigation, featured service cards, scope lists, dark enquiry sidebars and labelled form controls. Layouts collapse to a single column on phones; controls retain 16px text and visible focus styles. Tall detail sidebars become sticky only with sufficient viewport height.

`InnerPageMotion` scopes GSAP/ScrollTrigger per route: capped staggered slide/fade entrances, desktop-only cover parallax, reading progress and process rules. Native disclosure content fades on opening; layout refreshes when content height changes. Reduced-motion and failed/delayed animation loading retain readable server HTML. Browser visual, keyboard and running-motion verification remains pending because no browser surface is connected.
