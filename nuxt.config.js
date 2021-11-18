import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#8B5CF6',
  },
  i18n: {
    locales: () => [{
      code: 'pl',
      iso: 'pl-PL',
      file: 'pl-PL.js',
      name: 'Polski'
    }],
    defaultLocale: 'pl',
    parsePages: false,
    lazy: true,
    seo: false,
    langDir: 'i18n/../../../../../locales/',
    vueI18n: {
      fallbackLocale: 'en',
      dateTimeFormats: {
        en: {
          long: {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            weekday: 'short'
          }
        },
        pl: {
          long: {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short'
          }
        }
      }
    }
  },
})
