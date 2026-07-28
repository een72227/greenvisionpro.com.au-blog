import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${site.name}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ name: "Terms", href: "/terms" }]} />

      <div className="prose-article mx-auto mt-8 max-w-3xl">
        <h1>Terms of Service</h1>
        <p className="text-sm text-ink-soft">Last updated: 18 June 2026</p>

        <p>
          These Terms of Service govern your use of the {site.name} website located at{" "}
          {site.url}. By accessing or using this website, you agree to be bound by these terms.
        </p>

        <h2>Use of this website</h2>
        <p>
          This website is provided for general informational purposes about energy efficiency,
          the Victorian Energy Upgrades program, and our services. Content is intended to help
          you understand general concepts and is not a substitute for a personalised assessment
          of your property.
        </p>

        <h2>No guarantee of eligibility or savings</h2>
        <p>
          Content on this website, including blog articles, does not guarantee that any specific
          household or property will be eligible for Victorian Energy Upgrades or any other
          program, nor does it guarantee a specific level of energy or cost savings from any
          upgrade. Eligibility and outcomes depend on individual circumstances and are assessed
          on a case-by-case basis.
        </p>

        <h2>Accuracy of information</h2>
        <p>
          While we take reasonable care to keep information on this website accurate and current,
          program rules, eligibility criteria and product availability can change. We recommend
          confirming current details with our team before making decisions.
        </p>

        <h2>Intellectual property</h2>
        <p>
          Content on this website, including text, graphics and logos, is owned by or licensed
          to {site.name} and may not be reproduced without permission, except as permitted by
          law.
        </p>

        <h2>Third-party links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the
          content or privacy practices of external sites.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, {site.name} is not liable for any indirect or
          consequential loss arising from use of this website or reliance on its content.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of Victoria, Australia.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be directed to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </div>
    </div>
  );
}
