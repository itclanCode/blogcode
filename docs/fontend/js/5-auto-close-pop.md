---
title: js如何若干秒后不操作自动关闭窗口
---

## js如何若干秒后不操作自动关闭窗口

## 实例描述

一些对安全要求比较高的网站,如银联和支付平台界面,为了保证用户数据的安全，往往会提供这样的功能,如果用户在累计一段时间内没有进行任何操作,就会自动退出登录或直接关闭窗口

:::: tabs type:border-card
::: tab 实例描述 lazy
一些对安全要求比较高的网站,如银联和支付平台界面,为了保证用户数据的安全，往往会提供这样的功能,如果用户在累计一段时间内没有进行任何操作,就会自动退出登录或直接关闭窗口
:::
::: tab html lazy
```html
<body style="text-align: center" onclick='clickBody()'>
    如果用户10秒钟不但及网页,本窗口将自动关闭
</body>
```
:::
::: tab javascript lazy
```js
var willClose = true;  // 定义一个是否关闭的全局变量
// 单击网页
function clickBody() {
    willClose = false; // 单击网页以后,则把变量置为false
}

setInterval(function() {
   if(willClose) {     // 判断是否需要关闭
    window.close();   // 关闭窗口
   }else {            // 如果单击过,重新开始计算
    willClose = true; 
   }
},10000)
```
:::
::: tab 实例分析 lazy
`window`对象包含一个`setInterval()`函数,可以用来记时和进行重复操作,在本实例中,直接把一个匿名函数作为它的第1个参数,第2个参数则表示10秒后重复执行第1个参数所定义的函数,另外,如果用户操作过网页则不能自动关闭窗口,因此定义了一个`willClose`的变量,它起到一个用户操作和关闭窗口交互的纽带作用
:::
::::


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />