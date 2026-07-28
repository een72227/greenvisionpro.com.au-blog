import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name}.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      <div className="prose-article mx-auto mt-8 max-w-3xl">
        <h1>Privacy Policy</h1>
        <p className="text-sm text-ink-soft">Last updated: 18 June 2026</p>

        <p>
          {site.name} ("we", "us", "our") is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, store and disclose personal information in
          connection with our website and services, in accordance with the Australian Privacy
          Principles under the Privacy Act 1988 (Cth).
        </p>

        <h2>Information we collect</h2>
        <p>We may collect personal information including:</p>
        <ul>
          <li>Name, phone number, email address and postal address</li>
          <li>Property details relevant to assessing eligibility for energy upgrades</li>
          <li>Information you provide when contacting us via our website, phone or email</li>
          <li>Technical information such as browser type and pages visited, collected via cookies and analytics tools</li>
        </ul>

        <h2>How we use your information</h2>
        <p>We use personal information to:</p>
        <ul>
          <li>Assess eligibility for Victorian Energy Upgrades and related programs</li>
          <li>Provide quotes and arrange installations</li>
          <li>Respond to enquiries and provide customer support</li>
          <li>Comply with obligations under the Victorian Energy Upgrades program and applicable law</li>
          <li>Send updates or marketing communications, where you have consented to receive them</li>
        </ul>

        <h2>Disclosure of information</h2>
        <p>
          We may disclose personal information to installation partners, program regulators (such
          as the Essential Services Commission) where required, and service providers who assist
          us in operating our business, subject to appropriate confidentiality arrangements. We do
          not sell personal information to third parties.
        </p>

        <h2>Data security</h2>
        <p>
          We take reasonable steps to protect personal information from misuse, loss, and
          unauthorised access, modification or disclosure.
        </p>

        <h2>Access and correction</h2>
        <p>
          You may request access to, or correction of, the personal information we hold about
          you by contacting us using the details below.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website may use cookies to improve functionality and understand how visitors use
          our site. You can manage cookie preferences through your browser settings.
        </p>

        <h2>Contact us</h2>
        <p>
          For questions about this Privacy Policy or to make a privacy-related request, contact
          us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or {site.phone}.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this
          page with an updated revision date.
        </p>
      </div>
    </div>
  );
}
