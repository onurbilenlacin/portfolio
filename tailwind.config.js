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
                grey: {
                    100: "#FAFBFE",
                    200: "#F0F0F0",
                    300: "#ABB6C7",
                    400: "#77829D"
                },
                blue: {
                    100: "rgba(42, 167, 255, 0.08)",
                    400: "#1B3C74",
                    900: "#102851"
                }
            },
            gridTemplateColumns: {
                4: "repeat(4, 270px)"
            },
            maxWidth: {
                570: "35.625rem"
            },
            padding: {
                18: "4.5rem",
                35: "8.4375rem"
            }
        }
    },
    plugins: []
};
