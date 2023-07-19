/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                100: "100px",
                220: "220px",
            },
            width: {
                700: "700px",
            },
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("tailwindcss-filters"),
    ],
};
