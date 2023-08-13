/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'slider1': "url('/src/assets/slider/s1.jpg')",
      }
      
    },
  },
  plugins: [require("daisyui")],
}

