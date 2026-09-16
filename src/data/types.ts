export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Sport {
  id: string;
  slug: string;
  title: string;
  image: string;
  /** Optional override used only by the "Browse by Categories" tile; falls back to `image`. */
  categoryImage?: string;
  description: string;
}

export interface Brand {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  /** Real logo mark, used only for our own house brand (never recreated third-party trademarks). */
  logo?: string;
}

export type ProductBadge = "NEW" | "HIT" | "LIMITED";

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  specSummary: string;
  price: number;
  compareAtPrice?: number;
  /** Optional dedicated product photo; falls back to the sport's photo when not set. */
  image?: string;
  sportSlug: string;
  brandSlug: string;
  badge?: ProductBadge;
  inStock: boolean;
  /** 0-5, one decimal. Omit when no reviews exist yet. */
  rating?: number;
  reviewCount?: number;
  /** Short feature callouts shown as small pills on the product card (e.g. "PRO TURF", "SPIKE"). */
  tags?: string[];
  /** UK shoe sizes this product is available in; omit for non-footwear. */
  sizesUk?: number[];
  color?: { name: string; hex: string };
  /** PDP-only detail fields; the PDP falls back to sensible generic copy when omitted. */
  itemCode?: string;
  readyLabel?: string;
  keyFeatures?: { title: string; description: string }[];
  bestSuitedFor?: string[];
  highlights?: string[];
  /** Cricket-catalog facet, e.g. "English Willow Bats", "Batting Gloves". */
  subCategory?: string;
  /** Size/grade facet for cricket gear, e.g. "Men / SH", "Youths". */
  grade?: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}
