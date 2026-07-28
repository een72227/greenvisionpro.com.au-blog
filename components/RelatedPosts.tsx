import type { Article } from "@/types";
import ArticleCard from "./ArticleCard";

export default function RelatedPosts({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="container-page py-16">
      <h2 className="font-display text-2xl font-semibold text-ink-dark">Related articles</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
