---
title: js如何删除一个元素
autoGroup-5: JS特效
---

## js如何删除一个元素

## 快速导航

<TOC />

## 前言

在网页中,删除一个元素,是一个比较常见的操作,指的是把这个`DOM`元素彻底删除,而不是隐藏,一般来说,使用`removeChild()`函数是最常见的方法

## 具体示例

<jingdiantexiao-deleteElem />

## 具体JavaScript代码

```js
// 删除元素 
function deleteElement() {
    // 获取准备删除的DOM
    var del = document.getElementById("del");
    // 调用删除函数彻底删除
    del.parentNode.removeChild(del);
}
```

## html代码 

```html
<p>
    <input type="button" value="删除元素" onclick="deleteElement()" />
</p>
<!----定义被删除的元素-->
<span id="del">即将被删除的DOM</span>
```

## 注意

由于`removeChild()`函数是对子元素的操作,而不是自身的删除,所以,需要先获取待删除元素的父元素,然后在调用该函数

在上面的示例代码中,是先使用`parentNode`属性获得待删除元素的父元素,再删除目标元素

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />