import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  ariaLabelledby?: string;
  /** Adds a subtle top rule for pacing between sections */
  flow?: boolean;
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  ariaLabelledby,
  flow = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-[clamp(3.5rem,8vw,6rem)] ${flow ? "section-flow" : ""} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
