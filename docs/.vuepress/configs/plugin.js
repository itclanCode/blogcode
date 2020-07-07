/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-06-01 20:49:41
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-07-06 23:10:12
 * @Description: 所有外部插件配置,入口在当前目录下config.js,本文件通过module.exports暴露,而在config.js中通过require方式引入
 * 集中管理外部插件配置
 *
 * 插件配置链接：
 * 1. 返回顶部插件:https://www.vuepress.cn/plugin/official/plugin-active-header-links.html#%E5%AE%89%E8%A3%85
 *
 */
// const emojiMaps = require("./emojiMaps"); // 引入表情包
const moment = require('moment'); // 引入moment.js  // 不要忘了安装 moment
const secret = require('./secretKey'); // 引入密钥信息

const plugins = [
  '@vuepress/back-to-top', // 返回到到顶部插件
  '@vuepress/nprogress', // 进度条插件
  'reading-progress', // 阅读进度插件
  'img-lazy', // 图片的懒加载
  'vuepress-plugin-baidu-autopush', // 注入百度url-auto-push脚本，以优化您的百度SEO网站
  'vuepress-plugin-reading-time', // 阅读时间
  'vuepress-plugin-smooth-scroll', // 你的 VuePress 站点中使用平滑滚动
  'vuepress-plugin-table-of-contents', // 为你的 VuePress 站点增加目录组件,支持在md和vue中写<TOC />,生成目录树
  // 'vuepress-plugin-cat', // 编程猫
  [
    '@vuepress/active-header-links',
    {
      // 页面滚动时自动激活侧边栏链接的插件配置
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
  ],

  [
    {
      transformer: (timestamp) => {
        moment.locale('zh-cn');
        return moment(timestamp).fromat('LLLL');
      },
    },
  ],

  [
    '@vuepress/medium-zoom',
    {
      selector: '.medium-zoom', // 指定含有medium-zoom的类缩放,后面这个类名可自定义,markdown中的img的class类保持一致就可以了的,没有指明的图片类将不支持缩放
      delay: 1000, // 延迟1秒
      options: {
        margin: 24,
        scrollOffset: 0,
      },
    },
  ],

  [
    '@vuepress/pwa', // 以@开头的都是官方维护的插件, pwa配置
    {
      serviceWorker: true, // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
      updatePopup: {
        '/zh/': {
          message: '发现有新的内容更新,马上更新',
          buttonText: '刷新',
        },
      },
    },
  ],

  [
    'vuepress-plugin-comment', // valine留言插件
    {
      choosen: 'valine',
      // options选项中的所有参数，会传给Valine的配置,配置选项见文档:https://valine.js.org/configuration.html#appId
      options: {
        el: '#valine-vuepress-comment',
        appId: secret.appId, // 引入密钥appId
        appKey: secret.appKey, // 引入密钥appKey
        placeholder: '据说评论几句,结果会一鸣惊人~互相学习哈',
        path: 'window.location.pathname',
        avatar: 'robohash', // 非自定义头像
        meta: ['nick', 'mail'],
        requiredFields: ['nick', 'email'],
        pageSize: 10,
        visitor: true, // 对访问量进行统计
        // emojiCDN:
        //   "https://www.jsdelivr.com/package/gh/GamerNoTitle/ValineCDN?path=bilibilitv",
        // emojiMaps
      },
    },
  ],
  // default、lowercase、uppercase、capitalize、camelcase、kebabcase、titlecase 自动生成侧边栏管理插件,如果使用这个插件后,就不必手动的去维护侧边栏了的,可以前往themeConfig.js中将slidebar去掉,交给这个插件去管理
  // 文档地址: https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#%E6%A6%82%E8%A7%88
  [
    'vuepress-plugin-auto-sidebar',
    {
      titleMode: 'titlecase', // 标题模式
      collapsable: true, // 设置为true,开启折叠
      // sidebarDepth: 0, // 标题的深度
      collapseList: [
        // 折叠的路由列表
        // "/frontend/css/"
      ],
      uncollapseList: [
        // 不折叠的路由列表
      ],
    },
  ],

  [
    'copyright',
    {
      noCopy: true, // 选中的文字将无法被复制
      minLength: 100, // 如果长度超过 100 个字符
      'en-US': 'Author',
      'zh-CN': '作者',
    },
  ],

  [
    // 添加谷歌分析
    '@vuepress/google-analytics',
    {
      ga: secret.googleGa, // UA-00000000-0
    },
  ],

  [
    {
      // 右边固定栏
      name: 'page-plugin',
      globalUIComponents: [
        'global-AttionFixed',
        'global-ToBottom',
        'global-RightBar',
        'global-ShangPic',
        'global-Cat',
        'global-Copy',
      ],
    },
  ],

  [
    // 使VuePress站点支持简洁链接,而不是/xx.html
    'vuepress-plugin-clean-urls',
    {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    },
  ],
  /*
  [
    'music-bar', // vuepress-plugin-music-bar,音乐插件
    {
      playList: [],
      platform: [
        {
          name: 'music.163.com',
          songIDs: [
            // 歌曲ID,具体歌曲数值,可以前往网易音乐获取
            '1363948882',
            '1454730043',
            '1385646451',
            '1456270729',
            '1378945187',
            '1344897943',
            '1413585838',
          ],
          playListIDs: ['19723756', '3779629', '3778678'],
        },
      ],
      timeOut: 2000,
      firstClickPlay: true, // 首次点击自动播放
    },
  ],*/
];

module.exports = plugins; // 导出
