/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-daterange/dist/index.esm.js",],
  theme: {
    extend: {
      fontFamily: {
        Open: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
