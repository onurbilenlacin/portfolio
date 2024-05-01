/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans]
            },
            fontSize: {
                56: "3.5rem"
            },
            colors: {
                primary: "#2AA7FF",
                secondary: "#5C6169",
                blue: {
                    900: "#102851"
                }
            },
            maxWidth: {
                570: "35.625rem"
            },
            margin: {
                35: "8.4375rem"
            }
        }
    },
    plugins: []
};
