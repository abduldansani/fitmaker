/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D90A14",
        secondary: "#CD4E17",
        primaryVar1: "#C30912", //Button hover
        primaryVar2: "#AE0810", // Button selected
        primaryVar3: "#5B0408",
        primaryVar4: "#77060B",
        primaryVar5: "#D90A14",
        primaryLight: "#FAB5E7",
        secondaryVar1: "#B94615",
        secondaryVar2: "#A43E12",
        secondaryVar3: "#712B0D",
        grey: "#1D1D1D",
        greyLight: "#262626",
        greyText: "#888888",
        greyTextVar1: "#A9A9A9",
      },
      fontFamily: {
        vazirmatn: ["Vazirmatn"],
        gagalin: ["Gagalin"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    },
  ],
};
