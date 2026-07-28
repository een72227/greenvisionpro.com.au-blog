import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about the Victorian Energy Upgrades program, eligibility, pricing and installation with Green Vision Pro Australia.",
  alternates: { canonical: "/faq" },
};

const faqGroups = [
  {
    title: "About the VEU program",
    items: [
      {
        question: "What is the Victorian Energy Upgrades program?",
        answer:
          "It's a Victorian Government program that supports the cost of selected energy-efficient upgrades for eligible households, delivered through accredited providers like Green Vision Pro Australia.",
      },
      {
        question: "Is every household eligible?",
        answer:
          "No. Eligibility depends on factors including postcode, property type and current equipment. Eligible Victorian households may qualify for a discount on selected upgrades, but this isn't guaranteed for every property.",
      },
      {
        question: "Does the program cover 100% of the cost?",
        answer:
          "Not always. The VEU certificate value often contributes toward the cost rather than covering it in full. Your quote will show any contribution separately from installation costs.",
      },
    ],
  },
  {
    title: "Products & installation",
    items: [
      {
        question: "What products can be installed under the VEU program?",
        answer:
          "Common categories include reverse cycle heating and cooling, heat pump hot water systems, water-saving showerheads and weather sealing products, subject to current program eligibility rules.",
      },
      {
        question: "Who installs the equipment?",
        answer:
          "We work with licensed, experienced installation partners for every product category we offer.",
      },
      {
        question: "What happens if I'm not eligible for a particular upgrade?",
        answer:
          "We'll let you know honestly if a specific upgrade isn't available to you, and can discuss other options or timing that might make sense for your household.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        question: "How do I get started?",
        answer:
          "Contact our team with some basic details about your home. We'll talk through your current equipment and check what may be available to you.",
      },
      {
        question: "How long does an assessment take?",
        answer:
          "An initial conversation typically takes 10–15 minutes. A more detailed in-home assessment, if required, is scheduled separately.",
      },
      {
        question: "Are you an accredited provider?",
        answer:
          "Yes, we are accredited to participate in the Victorian Energy Upgrades program in line with Essential Services Commission requirements.",
      },
    ],
  },
];

export default function FAQPage() {
  const allFaqs = faqGroups.flatMap((group) => group.items);
  const schema = faqSchema(allFaqs);

  return (
    <div className="container-page py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={[{ name: "FAQ", href: "/faq" }]} />

      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">FAQ</span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-dark sm:text-4xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Straightforward answers about the Victorian Energy Upgrades program and how we work.
        </p>
      </div>

      <div className="mt-12 space-y-12">
        {faqGroups.map((group) => (
          <div key={group.title}>
            <h2 className="font-display text-xl font-semibold text-ink-dark">{group.title}</h2>
            <div className="mt-5">
              <FAQAccordion items={group.items} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <CTASection />
      </div>
    </div>
  );
}
