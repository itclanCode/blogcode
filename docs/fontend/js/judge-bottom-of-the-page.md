---
title: 判断当前位置是否为页面底部
---

## 判断当前位置是否为页面底部

## 快速导航

<TOC />

::: tip 提醒
返回值为true/false
:::

## 具体实例代码

```js
function bottomVisible() {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
}
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />