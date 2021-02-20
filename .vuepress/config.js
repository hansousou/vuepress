module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base:'/vuepress/',
    head: [
        ['link', { rel: 'icon', href: '/public/favicon.ico' }]
      ],
    themeConfig:{
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
          ],
          displayAllHeaders: true, // 默认值：false
          activeHeaderLinks: false, // 默认值：true
          lastUpdated: 'Last Updated', // string | boolean
          smoothScroll: true,
          repo: 'https://github.com/hansousou/vuepress',
          repoLabel: '查看源码',
          editLinkText: '帮助我们改善此页面！'

    }
  }