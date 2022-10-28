---
title: Js如何实现当网页超过一屏时导航菜单始终置顶-吸顶盒效果
autoGroup-5: JS特效
---

## Js如何实现当网页超过一屏时导航菜单始终置顶-吸顶盒效果

## 快速导航

<TOC />

## 前言

我们平时在逛一些电商网站时,无论是首页还是详情页,通常会有一个导航菜单石红跟随着页面,无论是页面滚动到中间还是底部

这是为了方便用户查看商品的各类信息或提交订单购物

也就是吸顶盒效果,那这个效果是怎么实现的?


## 原生js

如下是原生`js`

```js
// 初始化函数
function init() {
    // 获取顶部元素的DOM
    var wrap = document.getElementById("wrap");
    var scrollTop = 0;  // 初始化为顶部
    // 监听页面滚动事件
    window.onscroll = function() {
        // 获取当前的滚动距离
        scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // 当超过150像素时,把顶部的导航菜单设置固定
        if(scrollTop > 150) {
            wrap.className = "fix-top";  // 固定顶部的样式
        }else {
            wrap.className = 'wrap';  // 恢复原有的样式
        }
    }
}
```
如下是`css`样式
```css
* {
    margin:0;
    padding:0;
}

.wrap {
    width: 100%;
}
.hd {
    width: 980px;
    height: 150px;
    margin: 0 auto;
    background: red;
}

.bd {
    width:980px;
    height: 40px;
    margin: 0 auto;
    background: blue;
}

.fix-top {
    position:fixed;
    width: 100%;
}

.fix-top .hd {
    display:none;
}
```
如下是`html`代码
```html
<body style="height:1000px">
    <div id="wrap" class="wrap">
     <div class="hd"></div>
     <div class="bd"></div>
    </div>
</body>

```

## 总结

要想实现一个层始终固定在屏幕的顶部或底部,就不得不使用css的`positon`样式,其次,在来控制网页是不是需要把导航菜单置顶,因为当网页内容的浏览没有滑出导航菜单的可见范围时,是没有必要把导航菜单置顶的,因此,在代码中就需要监听网页的滚动跳滑动事件

当超过一定的范围以后,才有必要为导航菜单设置固定的`position`样式

其实也有另外一种解决办法,就是导航栏始终是固定在顶部,当拉动滚动条时到一定的范围,就改变背景色,也是一种解决办法

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />