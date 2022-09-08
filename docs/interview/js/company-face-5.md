---
## title: Js 笔试真题-4
---

## 快速导航

<TOC/>

## 第 1 题-new 的实现原理是什么?

## 第 2 题-闭包是什么?有什么作用?

## 第 3 题-如何确定`this`的指向

## 第 4 题-写出几种继承方式

## 第 5 题-实现一个数组的去重函数

## 第 6 题-深拷贝,浅拷贝的区别,实现一个深拷贝的函数

## 第 7 题-什么是函数防抖,节流,实现一个防抖的函数

## 第 8 题-什么是跨域-如何解决跨域

## 第 9 题-什么是第三次握手-四次握手

## 第 10 题-什么是强缓存,弱缓存

## 第 11 题 浏览器从输入地止到页面完成绘制经历了哪些过程

## 第 12 题 列举你知道的性能优化方案

## 第 13 题-如何实现数组的降维

### 方法 1:数组字符串化

```js
let arr = [[2222,333, 444],[[55,66,77], {a:1}]
arr += "";
console.log(arr); // ["222", "333","444","55","66","77",["objrvy,onject"]
```

所有字符串转化为字符串,且元素为对象类型会被转换为"[object Object]",对于同一种类型数字或字符串还是可以的

### 方法 1-**递归:**

```js
let arr = [[2222,333, 444],[[55,66,77], {a:1}]
arr += "";
reduceDimension(arr);
function reduceDimension(arr) {
	let ret = [];
	let toArr = function(arr) {
		arr.forEach(function(item) {
			item instanceof Array ? toArr(item): ret.push(item);
		});
	}
	toArr(arr);
	return ret;
}

```

### 方法 2-Array.prototype.flat()

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1,2,3,4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1,2,3,4,[5,6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];

arr3.flat(2); // [1,2,3,4,5,6]

// 使用Infinity作为深度,展开任意深度的嵌套数组
arr3.flat(Infinity);
```

### 方法 3-不使用递归,使用 stack 无限反嵌套数组

```js
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用pop从stack中去除并·
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用push送会内层数组中的元素,不会改动原始输入original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

flatten(arr1);
```

### 方法 3-使用 reduce-concat 和递归无限反嵌套多层嵌套的数组

```js
var arr1 = [1, 2, (3)[(1, 2, 3, 4, [2, 3, 4])]];
function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    []
  );
}
flattenDeep(arr1);
```
## 第14题-如何不借助第三个中间变量交换两个变量的值

### 方法1-使用一个临时变量

这种方法是使用一个第三方临时变量,进行数据交换过程中的缓存,这样做是比较直观,但是会增加内存的使用

```js
var a = 1,
    b = 2,
    tmp;
tmp = a;
a = b;
b = tmp;    
```

### 方法2-Es6中的解构

在Es6当中提供一个非常暴力的解决办法,一次性解决,简单暴力

解构语法还使用其他类型的变量进行互换
```js
let a = 1,
    b = 2;
 [a,b] = [b,a];   
```
### 方法3-利用数组的特性进行交换

```js
var a = 1,
    b = 2;
a = [a,b]
b = a[0];
a = a[1];    
```
通过数组下标,取值的方式,完成两数的交换

### 方法4-算数运算

通过算术运算过程中的技巧,完成两个值的交换,但这个有缺点,就是会存在数据溢出
```js
var a = 1,
    b = 2;

a = a+b;   // a = 3
b = a-b;   // b = 1;
a = a-b;   // a = 2;
```

### 方法5-异或运算

巧用位运算符的技巧,利用`a^b^b == a`的特点,进行数值交换,避免了使用算术运算带来的弊端,不会发生溢出问题

```js
var a = 1, // 二进制0001
    b = 2; // 二进制:0010
a = a^b;   // 计算结果: a=0011,b = 0010
b = a^b;   // 计算结果  a=0011,b=0001
a = a^b;   // 计算结果: a=0010,b=0001    
```
可以使用`new Number(具体的数字).toString(需要转化进制数)`,例如:new Number(10).toString(2),将10转化为2进制是`1010`