import { EventDetails } from "@/components/EventDetails";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { InvitationMessage } from "@/components/InvitationMessage";
import { LocationSection } from "@/components/LocationSection";
import { RSVP } from "@/components/RSVP";
import { ScriptureVerse } from "@/components/ScriptureVerse";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ScriptureVerse />
      <InvitationMessage />
      <EventDetails />
      <Gallery />
      <RSVP />
      <LocationSection />
      <Footer />
    </main>
  );
}
