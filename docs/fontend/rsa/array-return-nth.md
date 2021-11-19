---
title: 返回数组中下标间隔nth的元素
autoGroup-1: 数组
---

## 返回数组中下标间隔nth的元素

```js
function everyNth(arr, nth) {
  return arr.filter((v, i) => i % nth === nth - 1)
}
```