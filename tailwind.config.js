/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: "#2AA7FF"
            }
        }
    },
    plugins: []
};
