import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-soft">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link href="/" className="flex items-center gap-1 hover:text-primary-600">
            <Home size={13} />
          </Link>
          <ChevronRight size={12} />
        </li>
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {index === items.length - 1 ? (
              <span className="font-medium text-ink-dark" aria-current="page">
                {item.name}
              </span>
            ) : (
              <>
                <Link href={item.href} className="hover:text-primary-600">
                  {item.name}
                </Link>
                <ChevronRight size={12} />
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
