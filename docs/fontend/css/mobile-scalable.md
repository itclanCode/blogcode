---
title: 移动端下禁止用户页面缩放
autoGroup-1: 移动端
---

## 移动端下禁止用户页面缩放

## 快速导航

<TOC />

## 方式1-使用meta标签

在`header`头部使用meta标签
```js
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
```

## 方式2-使用js实现

```js
// 移动端下,禁止用户缩放
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});
document.addEventListener('gesturestart', function(event) {
    event.preventDefault();
});
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
