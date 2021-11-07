---
title: 复制文本
autoGroup-4: JS 实用案例技巧
---

## 快速导航

<TOC />

## 方式1-复制文本

```js
function copy(str) {
  const el = document.createElement('textarea'); // 创建一个textarea元素
  el.value = str
  el.setAttribute('readonly', '')  // 设置只读属性
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  el.style.top = '-9999px'
  document.body.appendChild(el)
  const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}
```

## 方式2-复制文本

使用clipboard.js

```html
<dd>对360画报屏保的使用体验、内容素材进行分享评论，例如:<strong class="template-info" id="template-info">360画报屏保，自带大量精美高清图片、可支持一键上网，设为壁纸等功能;<br />【360画报开启方式:打开360安全浏览器-设置选项页-实验室-360画报】</strong><button class="copy-text" id="copy-text" data-clipboard-action="copy" data-clipboard-target="#template-info">一键复制</button></dd>
```
```js
<script src="https://lib.baomitu.com/clipboard.js/2.0.8/clipboard.min.js"></script>
var clipboard = new ClipboardJS('#copy-text');

clipboard.on('success', function(e) {
    e.clearSelection()
})
```
<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />