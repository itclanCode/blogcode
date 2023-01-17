---
title: VueJs中如何使用provide与inject
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中如何使用provide与inject

## 快速导航

<TOC />

## 前言

在`vue2.0`里面`provide`与`inject`是以选项式(配置)API的方式在组件中进行使用的,解决的是跨组件(祖孙)间通信的一种方式

也就是父子组件间的通信,父组件上市通过自定义属性,而子组件间通过`props`这种方式接收,如果想要一层一层的传递,这种方式就会比较麻烦,不灵活

`provide`与`inject`就是解决:怎么从祖组件的数据,传递到孙组件,实现跨级组件传递数据的

在`vue3.0`里面,同样提供了`provide`与`inject`,使用起来更简单方便,单纯的从概念上去看,是比较抽象,难以理解的

还是要从具体的实例出发

## provide()函数

定义:提供一个值，可以被后代组件注入

实现: 父组件有一个`provide`,选项来提供数据,后代组件中有一个`inject`选项来开始使用父组件传递过来的数据

`provide(第一个参数,第二个参数)`接收两个参数,第一个参数是要注入的`key`,它可以是一个字符串或一个`symbol`,第二个参数是要注入的值(具体要传递给子孙组件的数据)

`provide`是`vue`官方提供的`componsition API`

具体示例代码如下所示

```js
import {reactive,provide} from "vue";

let person = reactive({name: 'itclanCoder',website: 'https://coder.itclan.cn'});
provide('person',person);
```
通过上面的`provide`提供一个值,就可以了的,那怎么样把这个数据传递到子孙组件,那么就需要用到`inject`了的

## inject()函数

定义: 注入一个由祖先(父)组件或整个应用提供的值

实现: 接收父(祖)组件传递过来的值

`inject(第一个参数,第二个参数(可选))`:第一个参数是注入的`key`,来自父(祖)组件,它们两者是需要保持一致的

`Vue`会遍历父组件链,通过匹配`key`来确定所提供的值,如果父组件链上多个组件对同一个`key`提供了之,那么离得更近的将会覆盖链上更远的组件所提供的值

如果没有能通过`key`匹配到的值,`inject()`函数将返回`undefined`,除非提供一个默认值

第二个参数是可选的,即没有匹配到`key`时,使用默认值,它也可以是一个函数,用来返回某些创建起来比较复杂的值,如果默认值本身就是一个函数

那么必须将`false`作为第三个参数传入,表明这个函数就是默认值,而不是一个工厂函数

与注册生命周期钩子的API类似,`inject()`必须在组件的`setup()`阶段同步调用

具体示例代码
```js
import {inject,toRefs} from  "vue";

const person = inject('person');
// 若是使用解构,则会丢失响应式,修改数据时,页面不会更新,具体解决,可以引入toRef或toRefs函数
const {name,website} = toRefs(person);
```
在孙组件中的模板即可以读取,从父组件传递过来的数据也是支持响应式的

```html
{{person.name}}---{{person.website}}
```
若使用解构时,则模板中可直接使用变量
```html
{{name}}--{{website}}
```

::: tip 注意
如果是解构变量,想要数据响应式,那么需要使用`toRef()`或`toRefs()`将数据进行转化为响应式
:::

如下是完整的示例
```js
import { inject } from 'vue'
import { fooSymbol } from './injectionSymbols'

// 注入值的默认方式
const foo = inject('foo') 

// 注入响应式的值
const count = inject('count')

// 通过 Symbol 类型的 key 注入
const foo2 = inject(fooSymbol)

// 注入一个值，若为空则使用提供的默认值
const bar = inject('foo', 'default value')

// 注入一个值，若为空则使用提供的工厂函数
const baz = inject('foo', () => new Map())

// 注入时为了表明提供的默认值是个函数，需要传入第三个参数
const fn = inject('function', () => {}, false)
```
基本上用第一种注入默认值的方式,使用是最多的,接收父组件提供传递过来的值

## 总结

`provide()`与`inject()`的使用比较简单,就是解决跨组件间通信的一种方式,对于层级嵌套比较深的组件,若子孙组件想要使用父组件中的数据

那么就可以使用这种方式进行传递数据的,这在平时的一些业务开发中,还是有些用的,而在面试当中也是一个高频面试问题,怎么解决跨级组件,非父子组件通信

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
