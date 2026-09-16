"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useWishlist } from "@/lib/wishlist-store";

export function WishlistButton() {
  const { count } = useWishlist();

  return (
    <Link
      href="/wishlist"
      aria-label={`Wishlist, ${count} ${count === 1 ? "item" : "items"}`}
      className="relative flex size-11 items-center justify-center rounded-full text-text-primary transition-colors duration-200 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Heart className="size-5" aria-hidden="true" />
      <span
        className="absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-secondary text-body-sm font-bold text-on-secondary"
        aria-hidden="true"
      >
        {count}
      </span>
    </Link>
  );
}
