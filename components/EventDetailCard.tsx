"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT, motionDurations } from "@/lib/motion";

type TimelineItemProps = {
  label: string;
  value: string;
  detail?: string;
  isLast?: boolean;
  /** Stagger delay index (50ms steps) */
  index?: number;
};

export function TimelineItem({
  label,
  value,
  detail,
  isLast = false,
  index = 0,
}: TimelineItemProps) {
  const reduceMotion = useReducedMotion();
  const delay = Math.min(index, 4) * 0.05;

  const body = (
    <>
      <div className="relative flex justify-center" aria-hidden="true">
        <span className="timeline-marker" />
        {!isLast ? <span className="timeline-line" /> : null}
      </div>

      <div className={isLast ? "pb-0" : "pb-10 sm:pb-11"}>
        <p className="label-quiet">{label}</p>
        <p className="timeline-value mt-2">{value}</p>
        {detail ? (
          <p className="timeline-detail mt-2 max-w-md">{detail}</p>
        ) : null}
      </div>
    </>
  );

  if (reduceMotion) {
    return <li className="timeline-track">{body}</li>;
  }

  return (
    <motion.li
      className="timeline-track"
      initial={{ opacity: 0, transform: "translateY(8px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: motionDurations.reveal,
        delay,
        ease: EASE_OUT,
      }}
    >
      {body}
    </motion.li>
  );
}
