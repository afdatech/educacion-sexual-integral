export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "AFDA - Libre de Violencias",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Para tener una sexualidad saludable y placentera podés elegir el método que mejor se adapte a vos."
      },
      {
        property: "og:type",
        content: "article"
      },

      {
        property: "og:url",
        content: "www.afda.org.ar"
      },
      {
        property: "og:image",
        content:
          "https://www.afda.org.ar/libre-de-violencias/libre-de-violencias.png"
      },
      {
        property: "og:site_name",
        content: "Asociación Familias Diversas de Argentina"
      },
      {
        property: "article:author",
        content: "https://www.facebook.com/AfdaFliasDiversas/"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"
      },
      {
        src: "https://unpkg.com/aos@2.3.1/dist/aos.js"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/aos@next/dist/aos.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=PT+Sans"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Bahianita&display=swap"
      }
    ]
  },
  router: {
    base: "/libre-de-violencias/",
    linkActiveClass: "active-link"
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "blue",
    continuous: true,
    height: "5px"
  },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/slide-menu", ssr: false },
    { src: "~plugins/youtube", ssr: false },
    { src: "~plugins/vue2-scrollspy", ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["vue-scrollto/nuxt", { duration: 1300 }]
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
  ],

  /*
   ** Build configuration
   */
  build: {
    publicPath: "/assets/",
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
