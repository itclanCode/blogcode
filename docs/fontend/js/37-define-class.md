---
title: JS如何定义一个类分别用Es5和Es6来实现
autoGroup-5: JS特效
---

## JS如何定义一个类分别用Es5和Es6来实现

## 快速导航

<TOC />

## 前言

类是面向对象编程语言最基础,最核心的概念,正因为有了类,才可以拓展延伸出具有相同的属性和函数的对象类

对象的特点,就是它可以拥有属性和方法,而在Es6之前,并没有提供类的支持,它是用构造函数来模拟类来实现的

那用Es5和Es6分别怎么实现一个类呢

## 具体示例

<template>
  <div class="wrap">
      <div>
         <el-button type="primary" @click="handleClick">点击显示当前网站的信息</el-button>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {

        }
    },
    mounted() {  
     
    },
    methods: {
      handleClick() {
        const that = this;
         function MyClass() {
            this.website;  // 类的成员变量website
            this.showMessage =  function() { // 类的成员函数showMessage
                // 在成员函数里调用成员变量
                 that.$message({
                    message: `${this.website}`,
                    type: 'success'
                 });
            }
         }
         var obj = new MyClass(); // 使用new实例化一个类
         obj.website = 'https://coder.itclan.cn';
         obj.showMessage();      // 调用成员函数
     }
    }
  };
</script>
<style>
  .wrap {
    text-align: center;
    margin-top: 20px;
  }


</style>


## Es5实现的类

```js
// 用function 模拟一个类,同时也作为构造函数,首字母大写,用于区分普通函数
function MyClass() {
    // 私有属性
    this.name;   // 类的成员变量name属性
    // 私有方法,类的成员函数fun,每次实例化对象,都会重复创建对象,会造成内存空间的浪费,增加cpu开销
    // 可以把私有的方法放到外面去
    this.fun = function() {  
        alert("my functon name"+this.name);
    }
    // 如下等价
    //this.fun = fun
}

/**
 * function fun() {
 *   alert("my functon name"+this.name);
 * }
 * 
 */

// 公有属性,利用原型对象可以解决实例化对象,避免重复创建构造函数内的方法创建
MyClass.prototype.outName = function() {
    alert(this.name)
}

var obj = new MyClass();  // 使用new实例化一个类
obj.name = 'itclanCoder'; // 为成员变量赋值
obj.fun();                // 调用成员函数
obj.outName();      // itclanCoder
```
以上是使用Es5的构造函数实现一个类,添加属性和方法,其中构造器函数内的自定义方法,可以抽离到外部,避免重复创建,可以提升性能


## Es6实现类

具体代码如下所示
```js
class MyClass {
    // 通过construcor关键字来定义构造函数,添加了一个私有name属性
    constructor(name) {
        this.name = name;
        this.fun = function() {
            alert('my function name'+this.name);
        }
    }
    // 等价于上面的MyClass.prototype.outName,共有方法
    outName() {
        alert(this.name);
    }
} 

let obj = new MyClass('itclanCoder');  // 类可以传递参数
obj.fun();
obj.outName();
```

## 对比

可以看出使用Es6中的类`class`创建自定义属性和方法,要简单和直观得多

自定义属性,放在`constoructor`构造器函数内,每一个类都会默认有这个`constructor`

## 分析

js中没有提供类的定义,但是提供`new`关键字,它的含义是返回一个实例化对象,并执行相应的函数的调用

本示例代码首先定义了一个函数`MyClass`,它类似`java`语言的构造函数,当使用`new`语句时,`JS`创建了一个对象,并执行该函数

该函数内部的`this`就指向刚刚创建的对象,这样就实现了面向对象语言中类的定义和使用

当然在`Es6`中提供了`class`定义类的,这样更加方便的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />