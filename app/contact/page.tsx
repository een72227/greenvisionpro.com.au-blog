import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Green Vision Pro Australia to check your eligibility for Victorian Energy Upgrades or ask a question about our services.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: Phone, label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: Mail, label: site.email, href: `mailto:${site.email}` },
  {
    icon: MapPin,
    label: `${site.address.street}, ${site.address.suburb} ${site.address.state} ${site.address.postcode}`,
  },
  { icon: Clock, label: "Mon–Fri, 9am–5pm AEST" },
];

export default function ContactPage() {
  return (
    <div className="container-page py-12">
      <Breadcrumb items={[{ name: "Contact", href: "/contact" }]} />

      <div className="mt-6 max-w-2xl">
        <span className="eyebrow">Contact</span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink-dark sm:text-4xl">
          Check your eligibility
        </h1>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Tell us a little about your home and we'll let you know what upgrades may be available
          to you under the Victorian Energy Upgrades program.
        </p>
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {details.map((item) => (
            <div key={item.label} className="card-surface flex items-center gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <item.icon size={18} />
              </span>
              {item.href ? (
                <a href={item.href} className="text-sm font-medium text-ink-dark hover:text-primary-600">
                  {item.label}
                </a>
              ) : (
                <span className="text-sm font-medium text-ink-dark">{item.label}</span>
              )}
            </div>
          ))}
        </div>

        <div className="card-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
