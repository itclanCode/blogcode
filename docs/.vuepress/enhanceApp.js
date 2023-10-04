/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @Description:
 *
 *  该文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部
 *  可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等
 * 具体使用见文档: https://www.vuepress.cn/zh/guide/basic-config.html#%E5%BA%94%E7%94%A8%E7%BA%A7%E5%88%AB%E7%9A%84%E9%85%8D%E7%BD%AE
 */
import ElementUI from 'element-ui';
import Vant from 'vant';
import 'vant/lib/index.css';
import './public/css/element-variables.scss';
// import Clipboard from './components/Clipboard';
import Copy from './components/global/Copy';
import VueClipboard from 'vue-clipboard2'; // 引入复制粘贴组件
import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';
// 允许跨域
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';  
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'; 
axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*'; 


// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // 全局注入组件
  // Vue.component('Clipboard', Clipboard);
  Vue.component('Copy', Copy);
  Vue.use(ElementUI);
  Vue.use(Vant);
  Vue.use(VueClipboard);
  Vue.prototype.$axios = axios;
  Vue.prototype.$fetchJsonp = fetchJsonp;
  Vue.mixin({
    mounted() {
      import('./public/js/btwplugin');
    },
  });
};
