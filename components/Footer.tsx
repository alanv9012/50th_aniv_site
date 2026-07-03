import { siteContent } from "@/lib/content";
import { Container } from "./Container";

export function Footer() {
  const { couple, footer, anniversary } = siteContent;

  return (
    <footer className="border-t border-gold/20 bg-surface-deep py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-8 w-24 ornament-line" aria-hidden="true" />
          <p className="font-serif text-xl text-ink sm:text-2xl">
            {footer.closing}
          </p>
          <p className="mt-4 font-serif text-[clamp(1.45rem,3vw,1.875rem)] italic leading-[1.2] text-wine pb-0.5">
            {footer.signature}
          </p>
          <p className="mt-6 text-pretty text-[1.0625rem] leading-relaxed text-ink-muted">
            {footer.note}
          </p>
          <p className="mt-10 text-sm tracking-wide text-ink-muted">
            {couple.displayNames}
            <span className="mx-2 text-gold/60" aria-hidden="true">
              |
            </span>
            {anniversary.label}
            <span className="mx-2 text-gold/60" aria-hidden="true">
              |
            </span>
            2026
          </p>
        </div>
      </Container>
    </footer>
  );
}
