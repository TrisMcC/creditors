/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        blueGray: colors.blueGray,
      },
      spacing: {
        164: '41rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
