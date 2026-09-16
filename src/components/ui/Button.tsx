import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-bold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

const variantClassMap: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-strong focus-visible:outline-primary",
  secondary:
    "bg-secondary text-on-secondary hover:bg-secondary-strong focus-visible:outline-secondary shadow-level-2",
  outline:
    "bg-surface-elevated text-text-primary border border-border hover:border-border-strong focus-visible:outline-primary",
  ghost:
    "bg-transparent text-text-primary hover:bg-surface-muted focus-visible:outline-primary",
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-label-md",
  md: "h-11 px-6 text-label-lg",
  lg: "h-14 px-8 text-label-lg",
};

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends BaseButtonProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", loading = false, children, className } = props;
  const classes = cn(baseClasses, variantClassMap[variant], sizeClassMap[size], className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { disabled, ...buttonProps } = props as ButtonAsButton;

  return (
    <button
      {...buttonProps}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={classes}
    >
      {loading && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
      {children}
    </button>
  );
}
