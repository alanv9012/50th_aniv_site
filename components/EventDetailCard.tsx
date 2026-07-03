import { type ReactNode } from "react";

type EventDetailRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  detail?: string;
};

export function EventDetailRow({
  icon,
  label,
  value,
  detail,
}: EventDetailRowProps) {
  return (
    <div className="grid gap-4 border-b border-gold/15 px-5 py-6 last:border-b-0 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 sm:px-8 sm:py-7">
      <div className="flex items-center gap-3 text-gold sm:flex-col sm:items-start sm:gap-2">
        {icon}
        <p className="label-quiet sm:max-w-[5rem]">{label}</p>
      </div>
      <div>
        <p className="font-serif text-[clamp(1.25rem,2.5vw,1.5rem)] leading-snug text-ink">
          {value}
        </p>
        {detail ? (
          <p className="mt-2 text-pretty text-base leading-relaxed text-ink-muted">
            {detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}
