/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'primary': ['Cormorant SC', 'serif'],
      'secondary': ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
