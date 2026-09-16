import { cn } from "@/lib/utils";
import type { ProductBadge } from "@/data/types";

const badgeClassMap: Record<ProductBadge, string> = {
  NEW: "bg-badge-new-bg text-badge-new-text",
  HIT: "bg-badge-hit-bg text-badge-hit-text",
  LIMITED: "bg-badge-offer-bg text-badge-offer-text",
};

interface BadgeProps {
  variant: ProductBadge;
  className?: string;
}

export function Badge({ variant, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-label-caps uppercase",
        badgeClassMap[variant],
        className,
      )}
    >
      {variant}
    </span>
  );
}
