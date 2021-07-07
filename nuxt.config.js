require('dotenv').config();
module.exports = {
  ssr: false,
  generate: {
    fallback: false,
    minify: false,
  },
  router: {
    prefetchLinks: process.env.NUXT_APP_MODE === 'production',
    middleware: 'router-auth'
  },
  buildModules: [
    '@nuxtjs/moment'
  ],
  moment: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  plugins: [
    '~/components',
    { src: '~plugins/nuxt-api', ssr: false },
    { src: '~plugins/vue-custom-scrollbar', ssr: false },
    { src: '~plugins/vue-functional-calendar', ssr: false },
    { src: '~plugins/vue-js-modal', ssr: false },
    { src: "~plugins/mixins", ssr: false },
  ],
  modules: [
    ['@nuxtjs/dotenv', { path: '', systemvars: true }],
    ['cookie-universal-nuxt', { alias: 'cookies' }],
  ],
  css: ['~/assets/scss/common.scss'],
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'bein',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/images/favicon/site.webmanifest' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#2864FF' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
    vendor: [
      "lodash",
      "vue-custom-scrollbar",
      "vue-functional-calendar",
      "vue-js-modal"
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

