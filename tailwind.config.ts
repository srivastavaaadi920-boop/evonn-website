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
        primary: {
          DEFAULT: "#3D5438", // Forest Green from Logo
          light: "#526D4A",
          dark: "#2A3B26",
        },
        secondary: {
          DEFAULT: "#111827", // Dark Charcoal
          light: "#374151",
        },
        accent: {
          DEFAULT: "#22C55E", // Energy Green
          light: "#4ade80",
        },
        background: "#F9FAFB", // Off-white
        surface: "#FFFFFF",
      },
      fontFamily: {
        stencil: ["var(--font-stencil)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        wave: "wave 3s infinite linear",
      },
    },
  },
  plugins: [],
};
export default config;
