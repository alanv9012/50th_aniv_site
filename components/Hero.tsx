"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { CalendarBlank, Clock } from "@phosphor-icons/react";
import { siteContent } from "@/lib/content";
import { EASE_OUT, heroStagger, motionDurations } from "@/lib/motion";
import { Button } from "./Button";
import { MusicPlayer } from "./MusicPlayer";

const fadeItem = {
  hidden: { opacity: 0, transform: "translateY(12px)" },
  show: {
    opacity: 1,
    transform: "translateY(0px)",
    transition: { duration: motionDurations.hero, ease: EASE_OUT },
  },
};

const fadePortrait = {
  hidden: { opacity: 0, transform: "translateY(10px) scale(0.98)" },
  show: {
    opacity: 1,
    transform: "translateY(0px) scale(1)",
    transition: {
      duration: motionDurations.hero,
      ease: EASE_OUT,
      delay: 0.28,
    },
  },
};

const staggerRoot = {
  hidden: {},
  show: { transition: heroStagger },
};

function HeroCopy({ animate }: { animate: boolean }) {
  const { couple, anniversary, event } = siteContent;

  const blocks = (
    <>
      <p className="mb-3 font-serif text-lg italic text-gold-soft sm:text-xl">
        {anniversary.label}
      </p>

      <div className="mb-2 flex items-end gap-4" aria-hidden="true">
        <span className="font-serif text-[clamp(4rem,14vw,7rem)] leading-none tracking-[-0.03em] text-gold-soft/90">
          {anniversary.milestone}
        </span>
        <span className="mb-2 hidden h-px flex-1 max-w-[6rem] bg-gold-soft/50 sm:block" />
      </div>

      <h1 className="font-serif text-balance text-[clamp(2.35rem,7vw,4rem)] leading-[1.1] tracking-[-0.02em]">
        {couple.nameOne}
        <span className="mx-2 font-normal italic text-gold-soft">&</span>
        {couple.nameTwo}
      </h1>

      <p className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-background/92">
        {anniversary.subtitle}
      </p>

      <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-background/80">
        {anniversary.dedication}
      </p>

      <div className="mt-7 flex flex-col gap-3 border-t border-background/20 pt-6 text-background/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
        <span className="inline-flex items-center gap-2.5 text-[1.0625rem]">
          <CalendarBlank
            size={22}
            weight="light"
            aria-hidden="true"
            className="shrink-0 text-gold-soft"
          />
          {event.date}
        </span>
        <span className="inline-flex items-center gap-2.5 text-[1.0625rem]">
          <Clock
            size={22}
            weight="light"
            aria-hidden="true"
            className="shrink-0 text-gold-soft"
          />
          {event.time}
        </span>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button href="#rsvp" variant="primary" className="w-full sm:w-auto">
          Confirmar asistencia
        </Button>
        <Button
          href="#detalles"
          variant="secondaryOnDark"
          className="w-full sm:w-auto"
        >
          Ver detalles
        </Button>
      </div>

      <MusicPlayer />
    </>
  );

  if (!animate) {
    return <div className="max-w-xl text-background">{blocks}</div>;
  }

  return (
    <motion.div
      className="max-w-xl text-background"
      variants={staggerRoot}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={fadeItem}>
        <p className="mb-3 font-serif text-lg italic text-gold-soft sm:text-xl">
          {anniversary.label}
        </p>
      </motion.div>

      <motion.div
        variants={fadeItem}
        className="mb-2 flex items-end gap-4"
        aria-hidden="true"
      >
        <span className="font-serif text-[clamp(4rem,14vw,7rem)] leading-none tracking-[-0.03em] text-gold-soft/90">
          {anniversary.milestone}
        </span>
        <span className="mb-2 hidden h-px flex-1 max-w-[6rem] bg-gold-soft/50 sm:block" />
      </motion.div>

      <motion.h1
        variants={fadeItem}
        className="font-serif text-balance text-[clamp(2.35rem,7vw,4rem)] leading-[1.1] tracking-[-0.02em]"
      >
        {couple.nameOne}
        <span className="mx-2 font-normal italic text-gold-soft">&</span>
        {couple.nameTwo}
      </motion.h1>

      <motion.p
        variants={fadeItem}
        className="mt-4 max-w-md text-pretty text-lg leading-relaxed text-background/92"
      >
        {anniversary.subtitle}
      </motion.p>

      <motion.p
        variants={fadeItem}
        className="mt-3 max-w-md text-pretty text-base leading-relaxed text-background/80"
      >
        {anniversary.dedication}
      </motion.p>

      <motion.div
        variants={fadeItem}
        className="mt-7 flex flex-col gap-3 border-t border-background/20 pt-6 text-background/90 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8"
      >
        <span className="inline-flex items-center gap-2.5 text-[1.0625rem]">
          <CalendarBlank
            size={22}
            weight="light"
            aria-hidden="true"
            className="shrink-0 text-gold-soft"
          />
          {event.date}
        </span>
        <span className="inline-flex items-center gap-2.5 text-[1.0625rem]">
          <Clock
            size={22}
            weight="light"
            aria-hidden="true"
            className="shrink-0 text-gold-soft"
          />
          {event.time}
        </span>
      </motion.div>

      <motion.div
        variants={fadeItem}
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
      >
        <Button href="#rsvp" variant="primary" className="w-full sm:w-auto">
          Confirmar asistencia
        </Button>
        <Button
          href="#detalles"
          variant="secondaryOnDark"
          className="w-full sm:w-auto"
        >
          Ver detalles
        </Button>
      </motion.div>

      <motion.div variants={fadeItem}>
        <MusicPlayer />
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;

  /** Keeps the layout column; portrait image intentionally omitted */
  const portraitSpace = (
    <div
      className="relative aspect-[3/4] w-full"
      aria-hidden="true"
    />
  );

  return (
    <header className="relative min-h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden bg-ink">
        <Image
          src="/images/aniv_2.jpg"
          alt="Pareja celebrando un aniversario de bodas con la familia"
          fill
          priority
          className="object-cover object-[center_55%]"
          sizes="100vw"
        />
        {reduceMotion ? (
          <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/50 to-ink/25" />
        ) : (
          <motion.div
            className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/50 to-ink/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          />
        )}
      </div>

      <div className="relative z-10 flex min-h-[100dvh] flex-col justify-end pb-10 pt-16 sm:pb-14 sm:pt-20">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <HeroCopy animate={animate} />
            {animate ? (
              <motion.div
                className="mx-auto w-full max-w-[14rem] lg:mx-0 lg:max-w-[17rem]"
                initial="hidden"
                animate="show"
                variants={fadePortrait}
              >
                {portraitSpace}
              </motion.div>
            ) : (
              <div className="mx-auto w-full max-w-[14rem] lg:mx-0 lg:max-w-[17rem]">
                {portraitSpace}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
