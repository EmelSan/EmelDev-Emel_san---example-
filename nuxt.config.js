export default {
  ssr: false,

  head: {
    title: 'emel_san',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [{
    src: '~/assets/main.scss',
    lang: 'scss'
  }],
  styleResources: {
    scss: ['~/assets/global.scss',]
  },

  plugins: [
    '~/plugins/aos'
  ],

  components: true,


  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/style-resources',
  ],

  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/i18n",
    '@nuxtjs/pwa',
  ],

  axios: {
    baseURL: '/',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      themes: {
        light: {
          'backgound-color': '#1E1E1E',
          'first-link-color': '#01D306',
          'second-link-color': '#FFD645',
          'first-text-color': '#f0f0f0',
        }
      }
    }
  },

  i18n: {
    locales: [
      {
        name: "English",
        code: "en-EN",
        iso: "en",
        file: "en-EN.js"
      },
      {
        name: "Russian",
        code: "ru-RU",
        iso: "ru",
        file: "ru-RU.js"
      }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale",
      alwaysRedirect: true,
      fallbackLocale: "en-EN",
    },
    strategy: "no_prefix",
    lazy: true,
    langDir: "lang/",
    defaultLocale: "ru-RU",
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {

  }
}
