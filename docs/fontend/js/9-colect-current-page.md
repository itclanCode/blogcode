---
title: js如何实现收藏当前页面
autoGroup-5: JS特效
---

## js如何实现收藏当前页面

## 快速导航

<TOC />

## 前言

浏览器的收藏功能使用`ctrl+D`就可以实现,但是并不是所有的用户都知道这个快捷键,当用户进入你的网站后,引导用户收藏你的网页到浏览器当中

是一个不错的引流方法,以防失联的

## 具体代码

```js
function addFavor () {
     var url = window.location.href
     if (window.sidebar) return true;
     try{
            window.external.addFavorite(url, title);
     } catch (e){
        alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
    }
    return false;
}
```

## html代码

```html
<a href="javascript:void(0)" onclick="addFavor()"></a>
```

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

