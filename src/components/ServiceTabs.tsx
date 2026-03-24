"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  TreePine,
  Mountain,
  Scissors,
  Droplets,
  Snowflake,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface ProcessStep {
  number: number;
  label: string;
}

interface ServiceData {
  title: string;
  icon: React.ElementType;
  image: string;
  paragraphs: string[];
  process: ProcessStep[];
  faq: { question: string; answer: string };
}

const services: ServiceData[] = [
  {
    title: "Landscape Design & Installation",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&h=600&fit=crop&q=80",
    paragraphs: [
      "Every project starts with a site walk. We study your soil conditions, drainage patterns, sunlight exposure, and how you actually want to use your outdoor space. From there, we draw up a plan that works with Simcoe County\u2019s clay-heavy soils and -30\u00B0C winters \u2014 not against them.",
      "Our designs blend native species like white pine, sugar maple, and wild columbine with proven cultivars. We handle full grading, drainage infrastructure, planting, and hardscape integration. Most residential projects wrap up in 2\u20134 weeks, depending on scope.",
    ],
    process: [
      { number: 1, label: "Site Walk & Design" },
      { number: 2, label: "Ground Prep & Grading" },
      { number: 3, label: "Plant & Build" },
    ],
    faq: {
      question: "How long does a full landscape install take?",
      answer:
        "Most residential projects take 2\u20134 weeks. Complex designs with hardscape and water features can run 4\u20136 weeks. We\u2019ll give you a realistic timeline at the design stage.",
    },
  },
  {
    title: "Hardscape & Stonework",
    icon: Mountain,
    image:
      "https://images.unsplash.com/photo-1572025442646-866d16c84a54?w=800&h=600&fit=crop&q=80",
    paragraphs: [
      "Patios, walkways, retaining walls, and natural stone features \u2014 built to handle Simcoe County\u2019s freeze-thaw cycles. We source local Muskoka granite and Eramosa limestone for work that belongs here, not imported materials that crack after two winters.",
      "Every base we lay accounts for our frost depth. We compact in lifts, set proper drainage slopes, and use polymeric sand joints that flex instead of crumble. The difference shows up three years later when the patio still looks the way it did on day one.",
    ],
    process: [
      { number: 1, label: "Design & Material Selection" },
      { number: 2, label: "Excavation & Base Prep" },
      { number: 3, label: "Stone Laying & Finishing" },
    ],
    faq: {
      question: "Will my patio heave in winter?",
      answer:
        "Not if the base is right. We dig below the frost line and build up with compacted gravel layers. Our patios are built to outlast the mortgage.",
    },
  },
  {
    title: "Seasonal Maintenance",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&q=80",
    paragraphs: [
      "Consistent, dependable property care tailored to your yard \u2014 not a one-size-fits-all schedule. Spring cleanups, weekly mowing, fall leaf removal, garden bed maintenance, and shrub pruning. We track what your property needs and adjust through the season.",
      "Every maintenance client gets a property profile. We note your soil type, grass species, shade patterns, and problem areas. Your crew knows your yard as well as you do.",
    ],
    process: [
      { number: 1, label: "Property Assessment" },
      { number: 2, label: "Custom Schedule" },
      { number: 3, label: "Seasonal Execution" },
    ],
    faq: {
      question: "Can I pick and choose which services I need?",
      answer:
        "Absolutely. We build custom programs. Some clients want full weekly care, others just want spring and fall cleanups. We\u2019ll match what makes sense for your property and budget.",
    },
  },
  {
    title: "Water Features & Drainage",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=800&h=600&fit=crop&q=80",
    paragraphs: [
      "Ponds, fountains, dry creek beds, and French drains. We turn water problems into design features. If your yard pools after rain or your basement gets seepage, we fix the drainage first \u2014 then make it look good.",
      "Proper grading and drainage aren\u2019t glamorous, but they\u2019re the foundation of every landscape that lasts. We install French drains, catch basins, and channel drains that move water where it needs to go.",
    ],
    process: [
      { number: 1, label: "Water Flow Analysis" },
      { number: 2, label: "Drainage Infrastructure" },
      { number: 3, label: "Feature Installation" },
    ],
    faq: {
      question: "Do I need a permit for a pond?",
      answer:
        "In most cases, no \u2014 small decorative ponds don\u2019t require permits in Barrie. Larger features or anything near a watercourse may need approval. We handle the paperwork if needed.",
    },
  },
  {
    title: "Snow Removal & Winter Care",
    icon: Snowflake,
    image:
      "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&h=600&fit=crop&q=80",
    paragraphs: [
      "Barrie gets buried. We keep your driveway clear, your walkways safe, and your property accessible all winter. Residential and commercial snow clearing, salting, and ice management from November through April.",
      "Our crews run 24/7 during major storms. We monitor weather forecasts and pre-salt before storms hit. Seasonal contracts mean you never have to call \u2014 we just show up when it snows.",
    ],
    process: [
      { number: 1, label: "Pre-Season Contract" },
      { number: 2, label: "Storm Response" },
      { number: 3, label: "Post-Storm Cleanup" },
    ],
    faq: {
      question: "What triggers a plowing visit?",
      answer:
        "Our standard trigger is 5 cm of accumulation. Commercial clients can set lower thresholds. We clear within 4 hours of snowfall end for residential, 2 hours for commercial.",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Tab Content (shared between desktop & mobile)                      */
/* ------------------------------------------------------------------ */

function ServiceContent({ service }: { service: ServiceData }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col justify-centre gap-8">
        {/* Description */}
        <div className="space-y-4">
          {service.paragraphs.map((p, i) => (
            <p
              key={i}
              className="type-body"
              style={{ color: "var(--clr-text-secondary)" }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* 3-step process */}
        <div
          className="rounded-xl p-6"
          style={{ backgroundColor: "var(--clr-surface-2)" }}
        >
          <h3
            className="type-card mb-4 font-semibold"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--clr-text-primary)",
            }}
          >
            Our Process
          </h3>
          <ol className="grid gap-4 sm:grid-cols-3">
            {service.process.map((step) => (
              <li key={step.number} className="flex items-start gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    backgroundColor: "var(--clr-accent)",
                    color: "var(--clr-surface-1)",
                  }}
                >
                  {step.number}
                </span>
                <span
                  className="type-body pt-1"
                  style={{ color: "var(--clr-text-primary)" }}
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div
          className="rounded-xl border p-6"
          style={{
            borderColor: "var(--clr-accent-muted)",
            backgroundColor: "var(--clr-surface-1)",
          }}
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0"
              style={{ color: "var(--clr-accent)" }}
            />
            <div>
              <p
                className="type-body font-semibold"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--clr-text-primary)",
                }}
              >
                {service.faq.question}
              </p>
              <p
                className="type-body mt-2"
                style={{ color: "var(--clr-text-secondary)" }}
              >
                {service.faq.answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop Tabs                                                       */
/* ------------------------------------------------------------------ */

function DesktopTabs({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) {
  return (
    <div className="hidden lg:block">
      {/* Tab bar */}
      <div
        className="relative mb-12 flex gap-1 border-b"
        style={{ borderColor: "var(--clr-surface-3)" }}
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === i;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className="relative flex items-center gap-2 px-5 py-4 text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-heading)",
                color: isActive
                  ? "var(--clr-accent)"
                  : "var(--clr-text-muted)",
              }}
            >
              <Icon className="h-4 w-4" />
              {s.title}
              {isActive && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5"
                  style={{ backgroundColor: "var(--clr-accent)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ServiceContent service={services[active]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Accordion                                                   */
/* ------------------------------------------------------------------ */

function MobileAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3 lg:hidden">
      {services.map((s, i) => {
        const Icon = s.icon;
        const isOpen = open === i;

        return (
          <div
            key={s.title}
            className="overflow-hidden rounded-xl"
            style={{ backgroundColor: "var(--clr-surface-2)" }}
          >
            {/* Accordion header */}
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-5 py-4"
              style={{
                color: isOpen
                  ? "var(--clr-accent)"
                  : "var(--clr-text-primary)",
              }}
            >
              <span className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0" />
                <span
                  className="type-body font-semibold text-left"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {s.title}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="h-5 w-5 shrink-0" />
              </motion.span>
            </button>

            {/* Accordion body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6">
                    <ServiceContent service={s} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Export                                                              */
/* ------------------------------------------------------------------ */

export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="section-standard"
      style={{ backgroundColor: "var(--clr-surface-1)" }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <DesktopTabs active={activeTab} setActive={setActiveTab} />
          <MobileAccordion />
        </Reveal>
      </div>
    </section>
  );
}
