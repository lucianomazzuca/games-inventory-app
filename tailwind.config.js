module.exports = {
  purge: [
    './views/**/*.html',
    './public/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-items': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
      height: {
        '18': '4.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
