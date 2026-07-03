/** Shared motion tokens (Emil-style: ease-out, transform + opacity only) */
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const motionDurations = {
  fast: 0.16,
  ui: 0.22,
  reveal: 0.42,
  hero: 0.48,
} as const;

export const heroStagger = {
  staggerChildren: 0.055,
  delayChildren: 0.08,
} as const;

export const galleryStaggerMs = 45;
