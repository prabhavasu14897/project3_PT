import type { JSX, SVGProps } from "react";
import { Footprints, Timer, Swords, Volleyball, CircleDot, type LucideIcon } from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

function CricketIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 5 9.5 14.5" />
      <path d="M17.5 3.5a2.1 2.1 0 0 1 3 3L19 8l-3-3z" />
      <path d="M9.5 14.5a2 2 0 1 1-4.24 1.34L4 21l5.16-1.26A2 2 0 0 1 9.5 14.5Z" />
    </svg>
  );
}

function FootballIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m12 7 3.5 2.55-1.34 4.1H9.84L8.5 9.55 12 7Z" />
      <path d="M12 3v4M12 17v4M4.5 8.5l3 1M16.5 8.5l3 1M4.5 15.5l3-1M16.5 15.5l3-1" />
    </svg>
  );
}

function BadmintonIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="9" cy="9" r="5.5" />
      <path d="M4.8 5.2 2 2M13 13l7 7M17.5 17.5 22 22" />
      <path d="M6.2 6.2h5.6v5.6H6.2z" opacity="0.4" />
    </svg>
  );
}

function BasketballIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
      <path d="M4.5 6.5a9 9 0 0 0 15 0M4.5 17.5a9 9 0 0 1 15 0" />
    </svg>
  );
}

const disciplineIconMap: Record<string, LucideIcon | ((props: IconProps) => JSX.Element)> = {
  shoes: Footprints,
  cricket: CricketIcon,
  football: FootballIcon,
  badminton: BadmintonIcon,
  athletics: Timer,
  kabaddi: Swords,
  volleyball: Volleyball,
  throwball: CircleDot,
  basketball: BasketballIcon,
};

interface DisciplineIconProps extends IconProps {
  sportSlug: string;
}

export function DisciplineIcon({ sportSlug, ...rest }: DisciplineIconProps) {
  const Icon = disciplineIconMap[sportSlug] ?? CircleDot;
  return <Icon {...rest} />;
}
