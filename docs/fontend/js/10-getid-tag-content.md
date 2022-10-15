---
title: js如何通过id获取网页中的标签的内容
autoGroup-5: JS特效
---

## js如何通过id获取网页中的标签的内容

## 前言

在`vue`,`React`,`Angular`框架之前,对于实现页面的交互,操作`DOM`是一个比较常见的操作,`DOM`全称是`Document Object Model`文档对象模型,用来处理可拓展标记语言(`html`)的标准接口

`Js`作为浏览器中应用最广泛的脚本语言,用它来访问和修改一个文档的内容和结构是最佳的选择

在网页里,`id`属性是一个元素的标识符,所有的网页元素都可以拥有这个`id`属性,并且在页面中是唯一的,通过`id`来获取网页中一个元素的`DOM`是最常见的定位元素的方法

:::: tabs type:border-card
::: tab 实例描述 lazy
在网页里,`id`属性是一个元素的标识符,所有的网页元素都可以拥有这个`id`属性,并且在页面中是唯一的,通过`id`来获取网页中一个元素的`DOM`是最常见的定位元素的方法
:::
::: tab html lazy
```html
<a href="javascript:;" id="myLink">链接</a>
<span id="mySpan">文字</span>
```
:::
::: tab javascript lazy
```js
// 获取DOM的文字内容
function getDomText() {
    // 获取链接的DOM
    var myLink = document.getElementById("myLink");
    // 获取span的id
    var mySpan = document.getElementById("mySpan");
    var str = '';  // 定义拼接字符变量
    str += myLink.innerHTML;   // 加入链接的文本,主要是通过innerHTML这个属性就可以获取标签的文本内容
    str + = mySpan.innerHTML;  // 加入span的文本
    alert("两个DOM的内容是"+str);
    // 如果不用str空字符串拼接,用Es6当中的模板字符串也是可以的
    alert(`${myLink.innerHTMl}+${mySpan.innerHTML}`);
}
```
:::
::: tab 实例分析 lazy
主要是通过`getElementById`这个方法获取DOM元素,以及通过该`DOM`对象的`innerHTML`即可获取元素的文本内容，`DOM`下面是有很多属性和方法的
:::
::::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
