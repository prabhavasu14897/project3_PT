import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Pill } from "@/components/ui/Pill";
import { SearchBar } from "@/components/forms/SearchBar";
import { HeroShowcaseCard } from "@/components/sections/HeroShowcaseCard";
import { sports } from "@/data/sports";

const popularCategorySlugs = ["shoes", "cricket", "football", "badminton", "athletics"];
const popularCategories = popularCategorySlugs
  .map((slug) => sports.find((sport) => sport.slug === slug))
  .filter((sport): sport is NonNullable<typeof sport> => Boolean(sport));

export function Hero() {
  return (
    <Container className="grid grid-cols-1 items-center gap-12 pt-12 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-16 lg:pb-28">
      <div className="flex flex-col items-start gap-6 lg:col-span-7">
        <Heading level={1} className="uppercase">
          Championship Gear for Power &amp; Precision
        </Heading>

        <Text variant="body-lg" className="max-w-xl">
          Professional hand-crafted Grade 1 English Willow bats, high-traction spike footwear,
          and match-grade protective armour engineered for modern competitive athletes.
        </Text>

        <SearchBar className="w-full max-w-xl" />

        <div className="flex flex-wrap items-center gap-2">
          <Text as="span" variant="body-sm" color="muted">
            Popular categories:
          </Text>
          {popularCategories.map((sport) => (
            <Pill key={sport.slug} href={`/sports/${sport.slug}`}>
              {sport.title}
            </Pill>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <HeroShowcaseCard />
      </div>
    </Container>
  );
}
