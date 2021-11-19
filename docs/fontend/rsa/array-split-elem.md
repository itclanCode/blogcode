---
title: 截取第一个符合条件的元素及其以后的元素
autoGroup-1: 数组
---

### 截取第一个符合条件的元素及其以后的元素

```js
function dropElements(arr, fn) {
  while (arr.length && !fn(arr[0])) arr = arr.slice(1);
  return arr;
}
```

