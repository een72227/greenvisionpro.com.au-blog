import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600">
        <Leaf size={28} />
      </span>
      <p className="mt-6 font-display text-6xl font-semibold text-ink-dark">404</p>
      <h1 className="mt-3 font-display text-2xl font-semibold text-ink-dark">
        This page has wandered off
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
        The page you're looking for doesn't exist or may have moved. Try heading back home or
        browsing our latest articles.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to homepage <ArrowRight size={16} />
        </Link>
        <Link href="/blog" className="btn-secondary">
          Browse the blog
        </Link>
      </div>
    </div>
  );
}
