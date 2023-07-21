/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#050816",
        //secondary: "#AAA6C3",
        //tertiary: "#151030",
        //"black-100": "#100D25",
        //"black-200": "#090325",
        //"white-100": "#F3F3F3",
        primary: "#000723",
        secondary: "#A6AEC3",
        tertiary: "#121B35",
        "black-100": "#0E162B",
        "black-200": "#030B25",
        "white-100": "#F3F3F3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        //"hero-pattern": "url('/src/assets/herobg.png')",
        "hero-pattern": "url('/src/assets/herobgblue.png')",
      },
    },
  },
  plugins: [],
};