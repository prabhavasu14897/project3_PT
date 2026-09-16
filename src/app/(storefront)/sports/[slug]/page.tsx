import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DisciplinePillNav } from "@/components/sections/DisciplinePillNav";
import { ProductListing } from "@/components/sections/ProductListing";
import { getSportBySlug, sports } from "@/data/sports";
import { getProductsBySport } from "@/data/products";

interface SportPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sports.map((sport) => ({ slug: sport.slug }));
}

export async function generateMetadata({ params }: SportPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sport = getSportBySlug(slug);
  return { title: sport ? sport.title : "Category not found" };
}

export default async function SportPage({ params }: SportPageProps) {
  const { slug } = await params;
  const sport = getSportBySlug(slug);

  if (!sport) {
    notFound();
  }

  const sportProducts = getProductsBySport(sport.slug);

  return (
    <>
      <DisciplinePillNav activeSlug={sport.slug} />
      <ProductListing sport={sport} products={sportProducts} />
    </>
  );
}
