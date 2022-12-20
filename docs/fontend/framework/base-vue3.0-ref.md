---
title: VueJs中的ref函数
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中的ref函数

## 快速导航

<TOC />

## 前言

在`Vue2.0`里面,与页面相关显示的数据是挂载在`data`下,而在`vue3.0`里,想要一个数据

具备响应式,那么需要引入响应式API函数,通过API函数加工处理后,才具备响应式,两者之间在底层实现数据的响应式上

也存在着差异


## ref可将数据变成响应式

在`setup`里面使用`let`定义的变量不是响应式的数据,它只是一个普通的字符串

数据虽然是可以修改,但是页面没有更新,`Vue`没有捕获到,如果想要定义的数据是响应式的,可以监测和捕获到,那么就需要从`vue`当中引用`ref`函数
变成一个引用实例对象(引用对象)

```js
import { ref } from 'vue'

setup() {
    let name = ref("itclanCoder");
    let age = ref(20);
     
    // 在逻辑内部访问,需要使用xxx.value
    console.log(name.value,age.value); 
    return {
        name,
        age
    }
}
```
在模板里直接使用变量名就可以,但是更改数据时,却要使用`xxx.value`

## ref函数-处理对象类型

当`ref`处理对象数据类型时

```js
let job = ref({
    type: 'frontend',
    salary: '25k'
})

console.log(job.value.type)
console.log(job.value.salary);
```
**作用**: 定义一个响应式的数据

**语法**: const xxx = ref(initValue)

创建一个包含响应式数据的引用对象,在`JS`中操作数据`xxx.value`,模板中读取数据,不需要`xxx.value`,直接是`<div>{{xxx}}</div>`

[1]. 接收的数据可以是:基本类型,也可以使对象类型
[2]. 基本类型的数据:响应式依然是靠(`Object.defineProperty()`的`get`与`set`完成的)
[3]. 对象类型的数据:内部借助了`vue3`的一个新函数`reactive`函数

## 总结

`ref`函数主要处理基本数据类型数据,让它具备响应式数据的能力,该对象只有一个指向内部值的属性`.value`

可以被`vue`监测和追踪

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />