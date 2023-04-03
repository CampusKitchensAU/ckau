const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          contrast: "#FFFFFF",
          100: "#C3D3E8",
          200: "#AABCD2",
          300: "#788DA6",
          400: "#425B7A",
          500: "#133259",
          DEFAULT: "#03244D",
          700: "#031B3A",
          800: "#021227",
          900: "#010914",
        },
        secondary: {
          contrast: "#000000",
          50: "#FFEDD5",
          100: "#F7C7A3",
          200: "#EEA171",
          300: "#E67B3F",
          400: "#E26826",
          DEFAULT: "#DD550C",
          600: "#C54B0E",
          700: "#AD410F",
          800: "#953711",
          900: "#7C2D12",
        },
        alt: {
          contrast: "#ffffff",
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BBD1E6",
          300: "#95B0CD",
          400: "#6F8FB5",
          DEFAULT: "#496E9C",
          600: "#3A6591",
          700: "#2B5C85",
          800: "#1C537A",
          900: "#0C4A6E",
        },
      },
      screens: {
        xs: "320px",
        sm1: "375px",
        sm2: "425px",
      },
      backgroundImage: {
        404: "url('/images/Elise-Dinosaur.jpg')",
        hideout: "url('/patterns/hideout.svg')",
      },
    },
  },
  plugins: [],
};

module.exports = config;
