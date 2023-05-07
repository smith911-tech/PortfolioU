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
      },
      width:{
        '1/9':'45%',
      },
      screens: {
        'Max-S': {'max': '685px'},
        "sm320": {"min":"320px"},
      }
    },
  },
  plugins: [],
}

