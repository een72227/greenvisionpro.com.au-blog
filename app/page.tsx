import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { getAllArticles, getFeaturedArticles } from "@/lib/articles";
import { categories, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Victorian Energy Upgrades & Home Efficiency Blog",
  description: site.description,
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "What does Green Vision Pro Australia do?",
    answer:
      "We're an accredited Victorian Energy Upgrades provider helping eligible households upgrade heating and cooling, hot water and water fittings to more efficient options.",
  },
  {
    question: "How do I know if my home is eligible for an upgrade?",
    answer:
      "Eligibility depends on postcode, property type and current equipment. The most reliable way to find out is to speak with our team about your specific circumstances.",
  },
  {
    question: "Is every household guaranteed a free upgrade?",
    answer:
      "No. Eligible Victorian households may qualify for a discount on selected upgrades, but outcomes vary and no upgrade is guaranteed to be free or automatically approved.",
  },
];

export default function HomePage() {
  const featured = getFeaturedArticles(3);
  const latest = getAllArticles().slice(0, 6);

  return (
    <>
      <Hero />

      <section className="container-page py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: "ESC Accredited Provider" },
            { icon: Users, label: "Victorian households assisted" },
            { icon: Sparkles, label: "Certified installation partners" },
          ].map((item) => (
            <div key={item.label} className="card-surface flex items-center gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <item.icon size={20} />
              </span>
              <p className="text-sm font-semibold text-ink-dark">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {featured.length > 0 && (
        <section className="container-page py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="eyebrow">Featured</span>
              <h2 className="mt-3 font-display text-2xl font-semibold text-ink-dark sm:text-3xl">
                Start here
              </h2>
            </div>
            <Link
              href="/blog"
              className="hidden items-center gap-1 text-sm font-semibold text-primary-600 hover:underline sm:flex"
            >
              View all articles <ArrowRight size={14} />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((article, i) => (
              <ArticleCard key={article.slug} article={article} priority={i === 0} />
            ))}
          </div>
        </section>
      )}

      <section className="bg-surface-light py-16">
        <div className="container-page">
          <span className="eyebrow">Explore by topic</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink-dark sm:text-3xl">
            Categories
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Latest</span>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink-dark sm:text-3xl">
              Recent articles
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <CTASection />

      <section className="container-page py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink-dark sm:text-3xl">
            Common questions
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-2xl">
          <FAQAccordion items={homeFaqs} />
        </div>
        <div className="mt-6 text-center">
          <Link href="/faq" className="text-sm font-semibold text-primary-600 hover:underline">
            View the full FAQ →
          </Link>
        </div>
      </section>
      <Newsletter />
    </>
  );
}
