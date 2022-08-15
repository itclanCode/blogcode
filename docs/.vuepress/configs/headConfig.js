/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-06-02 07:29:20
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2021-03-29 17:19:08
 * @Description:头部html中head需要引入的标签,当前文件通过module.exports导出,在config.js主入口文件中通过require导入
 */
const baidu = require('./secretKey'); // 引入百度统计密钥ID
const headConfig = [
  // 注入到当前页面的 HTML <head> 中的标签
  ['link', { rel: 'icon', href: '/icons/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  [
    'meta',
    {
      rel: 'keywords',
      content:
        '随笔川迹,itclanCoder,itclanCoder的技术博客,coder.itclan.cn,前端开发,IT技术,网络技术,斜杠青年,https://coder.itclan.cn/',
    },
  ],
  ['meta', { name: 'Author', content: '随笔川迹' }],
  [
    'meta',
    { 'http-equiv': 'Content-Type', content: 'text/html', charset: 'UTF-8' },
  ],
  ['link', { rel: 'manifest', href: '/js/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon.png',
    },
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'baidu-site-verification', content: 'cShSMbDRHJ' }],
  [
    'meta',
    {
      name: 'baidu_union_verify',
      content: 'c8f90a7f2296fb45fbb69e5397e9c98e',
    },
  ],

  [
    'meta', // 移动端禁止用户缩放
    {
      name: 'viewport',
      content:
        'width=device-width,width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
    },
  ],

  [
    'meta',
    {
      async: 'async',
      'http-equiv': 'Content-Security-Policy', // 自动将http的不安全请求升级为https
      content: 'upgrade-insecure-requests', // HTTPS 是 HTTP over Secure Socket Layer，以安全为目标的 HTTP 通道，所以在 HTTPS 承载的页面上不允许出现 http 请求，一旦出现就是提示或报错
    },
  ],
  [
    'meta', // 添加谷歌站点搜素
    {
      async: 'async',
      name: 'google-site-verification',
      content: 'Lp5bo-dr1R5gCVE_3iUI6KXr8tNhN5pyUxPYYKCZkO4',
    },
  ],
  [
    'meta',
    {
      'http-equiv': 'x-dns-prefetch-control',
      content: 'on',
    },
  ],
  [
    // 添加百度统计代码
    'script',
    {},
    `
      var _hmt = _hmt || [];
      (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?${baidu.baiduTongJiId}";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
      })();
    `,
  ],
  ['link', { rel: 'stylesheet', href: '/css/style.css' }], // 这种方式也可以覆盖默认样式
  [
    'script',
    {
      charset: 'utf-8',
      async: 'async',
      src: 'https://my.openwrite.cn/js/readmore.js',
    },
  ],
  ['script', { charset: 'utf-8', async: 'async', src: '/js/setglobal.js' }],
  [
    'script', // 插入谷歌广告
    {
      async: 'async',
      charset: 'utf-8',
      'data-ad-client': 'ca-pub-7281692919682421',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    },
  ],

  [
    'script',
    {
      charset: 'utf-8',
      src: '/js/shang.js',
      async: 'async',
    },
  ],
  [
    'script',
    {
      name: 'referrer',
      content: 'no-referrer'
    }
  ],
  [
    'script',
    {
      src: '//i.6v6.work/v/?uid=388604',
      async: 'async'
    }
  ],

  // 51统计
  [
    'script',
    {
      charset: 'utf-8',
      id: 'LA_COLLECT',
      src: '//sdk.51.la/js-sdk-pro.min.js?id=JmTU1mn0cnHhpM63&ck=JmTU1mn0cnHhpM63&hashMode=true'
    }
  ],
// https://www.3324.cn/,中聚传媒广告
// cpc-点击广告
  [
    'script',
    {
      charset:'utf-8',
      src:'https://sgls.wk4y.cn/bdu.php?id=2489'
    }
  ],
  // 中聚传媒,cpm弹窗广告
  [
    'script',
    {
      src: 'https://sgls.wk4y.cn/bdu.php?id=2490'
    }
  ],
  // 
  // [
  //   'script',
  //   {
  //     charset: 'utf-8',
  //     async: 'async',
  //     src:
  //       'https://static.bshare.cn/b/buttonLite.js#style=-1&amp;uuid=9bdd2044-a21a-48f4-8838-5aea07e583ab&amp;pophcol=2&amp;lang=zh',
  //   },
  // ],
  // [
  //   'script',
  //   {
  //     charset: 'utf-8',
  //     async: 'async',
  //     src: 'https://static.bshare.cn/b/bshareC0.js',
  //   },
  // ],
];

module.exports = headConfig;
