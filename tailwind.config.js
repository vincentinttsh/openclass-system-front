module.exports = {
  content: ["./template/**/*.html", './node_modules/tw-elements/dist/js/index.min.js'],
  theme: {
    screens: {
      lg: '992px',
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
