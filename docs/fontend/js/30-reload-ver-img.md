---
title: Js如何实现避免读取缓存重新加载验证码图片
autoGroup-5: JS特效
---

## Js如何实现避免读取缓存重新加载验证码图片

## 快速导航

<TOC />

## 前言

在用户登录验证的时候,我们经常会用到图形验证码,有时候,因为验证码太复杂,用户可能会看不清

此时,需要给用户提供一个重新加载的功能,而非重新刷新页面,只是局部的更新图形验证码,那这个是怎么实现的呢

## 示例效果

<template>
  <div class="wrap">
    <div class="content">
          <div><img :src="src" width="300" height="200" /></div>
          <div><el-button @click="reloadImg" type="primary">重新加载</el-button></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            src: "https://picsum.photos/1920/1080?random=2"
        }
    },
    mounted() {
       
    },
    methods: {
      reloadImg() {
        this.src = `https://picsum.photos/1920/1080?random=2&time=${new Date().getTime()}`;
        console.log(this.src);
      }
    },
  };
</script>
<style>
  .wrap {
    text-align: center;
  }
</style>

## 具体代码

```js
<template>
  <div class="wrap">
    <div class="content">
          <div><img :src="src" width="300" height="200" /></div>
          <div><el-button @click="reloadImg" type="primary">重新加载</el-button></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            src: "https://picsum.photos/1920/1080?random=2"
        }
    },
    mounted() {
       
    },
    methods: {
      reloadImg() {
        this.src = `https://picsum.photos/1920/1080?random=2&time=${new Date().getTime()}`;
        console.log(this.src);
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
其实,就是给图片后面加上了一个时间戳(`time=${new Date().getTime()}`),保证每次的图片都是最新的,不重复,避免读取缓存的

## 分析

重新加载验证码图片,与动态加载图片的功能类似,重新加载图片也是通过修改图片的`src`属性来实现的,只不过为了避免读取缓存,可以通过添加一个

随机数作为参数的方式保证每次都读取的是最新的图片数据

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
