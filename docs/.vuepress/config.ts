import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '考研小记',
  description: '考研小记',
  base: '/postgraduate-admission-test-log/',
  extendsMarkdown: md => {
    // markdown-it-mathjax3 用于处理 latex 公式
    md.use(require('markdown-it-mathjax3'))
  }
});
