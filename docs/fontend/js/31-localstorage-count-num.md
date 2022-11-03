---
title: JS如何使用localStorage实现计数器
autoGroup-5: JS特效
---

## JS如何使用localStorage实现计数器

## 快速导航

<TOC />

## 前言

在`HTML5`之前,客户端本地存储只能依赖于`cookie`,它由服务器端在写入的时候就设置好的,`cookie`的效率也很低,而且使用不方便,安全性也不高

自从`html5`出来后,html5带来了全新的本地存储功能,一个是`localStorage`,另一个是`sessionStorage`

前者是只要在前端一写入,就会一直存在,除非手动清除,后者是关闭浏览器的时候就会清除

在开发的时候,很多地方都会用到`localStorage`,和`sessionStorage`比如:表格的分页,一刷新保持当前页的状态,三级路由`Tab`的一个切换激活状态,用到的就是`localStorage`,`sessionStorage`可以用来监测用户是否刷新进入页面

今天使用`localStorage`实现一个计数器的功能

## 具体示例

<template>
  <div class="wrap">
    <div class="content">
          <el-input-number v-model="num" @change="handleChange" :min="1"></el-input-number>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            num: 1,
        }
    },
    mounted() {
      // this.num = localStorage.getItem('number') || 1;
      // 等价于
      this.num = localStorage.number || 1;
    },
    methods: {
      handleChange(val) {
        console.log(val);
        //localStorage.setItem('number',val)
        // 等价于如下
        localStorage.number = val;
      }
    },
  };
</script>
<style>
  .wrap {
    text-align: center;
  }
</style>

以上的加减计数器,使用了`localStorage`,无论是关闭浏览器,还是重新打开一个新的窗口,`localStorage`设置的值,都会永久存储在硬盘里,除非手动删除

一直都是在的,这个在实际开发中,有些地方式有这个需求的,比如:购物车,还有表格分页等等,如果你想持久的保持某个数据状态,那么就可以使用`localStorage`

如下是简易代码

```js
<template>
  <div class="wrap">
    <div class="content">
          <el-input-number v-model="num" @change="handleChange" :min="1"  label="描述文字"></el-input-number>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            num: 1,
        }
    },
    mounted() {
      // this.num = localStorage.getItem('number') || 1;
      // 等价于
      this.num = localStorage.number || 1;
    },
    methods: {
      handleChange(val) {
        console.log(val);
        //localStorage.setItem('number',val)
        // 等价于如下
        localStorage.number = val;
      }
    },
  };
</script>
<style>
  .wrap {
    text-align: center;
  }
</style>
```
主要的核心代码是
设置`localStorage`使用的是`localStorage.setItem('key',val)`
```js
// 常用
localStorage.setItem('key',val)
// 或者,如下所示,这里的key是你自己设置的存储的字段,val是要具体存入localStorage的值
localStorage.key = val;

```
而获取`localStorage`使用的是`localStorage.getItem('key')`
```js
// 常用
localStorage.getItem('key');
// 或者
localStorage.key
```

## 前端浏览器本地存储的方法与区别

### 相同点

在本地(浏览器端)存储数据

### 不同点

`cookie`由服务端写入,而`localStorage`,`sessionStorage`由前端写入

### 生命周期

`cookie`由服务器端在写入的时候就设置好的,而`localStorage`是写入就一直存在,除非手动清除,`sessionStorage`是页面关闭的时候就清除

### 存储大小

`cookie`的存储空间比较小,大概`4KB`,`sessionStorage`,`localStorage`存储空间比较大,大概`5M`

### 同源原则

`cookie`,`sessionStorage`,`LocalStorage`数据都遵循同源原则,其中`sessionStorage`还限制必须是同一个页面

在前端给后端发送请求的时候,会自动携带`cookie`中的数据,但是`sessionStorage`不会 

### 应用场景

`Cookie`一般用于存储登录验证信息`sessionID`或者`token`,`localStorage`常用语存储不易变动的数据,需要持久化的数据,减轻服务器的压力,`sessionStorage`可以用来监测用户是否刷新进入页面



## 总结

使用`localStorage`做持久化存储非常简单,用于存储大量的数据,这一点`cookie`是无法做到的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />