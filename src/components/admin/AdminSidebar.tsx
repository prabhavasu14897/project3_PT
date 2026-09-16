import { LayoutGrid, Package, Tags, Award } from "lucide-react";
import { AdminNavLink } from "@/components/admin/AdminNavLink";

const adminNavItems = [
  { href: "/admin", label: "Dashboard", Icon: LayoutGrid },
  { href: "/admin/products", label: "Products", Icon: Package },
  { href: "/admin/categories", label: "Categories", Icon: Tags },
  { href: "/admin/brands", label: "Brands", Icon: Award },
];

export function AdminSidebar() {
  return (
    <nav aria-label="Admin" className="flex w-full flex-col gap-1 lg:w-56 lg:shrink-0">
      {adminNavItems.map(({ href, label, Icon }) => (
        <AdminNavLink
          key={href}
          href={href}
          label={label}
          icon={<Icon className="size-4" aria-hidden="true" />}
        />
      ))}
    </nav>
  );
}
