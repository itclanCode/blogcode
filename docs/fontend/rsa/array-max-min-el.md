---
title: 找出数组中最大和最小的那个值
---

## 快速导航

<TOC />

## 找出一组数组中最大的值

- ### 目标

```js
var arrs = [1, 4, 5, 8, 19, 50];
```

输出

```
最大那个数: 50
```

- ### 方法 1-使用 for 循环

取到数组中第一个元素,然后与该数组中后面的每一个元素进行比较

```js
function arrayMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    max = max < arr[i + 1] ? arr[i + 1] : max;
  }
  return max;
}

var arrs = [1, 4, 5, 8, 19, 50];
console.log(arrayMax(arrs)); // 50
```

- ### 方法 2-es6 拓展运算符

```js
function arrayMax(arr) {
  return Math.max(...arr);
}

var arrs = [1, 4, 5, 8, 19, 50];
console.log(arrayMax(arrs)); // 50
```
