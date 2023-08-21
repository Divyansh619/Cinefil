/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",

  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        playfairDisplay: [
          "'Playfair Display'",
          ...defaultTheme.fontFamily.sans,
        ],
        sourceSerif: ["'Source Serif 4'", ...defaultTheme.fontFamily.sans],
      },   
      },

    
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

// "lint": "next lint",
// "dev": "node server.js",
// "build": "next build",
// "start": "NODE_ENV=production node server.js"

// [&>*>img]:transition [&>*>img]:duration-300  [&>*>img]:scale-100 [&>*>img]:hover:scale-105

