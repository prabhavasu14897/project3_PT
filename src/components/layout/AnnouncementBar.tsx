import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function AnnouncementBar() {
  return (
    <div className="bg-tertiary text-text-on-dark">
      <Container className="flex h-10 items-center justify-between gap-4 text-body-sm">
        <div className="flex items-center gap-2">
          <span className="size-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
          <span className="truncate">Free standard shipping across India on orders above ₹2,999</span>
        </div>
        <div className="hidden items-center gap-4 whitespace-nowrap sm:flex">
          <Link href="/services/bat-knocking" className="hover:text-white">
            Custom Knocking Lab
          </Link>
          <span className="text-text-on-dark-muted" aria-hidden="true">
            |
          </span>
          <Link href="/account/orders" className="hover:text-white">
            Track Order
          </Link>
          <span className="text-text-on-dark-muted" aria-hidden="true">
            |
          </span>
          <span>WhatsApp Support Active</span>
        </div>
      </Container>
    </div>
  );
}
