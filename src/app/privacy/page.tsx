import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information in compliance with PIPEDA.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main
      className="section-spacious"
      style={{ color: "var(--clr-text-primary)" }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="type-section mb-4">Privacy Policy</h1>
        <p
          className="type-body mb-12"
          style={{ color: "var(--clr-text-muted)" }}
        >
          Last updated: March 24, 2026
        </p>

        <div className="space-y-10">
          {/* Introduction */}
          <section>
            <p className="type-body" style={{ color: "var(--clr-text-secondary)" }}>
              Northwood Landscape Co. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
              &ldquo;us&rdquo;) is committed to protecting the privacy of our
              customers and website visitors. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your personal information in
              accordance with the Personal Information Protection and Electronic
              Documents Act (PIPEDA) and applicable provincial legislation.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Information We Collect
            </h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We may collect the following types of personal information when you
              interact with us:
            </p>
            <ul
              className="type-body list-disc pl-6 space-y-2"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              <li>
                <strong>Contact information</strong> — your name, email address,
                phone number, and mailing address when you submit a contact form,
                request an estimate, or communicate with us directly.
              </li>
              <li>
                <strong>Property details</strong> — information about your
                property relevant to the services you are requesting, such as
                address, lot size, and site conditions.
              </li>
              <li>
                <strong>Payment information</strong> — billing details necessary
                to process payments for our services, handled through secure
                third-party payment processors.
              </li>
              <li>
                <strong>Website usage data</strong> — technical information such
                as your IP address, browser type, pages visited, and time spent
                on our site, collected through cookies and analytics tools.
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We use your personal information for the following purposes:
            </p>
            <ul
              className="type-body list-disc pl-6 space-y-2"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              <li>To respond to your enquiries and provide estimates.</li>
              <li>
                To deliver, schedule, and manage landscaping and related services.
              </li>
              <li>To process invoices and payments.</li>
              <li>
                To send service reminders, seasonal maintenance notifications, or
                follow-up communications you have consented to receive.
              </li>
              <li>
                To improve our website, services, and customer experience.
              </li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          {/* Disclosure of Information */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Disclosure of Information
            </h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We do not sell, rent, or trade your personal information to third
              parties. We may share your information in the following limited
              circumstances:
            </p>
            <ul
              className="type-body list-disc pl-6 space-y-2"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              <li>
                <strong>Service providers</strong> — trusted third parties who
                assist us in operating our business (e.g., payment processors,
                email service providers), bound by confidentiality agreements.
              </li>
              <li>
                <strong>Legal requirements</strong> — when required by law, court
                order, or governmental regulation.
              </li>
              <li>
                <strong>Business transfers</strong> — in the event of a merger,
                acquisition, or sale of assets, your information may be
                transferred as part of that transaction.
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Data Retention</h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We retain your personal information only as long as necessary to
              fulfil the purposes for which it was collected, to provide our
              services, and to meet legal and accounting obligations. When your
              information is no longer required, we securely delete or anonymise
              it.
            </p>
          </section>

          {/* Your Rights Under PIPEDA */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Your Rights Under PIPEDA
            </h2>
            <p
              className="type-body mb-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Under PIPEDA, you have the right to:
            </p>
            <ul
              className="type-body list-disc pl-6 space-y-2"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              <li>
                <strong>Access</strong> your personal information held by us and
                receive a copy upon request.
              </li>
              <li>
                <strong>Correct</strong> any inaccurate or incomplete personal
                information we hold about you.
              </li>
              <li>
                <strong>Withdraw consent</strong> for the collection, use, or
                disclosure of your personal information, subject to legal or
                contractual restrictions.
              </li>
              <li>
                <strong>File a complaint</strong> with the Office of the Privacy
                Commissioner of Canada if you believe your privacy rights have
                been violated.
              </li>
            </ul>
            <p
              className="type-body mt-4"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              To exercise any of these rights, please contact us using the
              details below.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Cookies</h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Our website uses cookies and similar technologies to enhance your
              browsing experience and gather usage analytics. Cookies are small
              text files stored on your device. You can control cookie settings
              through your browser preferences. Disabling cookies may limit
              certain features of the website. We use analytics cookies (such as
              Google Analytics) to understand how visitors interact with our site.
              These tools collect information anonymously and report trends
              without identifying individual visitors.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">Contact Us</h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              If you have questions or concerns about this Privacy Policy or how
              we handle your personal information, please contact us:
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

          {/* Changes to This Policy */}
          <section>
            <h2 className="type-body-lg font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable legislation. Any updates
              will be posted on this page with a revised &ldquo;Last
              updated&rdquo; date. We encourage you to review this policy
              periodically to stay informed about how we protect your
              information.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
