import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-bg-gradient relative overflow-hidden">
      {/* Grain divider */}
      <div className="grain-divider" aria-hidden="true">
        <span style={{ width: "35%" }} />
        <span style={{ width: "50%" }} />
        <span style={{ width: "25%" }} />
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="section-spacious relative z-10 mx-auto max-w-3xl px-6 text-center sm:px-10 lg:px-16">
        <h2
          className="type-section"
          style={{
            color: "var(--clr-text-primary)",
            fontFamily: "var(--font-heading)",
          }}
        >
          Ready to Transform Your Outdoor Space?
        </h2>

        <p
          className="mx-auto mt-6 max-w-2xl type-body-lg"
          style={{ color: "var(--clr-text-secondary)" }}
        >
          From the first sketch to the final planted bed, we bring three
          generations of expertise to every project. Call today for a free,
          no-obligation estimate.
        </p>

        {/* Phone number */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <Phone
            className="h-5 w-5"
            style={{ color: "var(--clr-accent)" }}
            aria-hidden="true"
          />
          <a
            href="tel:+17055551234"
            className="type-body-lg font-semibold transition-colors duration-300 hover:opacity-80"
            style={{
              color: "var(--clr-text-primary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            (705) 555-1234
          </a>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <Link href="/contact" className="btn-profile group">
            Get a Free Estimate
            <ArrowRight
              className="ml-2 inline-block h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
