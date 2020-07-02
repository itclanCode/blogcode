---
title: 理解Es6中的Symbol类型
---

## 理解 Es6 中的 Symbol 类型

## 快速导航

<TOC />

## 前言

在 Es6 中引入了一个新的基础数据类型:`Symbol`,对于其他基本数据类型(`数字number`,`布尔boolean`,`null`,`undefined`,`字符串string`)想必都比较熟悉,但是这个`Symbol`平时用得很少,甚至在实际开发中觉得没有什么卵用,能够涉及到的应用场景屈指可数.

往往在面试的时候,屡面不爽.下面一起来看看的这个数据类型的

## 具体解决的问题

在 Es5 的对象属性名中都是字符串,当一对象的属性名出现重复时,后者往往会覆盖前者.

若使用`Symbol`就能够保证每个属性的名字都是独一无二的,相当于生成一个唯一的标识 ID,这样就从根本上防止属性名的冲突

## Symbol 类型

`symbol`是`Es6`规范引入的一项新的特性,表示独一无二的值,归纳为`JS`语言的第 7 种数据类型,它是通过`Symbol`函数生成

通过`Symbol()`函数来创建生成一个`Symbol实例`

```
let s1 = Symbol();
console.log(typeof s1); //symbol
console.log(Object.prototype.toString.call(s1)); // [object Symbol]
```

在 Es5 中原有的对象的属性名是字符串类型中拓展了一个`Symbol`类型,也就是说,现在对象的属性名有两种类型

- 字符串类型
- Symbol 类型

::: warn 注意
Symbol 函数前不能使用`new`关键字,否则就会报错,这是因为生成的`Symbol`是一个原始类型的值,它不是对象

因为不是对象,所以也不能添加属性,它是一种类似于字符串的数据类型,可以理解为是在字符串类型的一种额外的拓展

`Symbol`函数可以接收一个字符串做为参数,它是对该`Symbol`实例的一种描述,主要是为了在控制台显示,或转为字符串时，进行区分

可以使用`Symbol().description`会返回`Symbol()`的实例描述的具体内容,如果有值,则会返回该描述,若无则会返回`undefined`
:::
当使用字符串定义对象的属性名时,若出现同名属性,则会出现属性覆盖问题,而使用`Symbol`类型定义的对象属性名,则不会,它是独一无二的,每调用一次`Symbol()`都会生成一个唯一的标识,即使是使用`Symbol()` 生成的实例描述相同,但它们依旧不相等,总会返回`false`
如下代码所示

```js{5}
let s1 = Symbol('itclanCoder'); // 定义了一s1变量,它是Symbol()类型,并接收了一个itclanCoder字符串,作为该Symbol的实例
let s2 = Symbol('itclanCoder'); // 实例化了一个s2,Symbol()类型
console.log(s1.description); // itclanCoder
console.log(s1.description); // itclanCoder
console.log(s1 === s2); // false
```

从第 5 行代码比较结果看出,`s1`与`s2`是两个不同的`Symbol`值,这里让`Symbol`接受一个参数,如果不加参数,它们在控制台输出的都是`Symbol`,即使参数相同,但是它们依旧是两个不同的`Symbol`

如果您希望使用拥有同一个`Symbol`值,那该怎么办?在 Es6 中,提供了一个`Symbol.for()`方法可以实现,它接受一个字符串作为参数
然后搜索有没有以该参数作为名称的`Symbol值`

如果有,就返回这个`Symbol值`,否则就新建一个以该字符串为名称的`Symbol值`,并会将它注册到全局坏境中

```
let s1 = Symbol.for('itclanCoder');
let s2 = Symbol.for('itclanCoder');
console.log(s1 === s2); // true
```

在上面的示例代码中,s1 和 s2 都是`Symbol`实例化出来的值,但是它们都是由`Symbol.for`方法生成的,指向的嗾使同一个值,地止
::: tip Symbol 与 Symbol.for 的区别
**共同点:** 都会生成新的`Symbol`
**不同点:** `Symbol.for()`会被登记在全局坏境中供搜索,而`Symbol()`不会,`Symbol.for()`不会每次调用就返回一个新的`Symbol`类型的值,而是会先检查给定的`key`是否已经存在,如果不存在才会新建一个`Symbol`值

如:调用`Symbol.for('itclanCoder')`100 次,每次都会返回同一个`Symbol`值,但是调用`Symbol('itclanCoder')`100 次,会返回 100 个不同的`Symbol`值

```
Symbol.for("itclanCoder") === Symbol.for("itclanCoder") // true

Symbol("itclanCoder") === Symbol("itclanCoder") // false
```

:::
在上面代码中，由于`Symbol()`写法没有登记机制,所以每次调用都会返回一个不同的值,也就是每次都会在栈内存中重新开辟一块空间

也可以通过`Symbol.keyFor()`方法返回一个已登记的`Symbol`类型值的`key`,通过该方法检测是否有没有全局注册

```
let s1 = Symbol.for("itclan");
console.log(Symbol.keyFor(s1)) // "itclan"

let s2 = Symbol("itclan");
console.log(Symbol.keyFor(s2)) // undefined

```

在上面的代码中,变量`s2`属于未被登记的`Symbol`值,所以就返回`undefined`
::: warn 注意
`Symbol.for()`是为`Symbol`值登记的名字,在整个全局作用域范围内都起作用

```
function foo() {
  return Symbol.for('itclan');
}

const x = foo();
const y = Symbol.for('itclan');
console.log(x === y); // true
```

:::
在上面代码中，`Symbol.for('itclan')`是在函数内部运行的，但是生成的 `Symbol 值`是登记在全局环境的。所以，第二次运行`Symbol.for('itclan')`可以取到这个 `Symbol 值`

### **应用场景**:`Symbol.for()`

这个全局记录特性,可以用在不同的`iframe`火`service worker`中取到同一个值

在前端开发中,有时候会用到`iframe`,但是`iframe`之间相互隔离的,有时候想要取到不同的`iframe`中同一份数据,那么这个`Symbol.for()`就派上用场了的

如下示例代码所示
::: details 点击即可查看

```
let iframe = document.createElement('iframe');
iframe.src = String(window.location);
document.body.appendChild(iframe);

iframe.contentWindow.Symbol.for('foo') === Symbol.for('foo') // true
```

:::
在上面代码中，`iframe`窗口生成的`Symbol 值`，可以在主页面拿得到,在整个全局作用域内都可以取到

## 注意事项

- ### `Symbol` 值不能与其他类型的值进行运算-会报错

```
let symItclan = Symbol('itclan');

console.log("主站" + symItclan)
console.log(`主站 ${symItclan}`) // Uncaught TypeError: Cannot convert a Symbol value to a string
```

- ### `Symbol`可以显示转为字符串

```
let SyItclanCoder = Symbol('https://coder.itclan.cn');

console.log(String(SyItclanCoder)) // Symbol(https://coder.itclan.cn)
console.log(SyItclanCoder.toString()) // Symbol(https://coder.itclan.cn)
```

- ### `Symbol`值可以转为布尔值,但是不能转为数值

```
let sym = Symbol();
console.log(Boolean(sym)) // true
console.log(!sym)  // false

if (sym) {
  // ...
}

Number(sym) // TypeError  Cannot convert a Symbol value to a number
sym + 2 // TypeError
```

由上面的错误提示可以看出,`Symbol`不能转换为数字,无法做相应的运算

## 相关参考文档

- [Es6 标准入门-Symbol](https://es6.ruanyifeng.com/#docs/symbol)

<div align="right">
  <ShareLink />
</div>
<div align="center">
  <DaShang />
</div>
