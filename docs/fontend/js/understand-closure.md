---
---

# 深度理解闭包

在前面一文中我们已经初探了闭包产生的本质原因是作用域链引起的,并且也已知晓作用域是基于函数的,而上下文是基于对象的,并且在 Es6 之前是没有块级作用域的,只有全局作用域和函数作用域以及 eval 作用域,我们往往是通过匿名函数的自执行来模拟块级作用域,我们说明了作用域链的使用,当查找一个变量或者函数时,是由函数内向外逐级的进行查找,若有,则返回,若无,则返回 undefinied,作用域链是连接函数内与函数外的一桥梁,实现在函数外访问函数内或者其他函数作用域内的局部变量,但并未对闭包做过多的说明,那么今天我们继续对闭包进行学习,一探究竟,拨开云雾,让闭包不在怕怕

## 闭包是什么?

下面直接分析一段简易的代码:

```
* 在函数外部无法访问函数内部的变量,而函数内可以访问函数外的变量,在函数的内部,嵌套一个子函数,这个子函数可以访问父函数作用域内的变量,然后父函数把这个子函数return出去,让在函数外部可以通过子函数访问自己的局部变量
*
* @Global variable {name = "随笔川迹"}
* @function parentFun
* @local variable {age = 24}
* @function subFun
* @local variable {sex = boy}
* @return subFun parentFun返回值为subFun函数
* @parentFun() 函数调用
*
*/
var name = "随笔川迹";          //函数外定义,全局变量
function parentFun(){
    var age = 24;           //函数内定义,局部变量
    function subFun(){
        var sex = "boy";    // 同上
        console.log(name,age,sex);   // 访问变量
    }
    //console.log(sex);报错 sex is not defined,定义在subFun函数内的局部变量sex,在该父函数外是无法访问的
    return subFun;     //将subFun的函数值返回
}
//console.log(age);报错age is not defined,同上分析同理可得
var person = parentFun();
person();                     // 函数调用执行

```

控制台打印输出如下:实现了在函数外访问函数内的局部变量
<img class="medium-zoom"  src="../images/js-article-imgs/deep-understand-closure/what-closure.png" alt="测试闭包是什么" />
