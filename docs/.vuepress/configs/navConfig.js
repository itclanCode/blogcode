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
 * @LastEditTime: 2021-03-04 09:24:54
 * @Description: 头部navs导航配置文件,入口文件原本在config.js文件中,但抽离到了themeConfig.js中,该文件通过module.exports导出,在themeConfig.js中通过require方式引入
 * 集中配置管理头部nav导航栏
 * @docs: https://vuepress.docschina.org/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F-navbar
 */

const navs = [
  {
    text: '首页',
    link: '/',
  },

  {
    text: '最新文章',
    link: '/latestarticle/',
  },

  {
    text: '前端',
    items: [
      { text: 'CSS', link: '/fontend/css/' },
      { text: 'JavaScript', link: '/fontend/js/' },
      { text: '前端框架', link: '/fontend/framework/' },
      { text: '前端算法', link: '/fontend/rsa/' },
      { text: '开发工具', link: '/fontend/tools/' },
      { text: '网址收藏', link: '/fontend/websitecol/' },
    ],
  },

  {
    text: '后端',
    items: [
      {
        text: 'Node',
        link: '/backend/node/',
      },
    ],
  },

  {
    text: '小程序',
    items: [
      { text: '微信小程序', link: '/wechat/minprogram/' },
      { text: '云开发', link: '/wechat/cloudev/' },
    ],
  },

  {
    text: '面试题解',
    items: [
      { text: 'CSS', link: '/interview/css/' },
      { text: 'JavaScript', link: '/interview/js/' },
      { text: '微信小程序', link: '/interview/minprogram/' },
      { text: 'React', link: '/interview/react/' },
      { text: 'Vue', link: '/interview/vue/' },
      { text: 'Http', link: '/interview/http/' },
      { text: 'Node', link: '/interview/Node/' },
    ],
  },

  {
    text: '社交',
    items: [
      {
        text: '掘金',
        link: 'https://juejin.im/user/5900e97b1b69e60058b936ed/posts',
      },
      { text: '简书', link: 'https://www.jianshu.com/u/5ee7ee7fd180' },
      {
        text: 'segmentfault',
        link: 'https://segmentfault.com/u/suibichuanji_5900e1f5bcf67',
      },
      {
        text: '知乎',
        link: 'https://www.zhihu.com/people/itclan',
      },
      {
        text: '视频教程',
        link: 'https://space.bilibili.com/267957620',
      },
    ],
  },

  {
    text: '读书',
    items: [
      { text: '财富', link: '/read/wealth/' },
      { text: '文案', link: '/read/copywrite/' },
      { text: '运营', link: '/read/operate/' },
      { text: '领读', link: '/read/lingdu/' },
      { text: '复盘', link: '/read/replay/' },
    ],
  },
  // {
  //   text: '工具',
  //   items: [
  //     {text:'客群基地',link: 'https://kequn.itclan.cn/app/index.php?i=2&c=entry&do=index&m=dc_sqjd&state=index&rand=68drdo&spread=0#/'},
  //     {text:'飞扬的小鸟',link: 'https://flybird.itclan.cn'},
  //     {text: '贪吃蛇',link: 'https://snake.itclan.cn'},
  //     {text: '合成大西瓜',link: 'https://xigua.itclan.cn'},
  //     { text: '图床', link: 'https://img.itclan.cn' },
  //     { text: '站集网', link: 'https://zhanji.itclan.cn' },
  //     { text: 'Vue2.0模板编译', link: 'https://vue2compile.itclan.cn' },
  //     {
  //       text: 'Vue3.0模板编译',
  //       link: 'https://vue-next-template-explorer.netlify.app/#',
  //     },
  //   ],
  // },
  { text: '关于我', link: '/about/' },
  { text: '广告投放', link: '/adverent/' },
  { text: 'IT资源网', link: 'https://itclan.cn' },
  { text: '爱客来', link: 'https://aikelaidev.cn' },
];

module.exports = navs;
