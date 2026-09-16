import Link from "next/link";
import type { NavigationItem } from "@/data/types";
import { Text } from "@/components/ui/Text";

interface FooterColumnProps {
  title: string;
  items: NavigationItem[];
}

export function FooterColumn({ title, items }: FooterColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <Text as="h3" variant="label-caps" color="muted">
        {title}
      </Text>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-body-md text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
