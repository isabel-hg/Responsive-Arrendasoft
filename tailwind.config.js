/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
  ],
  theme: {
    extend: {
      colors: {
        arrBlue: '#0074A9',
        arrWhite: '#EEEEEE',
        arrBlack: '#444444',
      },
      screens: {
        lg2: '1150px',
        lg3: '1300px',
        md2: '900px',
      },
      fontSize: {
        xxs: '10px',
      },
    },
  },
  plugins: [],
}
