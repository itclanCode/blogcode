---
title: Js如何模拟继承机制分别使用Es5和Es6来实现
autoGroup-5: JS特效
---

## Js如何模拟继承机制分别使用Es5和Es6来实现

## 快速导航

<TOC />

## 前言

继承是面向对象的特点，那么`Js`也可以借助`prototype`来模拟继承机制,以下分别使用`Es5`和`Es6`来实现继承

实现继承的目的是,实现代码的复用

## Es5实现继承

如下是示例代码

```js
// 用function模拟一个类出来,同时也作为构造函数
function Animal(name,age) {
    this.name = name; // name
    this.age = age;   // 变量age
}

Dog.prototype = new Animal();  // 把animal的所有属性和函数都继承
Dog.prototype.constructor = Dog;  // 将子类型原型的构造属性设置为子类型,修正指针对象,因为原型链继承多个实例的引用类型属性指向相同,一个实例修改了原型属性,另一个实例的原型属性也会被修改
Dog.prototype.outMsg = function() { // 重载outMsg函数
    // 实现一个outMsg方法
    alert(`我的名字是,${this.name},我的年龄是${this.age}`);
}
var dog = new Dog('小黑',4);  // 新建一个Dog对象
dog.outMsg();                 // 调用dog的outMsg()函数
```
以上就是使用`Es5`,通过原型`prototype`实现的继承

## Es6实现继承

  ```js
class Animal {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    outMsg() {
        alert(`我的名字是,${this.name},我的年龄是${this.age}`);
    }
}

let dog1 = new Animal("tom",4);
dog1.outMsg();


class Dog extends Animal {
    constructor(name,age) {
        super(name,age);
    }
}

let dog2 = new Dog("小黑",6);
dog2.outMsg();
``` 

在Es6中，引入了`class`类的概念,有一个默认的属性方法,`constructor`,该方法是类的构造函数，在我们通过`new`创建该类的实例时,会自动调用`constructor`函数

调用`super()`标识父类的构造函数,如果你写过`React`类组件,那对这个`super`会比较熟悉,接收父组件传递过来的属性,`super(props)`的

`Es6`中的`类`主要是解决`Es5`中麻烦的`this`以及`constructor`指向的改动

在`Es6`中直接使用`extends`和`super()`就能解决

## 分析

在最上面的用`Es5`继承方式中,先是定义了一个`Animal`类,然后又定义了一个`Dog`类,`Dog`的`prototype`完全使用`Animal`内部的属性和函数

这样`Dog`就继承了`Animal`所有的属性和函数,所以,在`Dog`类的构造函数里,可以访问和修改在`Animal`中定义的姓名和年龄


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
