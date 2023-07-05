---
title: 使用css一行代码或JS实现元素的平滑置顶
autoGroup-2: 常见实例技巧
---


## 使用css一行代码或JS实现元素的平滑置顶

## 快速导航

<TOC />

## 前言

在很多网站当中，都有置顶的功能，很多同学首先想到的就是使用`Js`去实现,其实,用简单的css也是可以搞定的

## CSS实现

在`html`,`body`或滚动元素内容

```css
html,body {
    scroll-behavior:smooth;
}

```
或使用js
```js
元素.onclick = function() {
   window.scrollTo({
         top: 0,
         behavior:"smooth"  // smooth,平滑滚动,instant,瞬间
  }
}

```

## 注意事项

在`Vue`项目里,不要使用`window.scrollTop`,在`Vue`项目里,会显示`window.scrollTop is not function`,原生应用里可以使用

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
