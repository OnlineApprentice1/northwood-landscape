import type { Metadata } from "next";
import ServiceTabs from "@/components/ServiceTabs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Landscape solutions designed for Simcoe County's climate, soil, and seasons. Design, hardscape, maintenance, water features, and snow removal.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section
        className="section-spacious"
        style={{ backgroundColor: "var(--clr-surface-1)" }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h1
              className="type-hero"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Our Services
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="type-hero-sub mt-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Landscape solutions designed for Simcoe County&apos;s climate,
              soil, and seasons.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Tabs */}
      <ServiceTabs />
    </main>
  );
}
