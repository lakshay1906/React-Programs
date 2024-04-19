/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        115: "1.15",
      },
      boxShadow: {
        normalShadow: "0px 0px 10px #000",
      },
    },
  },
  plugins: [],
};
