import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// DESIGN.md's named type-scale tokens (text-label-lg, text-body-md, etc.) don't match
// tailwind-merge's built-in t-shirt-size font-size validator, so by default it misclassifies
// them as text-color utilities — colliding with and silently dropping real text-color classes
// like text-on-primary when both appear in the same cn() call.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-hero",
        "display-hero-mobile",
        "headline-xl",
        "headline-xl-mobile",
        "headline-lg",
        "headline-md",
        "body-lg",
        "body-md",
        "body-sm",
        "label-lg",
        "label-md",
        "label-caps",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number): string {
  return currencyFormatter.format(amount);
}
