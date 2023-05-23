/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                "brand": "rgb(223,0,0)",
                "brand_yellow": "rgb(255,221,0)",
                "brand_gold": "rgb(255,153,0)",
                "input_bg": "rgb(241,245,247)"
            }
        },
    },
    plugins: [],
}
