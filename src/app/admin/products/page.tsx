import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Badge } from "@/components/ui/Badge";
import { AdminTable, type AdminTableColumn } from "@/components/admin/AdminTable";
import { products } from "@/data/products";
import { getBrandBySlug } from "@/data/brands";
import { getSportBySlug } from "@/data/sports";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/data/types";

export const metadata = { title: "Products" };

const columns: AdminTableColumn<Product>[] = [
  { header: "Product", cell: (product) => product.title },
  {
    header: "Category",
    cell: (product) => getSportBySlug(product.sportSlug)?.title ?? "—",
  },
  {
    header: "Brand",
    cell: (product) => getBrandBySlug(product.brandSlug)?.name ?? "—",
  },
  { header: "Price", cell: (product) => formatPrice(product.price) },
  {
    header: "Status",
    cell: (product) => (product.inStock ? "In Stock" : "Out of Stock"),
  },
  {
    header: "Badge",
    cell: (product) => (product.badge ? <Badge variant={product.badge} /> : "—"),
  },
];

export default function AdminProductsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Heading level={1} size="headline-lg">
          Products
        </Heading>
        <Text variant="body-md" color="muted">
          Read-only prototype view. Editing lands with the admin CRUD flow.
        </Text>
      </div>
      <AdminTable columns={columns} rows={products} getRowKey={(product) => product.id} />
    </div>
  );
}
