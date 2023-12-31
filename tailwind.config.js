/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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
  
  ],
};

// "lint": "next lint",
// "dev": "node server.js",
// "build": "next build",
// "start": "NODE_ENV=production node server.js"

// [&>*>img]:transition [&>*>img]:duration-300  [&>*>img]:scale-100 [&>*>img]:hover:scale-105

