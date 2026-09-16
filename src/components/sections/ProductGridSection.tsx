import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/data/products";

export function ProductGridSection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section aria-labelledby="popular-pro-gear-heading">
      <Container className="flex flex-col gap-8 py-20">
        <SectionHeader
          title="Popular Pro Gear"
          description="Match-tested choices for maximum sweet-spot power, stability, and protection."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
