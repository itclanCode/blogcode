---
title: VueJs中的reactive函数
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中的reactive函数

## 快速导航

<TOC />

## 前言

一个基本类型的数据,想要变成响应式数据,那么需要通过`ref`函数包裹,而如果是一个对象的话,那么需要使用`reactive`函数

## reactive可将对象变成响应式

将一个对象类型的数据变为响应式,如果是基本数据类型,那用`ref`

```js
const 代理对象 = reactive(被代理对象)接收一个对象(或数组),返回一个代理器对象(proxy的实例对象简称proxy对象)
const obj = reactive({
    name: 'itclanCoder',
    age: 10
})

console.log(obj.name);
console.log(obj.age);
```
`reactive`定义的响应式数据是深层次的,内部基于`Es6`当中的`proxy`实现,通过代理对象操作源对象内部数据都是响应式的,`reactive`可以直接响应式数组

## Vue2.x的响应式

实现原理

[1]. 对象类型: 通过`Object.defineProperty()`对属性的读取,修改进行拦截,数据劫持
[2]. 数组类型: 通过重写更新数组的一系列方法来实现拦截(对数组的变更方法进行包裹)

```js
Object.definePropety(data,'count', {
    get(){},
    set(){}
})
```
存在的问题:

* 新增属性: 删除属性,界面不会更新
* 直接通过下标修改数组,界面不会自动更新

## Vue3.0的响应式

实现原理

[1]. 通过`proxy(代理)`拦截对象中任意属性的变化,包括:属性值的读写,属性的添加,属性的删除等
[2]. 通过`Refect(反射)`: 对被代理对象的属性进行操作

在`Vue2.0`中,针对直接给对象添加属性,页面并不会更新,需要使用`this.$set(原对象,属性名,属性值)`或者`Vue.set(原对象,属性名,属性值)`

```js
data(){
  return {
    person: {
      name: '张三',
      age: 18,
      hobby: ["吃饭"，'学习']
    }
  },
  methods: {
    addSex() {
      // this.person.sex = '女'  // 这样直接添加属性,页面不会更新
      // 方法1-需要使用this.$set()，给一个属性追加一个属性
      this.$set(this.person,'sex','女')
      // 方法2：解决办法，此方式要引入import Vue from 'vue'
      Vue.set(this.person,'sex','女')
    },
    deleteName() {
      // console.log(this.person.name)
      // delete this.person.name   无法删除属性
      // console.log(this.person.name);
      // 给一个对象移除一个响应式数据使用this.$delete
      this.$delete(this.person,'name');
      // 或者方法2,使用delete
      Vue.delete(this.person,'name');
    }，
    updateHobby() {
      // this.person.hobby[0] = '逛街',无法通过下标方式修改数组项,页面不更新
      // 正确写法
      this.$set(this.person.hobby,0,'逛街');
      // 或者
      Vue.set(this.person.hobby,0,'逛街');
      // 调用数组的重写的方法
      this.person.hobby.splice(0,1,'逛街')
    }
  }
}
```

## Vue3.0响应式

通过proxy(代理)：拦截对象中任意属性的变化,包括:属性值的读写,属性的添加,属性的删除等
通过Reflect(反射):对被代理(源)对象的属性进行操作

```js
const proxy = new Proxy(data, {
  // 拦截读取属性值
  get(target,prop) {
    return Reflect.get(target,prop)
  },
  // 拦截设置属性值或添加新属性
  set（target,prop,value）{
    return Reflect.set(target,prop,value);
  },
  // 拦截删除属性
  deleteProperty(target,prop) {
    return Reflect.deleteProperty(target,prop)
  }
})
proxy.name = 'tom'
```
在`Vue2.0`中

```js
// 源数据
let person = {
  name: '张三',
  age: 18
}

// 模拟Vue2中实现响应式
let p = {};
Object.defineProperty(p,'name',{
  get() {
    return person.name
  },
  set(value) { // 有人修改了name时调用
    console.log('有人修改了Name属性,我发现了,我要去更新界面');
    person.name = value
  }
}) 

Object.defineProperty(p,'age',{
  congigurable: true,  // 可配置属性,如果设置为true，那么可以使用delete删除属性
  get() {
    return person.age
  },
  set(value) { // 有人修改了name时调用
    console.log('有人修改了Name属性,我发现了,我要去更新界面');
    person.age = value
  }
}) 
```
那在`Vue3`的响应式是如何实现的

```js
let person = {
  name:'张三',
  age:18
}

// 模拟Vue3中实现的响应式
const p = new Proxy(person,{  // 第一个参数为原对象,p为代理对象
  // 有人读取p的某个属性时调用
  get(target,propName) {
    console.log('有人读取了p身上的${propName}个属性',target,propName); // b为读取的属性
    //return target[propName]
    return Reflect.get(target,propName)
  },
  // 有人修改p的某个属性,或给p追加某个属性时调用
  set(target,propName,value) {
    console.log(target,propName,value);
    console.log('有人修改了p身上的${propName}属性,我要去更新界面了');
    //target[propName] = value;
    Reflect.set(target,propName,value);
  },
  // 有人删除的某个属性时调用
  // 收集删除的属性
  deleteProperty(target,propName) {
     console.log('有人删除了p身上的${propName}属性,我要去更新界面了');
     //return delete target[propName]
     return Reflect.deleteProperty(target,propName)
  }

})  // 第一个参数是指定的对象
```
写`get`,`set`,`deleteProperty`主要目的是能捕获到操作属性的响应式,而直接删除,添加是静态的,不是响应式的

`proxy`能捕获到操作属性的增删改查操作
```js
Reflect.get(obj,'a')
Reflect.set(obj,'a','4')
Reflect.deleteProperty(obj,a)
Reflect.defineProperty(obj,'c',{})
```
`Reflect`有返回值

## reactive对比ref

从定义数据角度对比

[1]. `ref`用来定义:基本类型数据
[2]. `reactive`用来定义: 对象(或数组)类型数据

备注:`ref`也可以用来定义对象(或数组)类型数据,它内部会自动通过`reactive`转为代理对象

从原理角度对比

`ref`通过`Object.defineProperty()`的`get`与`set`来实现响应式(数据劫持)
`reactive`通过使用`Proxy`来实现响应式(数据劫持)，并通过`Reflect`操作源对象内容的数据

从使用角度对比

`ref`定义的数据：在`js`里面操作数据需要`.value`,读取数据时模板中直接读取不需要`.value`
`reactive`定义的数据：操作数据与读取数据：`均不需要.value`

`reactive`不用直接用于普通的变量，但是一般来说可以放置在代理对象里面去做代理

## 总结

`ref`用于基本数据类型的响应式数据处理,而`reactive`则用于对象或数组复杂响应式数据处理

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />