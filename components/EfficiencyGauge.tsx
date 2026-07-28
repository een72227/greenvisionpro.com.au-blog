"use client";

import { motion } from "framer-motion";

interface EfficiencyGaugeProps {
  percentage?: number;
  label?: string;
  sublabel?: string;
}

export default function EfficiencyGauge({
  percentage = 76,
  label = "Avg. bill reduction*",
  sublabel = "reported by eligible households",
}: EfficiencyGaugeProps) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <svg
        viewBox="0 0 200 200"
        className="h-56 w-56 sm:h-64 sm:w-64"
        style={{ ["--gauge-offset" as string]: offset }}
      >
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="#E9F5EA"
          strokeWidth="14"
        />
        <motion.circle
          cx="100"
          cy="100"
          r={radius}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          transform="rotate(-90 100 100)"
        />
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2E7D32" />
            <stop offset="100%" stopColor="#66BB6A" />
          </linearGradient>
        </defs>
        <text
          x="100"
          y="94"
          textAnchor="middle"
          className="fill-ink-dark font-display"
          style={{ fontSize: "40px", fontWeight: 700 }}
        >
          {percentage}%
        </text>
        <text
          x="100"
          y="118"
          textAnchor="middle"
          className="fill-ink-soft"
          style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.02em" }}
        >
          EFFICIENCY GAIN
        </text>
      </svg>
      <p className="mt-2 text-center text-sm font-semibold text-ink-dark">{label}</p>
      <p className="text-center text-xs text-ink-soft">{sublabel}</p>
    </div>
  );
}
