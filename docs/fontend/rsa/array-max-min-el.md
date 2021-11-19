---
title: 找出数组中最大和最小的那个值
autoGroup-1: 数组
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

::: details 点击即可查看 for 循环普通方法

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

:::

- ### 方法 2-es6 拓展运算符

使用的是 Es6 中的拓展运算符,结合系统内置的`Math`方法,`max`方法实现

::: details 点击即可查看用 Es6 拓展运算符结合 `Math` 的函数实现

```js
function arrayMax(arr) {
  return Math.max(...arr);
}

var arrs = [1, 4, 5, 8, 19, 50];
console.log(arrayMax(arrs)); // 50
```

:::

- ### 方法 3-es5 中的 applay 方法

此方法与上面的类似，同样使用的是`Math`方法

::: details 点击即可查看

```js
function arrayMax(arr) {
  return Math.max.apply(null, arr);
}

var arrs = [1, 4, 5, 8, 19, 50];
console.log(arrayMax(arrs)); // 50
```

:::

## 找出数组中最小的那个值

- ### 方法 1-使用普通方法 for 循环

与比较找出数组中最大值类似,只要把下面条件判断更改一下,便可取出数组中最大和最小的那个值

::: details 点击即可查看

```js
function arrayMin(arr) {
  var min = arrs[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
var arrs = [1, 4, 5, 8, 19, 50, 0];
console.log(arrayMin(arrs)); // 0
```

:::

- ### 方法 2-es6 拓展运算符

::: details 点击即可查看

```js
function arrayMin(arr) {
  return Math.min(...arr);
}
var arrs = [1, 4, 5, 8, 19, 50, 0];
console.log(arrayMin(arrs)); // 0
```

:::

- ### 方法 3-es5 中的 applay 方法

::: details 点击即可查看

```js
function arrayMin(arr) {
  return Math.min.apply(null, arr);
}

var arrs = [1, 4, 5, 8, 19, 50, 0];
console.log(arrayMin(arrs));
```

:::
