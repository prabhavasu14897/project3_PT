"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, User, X } from "lucide-react";
import { mainNavigation } from "@/data/navigation";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expandedLabel, setExpandedLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <IconButton
        icon={<Menu className="size-5" aria-hidden="true" />}
        label="Open menu"
        onClick={() => setOpen(true)}
      />

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-tertiary/40"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col gap-6 bg-surface-elevated p-6 shadow-level-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-label-lg text-text-primary">Menu</span>
              <IconButton
                icon={<X className="size-5" aria-hidden="true" />}
                label="Close menu"
                onClick={() => setOpen(false)}
              />
            </div>

            <nav aria-label="Primary" className="flex flex-col gap-1">
              {mainNavigation.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedLabel((current) => (current === item.label ? null : item.label))
                      }
                      aria-expanded={expandedLabel === item.label}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-label-lg text-text-primary hover:bg-surface-muted"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          expandedLabel === item.label && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {expandedLabel === item.label && (
                      <div className="ml-3 flex flex-col border-l border-border pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="rounded-md px-3 py-2.5 text-body-md text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-3 text-label-lg hover:bg-surface-muted",
                      item.label === "Offers" ? "text-secondary" : "text-text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="mt-auto border-t border-border pt-6">
              <Link
                href="/account/sign-in"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-md px-3 py-3 text-label-lg text-text-primary hover:bg-surface-muted"
              >
                <User className="size-5" aria-hidden="true" />
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
