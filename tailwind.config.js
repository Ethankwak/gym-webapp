/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      screens: {
        'xs': '300px',
      },
      width: {
        '100': '400px'
      },
      borderRadius: {
        '10%': '10%',
        '20%': '20%',
        '30%': '30%',
        '100px': '100px'
      },
      wordSpacing: {
        wide: '0.2rem', 
      },
      lineHeight: {
        '11': '3rem', 
        '12': '3.5rem', 
      },
      colors: {
      'link': '#3A1212',
      },
    },
  },
  plugins: [],
}

