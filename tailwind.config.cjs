/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#737373",
          dark: "#525252",
          light: "#a3a3a3",
        },
        "color-light": "#f5f5f5",
        "color-dark": "#0f0f0f",
        "font-color-light": "#171717",
        "font-color-dark": "#e5e5e5",
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
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters"),
  ],
};
