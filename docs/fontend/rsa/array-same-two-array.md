---
title: 返回两个数组中相同的元素
autoGroup-1: 数组
---

## 返回两个数组中相同的元素

## 快速导航

<TOC />

## 具体实现

::: details 点击即可查看代码

```js
function intersection(arr1, arr2) {
  var result = arr2.filter((v) => arr1.includes(v));
  return result;
}

var arr1 = [1, 2, 3, 1, 2, 3, 4, 5];
var arr2 = [2, 3, 4, 5, 2, 3, 8];
intersection(arr1, arr2); //  [2, 3, 4, 5, 2, 3]
```

:::

- `fitler()`: 经过 `filter` 函数后会创建一个新的数组, 回调函数返回的结果一个 `boolean`值,若结果为真,则返回匹配的项,若为假,则返回一个空数组，它不会改变原有数组,返回的是过滤后的新数组
- `includes()`方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回`false`
