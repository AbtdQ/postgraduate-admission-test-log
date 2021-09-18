module.exports = {
  lang: 'zh-CN',
  title: '考研小记',
  description: '考研小记',
  base: '/postgraduate-admission-test-log/',
  themeConfig: {
    nav: [
      { text: '进度追踪', link: '/考研复习追踪' },
      { text: '笔记', link: '/note/' },
    ],
  },
  extendMarkdown: md => {
    // markdown-it-mathjax3 用于处理 latex 公式
    md.use(require('markdown-it-mathjax3'))
  }
}
