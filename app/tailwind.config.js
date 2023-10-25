/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        "Belanosima": ['Belanosima', "sans-serif"],
        "Inter": [ 'Inter', "sans-serif"]
      },
        screens: {
      'sm634': '634px',
      'lg1024': '1024px',
      'lg1200': '1200px'
    },
      boxShadow: {
      'custom': '0px 2px 8px 0px rgba(2, 4, 45, 0.10)',
      'box': '0px 5px 10px 1.25px rgba(215, 215, 215, 0.25)',
      'makeReqModal': '0px 24px 43px 0px rgba(76, 76, 76, 0.07)'
      },
    },
  },
  plugins: [],
}

