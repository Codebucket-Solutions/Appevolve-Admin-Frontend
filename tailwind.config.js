/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                figtree: ["Figtree", "sans-serif"],
            },
            colors: {
                primary: "#151515",
                secondary: "#0D1117",
                background: "#323338",
                border: "#323338",

                "blue-accent": "#0060B9",
                "green-accent": "#6FC303",
                "purple-accent": "#6543FF",
                "orange-accent": "#FF583A",
                "lightblue-accent": "#3768F9",
            }
        },
    },
    plugins: [],
};