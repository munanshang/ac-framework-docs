import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: '/ac-framework-docs',
  title: "AC Framework",
  description: "支持多账号、多平台高效、稳定、免费的机器人框架",
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.webp', type: 'image/webp' }]
  ],
  themeConfig: {
    logo: '/logo.webp',
    siteTitle: '翱创框架',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '官网', link: '/' },
      { text: '文档', link: '/framework' },
      { text: '团队', link: '/team' },
      {
        text: '加入我们',
        items: [
          { text: 'QQ群', link: 'https://jq.qq.com/?_wv=1027&k=6yh4O3h' },
          { text: 'QQ频道', link: '/123' },
          { text: '微信公众号', link: 'https://github.com/AerialLab/aerial' }
        ]
      }
    ],

    sidebar: [
      {
        text: '框架',
        collapsed: false,
        items: [
          { text: '概览', link: '/framework' },
          { text: '快速开始', link: '/framework/quick-start' }
        ]
      },
      {
        text: '开发者',
        collapsed: false,
        items: [
          { text: '开始', link: '/dev' },
          { 
            text: '开发文档',
            collapsed: true,
            items: [
              { text: '基础', link: '/dev/basic' },
              { text: '事件', link: '/dev/event' },
              { text: '消息', link: '/dev/message' },
              { text: '群组', link: '/dev/group' },
              { text: '好友', link: '/dev/friend' },
              { text: '群成员', link: '/dev/member' },
            ]
          }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-2024 翱创框架'
    }
  }
})
