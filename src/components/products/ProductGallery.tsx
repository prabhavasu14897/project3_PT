import { ZoomIn } from "lucide-react";
import { ProductStage } from "@/components/ui/ProductStage";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  sportSlug: string;
  image?: string;
  title: string;
  badges?: string[];
}

export function ProductGallery({ sportSlug, image, title, badges = [] }: ProductGalleryProps) {
  return (
    <div className="relative">
      <ProductStage
        sportSlug={sportSlug}
        image={image}
        priority
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="aspect-[4/3] w-full rounded-xl border border-border"
      />

      {badges.length > 0 && (
        <div className="absolute top-4 left-4 flex flex-col items-start gap-2">
          {badges.map((badge, index) => (
            <span
              key={badge}
              className={cn(
                "rounded-md px-3 py-1.5 text-label-md uppercase",
                index === 0 ? "bg-success-container text-success" : "bg-tertiary text-on-tertiary",
              )}
            >
              {badge}
            </span>
          ))}
        </div>
      )}

      <span className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-surface-elevated/90 text-text-secondary shadow-level-1 backdrop-blur-sm">
        <ZoomIn className="size-4" aria-hidden="true" />
      </span>

      <span className="sr-only">{title} product photo</span>
    </div>
  );
}
