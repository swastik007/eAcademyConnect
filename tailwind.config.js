// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{html,js,ts,jsx,tsx}",
//         "./node_modules/tw-elements/js/**/*.js"
//     ],

//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     DEFAULT: "#198ae4",
//                 },
//                 secondary: {
//                     DEFAULT: "#731DD8",
//                 },
//                 tertiary: {
//                     DEFAULT: "#A2E8DD"
//                 }
//             },
//             fontFamily: {
//                 'inter': ['Inter', 'sans-serif'],
//                 // 'serf': ['Muli', 'serif'],
//             },
//             screens: {
//                 '3xl': '1880px',
//             },
//         },
//     },


//     plugins: [require("tw-elements/plugin.cjs")],
//     darkMode: "class"
// }
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {

    content: ["./src/**/*.{ts,tsx}", "./index.html",
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./node_modules/tw-elements/js/**/*.js"
    ],
    darkMode: "class",
    theme: {
        // rest of the code
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
            animation: {
                scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
            },
            keyframes: {
                scroll: {
                    to: {
                        transform: "translate(calc(-50% - 0.5rem))",
                    },
                },
            },
        },
    },
    plugins: [require("tw-elements/plugin.cjs"), addVariablesForColors],

};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}