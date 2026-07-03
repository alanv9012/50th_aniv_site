import { MapPin, NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import { siteContent } from "@/lib/content";
import { Button } from "./Button";
import { Reveal } from "./motion/Reveal";
import { Section } from "./Section";

export function LocationSection() {
  const { event, location } = siteContent;

  return (
    <Section
      id="ubicacion"
      flow
      ariaLabelledby="location-heading"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
        <Reveal>
          <h2 id="location-heading" className="heading-section">
            {location.headline}
          </h2>
          <p className="lead mt-4">{location.body}</p>

          <div className="mt-8 flex gap-4 border-t border-gold/15 pt-8">
            <MapPin
              size={26}
              weight="light"
              className="mt-1 shrink-0 text-gold"
              aria-hidden="true"
            />
            <div>
              <p className="font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] leading-snug text-ink">
                {event.venue}
              </p>
              <p className="mt-2 text-pretty leading-relaxed text-ink-muted">
                {event.address}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Button href={event.mapsUrl} variant="secondary" external>
              <span className="inline-flex items-center gap-2">
                <NavigationArrow size={18} weight="bold" aria-hidden="true" />
                Abrir en mapas
              </span>
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="photo-frame overflow-hidden">
            <iframe
              title={`Mapa de ${event.venue}`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.174658335275!2d-106.00231358825096!3d28.714325880258727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea45c6ae526413%3A0x137e0c3f02c7b0df!2sJardines%20del%20Cedro%20Chihuahua!5e0!3m2!1sen!2smx!4v1783112704497!5m2!1sen!2smx"
              className="aspect-[4/3] w-full border-0 sm:aspect-[5/4]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
