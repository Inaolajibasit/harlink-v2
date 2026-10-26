export type ExportEnquiry = {
  contactName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  commodity: string;
  volume: string;
  destination: string;
  timing: string;
  message: string;
};

// Preserve the fields consumed by the existing EmailJS template. Shipment
// details are also included in message so an unchanged template cannot lose them.
export function buildEnquiryPayload(data: ExportEnquiry, serviceLabel: string) {
  const contactName = data.contactName.trim();
  const [firstName, ...remainingName] = contactName.split(/\s+/);
  const optional = (value: string) => value.trim() || "Not specified";
  return {
    firstName,
    lastName: remainingName.join(" "),
    fullName: contactName,
    email: data.email.trim(),
    phone: data.phone.trim(),
    company: data.company.trim(),
    service: serviceLabel,
    commodity: data.commodity.trim(),
    volume: data.volume.trim(),
    destination: data.destination.trim(),
    timing: data.timing.trim(),
    message: [
      `Business: ${data.company.trim()}`,
      `Service requested: ${serviceLabel}`,
      `Commodity / cargo: ${data.commodity.trim()}`,
      `Approximate volume: ${optional(data.volume)}`,
      `Destination: ${optional(data.destination)}`,
      `Preferred timing: ${optional(data.timing)}`,
      "",
      "Enquiry:",
      data.message.trim(),
    ].join("\n"),
  };
}
