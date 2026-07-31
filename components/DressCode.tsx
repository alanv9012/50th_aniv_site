import { type ReactNode } from "react";
import { CowboyHat, Dress } from "@phosphor-icons/react/dist/ssr";
import { siteContent } from "@/lib/content";
import { FadeInView } from "./motion/FadeInView";
import { Reveal } from "./motion/Reveal";

function DressCodeSeparator() {
  return (
    <div
      className="flex items-center justify-center gap-3"
      aria-hidden="true"
    >
      <span className="h-px w-8 bg-gold/45" />
      <span className="size-1.5 rotate-45 bg-gold/55" />
      <span className="h-px w-8 bg-gold/45" />
    </div>
  );
}

type DressCodeBlockProps = {
  icon: ReactNode;
  heading: string;
  items: readonly string[];
};

function DressCodeBlock({ icon, heading, items }: DressCodeBlockProps) {
  return (
    <div className="mx-auto flex w-full max-w-[17rem] flex-col items-center text-center">
      <div
        className="flex h-9 w-full items-center justify-center text-gold"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4 className="mt-5 w-full font-serif text-[clamp(1.2rem,2.4vw,1.35rem)] leading-none tracking-[-0.01em] text-ink">
        {heading}
      </h4>
      <ul className="mt-6 w-full space-y-3 text-center">
        {items.map((item) => (
          <li
            key={item}
            className="text-pretty text-[1.0625rem] leading-relaxed text-ink-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Page-centered dress code, independent of the event timeline. */
export function DressCode() {
  const { dressCode } = siteContent;

  return (
    <div
      className="mx-auto mt-16 w-full max-w-[600px] px-1 text-center sm:mt-20"
      aria-labelledby="dress-code-heading"
    >
      <Reveal>
        <p className="font-serif text-[0.9375rem] italic text-gold sm:text-base">
          {dressCode.title}
        </p>

        <h3
          id="dress-code-heading"
          className="mt-3 font-serif text-[clamp(1.15rem,4.4vw,1.75rem)] uppercase leading-none tracking-[0.08em] text-ink whitespace-nowrap sm:tracking-[0.12em]"
        >
          {dressCode.style}
        </h3>

        <div className="mt-7 flex justify-center">
          <DressCodeSeparator />
        </div>
      </Reveal>

      <div className="mt-12 flex flex-col items-center gap-12">
        <FadeInView index={0} className="flex w-full justify-center">
          <DressCodeBlock
            icon={<CowboyHat size={30} weight="light" />}
            heading={dressCode.gentlemen.heading}
            items={dressCode.gentlemen.items}
          />
        </FadeInView>

        <FadeInView index={1} className="flex w-full justify-center">
          <DressCodeSeparator />
        </FadeInView>

        <FadeInView index={2} className="flex w-full justify-center">
          <DressCodeBlock
            icon={<Dress size={30} weight="light" />}
            heading={dressCode.ladies.heading}
            items={dressCode.ladies.items}
          />
        </FadeInView>
      </div>
    </div>
  );
}
