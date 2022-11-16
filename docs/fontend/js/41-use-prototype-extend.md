---
title: Js如何使用prototype实现继承
autoGroup-5: JS特效
---

## Js如何使用prototype实现继承

## 快速导航

<TOC />

## 前言

在JS中如何使用`prototype`实现继承呢

## 具体代码如下所示

```js
var Dog = Class.create();  // 使用Class的create()函数创建类

Dog.prototype = {    //指定构造函数和属性   
    init: function(myname) { // 构造函数
       this.name = name;
    },
    cry: function(msg) {   // 定义cry成员函数
        alert(this.name+':'+msg);
    }
}

var SmallDog = Class.create();  // 创建小的类
// 使用extend()函数继承dog的属性和函数
SmallDog.prototype = Object.extend(new Dog(),{
    cry: function(msg) {
        alert(this.name+'说道'+msg);
    }
});

var duoduo = new SmallDog('多多'); // 创建多多小狗
duoduo.cry('Hello');    // 调用cry函数,调用的是覆盖后的函数

```

## 分析

通过上面的代码,可以看出,`prototype`提供了`Object.extend`函数来实现继承机制,代码首先定义了一个`SmallDog`类,继承自`Dog`

局部`Dog`类的成员变量和函数,也可以重载`cry()`函数,提供不通的实现

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />