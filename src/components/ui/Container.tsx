import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends Omit<ComponentPropsWithoutRef<"div">, "className"> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export function Container({ children, as: Component = "div", className, ...rest }: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-(--container-page) px-4 sm:px-6 lg:px-8",
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
