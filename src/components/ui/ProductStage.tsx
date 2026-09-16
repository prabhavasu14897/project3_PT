import Image from "next/image";
import { DisciplineIcon } from "@/components/icons/DisciplineIcon";
import { getSportBySlug } from "@/data/sports";
import { cn } from "@/lib/utils";

interface ProductStageProps {
  sportSlug: string;
  /** Dedicated product photo (see ATTRIBUTIONS.md); falls back to the sport's photo when not set. */
  image?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * Real photography (see ATTRIBUTIONS.md) standing in for this prototype's product images.
 * Prefers a per-product photo when one exists; otherwise falls back to the sport's
 * representative gear photo. The discipline icon badge keeps the category legible either way.
 */
export function ProductStage({
  sportSlug,
  image,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 25vw, 50vw",
}: ProductStageProps) {
  const sport = getSportBySlug(sportSlug);
  const resolvedImage = image ?? sport?.image;

  return (
    <div className={cn("relative overflow-hidden rounded-md bg-surface-muted", className)}>
      {resolvedImage && (
        <Image
          src={resolvedImage}
          alt={sport ? `${sport.title} equipment` : "Product equipment"}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      )}
      <span className="absolute right-2 bottom-2 flex size-8 items-center justify-center rounded-full bg-surface-elevated/90 text-text-primary shadow-level-1 backdrop-blur-sm">
        <DisciplineIcon sportSlug={sportSlug} className="size-4" aria-hidden="true" />
      </span>
    </div>
  );
}
