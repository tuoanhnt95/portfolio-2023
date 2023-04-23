/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,vue}",
    "./src/App.vue",
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

