import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ReadingProgress from "@/components/ReadingProgress";
import TableOfContents from "@/components/TableOfContents";
import SocialShare from "@/components/SocialShare";
import AuthorCard from "@/components/AuthorCard";
import RelatedPosts from "@/components/RelatedPosts";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import MDXContent from "@/components/MDXContent";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
  getAdjacentArticles,
} from "@/lib/articles";
import { extractHeadings } from "@/lib/toc";
import { formatDate } from "@/lib/utils";
import { site, categories } from "@/data/site";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${site.url}/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      images: [{ url: article.heroImage, width: 1200, height: 750, alt: article.heroImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.heroImage],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const headings = extractHeadings(article.content);
  const related = getRelatedArticles(article);
  const { prev, next } = getAdjacentArticles(article.slug);
  const categorySlug = categories.find((c) => c.name === article.category)?.slug || "";
  const url = `${site.url}/blog/${article.slug}`;

  const schema = [
    articleSchema(article),
    breadcrumbSchema([
      { name: "Blog", url: `${site.url}/blog` },
      { name: article.category, url: `${site.url}/blog/category/${categorySlug}` },
      { name: article.title, url },
    ]),
    ...(article.faqs && article.faqs.length > 0 ? [faqSchema(article.faqs)] : []),
  ];

  return (
    <article>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container-page py-10">
        <Breadcrumb
          items={[
            { name: "Blog", href: "/blog" },
            { name: article.category, href: `/blog/category/${categorySlug}` },
            { name: article.title, href: `/blog/${article.slug}` },
          ]}
        />

        <div className="mt-6 max-w-3xl">
          <span className="eyebrow">{article.category}</span>
          <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-ink-dark sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{article.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {formatDate(article.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readingTime}
            </span>
            <span>By {article.author}</span>
          </div>
        </div>

        <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-xl3 shadow-card">
          <Image
            src={article.heroImage}
            alt={article.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            <MDXContent source={article.content} />

            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-14">
                <h2 className="font-display text-2xl font-semibold text-ink-dark">
                  Frequently asked questions
                </h2>
                <div className="mt-6">
                  <FAQAccordion items={article.faqs} />
                </div>
              </div>
            )}

            <div className="mt-14 flex flex-col gap-4 border-t border-black/5 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <AuthorCard author={article.author} role={article.authorRole} />
              <SocialShare url={url} title={article.title} />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="card-surface group flex items-center gap-3 p-5"
                >
                  <ArrowLeft size={16} className="shrink-0 text-primary-600" />
                  <div>
                    <p className="text-xs text-ink-soft">Previous</p>
                    <p className="text-sm font-semibold text-ink-dark group-hover:text-primary-700">
                      {prev.title}
                    </p>
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="card-surface group flex items-center justify-end gap-3 p-5 text-right sm:col-start-2"
                >
                  <div>
                    <p className="text-xs text-ink-soft">Next</p>
                    <p className="text-sm font-semibold text-ink-dark group-hover:text-primary-700">
                      {next.title}
                    </p>
                  </div>
                  <ArrowRight size={16} className="shrink-0 text-primary-600" />
                </Link>
              )}
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-6">
              <TableOfContents headings={headings} />
              <div className="rounded-xl2 bg-leaf-gradient p-6 text-white shadow-soft">
                <p className="font-display text-base font-semibold">Check your eligibility</p>
                <p className="mt-2 text-sm text-white/85">
                  Find out if your household may qualify for a Victorian Energy Upgrade.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary-700"
                >
                  Get started <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <RelatedPosts articles={related} />
      <CTASection />
    </article>
  );
}
