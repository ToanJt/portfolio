/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      textColor: {
        "dark-gray": "#5e5e5e",
        "light-dark-gray": "#6a6a6a",
      },
      borderWidth: {
        DEFAULT: "1px",
      },
      width: {
        18: "4.5rem",
      },
      height: {
        18: "4.5rem",
      },
      screens: {
        tall: {
          raw: "(min-height: 800px)",
        },
        short: {
          raw: "(max-height: 700px)",
        },
        vshort: {
          raw: "(max-height: 500px)",
        },
      },
    },
  },
  plugins: [],
};
