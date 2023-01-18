---
title: VueJs中如何使用Teleport组件
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中如何使用Teleport组件

## 快速导航

<TOC />

## 前言

在`DOM`结构相对比较复杂,层级嵌套比较深的组件内,需要根据相对应的模块业务处理一些逻辑,该逻辑属于当前组件

但是从整个页面应用的视图上看,它在`DOM`中应该被渲染在整个`vue`应用外部的其他地方,不能影响组件的结构

比较常见的应用场景:就是全屏的模态框,控制元素的位置,也是可以处理的,但是比较麻烦

在理想情况下,我们希望在具体的组件中,给元素绑定的事件,与具体要控制的DOM元素结构在同一个组件中,具体的位置处,保持一定的相关联性

而不用特意的把一些DOM结构给分离出去,然而,在同一组件中,触发模态框的按钮和模态框本身在同一组件中

因为他们都与组件的开关状态有相关联,模态框与按钮一起渲染在应用`DOM`结构很深的地方,会导致模态框的`css`布局位置非常难控制

鉴于这样的场景和困难,`Vue`官方提供了一个`Teleport`组件,很好的可以解决这个问题,让开发者不需要顾虑`DOM`结构的问题

## 组件套组件层次结构很深时

比如:现在有两个组件,父组件,子组件,在后代组件内,添加一个按钮,弹出一个模态框,让它在页面垂直水平居中显示

如下所示,父组件如下所示`App.vue`
```html
<template>
    <div class="App">
        我是父组件
        <Child />
    </div>
</template>
<script setup>
    import Child from "./Child.vue"
</script>
<style>
.App {
    width: 400px;
    height: 400px;
    background:red;
}
</style>
```
如下是`Child`组件,示例代码如下所示`Child.vue`,我们需要在孙(后代)组件,添加一个按钮,点击按钮,弹出一个弹框,水平垂直居中显示在页面中央
```html
<template>
    <div class="child">
      <p>我是子组件</p>
        <button @click="isModel=true">打开模态框</button>
        <div class="mask-dialog" v-if="isModel">
             <div class="box">
                  <h2>我是标题</h2>
                  <div>我是弹框内容</div>
                  <div>
                      <button @click="isModel=false">关闭</button>
                  </div>
             </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
let isModel = ref(false);
</script>
<style>
.child {
    width: 300px;
    height:300px;
    background:green;
}
/**灰色遮罩层 */
  .mask-dialog {
    width: 100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background:rgba(0,0,0,0.5)
  }
  
  .box {
    width: 200px;
    height:200px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:pink;
    text-align:center;
  }
</style>
```
上面的子组件中有一个`button`按钮来触发打开当前组件的模态框,里面存在着控制弹框的显示和隐藏的逻辑,当嵌套的组件比较深,复杂时

如果父级元素存在定位,那在控制子元素的位置时,用`css`的`transform`或者`position:absolute`,参照对象的变更,会破坏布局结构,会出现一些`css`样式

控制的问题,解决起来会非常的痛苦

那这个`Teleport`组件就是为了解决这类问题,可以将指定的`DOM`结构片段,独立于到组件外面去,不受当前组件布局结构的影响

经过`Teleport`的修改后
```html
<template>
    <div class="child">
      <p>我是子组件</p>
        <button @click="isModel=true">打开模态框</button>
        <Teleport to="body">
            <div class="mask-dialog" v-if="isModel">
                 <div class="box">
                      <h2>我是标题1</h2>
                      <div>我是弹框内容</div>
                      <div>
                          <button @click="isModel=false">关闭</button>
                      </div>
                 </div>
            </div>
        </Teleport>  
    </div>
</template>
<script setup>
import { ref } from "vue";
let isModel = ref(false);
</script>
<style>
.child {
    width: 300px;
    height:300px;
    background:green;
}
/**灰色遮罩层 */
  .mask-dialog {
    width: 100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background:rgba(0,0,0,0.5)
  }
  
  .box {
    width: 200px;
    height:200px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    background:pink;
    text-align:center;
  }
</style>
```

`<Teleport> `接收一个 `to prop `来指定传送的目标。`to` 的值可以是一个 `CSS 选择器字符串`，或`id`,也可以是一个 `DOM` 元素对象。这段代码的作用就是告诉 Vue“把以下模板片段传送到 `body` 标签下”

```html
<Teleport to="#some-id">html结构代码</Teleport>
<Teleport to=".some-class">html结构代码</Teleport>
<Teleport to="body">html结构代码</Teleport>
<Teleport to="html">html结构代码</Teleport>
```

## Teleport组件

它是`Vue`官方提供的一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 `DOM` 结构外层的位置去

也就是一种能够将我们的组件`html结构`移动到指定位置的技术

```html
// to可以写html,body，也可以写id，或class
<teleport to="移动到指定的位置,可以是html,body,或id,class">
   里面是Html结构模板内容
</teleport>
```

::: tip 注意
`<Teleport>` 挂载时，传送的 `to` 目标必须已经存在于 `DOM `中。理想情况下，这应该是整个 `Vue` 应用 `DOM` 树外部的一个元素。如果目标元素也是由 `Vue` 渲染的，你需要确保在挂载 `<Teleport>` 之前先挂载该元素
:::

这个`teleport`将指定的模板html,放置到页面当中指定的位置处,它是有条件的,不是可以任意传送的

在安装组件之前，目标元素必须存在,即,目标不能由组件本身呈现，理想情况下应该位于整个`Vue`组件树之外。

如下代码是不行的

```html
<template>
    <div class="header">
        <Teleport to=".content">
            <div>我是头部的内容</div>
        </Teleport>
         
    </div>
    <div class="footer">
        底部内容
        <div class="content"></div>
    </div>
</template>
<script setup>
</script>
<style lang="less">
h1 {
    color: red;
}
</style>          
```

## 需要知道的

`teleport`只是改变了渲染的 `DOM` 结构，它不会影响组件间的逻辑关系。也就是说，如果 `<Teleport>` 包含了一个组件，那么该组件始终和这个使用了 `<teleport>` 的组件保持逻辑上的父子关系。传入的 `props` 和触发的事件也会照常工作。

这也意味着来自父组件的注入也会按预期工作，子组件将在 `Vue Devtools` 中嵌套在父级组件下面，**而不是放在实际内容移动到的地方**

位置移动了,提现在结构模板上,但是数据逻辑依旧存在关联的

## 如何禁用 Teleport

在某些场景下可能需要视情况禁用 `<Teleport>`。举例来说，我们想要在桌面端将一个组件当做浮层来渲染，但在移动端则当作行内组件。我们可以通过对 `<Teleport>` 动态地传入一个 `disabled prop` 来处理这两种不同情况

```html
<Teleport :disabled="isMobile">
  ...
</Teleport>
```
这里的 `isMobile` 状态可以根据 `CSS media query` 的不同结果动态地更新

## 多个 `Teleport` 共享目标时

一个可重用的模态框组件可能同时存在多个实例。对于此类场景，多个 `<Teleport>` 组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上

比如下面这样的用例

```html
<Teleport to=".content">
  <div>A</div>
</Teleport>
<Teleport to=".content">
  <div>B</div>
</Teleport>
```
渲染的结果为
```html
<div class="content">
  <div>A</div>
  <div>B</div>
</div>
```

## 总结

这个`teleport`组件在实际开发中还是很实用的,能够解决当组件嵌套层级很深,而后代组件中的模板,想要脱离当前组件结构,解决`css`布局层面的干扰,那就可以用这个`teleport`组件


## 拓展官方示例

* [Teleport示例](https://cn.vuejs.org/examples/#modal)

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

