/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
        screens: {
      'sm634': '634px',
      // => @media (min-width: 634px) { ... }
      
    },
    },
  },
  plugins: [],
}

