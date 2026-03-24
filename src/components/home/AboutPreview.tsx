"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="section-standard">
      {/* Grain divider */}
      <div className="grain-divider">
        <span />
        <span />
        <span />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="fade-up">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Image — 7 columns */}
            <div className="lg:col-span-7">
              <div className="img-elevated overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                  alt="The Northwood Landscape team working together on a project"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            {/* Text — 5 columns */}
            <div className="flex flex-col gap-5 lg:col-span-5">
              <span className="badge-label inline-block w-fit">Since 1962</span>

              <h2
                className="type-section"
                style={{ color: "var(--clr-text-primary)" }}
              >
                Three Generations of Landscape Craft
              </h2>

              <p
                className="type-body"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                What started with a pickup truck and a push mower in Barrie&apos;s
                east end has grown into a full-service landscape team. Every
                project we take on carries sixty years of learning — about this
                soil, this climate, and what actually lasts through a Simcoe
                County winter.
              </p>

              <Link
                href="/about"
                className="btn-profile-ghost group mt-2 inline-flex w-fit items-center gap-2"
              >
                Meet the Team
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
