"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  LoaderCircle,
  TriangleAlert,
} from "lucide-react";
import { buildEnquiryPayload, type ExportEnquiry } from "../../../lib/enquiry";

type Status = "idle" | "sending" | "success" | "error";

export function ExportEnquiryForm({
  initialService = "not-sure",
  serviceOptions,
}: {
  initialService?: string;
  serviceOptions: readonly { slug: string; title: string }[];
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedService, setSelectedService] = useState(initialService);
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website") || "").trim()) {
      setStatus("error");
      return;
    }
    const value = (name: string) => String(data.get(name) || "").trim();
    const enquiry: ExportEnquiry = {
      contactName: value("contactName"),
      company: value("company"),
      email: value("email"),
      phone: value("phone"),
      service: value("service"),
      commodity: value("commodity"),
      volume: value("volume"),
      destination: value("destination"),
      timing: value("timing"),
      message: value("message"),
    };
    const serviceLabel =
      serviceOptions.find((item) => item.slug === enquiry.service)?.title ??
      "Not sure — please advise";
    sending.current = true;
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      // Existing public browser identifiers and delivery account are preserved.
      await emailjs.send(
        "service_pjurlkk",
        "template_joo186m",
        buildEnquiryPayload(enquiry, serviceLabel),
        "0qHGFMTFxCuMZ_MxO",
      );
      form.reset();
      setSelectedService(initialService);
      setStatus("success");
    } catch {
      // Do not log personal enquiry data or clear the form on failure.
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }

  return (
    <form
      id="enquiry-form"
      className="hl-enquiry-form"
      onSubmit={submit}
      method="post"
      aria-labelledby="form-heading"
      aria-busy={status === "sending"}
    >
      <div className="hl-form-heading">
        <span className="hl-eyebrow">Your requirement</span>
        <h2 id="form-heading">Tell us about your export.</h2>
        <p>Start with what you know. Fields marked * are required.</p>
      </div>
      <noscript>
        <p className="hl-form-notice">
          The enquiry form requires JavaScript. Please email{" "}
          <a href="mailto:harlinkinvestment@gmail.com">
            harlinkinvestment@gmail.com
          </a>{" "}
          instead.
        </p>
      </noscript>
      <fieldset disabled={status === "sending"} className="hl-form-fields">
        <legend className="sr-only">Contact and export requirement</legend>
        <div className="hl-form-grid">
          <div className="hl-field">
            <label htmlFor="contact-name">
              Contact name <span>*</span>
            </label>
            <input
              id="contact-name"
              name="contactName"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="Your full name"
            />
          </div>
          <div className="hl-field">
            <label htmlFor="company">
              Business name <span>*</span>
            </label>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              required
              maxLength={160}
              placeholder="Your company or business"
            />
          </div>
          <div className="hl-field">
            <label htmlFor="email">
              Email address <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              maxLength={200}
              placeholder="you@company.com"
            />
          </div>
          <div className="hl-field">
            <label htmlFor="phone">
              Phone <span className="hl-optional">Optional</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              maxLength={40}
              placeholder="Include your country code"
            />
          </div>
          <div className="hl-field hl-field--full">
            <label htmlFor="service">
              Where do you need support? <span>*</span>
            </label>
            <select
              id="service"
              name="service"
              value={selectedService}
              onChange={(event) => setSelectedService(event.target.value)}
              required
            >
              <option value="not-sure">Not sure — please advise</option>
              {serviceOptions.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div className="hl-field hl-field--full">
            <label htmlFor="commodity">
              Commodity or cargo <span>*</span>
            </label>
            <input
              id="commodity"
              name="commodity"
              required
              maxLength={200}
              placeholder="What are you planning to export?"
            />
          </div>
        </div>
        <details className="hl-shipment-details">
          <summary>
            Add shipment details <span>Optional</span>
            <ChevronDown size={16} aria-hidden="true" />
          </summary>
          <div className="hl-form-grid">
            <div className="hl-field">
              <label htmlFor="volume">Approximate volume</label>
              <input
                id="volume"
                name="volume"
                maxLength={100}
                placeholder="e.g. tonnes, bags or containers"
              />
            </div>
            <div className="hl-field">
              <label htmlFor="destination">Destination</label>
              <input
                id="destination"
                name="destination"
                maxLength={120}
                placeholder="Country or destination, if known"
              />
            </div>
            <div className="hl-field hl-field--full">
              <label htmlFor="timing">Preferred timing</label>
              <input
                id="timing"
                name="timing"
                maxLength={120}
                placeholder="When do you expect to need support?"
              />
            </div>
          </div>
        </details>
        <div className="hl-field">
          <label htmlFor="message">
            How can we help? <span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            maxLength={4000}
            rows={5}
            placeholder="Tell us where you are in the process and the support you need."
          />
        </div>
        <div className="hl-form-trap" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" autoComplete="off" tabIndex={-1} />
        </div>
        <p className="hl-form-privacy">
          Please share enquiry details only, without confidential documents.
          Your information is sent for Harlink to respond to your request.{" "}
          <Link href="/privacy">Read the enquiry privacy notice.</Link>
        </p>
        <button
          className="hl-action hl-action--ink hl-form-submit"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <span>Sending your enquiry…</span>
              <LoaderCircle
                size={18}
                className="hl-sending-spinner"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              <span>Send export enquiry</span>
              <ArrowUpRight size={19} aria-hidden="true" />
            </>
          )}
        </button>
      </fieldset>
      <div
        className="hl-form-feedback"
        role={status === "error" ? "alert" : "status"}
        aria-live={status === "error" ? "assertive" : "polite"}
        aria-atomic="true"
      >
        {status === "success" && (
          <div className="hl-form-success">
            <CheckCircle2 size={21} aria-hidden="true" />
            <p>
              Your enquiry was submitted to our email service. Thank you for
              contacting Harlink.
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="hl-form-error">
            <TriangleAlert size={21} aria-hidden="true" />
            <p>
              We couldn’t submit your enquiry. Your details are still here —
              please try again, or email{" "}
              <a href="mailto:harlinkinvestment@gmail.com">
                harlinkinvestment@gmail.com
              </a>
              .
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
