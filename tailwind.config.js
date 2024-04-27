/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./node_modules/tw-elements/js/**/*.js"
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#198ae4",
                },
                secondary: {
                    DEFAULT: "#731DD8",
                },
                tertiary: {
                    DEFAULT: "#A2E8DD"
                }
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
                // 'serf': ['Muli', 'serif'],
            },
            screens: {
                '3xl': '1880px',
            },
        },
    },


    plugins: [require("tw-elements/plugin.cjs")],
    darkMode: "class"
}