import { siteContent } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { RSVPButton } from "./RSVPButton";
import { Section } from "./Section";

export function RSVP() {
  const { rsvp } = siteContent;

  return (
    <Section id="rsvp" flow ariaLabelledby="rsvp-heading">
      <Reveal>
        <div className="mx-auto max-w-2xl rounded-2xl border border-wine/20 bg-surface-deep px-6 py-11 text-center sm:px-10 sm:py-14">
          <div
            className="mx-auto mb-6 w-16 ornament-line"
            aria-hidden="true"
          />
          <h2 id="rsvp-heading" className="heading-section">
            {rsvp.headline}
          </h2>
          <p className="lead mx-auto mt-4">{rsvp.body}</p>
          <div className="mt-8">
            <RSVPButton href={rsvp.mailto} external>
              {rsvp.cta}
            </RSVPButton>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
