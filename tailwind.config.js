/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'mmc-green': '#28a745',
        'mmc-gold': '#ffc107',
        'dark-gray': '#343a40',
        'light-gray': '#f8f9fa',
      },
    },
  },
  plugins: [],
}