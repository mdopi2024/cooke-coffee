import Banner from './src/conponents/Banner';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        Banner:"url('./assets/banner.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
}