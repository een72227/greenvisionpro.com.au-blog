import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) return null;

  const pageHref = (page: number) => (page === 1 ? basePath : `${basePath}?page=${page}`);

  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
      <Link
        href={pageHref(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-grey hover:border-primary-500 hover:text-primary-600",
          currentPage === 1 && "pointer-events-none opacity-40",
        )}
      >
        <ChevronLeft size={16} />
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={pageHref(page)}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium",
            page === currentPage
              ? "bg-leaf-gradient text-white shadow-soft"
              : "text-ink-grey hover:bg-primary-50",
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={pageHref(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink-grey hover:border-primary-500 hover:text-primary-600",
          currentPage === totalPages && "pointer-events-none opacity-40",
        )}
      >
        <ChevronRight size={16} />
      </Link>
    </nav>
  );
}
