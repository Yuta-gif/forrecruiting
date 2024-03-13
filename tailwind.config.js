/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './test/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        custom: ['Roboto', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],

      },
    },
  },
  plugins: [],
}

