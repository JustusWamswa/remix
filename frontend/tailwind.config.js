/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#27374D',
        secondary: '#526D82',
        tertiary: '#9DB2BF',
        light: '#DDE6ED'
      }
    },
  },
  plugins: [],
}

