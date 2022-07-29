/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "montserrat-italic": ["montserrat-italic"],
      "montserrat-regular": ["montserrat-regular"],
      "montserrat-bold": ["montserrat-bold"],
    },
    extend: {
      colors: {
        //background colors
        "off-white": "#f7f8ff",
        "inactive-white": "#f5f6ff",
        "active-white": "#fafaff",
        "off-dark": "#1c1d22",
        "inactive-dark": "#1e1f25",
        "active-dark": "#25262d",
        //text colors
        "primary-white": "#ffffff",
        "secondary-gray": "#829bb0",
        "primary-gray": "#304455",
        "light-gray": "#b8babf",
        //accent colors
        "accent-red": "#d81f26",
      },
      animation: {
        blurryBg: "blurryBg 10s ease-in-out  infinite",
        firstCard: "firstCard 0.5s ease-in-out",
        secondCard: "secondCard 0.5s ease-in-out",
        thirdCard: "thirdCard 0.5s ease-in-out",
      },
      keyframes: {
        blurryBg: {
          "0%": {
            transform: "scale(1) translate()",
          },
          "30%": {
            transform: "scale(1.3) translate(-5rem,2rem)",
          },
          "60%": {
            transform: "scale(1.5) translate(-15rem,4rem)",
          },
          "90%": {
            transform: "scale(1.3) translate(-5rem,2rem)",
          },
          "100%": {
            transform: "scale(1) translate()",
          },
        },
        firstCard: {
          "0%": {
            transform: "scale(1) translate(0rem,0rem)",
          },
          "50%": {
            transform: "scale(1) translate(100%,0rem)",
          },
          "100%": {
            transform: "scale(1) translate(0rem,0rem)",
          },
        },
        secondCard: {
          "0%": {
            transform: "scale(1.1) ",
          },
          "50%": {
            transform: "scale(1.5)",
          },
          "100%": {
            transform: "scale(1.1) ",
          },
        },
        thirdCard: {
          "0%": {
            transform: "scale(1) translate()",
          },
          "50%": {
            transform: "scale(1) translate(-100%,0rem)",
          },
          "100%": {
            transform: "scale(0) translate()",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
