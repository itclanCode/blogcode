/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-05-29
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-06-20 22:26:46
 * @Description: 头部navs导航配置文件,入口文件原本在config.js文件中,但抽离到了themeConfig.js中,该文件通过module.exports导出,在themeConfig.js中通过require方式引入
 * 集中配置管理头部nav导航栏
 * @docs: https://vuepress.docschina.org/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F-navbar
 */

const navs = [
  {
    text: '首页',
    link: '/'
  },

  {
    text: '最新文章',
    link: '/latestarticle/'
  },

  {
    text: '前端',
    items: [
      { text: 'CSS', link: '/fontend/css/' },
      { text: 'JavaScript', link: '/fontend/js/' },
      { text: '前端框架', link: '/fontend/framework/' },
      { text: '开发工具', link: '/fontend/tools/' }
    ]
  },

  {
    text: '小程序',
    items: [
      { text: '微信小程序', link: '/wechat/minprogram/' },
      { text: '云开发', link: '/wechat/cloudev/' }
    ]
  },

  {
    text: '面试锦囊',
    items: [
      { text: 'CSS', link: '/interview/css/' },
      { text: 'JavaScript', link: '/interview/js/' },
      { text: '微信小程序', link: '/interview/minprogram/' },
      { text: 'React', link: '/interview/react/' },
      { text: 'Vue', link: '/interview/vue/' },
      { text: 'Http', link: '/interview/http/' },
      { text: 'Node', link: '/interview/Node/' }
    ]
  },

  {
    text: '社交',
    items: [
      {
        text: '掘金',
        link: 'https://juejin.im/user/5900e97b1b69e60058b936ed/posts'
      },
      { text: '简书', link: 'https://www.jianshu.com/u/5ee7ee7fd180' },
      {
        text: 'segmentfault',
        link: 'https://segmentfault.com/u/suibichuanji_5900e1f5bcf67'
      },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/itclan'
      },
      {
        text: '视频教程',
        link: 'https://space.bilibili.com/267957620'
      }
    ]
  },

  {
    text: '工具',
    items: [
      {
        text: '思维导图',
        items: [
          { text: 'zhiMap', link: 'https://zhimap.com/home' },
          { text: 'processOn', link: 'https://www.processon.com/' },
          { text: 'gitmind', link: 'https://gitmind.cn/' }
        ]
      },

      {
        text: '文档管理',
        items: [
          { text: '语雀', link: 'https://www.yuque.com/dashboard' },
          { text: '腾讯文档', link: 'https://docs.qq.com/desktop' }
        ]
      },

      {
        text: '实用工具',
        items: [
          { text: '声享-做ppt', link: 'https://ppt.baomitu.com/' },
          { text: '马克鳗-量标注', link: 'http://www.getmarkman.com/l' }
        ]
      }
    ]
  },
  {
    text: '读书',
    items: [
      { text: '财富', link: '/read/wealth/' },
      { text: '文案', link: '/read/copywrite/' },
      { text: '运营', link: '/read/operate/' },
      { text: '领读', link: '/read/lingdu/' },
      { text: '复盘', link: '/read/replay/' }
    ]
  },
  { text: '关于我', link: '/about/' }
];

module.exports = navs;
