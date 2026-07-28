"use client";

import { useState, FormEvent } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="container-page py-16">
      <div className="relative overflow-hidden rounded-xl3 bg-leaf-gradient px-6 py-14 text-center sm:px-16">
        <div className="mx-auto max-w-xl">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
            <Mail size={22} />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
            Energy saving tips, straight to your inbox
          </h2>
          <p className="mt-3 text-sm text-white/85">
            One email a month. Practical guidance on Victorian Energy Upgrades, seasonal
            efficiency tips and program updates. No spam.
          </p>

          {submitted ? (
            <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-white/15 px-5 py-3 text-sm font-medium text-white">
              <CheckCircle2 size={18} /> Thanks — please check your inbox to confirm.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="w-full rounded-full border-0 px-5 py-3 text-sm text-ink-dark shadow-soft focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-ink-dark px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
