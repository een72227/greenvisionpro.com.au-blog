"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="rounded-xl2 border border-black/5 bg-white p-5 shadow-soft">
      <p className="flex items-center gap-2 font-display text-sm font-semibold text-ink-dark">
        <List size={16} className="text-primary-600" /> On this page
      </p>
      <ul className="mt-4 space-y-2.5 border-l border-black/5 pl-4">
        {headings.map((heading) => (
          <li key={heading.id} style={{ marginLeft: (heading.level - 2) * 12 }}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "block text-sm leading-snug text-ink-soft transition-colors hover:text-primary-600",
                activeId === heading.id && "font-semibold text-primary-700",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
