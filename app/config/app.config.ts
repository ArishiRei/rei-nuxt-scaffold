export function useConfigx() {
  return {
    siteConfig
  }
}

export const siteConfig = {
  title: "Rei's App",
  description: 'A Nuxt 4 scaffold with split context architecture.',
  version: '0.1.0',
  subtitle: "My Website...", // A short description or tagline for your blog
  lang: "zh_CN", // Language code, e.g. 'en', 'zh-CN', 'ja', etc.
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  features: {
    blog: true,
    demo: true
  },
  router: {
    navbar: [
      {
        path: APP_OPTION.router.index.path,
        title: 'nav.home'
      },
      {
        path: APP_OPTION.router.blog.path,
        title: 'nav.blog'
      },
      {
        path: APP_OPTION.router.demo.path,
        title: 'nav.demo'
      },
      {
        path: APP_OPTION.router.about.path,
        title: 'nav.about'
      }
    ]
  }
}

