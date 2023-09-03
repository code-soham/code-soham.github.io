/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "garden",
      "synthwave",
      {
        darko: {
          primary: "#7376dd",
          secondary: "#48cea4",
          accent: "#ecb9f7",
          neutral: "#23222b",
          "base-100": "#22354e",
          info: "#539ad0",
          success: "#67e0c6",
          warning: "#fbb85b",
          error: "#ef6780",
        },
      },
    ],
  },
};
