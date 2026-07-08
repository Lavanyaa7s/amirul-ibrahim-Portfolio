import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#00D4FF",
          50: "#E6FAFF",
          100: "#CCFBFF",
          200: "#99F4FF",
          300: "#66EDFF",
          400: "#33E6FF",
          500: "#00D4FF",
          600: "#00AACC",
          700: "#007F99",
          800: "#005566",
          900: "#002A33",
        },
        dark: {
          DEFAULT: "#080B14",
          50: "#1A1F2E",
          100: "#12172A",
          200: "#0E1220",
          300: "#0A0E1A",
          400: "#080B14",
          500: "#060910",
          600: "#04060B",
          700: "#020408",
          800: "#010204",
          900: "#000000",
        },
        surface: {
          DEFAULT: "#0E1420",
          light: "#141B2E",
          border: "#1E2A40",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 0 rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 24px 4px rgba(0, 212, 255, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "brand-sm": "0 0 8px 0 rgba(0, 212, 255, 0.3)",
        "brand-md": "0 0 16px 2px rgba(0, 212, 255, 0.4)",
        "brand-lg": "0 0 32px 4px rgba(0, 212, 255, 0.5)",
        "card": "0 4px 24px 0 rgba(0, 0, 0, 0.4)",
        "card-hover": "0 8px 40px 0 rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
