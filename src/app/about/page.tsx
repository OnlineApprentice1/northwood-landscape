import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Leaf, Heart, Clock, Shield, TreePine } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Northwood Landscape | Three Generations of Landscape Craft",
  description:
    "Sixty years of building outdoor spaces in Simcoe County. Meet the Thibault family and the crew behind Northwood Landscape.",
};

export default function AboutPage() {
  return (
    <main>
      {/* ── Page Hero ── */}
      <section
        className="section-spacious"
        style={{ backgroundColor: "var(--clr-surface-1)" }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal animation="fade-up">
            <span className="badge-label mb-4 inline-block">Our Story</span>
            <h1 className="type-hero mb-6">
              Three Generations of Landscape Craft
            </h1>
            <p
              className="type-body-lg mx-auto max-w-2xl"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              From a pickup truck and a push mower to a full-service landscape
              team — sixty years of building outdoor spaces that belong in Simcoe
              County.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section
        className="section-standard"
        style={{ backgroundColor: "var(--clr-surface-2)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal animation="fade-up">
              <div className="img-elevated overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="The Northwood Landscape team working together"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal animation="fade-up">
              <div className="space-y-5">
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Marcus Thibault&rsquo;s grandfather, Henri, started clearing
                  land for Barrie&rsquo;s first subdivisions in 1962. Back then,
                  landscaping meant a level grade and some sod. Henri saw it
                  differently — he planted trees on every lot he cleared,
                  including the white pines that still line Bayfield Street.
                </p>
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Marcus&rsquo;s father, Pierre, turned the family trade into a
                  proper business in the 1980s. He added hardscape, brought in
                  the county&rsquo;s first skid steer, and built a reputation
                  for retaining walls that never moved.
                </p>
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Marcus joined the crew at sixteen, took over at thirty, and
                  brought design into the mix. Today, Northwood Landscape runs a
                  team of twelve — arborists, masons, and designers who know
                  Simcoe County&rsquo;s clay soils, frost lines, and native
                  species like the back of their hands.
                </p>
                <p
                  className="type-body font-medium"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Every project we take on carries sixty years of learning.
                  That&rsquo;s not a sales pitch — it&rsquo;s just how long
                  we&rsquo;ve been doing this.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values Section ── */}
      <section
        className="section-standard"
        style={{ backgroundColor: "var(--clr-surface-1)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <Reveal animation="fade-up">
            <h2
              className="type-section mb-14 text-center"
              style={{ color: "var(--clr-text-primary)" }}
            >
              What We Build On
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 — offset higher */}
            <Reveal animation="scale-up">
              <div
                className="card-standard rounded-2xl p-8 md:-translate-y-4"
                style={{ backgroundColor: "var(--clr-surface-2)" }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                >
                  <Leaf
                    className="h-6 w-6"
                    style={{ color: "var(--clr-accent)" }}
                  />
                </div>
                <h3
                  className="type-card mb-3"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Rooted in the Land
                </h3>
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  We design with native species and local stone. Every material
                  we use belongs in this climate.
                </p>
              </div>
            </Reveal>

            {/* Card 2 — offset lower */}
            <Reveal animation="scale-up">
              <div
                className="card-standard rounded-2xl p-8 md:translate-y-4"
                style={{ backgroundColor: "var(--clr-surface-2)" }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                >
                  <Shield
                    className="h-6 w-6"
                    style={{ color: "var(--clr-accent)" }}
                  />
                </div>
                <h3
                  className="type-card mb-3"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Built to Last
                </h3>
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  We dig deeper, compact harder, and plan for freeze-thaw. Our
                  work outlasts the trends.
                </p>
              </div>
            </Reveal>

            {/* Card 3 — offset higher */}
            <Reveal animation="scale-up">
              <div
                className="card-standard rounded-2xl p-8 md:-translate-y-4"
                style={{ backgroundColor: "var(--clr-surface-2)" }}
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                >
                  <Heart
                    className="h-6 w-6"
                    style={{ color: "var(--clr-accent)" }}
                  />
                </div>
                <h3
                  className="type-card mb-3"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  Honest Work
                </h3>
                <p
                  className="type-body"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  No upsells, no surprises. We quote what it costs, we show up
                  when we say, and we stand behind the finished product.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Team Section ── */}
      <section
        className="section-standard"
        style={{ backgroundColor: "var(--clr-surface-2)" }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <Reveal animation="fade-up">
            <h2
              className="type-section mb-4 text-center"
              style={{ color: "var(--clr-text-primary)" }}
            >
              The Crew
            </h2>
            <p
              className="type-body mx-auto mb-12 max-w-2xl text-center"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Twelve people who&rsquo;d rather be outside than anywhere else.
              Certified arborists, Red Seal masons, and landscape designers
              who&rsquo;ve been working this soil for years.
            </p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Team Card 1 */}
            <Reveal animation="fade-up">
              <div
                className="card-compact flex items-center gap-5 rounded-xl p-6"
                style={{ backgroundColor: "var(--clr-surface-1)" }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                >
                  <Users
                    className="h-6 w-6"
                    style={{ color: "var(--clr-accent)" }}
                  />
                </div>
                <div>
                  <h3
                    className="type-card"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    Marcus Thibault
                  </h3>
                  <p
                    className="type-small"
                    style={{ color: "var(--clr-text-muted)" }}
                  >
                    Owner &amp; Lead Designer
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Team Card 2 */}
            <Reveal animation="fade-up">
              <div
                className="card-compact flex items-center gap-5 rounded-xl p-6"
                style={{ backgroundColor: "var(--clr-surface-1)" }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                >
                  <TreePine
                    className="h-6 w-6"
                    style={{ color: "var(--clr-accent)" }}
                  />
                </div>
                <div>
                  <h3
                    className="type-card"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    The Field Crew
                  </h3>
                  <p
                    className="type-small"
                    style={{ color: "var(--clr-text-muted)" }}
                  >
                    8 skilled landscapers and arborists
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Team Card 3 */}
            <Reveal animation="fade-up">
              <div
                className="card-compact flex items-center gap-5 rounded-xl p-6"
                style={{ backgroundColor: "var(--clr-surface-1)" }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--clr-accent-muted)" }}
                >
                  <Clock
                    className="h-6 w-6"
                    style={{ color: "var(--clr-accent)" }}
                  />
                </div>
                <div>
                  <h3
                    className="type-card"
                    style={{ color: "var(--clr-text-primary)" }}
                  >
                    Design &amp; Admin
                  </h3>
                  <p
                    className="type-small"
                    style={{ color: "var(--clr-text-muted)" }}
                  >
                    Planning, permits, and keeping it all running
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-spacious section-bg-gradient">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal animation="fade-up">
            <h2
              className="type-section mb-5"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Let&rsquo;s Talk About Your Project
            </h2>
            <p
              className="type-body mx-auto mb-8 max-w-xl"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              Every landscape starts with a conversation. Tell us what
              you&rsquo;re thinking.
            </p>
            <Link href="/contact" className="btn-profile">
              Get a Free Estimate
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
