---
title: js如何修改元素的属性值
autoGroup-5: JS特效
---

## js如何修改元素的属性值

## 快速导航

<TOC />

## 具体示例

<jingdiantexiao-changeAttr />

## 原生js修改DOM属性

```js
// 修改图片的宽度,高度,圆角属性
funciton changeDomAttr() {
    // 获取元素
    var  myImg = document.getElementById("myImg");  // 通过id获取元素
    myImg.width = 900;   // 修改图片的宽度
    myImg.height= 300;  // 修改图片的高度

}
```
`html`模板代码
```html
<p>
    <input type="button" value="修改图片属性" onclick="changeDomAttr()">
</p>

<!--定义图片元素-->
<img id="myImg" src="xxx.jpg" width="100" height="100" >
```


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />