import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { AdminTable, type AdminTableColumn } from "@/components/admin/AdminTable";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import type { Brand } from "@/data/types";

export const metadata = { title: "Brands" };

const columns: AdminTableColumn<Brand>[] = [
  { header: "Brand", cell: (brand) => brand.name },
  { header: "Tagline", cell: (brand) => brand.tagline },
  {
    header: "Products",
    cell: (brand) => String(products.filter((product) => product.brandSlug === brand.slug).length),
  },
];

export default function AdminBrandsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Heading level={1} size="headline-lg">
          Brands
        </Heading>
        <Text variant="body-md" color="muted">
          Authorized brand partners represented in the catalog.
        </Text>
      </div>
      <AdminTable columns={columns} rows={brands} getRowKey={(brand) => brand.id} />
    </div>
  );
}
