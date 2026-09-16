import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

export const metadata = {
  title: {
    default: "Admin",
    template: "%s | Lions United Sports Admin",
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <header className="border-b border-border bg-surface-elevated">
        <Container className="flex h-16 items-center justify-between">
          <Text variant="label-lg" color="primary" className="uppercase">
            Lions United &middot; Admin
          </Text>
          <Link
            href="/"
            className="flex items-center gap-2 text-body-sm text-text-secondary hover:text-text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to storefront
          </Link>
        </Container>
      </header>

      <Container className="flex flex-1 flex-col gap-8 py-8 lg:flex-row">
        <AdminSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </Container>
    </div>
  );
}
