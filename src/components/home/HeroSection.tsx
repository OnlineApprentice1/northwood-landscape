"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const blobKeyframes = `
@keyframes blob-drift-1 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
  }
  25% {
    transform: translate(15px, -20px) scale(1.03);
    border-radius: 50% 40% 50% 60% / 60% 40% 50% 50%;
  }
  50% {
    transform: translate(-10px, 15px) scale(0.97);
    border-radius: 60% 50% 40% 50% / 50% 60% 50% 40%;
  }
  75% {
    transform: translate(20px, 10px) scale(1.02);
    border-radius: 45% 55% 60% 40% / 55% 45% 50% 50%;
  }
}

@keyframes blob-drift-2 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    border-radius: 50% 50% 40% 60% / 60% 40% 50% 50%;
  }
  33% {
    transform: translate(-20px, 15px) scale(1.04);
    border-radius: 60% 40% 55% 45% / 45% 55% 40% 60%;
  }
  66% {
    transform: translate(15px, -10px) scale(0.96);
    border-radius: 40% 60% 50% 50% / 50% 50% 60% 40%;
  }
}

@keyframes blob-drift-3 {
  0%, 100% {
    transform: translate(0, 0) scale(1);
    border-radius: 55% 45% 50% 50% / 50% 50% 45% 55%;
  }
  50% {
    transform: translate(10px, -15px) scale(1.05);
    border-radius: 45% 55% 55% 45% / 55% 45% 50% 50%;
  }
}
`;

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: blobKeyframes }} />

      <section
        ref={sectionRef}
        className="section-bg-deep relative min-h-screen overflow-hidden"
      >
        {/* Blob 1 — Large, top-right */}
        <motion.div
          className="blob-shape pointer-events-none absolute -right-16 -top-20 h-96 w-96 md:right-[8%] md:top-[5%]"
          style={{
            background: "oklch(35% 0.14 145 / 0.20)",
            animation: "blob-drift-1 20s ease-in-out infinite",
            y: blob1Y,
          }}
          aria-hidden="true"
        />

        {/* Blob 2 — Medium, centre-left */}
        <motion.div
          className="blob-shape-alt pointer-events-none absolute left-[5%] top-[40%] h-64 w-64 md:left-[12%] md:top-[35%]"
          style={{
            background: "oklch(65% 0.20 148 / 0.12)",
            animation: "blob-drift-2 24s ease-in-out infinite",
            y: blob2Y,
          }}
          aria-hidden="true"
        />

        {/* Blob 3 — Small, bottom-right (hidden on mobile) */}
        <motion.div
          className="blob-shape pointer-events-none absolute bottom-[15%] right-[15%] hidden h-48 w-48 sm:block"
          style={{
            background: "oklch(35% 0.10 145 / 0.15)",
            animation: "blob-drift-3 22s ease-in-out infinite",
            y: blob3Y,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 pt-32 sm:px-10 md:items-center md:pb-0 lg:px-16">
          <div className="w-full md:w-3/5 lg:w-1/2">
            <Reveal animation="clip-reveal">
              <div className="flex flex-col gap-6">
                {/* Badge */}
                <span
                  className="badge-label inline-block w-fit"
                  style={{ color: "var(--clr-accent)" }}
                >
                  Third-Generation Landscaping
                </span>

                {/* Heading */}
                <h1
                  className="type-hero"
                  style={{
                    color: "var(--clr-text-primary)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Landscapes That
                  <br />
                  Grow With You
                </h1>

                {/* Subheading */}
                <p
                  className="type-hero-sub max-w-lg"
                  style={{ color: "var(--clr-text-secondary)" }}
                >
                  Design, hardscape, and year-round care for Barrie homeowners
                  who want outdoor spaces built to last.
                </p>

                {/* CTAs */}
                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
                  <Link href="/contact" className="btn-profile group">
                    Get a Free Estimate
                    <ArrowRight
                      className="ml-2 inline-block h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link href="#gallery" className="btn-profile-ghost group">
                    <Eye
                      className="mr-2 inline-block h-4 w-4"
                      aria-hidden="true"
                    />
                    View Our Work
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
