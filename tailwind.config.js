/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [],

  daisyui: {
    base: false, // applies background color and foreground color for root element by default
    styled: true // include daisyUI colors and design decisions for all components
  }
}
