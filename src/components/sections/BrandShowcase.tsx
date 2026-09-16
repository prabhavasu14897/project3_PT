import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandCard } from "@/components/cards/BrandCard";
import { brands } from "@/data/brands";

const tiltPattern = [-10, 6, -4, 9, -6, 4];

export function BrandShowcase() {
  const track = [...brands, ...brands];

  return (
    <section aria-labelledby="popular-brands-heading">
      <Container className="flex flex-col gap-10 py-20">
        <SectionHeader
          eyebrow="Official Brand Partners & Manufacturing Giants"
          title="Popular Brands"
          description="Authorized global distributors, each shipment stamped with an authentic hologram and factory warranty."
        />

        <div className="relative overflow-hidden py-6" style={{ perspective: "1600px" }}>
          <div
            className="flex w-max gap-8 motion-safe:animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {track.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="shrink-0"
                style={{ transform: `rotateY(${tiltPattern[index % tiltPattern.length]}deg)` }}
              >
                <BrandCard brand={brand} />
              </div>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-surface to-transparent"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-surface to-transparent"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}
