import { mainNavigation } from "@/data/navigation";
import { NavLink } from "@/components/layout/NavLink";
import { CategoriesDropdown } from "@/components/layout/CategoriesDropdown";

export function DesktopNav() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
      {mainNavigation.map((item) =>
        item.children ? (
          <CategoriesDropdown key={item.href} label={item.label} items={item.children} />
        ) : (
          <NavLink key={item.href} href={item.href} tone={item.label === "Offers" ? "accent" : "default"}>
            {item.label}
          </NavLink>
        ),
      )}
    </nav>
  );
}
