"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Article, Category } from "@/types";
import { categories } from "@/data/site";
import ArticleCard from "./ArticleCard";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export default function BlogExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory = activeCategory === "All" || article.category === activeCategory;
      const matchesQuery =
        query.trim().length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase()) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [articles, query, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search articles..."
            className="w-full rounded-full border border-black/10 bg-white py-3 pl-11 pr-4 text-sm text-ink-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => {
            setActiveCategory("All");
            setPage(1);
          }}
          className={cn(
            "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
            activeCategory === "All"
              ? "bg-leaf-gradient text-white shadow-soft"
              : "border border-black/10 text-ink-grey hover:border-primary-400",
          )}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => {
              setActiveCategory(cat.name);
              setPage(1);
            }}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-semibold transition-colors",
              activeCategory === cat.name
                ? "bg-leaf-gradient text-white shadow-soft"
                : "border border-black/10 text-ink-grey hover:border-primary-400",
            )}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {pageItems.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((article, i) => (
            <ArticleCard key={article.slug} article={article} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-sm text-ink-soft">
          No articles match your search. Try a different keyword or category.
        </p>
      )}

      {totalPages > 1 && (
        <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium",
                p === page ? "bg-leaf-gradient text-white shadow-soft" : "text-ink-grey hover:bg-primary-50",
              )}
            >
              {p}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
