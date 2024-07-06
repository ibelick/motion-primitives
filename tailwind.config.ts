import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "border-width": "border-width 3s infinite alternate",
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "border-width": {
          from: { width: "40px", opacity: "0.3" },
          to: { width: "100px", opacity: "1" },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
