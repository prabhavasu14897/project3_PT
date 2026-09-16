"use client";

import Link from "next/link";
import { Heart, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ProductStage } from "@/components/ui/ProductStage";
import { useWishlist } from "@/lib/wishlist-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { productIds, toggle } = useWishlist();
  const wishlisted = products.filter((product) => productIds.includes(product.id));

  if (wishlisted.length === 0) {
    return (
      <Container className="flex flex-col items-start gap-4 py-24">
        <Heart className="size-8 text-text-muted" aria-hidden="true" />
        <Heading level={1} size="headline-xl">
          Your wishlist is empty
        </Heading>
        <Text variant="body-lg">Save gear you&rsquo;re eyeing so it&rsquo;s easy to find later.</Text>
        <Button href="/sports/cricket">Browse Gear</Button>
      </Container>
    );
  }

  return (
    <Container className="flex flex-col gap-6 py-16">
      <Heading level={1} size="headline-xl">
        Your Wishlist
      </Heading>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {wishlisted.map((product) => (
          <li
            key={product.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-surface-elevated p-4"
          >
            <div className="relative">
              <ProductStage
                sportSlug={product.sportSlug}
                image={product.image}
                className="aspect-square w-full"
              />
              <IconButton
                icon={<X className="size-4" aria-hidden="true" />}
                label={`Remove ${product.title} from wishlist`}
                size="sm"
                variant="outline"
                onClick={() => toggle(product.id)}
                className="absolute top-2 right-2"
              />
            </div>
            <Link
              href={`/products/${product.slug}`}
              className="text-label-lg text-text-primary hover:text-primary"
            >
              {product.title}
            </Link>
            <Text variant="body-md" color="primary" className="font-bold">
              {formatPrice(product.price)}
            </Text>
          </li>
        ))}
      </ul>
    </Container>
  );
}
