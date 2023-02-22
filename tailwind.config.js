/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#363636',
        'darker-grey': '#202020',
        green: '#aaffdd',
        'darker-green': '#77b39b',
        red: '#FF2121',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '550px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
