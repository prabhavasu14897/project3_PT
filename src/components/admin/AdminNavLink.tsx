"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface AdminNavLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

export function AdminNavLink({ href, label, icon }: AdminNavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2.5 text-body-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        isActive
          ? "bg-primary text-on-primary"
          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
      )}
    >
      {icon}
      {label}
    </Link>
  );
}
