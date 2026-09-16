import { Container } from "@/components/ui/Container";
import { Pill } from "@/components/ui/Pill";
import { sports } from "@/data/sports";

interface DisciplinePillNavProps {
  activeSlug?: string;
}

export function DisciplinePillNav({ activeSlug = sports[0]?.slug }: DisciplinePillNavProps) {
  return (
    <nav aria-label="Shop by discipline" className="border-y border-border bg-surface-elevated">
      <Container>
        <div className="flex gap-2 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sports.map((sport) => (
            <Pill key={sport.slug} href={`/sports/${sport.slug}`} active={sport.slug === activeSlug}>
              {sport.title}
            </Pill>
          ))}
        </div>
      </Container>
    </nav>
  );
}
