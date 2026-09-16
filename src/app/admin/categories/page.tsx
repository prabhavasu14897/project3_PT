import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { AdminTable, type AdminTableColumn } from "@/components/admin/AdminTable";
import { sports } from "@/data/sports";
import { getProductsBySport } from "@/data/products";
import type { Sport } from "@/data/types";

export const metadata = { title: "Categories" };

const columns: AdminTableColumn<Sport>[] = [
  { header: "Category", cell: (sport) => sport.title },
  { header: "Slug", cell: (sport) => sport.slug },
  {
    header: "Products",
    cell: (sport) => String(getProductsBySport(sport.slug).length),
  },
];

export default function AdminCategoriesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Heading level={1} size="headline-lg">
          Categories
        </Heading>
        <Text variant="body-md" color="muted">
          Sport disciplines available in the storefront navigation.
        </Text>
      </div>
      <AdminTable columns={columns} rows={sports} getRowKey={(sport) => sport.id} />
    </div>
  );
}
