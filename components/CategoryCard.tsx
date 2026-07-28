import Link from "next/link";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: string;
  count?: number;
}

export default function CategoryCard({ name, slug, description, icon, count }: CategoryCardProps) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] || Icons.Leaf;

  return (
    <Link
      href={`/blog/category/${slug}`}
      className="card-surface group flex flex-col gap-4 p-6"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-primary-50 text-primary-600 transition-colors group-hover:bg-leaf-gradient group-hover:text-white">
        <Icon size={22} />
      </span>
      <div>
        <h3 className="font-display text-base font-semibold text-ink-dark">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
      {typeof count === "number" && (
        <span className="text-xs font-medium text-primary-600">{count} articles</span>
      )}
    </Link>
  );
}
