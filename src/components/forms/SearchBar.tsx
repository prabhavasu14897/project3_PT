import { Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  defaultValue?: string;
  className?: string;
  size?: "md" | "sm";
  submitLabel?: string;
}

export function SearchBar({ defaultValue, className, size = "md", submitLabel }: SearchBarProps) {
  return (
    <form
      action="/search"
      role="search"
      className={cn(
        "flex items-center gap-2 rounded-full border border-border bg-surface-elevated py-1.5 pr-1.5 pl-5 shadow-level-1",
        size === "md" ? "h-14" : "h-11",
        className,
      )}
    >
      <label htmlFor="search-q" className="sr-only">
        Search player bats, spikes, helmets, kitbags
      </label>
      <input
        id="search-q"
        name="q"
        type="search"
        defaultValue={defaultValue}
        placeholder="Search player bats, spikes, kitbags..."
        className="h-full flex-1 bg-transparent text-body-md text-text-primary placeholder:text-text-muted focus:outline-none"
      />
      {submitLabel ? (
        <Button type="submit" variant="primary" size="sm" className="shrink-0 whitespace-nowrap">
          <Search className="size-4" aria-hidden="true" />
          {submitLabel}
        </Button>
      ) : (
        <button
          type="submit"
          aria-label="Search"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary transition-colors duration-200 hover:bg-primary-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Search className="size-4" aria-hidden="true" />
        </button>
      )}
    </form>
  );
}
