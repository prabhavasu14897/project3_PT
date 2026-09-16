"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProductFilters } from "@/components/sections/ProductFilters";
import { cn } from "@/lib/utils";
import { brands } from "@/data/brands";
import { applyProductFilters, createDefaultFilters, type ProductFilterState } from "@/lib/product-filters";
import type { Product, Sport } from "@/data/types";

const PAGE_SIZE = 9;

interface ProductListingProps {
  sport: Sport;
  products: Product[];
}

export function ProductListing({ sport, products }: ProductListingProps) {
  const priceCeiling = useMemo(
    () => Math.max(...products.map((product) => product.price), 0),
    [products],
  );
  const [filters, setFilters] = useState<ProductFilterState>(() => createDefaultFilters(priceCeiling));
  const [page, setPage] = useState(1);

  const categoryBrands = useMemo(() => {
    const slugs = new Set(products.map((product) => product.brandSlug));
    return brands.filter((brand) => slugs.has(brand.slug));
  }, [products]);

  const availableSizes = useMemo(() => {
    const sizes = new Set<number>();
    for (const product of products) {
      for (const size of product.sizesUk ?? []) sizes.add(size);
    }
    return Array.from(sizes).sort((a, b) => a - b);
  }, [products]);

  const availableColors = useMemo(() => {
    const seen = new Map<string, { name: string; hex: string }>();
    for (const product of products) {
      if (product.color) seen.set(product.color.name, product.color);
    }
    return Array.from(seen.values());
  }, [products]);

  const availableSubCategories = useMemo(() => {
    const seen = new Set<string>();
    for (const product of products) {
      if (product.subCategory) seen.add(product.subCategory);
    }
    return Array.from(seen);
  }, [products]);

  const availableGrades = useMemo(() => {
    const seen = new Set<string>();
    for (const product of products) {
      if (product.grade) seen.add(product.grade);
    }
    return Array.from(seen);
  }, [products]);

  const visibleProducts = useMemo(() => applyProductFilters(products, filters), [products, filters]);

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);

  function updateFilters(next: ProductFilterState) {
    setFilters(next);
    setPage(1);
  }

  const pagedProducts = visibleProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const rangeStart = visibleProducts.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(currentPage * PAGE_SIZE, visibleProducts.length);

  return (
    <Container className="flex flex-col gap-8 py-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: sport.title }]} />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <Heading level={1} size="headline-xl" balance={false}>
          Explore All Products{" "}
          <Text as="span" variant="body-lg" color="muted" className="font-normal">
            ({visibleProducts.length} {visibleProducts.length === 1 ? "Product" : "Products"} Found)
          </Text>
        </Heading>
        <Text variant="body-md" color="muted" className="sm:text-right">
          {sport.description}
        </Text>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <ProductFilters
          filters={filters}
          onChange={updateFilters}
          onReset={() => updateFilters(createDefaultFilters(priceCeiling))}
          priceCeiling={priceCeiling}
          brands={categoryBrands}
          availableSizes={availableSizes}
          availableColors={availableColors}
          availableSubCategories={availableSubCategories}
          availableGrades={availableGrades}
        />

        {visibleProducts.length > 0 ? (
          <div className="flex flex-1 flex-col gap-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {pagedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                <Text variant="body-sm" color="muted">
                  Showing {rangeStart}&ndash;{rangeEnd} of {visibleProducts.length} products
                </Text>
                <nav aria-label="Pagination" className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1 rounded-md border border-border px-3 py-2 text-body-sm text-text-secondary transition-colors duration-200 hover:border-border-strong hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <ChevronLeft className="size-3.5" aria-hidden="true" />
                    Prev
                  </button>
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setPage(pageNumber)}
                      aria-current={pageNumber === currentPage ? "page" : undefined}
                      className={cn(
                        "flex size-9 items-center justify-center rounded-md text-body-sm transition-colors duration-200",
                        pageNumber === currentPage
                          ? "bg-secondary text-on-secondary"
                          : "border border-border text-text-secondary hover:border-border-strong",
                      )}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1 rounded-md border border-border px-3 py-2 text-body-sm text-text-secondary transition-colors duration-200 hover:border-border-strong hover:text-text-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Next
                    <ChevronRight className="size-3.5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-1 flex-col items-start gap-2 rounded-lg border border-dashed border-border p-10">
            <Text variant="body-lg" color="primary" className="font-semibold">
              No products match these filters
            </Text>
            <Text variant="body-md" color="muted">
              Try widening the price range or clearing a filter.
            </Text>
          </div>
        )}
      </div>
    </Container>
  );
}
