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

`javScript`中有多少种方法定义声明变量呢?

ES5中只有两种声明变量的方法,`var`和`function`两个关键字,而Es6新增了`let`,和`const`,另外,还有两种就是`import`,和`class`关键字

## var声明及变量提升

在`Es5`中只有函数作用域和全局作用域,没有块级作用域,通过关键字`var`声明的变量,无论是在哪里声明的,都会被当成在当前作用域顶部声明的变量,这就是我们常说的提升机制

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
    } else {
        // 此处可访问变量value,其值为undefined
        console.log(tmp);
        return null;
    }
}
f(false);  // undefined
```
上面的代码,或许你会认为只有`condition`条件为`true`时,才会创建变量`tmp`,事实上,函数`f`无论如何变量`tmp`都会被创建,在预编译阶段,`javaScript`引擎会将上面的f函数修改成下面这样

函数`f`执行后,输出结果为`undefined`,原因就是在于,当使用函数声明时,变量会提升到运行坏境的顶部,导致内层的`tmp`变量覆盖了外层的`tmp`变量

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

**解决办法**:

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

**解决办法**:

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
在上面的代码中,使用`var`声明的,在全局范围内都是有效的,所以每一次循环,新的`i`值都会覆盖旧值,导致最后输出的是最后一轮的`i`的值

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

块级与块级之间的代码块是相互隔离的,互不影响的,如下所示

示例代码:
```js
function fn() {
    let n = 12;
    if(true) {
        let n = 20;
    }
    console.log(n);  // 12
}
```
上面的函数有两个代码块,都声明了变量`n`,运行后输出`12`

::: tip 注意事项
1. Es6允许块级作用域任意嵌套，外层作用域无法读取内层作用域的变量
```js
{{{{let name = 'itclanCoder'}}}}
```
2. 内层作用域可以定义外层作用域的同名变量,内部声明的函数都不会影响到作用域的外部
```js
{
    let name = '随笔川迹'
    {
        let name = 'itclanCoder'
    }
}
```
有了块级作用域的出现,立即执行匿名函数变得不在必要了
```js
(function() {
  var tmp = '';
}())
// 块级作用域
{
    let tmp = '';
}
```

3. 不存在变量的提升

`let`不像`var`那样会发生`变量提升`现象,所以,变量一定要先声明后使用,否则就会报错
```js
console.log(foo) // ReferenceError
let foo = 2222;
```

4. 在同一块作用域内不允许重复声明

```js
// 报错
function () {
    let a = 1;
    var a = 2;
}
```
不能在函数内部重新声明参数
```js
function func(arg) {
    let arg; // 报错
}
```
但是要是这样的话则是不报错的
```js
function func(arg) {
    if(true) {
        let arg; // 不报错
    }
}
```
:::

## 暂时性死区

只要在花括号`{}`用`let`,`const`声明定义的变量,它会绑定在这个区域内,不会受外部的影响,它会形成自己封闭的作用域,只要在声明之前使用这些定义的变量,就会报错

在代码块内,使用`let`,`const`命令声明变量之前,该变量都是不可用的,这称为暂时性死区(TDZ),换言之,需要提前声明并且赋值,就可以使用
```js
if(true) {
    // 暂时性死区开始
    tmp = 'itclanCoder'; // ReferenceError,报错
    console.log(tmp);

    let tmp; // 暂时性死区结束
    console.log(tmp); // undefined
    tmp = "随笔川迹";
    console.log(tmp);
}
```
在`let`命令声明变量`tmp`之前,都属于变量的`tmp`的死区

之所以定义暂时性死区,和不存在变量的提升,主要是为了减少运行时的错误,防止在变量声明之前就使用这个变量,从而导致一些Bug

暂时性死区的本质是: 只要一进入当前作用域,所使用的变量就已存在,但是不可获取,只有等到声明变量的那一行代码出现,才可以获取和使用该变量

## 为什么使用let,const声明变量可节省内存空间

如下面代码

```js
function f(condition) {
    if(condition) {
        let dateVal = new Date();
        return dateVal;
    }else {
        // 变量dateVal在此处不存在
        return null;
    }

    // 变量dateVal在此处不存在
}

```

以上函数`f`内定义的`dateVal`变量在使用`let`声明后,不在被提升至函数顶部,当离开`if`语句块后,`dateVal`会立即被销毁

当`condition`的值为`false`,那么永远不会声明并初始化`dateVal`


## const 声明命令

`const`是Es6新增的关键字,一旦声明后,它的值就不能被更改,所以通过`const`声明的常量必须进行初始化,不能留到以后在赋值

```js
// 有效的常量
const maxLength = 10;
// 语法错误,常量未初始化
const name;
```

## 关于循环中const声明

在代码中,经常会用到`for`循环,需要初始化变量,对于`for`循环来说,可以在初始化时使用`const`,但要是更改这个变量的话,它就会抛出错误

```js
var arrs = [];
for(const i = 0; i< 10;i++) {
  arrs.push(function() {
      console.log(i);
  })
}
```
在这段代码中,变量`i`被声明为常量,在第一次循环中,i是0,迭代执行成功,然后执行`i++`,因为这条语句试图修改常量,因此抛出错误,如果后续循环不会修改该常量,那么可以使用`const`声明

比如:`for-on`或`for-of`循环中使用`const`时的行为与使用`let`一致,如果使用`const`定义的常量,后续不会被修改,那么可以使用

```js
var arrs = [];
var object = {
    a: true,
    b: true,
    c: true
}

// 不会产生错误
for(const key in object) {
    arrs.push(function() {
        console.log(key);
    })
}

arrs.forEach(function(arr) {
    arr();
})
```

::: tip 注意事项
对于复合类型的变量,变量名不指向数据,而是指向数据所在的地址,const命令只是保证变量名指向的地址不变,并不保证该地址的数据不变

因此,将一个对象声明为常量必须非常小心
```js
const foo = {};
foo.data = 123;
console.log(foo.data) // 123
foo = {};  // TypeError: 'foo' is read-only不起作用
```
:::

在上面的代码中,常量`foo`存储的是一个地址,指向一个对象,不可变的只是这个地址,不能把`foo`指向另一个地址,但对象本身是可变的,所以依然可以为其添加新的属性

## 关于全局块作用域的绑定

当`var`,和`function`被用于全局作用域时,它会创建一个新的全局变量对象作为全局对象(浏览器环境中的window对象),使用`var`会覆盖一个已经存在的全局变量

`let`,`const`和`class`命令声明的全局变量不属于全局对象的属性,声明的变量不会提升,而且只可以在声明这些变量的代码块中使用

不能在声明变量前访问它们

如果不想为全局对象创建属性,则使用`let`和`const`要安全得多

如果希望在全局对象下定义变量,仍然可以使用`var`,这种情况下常见用于在浏览器中跨`ifram`或跨`window`访问代码

## 具体什么时候使用var,let,const

对于需要写保护的变量则使用`const`,只有确实需要改变变量的值时,则使用`let`,因为大部分变量的值在初始化后不应该在改变,而预料外的变量的值的改变会产生很多Bug

如果希望在全局对象下定义变量,可以使用`var`


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />





















