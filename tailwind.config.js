/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "brand": "#DF0000",
        "brand_yellow": "#FFDD00",
        "brand_gold": "#FF9900",
        "input_bg": "#F1F5F7"
      }
    },
  },
  plugins: [],
}
