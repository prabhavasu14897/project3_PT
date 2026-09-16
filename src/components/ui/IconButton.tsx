import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type IconButtonVariant = "primary" | "outline" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";

const variantClassMap: Record<IconButtonVariant, string> = {
  primary: "bg-primary text-on-primary hover:bg-primary-strong",
  outline: "bg-surface-elevated text-text-primary border border-border hover:border-border-strong",
  ghost: "bg-transparent text-text-primary hover:bg-surface-muted",
};

const sizeClassMap: Record<IconButtonSize, string> = {
  sm: "size-9",
  md: "size-11",
  lg: "size-14",
};

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label: string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  className?: string;
}

export function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50",
        variantClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      {...rest}
    >
      {icon}
    </button>
  );
}
