---
title: JS实现自动刷新页面
---

## JS实现自动刷新页面

## 快速导航

<TOC />

<jingdiantexiao-autoRefresh />


## 实例

:::: tabs type:border-card
::: tab 实例描述 lazy
在一些具有实效特点的网站,可视化数据实时大屏,比如:股票价格,外汇牌价,全国疫情实时数据统计等
定时地自动刷新网页,把最新的数据展示给用户,这样的效果在javaScript中如何实现呢
在`JavaScript`里有一个`reload`函数可以实现这样的效果
:::
::: tab 具体JavaScript代码 lazy
```js
// 自动刷新函数
function autoRefresh() {
    window.location.reload(); // 调用location的reload函数
}
setTimeout(() => {
   autoRefresh();
},3000)                 // 3秒钟,自动刷新一次
```
:::
::: tab 难点剖析 lazy
实现这个效果,需要知道`reload()`函数的作用是让浏览器刷新当前网页,其次网页的自动刷新离不开一个定时器,也就是`setTimeout()`函数,这个函数
属于`window`对象,它也是顶层对象,所以直接写函数名称就能被调用,不需要写完整的`window.setTimeout()`,接收两个参数,第一个是回调函数,具体要执行的代码，第二个是间隔的时间,单位为毫秒,上面示例中是3秒执行一次
:::
::: tab 额外拓展 lazy
有一种最简单的方式就是直接用一行代码就可以实现,使用`meta`标签即可实现,还可以实现自动跳转到某个指定的网站上
```js
<meta http-equiv="refresh" content="5;url=https://tv.itclan.cn/"> 
```
:::
::::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

