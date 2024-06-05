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
        accent: "#BFFF00",
        bgBlueDark: "#1B1D34",
      },
      margin: {
        30: "30px",
        15: "15px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "custom-colored":
          "0 4px 6px rgba(255, 0, 0, 0.4), 0 1px 3px rgba(255, 0, 0, 0.2)", // Ejemplo con sombra roja
      },
    },
  },
  plugins: [],
};
