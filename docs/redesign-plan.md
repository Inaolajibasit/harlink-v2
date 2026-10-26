# Harlink website redesign proposal

Status: Direction accepted to begin implementation on 22 October 2026. Homepage/shared-shell milestone in progress; business evidence and publication approvals remain subject to the content audit. The sections below preserve the original proposal.
Prepared: 22 October 2026.
Business authority: AGENTS.md and docs/harlink-company-website-brief.md, both read completely. The brief contains internally reported facts and draft copy, not independently verified credentials.

## 1. Direction and success criteria

Build a premium corporate website for **Harlink Investment Ltd. — Export Agency & Trade Facilitation**. Explain the coordinated work behind an export before describing the vehicles that move it.

Recommended creative direction: **The work behind every export.** Large editorial typography, disciplined grids, authentic operational photography, warm paper backgrounds, deep ink sections, and restrained orange accents. Harlink should feel like an experienced local execution partner with a clear operating model.

The hierarchy is export agency and documentation → customs-related/regulatory coordination → advisory → owned-truck haulage → partner-based warehousing → terminal coordination where scope is confirmed. Agency fees inform this hierarchy internally; fee economics need not appear in public copy.

Primary conversion: a qualified export enquiry. Secondary conversion: understanding the service scope before contacting the team. Draft audience priorities: established commodity exporters and trading firms, followed by processors/producers and manufacturers; management should confirm these priorities.

Within the first screen, a visitor should understand what Harlink does, that its focus is Nigerian exports, and how to discuss an assignment. Within the next two sections, they should understand which administrative and operational work Harlink can coordinate. Credibility should come from clarity, real people and assets, evidenced credentials, and approved examples.

Success checks after implementation: clear export-first comprehension in a short stakeholder walkthrough; working enquiry delivery; useful service selection; complete mobile journeys; no unsupported public claims; no broken legacy service URLs. Enquiry completion can be measured after launch with approved, privacy-conscious analytics and an actual baseline; no conversion uplift is promised.

## 2. Audit scope and limits

Inspected package/config files, route files, all current page copy, navigation/footer, service data, contact implementations, logo carousel, motion helpers, global styles, metadata, sitemap/robots, README, and public asset inventory. Visually inspected representative existing container, haulage, paperwork and carousel-logo images. The local homepage returned HTTP 200 during this audit.

No connected browser was available: the browser inventory returned no browsers/apps. The web reader could not open the reference, but an authorised network fetch retrieved its public HTML/CSS successfully. Source inspection confirms structure, font-family declarations, colour values, responsive variants, image elements, numbered service content, and enquiry links. **Neither website received a rendered desktop/mobile visual or interaction audit in this session.** Exact Overland motion, sticky behaviour, hover behaviour and breakpoint composition still need browser verification. The proposal below does not present inferred interactions as observed ones.

Reference: https://overlands.framer.website/ (public source retrieved 22 October 2026). No reference code, photographs, logos, statistics, testimonials or copy will be reused.

### Current implementation

- Next.js App Router, installed Next 15.5.28, React 19.1, TypeScript, npm lockfile, Tailwind 4.
- Existing Motion/Framer Motion and GSAP, Radix-backed accordion and button primitives. Three.js/React Three Fiber and a ship model are present; they are unnecessary for the proposed marketing journey.
- Actual routes: `/`, `/aboutus`, `/contact`, and six service instances under `/pages/[slug]`. There is no implemented `/about` or `/services` route despite footer links to them.
- Homepage: video hero → repeated logo carousel → company introduction → initially three services behind Show More → accreditation claim → statistics → team → FAQ → footer. No dedicated final enquiry section.
- About: broad logistics introduction, mission/vision, values, infrastructure claims, eight staff profiles. Service detail: generic container banner, brief text and image, no service-specific enquiry handoff.
- Contact: browser-side EmailJS call; recipient/account permissions and actual delivery are unverified. A separate `app/pages/Contact/index.tsx` is a legacy component, not an App Router page; it logs submissions and displays a success alert without delivery.
- Visual concerns evidenced in code: repeated 20rem horizontal padding at medium widths, fixed section/card widths and heights, many rounded glass/photo cards, oversized whitespace without a shared container, mixed icon families, multiple H1s, and content hidden by initial animation states.
- Four Google font families are configured; Golos Text is instantiated but not attached to the body. Montserrat overrides the body while Geist supplies the sans token. Consolidate this.
- About, home, contact and service routes are all client components. Prefer server-rendered content and small interactive components when implementation begins.
- The repo contains only boilerplate deployment guidance; no confirmed hosting configuration was found in the inspected files. The production domain and deployment owner need confirmation.
- `lint` invokes `next lint`, which needs replacement/configuration for this installed Next version before becoming a meaningful gate. There is no test/typecheck script; `tsc --noEmit` can be added as a documented check. Existing package/lockfile edits predate this proposal and must be preserved.

### Reuse versus replace

Reuse the framework/router, npm, TypeScript, logo asset pending approval, Radix accordion behaviour, and existing Motion dependency. Refactor button styling into shared variants. Reuse existing photos only after relevance, licensing and provenance checks. Replace generic freight positioning, unsupported counters, unapproved logo carousel, GIF service icons, duplicated team/contact data, fixed-width layouts, and inconsistent animation wrappers. Do not remove unused libraries until import/dependency review confirms that removal is safe.

## 3. Interpreting Overland for Harlink

| Reference evidence or supplied observation | Harlink interpretation |
|---|---|
| Source confirms a large industrial hero and prominent enquiry navigation | Lead with a large export-first statement and commodity/operations photography; make enquiry immediately available |
| Source includes Plus Jakarta Sans and Albert Sans declarations | Use confident sans-serif editorial typography; proposed fonts below are Harlink choices, not a claim about every rendered reference text style |
| Source includes charcoal, warm orange and light surfaces | Use Harlink's own indigo/orange asset with ink and warm paper; do not import the reference palette wholesale |
| Numbered services and a staged process are present in source | Number export services and explain the client engagement in a concise workflow |
| Multiple image/text/company/capability sections are present | Alternate compositions rather than repeat a uniform card grid |
| Source includes metrics, logos, testimonials, industries and global-network pages | Publish only Harlink evidence; use process and capability explanations where proof is unavailable |
| Supplied brief describes refined motion; source includes reveal states | Specify restrained original motion; browser-check exact reference behaviour later |

Distinctive Harlink details: cocoa/cashew context, documentation-led photography, numbered export workstreams, explicit owned-versus-partner capability labels, and copy about preparation, coordination and handoff. Avoid global maps suggesting offices, shipping-line imagery as the central identity, and unsupported tracking tools.

## 4. Information architecture and user journeys

Initial primary navigation: Home, Services, About Harlink, Contact; highlighted CTA **Discuss Your Export**. Add **Commodities** only when approved sector copy supports a meaningful page. **How We Work** initially links to the homepage process section; keep it out of the primary nav if it makes mobile navigation crowded.

Proposed routes: `/`, `/about`, `/services`, `/services/[slug]`, `/contact`, and `/privacy`. Conditional: `/commodities` after content approval. Defer blog, pricing, partners, global-network, careers and case-study indexes until there is real content and ownership.

Journeys:

1. Ready exporter: hero → enquiry → select service, describe commodity/volume/timing → acknowledgement.
2. Scope researcher: service overview → relevant detail → what is included and what needs agreement → preselected enquiry.
3. Credibility reviewer: company introduction → About → real team, owned assets, partner model and verified credentials → contact.
4. New exporter: process → advisory scope → FAQ → consultation enquiry. No promise to procure foreign buyers.

Use a single enquiry endpoint. Service CTAs can carry a validated service slug to preselect a field; visitors can change it. Keep all normal navigation in the same tab. Make the logo link to `/`, not `#`.

## 5. Section-by-section homepage blueprint

### 01 — Header and export-first hero

Purpose: explain the offer and start the enquiry journey immediately.

Desktop composition: full-width industrial/commodity image with a carefully controlled dark overlay; generous left-aligned headline, concise body and two actions; a small static service descriptor beneath. Header uses the existing logo and a readable solid/translucent ink surface rather than relying on arbitrary photography for contrast. Hero has content-led minimum height, approximately 680–820px on large desktop, rather than a mandatory full viewport.

Draft eyebrow: **EXPORT AGENCY & TRADE FACILITATION · NIGERIA**

Draft H1: **Nigerian exports. Handled with precision.**

Draft body: **Harlink coordinates export documentation, regulatory procedures and cargo movement for commodity businesses exporting from Nigeria.**

Primary CTA: **Discuss Your Export** → `/contact`. Secondary: **Explore Our Services** → `/services`. A small link can scroll to the introduction. Do not make navigation wait for an animation.

Image preference: a real shipment being prepared, commodity bags and container activity, or staff coordinating work. A port panorama is a fallback; a truck alone should not tell the entire business story. Start with an optimised still. Consider short supporting video only after real footage, delivery cost, accessibility and user controls are resolved.

Mobile: headline first, 38–48px, natural wrapping, body 16–18px, full-width primary action where useful; preserve the important image subject with an alternate crop. No text over a busy area. On narrow/short screens use an ink text panel above the image rather than shrinking the content.

### 02 — Capability strip

Purpose: replace the unverified logo marquee with immediate, useful scope.

Four static labels separated by fine rules: **Export documentation / Regulatory coordination / Owned-truck haulage / Partner-based storage**. No fake seals, counts or regulatory logos. Wrap to a two-by-two layout on mobile. This is a capability summary, not evidence of accreditation.

### 03 — Company introduction

Draft heading: **The work behind every export.**

Two-column editorial composition: small section label on the left; a larger explanatory paragraph and About link on the right. A paired image can show documentation and cargo preparation. Explain who Harlink serves and what it takes responsibility for within an agreed engagement. Keep this about 80–110 words; avoid restating the entire hero.

Draft opening: **An export depends on more than moving cargo. Documents, procedures, storage and transport need to come together. Harlink coordinates that work through export agency services, advisory and supporting cargo logistics.**

### 04 — Core services

Draft heading: **Expertise at every critical step.**

Use an editorial service list with 01–06 numbering, concise descriptions and clear links. Give Export Agency & Documentation the largest area and relevant photo. A smaller complementary image and ruled rows create visual variety. All services are discoverable without Show More.

Order: (01) Export Agency & Documentation; (02) Customs & Regulatory Coordination; (03) Export Advisory; (04) Trucking & Haulage; (05) Warehousing Coordination; (06) Export Processing Terminal Coordination, conditional on exact scope approval. If EPT scope remains unclear, omit the independent listing and describe confirmed coordination within the main agency service.

Each entry answers what Harlink handles and the immediate client benefit. Regulatory copy describes support and coordination unless a licensed role is evidenced. On mobile use stacked rows/cards with visible descriptions and links; no hover-only text or changing image required to understand an offer.

### 05 — The coordinated operating model

Draft heading: **One coordinated approach to export execution.**

Deep ink section, one real operational photograph and three substantial statements: **Agency execution** (documents and follow-through), **Owned transport capability** (company-owned trucks; no size/coverage claims), **Partner-enabled storage** (arranged warehousing). Differentiate assets from arrangements in plain language.

This replaces generic accreditation and statistics blocks. If approved credentials later exist, add a restrained evidence row with issuing body, credential type and current status; keep regulator engagement distinct from registration. No empty proof placeholders on launch.

### 06 — How engagement works

Draft heading: **From first conversation to export handoff.**

Four numbered stages: **Scope your requirement → Prepare and coordinate documents → Arrange agreed cargo and terminal steps → Coordinate handoff and follow-through.** Each gets a short description of the client's input and Harlink's role. Explain that the sequence varies with commodity, destination and agreed scope; this is an engagement overview, not a universal regulatory checklist.

Desktop: four connected columns with hairline rules. Mobile: ordinary vertical ordered list. No pinned scrolling. Link to contact with **Tell us where you need support**.

### 07 — Commodity context

Draft heading: **Grounded in commodity trade.**

Two large editorial images: cocoa and cashew, with concise, management-approved descriptions of Harlink's relevant work. Prefer actual packed/export-ready goods rather than consumer chocolate or generic farm imagery. Do not claim global buyers or enumerate destinations. If sector experience wording is not approved, keep a neutral enquiry prompt asking what commodity the visitor handles and defer sector-specific claims.

A dedicated Commodities page is conditional; the homepage does not need an empty destination link.

### 08 — People and operational proof

Draft heading: **People accountable for the details.**

Use one staff-at-work/real fleet image story and a short approved leadership introduction, linked to About. Select evidence that supports the decision to enquire. Existing names and titles are candidates, not approved biographies. Detailed full-team cards belong on About.

If there is a permitted real assignment, replace part of this section with a concise case example: challenge → Harlink's scope → documented result. Without consent/evidence, use a factual operating-model explanation rather than testimonials or numerical claims. Combine this with section 05 if assets are too limited; avoid two weak credibility sections.

### 09 — Practical FAQ

Small intro and a ruled accordion. Draft questions: What export work can Harlink coordinate? What information should I provide? Can you arrange haulage and storage? Do you find overseas buyers? What affects the sequence and timing? What does EPT coordination cover (only after scope approval)?

Answers should set boundaries and make enquiry easier. Say timing depends on the requirement and relevant parties; remove the current 24–72 hour claim. Keep a clear path to contact beneath the answers.

### 10 — Final enquiry and footer

Ink panel with orange accent, large heading **Planning an export? Let's talk.**, one useful sentence asking for commodity, approximate volume, destination and support needed, and **Discuss Your Export** action.

Footer: company/category, verified contact links, Services/About/Contact, privacy link, approved social profiles only and current copyright year. No dead careers/terms/social anchors. A subtle large wordmark may close the page if it does not crowd links. Footer text is not another H1.

## 6. Proposed design system

All values are proposals pending brand-direction approval. The existing `Harlink3.svg` contains indigo `#424192` and orange `#ED8236` among near variants; the current site accent is `#F08825`. Preserve the mark unchanged. Confirm which orange is the official brand token before implementation.

### Colour tokens

| Semantic token | Proposed value | Use |
|---|---|---|
| `background` | `#F7F5F0` | Warm paper canvas |
| `surface` | `#FFFFFF` | Forms and selected panels |
| `surface-subtle` | `#EFEEE8` | Quiet grouped content |
| `ink` / `text` | `#172027` | Main text, dark sections, primary ink buttons |
| `text-muted` | `#596167` | Supporting body on light surfaces |
| `text-inverse` | `#FAF9F5` | Text on ink |
| `text-inverse-muted` | `#C8CDD0` | Secondary text on ink |
| `brand-indigo` | `#424192` | Logo-related accent, selected/focus details |
| `brand-orange` | `#ED8236` | Accent panels and orange buttons with ink text |
| `brand-orange-hover` | `#DF732A` | Orange interaction state |
| `link` | `#944118` | Accessible warm text link on paper |
| `border` | `#DADDD8` | Decorative dividers |
| `input-border` | `#7B8388` | Functional control outline |
| `success` / `error` | `#21633D` / `#A52D32` | Form feedback with text/icons |

Do not set small white text on bright orange by default. Use ink on orange, white on ink/indigo, and darker warm links on paper. Validate all actual combinations, photo overlays, hover/focus states and control boundaries against AA contrast during implementation. Decorative divider contrast and input boundary contrast serve different purposes. Dark sections are authored themes, not an automatic dark-mode toggle.

### Typography

Proposed display/headings: **Plus Jakarta Sans**, 500–600, with body/UI in **Geist Sans**, 400–500 (already configured). This takes confidence from the reference while preserving readable UI. Limit to two families and necessary weights; remove redundant font downloads after approval. Montserrat can remain the alternate if brand review favours continuity. No condensed body type, outlined headlines or letter-by-letter typography effects.

| Role | Mobile → desktop | Line height / tracking |
|---|---|---|
| Display/H1 | 40–48px → 76–96px | 1.03–1.08 / -0.04em |
| H2 | 32–36px → 48–64px | 1.08–1.15 / -0.03em |
| H3 | 24px → 28–32px | 1.2 / -0.02em |
| Lead | 19px → 22–24px | 1.45 / -0.01em |
| Body | 16px → 18px | 1.6 / normal |
| UI/label | 14–16px | 1.3 / normal |
| Eyebrow/caption | 12–13px | 1.4 / 0.08em only for uppercase labels |

Use fluid `clamp()` values within these ranges. H1 should express a short business promise, typically 2–3 lines on desktop, not squeeze to a fixed line count. Body measure 55–70 characters. One H1 per page; labels are paragraphs/spans. Use approved short copy to maintain rhythm at 320px and at 200% zoom.

### Grid, spacing and image rules

- Container: maximum 1280px; gutters 20px small phone, 24px larger phone, 40px tablet, 64px desktop. At intermediate widths use the available container rather than fixed percentage columns plus large padding.
- Grid: 12 desktop columns, 6 tablet, 4 mobile; gaps 24–32px desktop, 16–24px mobile. Common text/image split 5/7; editorial label/content split 3/9.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Sections 96–128px desktop / 56–72px mobile; related subsections 32–48px. No arbitrary 700px text sections.
- Images: 16:9 wide story, 4:3 supporting operations, 3:4 portrait/commodity. Explicit aspect ratios and focal points; mobile crops chosen separately. Radius 8–12px for images/panels, 6–8px controls, 999px only for small chips. No rounded corners on every section.
- Use fine rules, alignment and contrasting surfaces for structure; shadows only for raised menus/dialogs. Avoid persistent glass overlays over body text.
- Layers: content 0, media overlays 10, header 40, mobile navigation/dialog 60, notifications 80. Scope overlays to their section so they do not cover global navigation.

### Component architecture and states

Shared: SiteHeader, MobileNavigation, SiteFooter, Container, SectionHeading, Button/LinkButton, TextLink, MediaFrame, NumberedServiceRow, ServiceCard, ProcessStep, CapabilityStatement, CommodityFeature, TeamProfile, CredentialEvidence, FAQAccordion, EnquiryCTA, EnquiryForm and FieldFeedback.

Use server components for static copy/data; client components only for menu, accordion, form and optional motion wrappers. Reuse existing Radix accordion and button foundations after semantic/style review. Buttons perform actions; links navigate; avoid nested link/button controls.

- Primary: ink surface with inverse text on paper; orange/ink variant in dark areas. Secondary: clearly bordered or underlined, no competing fill. Minimum 48px control height and 44px touch targets.
- Hover: modest colour/underline/arrow changes; active: darker surface or 1px inner transform. Focus: visible 2–3px ring with offset on every background. Disabled: native disabled state and readable explanation where necessary.
- Forms: persistent labels, optional markers, sensible autocomplete and email/tel types; error text beside fields plus summary for multiple errors. Pending state prevents duplicate sends. Persistent inline success acknowledgement; preserve entries on failure.
- Structured content: services, team, contacts, FAQ, claims and assets separated from layout. Claims should store evidence reference, approval status/date and publication permission. Only approved data reaches public proof components.

## 7. Animation and interaction specification

These are proposed Harlink behaviours, not browser-verified copies of Overland. Use CSS for small state transitions and the existing Motion package for entrances/menu behaviour. No new animation framework or smooth-scroll dependency is needed. This scope specifies website interactions, not a standalone animation/video deliverable.

| Element | Trigger and treatment | Timing / limits | Reduced motion and access |
|---|---|---|---|
| Hero text group | Once on initial load; opacity and 12–20px rise; heading, body, actions in short sequence | 500–650ms, 70–90ms stagger; completed within about 850ms | Immediate final state; links usable from first render |
| Hero media | Gentle opacity entrance; optional scale 1.02 → 1 | 650–800ms once; static image is default | No scale/motion; image remains visible |
| Section groups | Reveal heading/media group at about 15% visibility | 450–600ms, 16–24px travel; no long chained delays | Plain content; do not reveal every paragraph separately |
| Service row/card | Hover/focus colour/underline and arrow move up to 4px; optional image scale 1.025 | 180–250ms controls, 350ms image | No image/arrow movement; visible link label on touch |
| Header | If sticky, retain constant height; change surface/border after hero boundary | 180–220ms CSS; no hide-on-scroll dependency | Same navigation and visible focus; anchor offsets |
| Mobile menu | Explicit button opens labelled panel with links and close action | 220–280ms, opacity and at most 12px movement | Instant transition; Escape closes, focus returns, hidden items not tabbable |
| FAQ | Standard accessible accordion expands/collapses | 180–220ms; animate height only inside accordion | Instant; trigger reports expanded state; full keyboard use |
| Process | Ordered sequence, optional single line reveal | 450ms once; no sticky/pinned progression | Static ordered list |
| Enquiry form | Immediate pending state, inline error/success announcement | 150–200ms feedback; no forced-dismiss modal | Persistent accessible status; focus first invalid field |

Shared ease: `cubic-bezier(0.22, 1, 0.36, 1)` for entrance; `cubic-bezier(0.2, 0, 0, 1)` for UI. No bounce on corporate content. Pause/disable any approved video with a visible control and poster; use a still for reduced motion/data-constrained delivery.

Content must be visible without JS animation; initial server HTML must not make essential text permanently transparent. Do not use current global ScrollTrigger cleanup that kills unrelated instances. No floating cards looping forever, animated GIF icons, counting unverified metrics, mandatory loaders, cursor replacement, scroll locking or decorative 3D. Do not add parallax in the initial version; assess it only after performance and motion review.

## 8. All existing inner pages and URL migration

### About: `/aboutus` → `/about`

Create an identity-led page: clear export-agency H1 and real image → approved company story → what Harlink handles → owned trucks versus partner storage → values expressed through working practices → approved leadership/team → verified credentials where available → enquiry CTA. Confirm founding history before including a timeline or years in business. Review all eight existing staff records and images; avoid publishing the placeholder portrait as a real employee image. Keep `/aboutus#team` traffic useful by preserving a `team` anchor at the destination and updating internal links.

### Services index: new `/services`

Resolve the currently dead footer destination. Introduce the scope, lead with agency/documentation, then use concise linkable entries in the business hierarchy. Separate core execution from supporting capabilities. Include a compact process, scope-setting FAQ and contact action. No generic sea/air/road inventory unless management verifies those offers.

### Service detail template: `/pages/[slug]` → `/services/[slug]`

Each meaningful detail page: breadcrumbs → specific H1/value statement and suitable image → what Harlink handles → client information needed → scope/role boundaries → how engagement works → related services → service-preselected enquiry. Avoid identical stock banners and one-paragraph pages. Documentation and regulatory coordination may share a page with anchored subsections if their approved scope does not justify separate pages.

| Existing route | Proposed destination | Editorial decision |
|---|---|---|
| `/pages/shipping` | `/services` initially | Do not relabel broad shipping as an equivalent export-agency service. Use the relevant service detail only if shipping scope is verified. Retain a truthful legacy explanation if it has meaningful search traffic |
| `/pages/custom-bonded-warehousing` | `/services/warehousing-coordination` | Replace owned/bonded/import-storage claims with actual partner-based service; confirm whether bonded storage is genuinely offered |
| `/pages/ept` | `/services/ept-coordination` if approved; otherwise `/services#export-coordination` | Do not publish terminal ownership or a thin speculative page |
| `/pages/clearing-and-forwarding` | `/services/customs-regulatory-coordination` | Describe the verified role; do not assume customs brokerage licensing |
| `/pages/haulage` | `/services/trucking-haulage` | State owned trucks; approve routes, truck types and separate booking scope |
| `/pages/import-and-export` | `/services/export-agency-documentation` | Export-led replacement; preserve verified import work in a truthful section only if confirmed |

Use server redirects supported by the existing Next configuration after approved destinations exist. Preserve meaningful anchors, update internal links, exclude legacy routes from the sitemap and test every mapping. Review traffic/indexed URLs before changing any established service meaning; do not silently claim that unrelated services are equivalent. Unknown service slugs retain a real 404 with useful recovery links.

### Contact: keep `/contact`

Desktop: clear page heading and expected next step; form occupying the larger column; verified phone/email/address and contextual image in the other. Mobile: form first, direct contact alternatives easily reached. No map embed until the address/pin is approved; a simple external map link is sufficient.

Recommended fields: contact name*, business name*, email*, phone optional, service needed* (includes Not sure), commodity/cargo*, approximate volume optional, destination optional, preferred timing optional, message*. Keep optional details in an expandable Shipment details group if the form feels long. Explain the minimum useful information; no sensitive document upload in the first enquiry.

Submission CTA: **Send Export Enquiry**. Acknowledge receipt without inventing a response-time guarantee. Phone/email actions are usable fallbacks. Confirm recipients before any delivery tests; no message was sent during this audit.

Delivery proposal: retain the approved EmailJS account if its owner confirms it, but review allowed origins, abuse controls, template fields, quotas and actual inbox delivery. Prefer a server-side route and provider-supported server credential model where supported; otherwise agree an alternative transactional delivery provider before wiring it. Validate/rate-limit server-side, use a honeypot, avoid customer data in logs, and expose only intentionally public identifiers. EmailJS public key is not automatically a secret; hardcoded identifiers are an environment/ownership issue, not evidence of a secret leak. No silent provider switch.

Legacy `app/pages/Contact/index.tsx`: retire or consolidate only after checking imports; it is not a second live contact URL. It must never become the production form while it only logs/alerts.

### Conditional/new support pages

- `/commodities`: cocoa and cashew only with approved scope; explain relevant service needs, real examples where permitted and enquiry. Until then retain a small homepage context section.
- `/privacy`: factual enquiry data collection, recipient/provider, purpose, retention/contact details agreed by the business; link at form and footer. Review final wording with the business.
- No empty blog, global offices, pricing tiers, tracking dashboard, client portal or careers page.

## 9. Content and photography dependencies

Detailed old-copy corrections are in `content-audit.md`. Before launch obtain: approved legal/brand name and logo, confirmed contact recipient/details, founding history if used, service inclusions/exclusions, precise customs role and evidence, EPT scope, fleet details/images, storage-partnership wording, team approval, commodity experience wording and photography permissions. Olam may not appear as a named client/partner until its role and publication permission are established.

Photography priorities: (1) wide export-preparation hero with mobile crop; (2) staff/documentation; (3) actual Harlink truck; (4) cocoa/cashew export goods; (5) approved team portraits; (6) partner storage context with honest caption. Capture useful horizontal and vertical compositions, use consistent neutral/warm grading, retain natural detail. Never caption an unidentified stock port as Apapa or portray stock trucks as Harlink's fleet.

Asset findings: current hero MP4 is about 14.8MB; service GIFs commonly exceed 1MB each; portraits reach about 1MB. Current haulage photo visibly shows a Coca-Cola-branded truck and is unsuitable as evidence of Harlink ownership. Existing paperwork image is generic parcel paperwork, not proven Nigerian export documentation. Existing image rights and location claims are unverified. Use approved genuine assets or licensed contextual stock with accurate descriptions.

## 10. Phased implementation plan and acceptance gates

| Phase | Scope | Reviewable result / exit gate |
|---|---|---|
| 0 — Discovery and direction (this phase) | Audit, business hierarchy, sitemap, homepage blueprint, tokens, interactions, claims register | Written proposal reviewed; no application code changed |
| 1 — Content and visual foundation | Confirm minimum business facts; approve brand palette/type; desktop/mobile hero and representative service/process layouts; asset shortlist; shared container/header/footer/button foundation after approval | First-screen export comprehension and brand direction approved; menu/focus/contrast patterns reviewed |
| 2 — Homepage | Build approved sections in bounded components; responsive images; corrected copy; restrained motion | Desktop/tablet/phone walkthrough, no overflow/hidden content, all service/enquiry actions work; no unapproved proof |
| 3 — Inner pages and migration | About, services index/detail, contact presentation, conditional commodities, redirects, 404 | Every existing route mapped/tested; distinct useful service content; consistent design system |
| 4 — Enquiry and publication content | Confirm delivery owner/provider; validation/spam controls; actual delivery test with agreed test data/recipient; privacy page; credentials/team/assets review | Delivery confirmed, failure/retry accessible, recipient approved; all published claims signed off |
| 5 — Production readiness | Configure checks; SEO/canonical/domain/sitemap/robots; image/font optimisation; accessibility/mobile/performance QA; preview and release review | Typecheck/lint/build pass or genuine remaining issues recorded; keyboard/reduced-motion and form end-to-end checks pass; release approved before deployment |

Work can advance using neutral copy while nonessential evidence is pending. Missing verified contact details/delivery ownership block a trustworthy live enquiry launch. Missing credentials, metrics, Olam permission or founding year should lead to omission, not block the entire visual redesign. Full browser reference inspection should happen before locking high-fidelity layout/motion details.

### Technical acceptance checklist for implementation

- Preserve current Next/React stack; no framework migration, CMS, heavyweight design library or new 3D work.
- Establish an actual lint configuration/script, documented typecheck, build and link/redirect checks. Keep changes bounded and do not overwrite pre-existing package edits.
- Test 320/375/768/1024/1440px plus landscape and 200% text zoom; verify no cut-off text or overlap from sticky header.
- Check keyboard navigation, focus order, skip link, menu Escape/focus return, accordion semantics, form labels/status and reduced-motion behaviour.
- Server-render all essential business content and preserve a usable no-animation state.
- Prioritise only hero media; responsive sizes, reserved image dimensions, modern formats and lazy-loaded lower sections. Avoid downloading the existing 14.8MB hero video on every mobile visit.
- Target good Core Web Vitals (LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the relevant field percentile). These are targets, not measured results; inspect lab data in preview and field data after launch.
- Unique page metadata and H1, consistent approved domain, absolute OG image URLs, canonical/sitemap/robots, accurate organisation schema only for verified facts.
- Verify privacy, form delivery/failure, mailto/tel links, service preselection and every redirect. Review enquiry logging and analytics for unnecessary personal data.

## 11. Approval boundary and current verification

Only planning documentation is created in this phase. No app/component/style/config/package/asset changes, deployment, form submissions or commits are part of this proposal. Existing package changes remain the user's work.

Completed checks: repository/source/content audit; representative local image inspection; local homepage HTTP 200; public reference HTML/CSS retrieval and source review. Not performed: browser rendering/interaction testing, delivery test, production build/lint/typecheck, Lighthouse or field performance measurement. Those belong to implementation and must not be represented as passing now.

Proposed next action after direction approval: confirm the minimum business/contact facts, then implement the shared foundation and homepage hero/first service section as a reviewable first slice. Broader implementation waits for that approval under AGENTS.md section 1 and the user's explicit instruction to present the direction first.
# Implementation checkpoint — 23 October 2026

The user approved the homepage and requested the same design and motion treatment for inner pages. Implemented About, Services index, five canonical service details, Contact, enquiry privacy and not-found. Legacy About/six service URLs permanently redirect. Contact preserves the existing EmailJS backend, adds export-specific fields and restores the original footer phone numbers per the user's response. Detailed route, form and verification notes are in `docs/progress.md`. Browser visual review, verified delivery, production domain and business evidence remain launch tasks.
