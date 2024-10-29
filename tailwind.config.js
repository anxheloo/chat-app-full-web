/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#638ad7",
        textPrimary: "#676767",
      },

      backgroundColor: {
        mainBg: "#1f2937",
        bgDark: "#4b5563",
        bgDark2: "#0B192C",
        lightBlue: "#ECF2FF",
      },

      screens: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  },
  plugins: [],
};
