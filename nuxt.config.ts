// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore'],
  },
  app: {
    rootId: '__lawyers-app',
    head: {
      title: 'Юристы | Платформа по оказанию юридических услуг',
      htmlAttrs: {
        lang: 'en',
        prefix: 'og:http://ogp.me/ns#',
        class: 'ui-scrollbars',
      },

      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
      script: [],
      // @ts-ignore
      pwa: {
        manifest: {
          lang: 'en',
          name: 'Lawyers',
          short_name: 'LA',
          description: '',
        },
      },
      robots: {
        UserAgent: '*',
        Disallow: [],
      },
    }
  },
  imports: {
    dirs: ['composables/**', 'stores/**'],
  },

  css: ['@/assets/css/main.css'],

  routes: {
    '/': {
      prerender: true,
    },
    '/*': {
      cors: true,
    },
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
