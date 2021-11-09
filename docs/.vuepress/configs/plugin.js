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
 * @LastEditTime: 2020-12-03 09:28:06
 * @Description: 所有外部插件配置,入口在当前目录下config.js,本文件通过module.exports暴露,而在config.js中通过require方式引入
 * 集中管理外部插件配置
 *
 * 插件配置链接：
 * 1. 返回顶部插件:https://www.vuepress.cn/plugin/official/plugin-active-header-links.html#%E5%AE%89%E8%A3%85
 * [
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
  ],
 */
// const emojiMaps = require("./emojiMaps"); // 引入表情包
// const moment = require('moment'); // 引入moment.js  // 不要忘了安装 moment
const secret = require('./secretKey'); // 引入密钥信息

const plugins = [
  '@vuepress/back-to-top', // 返回到到顶部插件
  '@vuepress/nprogress', // 进度条插件
  'reading-progress', // 阅读进度插件
  'img-lazy', // 图片的懒加载
  'vuepress-plugin-baidu-autopush', // 注入百度url-auto-push脚本，以优化您的百度SEO网站
  'vuepress-plugin-smooth-scroll', // 你的 VuePress 站点中使用平滑滚动
  'vuepress-plugin-table-of-contents', // 为你的 VuePress 站点增加目录组件,支持在md和vue中写<TOC />,生成目录树
  'element-ui', // 添加element-ui组件
  'flowchart', // 流程图表
  'demo-code', // 在线写demo
  // 'demo-block', // 在md中支持写vue,react,原生,以及jQ
  'vuepress-plugin-element-tabs', // tab切换
  [
    '@vuepress/active-header-links',
    {
      // 页面滚动时自动激活侧边栏链接的插件配置
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
  ],

  // [
  //   {
  //     transformer: (timestamp) => {
  //       moment.locale('zh-cn');
  //       // return moment(timestamp).fromat('LLLL');
  //     },
  //   },
  // ],

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

  // [
  //   'vuepress-plugin-comment', // valine留言插件
  //   {
  //     choosen: 'valine',
  //     // options选项中的所有参数，会传给Valine的配置,配置选项见文档:https://valine.js.org/configuration.html#appId
  //     options: {
  //       el: '#valine-vuepress-comment',
  //       appId: secret.appId, // 引入密钥appId
  //       appKey: secret.appKey, // 引入密钥appKey
  //       placeholder: '据说评论几句,结果会一鸣惊人~互相学习哈',
  //       path: `window.location.href`,
  //       avatar: 'robohash', // 非自定义头像
  //       meta: ['nick', 'mail'],
  //       requiredFields: ['nick', 'email'],
  //       pageSize: 10,
  //       visitor: true, // 对访问量进行统计
  //       // emojiCDN:
  //       //   "https://www.jsdelivr.com/package/gh/GamerNoTitle/ValineCDN?path=bilibilitv",
  //       // emojiMaps
  //     },
  //   },
  // ],
  // default、lowercase、uppercase、capitalize、camelcase、kebabcase、titlecase 自动生成侧边栏管理插件,如果使用这个插件后,就不必手动的去维护侧边栏了的,可以前往themeConfig.js中将slidebar去掉,交给这个插件去管理
  // 文档地址: https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#%E6%A6%82%E8%A7%88
  [
    'vuepress-plugin-auto-sidebar',
    {
      titleMode: 'titlecase', // 标题模式
      collapsable: {
        open: true
      }, // 设置为true,开启折叠
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
        'global-Cat',
        'global-Copy',
        'global-AdvertiSpace',
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

  // [
  //   '@vuepress-yard/vuepress-plugin-window',
  //   {
  //     title: '公告',
  //     windowStyle: {
  //       left: '20px',
  //       top: '70px',
  //       width: '260px',
  //     },
  //     contentInfo: {
  //       title: '欢迎加入itclanCoder QQ交流群 🎉',
  //       imgUrl: '/images/rightBarImgs/itclancode-qq.jpg',
  //       needImg: false,
  //       content: 'QQ群1: 643468880',
  //       contentStyle: {
  //         textAlign: 'center',
  //         paddingTop: '10px',
  //         lineHeight: '40px',
  //       },
  //     },
  //     bottomInfo: {
  //       btnText: '打赏',
  //       linkTo:
  //         'https://www.zhi12.cn/paycenter/reward/widget?entity=user&id=33813',
  //       target: '_blank',
  //     },
  //     delayMount: 500,
  //     closeOnce: true,
  //   },
  // ],

  // [
  //   'meting',
  //   {
  //     // metingApi: 'https://meting.sigure.xyz/api/music',
  //     meting: {
  //       //auto: 'https://music.163.com/#/playlist?id=784399723'
  //       // 网易
  //       server: 'netease',
  //       // 读取歌单
  //       type: 'playlist',
  //       mid: '784399723'
  //       // mid: '1300310,31654455,4022088,29717271,2061739,3934523,28263314,29577767,28949412,34749433,32102855,41630476,5042951,31010566,41630480,2061724,34690640,3935176,32526653,28283167',
  //     },
  //     // 不配置该项的话不会出现全局播放器
  //     aplayer: {
  //       // 是否开启吸底模式
  //       fixed: true,
  //       // 是否开启迷你模式
  //       mini: true,
  //       // 自动播放
  //       autoplay: false,
  //       // 设置播放器的初始循环模式
  //       loop: 'All',
  //       // 歌曲栏折叠
  //       listFolded: true,
  //       // 设置播放器默认主题颜色
  //       theme: '#42b983',
  //       // 播放顺序为随机
  //       order: 'random',
  //       // 初始音量
  //       volume: 0.1,
  //       // 关闭歌词显示
  //       lrcType: 0,
  //     },
  //     mobile: {
  //       // 手机端去掉cover图
  //       cover: false,
  //     },
  //   },
  // ],
  [
    "music-bar",
    {
      //手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空
      //Add songs manually, support URLs or base64 data URIs, empty by default
      // playList: ["example.mp3"],

      platform: [
        //目前仅支持网易云 TODO:多平台支持,默认为空数组
        //Currently only supports Netease Cloud Music,
        //the default is an empty array TODO: Multi-platform support,
        {
          name: "music.163.com",
          songIDs:[],//支持多个歌曲 ID  //Support multiple song IDs
          playListIDs: ['1300310','31654455','4022088','29717271',
                        '2061739','3934523','28263314','29577767',
                        '28949412','34749433','32102855','41630476',
                        '5042951,31010566','41630480','2061724','34690640',
                        '3935176','32526653','28283167'] //支持多个歌单 ID  //Support multiple playlist IDs
        }
      ],

      timeOut: 2000, //加载超时,单位毫秒,默认2000  //Load timeout in milliseconds, default 2000
      firstClickPlay: true //首次点击自动播放,对移动端友好  //The first click autoplay, mobile friendly

      //debugMode: <Boolean> Development mode, if in the dev environment,
      //                     output log to console, enabled by default

      //background: <String> //主容器样式  //Main container style
      //                       default: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)"

      //frameColor: <String> default: $accentColor
    }
  ]
];

module.exports = plugins; // 导出
