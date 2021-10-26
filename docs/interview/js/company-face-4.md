---
title: Js 笔试真题-4
---

## 快速导航

<TOC />

## 第 1 题-函数柯里化

实现一个相加函数 add,使 add(3)(4) 的返回值为 7

- ### 常规写法

::: details 点击即可查看

```js
function add(a, b) {
  return a + b;
}

add(3, 4);
```

:::

- ### 函数柯里化

::: details 点击即可查看

```js
function add (x) {
  retrun function(y) {
    return x+y;
  }
}

add(3)(4);
```

:::

## 第 2 题-封装一个函数-输入任何数字-进行千分位格式化

如 1234567=>1,234,567

## 第 3 题-实现一个表单校验函数,长度为 8-10 位，必须包含数字,字母,且只能包含数字和字母

## 第 4 题-基础概念

1. `http`协议的特点
2. `http`报文的组成部分
3. `http`方法,`post`和`get`区别
4. `http`状态码
5. 怎么理解持久化连接和管线化

## 第 5 题-把字符串`hello`变成['h','e','l','l','o']的多种方法

## 第 6 题-原型链的理解

判断每个`console`输出值为`true`或`false`

```js
function Person() {
  this.name = 1;
}

var p1 = new Person();
Person.prototype.name = 2;
console.log(p1.prototype === Object);
console.log(p1._proto_ === object);
console.log(p1._proto_._proto_ === Object.prototype);
var o = {
  name: 3,
};
Person.prototype = o;
console.log(Person.prototype.isPrototypeOf(p1));
var p2 = new Person();
console.log(p2.constructor === Person);
```

## 第 7 题-你对闭包的理解,优缺点

## 第 8 题-写一个方法-输出目标数组中只有唯一两数之和等于目标值的下标所组成的数组

示例：输入:[0,3,4,7,1,6,-5]
目标值: 8 输出:[3,4]

## 第 9 题-用冒泡排序,对下列数组进行排序

输入:[2,5,4,3,1]
输出:[1,2,3,4,5]

## 第 10 题-写出你曾今用过的一种查找算法,查找数组中的目标值

`[1,2,5,6,6,7,1,2,3,4,-5,0,4,-2,-3,2]`,比如寻找`7`的算法

## 第 11 题-写出下面的顺序结果

```js
console.log('1');
setTimeout(() => {
  console.log('2');
}, 100);

setTimeout(() => {
  fnAsync01();
}, 0);

new Promise((resolve, reject) => {
  console.log('3');
  resolve();
  console.log('4');
})
  .then(() => {
    console.log('5');
  })
  .then(() => {
    console.log('6');
  });

fnAsync02();

async function fnAsync01() {
  await console.log('7');
  console.log('8');
}

async function fnAsync02() {
  await console.log('9');
  console.log('10');
}
```

## 第 12 题-async-promise 的执行顺序

请说一下以下代码打印的结果,并说明原因

```js
async function async1() {
  console.log('async1 start');

  await async2();
  console.log('async1 end');
}

await function async2() {
  console.log('async2');
};

console.log('script start');
setTimeout(function () {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function (resolve) {
  console.log('promise1');
  resolve();
}).then(function () {
  console.log('promise2');
});
```

## 第 12 题-假如我们是一个广告平台接收外部的标准的 url 链接-我们需要在这个 url 的 search 的参数上添加一个 m_id="xxx"如何处理?

## 第 13 题-自己手动实现一个`getElementById`

## 第 14 题-一个函数,将数值类型的值,格式化成千位分隔符格式化数值例如:123456 => 123,456

## 第 15 题-实现一个`formatDate`方法,接收参数为时间戳-timeStamp-和分割方式 gap

例如：formatData('1574624629') => 2019-11-01

## 第 16 题-给你一个时间戳你如何得到这个时间戳对应月的最大天数？
