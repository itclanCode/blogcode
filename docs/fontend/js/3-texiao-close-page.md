---
title: JS如何动态关闭页面
---

## JS如何动态关闭页面

## 快速导航

<TOC />

## 需求描述

网页有时候不需要等待用户的操作而自动关闭,比如:子窗口的作用已经结束,或者本窗口已经经过过期需要关闭

那么在`javaScript`中是如何去实现这个效果的呢

## 实例

<jingdiantexiao-closeWin />


:::: tabs type:border-card
::: tab 实例描述 lazy
网页有时候不需要等待用户的操作而自动关闭,比如:子窗口的作用已经结束,或者本窗口已经经过过期需要关闭
:::
::: tab 具体JavaScript代码 lazy
```js
// 关闭窗口
function closeWin() {
    window.close();  // 调用window对象的close函数,关闭窗口
}         
```
:::
::: tab 难点剖析 lazy
具体什么时候,关闭窗口是由你具体的业务来决定的,使用`window.close()`即可触发关闭当前窗口
:::
::: tab 特别注意 lazy
这个`window.cloase()`在`chrome`和`firefox`上有兼容问题,直接使用的话,不会起作用,需如下
```js
 window.open('https://coder.itclan.cn','_self').close()
```
或者
```js
 var userAgent = navigator.userAgent;
if (userAgent.indexOf("MSIE") > 0) {
    if (userAgent.indexOf("MSIE 6.0") > 0) {
        window.opener = null;
        window.close();
    } else {
        window.open("", "_top");
        window.top.close();
    }
} else if (userAgent.indexOf("Firefox") != -1 || userAgent.indexOf("Chrome") != -1) {
    window.location.href = "https://coder.itclan.cn "; //火狐默认状态非window.open的页面window.close是无效的
} else {
    window.opener = null;
    window.open("https://coder.itclan.cn", "_self");
    window.close();
}
```
:::
::::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />