import type { Sport } from "./types";

export const sports: Sport[] = [
  {
    id: "shoes",
    slug: "shoes",
    title: "Shoes",
    image: "/images/sports/shoes.jpg",
    description: "High-traction spike and turf footwear for every discipline.",
  },
  {
    id: "cricket",
    slug: "cricket",
    title: "Cricket",
    image: "/images/sports/cricket.jpg",
    categoryImage: "/images/categories/cricket-batsman.jpg",
    description: "Grade 1 English Willow bats, pads, gloves, and protective kit.",
  },
  {
    id: "football",
    slug: "football",
    title: "Football",
    image: "/images/sports/football.jpg",
    categoryImage: "/images/categories/football.jpg",
    description: "Match balls, boots, and training gear for competitive football.",
  },
  {
    id: "badminton",
    slug: "badminton",
    title: "Badminton",
    image: "/images/sports/badminton.jpg",
    categoryImage: "/images/categories/badminton.jpg",
    description: "Racquets, shuttlecocks, and court footwear built for speed.",
  },
  {
    id: "athletics",
    slug: "athletics",
    title: "Athletics",
    image: "/images/sports/athletics.jpg",
    categoryImage: "/images/categories/athletics.jpg",
    description: "Track spikes, training apparel, and performance accessories.",
  },
  {
    id: "kabaddi",
    slug: "kabaddi",
    title: "Kabaddi",
    image: "/images/sports/kabaddi.jpg",
    categoryImage: "/images/categories/kabaddi.jpg",
    description: "Grip-engineered mat shoes and protective knee and elbow gear.",
  },
  {
    id: "volleyball",
    slug: "volleyball",
    title: "Volleyball",
    image: "/images/sports/volleyball.png",
    categoryImage: "/images/categories/volleyball.jpg",
    description: "Match balls, ankle support, and indoor court footwear.",
  },
  {
    id: "throwball",
    slug: "throwball",
    title: "Throwball",
    image: "/images/sports/throwball-deuce.jpg",
    categoryImage: "/images/categories/throwball.jpg",
    description: "Official-weight balls and lightweight court gear.",
  },
  {
    id: "basketball",
    slug: "basketball",
    title: "Basketball",
    image: "/images/sports/basketball.jpg",
    categoryImage: "/images/categories/basketball.jpg",
    description: "Court-gripped footwear and match-grade basketballs.",
  },
];

export function getSportBySlug(slug: string): Sport | undefined {
  return sports.find((sport) => sport.slug === slug);
}
