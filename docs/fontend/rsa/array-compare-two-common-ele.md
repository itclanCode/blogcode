---
title: 对比两个数组并且返回相同的元素
autoGroup-1: 数组
---

## 快速导航

<TOC />

## 具体实现

::: details 点击即可查看

```js
function diffrence(arrA, arrB) {
  var result = arrA.filter((v) => arrB.includes(v));
  return result;
}

var arrA = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11];
var arrB = [6, 8, 9, 10, 11, 2];

diffrence(arrA, arrB); 
```

:::

- `fitler()`: 经过 `filter` 函数后会创建一个新的数组, 回调函数返回的结果一个 `boolean`值,若结果为真,则返回匹配的项,若为假,则返回一个空数组，它不会改变原有数组,返回的是过滤后的新数组
- `includes()`方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回`false`