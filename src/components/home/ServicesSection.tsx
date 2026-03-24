"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const serviceImages = [
  "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop&q=80",
];

export default function ServicesSection() {
  const services = siteConfig.services;

  return (
    <section className="section-standard section-bg-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="badge-label mb-4 inline-block">What We Do</span>
          <h2
            className="type-section text-left"
            style={{ color: "var(--clr-text-primary)" }}
          >
            Built for Simcoe County&apos;s Climate
          </h2>
        </div>

        <div className="flex flex-col gap-20 lg:gap-24">
          {services.slice(0, 5).map((service, index) => {
            const isEven = index % 2 === 1;
            const image = serviceImages[index] || serviceImages[0];

            return (
              <Reveal
                key={service.name || index}
                animation={isEven ? "slide-right" : "slide-left"}
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={service.name || `Service ${index + 1}`}
                      fill
                      className="img-elevated object-cover rounded-xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Text */}
                  <div
                    className={`flex flex-col gap-4 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <h3
                      className="type-card font-semibold"
                      style={{
                        color: "var(--clr-text-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {service.name}
                    </h3>
                    <p
                      className="type-body max-w-lg"
                      style={{ color: "var(--clr-text-secondary)" }}
                    >
                      {service.description}
                    </p>
                    <Link
                      href="/services"
                      className="group mt-2 inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                      style={{ color: "var(--clr-accent)" }}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
