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
 * @LastEditTime: 2020-06-12 19:30:07
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
      content: '随笔川迹,itclanCoder,itclanCoder的技术博客,itclan,川川'
    }
  ],
  ['meta', { name: 'Author', content: '随笔川迹' }],
  ['link', { rel: 'manifest', href: '/js/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: '/icons/msapplication-icon.png'
    }
  ],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  [
    'meta', // 移动端禁止用户缩放
    {
      name: 'viewport',
      content:
        'width=device-width,width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'
    }
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
    `
  ],
  ['link', { rel: 'stylesheet', href: '/css/style.css' }], // 这种方式也可以覆盖默认样式
  ['script', { charset: 'utf-8', src: '/js/disable-user-zoom.js' }] // 移动端,禁止用户缩放,引入你写的js
];

module.exports = headConfig;
