import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        displayMobile: "2rem",
        displaydesktop: "3rem",
        xtraHeight: "3.4rem",
        maxHeight: "4.5rem",
        titleMobile: "1.6rem",
        titledesktop: "2.4rem",
        xtratitle: "2.7rem",
        maxtitle: "3.3rem",
      },
      screens: {},
      lineHeight: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
