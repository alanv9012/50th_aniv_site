import { siteContent } from "@/lib/content";
import { DressCode } from "./DressCode";
import { TimelineItem } from "./EventDetailCard";
import { Reveal } from "./motion/Reveal";
import { Section } from "./Section";

export function EventDetails() {
  const { event } = siteContent;

  return (
    <Section
      id="detalles"
      flow
      className="bg-surface"
      ariaLabelledby="details-heading"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="text-center sm:text-left">
            <h2 id="details-heading" className="heading-section">
              Detalles del evento
            </h2>
            <p className="lead mx-auto mt-4 sm:mx-0">
              Guarda la fecha. Te esperamos para una velada de llena degratitud, música y
              alegría en familia.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 list-none">
          <TimelineItem index={0} label="Fecha" value={event.date} />
          <TimelineItem
            index={1}
            label="Recepcion"
            value={event.time}
            //detail=""
          />
          <TimelineItem
            index={2}
            label="Comida"
            value={event.dinnerTime}
          />
          <TimelineItem
            index={3}
            label="Lugar"
            value={event.venue}
            detail={event.address}
            isLast
          />
        </ol>
      </div>

      <div className="w-full">
        <DressCode />
      </div>
    </Section>
  );
}
