const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    'index.html'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'loremblue': '#64b5f6',
        'september': 'rgb(37, 0, 255)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
