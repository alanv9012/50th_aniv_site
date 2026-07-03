"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { EASE_OUT, motionDurations } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/** Gentle scroll reveal for section blocks */
export function Reveal({ children, className = "" }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: "translateY(10px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: motionDurations.reveal,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
