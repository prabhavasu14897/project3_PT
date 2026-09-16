import Image from "next/image";
import { Text } from "@/components/ui/Text";
import type { Brand } from "@/data/types";

function getInitials(name: string): string {
  const words = name.split(" ").filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 3).toUpperCase();
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="flex w-44 shrink-0 flex-col items-center gap-4 rounded-xl border border-border bg-surface-elevated p-6 shadow-level-1">
      <span className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface-muted">
        {brand.logo ? (
          <Image src={brand.logo} alt={brand.name} fill sizes="64px" className="object-contain p-2" />
        ) : (
          <Text as="span" variant="label-lg" color="primary">
            {getInitials(brand.name)}
          </Text>
        )}
      </span>
      <Text as="span" variant="body-md" color="primary" className="text-center font-semibold">
        {brand.name}
      </Text>
    </div>
  );
}
