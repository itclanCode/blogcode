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
import ClipboardComponent from "./components/ClipboardComponent";

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // 全局注入组件
  // Vue.component("ClipboardComponent", ClipboardComponent);
};
