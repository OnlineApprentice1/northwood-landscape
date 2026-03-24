import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of service for ${siteConfig.name}. Review the terms and conditions that govern the use of our landscaping services in Barrie, Ontario.`,
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <main
      className="section-spacious"
      style={{ color: "var(--clr-text-primary)" }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="type-section mb-4">Terms of Service</h1>
        <p
          className="type-body mb-12"
          style={{ color: "var(--clr-text-muted)" }}
        >
          Last updated: March 24, 2026
        </p>

        <div className="space-y-10">
          {/* Agreement to Terms */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Agreement to Terms
            </h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              By accessing our website or engaging Northwood Landscape Co.
              (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) for
              landscaping services, you agree to be bound by these Terms of
              Service. If you do not agree with any part of these terms, please
              do not use our website or services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Services</h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We provide professional landscaping services in Barrie, Ontario and
              the surrounding Simcoe County area, including but not limited to:
            </p>
            <ul
              className="type-body list-disc pl-6 space-y-2"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              <li>Landscape design and installation</li>
              <li>Hardscape and stonework</li>
              <li>Seasonal lawn and garden maintenance</li>
              <li>Water features and drainage solutions</li>
              <li>Snow removal and winter property care</li>
            </ul>
            <p
              className="type-body mt-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              The scope, timeline, and specifications of each project are
              outlined in a written estimate or service agreement provided before
              work begins. We reserve the right to subcontract portions of work
              to qualified professionals when necessary.
            </p>
          </section>

          {/* Estimates and Pricing */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Estimates and Pricing
            </h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              All estimates are provided free of charge and are valid for 30 days
              from the date of issue unless otherwise stated. Estimates are based
              on the information available at the time of the site assessment.
              Should unforeseen conditions arise (e.g., hidden subsurface
              obstacles, grade changes, or access limitations), we will
              communicate any pricing adjustments before proceeding with
              additional work. Final pricing may vary from the initial estimate
              based on actual site conditions and any client-requested changes to
              the original scope.
            </p>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Payment Terms</h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Payment terms are outlined in your service agreement. For larger
              projects, a deposit may be required before work begins, with the
              remaining balance due upon completion. Invoices are due within 30
              days of the invoice date unless otherwise agreed in writing.
              Overdue accounts may be subject to a late fee of 1.5% per month on
              the outstanding balance. We accept payment by cheque, e-transfer,
              and major credit cards.
            </p>
          </section>

          {/* Warranties */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Warranties</h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We stand behind the quality of our work. Hardscape installations
              are covered by a one-year workmanship warranty from the date of
              completion. Plant material is warranted for one growing season from
              the date of installation, provided proper care and watering
              instructions are followed.
            </p>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Warranties do not cover damage caused by severe weather events,
              neglect, improper maintenance, third-party modifications, or
              normal wear and tear. Warranty claims must be reported to us in
              writing within the warranty period.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Limitation of Liability
            </h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              To the fullest extent permitted by law, Northwood Landscape Co.
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from or related to our
              services or this agreement. Our total liability for any claim
              arising under these terms shall not exceed the amount paid by you
              for the specific service giving rise to the claim. Nothing in these
              terms excludes or limits liability that cannot be excluded or
              limited under applicable Canadian law.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Governing Law</h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              These Terms of Service are governed by and construed in accordance
              with the laws of the Province of Ontario and the federal laws of
              Canada applicable therein, without regard to conflict of law
              principles. Any disputes arising from these terms or our services
              shall be subject to the exclusive jurisdiction of the courts of the
              Province of Ontario.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Contact</h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              If you have questions about these Terms of Service, please contact
              us:
            </p>
            <div
              className="type-body mt-4 space-y-1"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              <p>Northwood Landscape Co.</p>
              <p>Barrie, Ontario</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@northwoodlandscape.ca"
                  className="underline"
                  style={{ color: "var(--clr-accent)" }}
                >
                  info@northwoodlandscape.ca
                </a>
              </p>
              <p>Phone: (705) 555-0173</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
