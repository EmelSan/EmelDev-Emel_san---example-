export default {
  ssr: false,

  head: {
    title: 'Emelsan - digital agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Emelsan- компания, специализирующаяся на разработке масштабируемых программных приложений, программного обеспечения для бизнеса и для автоматизации. В первую очередь мы разрабатываем приложения, которые автоматизируют повседневную работу компании или организации и облегчают жизнь, делая привычное удобным' },
      { name: 'keywords', content: 'Digital agency, IT Компания Ашхабад, Дизайн, Веб Разработка, IT, Разработка приложений' },
      { name: 'copyright', content: 'Emelsan' },
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
    '~/plugins/aos',
    { src: "~/plugins/device", mode: "client", ssr: false }
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
          'second-text-color': '#7a7a7a',
          'button-red-color': '#EC6A5F',
          'button-yellow-color': '#F4BF4E',
          'button-green-color': '#62C554',
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
