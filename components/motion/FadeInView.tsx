"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { EASE_OUT, galleryStaggerMs, motionDurations } from "@/lib/motion";

type FadeInViewProps = {
  children: ReactNode;
  className?: string;
  /** Stagger index for gallery grids (capped internally) */
  index?: number;
};

/** Optional in-view fade for photos and secondary blocks */
export function FadeInView({
  children,
  className = "",
  index = 0,
}: FadeInViewProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const delay = Math.min(index, 4) * (galleryStaggerMs / 1000);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: "translateY(8px) scale(0.99)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: motionDurations.reveal,
        delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
