"use client";

import { motion, useInView, useReducedMotion, type Variant } from "framer-motion";
import { useRef, type ReactNode } from "react";

type AnimationType =
  | "fade-up"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-sharpen"
  | "rotate-in"
  | "clip-reveal";

const variants: Record<AnimationType, { hidden: Variant; visible: Variant }> = {
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  "blur-sharpen": {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "rotate-in": {
    hidden: { opacity: 0, rotate: -3 },
    visible: { opacity: 1, rotate: 0 },
  },
  "clip-reveal": {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    visible: { opacity: 1, clipPath: "inset(0)" },
  },
};

interface RevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function Reveal({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  duration,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[animation]}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
        duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
