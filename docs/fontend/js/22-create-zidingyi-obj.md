---
title: Js如何创建一个自定义对象
autoGroup-5: JS特效
---

## Js如何创建一个自定义对象

## 快速导航

<TOC />

## 前言

`JS`中分两种数据类型,一种是基本数据类型,另外就是复杂数据类型,在描述一个事物对象,当比较复杂时,一般可以用数组和对象来存储

在`Js`中的对象,指的是一系列互相嵌套的键值对,在做`web`开发时,大多数控件都是以对象或数组的形式来提供给开发人员使用

那如何创建一个对象呢,如何给对象添加属性和方法?在`Js`当中有一些方法,如下所示

## 方法1-使用文本字面量方式

这种方法创建对象是比较直接,常见的一种方式,就是使用大括号的方式,可以看做是`js`对象的本本标识,也就是说,可以通过输出字符串的形式来了解对象有哪些键值对，它也是`JSON`形式,用于`js`的数据存储和传递,给对象添加属性和添加方法

如下代码所示
```js
// 用大括号创建对象的方法,这种方法最常见,使用最频繁
var obj1 = {};   // 使用大括号创建一个内容为空的对象
obj1.name = "itclanCoder"; // 给obj1对象添加一个name属性,值等于itclanCoder
obj1.outPut = funciton() {  // 给对象obj1添加了一个outPut方法,并提供实现了一个alert弹框
    alert('给obj1添加了一个outPut方法');
}
// 调用对象obj1下面的outPut方法
obj1.outPut();
```
当值为函数时,那么对象下面绑定的就是方法,使用函数的作用厉害之处,除了可以复用代码,另一个就是可以接收传递参数

## 方法2-使用构造器函数创建对象

创建构造器函数创建对象也是一种创建对象的方法,代码如下所示

```js
// 使用function 创建一个对象
function CreateObj() {   // 声明创建对象的funciton,类似class,首字母大写 
   this.url = "itclan.cn";  
   this.webSite = function() {
      alert("我是通过构造器创建出来的方法");
   }
}

var obj2 = new CreateObj() // 通过new关键字,调用createObj(),实例化一个obj2对象
obj2.webSite();            // 调用构造器函数下面实例的方法
```
使用构造器函数创建对象,也是一种方式,其中,构造器函数内的`this`指向的是这个实例化对象`obj2`

## 方法3-使用new Object()

使用`new Object()`的形式创建对象,等价于`{}`,`Object`是顶级对象

```js
var obj3 = new Object()
obj3.age = 20;
obj3.webSite = function() {
    alert("我是通过new Object()创建出来的方法,被调用了的");
}

// 调用对象的函数/方法
obj3.webSite();
```

## 总结

创建对象,有三种方式,其中第一种字面量创建对象的方式最常见和简单,直观,每一种方式创建对象都有自己的好处,比如动态的设置参数,那么就只能用第二种和第三种的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />







