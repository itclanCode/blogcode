---
title: JS如何在数组的末尾处加入和移除元素
autoGroup-5: JS特效
---

## JS如何在数组的末尾处加入和移除元素

## 快速导航

<TOC />

## 前言

在数组初始化后,有时候,需要往数组的末尾添加数据,或移除数组中末尾的数据,那在`JS`当中是如何实现的?

## 示例如下

<jingdiantexiao-arrPushPop />


## 原生Js实现

往数组里追加元素使用的是`push()`方法,而删除数组的最后一个元素,使用的是`pop()`方法,从后往前删

具体代码如下所示

```js
var arr = ["https://coder.itclan.cn","https://itclan.cn","https://short.itclan.cn"]

function addElem() {
    // 获取新元素值dom
    var inputElemVal = document.getElementById('input').value;
    arr.push(inputElemVal);  // 使用push()方法向数组的末尾添加一个元素
}

// 删除一个元素
function deleteElem() {
    arr.pop();  // 使用数组的pop()方法向数组的末尾删除一个元素
}
```
如下是`html`代码
```html
<input type="text" name="elm" value="" id="input" />
<input type="button"  value="添加" onclick="addElem()" />
<input type="button"  value="删除" onclick="deleteElem()" />
```

## 总结

`push()`和`pop()`是数组的两个很常用的方法,前者是往数组末尾追加元素,后者是删除末尾元素，使用这两个函数调用后,数组的长度会发生变化

会影响原数组


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />