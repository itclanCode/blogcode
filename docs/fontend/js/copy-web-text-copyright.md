---
title: 如何在复制网站文字时添加上版权申明
autoGroup-4: 常用片段代码
---

## 如何在复制网站文字时添加上版权申明

## 快速导航

<TOC />

## 前言

有时,自己辛辛苦苦写的文章,却被一些网站自动采集,巴拉过去,甚至都不声明下来源

如何在别人复制你网站上文字时,添加上版权声明呢,就像`itclanCoder`网站,复制网站上的文字时,当复制文章超过一定的长度时,就携带版权声明

其实,非常简单,几行代码就可以搞定

## 具体代码如下所示

```js
/** 监听copy事件 */
document.addEventListener('copy', function(e) {
  //取消默认事件，才能修改复制的值
  e.preventDefault();
  //复制的内容
  var copyTxt;
  if (window.getSelection(0).toString().length >= 80) {
    copyTxt = `${window
      .getSelection(0)
      .toString()}\n\n作者:随笔川迹\n站长:itclanCoder\n公众号:itclanCoder\n链接: ${
      window.location.href
    }\n来源: itclanCoder\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请附上原文出处及本链接。`;
  } else {
    copyTxt = window.getSelection(0).toString();
  }
  if (e.clipboardData) {
    e.clipboardData.setData('text/plain', copyTxt);
  } else if (window.clipboardData) {
    return window.clipboardData.setData('text', copyTxt);
  }
});
```

通过原生的`copy`事件,就可以实现,同时阻止事件的默认行为,结合`window.getSelection(0).toString()`即可实现,其中`\n`代表的时换行

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
