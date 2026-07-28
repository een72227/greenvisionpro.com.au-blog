import type { Metadata } from "next";
import { ShieldCheck, Leaf, Users, Award } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Green Vision Pro Australia is an accredited Victorian Energy Upgrades provider helping eligible households access more efficient heating, hot water and water fittings.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: ShieldCheck,
    title: "Accredited & compliant",
    description:
      "We operate as an accredited provider under the Victorian Energy Upgrades program, following Essential Services Commission requirements for every eligible installation.",
  },
  {
    icon: Leaf,
    title: "Efficiency first",
    description:
      "We focus on products and installations that genuinely support lower energy use, rather than upselling upgrades that don't suit a household's circumstances.",
  },
  {
    icon: Users,
    title: "Plain-English advice",
    description:
      "Energy programs can be confusing. We aim to explain eligibility, pricing and installation clearly, without overstating what any upgrade can deliver.",
  },
  {
    icon: Award,
    title: "Quality installation partners",
    description:
      "We work with licensed, experienced installers for every product category we offer, and stand behind the quality of our installations.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ name: "About", href: "/about" }]} />

      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">About us</span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-dark sm:text-4xl">
          Helping Victorian households use energy more efficiently
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          {site.name} is an accredited Victorian Energy Upgrades provider based in Melbourne. We
          help eligible households assess and install more efficient heating and cooling, hot
          water and water-saving upgrades — explaining clearly what's involved, what may be
          eligible, and what to expect.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value.title} className="card-surface flex gap-4 p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <value.icon size={20} />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-ink-dark">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl3 bg-surface-light p-8 sm:p-12">
        <h2 className="font-display text-2xl font-semibold text-ink-dark">How we work</h2>
        <ol className="mt-6 space-y-5">
          {[
            {
              title: "Initial conversation",
              body: "We discuss your home, current equipment and what you're hoping to achieve — whether that's lower bills, better comfort, or both.",
            },
            {
              title: "Eligibility check",
              body: "We assess whether your household and property may be eligible for support under the Victorian Energy Upgrades program.",
            },
            {
              title: "Clear quoting",
              body: "You receive an itemised quote showing installation costs and any VEU contribution separately, so pricing is transparent.",
            },
            {
              title: "Professional installation",
              body: "Our licensed installation partners carry out the work to program and manufacturer standards.",
            },
            {
              title: "Ongoing support",
              body: "We remain available for questions about servicing, warranty and future upgrades.",
            },
          ].map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-leaf-gradient text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink-dark">{step.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
