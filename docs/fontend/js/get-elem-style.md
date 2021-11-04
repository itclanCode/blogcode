---
title: 获取页面元素css样式
autoGroup-4: JS 实用案例技巧
---

## 获取页面元素css样式

## 快速导航

<TOC />

## 实例代码

```javascript
function getStyle(el, ruleName) {
  return getComputedStyle(el, null).getPropertyValue(ruleName)
}
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />