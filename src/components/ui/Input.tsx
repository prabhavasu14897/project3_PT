import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  pill?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error = false, pill = false, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={error || undefined}
        className={cn(
          "h-12 w-full border bg-surface-elevated px-5 text-body-md text-text-primary placeholder:text-text-muted transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50",
          pill ? "rounded-full" : "rounded-md",
          error ? "border-error" : "border-border hover:border-border-strong",
          className,
        )}
        {...rest}
      />
    );
  },
);

Input.displayName = "Input";
