import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SearchBar } from "@/components/forms/SearchBar";
import { ProductCard } from "@/components/cards/ProductCard";
import { products } from "@/data/products";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? products.filter((product) => product.title.toLowerCase().includes(query))
    : [];

  return (
    <Container className="flex flex-col gap-8 py-16">
      <div className="flex flex-col gap-4">
        <Heading level={1} size="headline-xl">
          Search Gear
        </Heading>
        <SearchBar defaultValue={q} className="max-w-xl" />
      </div>

      {query && (
        <Text variant="body-md" color="muted">
          {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{q}&rdquo;
        </Text>
      )}

      {results.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {query && results.length === 0 && (
        <Text variant="body-md" color="muted">
          No gear matched &ldquo;{q}&rdquo;. Try a different search term.
        </Text>
      )}
    </Container>
  );
}
