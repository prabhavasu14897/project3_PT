import type { NavigationItem } from "./types";
import { sports } from "./sports";

export const mainNavigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Categories",
    href: "/sports",
    children: sports.map((sport) => ({
      label: sport.title,
      href: `/sports/${sport.slug}`,
    })),
  },
  { label: "Offers", href: "/offers" },
];

export const footerShopDisciplines: NavigationItem[] = [
  { label: "English Willow Bats", href: "/sports/cricket" },
  { label: "Cricket Spikes & Turf", href: "/sports/shoes" },
  { label: "Batting Pads & Gloves", href: "/sports/cricket" },
];

export const footerLionsServices: NavigationItem[] = [
  { label: "Bat Knocking Lab", href: "/services/bat-knocking" },
  { label: "Grain Selection", href: "/services/grain-selection" },
  { label: "Club Teamwear", href: "/services/club-teamwear" },
];

export const footerLegal: NavigationItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export const contactInfo = {
  phoneDisplay: "+91 (800) 555-3535",
  phoneHref: "tel:+918005553535",
  hours: "Everyday, 9:00 AM - 9:00 PM IST",
  whatsappLabel: "WhatsApp Support Active",
  email: "support@lionsunitedsports.example",
  address: "#no 24, Shri Ranganatha Nagar, Agaram Main Road, Selaiyur, Chennai 73",
  instagramHandle: "@lionsunitedsports",
  instagramHref: "https://instagram.com/lionsunitedsports",
};
