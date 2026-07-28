import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination";
import CTASection from "@/components/CTASection";
import { getArticlesByCategory } from "@/lib/articles";
import { categories, site } from "@/data/site";

const PAGE_SIZE = 6;

export function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};

  return {
    title: cat.name,
    description: cat.description,
    alternates: { canonical: `/blog/category/${cat.slug}` },
    openGraph: {
      title: `${cat.name} | ${site.name}`,
      url: `${site.url}/blog/category/${cat.slug}`,
    },
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;

  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const allArticles = getArticlesByCategory(cat.name);
  const currentPage = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(allArticles.length / PAGE_SIZE));
  const pageItems = allArticles.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="container-page py-12">
      <Breadcrumb
        items={[
          { name: "Blog", href: "/blog" },
          { name: cat.name, href: `/blog/category/${cat.slug}` },
        ]}
      />
      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Category</span>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink-dark sm:text-4xl">
          {cat.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">{cat.description}</p>
      </div>

      {pageItems.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((article, i) => (
            <ArticleCard key={article.slug} article={article} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-sm text-ink-soft">
          We're preparing more articles for this category — check back soon, or browse{" "}
          <a href="/blog" className="font-semibold text-primary-600 hover:underline">
            all articles
          </a>
          .
        </p>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath={`/blog/category/${cat.slug}`}
      />

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
