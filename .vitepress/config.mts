import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vitra",
  description: "A vitepress starter",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/axuata/vitra' }
    ]
  },

  locales: {
    root: {
      label: '日本語',
      lang: 'ja',

      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/' },
          { text: 'ドキュメント', link: '/docs/getting-started' }
        ],

        sidebar: {
          '/docs/': [
            {
              text: 'ドキュメント',
              items: [
                { text: '始める', link: '/docs/getting-started' },
              ]
            }
          ]
        },
      }
    },
    en: {
      label: 'English',
      lang: 'en',

      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/docs/getting-started' }
        ],

        sidebar: {
          '/en/docs/': [
            {
              text: 'Docs',
              items: [
                { text: 'Getting Started', link: '/en/docs/getting-started' },
              ]
            }
          ]
        },
      }
    }
  }
})
