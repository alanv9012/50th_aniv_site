import { siteContent } from "@/lib/content";
import { Container } from "./Container";
import { Reveal } from "./motion/Reveal";

export function ScriptureVerse() {
  const { scripture } = siteContent;

  return (
    <section
      aria-labelledby="scripture-verse"
      className="pt-[clamp(2rem,5vw,3rem)] pb-6 sm:pb-8"
    >
      <Container>
        <Reveal>
          <blockquote className="mx-auto max-w-xl text-center">
            <div
              className="mx-auto mb-6 flex items-center justify-center gap-3"
              aria-hidden="true"
            >
              <span className="h-px w-8 bg-gold/45" />
              <span className="size-1.5 rotate-45 bg-gold/55" />
              <span className="h-px w-8 bg-gold/45" />
            </div>

            <p
              id="scripture-verse"
              className="font-serif text-balance text-[clamp(1.35rem,3.5vw,1.85rem)] italic leading-[1.35] tracking-[-0.01em] text-ink pb-1"
            >
              &ldquo;{scripture.verse}&rdquo;
            </p>

            <cite className="mt-5 block font-sans text-sm not-italic tracking-wide text-ink-muted">
              {scripture.reference}
            </cite>

            <div
              className="mx-auto mt-6 flex items-center justify-center gap-3"
              aria-hidden="true"
            >
              <span className="h-px w-8 bg-gold/45" />
              <span className="size-1.5 rotate-45 bg-gold/55" />
              <span className="h-px w-8 bg-gold/45" />
            </div>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
