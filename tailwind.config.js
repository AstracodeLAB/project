/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BFFF00',
        secondary: '#ffffff',
        accent: '#99ff00',
      },
    },
  },
  plugins: [],
};
