/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
        width: "width",
        visibility: "visibility",
      },
      width: {
        p40: "40%",
        p50: "50%",
        p60: "60%",
        p70: "70%",
        p80: "80%",
        p85: "85%",
        p90: "90%",
        p95: "95%",
        p100: "100%",
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
