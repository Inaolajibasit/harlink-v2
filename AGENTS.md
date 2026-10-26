# AGENTS.md — Harlink Investment Ltd. Website Redesign

> **Purpose:** Persistent instructions for Codex CLI and other coding agents working on the **existing Harlink website**. Read this file at the start of each session. This is a website redesign, **not** an invoicing or internal operations system.
>
> **Canonical business brief:** `docs/harlink-company-website-brief.md`.
>
> **Visual inspiration:** https://overlands.framer.website/ (Overland — logistics and transportation Framer template). Reference the *design language and experience*, never clone the template or reuse proprietary assets/code.
>
> **Status:** October 2026; project implementation details are to be discovered from the repository, not assumed.

## 0. Mission and success criteria

Transform Harlink's existing website into a premium, credible, contemporary B2B website for a Nigeria-based **export agency and trade facilitation company**. It should make a potential corporate client understand within seconds:

1. Harlink primarily helps exporters coordinate documentation, customs-related procedures, regulatory processes and export execution.
2. Harlink also offers export advisory, owns trucks used for haulage, and arranges warehousing through partners.
3. Harlink is experienced with commodity-export contexts such as cocoa and cashew; named references require publication permission.
4. The next step is to **enquire about an export requirement / request a consultation or quote**.

The end result should feel established, organised, dependable, efficient and sophisticated. The site must be visually compelling but must not sacrifice clarity, load speed, accessibility or factual accuracy.

## 1. Non-negotiable workflow: audit before editing

On the first run in this repository:

1. Read this `AGENTS.md` and the entire `docs/harlink-company-website-brief.md`.
2. Inspect `package.json`, framework/configuration, current routes, components, styling, assets, forms, SEO and deploy setup. Identify reusable patterns and dependencies.
3. Review all existing public-facing website copy and identify contradictions with the business brief. Preserve existing **verified** business facts that are absent from the brief; flag conflicts for review.
4. Inspect the design reference at `https://overlands.framer.website/` if browsing is available. If it is unavailable, use the reference observations below rather than inventing precise visual details.
5. Produce a short **audit and phased implementation plan** with: existing state, content changes, page/section map, design system, priority tasks, open questions and risk areas.
6. **Do not make sweeping code changes before presenting the plan for approval.** After approval, implement in bounded phases, test and report what changed.

In later sessions, check current repo state and `docs/` notes before planning work; don't restart the redesign or overwrite approved decisions. If the user explicitly asks for a scoped implementation, execute that scope without asking needless questions.

## 2. Business truth and factual integrity

The companion brief is the business source of truth, but distinguish **reported facts** from items **requiring management confirmation**. Never silently promote a hypothesis into a published company claim.

### Working business model

- Company: **Harlink Investment Ltd.**
- Market: Nigerian export processes and international commodity trade facilitation.
- Primary offer: Export agency services—documentation, regulatory coordination, customs-related export processes and getting necessary work completed on clients' behalf.
- Main revenue model: **Agency fees** for export errands, documentation and coordination; do not mention internal economics on the public site unless directed.
- Other services: Export consulting/advisory, trucking and haulage using **company-owned trucks**, and warehousing coordinated with **partners**.
- Example commodities: cocoa and cashew.
- Olam was mentioned in relation to the business and warehousing/commodity operations. The exact contractual role and permission to publish its name or logo are **not verified**.
- Harlink **does not directly source or secure overseas buyers as a core service**. Do not imply a buyer marketplace or guaranteed connections to purchasers.
- EPT (Export Processing Terminal) coordination is within the described operating context; **do not claim Harlink owns or operates an EPT without confirmation**.

### Claims requiring explicit evidence before publication

- Accreditation, registration, licensing, certifications or endorsement by any agency; examples of relevant bodies named in discussion include NCS, NPA, NIMASA, NSC, NEPC, CRFFN, NDLEA and potentially other commodity-specific bodies.
- Status as an approved/registered customs agent or specific regulated role.
- Speed guarantees, preferential treatment, avoiding inspections or guaranteed customs outcomes.
- Named clients/partners and their logos; testimonials, project photos and case studies.
- Years in business, number of shipments/containers, geographic coverage, team size, owned facilities, operating countries, on-time percentages, rankings and performance metrics.
- Phone numbers, emails, street addresses, map location and contact recipients not verified in current repo/approved content.

**Never transplant Overland template statistics, services, geographic claims, testimonials or partner logos into Harlink.** If evidence is missing, omit the claim, use neutral descriptive copy or record a TODO in the editorial review log. Do not put visible fabricated placeholders on the production site.

### Regulatory language

Prefer careful phrases such as: “coordinate export documentation”, “support regulatory processes”, “guide clients through applicable procedures”, and “facilitate customs-related export workflows”. Avoid “government approved by all agencies”, “skip inspections”, “guaranteed fast-track clearance” and similar language. Regulatory requirements vary with cargo and jurisdiction.

## 3. Positioning and content voice

### Positioning

**Export facilitation first. Logistics as supporting capability.**

Suggested message: **“Making Nigerian exports move with confidence.”** This is creative draft copy, not an approved brand slogan. Other potential themes: “From documentation to dispatch”; “Your partner in export execution”; “Export processes, handled with precision.”

Write for procurement managers, exporters, commodity processors, trading companies, manufacturers and operations/logistics decision-makers. Use clear business English, short paragraphs, specific action verbs and credible proof. Avoid hype, keyword-stuffing, vague “revolutionising logistics” claims and exaggerated global reach.

### Editorial rules

- Always distinguish **what Harlink does** from **why it benefits the client**.
- Explain acronyms on first use where customers may not know them.
- Keep service headings concise and scannable.
- Avoid describing Harlink as primarily an importer or broad international freight carrier unless confirmed.
- Don't publish agency-fee specifics, confidential operational practices or private customer details by default.
- Never suggest Harlink conducts illegal facilitation, circumvents compliance or purchases preferential clearance.
- Use proof elements only after verification; prefer detailed process explanations when metrics are unavailable.
- Keep client, partner, credential and operational claims in a structured content file with optional `verified`/`approvedForPublication` metadata where practical.

## 4. Reference experience: Overland → Harlink

Reference URL: https://overlands.framer.website/

**Observed/reference patterns to interpret:**

- Large, commanding hero statement paired with strong industrial/logistics imagery.
- Premium corporate visual rhythm: generous whitespace, clear typography hierarchy, carefully controlled accent colour, organised grids and crisp image treatments.
- Strong above-the-fold enquiry CTA.
- Sequential service storytelling with numbered details / service cards.
- Credibility-building company introduction, capability/proof section and contact/quote sections.
- Alternation between image-led and text-led blocks rather than repetitive card grids.
- Refined motion and interactions that support navigation instead of distracting from it.
- Useful secondary pages for services, industries, about and enquiry.

**Adaptation rules:**

1. Do **not** make trucking the dominant proposition just because the reference is transport-focused. Prioritise export agency, documentation and compliance coordination in the hero and services.
2. Consider photography of real Nigerian export activity: packed agricultural commodities, export paperwork, containers, port-side activity, trucks, warehouses and staff at work. Prefer genuine Harlink images when available. For stock imagery, use properly licensed assets and don't misrepresent stock as Harlink facilities/personnel.
3. Prefer a restrained, premium palette informed by **Harlink's existing verified logo/brand assets**. If no palette exists, propose options for approval; do not overwrite the brand arbitrarily. Consider deep charcoal/navy, warm off-white, restrained green or amber as *exploratory* options, not compulsory colours.
4. Strong type hierarchy with bold editorial headlines, readable body text and clear labels; avoid excessively condensed body text.
5. The visual resemblance should come from composition, pacing, density, photography, animation and hierarchy—not a 1:1 copy of the source layout or assets.
6. Do not claim the source template provides a particular interaction unless it has actually been inspected in a browser.

## 5. Design system requirements

Build/extend a coherent token-based system rather than scattering custom values:

- CSS variables or existing design-token solution for background, text, muted text, border, primary accent, states, overlay, and surfaces.
- Typography scale using responsive `clamp()` sizes where appropriate: display, h1–h6, body, small/eyebrow and captions.
- Layout containers and sensible max widths; large section gutters desktop, disciplined tablet/mobile spacing.
- Consistent radii, grid gaps, buttons, shadows and image aspect ratios.
- Hover/focus/active/disabled states with WCAG-aware contrast.
- Dark/light sections only when purposeful and visually coherent.
- Consistent motion tokens (durations/easing), avoiding a different animation for every component.
- Navigation with high legibility over hero media, sticky treatment only if it remains usable, and an accessible mobile menu.

Prefer polished simplicity over superfluous design. Large type, refined image crops and precise spacing matter more than excessive effects.

## 6. Motion and interaction spec

Aim for premium Framer-like behaviour through the repository's existing stack. If the project uses React/Next.js, consider Motion/Framer Motion **only where justified**, preferring CSS for small interactions.

- Hero: polished media entrance and short sequential headline/copy/CTA reveal.
- Scroll: subtle fade/slide reveals and visual progression of sections; avoid animating every paragraph.
- Services: refined hover/focus treatments; card/image transitions that don't shift the entire layout.
- Navigation: understated transitions, meaningful active states and mobile menu open/close.
- CTA/buttons: tactile but restrained pointer feedback and clearly visible keyboard focus.
- Images: optional subtle parallax only with fallback and without causing motion sickness or jank.
- Avoid obligatory preloaders, excessive smooth-scroll hijacking, scroll-locking, heavy 3D and perpetual marquee motion.
- Honor `prefers-reduced-motion`; content must remain visible and navigable without JavaScript animation.
- Avoid layout shifts and ensure animation never blocks enquiry forms or links.

## 7. Proposed information architecture

Use the existing router/framework and preserve valuable existing URLs with redirects if paths change. Suggested architecture **subject to audit and approval**:

### Primary navigation

- Home `/`
- About `/about`
- Services `/services`
- Industries `/industries` (only if sufficient approved sector-specific content exists)
- Contact / Request an Export Consultation `/contact` (or `/request-quote` if a clear quotation workflow exists)

Optional later: Insights/Resources (only with real publishing capacity), Export Process/How It Works, and a selected case-study page (only with consent and proof). Do not build empty pages just to mimic the reference.

### Home page section order (recommended)

1. **Hero:** crisp export-first promise, compact explanatory subcopy, primary CTA (“Discuss Your Export Requirements”) and secondary CTA (“Explore Our Services”), high-quality relevant imagery.
2. **Capabilities strip / trust introduction:** concise operational domains; no false client-logo carousel or invented numbers.
3. **Company introduction:** what Harlink actually handles and for whom.
4. **Core services:** lead with export agency & documentation, then export consulting, customs-related coordination, haulage, warehousing coordination, and EPT coordination where confirmed.
5. **How we work:** discovery → requirements & documents → relevant approvals/coordination → cargo preparation & movement → export handoff. Do not imply identical steps for every commodity.
6. **Commodity/industry context:** cocoa and cashew; expand to other sectors only if verified.
7. **Why Harlink:** subject-matter knowledge, operational coordination, company-owned trucking capability and integrated services; communicate without fictitious metrics.
8. **Image-led export operations story:** real imagery and practical explanatory copy.
9. **FAQ:** practical, researched, truthful queries about engaging Harlink and required information.
10. **Prominent final CTA and footer:** frictionless contact with verified details.

### Core page direction

- **About:** mission, story, operating model, leadership (if approved), assets vs partnerships, commitment to compliance.
- **Services index:** scannable offerings and linkable details; dedicated detail pages only where there's meaningful distinctive content.
- **Industries:** commodity-specific context (e.g. cocoa and cashew) and process sensitivities; no claims to directly source buyers.
- **Contact:** brief enquiry form with business name, contact person, email/phone, commodity, service needed, destination (optional), message; consent/privacy notice as appropriate. Avoid collecting sensitive documents unnecessarily.

### Example hero copy (draft; not approved)

Eyebrow: `EXPORT FACILITATION • NIGERIA`

Headline: `Complex exports. Clearer execution.`

Subcopy: `From export documentation and regulatory coordination to haulage and cargo preparation, Harlink helps commodity businesses navigate the practical work of exporting from Nigeria.`

Primary CTA: `Discuss Your Export Needs`

Secondary CTA: `Explore Our Services`

Use this as a starting point only; refine based on existing brand and stakeholder feedback.

## 8. Implementation requirements

### Technology and architecture

- **Inspect the repository before deciding the stack.** Follow existing framework, project structure, conventions, UI system and package manager.
- Do not migrate frameworks, add a CMS, or install large UI/animation libraries without a concrete need and discussion.
- Use semantic, reusable components and structured data for services, FAQs, navigation and contact details.
- Separate content from layout where feasible (`content/`, `data/`, or current CMS).
- Keep components small and maintainable; don't create a giant monolithic homepage component.
- TypeScript types and linting if supported by the project.
- Keep secrets in environment variables; never place API keys or private credentials in source control.
- Do not add a client portal, shipment-tracking system, invoicing system or dashboard to the marketing-site scope unless explicitly requested.

### Image/media policy

- Inventory existing brand logo, photos, videos and downloadable content.
- Optimise images and provide descriptive alt text; decorative images may use empty alt.
- Use responsive assets and lazy loading for below-the-fold imagery; prioritise hero media appropriately.
- Confirm image rights and consent before publishing images of a named client or partner.
- Use temporary development placeholders only when clearly labelled internally and never confuse them with Harlink's real operations.

### SEO and discovery

- Unique page titles/descriptions, one clear H1 per page, coherent heading sequence and logical internal links.
- Relevant search phrases where accurate: export agency services in Nigeria, export documentation coordination, customs brokerage/support **only if licensed role is verified**, cocoa/cashew exports, export haulage.
- OG metadata, canonical URLs, sitemap, robots directives, favicon and schema where supported/verified.
- Do not stuff location or “global offices” claims without evidence.

### Accessibility / performance

- Keyboard-operable navigation and forms; labels, error states and success states.
- Adequate contrast, semantic landmarks, clear heading order, descriptive link text, sensible touch targets.
- Reduced-motion handling, no critical content hidden behind animations.
- Mobile-first responsive testing at 320/375/768/1024/1440 widths where practical.
- Optimise for fast load: image sizing, font strategy, code splitting and avoiding heavy third-party scripts.
- Verify relevant Lighthouse/Core Web Vitals metrics when available; don't fabricate scores.

### Forms / privacy

- Use currently approved email/form backend if one exists; otherwise propose a concrete secure implementation before wiring up.
- Provide validation, user-visible status messages, spam mitigation and safe server-side processing.
- Never imply a form works until a real delivery path has been confirmed and tested.
- Avoid leaking customer inquiries to client-side logs or analytics.

## 9. Quality gates and verification

Before declaring a phase complete:

1. Run the repository's actual lint/typecheck/build/test scripts that exist; report missing checks honestly.
2. Confirm all links, buttons, routes and menu actions work; check forms end-to-end when configured.
3. Review desktop, tablet and phone layouts; catch overflow, clipped headings, image distortion and layout shift.
4. Validate interactions with keyboard and reduced-motion settings.
5. Review the public-facing claims against the company brief and maintain an **unverified claims list**.
6. Check metadata, heading hierarchy and image alt text.
7. Summarise files changed, changes completed, verification results, remaining gaps and next implementation phase.

## 10. Working documentation and persistence

Maintain lightweight project records:

- `docs/harlink-company-website-brief.md` — authoritative working business understanding.
- `docs/redesign-plan.md` — agreed scope, sitemap, visual direction, phased backlog, decisions.
- `docs/content-audit.md` — old copy → proposed corrected copy, rationale and verification status.
- `docs/design-system.md` — final approved visual tokens and interaction patterns.
- `docs/progress.md` — completed work, in-progress tasks, next steps, blockers and decisions so future Codex sessions can resume safely.

Create these supporting docs **as needed** after inspecting the project; don't fill them with made-up facts. Update progress after meaningful milestones rather than writing long repetitive logs.

## 11. Suggested implementation phases

- **Phase 0 — Discovery:** repo audit, current-site content audit, check logo/assets, reference review, site architecture and written plan.
- **Phase 1 — Foundations:** confirmed brand tokens, global layout, navigation, footer, typographic system, accessibility baselines.
- **Phase 2 — Homepage:** high-fidelity hero, sections, photography, CTA, responsive styling, restrained motion.
- **Phase 3 — Inner pages:** About, Services, Industries (if validated), Contact and any justified service detail pages.
- **Phase 4 — Content refinement:** business review of regulatory copy, credentials, partners, photography and all business claims.
- **Phase 5 — Production readiness:** SEO, functional form, responsive polish, performance, accessibility, test/build and launch checklist.

If the user asks to start with the homepage, work on that first after the minimum discovery necessary. Do not surprise-rewrite all pages in one unreviewable change.

## 12. Decision hierarchy and communication

When instructions conflict, prioritise: (1) explicit latest user instruction, (2) verified Harlink business facts and approvals, (3) this file and approved redesign plan, (4) existing repository conventions, (5) external visual reference. Seek clarification only for material business/legal claims or irreversible decisions; otherwise make safe, reversible choices and document assumptions.

For every material design decision, be able to answer: **Does this make Harlink look more credible, explain the export-agency value more clearly, or make it easier to enquire?** If not, simplify.

When reporting back to the user, use:

- **What I inspected**
- **What I changed / propose**
- **Business facts needing confirmation**
- **Tests run and outcomes**
- **Next action**

Do not claim you opened the live reference, ran tests, saw a screenshot, or published changes unless you actually did.

## 13. First-session Codex instruction

> Read `AGENTS.md` and `docs/harlink-company-website-brief.md`; audit the existing site and its business copy; review the Overland design reference if browser access is available. Produce `docs/redesign-plan.md` and `docs/content-audit.md` with a clear homepage blueprint, proposed design tokens, reusable component architecture, animation plan, inner page map, content corrections and staged implementation. Identify unverified claims. Present a concise summary and **do not edit website application code until I approve the plan**.
