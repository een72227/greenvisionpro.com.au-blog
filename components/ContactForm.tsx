"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Send } from "lucide-react";
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <CheckCircle2 size={40} className="text-primary-600" />
        <p className="font-display text-lg font-semibold text-ink-dark">Thanks for reaching out</p>
        <p className="max-w-sm text-sm text-ink-soft">
          A member of our team will be in touch within one business day to discuss your
          eligibility.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink-dark">
            Full name
          </label>
          <input
            id="name"
            required
            type="text"
            className="mt-2 w-full rounded-xl2 border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
        <div>
          <label htmlFor="postcode" className="text-sm font-medium text-ink-dark">
            Postcode
          </label>
          <input
            id="postcode"
            required
            type="text"
            inputMode="numeric"
            className="mt-2 w-full rounded-xl2 border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink-dark">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            className="mt-2 w-full rounded-xl2 border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink-dark">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="mt-2 w-full rounded-xl2 border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="text-sm font-medium text-ink-dark">
          What are you interested in?
        </label>
        <select
          id="interest"
          className="mt-2 w-full rounded-xl2 border border-black/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          <option>Heating & cooling</option>
          <option>Hot water heat pumps</option>
          <option>Water-saving showerheads</option>
          <option>Weather sealing</option>
          <option>Not sure — general enquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink-dark">
          Message (optional)
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-2 w-full rounded-xl2 border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send enquiry <Send size={15} />
      </button>
      <p className="text-xs text-ink-soft">
        By submitting, you agree to be contacted about your enquiry. See our{" "}
       <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
