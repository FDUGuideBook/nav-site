import { defineConfig } from 'vitepress'
import path from 'path'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "FDUGuideBook",
  description: "复旦冒险指南 - 导航网站",
  base: '/',
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'blueberries_color.svg',
    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FDUGuideBook/nav-site' },
      // { icon: 'qq', link: 'https://twitter.com/vuejs' },
    ],

    search: { provider: 'local' },

    externalLinkIcon: true,
    langMenuLabel: '切换语言',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    outline: { level: [2, 3], label: '目录' },
    returnToTopLabel: '返回顶部',
    editLink: {
      pattern: 'https://github.com/ac-wiki/ac-wiki/blame/main/docs/:path',
      text: '在 GitHub 上编辑',
    },
    lastUpdated: {
      text: '更新于',
      formatOptions: { dateStyle: 'short', timeStyle: 'medium' },
    },
    docFooter: { prev: '上一篇', next: '下一篇' },

    footer: {
      message: '努力建设中',
    },
  },

  head: [
    ['link', {
      rel: 'icon',
      href: 'blury_blueberries_icon.svg',
    }]
  ],

  markdown: {
    math: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
  },

  vite: {
    server: {
      allowedHosts: true,
    },
    optimizeDeps: {
      include: ['@iconify/vue']
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'), // 指向 docs/
      }
    }
  },
})

function nav() {
  return [
    { text: '首页', link: '/' },
    { text: '学习', link: '/study/' },
    { text: '工具', link: '/tools/' },
    { text: '社团', link: '/clubs/' },
    { text: '科研', link: '/research/' },
    { text: '关于', link: '/about/' },
  ]
}

function sidebar() {
  return {
    '/': [
      {
        text: '学习',
        items: [
          { text: '学习资料', link: '/study' },
        ]
      },
      {
        text: '工具',
        items: [
          { text: '校内服务', link: '/tools' },
        ]
      },
      {
        text: '社团',
        items: [
          { text: '社团与社区', link: '/clubs' },
        ]
      },
      {
        text: '科研',
        items: [
          { text: '科研资源', link: '/research' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '关于我们', link: '/about' },
        ]
      },
    ],
  }
}