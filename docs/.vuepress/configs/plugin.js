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
 * @LastEditTime: 2020-06-04 19:23:00
 * @Description: 所有外部插件配置,入口在当前目录下config.js,本文件通过module.exports暴露,而在config.js中通过require方式引入
 * 集中管理外部插件配置
 *
 * 插件配置链接：
 * 1. 返回顶部插件:https://www.vuepress.cn/plugin/official/plugin-active-header-links.html#%E5%AE%89%E8%A3%85
 */
const moment = require("moment"); // 引入moment.js  // 不要忘了安装 moment
// 侧边栏排序 vuepress-plugin-auto-sidebar
const sortFn = key => (a, b) =>
  a[key].split("-")[1][length - 1] > b[key].split("-")[1][length - 1] ? 1 : -1;

const plugins = [
  "@vuepress/back-to-top", // 返回到到顶部插件
  "@vuepress/nprogress", // 进度条插件
  "reading-progress", // 阅读进度插件
  "img-lazy", // 图片的懒加载
  "vuepress-plugin-baidu-autopush", // 注入百度url-auto-push脚本，以优化您的百度SEO网站
  "vuepress-plugin-reading-time", // 阅读时间
  [
    "@vuepress/active-header-links",
    {
      // 页面滚动时自动激活侧边栏链接的插件配置
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor"
    }
  ],

  [
    {
      transformer: timestamp => {
        moment.locale("zh-cn");
        return moment(timestamp).fromat("LLLL");
      }
    }
  ],

  [
    "@vuepress/medium-zoom",
    {
      selector: ".medium-zoom", // 指定含有medium-zoom的类缩放,后面这个类名可自定义,markdown中的img的class类保持一致就可以了的,没有指明的图片类将不支持缩放
      delay: 1000, // 延迟1秒
      options: {
        margin: 24,
        scrollOffset: 0
      }
    }
  ],

  [
    "@vuepress/pwa", // 以@开头的都是官方维护的插件, pwa配置
    {
      serviceWorker: true, // 如果设置为 true，VuePress 将自动生成并注册一个 Service Worker，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）
      updatePopup: {
        // 只有在你能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册
        "/zh/": {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    }
  ],

  [
    "vuepress-plugin-comment", // valine留言插件
    {
      choosen: "valine",
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: "#valine-vuepress-comment",
        appId: "QffFto4w5NEPzOtOubDJubDA-gzGzoHsz",
        appKey: "0SwBlQTI7U0znWtQjPWh4IXH"
      }
    }
  ],
  // default、lowercase、uppercase、capitalize、camelcase、kebabcase、titlecase 自动生成侧边栏管理插件,如果使用这个插件后,就不必手动的去维护侧边栏了的,可以前往themeConfig.js中将slidebar去掉,交给这个插件去管理
  // 文档地址: https://shanyuhai123.github.io/vuepress-plugin-auto-sidebar/features/plugin-options.html#%E6%A6%82%E8%A7%88
  [
    "vuepress-plugin-auto-sidebar",
    {
      titleMode: "titlecase", // 标题模式
      collapsable: true, // 设置为true,开启折叠
      // sidebarDepth: 0, // 标题的深度
      collapseList: [
        // 折叠的路由列表
        // "/frontend/css/"
      ],
      uncollapseList: [
        // 不折叠的路由列表
      ]
    }
  ]
];

module.exports = plugins; // 导出
