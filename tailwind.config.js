/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#569DD7", 
        secondary: "#4354C6", 
        accent: "#e3342f", // Merah custom
      },
    },
  },
  plugins: [],
};
