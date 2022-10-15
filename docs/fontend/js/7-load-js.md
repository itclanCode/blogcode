---
title: 如何动态的在网页里加载插入js脚本
autoGroup-5: JS特效
---

## 如何动态的在网页里加载插入js脚本

## 快速导航

<TOC />

## 前言

把一些逻辑独立的`js`脚本文件单独加载,是一种很常见的`js`动态加载技术,这样的好处有很多,可以减少不必要的`js`脚本的文件加载,以提高网页浏览的速度

在优化代码里,很多都是通过异步加载去优化项目的,那么动态的去加载`js`就变得非常重要了的

实现这个目的也很简单,如果你有接触过百度统计的代码,它就是动态的创建`js`然后插入到我们的网页当中去的

`Ajax`技术就是:在用户不刷新页面的情况下,动态的插入`js`到我们的页面当中实现的

## 具体实例代码如下所示

```js
// 动态的加载js，例如:外部的js,myjs.js 
function loadJs() {
    // 获取html的头部dom 
    var theHead = document.getElementsByTagName('head').item(0);
    // 创建脚本的dom对象实例,创建script
    var myScript = document.createElement('script');
    // 给script添加属性
    myScript.src = './myjs.js'  // 指定脚本路径,路径可以是绝对路径,也可以是相对路径
    myScript.type= 'text/javascript';  // 指定脚本类型,其实不写也没事,默认就是js
    myScript.defer = true;    // 程序下载完后在解析和执行
    theHead.appendChild(myScript); // 把dom挂载到头部
}

```
`html`代码如下
```html
<input type="button" value="动态的加载js" onclick="loadJs()" />
```

## 解析

上面就是动态的创建`script`的方式来动态加载`js`,这也是一种比较常见的方式,创建一个`js`的`DOM`对象,然后为它配置好脚本的来源地址和类型,最后把它挂载到网页的头部,也就是`head`部分

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />