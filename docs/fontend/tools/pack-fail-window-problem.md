---
title: 如何解决 vuepress 编译打包失败即 window is not defined 问题
---

## 如何解决 vuepress 编译打包失败即 window is not defined 问题

## 快速导航

<TOC />

## 前言

在`vuepress`中若是使用了`document`,以及`window`对象,比如获取 DOM 节点`document.getElementById`,`document.querySelector`,或使用了`window.onload`

在编译运行时,执行`npm run dev`是没有任何问题的,但是在`build`构建时,就出现了问题,要么报`ReferenceError: document is not defined`,或`ReferenceError: window is not defined`

当去掉代码中的`window`或`document`再次打包时,则能打包成功

## 原因

因为使用`vuepress`所生成的静态`HTML`时,都需要通过`Node.js`服务端渲染,而在服务端`Node.js`的坏境中是没有`document`以及`window`对象,这时候访问浏览器/DOM 中的 API,它就会报错

::: warning 提示
本地开发`npm run dev`没有问题,但是执行`npm run build`就会报错
:::

## 解决

:::: tabs type:border-card
::: tab 方法 1 动态组件 lazy

```js
<template>
    <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },

  mounted() {
    import('要导入含有window/document的文件').then(module => {
      this.dynamicComponent = module.default;
    })
  }
}
<script>
```

:::
::: tab 方法 2-mixin 用法 lazy
在`enhanceApp.js`中可以全局注入:利用`Vue.mixin`进行拓展

```js
import ElementUI from 'element-ui';
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  isServer, // 当前应用配置是处于 服务端渲染 或 客户端
}) => {
  // ...做一些其他的应用级别的优化
  // 全局注入组件
  Vue.use(ElementUI);
  Vue.mixin({
    mounted() {
      import('需要导入的文件').then(function(m) {
        Vue.use(m.default);
      });
    },
  });
};
```

:::
::: tab 方法 3-插件里全局化 lazy
在`vuepress`中的自定义组件文件处,声明定义一个组件,然后在配置插件全局注入

```js
<template>
  <div>

  </div>
</template>

<script>

  export default {
    name: 'HideArticle',
    data() {
      return {

      }
    },

    mounted() {
     import('要导入的文件路径')

    }
  }
</script>

<style lang="scss" scoped>

</style>

```

在`configs`中的 plugin 插件中

```js
module.exports = {
  plugins: [
    [
      {
        name: 'page-plugin',
        globalUIComponents: ['global-HideArticle组件的名称'],
      },
    ],
  ],
};
```

:::
::::

## 结语

主要需要注意在`vuepress`中,若使用了`window`或`document`对象,在运行时,因为在浏览器上跑,是没有问题的

但是打包时,由于`vuepress`依赖`Node.js`服务器,而它没有`window`,`document`对象,当用到了 js 对象操作 dom 时

就会报错,具体解决见上面方案

## 相关参考文档

- [VuePress window document is not defined](https://segmentfault.com/a/1190000022727986)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
<footer-AvoidCopy />