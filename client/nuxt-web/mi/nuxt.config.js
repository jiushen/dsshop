require('dotenv').config()
// console.log(process.env.APP_ENV)
export default {
  loading: {
    color: '#fa524c',
    height: '2px'
  },
  server: {
    port: 3002, // default: 3000
    host: '0.0.0.0', // 本地需要测试pwa的话，改成localhost,
    // host: 'localhost',
  },
  env: {
    baseUrl: process.env.BASE_URL,
    APP_ENV: process.env.APP_ENV,
    PROJECT_KEY: 'base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM=',
    IBS_KEY: 'BHBBZ-25TCP-YRODO-VQXIO-RZKP6-AEBEC'
  },
  router: {
    middleware: ['refreshToken', 'terminal']
  },
  pwa: {
    icon: {
      source: "/icon.png",
      fileName: 'icon.png'
    },
    manifest: {
      name: process.env.APP_SHORT_NAME,
      short_name: process.env.APP_SHORT_NAME,
      lang: 'zh-CN',
      theme_color: '#fff',
      description: process.env.APP_DESCRIPTION,
      display: 'standalone',
      scope: '/'
    }
    // workbox: {
    //   dev: process.env.APP_ENV === 'local' || !process.env.APP_ENV
    // }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.APP_NAME,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { hid: 'index', name: process.env.APP_NAME, content: process.env.APP_KEYWORD },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: process.env.APP_DESCRIPTION },
      { hid: 'keywords', name: 'keywords', content: process.env.APP_KEYWORD }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "//at.alicdn.com/t/font_2655595_egx5erq394.css" },
      { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3269515_fy5dzldrd39.css'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.css',
    '@/assets/css/iconfont.css',
    'video.js/dist/video-js.css',
    '@/assets/css/video.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/route',
    '@/plugins/element-ui',
    '@/plugins/ctx-inject.js',
    '@/plugins/filter.js',
    '@/plugins/store',
    '@/plugins/global',
    '@/plugins/vue-moment',
    { src: '@/plugins/videoPlayer.js', ssr: false },
    '@/plugins/lucky-canvas.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/pwa'
  ],
  // router: {
  //   middleware: ['auth']
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // ['@nuxtjs/dotenv', { filename: '.env' }],
    ['@nuxtjs/dotenv', { filename: process.env.APP_ENV === 'local' || !process.env.APP_ENV ? '.env' : '.env.' + process.env.APP_ENV }],
    '@nuxtjs/style-resources'
  ],
  axios: {
    proxy: true, // 表示开启代理
    prefix: '/proxyApi', // 表示给请求url加个前缀 /api
    credentials: true // 表示跨域请求时是否需要使用凭证
   },
   
   proxy: {
    '/proxyApi': { 
    //  target: 'https://dsshop.dswjcms.com', // 目标接口域名
     target: 'http://159.75.211.11:8082/', // 目标接口域名
     pathRewrite: {
      '^/proxyApi': '/', // 把 /api 替换成 /
      changeOrigin: true // 表示是否跨域
     }  
    }
  },
  styleResources: {
    scss: './assets/css/main.scss'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
