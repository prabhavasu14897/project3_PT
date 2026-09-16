import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ProductStage } from "@/components/ui/ProductStage";
import { getBrandBySlug } from "@/data/brands";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/types";

interface MatchKitSectionProps {
  products: Product[];
}

export function MatchKitSection({ products }: MatchKitSectionProps) {
  if (products.length === 0) return null;

  return (
    <section aria-labelledby="match-kit-heading">
      <Container className="flex flex-col gap-8 py-16">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <Heading level={2} size="headline-lg" id="match-kit-heading">
              Complete Your Match Kit
            </Heading>
            <Text variant="body-md" color="muted">
              Frequently matched cricket spikes, all-round equipment and footwear.
            </Text>
          </div>
          <Link
            href="/sports/shoes"
            className="hidden shrink-0 items-center gap-1.5 text-label-md text-secondary hover:text-secondary-strong sm:flex"
          >
            Explore All Footwear
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const brand = getBrandBySlug(product.brandSlug);
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="flex flex-col gap-3 rounded-lg border border-border bg-surface-elevated p-4 shadow-level-1 transition-shadow duration-200 hover:shadow-level-2"
              >
                <ProductStage
                  sportSlug={product.sportSlug}
                  image={product.image}
                  className="aspect-square w-full"
                />
                <div className="flex flex-col gap-1">
                  {brand && (
                    <Text variant="label-md" color="muted" className="uppercase">
                      {brand.name}
                    </Text>
                  )}
                  <Text as="span" variant="body-md" color="primary" className="font-semibold">
                    {product.title}
                  </Text>
                  <Text variant="body-md" color="primary" className="font-bold">
                    {formatPrice(product.price)}
                  </Text>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
