---
title: VueJs中的computed函数
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中的computed函数

## 快速导航

<TOC />

## 前言

在`Vue3`中引入了一个`computed`函数,它与`Vue2.0`的`computed`配置功能一致

## Vue3.0的计算属性

使用`computed`时,需要从`vue`当中引入
如下所示
```js
import { computed } from 'vue'
export default {
    setup() {
    // 计算属性一简写
    let fullName = computed(() => {
        return person.firstName+'-'+person.lastName
    })
    // 计算属性一完整
    let fullName = computed({
        get() {
          return person.firstName+'-'+person.lastName
        },
        set(value) {
          const nameArr = value.split('-');
           person.firstName = nameArr[0];
           person.lastName = nameArr[1];
        }
    })
  }
}

```
`computed()`接收一个`getter`函数,返回一个只读的响应式`ref`对象,该`ref`通过`.value`暴露`getter`函数的返回值,它也可以接收一个

带有`get`和`set`函数的对象来创建一个可写的`ref`对象

如下示例代码所示

```js
const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {           // 要是需要可写时,需要用到set
    count.value = val - 1
  }
})

plusOne.value = 1
console.log(count.value) // 0
```

## 计算属性值会缓存结果

将同样的函数定义为一个方法而不是计算属性，两种方式在结果上确实是完全相同的，然而，不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算

方法调用总是会在重渲染发生时再次执行函数.如果你确定不需要缓存，那么也可以使用方法调用。

## 使用computed注意事项

计算属性的 `getter` 应只做计算而没有任何其他的副作用，这一点非常重要，举例来说，不要在 `getter`中做异步请求或者更改 DOM

一个计算属性的声明中描述的是如何根据其他值派生一个值。因此 `getter` 的职责应该仅为计算和返回该值

## 避免直接修改计算属性值

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。

更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />