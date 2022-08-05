---
title: vuejs中路由器的两种模式-哈希模式与历史模式
autoGroup-3: Vue基础
---

## vuejs中路由器的两种模式-哈希模式与历史模式

## 快速导航

<TOC />

## 前言

路由器分别有两种模式,一种是`hash`模式,另一种是`history`模式,在使用`vue-cli`以及`vue-router`默认搭建的`vue`项目,如果不做特殊的配置,默认就是`hash`模式

这两种模式各有自己的优势,但他们的使用区别,却多多少少都会在面试当中被问到

今天就一起来学习下

## 哈希模式(hash)

`vue-router`默认`hash`模式,使用`url`的哈希(`hash`)来模拟一个完整的`URL`,当`URL`改变时,页面不会重新加载

如下所示
```js
http://localhost/#home
```
**特点**: `#`号后面的参数不会传送给服务器,兼容性好,不会作为路径的一部分发送给服务器,也就是它不会包括在`HTTP`请求体中,对后端完全没有影响,只是我们前端同学自己玩

页面刷新时,会停留在当前页面,不会重新加载

如果觉得`hash`路径很丑,不简洁,我们可以用路由的`history`模式,这种模式充分利用`history.pushState API`或`replaceState`,来完成,`url`跳转而无需重新加载页面

## 历史模式

`history`模式:在实例化配置对象中添加`mode`模式,值为`history`就可以了的
经过改造后,`hash`模式就会变成`history`模式
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

这两种方式的使用都是没啥问题的,如果你在意浏览器`url`的颜值,`#`符号掺杂在`url`里看起来确实有些不优雅

如果你想`url`更好看,那么就使用`history`模式

但是:在`hash`模式下,使用`hash`符号之前的内容会被包含在请求体中,`#`号后面的不会发送给服务器

而`history`模式下,前端的`URL`必须和实际向后端发起请求的`URL`保持一致

如:`https://itclan.cn/fontend/id`,如果后端缺少没有对`/fontend/id`的路由处理,那么它将返回`404`错误

如果你想要支持`history`模式,那么需要后端同学支持,想要彻底解决404的问题,需要与后端同学协商,**因为需要后端与前端路由做匹配**

在服务端增加一个覆盖所有情况的时候的候选资源,如果`url`匹配不到任何静态资源,应该返回一个首页页面

如果出现404,容易让用户觉得这是一个Bug

## 如何解决前台刷新页面404问题

解决这个问题:如果你用的是`Node`做后端服务,那么在`Node`后台中可以加入一个中间件比如：`connect-history-api-fallback`即可解决这种404问题

如果是`java`或`php`,找后端同学,让后端路由与前端路由做匹配,或是用`Ngnix`做中间代理

如下这段简易的`Node`服务代码，可以命名为`server.js`,同时安装`express`以及`connect-history-api-fallback`中间件

启动后端服务执行命令`node server.js`

```js
const express = require('express');
const history = require('connect-history-api-fallback')

const app = express()
app.use(history())
app.use(express.static(__dirname+'/static'));


app.listen(5005,(err)=> {
  if（！err）consle.log('服务器启动成功了')
})
```
把前端打包生成的`dist`文件内的代码,放到`static`中,通过这一操作,即可解决刷新页面,`404`的问题

## 对单页面spa的应用理解

我们的前端使用的`vue-router`中的两种模式,就是单页面应用,整个应用只有一个`router`路由器,是可以通过`$router`属性获取到

也就是说,整个应用只有一个完整的页面,同时,点击页面中的导航链接,不会刷新页面,只会是页面的局部更新

而我们页面中的数据,往往需要通过`ajax`请求来获取

现在开发的新项目,都是前后端分离,基本上都是单页面应用

## 总结

前端路由,有两种模式,一种是`hash`模式,另一种是`history`模式,其中`hash`模式是默认模式,`#`后面的不会发送给服务端,不会重新刷新加载页面,而`history`模式,`url`虽然比较好看,但是想要完整支持,需要后端同学提供支持,后端路由与前端的路由需要做匹配

否则部署到线上,一刷新页面,会出现`404`的问题

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />