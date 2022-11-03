---
title: JS如何使用sessionStorage实现计数器
autoGroup-5: JS特效
---

## JS如何使用sessionStorage实现计数器

## 快速导航

<TOC />

## 前言

`sessionStorage`也是本地存储的一种方式,有时候,是需要利用`sessionStorage`来保存某些数据,比如:表格的分页,还有购物车的商品信息,判断是不是首次进入页面等

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
      // this.num = sessionStorage.getItem('number') || 1;
      // 等价于
      this.num = sessionStorage.number || 1;
    },
    methods: {
      handleChange(val) {
        console.log(val);
        //sessionStorage.setItem('number',val)
        // 等价于如下
        sessionStorage.number = val;
      }
    },
  };
</script>
<style>
  .wrap {
    text-align: center;
  }
</style>

以上的加减计数器,使用了`sessionStorage`,设置了`sessionStorage`只在当前窗口有效,当关闭窗口时,`sessionStorage`就失效了的,这一点是有别于`localStorage`永久存储的,除非手动删除,而`sessionStorage`关闭了窗口,`sessionStorage`设置的值就会消失

API的使用上,两者都是相似的,设置`sessionStorage`使用的是`sessionStorage.setItem('key',val)`,而获取`sessionStorage`的值是使用

`sessionStorage.getItem('key')`

具体示例代码如下所示

```html
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
      // this.num = sessionStorage.getItem('number') || 1;
      // 等价于
      this.num = sessionStorage.number || 1;
    },
    methods: {
      handleChange(val) {
        console.log(val);
        //sessionStorage.setItem('number',val)
        // 等价于如下
        sessionStorage.number = val;
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
设置`sessionStorage`使用的是`sessionStorage.setItem('key',val)`
```js
// 常用
sessionStorage.setItem('key',val)
// 或者,如下所示,这里的key是你自己设置的存储的字段,val是要具体存入sessionStorage的值
sessionStorage.key = val;

```
而获取`sessionStorage`使用的是`sessionStorage.getItem('key')`
```js
// 常用
sessionStorage.getItem('key');
// 或者
sessionStorage.key
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

使用`sessionStorage`与`localStorage`的用法相似,`sessionStorage`,是一种临时存储,可以用于存储大量的数据,只不过它是针对当前的`session`会话临时存储的,当关闭了浏览器窗口以后,这个数据就丢失了的

也就是不同的新标签页,`sessionStorage`是相互独立的,只要关闭了当前浏览器窗口,那么设置的`sessionStorage`就会丢失

如果需要永久性存储,保持某个数据的状态,即使关闭浏览器,也存在,那么就用`localStorage`,如果只需要临时存储,那么就用`sessionStorage`

本文只是用一个加减数字,作为演示的,在实际开发中,多多熟悉下就可以了的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />