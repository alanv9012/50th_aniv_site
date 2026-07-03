import {
  CalendarBlank,
  Clock,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { siteContent } from "@/lib/content";
import { EventDetailRow } from "./EventDetailCard";
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
      <Reveal>
        <div className="max-w-3xl">
          <h2 id="details-heading" className="heading-section">
            Detalles del evento
          </h2>
          <p className="lead mt-4">
            Guarda la fecha. Te esperamos para una velada de gratitud, música y
            alegría en familia.
          </p>
        </div>

        <div className="invitation-panel mt-10 overflow-hidden">
          <EventDetailRow
            icon={<CalendarBlank size={26} weight="light" aria-hidden="true" />}
            label="Fecha"
            value={event.date}
          />
          <EventDetailRow
            icon={<Clock size={26} weight="light" aria-hidden="true" />}
            label="Hora"
            value={event.time}
            detail="Recepción al llegar"
          />
          <EventDetailRow
            icon={<MapPin size={26} weight="light" aria-hidden="true" />}
            label="Lugar"
            value={event.venue}
            detail={event.address}
          />
        </div>
      </Reveal>
    </Section>
  );
}
