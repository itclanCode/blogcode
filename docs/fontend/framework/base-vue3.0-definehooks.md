---
title: VueJs中如何自定义hooks(组合式)函数
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中如何自定义hooks(组合式)函数

## 快速导航

<TOC />

## 前言

在`Vue`当中,一个非常重要的功能就是组件的复用,编写`Vue`组件,更多的也是在拼装组件,将页面的各个功能进行模块化

便于维护和管理,而在项目里,有些页面中的组件的逻辑功能是一样的,如果没有进行功能逻辑的复用,那么每个页面都需要重复的写一遍

在`Vue`当中各个组件是保持独立的,如果想要复用页面当中的某个组件的逻辑,也就是复用组件逻辑的代码

那么可以抽离逻辑,放到一个公共的地方管理的,方便在其他地方调用,达到复用代码和逻辑的目的

在`Vue2`当中可以使用`mixin`,但使用这个有很多缺点,而在`Vue3`中引入了组合式函数,也就是自定义`hooks`就很好的解决了之前的问题

## 自定义hooks

解释: 本质上是一个函数,把`setup`函数中使用的`composition API`进行了封装,复用有状态逻辑的函数

类似`Vue2`的`mixin`

优势: 自定义`hooks`,复用代码,让`setup`中的逻辑更加清除易懂

## 点击屏幕记录鼠标位置

现在有一个需求:就是记录用户点击浏览器的位置,显示到浏览器上,在组件中使用组合式API实现点击鼠标跟踪功能,示例代码如下所示

新建一个`clickPoint.vue`
```js
<scrip setup>
import { ref,onMounted,onUnmounted } from 'vue';

const x = ref(0);  // 坐标x的值
const y = ref(0);  // 坐标y的值

function update(event) {
    x.value = event.pageX;
    y.value = event.pageY;
}
onMounted(() => {
    /*
    window.addEventListener('click',(event) => {
        x.value = event.pageX;
        y.value = event.pageY;
    })*/
    window.addEventListener('click',update)
    // 对于后面的这个回调处理函数,可以单独的抽离出去

})

// 解绑函数副作用
onUnmounted(() => {
    window.removeEventlistener('click',update);
})

</scrip>
```
模板代码
```html
<template>鼠标的位置是:{{x}},{{y}}</template>
```
现在,如果想要在多个组件中复用这个相同的功能逻辑,我们可以把这个逻辑以一个组合式函数的形式提取到外部文件当中的
我们命名这个文件叫`usePoint.js`
```js
import {ref,onMounted,onUnmounted} from 'vue';

// 按照习惯,约定俗成,组合式函数名以`use`开头
export function usePoint() {
    // 被组合式函数封装和管理的状态
    const x = ref(0);
    const y = ref(y);

    function update(event) {
       x.value = event.pageX;
       y.value = event.pageY;
    }
    onMounted(() => {
      window.addEventListener('click',update)
    })
    // 解绑函数副作用
    onUnmounted(() => {
        window.removeEventlistener('click',update);
    })

    // 通过返回值暴露所有管理的状态
    return {
        x,
        y
    }
}
```
那它在组件中使用的方式
```html
<script setup>
    import { usePoint } from "./usePoint.js"

    const { x,y} = usePoint();
    // 如果希望以对象属性的形式来使用组合式函数中返回的状态,可以将返回的对象用reactive()包装一次,这样其中的ref会被自动解包
    const clickPoint = reactive(usePoint());
    // clickPoint.x链接到原来的x ref
    console.log(clickPoint.x,clickPoint.y);
</script>
```
然后在模板中
```html
<template>
    鼠标的坐标: {{x}},{{y}}
    或
    鼠标的坐标: {{clickPoint.x}},{{clickPoint.y}}
</template>
```
核心逻辑完全一致，我们做的只是把它移到一个外部函数中去，并返回需要暴露的状态。和在组件中一样，你也可以在组合式函数中使用所有的组合式 API。现在，`usePoint()` 的功能可以在任何组件中轻易复用了。

可以嵌套多个组合式函数：一个组合式函数可以调用一个或多个其他的组合式函数。这使得我们可以像使用多个组件组合成整个应用一样，用多个较小且逻辑独立的单元来组合形成复杂的逻辑。实际上，这也是将这一设计模式的 API 集合命名为组合式 API。

## hooks函数的命名

组合式函数约定用驼峰式命名,并以`use`作为开头

## 与Mixin的对比

Vue2可能会对 `mixins` 选项比较熟悉。它也让我们能够把组件逻辑提取到可复用的单元里。然而 `mixins` 有三个主要的短板：

[1]. 不清晰的数据来源：当使用了多个 `mixin` 时，实例上的数据属性来自哪个` mixin` 变得不清晰，这使追溯实现和理解组件行为变得困难。这也是我们推荐在组合式函数中使用 `ref + `解构模式的理由：让属性的来源在消费组件时一目了然

[2]. 命名空间冲突：多个来自不同作者的 `mixin` 可能会注册相同的属性名，造成命名冲突。若使用组合式函数，你可以通过在解构变量时对变量进行重命名来避免相同的键名

[3]. 隐式的跨 `mixin `交流：多个 `mixin` 需要依赖共享的属性名来进行相互作用，这使得它们隐性地耦合在一起。而一个组合式函数的返回值可以作为另一个组合式函数的参数被传入，像普通函数那样

在`Vue 3`中不推荐使用 `mixin`。有时需要查找一个变量,那么需要全局的搜索

## 与无渲染组件的对比

组合式函数相对于无渲染组件的主要优势是：组合式函数不会产生额外的组件实例开销。当在整个应用中使用时，由无渲染组件产生的额外组件实例会带来无法忽视的性能开销。

我们推荐在纯逻辑复用时使用组合式函数，在需要同时复用逻辑和视图布局时使用无渲染组件

## 总结

组合式API函数,抽取组合式函数不仅是为了复用，也是为了代码组织,组合式 API 会给予更多的灵活性，让你可以基于逻辑问题将组件代码拆分成更小的函数

进行管理,总之,`vue3`的自定义`hooks`函数对复用组件的逻辑代码很实用

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />