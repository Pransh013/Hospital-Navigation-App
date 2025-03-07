/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0F2736", // Primary text color
          primary: "#98D0B6", // Primary background
          secondary: "#F0F2ED", // Primary background
        },
        button: {
          bg: "#3CC19A", // Button background
        },
        card: {
          from: "#3CC19A", // Gradient start
          to: "#05996E", // Gradient end
        },
        green: "#05996E",
        danger: "#CD290F",
        gray: "#5E5D5D",
      },
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      },
      backgroundImage: {
        "card-gradient": "linear-gradient(to bottom, #3CC19A, #05996E)",
      },
    },
  },
  plugins: [],
};