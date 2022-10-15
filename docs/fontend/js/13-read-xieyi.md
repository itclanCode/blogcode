---
title: js如何实现阅读完协议后才可以注册
autoGroup-5: JS特效
---

## js如何实现阅读完协议后才可以注册

## 快速导航

<TOC />

一般注册页面的用户协议放在一个文本域的`textarea`控件内的,我们可以监听文本域的`onscroll`滚动事件

并借助滚动高度(`scrollHeight`)来判断用户是否阅读完文本域中的协议,然后来激活启动用户注册按钮

## 具体实例

<jingdiantexiao-readXieyi />

## html代码

```html
 <textarea readonly="true" id="id-textarea-reg" onscroll="on_scroll_reg(this.id)" name="" id="" cols="30" rows="10">
           阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册阅读完协议才可以单机注册
</textarea>
<button id="id-btn-reg" disabled>用户注册</button>
```
## js代码

```js
function on_scroll_reg(thisid) {
    var textareaReg = document.getElementById(thisid);
    var regBtn = document.getElementById("id-btn-reg");
    if(textareaReg.scrollTop+textareaReg.clientHeight >= textareaReg.scrollHeight) {
        regBtn.disabled = false;
    }
}
```

## 分析

主要是监听文本域`textarea`的`onscroll`滚动事件,并借助滚动高度`scrollHeight`,当文本域的距离顶部的距离与文本域的可视区域的高度大于文本域的滚动高度式

那就说明用户已经看完了协议内容的,然后可以激活启动用户注册按钮的状态

::: tip 提示
**1. 元素,scrollTop**:距离顶部的距离

**2. 元素.clientHeight**: 元素的高度,它是固定的,包括`padding`但不包括`border`、水平滚动条、`margin`的元素的高度,与元素的滚动、位置没有关系，它代表元素自身的高度

**3. 元素.scrollHeight**: 滚动条滚动的高度,代表在有滚动条时，滚动条向下滚动的距离也就是元素顶部被遮住部分的高度,在没有滚动条时,那么它的`scrollTop:0`,可以获取设置一个元素的内容垂直滚动的距离,代表这个元素的顶部到视口可见内容（的顶部）的距离。
:::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />