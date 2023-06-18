/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        rufina: ["Rufina", "serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      colors: {
        primaryColor: "#2dc653",
        secondaryColor: "#29bf12",
        primaryBackground: "#b7efc5",
        secondaryBackground: "#f0fff1",
        tertiaryBackground: "hsl(124, 100%, 99%)",
        darkColor: "#513b56",
        shadeColor: "#60d394",
        greenDarkColor: "#51cf66",
        greenLightColor: "#94d82d",
        colorText: "#333333",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
