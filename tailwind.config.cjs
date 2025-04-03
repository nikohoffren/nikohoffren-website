/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      height: {
        100: "100px",
        220: "220px",
      },
      width: {
        700: "700px",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 20s linear infinite",
      },
      colors: {
        "color-light": "#f8fafc",
        "color-dark": "#0f172a",
        "font-color-light": "#0f172a",
        "font-color-dark": "#f8fafc",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters"),
  ],
};
