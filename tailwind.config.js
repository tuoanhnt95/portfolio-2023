/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,vue}",
    "./src/App.vue",
    './src/views/*.{html,js,vue}',
    './src/components/*.{html,js,vue}',
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
