import { siteContent } from "@/lib/content";
import { Reveal } from "./motion/Reveal";
import { Section } from "./Section";

export function InvitationMessage() {
  const { invitation } = siteContent;

  return (
    <Section
      ariaLabelledby="invitation-heading"
      className="!pt-8 sm:!pt-10"
    >
      <Reveal>
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-14">
          <div className="text-center lg:text-left">
            <h2 id="invitation-heading" className="heading-section">
              {invitation.headline}
            </h2>
          </div>

          <div className="space-y-5 border-l-0 lg:border-l lg:border-gold/20 lg:pl-10">
            {invitation.body.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-pretty leading-relaxed text-ink-muted ${
                  index === 0
                    ? "text-lg sm:text-xl text-ink"
                    : "text-[1.0625rem]"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
