import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary",
        className,
      )}
      aria-label="Lions United Sports, go to homepage"
    >
      <Image
        src="/images/brand/lions-logo.webp"
        alt="Lions United Sports"
        width={774}
        height={322}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
