---
title: js如何动态创建网页新元素
autoGroup-5: JS特效
---

## js如何动态创建网页新元素

## 快速导航

<TOC />

## 前言

动态的创建新的`DOM`元素,是`js`操作网页对象的重要手段

## 具体示例

<jingdiantexiao-createElem />

## 实现代码

```js
// 创建新元素
function createNewElements() {
    // 使用innerHTML创建新元素
    var p1 = document.getElementById('p1');
    // 设置innerHTML内存
    p1.innerHTML = "<span>我的dom文本1</span>"

    // 使用createElement来创建新元素
    var span = document.createElement("span");
    // 为新元素内容创建一个文本节点
    span.appendChild(document.createTextNode("我的dom文本2"))
    var p2 = document.getElementById("p2");
    // 挂载
    p2.appendChild(span);
}
```

## html代码

```html
<p>
    <input type="button" value="创建新元素" onclick="createElements()" />
</p>
<!--定义新元素挂载的容器元素---->
<p id="p1"></p>
<p id="p2"></p>
```

## 分析

创建新元素,有两种办法,一种是直接修改父级元素的`innerHTML`元素,第二种是使用`createElement()`函数来创建,再用`appendChild()`函数进行`DOM`元素的挂载

第一种方法用起来比较简单,也很好理解,但是需要修改整个父元素所包含的HTML内容,如果父元素原先就包含了一些`HTML`内容,在进行DOM挂载的话,执行效率会比较低

第二种方法比较灵活,效率比较高,但是使用起来比较复杂一些

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

