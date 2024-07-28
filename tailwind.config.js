/** @type {import('tailwindcss').Config} */
// import the daisyUI plugin
const daisyui = require('daisyui')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}

