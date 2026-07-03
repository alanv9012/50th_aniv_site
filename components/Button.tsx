import Link from "next/link";
import { type ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "secondaryOnDark";
  className?: string;
  external?: boolean;
};

const baseMotion =
  "inline-flex min-h-12 items-center justify-center rounded-full px-7 py-3 text-[1.0625rem] font-medium transition-[transform,background-color,border-color,color,opacity] duration-[160ms] ease-[var(--ease-out-premium)] active:scale-[0.97] motion-reduce:transition-none motion-reduce:active:scale-100 [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-px";

const variants = {
  primary:
    "bg-wine text-background border border-wine [@media(hover:hover)_and_(pointer:fine)]:hover:bg-ink",
  secondary:
    "bg-transparent text-ink border border-gold/40 [@media(hover:hover)_and_(pointer:fine)]:hover:border-gold [@media(hover:hover)_and_(pointer:fine)]:hover:bg-gold-soft/25",
  /** Light text + translucent fill for photo / dark backgrounds */
  secondaryOnDark:
    "bg-ink/45 text-background border border-background/70 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-ink/60 [@media(hover:hover)_and_(pointer:fine)]:hover:border-background",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${baseMotion} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
