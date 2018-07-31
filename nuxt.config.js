module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'phrase-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Demo Application for PhraseApp' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,900' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'orangered',
    height: '3px'
  },
  /*
  ** Customize router
  */
  router: {
    linkActiveClass: 'is-active'
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/main.scss', lang: 'scss' }
  ],
  /*
  ** Load Modules
  */
  modules: [
    [
      'nuxt-sass-resources-loader',
      [
        '~/assets/_variables.scss',
        '~/assets/mixins/*'
      ]
    ],
    ['nuxt-buefy', { css: false, materialDesignIcons: true }]
  ],
  /*
  * Load Plugins and Components
  */
  plugins: [
    '~/plugins/global.js'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /*
    *  Fix PostCss Warning caused by css variables used by Bulma
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  }
}

