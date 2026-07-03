import { type ReactNode } from "react";
import { Button } from "./Button";

type RSVPButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
};

export function RSVPButton({ href, children, external }: RSVPButtonProps) {
  return (
    <Button href={href} variant="primary" external={external} className="min-w-[12rem]">
      {children}
    </Button>
  );
}
