---
title: JavaScript 算法-数学
autoGroup-2: 数学
---

## 快速导航

<TOC />

## 线性关系

两个变量之间存在一次方函数关系,就称为线性关系

如果一个一次方程中只包含一个变量(x),那么该方程就是一元一次方程

## 对数函数

对数函数是以幂函数为自变量,指数为因变量,底数为常量的函数

幂函数:y = x^2

## 指数关系(函数)

y = a*x

## 大O符号

案例场景:某位旅行者打算外出,需要选择相应的物品放进背包携带,每个物品都有对应的重量和价值,而背包最大承载重量为x

Q:问如何装这些物品,才能使得背包中的总价值最大并且不超过背包最大承载重量?

```js
Item = [
    {name: "台灯", val:5,w:4},
    {name:'帐篷',val:6:w:10},
    {name: '水'，val:6, w: 3}
]

maxWeight = 10;
bag = ['台灯','水']
value:11
weight:3+4 = 7 <10
```
最终选择：台灯和水

## 什么是最好的解决算法?

1. 尽可能更少的代码
2. 更好的性能
3. 占用更少的内存

## 大O符号-如何衡量性能

问题:实现数字的累加

### 方式1-for循环实现累加

```js
function sum(n) {
    let result = 0;
    for(let i = 1;i<=n;i++>) {
        result += i;
    }
    return result;
}
let start = 0;
let end = 0;
start = performance.now();
sum(100);
end = performance.now();
console.log(end-start);
```

### 方式2-使用高斯求和

数学表达式:累加求和

```js
function sum(n) {
  return (n/2)*(n+1)
}
```

通过时间复杂度来知道性能的高低

1. 常数阶时间复杂度(O(1))
2. 对数阶时间复杂度(Ologn)
3. 平方阶时间复杂度(O(n*2))
4. 线性阶(循环O(n))
5. 线性对数(O(nlogn))

大O符号表示法

表示代码执行时间的增长变化趋势

### 斐波拉契数列

起始点为1,1,从第三项开始每一项为前面两项之和

```
[1,1,2,3,5,8,13,21,34,55,89,144....]
```

面试问题:

如何返回斐波那契数列的第n个元素?

例如:fib(4)  // 结果5

```js
// 斐波那契数列初始前两项为1,1,从第三项开始就是前两项的和
// 无线数列
function fib(n) {
  const numbers = [1,1]; // 斐波那契数前两项,初始,固定的
  let count = 0;
  for(let i = 2;i<n+1;i++) { // 初始值要从2开始,第三项
    count++;
    numbers.push(numbers[i-2]+numbers[i-1]); // 前面两项// n-1
  }
  return numbers[n];
}

console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
```


