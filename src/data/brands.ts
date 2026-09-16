import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    id: "dsc",
    slug: "dsc",
    name: "DSC Sports",
    tagline: "Premier Edition bats & kit",
  },
  {
    id: "ss-sunridges",
    slug: "ss-sunridges",
    name: "SS Sunridges",
    tagline: "Grain-selected willow craftsmanship",
  },
  {
    id: "new-balance",
    slug: "new-balance",
    name: "New Balance",
    tagline: "DC & Burn Range footwear",
  },
  {
    id: "asics",
    slug: "asics",
    name: "ASICS",
    tagline: "Speed & Turf performance",
  },
  {
    id: "ton",
    slug: "ton",
    name: "TON",
    tagline: "Gold Edition protective armour",
  },
  {
    id: "sg",
    slug: "sg",
    name: "SG",
    tagline: "Hand-crafted Grade 1 English Willow",
  },
  {
    id: "shrey",
    slug: "shrey",
    name: "Shrey",
    tagline: "Titanium-grille protective headgear",
  },
  {
    id: "rns",
    slug: "rns",
    name: "RNS",
    tagline: "Club-grade cricket footwear",
  },
  {
    id: "skechers",
    slug: "skechers",
    name: "SKECHERS",
    tagline: "Comfort-engineered spikes",
  },
  {
    id: "stallions",
    slug: "stallions",
    name: "Stallions",
    tagline: "360-degree batting protection",
  },
  {
    id: "nivia",
    slug: "nivia",
    name: "Nivia",
    tagline: "Turf and court footwear specialists",
  },
  {
    id: "li-ning",
    slug: "li-ning",
    name: "Li-Ning",
    tagline: "Tournament-grade racket engineering",
  },
  {
    id: "yonex",
    slug: "yonex",
    name: "Yonex",
    tagline: "Precision-feather shuttlecocks",
  },
  {
    id: "cosco",
    slug: "cosco",
    name: "Cosco",
    tagline: "Match-certified balls & court gear",
  },
  {
    id: "spalding",
    slug: "spalding",
    name: "Spalding",
    tagline: "Official match basketballs",
  },
  {
    id: "lions-united",
    slug: "lions-united",
    name: "Lions United",
    tagline: "House-forged player essentials",
    logo: "/images/brand/lions-crest.png",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}
