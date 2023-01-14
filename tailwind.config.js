if (process.env.NODE_ENV === 'production') {
  module.exports = {
    content: ["./template/**/*.html"],
    theme: {
      screens: {
        lg: '992px',
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
} else {
  module.exports = {
    content: ["./template/**/*.html", './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
      screens: {
        lg: '992px',
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
  }
}
