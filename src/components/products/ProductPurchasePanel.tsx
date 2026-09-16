"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Heart, Minus, Plus, ShieldCheck, ShoppingBag, Truck, Zap } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";
import { useCart } from "@/lib/cart-store";
import { useWishlist } from "@/lib/wishlist-store";
import { cn, formatPrice } from "@/lib/utils";
import type { Brand, Product } from "@/data/types";

interface ProductPurchasePanelProps {
  product: Product;
  brand?: Brand;
}

const trustPoints = [
  { icon: Truck, label: "Free standard delivery on orders above ₹2,999 across India" },
  { icon: ShieldCheck, label: "7-Day Hassle-Free Size Replacement Guarantee" },
  { icon: Check, label: "Authentic Tournament Certified Gear" },
];

export function ProductPurchasePanel({ product, brand }: ProductPurchasePanelProps) {
  const router = useRouter();
  const { addItem } = useCart();
  const { has, toggle } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<number | undefined>(product.sizesUk?.[3] ?? product.sizesUk?.[0]);
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const wishlisted = has(product.id);
  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : undefined;

  function handleAddToBag() {
    addItem(product.id, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product.id, quantity);
    router.push("/cart");
  }

  return (
    <div className="flex flex-col gap-5">
      {brand && (
        <Text as="span" variant="label-md" color="secondary" className="uppercase">
          {brand.name} Official
        </Text>
      )}

      <Heading level={1} size="headline-lg" balance={false}>
        {product.title}
      </Heading>

      <Text variant="body-sm" color="muted">
        {product.itemCode && <>Item Code: {product.itemCode} &middot; </>}
        {product.specSummary}
      </Text>

      <div className="flex flex-wrap items-center gap-3">
        {product.rating !== undefined && (
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        )}
        <Text as="span" variant="body-sm" color={product.inStock ? "primary" : "muted"}>
          &bull; {product.inStock ? "In Stock" : "Out of Stock"}
          {product.readyLabel && product.inStock ? ` • ${product.readyLabel}` : ""}
        </Text>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Text as="span" variant="body-lg" color="primary" className="text-headline-lg font-bold">
          {formatPrice(product.price)}
        </Text>
        {product.compareAtPrice && (
          <Text as="span" variant="body-md" color="muted" className="line-through">
            {formatPrice(product.compareAtPrice)}
          </Text>
        )}
        {discountPercent !== undefined && (
          <span className="rounded-md bg-success-container px-2 py-1 text-label-md text-success">
            Save {discountPercent}%
          </span>
        )}
      </div>
      <Text variant="body-sm" color="muted" className="-mt-3">
        Inclusive of all taxes
      </Text>

      {product.sizesUk && product.sizesUk.length > 0 && (
        <div className="flex flex-col gap-2">
          <Text as="span" variant="label-md" color="primary" className="uppercase">
            Size (UK):
          </Text>
          <div className="flex flex-wrap gap-2">
            {product.sizesUk.map((size) => {
              const active = size === selectedSize;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  aria-pressed={active}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md border text-body-sm transition-colors duration-200",
                    active
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border text-text-secondary hover:border-border-strong",
                  )}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-full border border-border">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex size-11 items-center justify-center text-text-secondary hover:text-text-primary"
          >
            <Minus className="size-4" aria-hidden="true" />
          </button>
          <span className="w-8 text-center text-body-md" aria-live="polite">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="flex size-11 items-center justify-center text-text-secondary hover:text-text-primary"
          >
            <Plus className="size-4" aria-hidden="true" />
          </button>
        </div>

        <Button
          variant="secondary"
          size="lg"
          disabled={!product.inStock}
          onClick={handleAddToBag}
          className="flex-1"
        >
          {justAdded ? (
            <>
              <Check className="size-4" aria-hidden="true" />
              Added to Bag
            </>
          ) : (
            <>
              <ShoppingBag className="size-4" aria-hidden="true" />
              Add to Bag
            </>
          )}
        </Button>

        <button
          type="button"
          onClick={() => toggle(product.id)}
          aria-pressed={wishlisted}
          aria-label={wishlisted ? `Remove ${product.title} from wishlist` : `Add ${product.title} to wishlist`}
          className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-colors duration-200 hover:border-border-strong hover:text-secondary"
        >
          <Heart className={cn("size-4", wishlisted && "fill-secondary text-secondary")} aria-hidden="true" />
        </button>
      </div>

      <Button
        variant="primary"
        size="lg"
        disabled={!product.inStock}
        onClick={handleBuyNow}
        className="w-full bg-tertiary hover:bg-tertiary"
      >
        <Zap className="size-4" aria-hidden="true" />
        Buy Now &bull; Express Checkout
      </Button>

      <div className="flex flex-col gap-2 rounded-lg bg-surface-muted p-4">
        {trustPoints.map((point) => (
          <div key={point.label} className="flex items-center gap-2.5">
            <point.icon className="size-4 shrink-0 text-success" aria-hidden="true" />
            <Text variant="body-sm" color="primary">
              {point.label}
            </Text>
          </div>
        ))}
      </div>

      {product.badge && <Badge variant={product.badge} className="w-fit" />}
    </div>
  );
}
