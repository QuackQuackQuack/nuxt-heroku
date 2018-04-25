const {join} = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' },
    ]
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:1000',
    // credentials: false,
    debug: true,
  },
  plugins: [
    { src: '~/plugins/localStorage.js', ssr: false },
    { src: '~plugins/vuetify.js'},
    { src: '~plugins/mixins.js'},
  ],
  /*
  ** Global CSS
  */
  css: [
    {src: join(__dirname, 'assets/app.styl'), lang: 'styl'},
    {src: join(__dirname, 'assets/customize.css'), lang: 'css'}
  ],
  loading: { color: '#448aff' },
  build: {
    extractCSS: true,
    vendor: [
     'vuetify',
     'lodash',
    ]
  }
  //   ** Run ESLINT on save
  //   */
  //   extend (config, ctx) {
  //     if (ctx.isClient) {
  //       config.module.rules.push({
  //         enforce: 'pre',
  //         test: /\.(js|vue)$/,
  //         loader: 'eslint-loader',
  //         exclude: /(node_modules)/
  //       })
  //     }
  //   }
  // }
}
