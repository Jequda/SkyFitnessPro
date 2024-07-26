/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        lime: "#BCEC30",
        limeHover: "#C6FF00",
        whiteHover: "#F7F7F7",
        whiteActive: "#E9ECED",
        cyanProgress: "#00C1FF"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}