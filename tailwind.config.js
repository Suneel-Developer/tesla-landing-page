/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "xmd": "900px",
        "xsm": "400px",
      }
    },
  },
  plugins: [],
}