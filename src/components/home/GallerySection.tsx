"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import StaggerGroup from "@/components/StaggerGroup";

const projects = [
  {
    title: "Landscape Design",
    description: "Custom layouts that work with your property's natural contours",
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&q=80",
    span: "large",
  },
  {
    title: "Hardscape",
    description: "Patios, walkways, and retaining walls built to last",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    span: "large",
  },
  {
    title: "Water Features",
    description: "Ponds, fountains, and drainage solutions",
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&h=600&fit=crop&q=80",
    span: "small",
  },
  {
    title: "Seasonal Care",
    description: "Year-round maintenance programs",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&q=80",
    span: "small",
  },
  {
    title: "Snow Removal",
    description: "Reliable winter clearing for homes and businesses",
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop&q=80",
    span: "small",
  },
  {
    title: "Garden Design",
    description: "Native plantings and seasonal colour palettes",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&h=600&fit=crop&q=80",
    span: "small",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="section-spacious section-bg-deep">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal animation="blur-sharpen">
          <div className="mb-12">
            <span className="badge-label mb-4 inline-block">Our Work</span>
            <h2
              className="type-section text-left"
              style={{ color: "var(--clr-text-primary)" }}
            >
              Projects That Speak for Themselves
            </h2>
          </div>

          <StaggerGroup>
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(4, 1fr)",
                gridTemplateRows: "320px 240px",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group relative overflow-hidden rounded-xl ${
                    index < 2
                      ? "col-span-4 sm:col-span-2 row-span-1"
                      : "col-span-4 sm:col-span-2 lg:col-span-1 row-span-1"
                  }`}
                  style={{
                    minHeight: index < 2 ? "320px" : "240px",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes={
                      index < 2
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    }
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="type-card mb-1 font-semibold"
                      style={{
                        color: "var(--clr-text-primary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="type-small"
                      style={{ color: "var(--clr-text-secondary)" }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerGroup>
        </Reveal>
      </div>
    </section>
  );
}
