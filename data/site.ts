import type { Category, NavLink } from "@/types";

export const site = {
  name: "Green Vision Pro Australia",
  shortName: "Green Vision Pro",
  url: "https://greenvisionpro.com.au",
  description:
    "Victorian Energy Upgrades specialists helping Victorian households reduce energy bills through heating and cooling upgrades, hot water heat pumps, water-saving showerheads and weather sealing.",
  phone: "1300 000 000",
  email: "hello@greenvisionpro.com.au",
  address: {
    street: "Level 2, 123 Collins Street",
    suburb: "Melbourne",
    state: "VIC",
    postcode: "3000",
    country: "AU",
  },
  social: {
    facebook: "https://facebook.com/greenvisionpro",
    instagram: "https://instagram.com/greenvisionpro",
    linkedin: "https://linkedin.com/company/greenvisionpro",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export const categories: { name: Category; slug: string; description: string; icon: string }[] = [
  {
    name: "Victorian Energy Upgrades",
    slug: "victorian-energy-upgrades",
    description: "Understand the VEU program and how eligible upgrades are certified.",
    icon: "BadgeCheck",
  },
  {
    name: "Heating & Cooling",
    slug: "heating-cooling",
    description: "Reverse cycle systems, efficiency ratings and seasonal running costs.",
    icon: "Fan",
  },
  {
    name: "Hot Water Heat Pumps",
    slug: "hot-water-heat-pumps",
    description: "How heat pump hot water systems work and what they can save.",
    icon: "Droplets",
  },
  {
    name: "Water Saving",
    slug: "water-saving",
    description: "Showerheads and fittings that cut water and energy use together.",
    icon: "ShowerHead",
  },
  {
    name: "Weather Sealing",
    slug: "weather-sealing",
    description: "Draught proofing and sealing to keep conditioned air where it belongs.",
    icon: "Wind",
  },
  {
    name: "Energy Saving Tips",
    slug: "energy-saving-tips",
    description: "Practical, low-cost habits and upgrades for lower household bills.",
    icon: "Lightbulb",
  },
  {
    name: "Sustainability",
    slug: "sustainability",
    description: "Household emissions, efficiency and the bigger sustainability picture.",
    icon: "Leaf",
  },
];
