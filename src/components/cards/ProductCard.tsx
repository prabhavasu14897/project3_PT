"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Text } from "@/components/ui/Text";
import { ProductStage } from "@/components/ui/ProductStage";
import { RatingStars } from "@/components/ui/RatingStars";
import { useWishlist } from "@/lib/wishlist-store";
import { formatPrice, cn } from "@/lib/utils";
import type { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { has, toggle } = useWishlist();
  const wishlisted = has(product.id);

  return (
    <article
      className={cn(
        "group flex flex-col gap-4 rounded-lg border border-border bg-surface-elevated p-4 shadow-level-1 transition-shadow duration-200 hover:shadow-level-2",
        className,
      )}
    >
      <div className="relative">
        <Link href={`/products/${product.slug}`} className="block" tabIndex={-1}>
          <ProductStage
            sportSlug={product.sportSlug}
            image={product.image}
            className="aspect-square w-full transition-transform duration-200 group-hover:scale-[1.02]"
          />
        </Link>
        {product.badge && <Badge variant={product.badge} className="absolute top-2 left-2" />}
      </div>

      <div className="flex flex-1 flex-col gap-1">
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border px-2 py-0.5 text-label-md text-text-secondary uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Text variant="body-sm" color="muted">
          {product.specSummary}
        </Text>
        <Link
          href={`/products/${product.slug}`}
          className="text-label-lg text-text-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {product.title}
        </Link>
        {product.rating !== undefined && (
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        )}
      </div>

      <div className="flex items-center justify-between">
        <Text as="span" variant="body-lg" color="primary" className="font-bold">
          {formatPrice(product.price)}
        </Text>
        <button
          type="button"
          onClick={() => toggle(product.id)}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          className="flex size-9 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:border-border-strong hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Heart className={cn("size-4", wishlisted && "fill-secondary text-secondary")} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
