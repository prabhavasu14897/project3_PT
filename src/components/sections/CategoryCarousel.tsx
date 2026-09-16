"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { IconButton } from "@/components/ui/IconButton";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { cn } from "@/lib/utils";
import { sports } from "@/data/sports";

const VISIBLE_RANGE = 2;
const AUTOPLAY_INTERVAL_MS = 3500;

function wrap(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function CategoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  function goTo(index: number) {
    setActiveIndex(wrap(index, sports.length));
  }

  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => wrap(current + 1, sports.length));
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, isPaused]);

  return (
    <section aria-labelledby="browse-categories-heading">
      <Container
        className="flex flex-col gap-8 py-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <SectionHeader
          eyebrow="Spatial Navigator"
          title="Browse by Categories"
          description="Swipe to explore specialized equipment across disciplines."
          actions={
            <div className="flex items-center gap-3">
              <IconButton
                icon={<ChevronLeft className="size-4" aria-hidden="true" />}
                label="Previous category"
                variant="outline"
                size="sm"
                onClick={() => goTo(activeIndex - 1)}
              />
              <IconButton
                icon={<ChevronRight className="size-4" aria-hidden="true" />}
                label="Next category"
                variant="outline"
                size="sm"
                onClick={() => goTo(activeIndex + 1)}
              />
            </div>
          }
        />

        <div className="relative h-[380px] overflow-hidden sm:h-[420px]">
          {sports.map((sport, index) => {
            let offset = index - activeIndex;
            if (offset > sports.length / 2) offset -= sports.length;
            if (offset < -sports.length / 2) offset += sports.length;

            if (Math.abs(offset) > VISIBLE_RANGE) return null;

            const isActive = offset === 0;
            const magnitude = Math.abs(offset);

            return (
              <div
                key={sport.id}
                className="absolute top-0 left-1/2 h-full w-[280px] transition-[transform,filter,opacity] duration-500 ease-out sm:w-[320px]"
                style={{
                  transform: `translateX(calc(-50% + ${offset * 62}%)) scale(${
                    isActive ? 1 : magnitude === 1 ? 0.86 : 0.74
                  })`,
                  filter: isActive ? "none" : `blur(${magnitude * 1.5}px)`,
                  opacity: isActive ? 1 : magnitude === 1 ? 0.85 : 0.45,
                  zIndex: 10 - magnitude,
                }}
              >
                <CategoryCard sport={sport} active={isActive} onSelect={() => goTo(index)} />
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2">
          {sports.map((sport, index) => (
            <button
              key={sport.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show ${sport.title}`}
              aria-current={index === activeIndex}
              className={cn(
                "h-1.5 rounded-full transition-all duration-200",
                index === activeIndex ? "w-6 bg-secondary" : "w-1.5 bg-border-strong",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
