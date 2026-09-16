"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/lib/cart-store";

interface AddToCartButtonProps {
  productId: string;
  inStock: boolean;
}

export function AddToCartButton({ productId, inStock }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  function handleClick() {
    addItem(productId);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  return (
    <Button
      variant="secondary"
      size="lg"
      disabled={!inStock}
      onClick={handleClick}
      className="w-fit"
    >
      {justAdded ? (
        <>
          <Check className="size-4" aria-hidden="true" />
          Added to Bag
        </>
      ) : inStock ? (
        "Add to Bag"
      ) : (
        "Out of Stock"
      )}
    </Button>
  );
}
