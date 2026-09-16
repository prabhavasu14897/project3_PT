import { Hero } from "@/components/sections/Hero";
import { DisciplinePillNav } from "@/components/sections/DisciplinePillNav";
import { CategoryCarousel } from "@/components/sections/CategoryCarousel";
import { PromoBanner } from "@/components/sections/PromoBanner";
import { ProductGridSection } from "@/components/sections/ProductGridSection";
import { BrandShowcase } from "@/components/sections/BrandShowcase";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DisciplinePillNav />
      <CategoryCarousel />
      <PromoBanner />
      <ProductGridSection />
      <BrandShowcase />
      <NewsletterSection />
    </>
  );
}
