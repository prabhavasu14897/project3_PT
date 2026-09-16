import { Package, Tags, Award, ShieldCheck } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { AdminStatCard } from "@/components/admin/AdminStatCard";
import { products } from "@/data/products";
import { sports } from "@/data/sports";
import { brands } from "@/data/brands";

export const metadata = { title: "Dashboard" };

export default function AdminDashboardPage() {
  const inStockCount = products.filter((product) => product.inStock).length;

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Heading level={1} size="headline-lg">
          Dashboard
        </Heading>
        <Text variant="body-md" color="muted">
          Prototype catalog overview — data is in-memory mock data, not a live database.
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AdminStatCard label="Products" value={String(products.length)} icon={Package} />
        <AdminStatCard label="Categories" value={String(sports.length)} icon={Tags} />
        <AdminStatCard label="Brands" value={String(brands.length)} icon={Award} />
        <AdminStatCard label="In Stock" value={String(inStockCount)} icon={ShieldCheck} />
      </div>
    </div>
  );
}
