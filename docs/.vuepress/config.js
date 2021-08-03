const path = require('path')

module.exports = {
  title: 'lxhchange的博客',
  lang: 'zh-CN',
  description: '......',
  theme: path.resolve(__dirname, './theme/'),
  base: '/blog/',
  extendMarkdown: md => {
    // use more markdown-it plugins!
    md.use(require('markdown-it-task-lists'))
  }
}