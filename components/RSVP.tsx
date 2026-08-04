import { siteContent } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { RSVPButton } from "./RSVPButton";
import { Section } from "./Section";

function GoldFlourish() {
  return (
    <div
      className="mx-auto flex items-center justify-center gap-3"
      aria-hidden="true"
    >
      <span className="h-px w-8 bg-gold/45" />
      <span className="size-1.5 rotate-45 bg-gold/55" />
      <span className="h-px w-8 bg-gold/45" />
    </div>
  );
}

export function RSVP() {
  const { rsvp } = siteContent;

  return (
    <Section id="rsvp" flow ariaLabelledby="rsvp-heading">
      <Reveal>
        <div className="mx-auto max-w-2xl rounded-2xl border border-gold/20 bg-surface/80 px-6 py-11 text-center sm:px-10 sm:py-14">
          <GoldFlourish />

          <h2 id="rsvp-heading" className="heading-section mt-7">
            {rsvp.headline}
          </h2>

          <div className="mx-auto mt-5 max-w-lg space-y-4">
            <p className="lead mx-auto text-[1.0625rem] leading-relaxed sm:text-lg">
              {rsvp.bodyBefore}
            </p>
            <p className="font-serif text-[clamp(1.35rem,3vw,1.65rem)] italic leading-snug text-wine">
              {rsvp.bodyHighlight}
            </p>
            <p className="lead mx-auto text-[1.0625rem] leading-relaxed sm:text-lg">
              {rsvp.bodyAfter}
            </p>
          </div>

          <div className="mt-9">
            <RSVPButton href={rsvp.whatsappUrl} external>
              {rsvp.cta}
            </RSVPButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
