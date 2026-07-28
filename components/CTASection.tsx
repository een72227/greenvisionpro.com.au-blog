import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { site } from "@/data/site";

export default function CTASection() {
  return (
    <section className="container-page py-16">
      <div className="grid gap-8 rounded-xl3 border border-black/5 bg-surface-light p-8 shadow-soft sm:p-12 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold text-ink-dark sm:text-3xl">
            Find out if your home qualifies for a Victorian Energy Upgrade
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
            A short conversation with our team is all it takes to understand which upgrades your
            household may be eligible for under the VEU program.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Link href="/contact" className="btn-primary">
            Check Eligibility <ArrowRight size={16} />
          </Link>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-secondary">
            <PhoneCall size={16} /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
