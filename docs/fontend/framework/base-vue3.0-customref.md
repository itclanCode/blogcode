---
title: VueJs中customRef函数的使用
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中customRef函数的使用

## 快速导航

<TOC />

## 前言

`ref`是`Vue`官方提供的`componsition API`,将一个非响应式数据转变为响应式数据的函数,至于底层怎么实现数据的收集与响应式

使用者无需去关注,相当于就是精装电脑,然而有时候,针对一些复杂特殊的需求,我们需要自己造轮子,自己手动原生的去实现内部结构

实现基础的功能的同时,还要进行额外的拓展,那么这时候就需要自定义`ref`了的,它就相当于是组装式的电脑,内部结构需要自己去组装,实现

而非直接从商城里购买,用一些现成的零部件组装一个类似精装的电脑,甚至还可以进行拓展,在实现一个定制化复杂的功能需求时

这个自定义`ref`就很有用

## 示例-延迟显示

想要在`input`中实现一个数据的实时收集与实时展示,需要使用`v-model`指令
```html
<template>
    <input type="text" v-model="keyword" />
    <h3>{{keyword}}</h3>
</template>
<script setup>
 import { ref } from "vue";
 let keyword = ref("itclanCoder"); // Vue官方提供的ref函数,返回一个响应式数据
</script>
```
现在不能用官方提供的`ref`函数,也就是自己要自顶一个类似`ref`函数,如下所示
```html
<template>
    <input type="text" v-model="keyword" />
    <h3>{{keyword}}</h3>
</template>
<script setup>
import { customRef } from 'vue';      
// 自定义的一个ref,名为myRef,自定义ref就是一个函数
function myRef(value) {
  // 自定义,自己得写逻辑,customRef必须要传入一个函数,而且函数里面必须要返回一个对象
  return  customRef((track,trigger) => {  // 第一个return 是把自定义的内容返回出去,第二个return 是返回里面的逻辑,返回get,和set
    return {  
        get() {  // 读取数据,这个value是初始化传递过来的数据
            console.log('get',`${value}`);
            track(); // 追踪一下数据的改变,通知vue最终value数据的变化,提前和get沟通一下,让value是有作用的
            return value
        },
        set(newValue) { // 设置数据,新的值,修改数据
           value = newValue;
           trigger(); // customRef函数内接收两个参数,一个是track,另一个就是trigger,通知vue去重新解析模板
        }
    }
  });  
}    
let keyword = myRef("itclanCoder"); // 自己定义一个ref
</script>
```
通过上面的方式就可实现自定义数据的收集和展示,如果想要等待几秒后,触发,那么只需要在`set`加一个定时器就够了的,其他不变
```js
set(newValue) {
    setTimeout(() => {
        value = newValue;
        trigger(); // 通知vue去重新解析模板
    },500)
}
```
解决持续回显,误触发的问题,定时器一直开通的问题,如下是完整示例代码
```js
<template>
    <input type="text" v-model="keyword" />
    <h3>{{keyword}}</h3>
</template>
<script setup>
import { customRef } from 'vue';      
// 自定义的一个ref,名为myRef,自定义ref就是一个函数
function myRef(value) {
  let timer;  // 开启一个定时器  
  // 自定义,自己得写逻辑,customRef必须要传入一个函数,而且函数里面必须要返回一个对象
  return  customRef((track,trigger) => {  // 第一个return 是把自定义的内容返回出去,第二个return 是返回里面的逻辑,返回get,和set
    return {  
        get() {  // 读取数据,这个value是初始化传递过来的数据
            console.log('get',`${value}`);
            track(); // 追踪一下数据的改变,通知vue最终value数据的变化,提前和get沟通一下,让value是有作用的
            return value
        },
        set(newValue) { // 设置数据,新的值,修改数据
           clearInterval(timer);  // 先清除定时器,在开
           timer = setTimeout(() => {
              value = newValue;
              trigger(); // customRef函数内接收两个参数,一个是track,另一个就是trigger,通知vue去重新解析模板
           },500)
        }
    }
  });  
}    
let keyword = myRef("itclanCoder"); // 自己定义一个ref

</script>
```

这个`customRef`比较难以理解的是,它需要在自定义`ref`函数中返回出去，同时,接收一个工厂函数作为参数,这个工厂函数接受`track`和`trigger`两个函数

作为参数,并返回一个带有`get`和`set`方法的对象

一般来说,`track()`在`get()`方法中的返回值前进行调用,追踪一下数据的改变,通知vue最终数据的变化,而`trigger()`函数则应该在`set()`函数的末尾调用

通知`vue`去重新解析模板,更新页面数据

最后就是实现等待多长时间,稍后显示,使用一个定时器去实现,解决频繁误触发的问题,常规的解决办法,先清除定时器,然后在开启定时器

## 总结

自定义ref(`customRef()`)函数是一个非常有用的东西,相当于是对`ref`的一个功能的拓展,自己手动的去实现,内部实现比较绕,需要自己去体会和实践的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />



