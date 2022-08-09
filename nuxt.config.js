import axios from 'axios'
const global = require('./global');

export default {
  mode: 'universal',

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  generate: {
    fallback: true
  },

  head: {
    title: global.titlePage || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: global.description || ''
      }
    ],
    link: [{
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/x-icon',
        href: '/images/favicons/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/images/favicons/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/images/favicons/favicon-16x16.png'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap"
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap-datepicker.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/vegas.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/animate.min.css"
      },
      {
        rel: "stylesheet",
        href: "/plugins/glightbox/glightbox.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/fontawesome-all.min.css"
      },
      {
        rel: "stylesheet",
        href: "/css/agrikol_iconl.css"
      },
      {
        rel: "stylesheet",
        href: "/css/style.css"
      },
      {
        rel: "stylesheet",
        href: "/css/responsive.css"
      }
    ],

    script: [{
        src: "/plugins/glightbox/glightbox.min.js",
        body: true
      },
      {
        src: "/plugins/accordion/accordion.min.js",
        body: true
      }
    ]
  },

  loading: {
    color: '#C1E976',
    height: '4px'
  },

  css: [
    '@/assets/css/main.css',
  ],

  plugins: [
    '~/plugins/axios',
    '~/plugins/mixins/validation',
    '~/plugins/vuelidate',
    '~/plugins/vuemask',
    { src: '~/node_modules/tw-elements', mode: 'client' },
    {
      src: 'plugins/owl.js',
      ssr: false
    },
    
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    // '@nuxtjs/tailwindcss',
    'nuxt-breakpoints',
    'vue-sweetalert2/nuxt',
  ],

  router: {
    middleware: ['clearValidationErrors','closeDrawer']
  },

  components: true,


  axios: {
    baseURL: `${global.urlApi}`,
    credentials: true,
  },
  auth: {
    strategies: {
      cookie: {
        endpoints: {
          csrf: {
            url: '/sanctum/csrf-cookie',
          },
          login: {
            url: '/auth/login'
          },
          logout: {
            url: '/auth/logout'
          },
          user: {
            url: '/auth/user',
            method: 'get'
          }
        },
        user: {
          property: 'data',
        }
      },
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/admin'
    },
  },

  buildModules: [
    '@nuxt/postcss8',
  ],
  build: {
    extractCSS: true,
    extend(config, ctx) {},

    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  // tailwindcss: {
  //   cssPath: '~/css/tailwind.css',
  //   configPath: 'tailwind.config.js',
  //   exposeConfig: false,
  //   config: {},
  //   injectPosition: 0,
  //   viewer: true,
  // },

  // watchers: {
  //   webpack: {
  //     poll: true
  //   }
  // }
}
