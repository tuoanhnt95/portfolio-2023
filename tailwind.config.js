/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,vue}",
    "./src/App.vue",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '414px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
