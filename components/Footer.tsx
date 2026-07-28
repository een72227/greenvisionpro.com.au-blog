import Link from "next/link";
import { Leaf, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { site, navLinks, footerLinks, categories } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-surface-light">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink-dark">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-gradient text-white">
              <Leaf size={18} strokeWidth={2.5} />
            </span>
            Green Vision Pro
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            Helping eligible Victorian households save energy and lower bills through the
            Victorian Energy Upgrades program.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Green Vision Pro on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink-grey hover:border-primary-500 hover:text-primary-600"
            >
              <Facebook size={16} />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Green Vision Pro on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink-grey hover:border-primary-500 hover:text-primary-600"
            >
              <Instagram size={16} />
            </a>
            <a
              href={site.social.linkedin}
              aria-label="Green Vision Pro on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-ink-grey hover:border-primary-500 hover:text-primary-600"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink-dark">Explore</h3>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink-soft hover:text-primary-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink-dark">Categories</h3>
          <ul className="mt-4 space-y-3">
            {categories.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/blog/category/${cat.slug}`}
                  className="text-sm text-ink-soft hover:text-primary-600"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink-dark">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-primary-600" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-primary-600" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary-600" />
              <span>
                {site.address.street}, {site.address.suburb} {site.address.state}{" "}
                {site.address.postcode}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-soft sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved. ABN 00 000 000 000.
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-primary-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
