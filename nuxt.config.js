export default {
  srcDir: 'src',
  head: {
    title: 'Nuxt Tailwind Purgecss Demo',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'description',
        name: 'description',
        content: 'A Nuxt.js example with Tailwind CSS v1.0 and Purgecss'
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge,chrome=1' }
    ],
    htmlAttrs: {
      lang: 'en'
    }
  },
  modules: ['@nuxtjs/pwa'],
  buildModules: ['@nuxtjs/tailwindcss'],
  purgeCSS: {
    extractors: [
      {
        extractor(content) {
          return content.match(/[\w-/.:]+(?<!:)/g) || []
        }
      }
    ]
  }
}
