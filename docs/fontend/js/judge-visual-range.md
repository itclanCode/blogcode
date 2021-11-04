---
title: 判断元素是否在可视范围内
autoGroup-4: JS 实用案例技巧
---

## 判断元素是否在可视范围内

## 快速导航

<TOC />

## 实例代码

```javascript
function elementIsVisibleInViewport(el, partiallyVisible = false) {
  const {top, left, bottom, right} = el.getBoundingClientRect()

  return partiallyVisible ?
    ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
    top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}
```
::: tip 提示
partiallyVisible为是否为完全可见
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />