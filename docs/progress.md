# Redesign progress

Updated: 23 October 2026.

## Current state

The user approved starting implementation on 22 October 2026 and subsequently approved the homepage and requested the same treatment for inner pages. About, Services, five service detail pages, Contact and enquiry privacy now share the homepage design and GSAP motion. The full proposal remains the roadmap. Read-only reference source retrieval succeeded; browser inventory remains empty, so rendered visual/motion inspection is unavailable.

## Deliverables

- `redesign-plan.md`: proposed positioning, Overland adaptation, homepage breakdown, tokens/components, motion, inner pages/URL migration, delivery proposal and phases.
- `content-audit.md`: source-specific corrections, conflicting contact details, unsupported claims, missing business content and evidence requirements.
- `design-system.md`: implemented tokens, component patterns, motion/accessibility approach and media/QA boundaries.

Implemented: export-first server-rendered homepage, large contextual hero still, static capability strip, editorial introduction, five native service disclosures, operating-model story, four-step engagement overview, five native FAQ disclosures and final enquiry CTA. Shared navigation/footer use only implemented routes and sections; no dead social/policy links or disputed phone numbers are introduced. Homepage omits unverified metrics, credentials, client logos and terminal ownership. EPT, commodity case examples and team proof await approved content/assets.

New components are under `app/components/home` and `app/components/site`; structured copy is in `app/content/home.ts`. Global namespaced styles use paper/ink/indigo/orange and two fonts. Mobile navigation uses a native disclosure with Escape/focus return; visible HTML is progressively enhanced with restrained motion. Small main-landmark fixes in existing inner pages keep the shared skip link valid. Two legacy JSX apostrophes were corrected to clear lint errors. The form backend/recipient was not changed.

Tooling: configured ESLint CLI and a typecheck script, added Prettier, explicit Three.js types and image quality settings. Existing package edits were preserved; new tooling changes extend them. Restored corrupted/missing installed declarations in Three.js and GSAP rather than bypassing TypeScript checks. No deployment or commit was made.

## Next milestone

Review all pages in a connected desktop/mobile browser. Confirm the enquiry recipient/delivery, address, image provenance, actual fleet/commodity/team photos, EPT scope and credentials before public launch. The user requested the original site phone numbers; the original footer's two numbers are restored consistently. Keep the existing EmailJS backend until its owner/delivery path is verified. Sitemap/robots still contain the pre-existing placeholder domain and must be corrected before launch.

## Verification

### Opening sequence — 26 October 2026

Follow-up: user reported it did not appear. Removed the 2.5-second `performance.now()` cutoff (which skipped slow development compilation/hydration), sessionStorage suppression and restored-scroll suppression. It now plays on each full document load; persistent root layout still prevents replay during client navigation. Reduced-motion and fragment-link skips remain. Cleanup timeout now starts inside the same animation frame that displays the sequence, preventing a background/throttled frame from outliving its cleanup timer. Typecheck and full lint pass (one existing legacy image warning). This supersedes the original once-per-session specification below.

Correction verification: production build and formatting pass. Preview restarted after build. No connected browser is available for visual playback verification; refresh the homepage without a URL fragment to review the corrected sequence.

User requested a website opening sequence. Added a root-layout client component and small isolated CSS file: existing Harlink logo/wordmark rise in, an orange decorative line draws across, then the paper panel lifts away (1.6 seconds). It runs once per tab session where storage is available; route changes do not replay it. It skips reduced motion, fragment links, restored scroll positions and hydration later than 2.5 seconds. Pointer/key/wheel/touch input dismisses it without consuming the event. No focus trap, scroll lock, fake loading percentage or loading dependency; server HTML has no overlay without JavaScript. CSS hides the overlay independently of the cleanup timeout, and effect teardown cancels timers/listeners/RAF. No new dependencies, business claims or form changes.

Typecheck and targeted formatting pass; full ESLint passes with the existing unused logo-carousel image warning. The sandboxed lint attempt stalled, while the elevated retry completed. Two existing enquiry tests pass. Browser inventory remains empty; rendered playback, mobile and keyboard interaction QA are not claimed.

Production build passes including lint/type validation, generation and traces (`npm.cmd --ignore-scripts run build`); postbuild sitemap generation remains skipped for the known placeholder domain. Homepage remains prerendered at 115kB first-load JS (build statistic only). No deployment.

Preview restarted at `http://localhost:3000`; homepage, About and existing SVG logo return HTTP 200. Open a fresh tab session to review the introduction. HTTP verification does not exercise client animation/session behaviour.

### Inner-page implementation — 23 October 2026

- New canonical routes: `/about`, `/services`, five `/services/[slug]` pages, `/contact`, `/privacy`, and a styled not-found page. Shared editorial heroes, contextual photography, numbered service scope, related services, enquiry prompts and native FAQ disclosures replace legacy layouts. No unverified client logos, team identities, metrics or credentials are introduced.
- Legacy `/aboutus` permanently redirects to `/about`. Six old `/pages/[slug]` services redirect to the appropriate new service/index; EPT points to the regulatory coordination scope without asserting terminal ownership. Unknown legacy slugs return not-found.
- Route-scoped GSAP adds alternating slide/fade entrances, desktop cover-image parallax, reading progress and process progression. Reduced-motion users retain static content; native scrolling/disclosures and matchMedia cleanup remain. Shared navigation/footer and homepage service links use canonical URLs.
- Contact uses the original EmailJS service/template/public browser identifiers. Visible labels, native validation, pending/success/error feedback, preserved inputs on failure, a client honeypot and optional shipment fields replace the former form. All extra enquiry details are packed into the legacy message field. The provider/recipient and actual inbox delivery remain untested; no real enquiry was sent. Server-side spam controls are not added to the existing browser delivery backend.
- User response: “the previuou phone number on the site.” Interpreted as the original footer numbers **08033047379** and **08167202457**, now centralised in `app/content/company.ts` and displayed on Contact and Footer. The old Contact page's 12-digit variant is omitted. The prior office address is preserved; current address confirmation remains outstanding.
- Two offline payload regression tests pass (`node --test tests/enquiry.test.cjs`), covering legacy template compatibility, complete shipment context, single names and omitted optional values. Typecheck passes; lint has zero errors and one existing raw-image warning in the unused legacy logo carousel. No new dependencies in this phase.
- Production build passes: all five service details are prerendered; Contact uses request-time service preselection. First-load JS is 114kB for About/Services/detail/privacy and 117kB for Contact. Postbuild sitemap generation is skipped because the production domain is still a placeholder. These are build statistics, not measured browser performance scores.
- Local development preview restored at `http://localhost:3000`. `node tests/routes-smoke.mjs` passes: ten canonical pages return 200, each has one H1 and a unique title, internal anchor/link targets exist, seven legacy URLs return the intended 308 redirects, three unknown URLs return 404, both original phone links exist, and valid/invalid service preselection behaves correctly. This is read-only HTTP/HTML verification, not browser interaction testing. Targeted Prettier check passes. Visual desktop/mobile, keyboard/reduced-motion runtime review and actual EmailJS delivery remain outstanding; no deployment was made.
- A redundant final lint rerun after adding the read-only route-check script stalled without diagnostics and was interrupted, as was a targeted retry. Earlier full lint and production-build lint passed on all application changes and the payload tests; the newly added route-check script itself has passing execution and formatting checks, but no completed lint retry is claimed for it.

### Fade-in update — 23 October 2026

Added full zero-to-visible fades to hero layers, the existing scroll-triggered entrances and enquiry copy. Service/model image frames fade separately from their parallax images. Opening service/FAQ disclosures fades their contents over 450ms; closing cancels that target's opacity tween and restores its inline style. Event-created tweens belong to the existing matchMedia context, preserving reduced-motion and unmount cleanup. Server HTML remains visible without JavaScript. Typecheck, ESLint (same three legacy image warnings), formatting and production build pass; homepage first-load JS remains 115kB. No content, dependency or backend changes. Preview restarted after verification; live browser motion QA is still pending.

### Subsequent GSAP motion update

Follow-up: user requested more slide-in animation. Added alternating left/right entrances for section groups, process cards and footer columns; left entrances for service rows, hero support copy/actions and enquiry content; right entrances for FAQs and service photo captions. Desktop travel is up to 88px, mobile 24px, with capped delays and existing reduced-motion/cleanup safeguards. Typecheck, full ESLint (same three legacy image warnings), formatting and production build pass. No new dependency or content changes. Visual browser QA remains unavailable; preview is restarted after verification.

User reviewed the first build positively and requested more GSAP animations/scroll behaviour. Added a route-scoped, dynamically imported GSAP/ScrollTrigger controller: masked hero lines, staggered reveals, desktop image parallax and sticky service image, top reading-progress rule, responsive process progression, enquiry arrow and footer movement. Replaced original CSS/IntersectionObserver reveals. `gsap.matchMedia` owns responsive/reduced-motion setup and teardown; native scroll and disclosures remain. No copy, backend, package or asset changes were made in this motion-only update. Typecheck, ESLint (same three legacy image warnings), Prettier and production build pass. Build still prerenders the homepage; initial JS is now 114kB versus 113kB in the first build, with GSAP loaded asynchronously. Browser inventory is still empty, so visual/running-motion QA is not claimed. Restarting the development preview after build verification.

### First build checks

Post-motion preview check: development server restored at `http://localhost:3000`; homepage returns 200, with one H1, three headline-line elements, four process-progress rules and one decorative reading-progress element. This verifies server output, not browser execution of the animations.

- Typecheck passed after repairing installed declaration packages.
- ESLint passed with zero errors and three existing raw-image warnings in legacy components.
- Prettier check passed for new/refactored homepage, shared components and styles.
- Homepage HTTP/HTML checks: 200, one H1, no missing linked anchors, five service disclosures, five FAQ disclosures, no old video or logo carousel.
- Development preview restarted on `http://localhost:3000` after the successful build. Fresh homepage and optimised hero-image requests both returned 200.
- About, Contact and a representative legacy service route returned 200 with the new header and valid skip-link target.
- Static colour-pair calculations: ink/orange 6.17:1, body/paper 5.79:1, inverse/ink 15.67:1, muted-inverse/ink 9.35:1. Image-overlay contrast still needs visual browser review.
- Final production build passed after dependency repair: compilation, ESLint/type validation, static generation and trace collection. Command: `npm.cmd --ignore-scripts run build`. Postbuild sitemap generation was intentionally skipped because its domain remains a known placeholder; no sitemap readiness is claimed. Homepage is prerendered, with 113kB first-load JS reported by Next (not a Lighthouse or network performance score). Key installed Next/React/Motion/GSAP/Three type versions were checked against the lockfile after reconciliation.
- No browser viewport/keyboard/runtime interaction QA, Lighthouse, field performance measurement, form submission/delivery test or deployment. Do not describe these as passing.
