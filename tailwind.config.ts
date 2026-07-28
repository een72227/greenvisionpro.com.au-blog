import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E7D32",
          50: "#E9F5EA",
          100: "#CBE8CD",
          200: "#A3D6A7",
          300: "#7BC47F",
          400: "#4FA754",
          500: "#2E7D32",
          600: "#276B2A",
          700: "#1F5722",
          800: "#17431A",
          900: "#0F2F11",
        },
        secondary: {
          DEFAULT: "#66BB6A",
          light: "#98D89B",
          dark: "#4C9950",
        },
        surface: {
          white: "#FFFFFF",
          light: "#F5F7F5",
          mist: "#EEF3EE",
        },
        ink: {
          DEFAULT: "#1B2420",
          dark: "#101512",
          grey: "#263238",
          soft: "#5B6B63",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      boxShadow: {
        soft: "0 4px 24px -6px rgba(20, 40, 25, 0.10)",
        card: "0 8px 30px -8px rgba(20, 40, 25, 0.16)",
        glow: "0 0 0 1px rgba(102,187,106,0.25), 0 12px 40px -10px rgba(46,125,50,0.35)",
      },
      backgroundImage: {
        "leaf-gradient": "linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)",
        "mesh-soft":
          "radial-gradient(60% 60% at 20% 10%, rgba(102,187,106,0.18) 0%, rgba(102,187,106,0) 60%), radial-gradient(50% 50% at 90% 30%, rgba(46,125,50,0.14) 0%, rgba(46,125,50,0) 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "gauge-fill": {
          "0%": { strokeDashoffset: "251" },
          "100%": { strokeDashoffset: "var(--gauge-offset, 60)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "gauge-fill": "gauge-fill 1.6s cubic-bezier(.22,1,.36,1) forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
