// Draft public copy follows the reported business model in the company brief.
// Unverified credentials, clients and figures are intentionally excluded.
// EPT scope remains in editorial review.
export const exportServices = [
  {
    id: "export-agency",
    title: "Export agency & documentation",
    label: "The details, brought together.",
    description:
      "Preparation, paperwork and follow-through. We help coordinate the documents and administrative steps involved in your export, within the scope agreed with you.",
    tags: ["Documentation", "Procedural coordination", "Follow-through"],
  },
  {
    id: "regulatory-coordination",
    title: "Customs & regulatory coordination",
    label: "A clearer way through the process.",
    description:
      "We support customs-related export workflows and coordinate with relevant parties on the procedures applicable to your shipment. Requirements and approvals remain subject to the responsible authorities.",
    tags: ["Requirements", "Relevant procedures", "Coordination"],
  },
  {
    id: "export-advisory",
    title: "Export advisory",
    label: "Clarity before the next step.",
    description:
      "Discuss export readiness, commodity considerations and the support your business needs. Our advisory scope is agreed around your requirement; it does not include a promise to find overseas buyers.",
    tags: ["Export readiness", "Commodity considerations", "Agreed scope"],
  },
  {
    id: "trucking-haulage",
    title: "Trucking & haulage",
    label: "Practical support on the ground.",
    description:
      "Our company-owned trucks support agreed movements of goods and containers. Talk to us about your cargo, collection point and route so we can discuss the transport required.",
    tags: ["Company-owned trucks", "Cargo movement", "Route planning"],
  },
  {
    id: "warehousing-coordination",
    title: "Warehousing coordination",
    label: "Storage, connected to the wider plan.",
    description:
      "We arrange storage through partners when your export requires it. Storage and related handling requirements are discussed as part of your engagement; Harlink does not own the warehouses.",
    tags: ["Partner-based storage", "Cargo handling", "Export preparation"],
  },
] as const;

export const exportSteps = [
  {
    title: "Start with your requirement.",
    description:
      "Tell us your commodity, approximate volume, destination and where you need support.",
  },
  {
    title: "Define the work ahead.",
    description:
      "We discuss the relevant documents, procedures and responsibilities for your engagement.",
  },
  {
    title: "Coordinate the moving parts.",
    description:
      "We follow through on the agreed agency work and arrange supporting cargo services where needed.",
  },
  {
    title: "Bring the next steps together.",
    description:
      "We coordinate with the relevant parties through the agreed export handoff and follow-through.",
  },
] as const;

export const exportFAQs = [
  {
    question: "What can Harlink help me with?",
    answer:
      "Our focus is export agency and trade facilitation: coordinating documentation, customs-related procedures and the practical work behind exports from Nigeria. We also offer advisory, company-owned trucking and warehousing arranged through partners. The precise scope is agreed for each assignment.",
  },
  {
    question: "What should I include in my enquiry?",
    answer:
      "Tell us your business name, what you plan to export, the approximate volume, destination and the help you need. If some details are still being decided, explain where you are in the process so we can discuss a suitable scope.",
  },
  {
    question: "Can you arrange transport and storage?",
    answer:
      "Harlink owns trucks and can discuss haulage for agreed routes and cargo. Warehousing is arranged through partners, rather than Harlink-owned facilities. Availability and requirements are discussed for your particular assignment.",
  },
  {
    question: "Do you find international buyers?",
    answer:
      "Finding or guaranteeing overseas buyers is not our core service. We support the export process and related advisory; we do not promise sales contracts or international orders.",
  },
  {
    question: "How long will the export process take?",
    answer:
      "Timing depends on the commodity, documents, destination, applicable procedures and the parties involved. We discuss your requirement and the relevant next steps rather than promising a fixed clearance or shipment timeline.",
  },
] as const;
