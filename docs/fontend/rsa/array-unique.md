---
title: JS数组去重
autoGroup-1: 数组
---

## 数组去重

## 快速导航

<TOC />

- ### 方法 1-indexOf 方法去重

将原数组中的元素和结果数组中的元素一一比较

- `indexOf()`方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
  [MDN-indexOf 官网文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

::: details 点击即可查看数组去重

```js
function unique(arr) {
  if (!Array.isArray(arr)) {
    return;
  }
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}
let arrs = ['hello', 'java', 'JavaScript', 'CSS', 'java', 'Es6'];
console.log(unique(arrs));
```

:::

- ### 方法 2-filter 结合 indexOf

::: details 点击即可查看

```js
function unique(arr) {
  var res = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}

var a = ['java', 'linux', 'javaScript', 'linux', 'centos', 'centos'];

console.log(unique(a)); // ["java", "linux", "javaScript", "centos"]
```

:::

- ### 方法 3-Es6 中的拓展运算符

::: details 点击即可查看

```js
function noRepeat(arr) {
  return [...new Set(arr)];
}

var arrs = ['java', 'linux', 'javaScript', 'linux', 'centos', 'centos'];
console.log(noRepeat(arrs));
```

:::

- ### 方法 4-Array.from 结合 new Set

::: details 点击即可查看

```js
function noRepeat(arr) {
  return Array.from(new Set(arr));
}

var arrs = ['java', 'linux', 'javaScript', 'linux', 'centos', 'centos'];
console.log(noRepeat(arrs));
```

:::



<footer-FooterLink :isShareLink="true" :isDaShang="true" />
