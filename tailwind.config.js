module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
     // colors: {
    //   'evoterra': {
    //     900: '#303f06',
    //     500: '#547606',
    //     100: '#c1e976',
    //   }
    // },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}