---
title: 原生js与jq如何实现元素的置顶效果
autoGroup-4: 常用片段代码
---

## 原生js与jq如何实现元素的置顶效果

## 快速导航

<TOC />

## 前言

当页面滑动到底部,用户想要回到顶部,为了便于用户体验,往往需要在页面右下角增加一个置顶,回到顶部的操作

那么用原生js与jq分别怎么实现呢

## 原生js实现

:::: tabs type:border-card
::: tab html代码 lazy
```html
<a href="javascript:;" id="btn" title="回到顶部"></a>
```
:::
::: tab javascript lazy
```js
window.onload = function(){
    var obtn = document.getElementById('btn');  //获取回到顶部按钮的ID
    var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
    var timer = null; //定义一个定时器
    var isTop = true; //定义一个布尔值，用于判断是否到达顶部
    window.onscroll = function(){         //滚动条滚动事件
        //获取滚动条的滚动高度,需要做兼容处理
        var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
        if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
            obtn.style.display = 'block';
        }else{         //否则隐藏
            obtn.style.display = 'none';
        }
        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){
            clearInterval(timer);
        }
        isTop = false;
    }
    obtn.onclick = function(){    //回到顶部按钮点击事件
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度，同样需要做兼容处理
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
}
```
:::
::::

当然实现置顶的效果,有很多,最简单的就是,在点击置顶按钮时,设置滚动条距离顶部的值为0就可以了的
```js
document.documentElement.scrollTop = 0
```
但是这种直接回到顶部,比较生硬,是没有动画的,所以加了个定时器时间,让距离顶部的距离,慢慢的减到0,就实现动画了的

## jQ实现元素置顶

用`jq`的话,就几行代码搞定

```js
  // 置顶操作
    $('#btn').click(function() {
        $("html,body").animate({scrollTop: 0})
    })
    // 为窗口绑定scroll事件处理函数
    $(window).scroll(function() {
        // 获取窗口滚动滚动条垂直位置
        var s = $(window).scrollTop()
        // 当滚动大于100时,显示置顶按钮
        if(s > 100) {
            $("#btn").fadeIn();
        }else {
            $("#btn").fadeOut();
        }
    })
```
使用`jq`就是这么简单,也无需考虑兼容性,但是单单为一个效果,引入一个`jq`库,未免有些大才小用,所以,具体的话,在实际中,还需权衡,不引入`jq`库,那么就得用原生`js`去写,相比代码多了点,而使用`jq`,就是写得更少,做得更多,从代码量就看出来了的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />