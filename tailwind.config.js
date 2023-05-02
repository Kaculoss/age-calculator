/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "keezy-bold": ["var(--pB)"],
        "keezy-bolditalic": ["var(--pBI)"],
        "keezy-extrabold": ["var(--pEB)"],
        "keezy-extrabolditalic": ["var(--pEBI)"],
        "keezy-italic": ["var(--pI)"],
        "keezy-regular": ["var(--pR)"],
      },
      keyframes: {
        count: {
          "0%": {
            transform: "scaleX(0)",
          },
          "100%": {
            transform: "scaleX(1)",
          },
        },
      },
      animation: {
        count: "count 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
