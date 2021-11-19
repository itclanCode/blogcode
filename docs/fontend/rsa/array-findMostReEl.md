---
title: 找出数组中重复次数最多的元素
autoGroup-1: 数组
---

## 找出数组中重复次数最多的元素

## 快速导航

<TOC />

## 应用场景

对于常规性的热词分析,在一字符串数组中,找出数组项中出现次数最多的那一个元素

或者记录每日网站/app 访问的 ip 数,访问次数最多的用户,找出频率最高的那个 ip,进而进行精准的个性化推送

在前端需要做一些处理:例如出现最多的词高亮显示,根据热词,舆论言情,判断趋势的走向.进而提供商业性的解决方案,措施等

那些热点,八卦,股市,购物 app 内搜索热词,推荐等,或多或少背后都是应用

当然海量的数据,例如:100 百万条数据,全部放到一个数组当中去?这显然是不合适的

数据太大,内存受限,但可以把大文件化成小文件,可以采用`hash_map`方式统计,在采用堆/快速排序

总得来说,处理海量的数据中找出重复次数最多的一个,先做`hash`,然后映射为小文件,然后读取文件中重复次数最多的一个,并记录重复次数

本示例并不考虑海量数据

## 示例

```js
let hotWords = [
  'JavaScript',
  'html',
  'css',
  'Java',
  'Js',
  'JS',
  'JS',
  'react',
  'vue',
];

// 出现次数最多的JS
```

### 方法 1-常规方法-循环遍历比较

::: details 点击即可查看数组中重复最多的那个数

```js
function hightFrequency(arr) {
  var result = [0, 0];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, count = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        ++count;
      }
    }
    if (count > result[0]) {
      result[0] = count;
      result[1] = arr[i];
    } else if (count == result[0] && result[1] < arr[i]) {
      result[1] = arr[i];
    }
  }
  return `热词${result[1]},出现了${result[0]}次`;
}

let hotWords = [
  'JavaScript',
  'html',
  'css',
  'Java',
  'Js',
  'Js',
  'Js',
  'react',
  'vue',
];
console.log(hightFrequency(hotWords)); //热词Js,出现了3次
```

:::

### 方法 2-用对象来处理-将元素赋值到属性上-判断之前有没有这个属性

对象属性同样可以用来做数组去重，但是会将 `number`,`NaN`,`undefined`,`null`，变为字符串形式，因为对象的属性名就是一个字符串

::: details 点击即可查看代码

```js
const hightFrequency = function(arrs) {
  var [obj, max, elm] = [{}, 1, '']; // 数组解构
  arrs.forEach((value) => {
    // 对传入的数组值进行遍历
    if (obj[value]) {
      // 已经有值了 就把值+1
      obj[value]++;
      if (obj[value] > max) {
        // 判断重复次数有没有超过当前最高的
        max = obj[value]; // 重复多少次
        elm = value; // el为当前元素
      }
    } else {
      // 没有值 就初始化一个值
      obj[value] = 1;
    }
  });
  return `关键词${elm},出现了${max}次`;
};

let hotWords = [
  'JavaScript',
  'html',
  'css',
  'Java',
  'Js',
  'Js',
  'Js',
  'react',
  'vue',
];
console.log(hightFrequency(hotWords)); // 关键词Js,出现了3次
```

:::

### 方法 3-

::: details 点击即可查看代码

```js
function countOccurrences(arr, value) {
  let result = arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0);
  return result;
}

var arrs = [1, 2, 3, 1, 2, 1, 4, 5, 1, 2, 4, 5];
countOccurrences(arrs, 1); // 4
```

:::

### 检查数组中某元素出现的次数

```js
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
}
```



<footer-FooterLink :isShareLink="true" :isDaShang="true" />
