import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextVariant = "body-lg" | "body-md" | "body-sm" | "label-lg" | "label-md" | "label-caps";
type TextColor = "primary" | "secondary" | "muted" | "inherit";

const variantClassMap: Record<TextVariant, string> = {
  "body-lg": "text-body-lg",
  "body-md": "text-body-md",
  "body-sm": "text-body-sm",
  "label-lg": "text-label-lg",
  "label-md": "text-label-md",
  "label-caps": "text-label-caps uppercase",
};

const colorClassMap: Record<TextColor, string> = {
  primary: "text-text-primary",
  secondary: "text-text-secondary",
  muted: "text-text-muted",
  inherit: "",
};

interface TextProps {
  as?: ElementType;
  variant?: TextVariant;
  color?: TextColor;
  children: ReactNode;
  className?: string;
  id?: string;
  role?: string;
  "aria-current"?: boolean | "page" | "step" | "location" | "date" | "time" | "true" | "false";
}

export function Text({
  as: Component = "p",
  variant = "body-md",
  color = "secondary",
  children,
  className,
  id,
  role,
  "aria-current": ariaCurrent,
}: TextProps) {
  return (
    <Component
      id={id}
      role={role}
      aria-current={ariaCurrent}
      className={cn(variantClassMap[variant], colorClassMap[color], className)}
    >
      {children}
    </Component>
  );
}
