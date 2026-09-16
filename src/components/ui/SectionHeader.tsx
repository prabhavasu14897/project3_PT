import type { ReactNode } from "react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "start" | "center";
  actions?: ReactNode;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "start",
  actions,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className={cn("flex max-w-2xl flex-col gap-3", align === "center" && "items-center text-center")}>
        {eyebrow && (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-label-caps text-text-secondary uppercase">
            <span className="size-1.5 rounded-full bg-secondary" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <Heading level={2} size="headline-xl">
          {title}
        </Heading>
        {description && (
          <Text variant="body-lg" color="secondary">
            {description}
          </Text>
        )}
      </div>
      {actions && <div className="flex shrink-0 items-center gap-3">{actions}</div>}
    </div>
  );
}
