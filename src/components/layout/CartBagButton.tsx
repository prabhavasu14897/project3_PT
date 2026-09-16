"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export function CartBagButton() {
  const { totalCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Bag, ${totalCount} ${totalCount === 1 ? "item" : "items"}`}
      className="flex h-11 items-center gap-2 rounded-full bg-tertiary px-5 text-label-lg text-on-tertiary transition-colors duration-200 hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <ShoppingBag className="size-4" aria-hidden="true" />
      Bag
      <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-body-sm">
        {totalCount}
      </span>
    </Link>
  );
}
