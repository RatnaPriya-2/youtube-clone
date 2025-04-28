/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        xs: "413px", // your custom screen
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
