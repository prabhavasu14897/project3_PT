"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { RatingStars } from "@/components/ui/RatingStars";
import { cn } from "@/lib/utils";
import type { Product } from "@/data/types";

type TabId = "details" | "videos" | "reviews" | "shipping";

interface ProductDetailsTabsProps {
  product: Product;
}

export function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("details");

  const tabs: { id: TabId; label: string }[] = [
    { id: "details", label: "Details" },
    { id: "videos", label: "Videos" },
    { id: "reviews", label: `Reviews${product.reviewCount ? ` (${product.reviewCount})` : ""}` },
    { id: "shipping", label: "Shipping & Return" },
  ];

  return (
    <div className="rounded-xl border border-border bg-surface-elevated p-6">
      <div className="flex flex-wrap gap-2 border-b border-border pb-4" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded-full px-4 py-2 text-label-md transition-colors duration-200",
              activeTab === tab.id
                ? "bg-tertiary text-on-tertiary"
                : "bg-surface-muted text-text-secondary hover:text-text-primary",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-6" role="tabpanel">
        {activeTab === "details" && (
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Heading level={2} size="headline-md">
                Product Details
              </Heading>
              <Text variant="body-md">{product.description}</Text>
            </div>

            {product.keyFeatures && product.keyFeatures.length > 0 && (
              <div className="flex flex-col gap-3">
                <Text as="h3" variant="label-lg" color="primary" className="uppercase">
                  Key Features
                </Text>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {product.keyFeatures.map((feature) => (
                    <div key={feature.title} className="flex gap-2.5 rounded-lg bg-surface-muted p-3">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                      <Text variant="body-sm" color="primary">
                        <span className="font-semibold">{feature.title}:</span> {feature.description}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(product.bestSuitedFor || product.highlights) && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {product.bestSuitedFor && (
                  <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                    <Text as="h3" variant="label-md" color="primary" className="uppercase">
                      Best Suited For
                    </Text>
                    <ul className="flex flex-col gap-1.5">
                      {product.bestSuitedFor.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
                          <Text variant="body-sm">{item}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {product.highlights && (
                  <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                    <Text as="h3" variant="label-md" color="primary" className="uppercase">
                      Highlights
                    </Text>
                    <ul className="flex flex-col gap-1.5">
                      {product.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
                          <Text variant="body-sm">{item}</Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {activeTab === "videos" && (
          <Text variant="body-md" color="muted">
            No product videos yet — check back soon.
          </Text>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-3">
            {product.rating !== undefined ? (
              <>
                <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
                <Text variant="body-md" color="muted">
                  Individual reviews aren&rsquo;t available in this prototype yet.
                </Text>
              </>
            ) : (
              <Text variant="body-md" color="muted">
                No reviews yet for this product.
              </Text>
            )}
          </div>
        )}

        {activeTab === "shipping" && (
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
              <Text variant="body-md">Free standard delivery on orders above ₹2,999 across India.</Text>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
              <Text variant="body-md">Dispatched within 48 hours of a confirmed order.</Text>
            </li>
            <li className="flex items-start gap-2">
              <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden="true" />
              <Text variant="body-md">
                7-day size exchange — unworn, with original packaging and tags attached.
              </Text>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
