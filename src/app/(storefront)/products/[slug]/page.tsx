import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ProductPurchasePanel } from "@/components/products/ProductPurchasePanel";
import { ProductDetailsTabs } from "@/components/products/ProductDetailsTabs";
import { MatchKitSection } from "@/components/sections/MatchKitSection";
import { getProductBySlug, products } from "@/data/products";
import { getBrandBySlug } from "@/data/brands";
import { getSportBySlug } from "@/data/sports";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? product.title : "Product not found" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const brand = getBrandBySlug(product.brandSlug);
  const sport = getSportBySlug(product.sportSlug);
  const relatedProducts = products
    .filter((item) => item.sportSlug === product.sportSlug && item.id !== product.id)
    .slice(0, 4);

  const galleryBadges = [
    "100% Genuine Certified Gear",
    ...(product.tags && product.tags.length > 0 ? [`${product.tags[0]} Rubber Sole`] : []),
  ];

  return (
    <>
      <Container className="pt-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            ...(sport ? [{ label: sport.title, href: `/sports/${sport.slug}` }] : []),
            { label: product.title },
          ]}
        />
      </Container>

      <Container className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-2">
        <ProductGallery
          sportSlug={product.sportSlug}
          image={product.image}
          title={product.title}
          badges={galleryBadges}
        />
        <ProductPurchasePanel product={product} brand={brand} />
      </Container>

      <Container className="pb-8">
        <ProductDetailsTabs product={product} />
      </Container>

      <MatchKitSection products={relatedProducts} />
    </>
  );
}
