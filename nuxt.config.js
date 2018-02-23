module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'DevParaná Conference 2018',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Dev Paraná Conference 2018' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' }
    ]
  },
  css: [
    { src: '@/assets/sass/main.scss', lang: 'scss' },
    { src: 'node_modules/@gustavoquinalha/buttons-css/assets/css/buttons-no-icons.min.css', lang: 'css' },
    { src: 'node_modules/the-grid-flexbox/css/the-grid.min.css', lang: 'css' }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#15a04b' },
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
      };
      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === '/\\.vue$/') {
          rule.options.loaders.scss[2].options.data = '@import "./assets/sass/main.scss";'
        }
      })
    }
  }
}
