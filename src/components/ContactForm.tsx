"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, service, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Unable to send your message. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle
          className="mb-4 h-12 w-12"
          style={{ color: "#22c55e" }}
        />
        <p
          className="type-card mb-2 font-semibold"
          style={{ color: "var(--clr-text-primary)" }}
        >
          Message sent!
        </p>
        <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
          We&apos;ll get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-profile mt-6"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const inputStyles: React.CSSProperties = {
    backgroundColor: "var(--clr-surface-2)",
    borderColor: "var(--clr-surface-3)",
    color: "var(--clr-text-primary)",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="type-small mb-1.5 block font-medium"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Name <span style={{ color: "var(--clr-accent)" }}>*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
          className="w-full rounded-lg border px-4 py-3 type-body outline-none"
          style={{
            ...inputStyles,
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "200ms",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-accent)";
            e.currentTarget.style.boxShadow = "0 0 0 2px color-mix(in srgb, var(--clr-accent) 25%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="type-small mb-1.5 block font-medium"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Email <span style={{ color: "var(--clr-accent)" }}>*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border px-4 py-3 type-body outline-none"
          style={{
            ...inputStyles,
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "200ms",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-accent)";
            e.currentTarget.style.boxShadow = "0 0 0 2px color-mix(in srgb, var(--clr-accent) 25%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="contact-phone"
          className="type-small mb-1.5 block font-medium"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Phone <span className="type-small" style={{ color: "var(--clr-text-muted)" }}>(optional)</span>
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(705) 555-0000"
          className="w-full rounded-lg border px-4 py-3 type-body outline-none"
          style={{
            ...inputStyles,
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "200ms",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-accent)";
            e.currentTarget.style.boxShadow = "0 0 0 2px color-mix(in srgb, var(--clr-accent) 25%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="contact-service"
          className="type-small mb-1.5 block font-medium"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Service You&apos;re Interested In
        </label>
        <select
          id="contact-service"
          name="service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full appearance-none rounded-lg border px-4 py-3 type-body outline-none"
          style={{
            ...inputStyles,
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "200ms",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-accent)";
            e.currentTarget.style.boxShadow = "0 0 0 2px color-mix(in srgb, var(--clr-accent) 25%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <option value="">Select a service</option>
          {siteConfig.services.map((svc) => (
            <option key={svc.slug} value={svc.name}>
              {svc.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="type-small mb-1.5 block font-medium"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          Message <span style={{ color: "var(--clr-accent)" }}>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your project..."
          className="w-full resize-vertical rounded-lg border px-4 py-3 type-body outline-none"
          style={{
            ...inputStyles,
            transitionProperty: "border-color, box-shadow",
            transitionDuration: "200ms",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-accent)";
            e.currentTarget.style.boxShadow = "0 0 0 2px color-mix(in srgb, var(--clr-accent) 25%, transparent)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--clr-surface-3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div
          className="flex items-center gap-3 rounded-lg p-4"
          style={{ backgroundColor: "rgba(239, 68, 68, 0.1)" }}
        >
          <AlertCircle className="h-5 w-5 shrink-0" style={{ color: "#ef4444" }} />
          <p className="type-small" style={{ color: "#ef4444" }}>
            {errorMessage}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-profile inline-flex w-full items-center justify-center gap-2 sm:w-auto"
        style={{
          opacity: status === "submitting" ? 0.7 : 1,
          cursor: status === "submitting" ? "not-allowed" : "pointer",
        }}
      >
        {status === "submitting" ? (
          <>
            <span
              className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current"
              style={{ borderTopColor: "transparent" }}
            />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
