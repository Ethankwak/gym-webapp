/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      fontFamily: {
        'merriweater': ['merriweater', 'sans-serif'], 
        'dm-sans': ['dm-sans', 'sans-serif'],
        'blond': ['blond', 'sans-serif']
      },
      screens: {
        'xs': '300px',
        'sm-md': '900px'
      },
      width: {
        '350': '350px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '800': '800px',
        '216': '216px'
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
      height: {
        'screen-minus-80': 'calc(100vh - 80px)',
        '56': '56px',
        '58': '58px',
        '400': '400px',
        '550': '550px',
        '600': '600px',
        '800': '800px'
      },
      
      fontSize: {
        '300': '300px',
      },
    },
  },
  plugins: [],
}

