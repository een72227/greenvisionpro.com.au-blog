import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { Article } from "@/types";
import { formatDate } from "@/lib/utils";

export default function ArticleCard({ article, priority = false }: { article: Article; priority?: boolean }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="card-surface group flex flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.heroImageAlt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 backdrop-blur">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold leading-snug text-ink-dark transition-colors group-hover:text-primary-700">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {article.description}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-ink-soft">
          <span>{formatDate(article.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {article.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
