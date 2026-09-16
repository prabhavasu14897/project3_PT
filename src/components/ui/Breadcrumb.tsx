import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Text } from "@/components/ui/Text";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-body-sm text-text-secondary hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <Text
                  as="span"
                  variant="body-sm"
                  color={isLast ? "primary" : "secondary"}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </Text>
              )}
              {!isLast && <ChevronRight className="size-3.5 text-text-muted" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
