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
          gold: "#C9A84C",
          "gold-light": "#E2C16F",
          "gold-dark": "#A07830",
          charcoal: "#0D0D0D",
          "charcoal-2": "#1A1A1A",
          "charcoal-3": "#2A2A2A",
          cream: "#F5F0E8",
          "cream-muted": "#B8B0A0",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px)",
      },
    },
  },
  plugins: [],
};
export default config;
