/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
      },
      keyframes: {
        hueShift: {
          from: { filter: "hue-rotate(0deg)" },
          to: { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        hueShift: "hueShift 3s infinite linear",
      },
    },
    colors: {
      ...colors,
    },
  },
  plugins: [],
};
