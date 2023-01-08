if (process.env.NODE_ENV === 'production') {
  module.exports = {
    content: ["./template/**/*.html"],
    theme: {
      extend: {},
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
} else {
  module.exports = {
    content: ["./template/**/*.html", './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
      extend: {},
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
}
