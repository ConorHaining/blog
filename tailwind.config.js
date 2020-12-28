module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    listStyleType: false,
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
