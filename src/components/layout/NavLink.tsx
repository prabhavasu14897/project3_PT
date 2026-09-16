"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: string;
  tone?: "default" | "accent";
}

export function NavLink({ href, children, tone = "default" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative py-2 text-label-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
        tone === "accent" ? "text-secondary hover:text-secondary-strong" : "text-text-primary hover:text-primary",
        isActive &&
          tone === "default" &&
          "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary",
      )}
    >
      {children}
    </Link>
  );
}
