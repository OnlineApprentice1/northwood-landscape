"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine } from "lucide-react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-base-300/30"
      style={{ background: "oklch(12% 0.02 145 / 0.85)" }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <TreePine className="w-6 h-6" style={{ color: "var(--clr-accent)" }} />
          <span className="type-card" style={{ color: "var(--clr-text-primary)", fontFamily: "var(--font-heading)" }}>
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="type-small hover:opacity-100 transition-opacity"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-profile text-sm">
            Get a Free Estimate
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ color: "var(--clr-text-primary)" }}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-b border-base-300/30"
            style={{ background: "oklch(12% 0.02 145 / 0.95)", backdropFilter: "blur(16px)" }}
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="type-body py-2 transition-opacity hover:opacity-100"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-profile text-sm w-fit mt-2"
              >
                Get a Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
