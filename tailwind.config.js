const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        white: '#fffffe',
        black: '#222',
      },
      container: {
        padding: '1.25rem',
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
    },
  },
  plugins: [],
}
