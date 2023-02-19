/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#363636",
        "darker-grey": "#202020",
        green: "#aaffdd",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "550px",
    },
  },
  plugins: [],
};
