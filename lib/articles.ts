import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Article, ArticleFrontmatter, Category } from "@/types";

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

function readAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    ...(data as ArticleFrontmatter),
    content,
    readingTime: `${Math.max(1, Math.round(stats.minutes))} min read`,
  };
}

export function getAllArticles(): Article[] {
  const slugs = readAllSlugs();
  const articles = slugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  return articles;
}

export function getFeaturedArticles(limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.featured)
    .slice(0, limit);
}

export function getArticlesByCategory(category: Category): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(current: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== current.slug && a.category === current.category)
    .slice(0, limit);
}

export function getAdjacentArticles(slug: string): { prev: Article | null; next: Article | null } {
  const all = getAllArticles();
  const index = all.findIndex((a) => a.slug === slug);
  return {
    prev: index > 0 ? all[index - 1] : null,
    next: index < all.length - 1 && index !== -1 ? all[index + 1] : null,
  };
}

export function getAllCategoryUsage(): Record<string, number> {
  const all = getAllArticles();
  return all.reduce((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
