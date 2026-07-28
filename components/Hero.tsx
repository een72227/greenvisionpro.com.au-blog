"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import EfficiencyGauge from "./EfficiencyGauge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh-soft">
      <div className="container-page grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">
            <ShieldCheck size={14} /> Victorian Energy Upgrades Accredited Provider
          </span>
          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] text-ink-dark sm:text-5xl lg:text-6xl">
            Smarter energy for your home, backed by the{" "}
            <span className="bg-leaf-gradient bg-clip-text text-transparent">
              Victorian Energy Upgrades
            </span>{" "}
            program.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            We help eligible Victorian households upgrade heating and cooling, hot water and
            water fittings to more efficient systems — reducing energy waste and, for many
            households, lowering ongoing bills.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Check Your Eligibility <ArrowRight size={16} />
            </Link>
            <Link href="/blog" className="btn-secondary">
              <Sparkles size={16} /> Read Energy Saving Tips
            </Link>
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            *Eligible Victorian households may qualify for upgrades under the VEU program.
            Eligibility depends on postcode, property type and current appliances.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative flex h-80 w-80 items-center justify-center rounded-full bg-white shadow-card sm:h-96 sm:w-96">
            <div className="absolute inset-4 rounded-full border border-primary-100" />
            <EfficiencyGauge />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
