import type { LucideIcon } from "lucide-react";
import { Text } from "@/components/ui/Text";

interface AdminStatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
}

export function AdminStatCard({ label, value, icon: Icon }: AdminStatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-surface-elevated p-5">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-success-container text-success">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="flex flex-col">
        <Text variant="body-sm" color="muted">
          {label}
        </Text>
        <Text as="span" variant="body-lg" color="primary" className="text-headline-md font-bold">
          {value}
        </Text>
      </div>
    </div>
  );
}
