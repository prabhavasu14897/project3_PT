import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Sport } from "@/data/types";

interface CategoryCardProps {
  sport: Sport;
  /** Center-stage card: renders as a real navigation link. */
  active?: boolean;
  /** Peeking card: renders as a button that brings it to center instead of navigating away. */
  onSelect?: () => void;
}

export function CategoryCard({ sport, active = false, onSelect }: CategoryCardProps) {
  const cardClasses = cn(
    "relative flex h-full w-full flex-col justify-end overflow-hidden rounded-xl border border-border p-6 text-left shadow-level-2",
  );

  const content = (
    <>
      <Image
        src={sport.categoryImage ?? sport.image}
        alt={sport.title}
        fill
        sizes="320px"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative flex items-end justify-between gap-3">
        <span className="inline-flex max-w-[70%] items-center text-label-lg font-semibold text-white">
          {sport.title}
        </span>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-text-primary shadow-level-1 backdrop-blur-sm">
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </>
  );

  if (active) {
    return (
      <Link href={`/sports/${sport.slug}`} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onSelect} aria-label={`Show ${sport.title}`} className={cardClasses}>
      {content}
    </button>
  );
}
