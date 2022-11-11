---
title: Js如何利用prototype为类创建静态成员属性和方法
autoGroup-5: JS特效
---

## Js如何利用prototype为类创建静态成员属性和方法

## 快速导航

<TOC />

## 前言

为类创建静态成员,是面向对象语言的特点,js是可以通过`prototype`来实现这一特点

## 具体代码如下所示

```js
// 用function 模拟一个类出来,同时也作为构造函数
function MyClass() {
    this.name = "https://coder.itclan.cn";  // 类的成员变量name
    this.myStaticFun = myStaticFun; // 类的成员函数,把私有函数放到外头,避免重复创建
}

// 把私有函数抽离出来
function myStaticFun() {
    return this.name;
}

// 为MyClass的prototype定义一个变量
MyClass.prototype.name = "itclanCoder";
// 为MyClass的ptototype定义一个函数,它的所有实例对象都有了
MyClass.prototype.myStaticFun = function() {
    alert("这是一个公有属性的方法");
}

var obj = new MyClass();  // 使用new实例化一个类
obj.myStaticFun();    // https://coder.itclan.cn
```
当私有属性与构造器函数添加的属性和方法名相同时,当访问到构造函数内私有属性时,直接就会返回,如果没有,就会沿着原型链,去`prototype`身上去找

如果还没有找到,会继续往上找,也就是`Object`顶级对象,要是还没有,那就会返回`undefined`

## 分析

`prototype`是`js`为每一个对象内置的隐藏属性,它会随着这个对象一直存在,当构造函数内的私有属性和私有方法与构造器函数原型下的属性和方法同名时

私有属性和方法要优先于共有属性

在上面的示例中,在构造器函数内定义了一个私有属性和方法,但同时也创建定义了共有属性和方法,定义在`MyClass`上,通过`new`语句实例化后,对象就有`prototype`的所有属性

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

