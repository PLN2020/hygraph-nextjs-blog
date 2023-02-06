const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                default: '#5c9199',
                lightest: '#fcfdfd',
                darkest: '#0d1415',
                primary: '#1cb485',
                transparent: '#5c9199',
                positive: '#43d675',
                caution: '#fbd024',
                critical: '#f03e2f',
            },
            fontFamily: {
                sans: ['var(--font-open-sans)', ...defaultTheme.fontFamily.sans],
                serif: ['var(--font-playfair-display)', ...defaultTheme.fontFamily.serif],
                mono: ['var(--font-roboto-mono)', ...defaultTheme.fontFamily.mono]
            }
        },
    },
    plugins: [],
  }