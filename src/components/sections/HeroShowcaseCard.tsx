import { ShieldCheck } from "lucide-react";
import { ProductStage } from "@/components/ui/ProductStage";
import { Text } from "@/components/ui/Text";

export function HeroShowcaseCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(circle_at_30%_30%,color-mix(in_srgb,var(--color-secondary)_18%,transparent),transparent_60%),radial-gradient(circle_at_75%_65%,color-mix(in_srgb,var(--color-primary)_16%,transparent),transparent_55%)]"
        aria-hidden="true"
      />

      <div className="relative rounded-xl border border-border bg-surface-elevated p-5 shadow-level-3">
        <span className="inline-flex items-center rounded-full bg-surface-muted px-3 py-1.5 text-label-caps text-text-secondary uppercase">
          Pro Footwear Series
        </span>

        <ProductStage sportSlug="shoes" className="mt-4 aspect-square w-full" priority />

        <div className="absolute -bottom-5 left-1/2 flex w-[calc(100%-2rem)] -translate-x-1/2 items-center gap-3 rounded-lg border border-border bg-surface-elevated px-4 py-3 shadow-level-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-success-container text-success">
            <ShieldCheck className="size-4" aria-hidden="true" />
          </span>
          <div className="flex flex-col">
            <Text as="span" variant="label-lg" color="primary">
              Direct Authenticity
            </Text>
            <Text variant="body-sm" color="muted">
              100% factory-sealed gear
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
