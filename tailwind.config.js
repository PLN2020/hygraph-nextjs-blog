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
            }
        },
    },
    plugins: [],
  }