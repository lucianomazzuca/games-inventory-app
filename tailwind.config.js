module.exports = {
  purge: [
    './views/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-items': 'repeat(auto-fill, minmax(180px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
