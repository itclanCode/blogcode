---
title: 本地存储
---

## 本地存储 cookie-sessionStorage-localStorage

## 快捷导航

<TOC />

## 前言

`Cookie` 用于存储 `web`页面的用户信息

## Cookie

- ### 增加 cookie

::: details 点击即可查看代码

```js
function setCookie(key, value, expiredays) {
  var exdate = new Date(); // 当前时间
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    key +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}
```

:::

- ### 删除 cookie

::: details 点击即可查看代码

```js
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}
```

:::

- ### 查找 cookie

:::details 点击即可查看代码

```js
function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) {
    return arr[2];
  } else {
    return null;
  }
}
```

:::

## localStorage 和 sessionStorage 的增删改查

- ### 存储数据

```js
sessionStorage.setItem('key', 'sessionStorage的值'); // 存储数据
```

- ### 获取指定键名数据

```js
let dataSession = sessionStorage.getItem('key'); //获取指定键名数据
let dataSession2 = sessionStorage.key; //sessionStorage是js对象，也可以使用key的方式来获取值
console.log(dataSession, dataSession2, '获取指定键名数据');
```

- ### 获取 sessionStorage 全部数据

```js
let dataAll = sessionStorage.valueOf(); //获取全部数据
console.log(dataAll, '获取全部数据');
```

- ### 清空 sessionStorage 数据

```js
sessionStorage.clear(); //清空
```

::: tip localStorage
只要将`sessionStorage`替换成`localStorage`即可，他们两个的使用方法完全是一样的
:::

## 三者比较

- ### 生命周期

* `cookie`: 可设置失效时间，没有设置的话，默认是关闭浏览器后失效

* `localStorage`: 除非被手动清除，否则将会永久保存。

* `sessionStorage`： 仅在当前网页会话下有效，关闭页面或浏览器后就会被清除

* ### 存放数据大小

* `cookie`：4KB 左右

* `localStorage`和`sessionStorage`：可以保存 5MB 的信息。

* ### http 请求

* `cookie`：每次都会携带在 HTTP 头中，如果使用`cookie`保存过多数据会带来性能问题

* `localStorage`和`sessionStorage`：仅在客户端（即浏览器）中保存，不参与和服务器的通信

* ### 易用性

* `cookie`：需要程序员自己封装，源生的 Cookie 接口不是很友好

* `localStorage`和`sessionStorage`：原生接口可以接受，也可再次封装来对`Object`和`Array`有更好的支持

## 应用场景

从安全性来说，因为每次`http请求`都会携带`cookie信息`，这样无形中浪费了带宽，所以`cookie`应该尽可能少的使用，另外 cookie 还需要指定作用域，不可以跨域调用,限制比较多。

但是用来识别用户登录来说，`cookie`还是比 storage 更好用的。其他情况下，可以使用 storage，就用 storage。

storage 在存储数据的大小上面秒杀了 cookie，现在基本上很少使用 cookie 了

`localStorage`和`sessionStorage`唯一的差别一个是前者永久保存在浏览器里面,后者是关闭网页就清除了信息。`localStorage`可以用来跨页面传递参数,`sessionStorage`用来保存一些临时的数据，防止用户刷新页面之后丢失了一些参数

## 浏览器支持情况

`localStorage`和`sessionStorage`是`html5`才应用的新特性，可能有些浏览器并不支持，这里要注意。

`cookie`的浏览器支持没有找到，可以通过下面这段代码来判断所使用的浏览器是否支持`cookie`

```js
if(navigator.cookieEnabled) {
  alert("你的浏览器支持cookie功能");//提示浏览器支持cookie
} else {
  alert("你的浏览器不支持cookie");//提示浏览器不支持cookie   }
```
