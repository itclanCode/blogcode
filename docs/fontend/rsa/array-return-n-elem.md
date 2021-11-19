---
title: 返回数组中第n个元素
autoGroup-1: 数组
---

## 快速导航

<TOC />

```js
function nthElement(arr, n = 0) {
  return (n >= 0 ? arr.slice(n, n + 1) : arr.slice(n))[0]
}
```