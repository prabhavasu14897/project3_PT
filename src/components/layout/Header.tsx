"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileNav } from "@/components/layout/MobileNav";
import { WishlistButton } from "@/components/layout/WishlistButton";
import { CartBagButton } from "@/components/layout/CartBagButton";
import { SearchBar } from "@/components/forms/SearchBar";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between gap-4 py-3">
        <Logo />
        <DesktopNav />
        {!isHome && (
          <SearchBar size="sm" submitLabel="Search" className="hidden max-w-xs flex-1 lg:flex" />
        )}
        <div className="flex items-center gap-2">
          <WishlistButton />
          <Link
            href="/account/sign-in"
            aria-label="Sign in"
            className="flex size-11 items-center justify-center rounded-full text-text-primary transition-colors duration-200 hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <User className="size-4" aria-hidden="true" />
          </Link>
          <CartBagButton />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
