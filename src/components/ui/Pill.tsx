import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillProps {
  href: string;
  active?: boolean;
  children: string;
  className?: string;
}

export function Pill({ href, active = false, children, className }: PillProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "inline-flex shrink-0 items-center rounded-full border px-4 py-2 text-label-md whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        active
          ? "border-secondary bg-secondary/10 text-secondary"
          : "border-border bg-surface-elevated text-text-secondary hover:border-border-strong hover:text-text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}
