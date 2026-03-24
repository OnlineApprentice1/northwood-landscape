import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}. Serving ${siteConfig.serviceArea} with professional landscaping services.`,
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="section-spacious" style={{ backgroundColor: "var(--clr-surface-1)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <span className="badge-label mb-4 inline-block">Get in Touch</span>
          </Reveal>
          <Reveal>
            <h1 className="type-hero mb-6" style={{ color: "var(--clr-text-primary)" }}>
              Let&apos;s Build Something Together
            </h1>
          </Reveal>
          <Reveal>
            <p className="type-body-lg mx-auto max-w-2xl" style={{ color: "var(--clr-text-secondary)" }}>
              Whether you have a detailed plan or just a rough idea, we&apos;re here to help make it real.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-standard" style={{ backgroundColor: "var(--clr-surface-1)" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column — Contact Form */}
            <Reveal>
              <div className="card-featured p-6 sm:p-8">
                <h2
                  className="type-section mb-6"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </Reveal>

            {/* Right Column — Info + Map */}
            <div className="flex flex-col gap-8">
              <Reveal>
                <div className="card-standard p-6 sm:p-8">
                  <h2
                    className="type-section mb-6"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    Contact Information
                  </h2>

                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <Phone
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <p
                          className="type-small mb-1 font-medium uppercase tracking-wide"
                          style={{ color: "var(--clr-text-muted)" }}
                        >
                          Phone
                        </p>
                        <a
                          href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                          className="type-body font-medium"
                          style={{
                            color: "var(--clr-text-primary)",
                            transitionProperty: "color",
                            transitionDuration: "200ms",
                          }}
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <Mail
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <p
                          className="type-small mb-1 font-medium uppercase tracking-wide"
                          style={{ color: "var(--clr-text-muted)" }}
                        >
                          Email
                        </p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="type-body font-medium"
                          style={{
                            color: "var(--clr-text-primary)",
                            transitionProperty: "color",
                            transitionDuration: "200ms",
                          }}
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <MapPin
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <p
                          className="type-small mb-1 font-medium uppercase tracking-wide"
                          style={{ color: "var(--clr-text-muted)" }}
                        >
                          Location
                        </p>
                        <p className="type-body" style={{ color: "var(--clr-text-primary)" }}>
                          {siteConfig.address}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <Clock
                        className="mt-0.5 h-5 w-5 shrink-0"
                        style={{ color: "var(--clr-accent)" }}
                      />
                      <div>
                        <p
                          className="type-small mb-1 font-medium uppercase tracking-wide"
                          style={{ color: "var(--clr-text-muted)" }}
                        >
                          Hours
                        </p>
                        <p className="type-body" style={{ color: "var(--clr-text-primary)" }}>
                          Mon&ndash;Fri 7am&ndash;6pm
                        </p>
                        <p className="type-body" style={{ color: "var(--clr-text-primary)" }}>
                          Sat 8am&ndash;2pm
                        </p>
                      </div>
                    </li>
                  </ul>

                  <div
                    className="mt-6 rounded-lg p-4"
                    style={{ backgroundColor: "var(--clr-surface-2)" }}
                  >
                    <p className="type-small" style={{ color: "var(--clr-text-secondary)" }}>
                      <span className="font-semibold" style={{ color: "var(--clr-text-primary)" }}>
                        Service Area:
                      </span>{" "}
                      {siteConfig.serviceArea}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Google Maps Embed */}
              <Reveal>
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    src={siteConfig.mapEmbedUrl}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of ${siteConfig.address}`}
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
