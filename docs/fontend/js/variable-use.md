---
title: 使用let/const定义变量的场景
---

## 使用let/const定义变量的场景

## 快速导航

<TOC />

## 背景

在`javaScript`中,定义变量是一个非常常见的操作,在Es5中,通常使用`var`定义声明变量,而在Es6中新增了`let`和`const`关键字,也是用于声明定义变量

究竟在什么样的情况下使用它们,解决自己开发过程当中定义变量的一些困扰

为什么使用`Let`,`const`定义变量更节省内存?

javScript中有多少种方法定义声明变量呢?

ES5中只有两种声明变量的方法,`var`和`function`两个关键字,而Es6新增了`let`,和`const`,另外,还有两种就是`import`,和`class`关键字

## var声明及变量提升

在Es5中只有函数作用域和全局作用域,没有块级作用域,通过关键字`var`声明的变量,无论是在哪里声明的,都会被当成在当前作用域顶部声明的变量,这就是我们常说的提升机制

这会带来一些问题

### 场景1-函数内层变量可能会覆盖外层变量

```js
var tmp = new Date();
function f(condition) {
    // 此处可以访问变量tmp,其值为undefined
    console.log(tmp);
    if(condition) {
        var tmp = "itclanCoder";
        return tmp;
    }else {
        // 此处可访问变量value,其值为undefined
        console.log(tmp);
        return null;
    }
}
f(false);  // undefined
```
上面的代码,或许你会认为只有`condition`条件为`true`时,才会创建变量`tmp`,事实上,函数f无论如何变量`tmp`都会被创建,在预编译阶段,`javaScript`引擎会将上面的f函数修改成下面这样

函数f执行后,输出结果为`undefined`,原因就是在于,当使用函数声明时,变量会提升到运行坏境的顶部,导致内层的`tmp`变量覆盖了外层的`tmp`变量

它会变成如下这样
```js
function f(condition) {
    var tmp; // 先定义变量
    if(condition) {
        tmp = "itclanCoder";
        return tmp;
    }else {
        return null;
    }

}

var tmp = new Date();
f(false)
```
变量`tmp`的声明被提升至函数顶部,而初始化操作依旧停留在原处执行,这就意味这`else`中的也可以访问到该变量`tmp`,因为此时变量还没有初始化,只有定义,但没有赋值,所以值是`undefined`

解决办法:

若使用`let`定义变量,则变量不会被提升置作用域顶部,它只会在它定义的块级作用域内生效

::: tip 注意事项
使用`let`,`const`定义变量,因为它不存在变量提升,所以,变量一定要在声明后使用,否则会报错
```js
console.log(tmp);  // ReferenceError
let tmp = 2;
```
:::

### 场景2-用来计数循环变量泄露为全局变量

循环遍历一字符串`javaScript`,输出打印出每个字符

```js
var str = "javaScript";
for(var i = 0;i<str.length;i++) {
    console.log(i,str[i]);
}

console.log(i);

//0 'j'
1 'a'
2 'v'
3 'a'
4 'S'
5 'c'
6 'r'
 7 'i'
8 'p'
9 't'
10
```
上面的`i`变量只是用来控制循环,但是循环结束后,它并没有消失,释放,而是泄露成了全局变量,这样会造成全局变量的污染

解决办法:

使用`let`定义变量的话,那么`for`循环的计数器变量`i`,只在`for`循环内有效

如下示例所示:
```js
var arr = [];
for(var i = 0;i<10;i++) {
    arr[i] = function() {
        console.log(i);
        return arr.push(i)
    }
}
console.log(arr[8]());  // 10, 11
```
在上面的代码中,使用`var`声明的比那辆,在全局范围内都是有效的,所以每一次循环,新的`i`值都会覆盖旧值,导致最后输出的是最后一轮的`i`的值

如果使用`let`,声明的变量仅在块级作用域内有效,最后将输出8
```js
var arr = [];
for(let i = 0;i<10;i++) {
    arr[i] = function() {
        console.log(i);
        return arr.push(i)
    }
}
console.log(arr[8]());  // 8,11

```


## 块级声明及块级(词法)作用域

正因为Es5中使用`var`声明的变量,没有块级作用域,会污染全局变量,如果使用不当,会产生一些达不到自己预期的效果,所以在Es6中就有了块级作用域

块级作用域:用于声明在指定的块的作用域之外无法访问的变量

1. 函数内部
2. 块中(字符`{}`之间的区域)









