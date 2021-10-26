---
title: 移动端页面滑动事件穿透问题
autoGroup-5: 常见问题
---

## 移动端页面滑动事件穿透问题(父子窗体滑动相互影响)及解决方案

## 快速导航

<TOC />

- ### 问题描述

在做 h5 移动端页面时,在一个可滚动的列表页面中打开弹窗,底部的页面理论上是不可滚动的,但是当滑动弹窗时,底部页面会跟随滚动,这就是所谓的页面滚动穿透问题

或者说,在移动端页面,写了一个弹框,当弹框内容比较长,弹框内有滑动效果,在滑动的时候,当你想滑动的是弹框内的窗体内容,但是偶尔外层窗体也会跟着滑动,两个窗体之间会相互影响

这样用户体验非常不好

- ### 产生的原因

弹框的窗体内滑动与外层父级窗体的滑动会有一个先后顺序,一般是弹框窗体滑动,滑动完之后,在滑动页面的时候,就会变成了父窗体滑动(这是浏览器的默认行为),但是这个时候,我不想父窗体滑动,希望用户操作的滑动跟父窗体没有关系,永远停留在自己写的弹框滑动操作中

- ### 具体解决

阻止浏览器的默认行为,当然网上也介绍了很多种解决办法,并非千篇一律

- ### 具体步骤

主要是通过监控弹框的触摸事件和滑动事件

1. 手指触摸开始时,`ontouchstart`记录一个数值(`data.start`),手指触摸移动中`ontouchmove`也记录一个数值(`data.move`),开始时的数值减去触摸中的数值,即`distanceY(data.start-data.move)`,与 0 做比较,用来判断是上拉还是下滑

2. 若`distanceY>0`则为上拉,反之`distanceY<0`则为下拉
3. 监控滑动事件(`onscroll`)是为了获取整个弹窗窗体的长度(`maxDistanceY`)以及当前滑动距离(`scrollTop`)
4. 滑动距离(`scrollTop<=0`),则表示已经下滑到底了,这时可以阻止浏览器默认行为,也就是继续滑动的时候,不让父窗体滑动,反之`scrollTop>0`的时候,也就是下滑的时候开启浏览器默认行为(如果不开启的话,弹框就会划不动了)
5. 用`maxDistanceY(e.target.scrollHeight-e.target.offsetHeight)`表示整个滑动的距离(也可以理解为弹框滑动窗体的长度),当`scrollTop>=maxDistanceY`时则表示已经下滑到底了,这时候又要阻止浏览器默认行为了

- ### 归纳一下

1. 上拉到底,阻止浏览器默认行为
2. 下滑到底,阻止浏览器默认行为
3. 只有阻止了浏览器默认行为,在弹框内滑动第二屏的时候,才不会跟父窗体相互影响

- ### 实现代码
  ::: detail 点击即可查看代码

```js
function stopPration() {
  var scrollTop;
  var distanceY;
  var maxDistanceY;
  var data = { start: 0, move: 0, end: 0 };
  var touchMoveDiv = document.getElementById('scrollPop');
  touchMoveDiv.onscroll = function(ev) {
    // 滚动时
    scrollTop = ev.target.scrollTop;
    maxDistanceY = ev.target.scrollHeight - ev.target.offsetHeight;
  };

  // 手指触摸点击时
  touchMoveDiv.ontouchstart = function(ev) {
    data.start = ev.pageY;
  };

  // 手指触摸滑动时
  touchMoveDiv.ontouchmove = function(ev) {
    data.move = ev.pageY;
    distanceY = data.start - data.move;
    if (distanceY > 0 && scrollTop >= maxDistanceY) {
      ev.preventDefault();
    }
    if (distanceY <= 0) {
      if (scrollTop > 0) {
        return true;
      } else if (scrollTop <= 0 || !scrollTop) {
        ev.preventDefault();
      }
    }
  };
}
```

:::

## 总结

解决这个问题,也可以用一些成熟现成的方案,比如:`[iscroll](https://iiunknown.gitbooks.io/iscroll-5-api-cn/)`,`[batter-scroll滚动](https://better-scroll.github.io/docs/zh-CN/)`,`alloytouch`

## 其他参考文档

- [弹层滚动导致底部页面整体滚动 bug 的解决思路](https://github.com/zuopf769/notebook/blob/master/fe/%E7%A7%BB%E5%8A%A8%E7%AB%AFtochscroll%E6%BB%9A%E5%8A%A8/README.md)
