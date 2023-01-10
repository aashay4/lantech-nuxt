
module.exports = {
  mode: 'universal',
  images: {
       domains: ['instagram.fstv8-2.fna.fbcdn.net'],
   },
  /*
  ** Headers of the page
  */
  serverMiddleware: [
  '~/api/index.js'
  ],
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
          { rel: 'stylesheet', href: 'https://www.w3schools.com/w3css/4/w3.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: '~/plugins/vue-google-adsense', ssr: false }
  ],
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-140511151-2'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-adsense',
    '@nuxtjs/sitemap',
    '~/io',
  ],
  io: {
  server: {
    /* CORS options */
    cors: {
      credentials: true,
      origin: [
        // whitelisted origins
        'https://your-socket-io-client.app'
      ]
    }
  }
},
  sitemap: {
    hostname: 'https://lantechinfocom.co.in',
    exclude: [
     '/hexadecimal-to-decimal',
     '/decimal-to-hexadecimal',
     '/binarytotext',
     '/network-checkup'
   ],
},
  'google-adsense': {
    id: 'ca-pub-6829148792481216'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

    axios: {
  proxy: true
},
  /*
  ** Build configuration
  */
  serverMiddleware: [
'~/api/index.js'
],
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
