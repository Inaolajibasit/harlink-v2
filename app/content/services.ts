import { exportServices } from "./home";

export const services = [
  {
    ...exportServices[0],
    slug: "export-agency-documentation",
    category: "Core export support",
    image: "/bg-42.jpg",
    imageAlt: "Containers arranged at a cargo terminal",
    introduction:
      "An export involves a sequence of documents, procedures and follow-ups. Harlink helps bring that work together, with a scope built around your goods and the support you need.",
    scope: [
      {
        title: "Understand the requirement",
        body: "Discuss the shipment, destination and the export activities you need us to coordinate.",
      },
      {
        title: "Bring documents together",
        body: "Coordinate the preparation, gathering and follow-up of paperwork relevant to the agreed assignment.",
      },
      {
        title: "Connect the next steps",
        body: "Liaise with relevant parties and supporting service providers through the agreed export workflow.",
      },
    ],
    inputs: [
      "Commodity or goods description",
      "Approximate quantity or container volume",
      "Destination and preferred timing",
      "Documents already available and support required",
    ],
    boundary:
      "The documents and procedures involved depend on the goods, destination and engagement. We agree our responsibilities with you before proceeding; regulatory decisions remain with the responsible authorities.",
    question: "Can I enquire before all my documents are ready?",
    answer:
      "Yes. Explain what you plan to export, what is already in place and where you need help. We can discuss the preparation and coordination relevant to your requirement.",
  },
  {
    ...exportServices[1],
    slug: "customs-regulatory-coordination",
    category: "Procedural coordination",
    image: "/terminal1.jpg",
    imageAlt:
      "Aerial view of containers and cargo-handling equipment beside a vessel",
    introduction:
      "Clear preparation matters when an export involves several institutions and service providers. We support the coordination of applicable export procedures within the responsibilities agreed for your shipment.",
    scope: [
      {
        title: "Clarify applicable steps",
        body: "Discuss the relevant documentation and procedural interfaces for the requirement you bring to us.",
      },
      {
        title: "Coordinate with relevant parties",
        body: "Follow up with the bodies and service providers involved in your agreed export workflow.",
      },
      {
        title: "Keep the assignment connected",
        body: "Bring outstanding requirements and next steps back into the wider export plan.",
      },
    ],
    inputs: [
      "Cargo description and destination",
      "Available export documentation",
      "Current stage of the process",
      "Specific coordination or terminal-related support needed",
    ],
    boundary:
      "Our role is coordination and support within the agreed scope. Inspections, approvals and regulatory decisions belong to the relevant authorities. Terminal-related work is discussed for the individual assignment; no terminal ownership is implied.",
    question: "Can you guarantee an approval or clearance time?",
    answer:
      "No fixed outcome or clearance time is promised. Requirements and timing depend on the cargo, documents, applicable procedures and decisions of the responsible parties.",
  },
  {
    ...exportServices[2],
    slug: "export-advisory",
    category: "Planning & readiness",
    image: "/bg-222.jpg",
    imageAlt: "Overview of a container port illuminated at night",
    introduction:
      "When you are considering an export, a focused conversation can help define the work ahead. Our advisory offering explores your commodity, readiness and the practical support relevant to your situation.",
    scope: [
      {
        title: "Discuss export readiness",
        body: "Review where you are in the process and the questions you need to resolve before moving forward.",
      },
      {
        title: "Consider the commodity and destination",
        body: "Discuss commodity-related considerations and potential destination-market questions within an agreed advisory scope.",
      },
      {
        title: "Define a practical engagement",
        body: "Identify the preparation, documentation or agency coordination you want support with next.",
      },
    ],
    inputs: [
      "Your business and export objectives",
      "Commodity or product under consideration",
      "Potential destination, if known",
      "Current preparation and key questions",
    ],
    boundary:
      "Advisory deliverables are agreed for each engagement. Finding overseas buyers, securing sales contracts and guaranteeing market access are not our core service.",
    question: "Do I need a confirmed destination before contacting you?",
    answer:
      "You can enquire while your plans are still taking shape. Share the commodity and the questions you have so we can discuss whether an advisory engagement is appropriate.",
  },
  {
    ...exportServices[3],
    slug: "trucking-haulage",
    category: "Supporting cargo logistics",
    image: "/bg-221.jpg",
    imageAlt: "Containers and lifting equipment in a cargo handling area",
    introduction:
      "Ground transport needs to fit the wider cargo plan. Harlink uses company-owned trucks to support agreed movements of goods and containers as part of its haulage capability.",
    scope: [
      {
        title: "Discuss the movement",
        body: "Share the cargo, collection point, destination and timing so we can assess the transport requirement.",
      },
      {
        title: "Agree transport arrangements",
        body: "Discuss the movement, handling interfaces and responsibilities relevant to your assignment.",
      },
      {
        title: "Connect with the export plan",
        body: "Coordinate agreed haulage with the preparation, storage or terminal steps involved in your engagement.",
      },
    ],
    inputs: [
      "Cargo type and approximate weight or volume",
      "Collection and delivery locations",
      "Container details, where relevant",
      "Preferred movement date and handling needs",
    ],
    boundary:
      "Vehicle suitability, route, availability and the scope of the movement are discussed before agreement. Contact us to confirm whether a particular cargo or route can be supported.",
    question: "Can I ask about haulage for a specific route?",
    answer:
      "Yes. Provide the collection and delivery points, cargo details and preferred date. The team can discuss the requirement and the services available for that assignment.",
  },
  {
    ...exportServices[4],
    slug: "warehousing-coordination",
    category: "Partner-enabled storage",
    image: "/warehouse.jpg",
    imageAlt: "Storage racks and packaged goods inside a warehouse",
    introduction:
      "Some export plans need storage between preparation and movement. Harlink coordinates warehousing through partners, bringing the storage requirement into the wider assignment.",
    scope: [
      {
        title: "Understand storage needs",
        body: "Discuss the commodity, quantity, location and intended storage period.",
      },
      {
        title: "Coordinate partner arrangements",
        body: "Explore the storage and related handling needed through the relevant partner arrangements.",
      },
      {
        title: "Plan the next movement",
        body: "Connect agreed storage arrangements with cargo preparation, collection or onward movement.",
      },
    ],
    inputs: [
      "Commodity, packaging and quantity",
      "Preferred storage location",
      "Expected storage period",
      "Handling requirements and planned onward movement",
    ],
    boundary:
      "Warehouses are partner-provided, not owned by Harlink. Facility suitability, availability, handling and any specific storage conditions must be confirmed for the engagement.",
    question: "Does Harlink own the storage facilities?",
    answer:
      "No. We coordinate warehousing through partners. Tell us your storage and handling requirements so we can discuss the arrangements relevant to your export.",
  },
] as const;

export const legacyServiceRoutes: Record<string, string> = {
  shipping: "/services",
  "custom-bonded-warehousing": "/services/warehousing-coordination",
  ept: "/services/customs-regulatory-coordination#scope",
  "clearing-and-forwarding": "/services/customs-regulatory-coordination",
  haulage: "/services/trucking-haulage",
  "import-and-export": "/services/export-agency-documentation",
};

export function findService(slug: string) {
  return services.find((service) => service.slug === slug);
}
export function serviceEnquiryHref(slug: string) {
  return `/contact?service=${encodeURIComponent(slug)}`;
}
