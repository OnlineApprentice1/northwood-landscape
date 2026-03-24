"use client";

import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "They transformed our backyard from a muddy mess into something we actually use every weekend. The stone patio and garden beds are exactly what we wanted.",
    name: "Sarah & David Chen",
    badge: "Full Landscape",
    cardClass: "card-featured",
    delay: 0,
  },
  {
    quote:
      "Marcus and his crew rebuilt our retaining wall after it failed twice with other contractors. Rock solid — literally. Three winters and not a crack.",
    name: "Jim Faulkner",
    badge: "Hardscape",
    cardClass: "card-standard",
    delay: 0.15,
  },
  {
    quote:
      "We've used Northwood for spring cleanups and lawn care for four years. Reliable, on time, and our neighbours keep asking who does our yard.",
    name: "Priya Sharma",
    badge: "Seasonal Care",
    cardClass: "card-standard",
    delay: 0.3,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-bg-texture section-standard">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned */}
        <div className="mb-12">
          <span className="badge-label mb-3 inline-block">What Clients Say</span>
          <h2
            className="type-section"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Built on Trust, Not Just Topsoil
          </h2>
        </div>

        {/* Testimonial grid with offset */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} animation="rotate-in" delay={t.delay}>
              <div
                className={`${t.cardClass} flex flex-col gap-4 p-6 ${
                  i === 1 ? "lg:mt-8" : ""
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4"
                      style={{ color: "var(--clr-accent)" }}
                      fill="var(--clr-accent)"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="type-body italic"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Accent divider */}
                <div
                  className="h-px w-full"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                />

                {/* Name + badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className="type-small font-bold"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    {t.name}
                  </span>
                  <span className="badge-moss">{t.badge}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
