---
title: 数组中从右删除n个元素
autoGroup-1: 数组
---

## 数组中从右删除n个元素

## 快速导航

<TOC />

## 具体实例代码

```js
function dropRight(arr, n = 0) {
  return n < arr.length ? arr.slice(0, arr.length - n) : [];
}
```

