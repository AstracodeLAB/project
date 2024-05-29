/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#ffffff",
        accent: "#99ff00",
      },
    },
  },
  plugins: [],
};
