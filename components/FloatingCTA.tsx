"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-leaf-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5 sm:flex"
    >
      Check your eligibility
      <ArrowRight size={16} />
    </Link>
  );
}
