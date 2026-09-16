import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingSize =
  | "display-hero"
  | "headline-xl"
  | "headline-lg"
  | "headline-md";

const sizeClassMap: Record<HeadingSize, string> = {
  "display-hero": "text-display-hero-mobile md:text-display-hero",
  "headline-xl": "text-headline-xl-mobile md:text-headline-xl",
  "headline-lg": "text-headline-lg",
  "headline-md": "text-headline-md",
};

interface HeadingProps {
  level: HeadingLevel;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
  balance?: boolean;
  id?: string;
}

export function Heading({ level, size, children, className, balance = true, id }: HeadingProps) {
  const Component = `h${level}` as const;
  const resolvedSize: HeadingSize =
    size ?? (level === 1 ? "display-hero" : level === 2 ? "headline-xl" : "headline-lg");

  return (
    <Component
      id={id}
      className={cn(
        sizeClassMap[resolvedSize],
        "text-text-primary",
        balance && "text-balance",
        className,
      )}
    >
      {children}
    </Component>
  );
}
