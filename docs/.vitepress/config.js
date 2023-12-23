// docs/.vitepress/config.js
const sidebar = require("./sidebar.json")
module.exports = {
  title: 'HHKB Dual Mode Controller Introduction',
  description: 'HHKB Dual Mode Controller Introduction',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'HHKB Dual Mode Controller Introduction' }],
    ['meta', { property: 'og:description', content: 'Your Page Description' }],
    ['meta', { property: 'og:url', content: 'Your Page URL' }],
    ['meta', { property: 'og:image', content: 'Your Image URL' }],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
  base: '/hhkb/',
  themeConfig: {
    sidebar: sidebar,
    logo: '/logo.png',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023'
    }
  },
  lastUpdated: true
};
