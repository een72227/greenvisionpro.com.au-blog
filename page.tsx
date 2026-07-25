import type { Metadata } from "next";
import BlogExplorer from "@/components/BlogExplorer";
import Breadcrumb from "@/components/Breadcrumb";
import Newsletter from "@/components/Newsletter";
import { getAllArticles } from "@/lib/articles";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides on Victorian Energy Upgrades, heating and cooling, hot water heat pumps, water saving and weather sealing for Victorian households.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${site.name}`,
    url: `${site.url}/blog`,
  },
};

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ name: "Blog", href: "/blog" }]} />
      <div className="mt-6 max-w-2xl">
        <h1 className="font-display text-3xl font-semibold text-ink-dark sm:text-4xl">
          Energy efficiency guides for Victorian homes
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Practical, plain-English articles on the Victorian Energy Upgrades program, heating and
          cooling, hot water, water saving and weather sealing.
        </p>
      </div>

      <div className="mt-10">
        <BlogExplorer articles={articles} />
      </div>

      <div className="mt-16">
        <Newsletter />
      </div>
    </div>
  );
}
