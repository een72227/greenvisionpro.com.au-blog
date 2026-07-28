export interface ArticleFrontmatter {
  title: string;
  slug: string;
  description: string;
  category: Category;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorRole: string;
  heroImage: string;
  heroImageAlt: string;
  tags: string[];
  faqs?: { question: string; answer: string }[];
  featured?: boolean;
}

export interface Article extends ArticleFrontmatter {
  content: string;
  readingTime: string;
}

export type Category =
  | "Victorian Energy Upgrades"
  | "Heating & Cooling"
  | "Hot Water Heat Pumps"
  | "Water Saving"
  | "Weather Sealing"
  | "Energy Saving Tips"
  | "Sustainability";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
