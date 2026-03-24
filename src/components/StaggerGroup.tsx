"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function StaggerGroup({
  children,
  staggerDelay = 0.12,
  className,
}: StaggerGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
