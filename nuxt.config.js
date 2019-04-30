export default {
  srcDir: 'src',
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-purgecss'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {}
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
  }
}
