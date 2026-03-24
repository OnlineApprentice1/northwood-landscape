import Link from "next/link";
import { Phone, Mail, MapPin, TreePine } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer style={{ background: "var(--clr-surface-2)", borderTop: "1px solid oklch(23% 0.02 145 / 0.5)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-5 h-5" style={{ color: "var(--clr-accent)" }} />
              <span className="type-card" style={{ color: "var(--clr-text-primary)", fontFamily: "var(--font-heading)" }}>
                {siteConfig.name}
              </span>
            </div>
            <p className="type-small" style={{ color: "var(--clr-text-muted)" }}>
              {siteConfig.tagline}. Third-generation landscaping in Barrie, Ontario.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="type-small font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--clr-text-primary)", fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="type-small transition-opacity hover:opacity-100"
                    style={{ color: "var(--clr-text-secondary)" }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="type-small font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--clr-text-primary)", fontFamily: "var(--font-heading)" }}>
              Services
            </h4>
            <ul className="space-y-2">
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link href="/services" className="type-small transition-opacity hover:opacity-100"
                    style={{ color: "var(--clr-text-secondary)" }}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="type-small font-semibold uppercase tracking-wider mb-4"
              style={{ color: "var(--clr-text-primary)", fontFamily: "var(--font-heading)" }}>
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="type-small flex items-center gap-2 transition-opacity hover:opacity-100"
                  style={{ color: "var(--clr-text-secondary)" }}>
                  <Phone className="w-4 h-4 shrink-0" style={{ color: "var(--clr-accent)" }} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="type-small flex items-center gap-2 transition-opacity hover:opacity-100"
                  style={{ color: "var(--clr-text-secondary)" }}>
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "var(--clr-accent)" }} />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="type-small flex items-center gap-2"
                  style={{ color: "var(--clr-text-secondary)" }}>
                  <MapPin className="w-4 h-4 shrink-0" style={{ color: "var(--clr-accent)" }} />
                  {siteConfig.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 type-caption"
          style={{ borderTop: "1px solid oklch(23% 0.02 145 / 0.3)", color: "var(--clr-text-muted)" }}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-opacity hover:opacity-100">Privacy Policy</Link>
            <Link href="/terms" className="transition-opacity hover:opacity-100">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
