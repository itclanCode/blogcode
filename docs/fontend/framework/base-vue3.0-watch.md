---
title: vueJs中的watch与watchEffect函数
collapsable: true
autoGroup-2: Vue3基础
---

## vueJs中的watch与watchEffect函数

## 快速导航

<TOC />

## 前言

有时，我们需要在状态变化时执行一些副作用,比如:监听路由状态,更改`DOM`,或是根据异步操作的结果去修改另一处的状态

这个时候,就需要用到监听器

在组合式API中,就可以使用`watch`函数在每次响应式状态发生变化时触发回调函数

## 使用watch监视ref

`watch`:监听某个属性的变化,一旦发生变化,就会触发对应的回调函数执行

* 第一个参数:选择要监听的属性
* 第二个参数: 设置的回调函数,即监听到变化时应该执行的函数
* 第三个参数: 可以设置`deep`(深度监听),其值为`true`或`false`,还可以设置`immediate`(是否以当前值执行回调函数)其值为`true`或`false`

如下示例代码所示,监视的几种情况
```js
import {ref,reactive,watch} from "vue"

export default {
  name:'Demo',
  setup() {
    let sum = ref(0);
    let msg = ref("itclanCoder")
    let person =  reactive({
        name: 'itclanCoder',
        age: 6,
        job: 'webcoder'
    })
    //情况1:监听ref所定义的响应式数据,第一个参数是监视的是谁,第二个参数是监视的回调,第三个参数就是监视的配置
    // 监视
    watch(sum,(newValue,oldValue) => {
      console.log('sum变了',newValue,oldValue);
    }，{immediate:true,deep: true})
    
    // 情况2：监视ref所定义的多个响应式数据
    watch([sum,msg],() => {
      console.log('sum或msg变了',newValue,oldValue);
    })

    /* 情况3：监视reactive所定义的一个响应式数据的全部属性
       1. 注意:此处无法正确的获取oldValue
       2. 注意：强制开启了深度监视（deep配置无效）
    */
    // 情况四：监视reactive所指定的一个响应式数据中的某个属性
    
    watch(person,(newValue,oldValue) => {
      console.log('person变化了',newValue,oldValue);
    })
    
    // 监视某个属性,必须要写成一个函数
    watch(() => person.name,(newValue,oldValue) => {
      console.log('person的age变化了',newValue,oldValue);
    })
     
     // 情况五:监视reactive所定义的一个响应式数据中的某些属性
     watch([() => person.name,()=> person.age],(newValue,oldValue)=> {
       console.log('person的name成age变化了',newValue,oldValue);
     }) 
     // 特殊情况,此处由于监视的是reactive定义的对象中的某个属性,所以deep配置有效
     watch(() => person.job,(newValue,oldValue) => {
       console.log('person的job变化了',newValue,oldValue);
     },{deep:true})   

    return {
      sum
    }
  }
}
```
`watch()`与`vue2.0`的功能是一样的,侦听一个或多个响应式数据源,并在数据源变化时调用所给的回调函数

## watch存在一些问题

1. 监视`reactive`定义的响应式数据时,`oldValue`无法正确获取,强制开启了深度监视(`deep`)配置失效

2. 监视`reactive`定义的响应式数据中的某个属性时,设置`deep`配置有效

## watchEffect()函数

立即运行一个函数,同时响应式的追踪依赖,并在依赖更改时重新执行

不用指明监视哪一个属性,监视的回调中用到哪个属性,那就监视哪个属性

`watchEffect`有些像`computed`,但`computed`注重的是计算出来的值(回调函数的返回值),必须要有返回值,而`watchEffect`更注重的是过程(回调函数的函数体),所以不用写返回值

```js
// watchEffect所指的回调中用到的数据只要发生变化,则直接重新执行回调
watchEffect(() => {
    const x1 = sum.value;
    const x2 = person.age;
    console.log(watchEffect配置的回调执行了的);
})
```
`watchEffect`会在`vue3`开发中使用得比较多
如果有多个负效应,不要混写在一起,建议写多个`watchEffect`,如下所示
```js
watchEffect(() => {
  setTimeout(() => console.log(a.val + 1), 1000);
});

watchEffect(() => {
  setTimeout(() => console.log(b.val + 1), 1000);
});。
```
`watchEffect`也可以放在其他生命周期函数内

比如:副作用函数在首次执行时就要调用`DOM`,可以把它放在`onMounted`钩子里
```js
onMounted(() => {
    watchEffect(() => {

    })
})
```
## watch和watchEffect的区别

1. `watch`可以访问新值和旧值,`watchEffect`不能访问

2. `watchEffect`有副作用,`DOM`挂载或更新之前就会触发,需要我们自己去清除副作用

3. `watch`是惰性执行，也就是只有监听的值发生变化的时候才会执行，但是`watchEffect`不同，每次代码加载`watchEffect`都会执行

4. `watch`需要指明监听的对象，也需要指明监听的回调。`watchEffect`不用指明监视哪一个属性,监视的回调函数中用到哪个属性,就监视哪个属性

## 总结

`watch`的使用与`Vue2`差不多,但需要用`vue`当中引入,需要指明监听对象,也需要指明监听回调,而`Vue3`新增了`watchEffect`,它不用指明监视哪一个属性

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />