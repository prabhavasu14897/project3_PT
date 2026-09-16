"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { Text } from "@/components/ui/Text";
import { Input } from "@/components/ui/Input";
import { cn, formatPrice } from "@/lib/utils";
import type { ProductFilterState, SortOption } from "@/lib/product-filters";
import type { Brand } from "@/data/types";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
}

function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <details className="group border-b border-border py-4 first:pt-0 last:border-0" open>
      <summary className="flex cursor-pointer list-none items-center justify-between text-label-lg text-text-primary">
        {title}
        <ChevronDown
          className="size-4 text-text-muted transition-transform duration-200 group-open:rotate-180"
          aria-hidden="true"
        />
      </summary>
      <div className="mt-4">{children}</div>
    </details>
  );
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price Low To High" },
  { value: "price-desc", label: "Price High To Low" },
  { value: "rating", label: "Top Rated" },
];

interface ProductFiltersProps {
  filters: ProductFilterState;
  onChange: (filters: ProductFilterState) => void;
  onReset: () => void;
  priceCeiling: number;
  brands: Brand[];
  availableSizes: number[];
  availableColors: { name: string; hex: string }[];
  availableSubCategories?: string[];
  availableGrades?: string[];
}

export function ProductFilters({
  filters,
  onChange,
  onReset,
  priceCeiling,
  brands,
  availableSizes,
  availableColors,
  availableSubCategories = [],
  availableGrades = [],
}: ProductFiltersProps) {
  function toggleValue<T>(list: T[], value: T): T[] {
    return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
  }

  return (
    <div className="flex w-full flex-col gap-1 lg:w-64 lg:shrink-0">
      <div className="flex items-center justify-between pb-4">
        <Text as="h2" variant="label-lg" color="primary" className="uppercase">
          Filters
        </Text>
        <button
          type="button"
          onClick={onReset}
          className="text-body-sm text-secondary hover:text-secondary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Reset All
        </button>
      </div>

      <FilterSection title="Sort By">
        <fieldset className="flex flex-col gap-3">
          <legend className="sr-only">Sort products by</legend>
          {sortOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2.5 text-body-md text-text-primary">
              <input
                type="radio"
                name="sort"
                value={option.value}
                checked={filters.sort === option.value}
                onChange={() => onChange({ ...filters, sort: option.value })}
                className="size-4 accent-secondary"
              />
              {option.label}
            </label>
          ))}
        </fieldset>
      </FilterSection>

      <FilterSection title="Price (₹)">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <label className="flex flex-1 flex-col gap-1">
              <Text as="span" variant="body-sm" color="muted">
                Min
              </Text>
              <Input value="0" readOnly aria-label="Minimum price" />
            </label>
            <label className="flex flex-1 flex-col gap-1">
              <Text as="span" variant="body-sm" color="muted">
                Max
              </Text>
              <Input value={formatPrice(filters.maxPrice)} readOnly aria-label="Maximum price" />
            </label>
          </div>
          <input
            type="range"
            min={0}
            max={priceCeiling}
            step={50}
            value={filters.maxPrice}
            onChange={(event) => onChange({ ...filters, maxPrice: Number(event.target.value) })}
            className="w-full accent-secondary"
            aria-label="Maximum price"
          />
        </div>
      </FilterSection>

      {availableSubCategories.length > 0 && (
        <FilterSection title="Sub-Category">
          <div className="flex flex-col gap-3">
            {availableSubCategories.map((subCategory) => (
              <label key={subCategory} className="flex items-center gap-2.5 text-body-md text-text-primary">
                <input
                  type="checkbox"
                  checked={filters.subCategories.includes(subCategory)}
                  onChange={() =>
                    onChange({
                      ...filters,
                      subCategories: toggleValue(filters.subCategories, subCategory),
                    })
                  }
                  className="size-4 rounded accent-secondary"
                />
                {subCategory}
              </label>
            ))}
          </div>
        </FilterSection>
      )}

      <FilterSection title="Brand">
        <div className="flex flex-col gap-3">
          {brands.map((brand) => (
            <label key={brand.slug} className="flex items-center gap-2.5 text-body-md text-text-primary">
              <input
                type="checkbox"
                checked={filters.brandSlugs.includes(brand.slug)}
                onChange={() =>
                  onChange({ ...filters, brandSlugs: toggleValue(filters.brandSlugs, brand.slug) })
                }
                className="size-4 rounded accent-secondary"
              />
              {brand.name}
            </label>
          ))}
        </div>
      </FilterSection>

      {availableSizes.length > 0 && (
        <FilterSection title="Size (UK)">
          <div className="flex flex-wrap gap-2">
            {availableSizes.map((size) => {
              const active = filters.sizesUk.includes(size);
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => onChange({ ...filters, sizesUk: toggleValue(filters.sizesUk, size) })}
                  aria-pressed={active}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-md border text-body-sm transition-colors duration-200",
                    active
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border text-text-secondary hover:border-border-strong",
                  )}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </FilterSection>
      )}

      {availableColors.length > 0 && (
        <FilterSection title="Colour">
          <div className="flex flex-col gap-3">
            {availableColors.map((color) => {
              const active = filters.colorNames.includes(color.name);
              return (
                <label key={color.name} className="flex items-center gap-2.5 text-body-md text-text-primary">
                  <input
                    type="checkbox"
                    checked={active}
                    onChange={() =>
                      onChange({ ...filters, colorNames: toggleValue(filters.colorNames, color.name) })
                    }
                    className="size-4 rounded accent-secondary"
                  />
                  <span
                    className="size-3.5 rounded-full border border-border"
                    style={{ backgroundColor: color.hex }}
                    aria-hidden="true"
                  />
                  {color.name}
                </label>
              );
            })}
          </div>
        </FilterSection>
      )}

      {availableGrades.length > 0 && (
        <FilterSection title="Size / Grade">
          <div className="grid grid-cols-2 gap-2">
            {availableGrades.map((grade) => {
              const active = filters.grades.includes(grade);
              return (
                <button
                  key={grade}
                  type="button"
                  onClick={() => onChange({ ...filters, grades: toggleValue(filters.grades, grade) })}
                  aria-pressed={active}
                  className={cn(
                    "rounded-md border px-3 py-2 text-body-sm transition-colors duration-200",
                    active
                      ? "border-secondary bg-secondary/10 text-secondary"
                      : "border-border text-text-secondary hover:border-border-strong",
                  )}
                >
                  {grade}
                </button>
              );
            })}
          </div>
        </FilterSection>
      )}
    </div>
  );
}
