---
title: js如何禁止网页放入框架
autoGroup-5: JS特效
---

## js如何禁止网页放入框架

## 前言

在网上,为了防止网页被随意地引入到别人的框架里,可以通过判断网页是否为最顶层网页来禁止网页被放入框架

禁止嵌入第三方框架的

```js
// 判断当前网页是否为最顶层框架的网页
if(self != top) {
  // 如果不是顶层框架或不是独立窗口打开的本网页,则跳转
  top.location.href  = self.location.href;
}
```
## 难点解析

在窗口框架体系中,`top`变量是`javascript`引用最顶层框架的最直接办法,如果网页直接在窗口中打开,而非一个框架,那么此时`top`变量等同于`window`对象

也等同于`self`对象,所以`top`和`self`是否等同,可以作为网页是否在一个框架中打开的判断标准

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />