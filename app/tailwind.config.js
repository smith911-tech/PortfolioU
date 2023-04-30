/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'FirstSL1': '#1d2925',
        'FirstSL2': '#0d3018',
        'FirstSHeader': '#d9fe54',
        "SeceondSL1": '#0c0d18',
      }
    },
  },
  plugins: [],
}

