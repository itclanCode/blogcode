---
title: vite构建的本地开发环境请求第三方接口时如何解决跨域问题
---

## vite构建的本地开发环境请求第三方接口时如何解决跨域问题

## 快速导航

<TOC />

## 前言

在vite构建的本地开发环境中，请求第三方接口时如何解决跨域问题呢？

本地开发环境,只要请求接口,如果没有做代理配置,都会存在同源策略,跨域的问题,要么在本地做代理,要么在服务器做代理,要么在请求头中设置允许跨域,下面我们来介绍下如何解决vite构建的本地开发环境请求第三方接口时如何解决跨域问题

## 示例效果

<business-viteCors />

## 解决方案

### 1. 配置代理

在`vite.config.js`中配置代理,添加`server`对象,并配置`proxy`代理,当在组件中请求`/api`开头的接口时,会代理到`http://v.juhe.cn`    
```js

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 解决本地接口请求跨域的问题,配置server
  server: {
    https: false,
    // 是否自动在浏览器打开
    open: true,
    cors: true,
    proxy: {
      '/path': {
        target: 'https://v0.yiketianqi.com',    // 接口域名,接口服务器地止
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/path/, '')
    },
   }
 }
})
```
 在单文件组件中,请求接口时,接口的地止以`/path/`开头,就可以了的,如果写完整的地止,会报错
出现跨域情况

```js
import axios from "axios";

async function getWeatherData() {
  try {
       const params = {
              unescape:1,
              version:'v61',
              appid: 69617844,
              appsecret:'Cus4jy7S',
              cityid: this.value
        }
        const response = await this.$axios.get('/path/api',{params});
        console.log(response);  
   catch (error) {
    console.log(error);
   }
}

```

如果不用`axios`,用`fetch`也可以,但是需要转化
```js
fetch("https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=69617844&appsecret=Cus4jy7S").then(res => {
    res.json().then(json => console.log(json))
})
```
在`pc端`和移动端兼容性,返回的response body是readable stream，请求默认不带`cookie`,需要添加配置项(`fetch(url,{credentials:'include'}))`如果涉及到`token`权限验证,那使用`fetch`就不是很合适

不支持abort，不支持超时控制,使用`setTimeout`及`promise.reject`的实现的超时控制并不能阻止请求过程继续在后台运行,会造成流量的良妃

fetch没有办法监测原生请求的进度,而XR却可以

优点:

* 语法简化,语义化
* 基于标准的promise实现,支持async/await
* 更加底层,提供丰富的API
* 脱离了XHR,是ES规范里新的实现方式


::: tip 注意
需要注意的是,在生产环境时,需要关闭代理,不然会报错,因为生产环境时,接口服务器地址是不同的,所以需要关闭代理

在生产环境中应该在web服务器中进行代理,也就是需要后端同学提供支持
:::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />