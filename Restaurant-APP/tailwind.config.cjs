/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/layout/navbar.jsx"
  ],
  theme: {
    extend: {
      screens:{
        'xs': '360'
      },
    },
  },
  plugins: [],
}
