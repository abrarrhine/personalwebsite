/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage:{
          "banner-bg":"url('./src/img/home_bg.jpg')"
        }
      },
    },
    plugins: [],
  }