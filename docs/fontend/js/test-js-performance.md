---
title: 如何简单测试一段 js 代码的性能
---

## 如何简单测试一段 js 代码的性能

## 快速导航

<TOC />

## 前言

在 javaScript 中,平常都习以为常的提到性能优化,但是判断性能优化是否得到提升,口说无凭,测量某段代码执行速度最简单的方法,就是测量开始代码开始执行与执行结束时计算时间之间的差异进行计时

代码体积越小,执行代码速度时间越短,则效率越高

## 测量函数执行时间

```js
var startTime, endTime, duration;

// 我们要计量的执行函数
function doSomething() {
  var index = 0,
    length = 100000000,
    counter = 0;

  for (; index < length; index++) {
    counter += index;
  }
}

// 在函数开始执行之时,将初始时间设置为此刻的当前日期和时间
startTime = new Date();

// 执行函数
doSomething();

// 执行结束后,设置结束时间为当前日期和时间
endTime = new Date();
// 耗时为结束时间减去开始时间,两者均表示为毫秒,即js的计时的最小精度
duration = endTime.getTime() - startTime.getTime();
console.log(duration);
```
