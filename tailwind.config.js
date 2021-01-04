module.exports = {
  purge: [
    './views/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'fit-items': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
