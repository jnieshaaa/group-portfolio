/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#070F2B",
        indigoDeep: "#1B1A55",
        steelBlue: "#535C91",
        lavender: "#9290C3",
      },
      keyframes: {
        scrollX: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scrollX: "scrollX 80s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
