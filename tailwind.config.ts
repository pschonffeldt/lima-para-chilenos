import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // light-only since we never add .dark
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx,html}"],
} satisfies Config;
