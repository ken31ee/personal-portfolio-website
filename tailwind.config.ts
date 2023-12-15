import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        sans: ["var(--font-opensans)"],
        mono: ["var(--font-roboto-mono)"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom,#00000000 80%,black 100%), url(/bg.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(100px)' },
        }
      },
      animation: {
        scroll: 'scroll ease 1.5s infinite',
      }

    },
  },
  plugins: [],
};
export default config;
