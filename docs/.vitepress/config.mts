import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "上海环绕室内设计有限公司",
  description: "上海环绕室内设计有限公司",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/index' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Example 1', link: '/examples/1' },
          { text: 'Example 2', link: '/examples/2' },
          { text: 'Example 3', link: '/examples/3' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
  locales: {
    en: { label: 'English', lang: 'en' },
    root: { label: '中文', lang: 'zh-cn' },
  }
})
