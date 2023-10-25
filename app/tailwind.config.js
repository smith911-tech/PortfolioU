/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      },
        screens: {
      'sm634': '634px',
      'lg1024': '1024px',
      'lg1200': '1200px'
    },
    },
  },
  plugins: [],
}

