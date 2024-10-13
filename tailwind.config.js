/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/assets/foodbackground.png')"
      },
      colors: {
        first: "#efefef",
        second: "#005a2f",
        third: "#85af37",
        four: "#e0d6c5",  
      },
      fontFamily: {
        first:["Kanit", 'sans-serif'],
        cursive:["Courgette","cursive"],
      }
    },
  },
  plugins: [],
}