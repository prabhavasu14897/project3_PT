import type { Product } from "@/data/types";

export type SortOption = "newest" | "price-asc" | "price-desc" | "rating";

export interface ProductFilterState {
  sort: SortOption;
  maxPrice: number;
  brandSlugs: string[];
  sizesUk: number[];
  colorNames: string[];
  subCategories: string[];
  grades: string[];
}

export function createDefaultFilters(maxPrice: number): ProductFilterState {
  return {
    sort: "newest",
    maxPrice,
    brandSlugs: [],
    sizesUk: [],
    colorNames: [],
    subCategories: [],
    grades: [],
  };
}

export function applyProductFilters(products: Product[], filters: ProductFilterState): Product[] {
  const filtered = products.filter((product) => {
    if (product.price > filters.maxPrice) return false;
    if (filters.brandSlugs.length > 0 && !filters.brandSlugs.includes(product.brandSlug)) {
      return false;
    }
    if (
      filters.sizesUk.length > 0 &&
      !(product.sizesUk ?? []).some((size) => filters.sizesUk.includes(size))
    ) {
      return false;
    }
    if (
      filters.colorNames.length > 0 &&
      !(product.color && filters.colorNames.includes(product.color.name))
    ) {
      return false;
    }
    if (
      filters.subCategories.length > 0 &&
      !(product.subCategory && filters.subCategories.includes(product.subCategory))
    ) {
      return false;
    }
    if (filters.grades.length > 0 && !(product.grade && filters.grades.includes(product.grade))) {
      return false;
    }
    return true;
  });

  const sorted = [...filtered];
  switch (filters.sort) {
    case "price-asc":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sorted.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case "newest":
    default:
      break;
  }

  return sorted;
}
