/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Electro_Vehicle: "url('/src/assets/Electro_vehicle.jpg')",
        Groceries: "url('/src/assets/Groceries_perfumes.jpg')",
        Decoration_lighting: "url('/src/assets/Decoration_lighting.jpg')",
      },
      scale: {
        115: "1.15",
      },
    },
  },
  plugins: [],
};
