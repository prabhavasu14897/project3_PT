import { Star } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
  className?: string;
}

export function RatingStars({ rating, reviewCount, className }: RatingStarsProps) {
  const rounded = Math.round(rating);

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      <div className="flex items-center" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            className={cn(
              "size-3.5",
              index < rounded ? "fill-secondary text-secondary" : "fill-none text-border-strong",
            )}
          />
        ))}
      </div>
      <Text as="span" variant="body-sm" color="muted">
        {reviewCount !== undefined ? `${rating.toFixed(1)} (${reviewCount})` : rating.toFixed(1)}
      </Text>
      <span className="sr-only">
        {rating.toFixed(1)} out of 5 stars
        {reviewCount !== undefined ? `, ${reviewCount} reviews` : ""}
      </span>
    </div>
  );
}
