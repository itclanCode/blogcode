---
title: JS如何实现页面的前进与后退
---

## JS如何实现页面的前进与后退

## 快速导航

<TOC />

## 前言

在浏览一些文档形式的网页是,比如小说阅读器,往往需要给用户提供这样的功能,实现前进和后退,用户通过单击按钮达到访问之前的网页和之后的网页的功能

## 示例效果

<jingdiantexiao-forwardBack />

:::: tabs type:border-card
::: tab 实例描述 lazy
在浏览一些文档形式的网页是,比如小说阅读器,往往需要给用户提供这样的功能,实现前进和后退,用户通过单击按钮达到访问之前的网页和之后的网页的功能
:::
::: tab 具体JavaScript代码 lazy
```js
// 前进
function goForward() {
  window.history.forward();  // 到之前的网页
}
// 后退
function goBack() {
  window.history.back();    // 到之后的网页
}               
```
:::
::: tab 难点剖析 lazy
要知道页面可以前进和后退,就必须要知道浏览器的浏览历史(`history`)概念,浏览器在访问网页时,会把访问的记录按照事件顺序进行排列,而`forward()`和`back()`函数就是负责在浏览器中找到前一个网页和后一个网页
:::
::: tab 额外拓展 lazy
在`history`对象里,还有一个`go()`函数,其中有一个整型的参数,当参数为正数时标识前进`N`页,当为负数时,则表示后退N页,比如`go(-1)`的效果与`back()`函数的效果是一样的
:::
::::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

