import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' }
    ],
    defaultLocale: 'es',
    langDir: 'locales/',
    strategy: 'no_prefix'
  },
  app: {
    head: {
      title: 'Portal DJ',
      htmlAttrs: {
        lang: 'es',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://portaldj.pro/wp-content/uploads/2023/04/cropped-Icono-1080p-32x32.png' },
      ]
    }
  }
});