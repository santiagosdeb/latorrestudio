/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-white": "rgba(255,255,255,0.17)",
        "lato-red": "#c73632"
      },
    },
  },
  plugins: [],
}
