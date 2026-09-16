"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { ProductStage } from "@/components/ui/ProductStage";
import { useCart } from "@/lib/cart-store";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const { lines, setQuantity, removeItem, totalPrice, clear } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <Container className="flex flex-col items-start gap-4 py-24">
        <Text variant="label-caps" color="muted">
          Prototype checkout
        </Text>
        <Heading level={1} size="headline-xl">
          Order simulated successfully
        </Heading>
        <Text variant="body-lg" className="max-w-xl">
          This is a frontend prototype — no payment was processed and no real order was placed.
          In production this step would hand off to a payment provider and order system.
        </Text>
        <Button href="/">Continue Browsing</Button>
      </Container>
    );
  }

  if (lines.length === 0) {
    return (
      <Container className="flex flex-col items-start gap-4 py-24">
        <Heading level={1} size="headline-xl">
          Your bag is empty
        </Heading>
        <Text variant="body-lg">Browse our gear and add something to your bag.</Text>
        <Button href="/sports/cricket">Browse Gear</Button>
      </Container>
    );
  }

  return (
    <Container className="flex flex-col gap-10 py-16 lg:flex-row lg:items-start">
      <div className="flex flex-1 flex-col gap-4">
        <Heading level={1} size="headline-xl">
          Your Bag
        </Heading>

        <ul className="flex flex-col gap-4">
          {lines.map((line) => {
            const product = products.find((item) => item.id === line.productId);
            if (!product) return null;

            return (
              <li
                key={line.productId}
                className="flex items-center gap-4 rounded-lg border border-border bg-surface-elevated p-4"
              >
                <ProductStage
                  sportSlug={product.sportSlug}
                  image={product.image}
                  className="size-20 shrink-0"
                />

                <div className="flex flex-1 flex-col gap-1">
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-label-lg text-text-primary hover:text-primary"
                  >
                    {product.title}
                  </Link>
                  <Text variant="body-sm" color="muted">
                    {formatPrice(product.price)}
                  </Text>
                </div>

                <div className="flex items-center gap-2">
                  <IconButton
                    icon={<Minus className="size-4" aria-hidden="true" />}
                    label={`Decrease quantity of ${product.title}`}
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(line.productId, line.quantity - 1)}
                  />
                  <span className="w-6 text-center text-body-md" aria-live="polite">
                    {line.quantity}
                  </span>
                  <IconButton
                    icon={<Plus className="size-4" aria-hidden="true" />}
                    label={`Increase quantity of ${product.title}`}
                    size="sm"
                    variant="outline"
                    onClick={() => setQuantity(line.productId, line.quantity + 1)}
                  />
                </div>

                <IconButton
                  icon={<X className="size-4" aria-hidden="true" />}
                  label={`Remove ${product.title} from bag`}
                  size="sm"
                  onClick={() => removeItem(line.productId)}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex w-full flex-col gap-4 rounded-lg border border-border bg-surface-elevated p-6 lg:w-80">
        <Text as="h2" variant="label-caps" color="muted">
          Order Summary
        </Text>
        <div className="flex items-center justify-between">
          <Text variant="body-md" color="primary">
            Subtotal
          </Text>
          <Text variant="body-md" color="primary" className="font-bold">
            {formatPrice(totalPrice)}
          </Text>
        </div>
        <Text variant="body-sm" color="muted">
          Taxes and shipping calculated at checkout.
        </Text>
        <Button
          variant="secondary"
          size="lg"
          onClick={() => {
            setOrderPlaced(true);
            clear();
          }}
        >
          Checkout (Prototype)
        </Button>
      </div>
    </Container>
  );
}
