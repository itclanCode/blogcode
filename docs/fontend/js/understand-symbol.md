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

在上面示例代码中,用`typeof`进行了类型的检测,它返回的是`Symbol`类型,而不是什么`string`,`object`之类的

在 `Es5` 中原有的对象的属性名是字符串类型中拓展了一个`Symbol`类型,也就是说,现在对象的属性名有两种类型

- 字符串类型
- `Symbol` 类型

::: warning 注意
`Symbol` 函数前不能使用`new`关键字,否则就会报错,这是因为生成的`Symbol`是一个原始类型的值,它不是对象

因为不是对象,所以也不能添加属性,它是一种类似于字符串的数据类型,可以理解为是在字符串类型的一种额外的拓展

`Symbol`函数可以接收一个字符串做为参数,它是对该`Symbol`实例的一种描述,主要是为了在控制台显示

**Symbol 的描述是可选的，仅用于调试目的或转为字符串时,进行区分**,不是访问 symbol 本身

可以使用`Symbol().description`会返回`Symbol()`的实例描述的具体内容,如果有值,则会返回该描述,若无则会返回`undefined`

`description`是`Symbol`的一个静态属性
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

在上面的示例代码中,`s1` 和 `s2` 都是`Symbol`实例化出来的值,但是它们都是由`Symbol.for`方法生成的,指向的是同一个值,地止

- ### `Symbol` 与 `Symbol.for` 的区别

::: tip 比较

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

::: warning 注意
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

- ## Symbol 应用场景

* ### 应用场景 1-使用`Symbol`来作为对象属性名(key)

在 Es6 之前,通常定义或访问对象的属性都是使用字符串,如下代码所示

```
let web = {
    site: "http://itclan.cn",
    name: "itclanCoder"
}
console.log(web['site']); // http://itclan.cn
console.log(web['name']); // itclanCoder
```

访问变量对象的属性,除了可以通过`对象.属性名`的方式外,可以通过`对象['属性名']`的方式进行访问,如果一个对象中出现了同名属性那么后者会覆盖前者

由于每调用一次`Symbol`函数,生成的值都是不相等的,这意味着`Symbol`值可以作为标识符,用于对象的属性名,就能保证不会出现同名的属性

针对一个对象由多个模块构成的情况就变得非常有用了的,使用`Symbol`能放置某一个键被不小心改写或覆盖

`Symbol`可以用于对象属性的定义和访问

如下示例代码所示
::: details 点击即可查看

```
const PERSON_NAME = Symbol();
const PERSON_AGE = Symbol();

let person = {
    [PERSON_NAME]: "随笔川迹"
}

person[PERSON_AGE] =  20;

console.log(person[PERSON_NAME])  // 随笔川迹
console.log(person[PERSON_AGE])   // 20
```

:::
在上面的示例代码中,使用`Symbol`创建了`PERSON_NAME`,`PERSON_AGE`两个`Symbol`类型,但是在实际开发中却带来了一些问题

当您使用了`Symbol`作为对象的属性`key`后,你若想对该对象进行遍历,于是用到了`Object.keys()`,`for..in`,`for..of`,`Object.getOwnPropertyNames()、JSON.stringify()`进行枚举对象的属性名

你会发现使用`Symbol`后会带来一个非常令人难以接受的现实,如下示例代码所示

```
let person = {
   [Symbol('name')]: '随笔川迹',
   age: 20,
   job: 'Engineer'
}
console.log(Object.keys(person)) // ["age", "job"]
for(var i in person) {
    console.log(i);   // age job
}

Object.getOwnPropertyNames(person) // ["age", "job"]
JSON.stringify(person); // "{"age":20,"job":"Engineer"}"
```

通过上面的示例代码结果可知,`Symbol`类型实例化出的`key`是不能通过`Object.keys()`,`for..in`,`for..of`,来枚举的

它也没有包含子自身属性集合`Object.getOwnPropertyName()`当中,该方法无法获取到

利用该特性,我们可以**把一些不需要对外操作和访问的属性使用`Symbol`来定义**

这样,我们在定义接口的数据对象时,可以决定对象的哪些属性,对内私有操作与对外公有操作变得可控,更加的方便

使用常规的方法,无法获取到以`Symbol`方式定义对象的属性,在 Es6 中,提供了一个专门针对`Symbol`的 API

用`Object.getOwnPropertySymbols()`方法,可以获取指定对象的所有`Symbol`属性名,该方法会返回一个数组

它的成员是当前对象的所有用作属性名的 `Symbol 值`
::: details 点击即可查看

```
let person = {
   [Symbol('name')]: '随笔川迹',
   age: 20,
   job: 'Engineer'
}

// 使用Object的API
Object.getOwnPropertySymbols(person) // [Symbol(name)]

```

:::
如下是`Object.getOwnPropertySymbols()`方法与`for..in`循环,`Object.getOwnPropertyNames`方法进行对比的例子
::: details 点击即可查看

```
const person = {};
const name = Symbol('name');

person[name] = "随笔川迹"

for(let i  in person) {
  console.log(i); // 无任何输出
}

Object.getOwnPropertyNames(person); // []
Object.getOwnPropertySymbols(person); // [Symbol('name')]
```

:::

在上面代码中，使用`for...in`循环和`Object.getOwnPropertyNames()`方法都得不到 `Symbol 键名`，需要使用`Object.getOwnPropertySymbols()`方法。

如果想要获取全部的属性,可以使用一个新的 API，`Reflect.ownKeys()`方法可以返回所有类型的键名，包括常规键名和 `Symbol` 键名
::: details 点击即可查看

```
let person = {
  [Symbol('name')]: "川川",
  enum: 2,
  nonEnum: 3
};

Reflect.ownKeys(person)  //  ["enum", "nonEnum", Symbol(name)]
```

:::

正由于以`Symbol 值`作为键名，不会被常规方法(`for..in`,`for..of`)遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法,达到保护私有属性的目的

- ### 应用场景 2：使用 Symbol 定义类的私有属性/方法

JavaScript 是一弱类型语言,弱并不是指这个语言功能弱,而所指的是,它的类型没有强制性,是没有如`java`等面向对象语言的访问控制关键字`private`的，类上所有定义的属性和方法都是公开访问的,当然在`TypeScript`中新增了一些关键字,解决了此问题的

有时候,类上定义的属性和方法都能公开访问,会造成一些困扰

而有了`Symbol`类的私有属性和方法成为了实现

如下示例代码

::: details 点击即可查看

```
let size = Symbol('size');  // 声明定义了一个size变量,类型是Symbol(),类型描述内容是size

class Collection {          // class关键字定义了一个Collection类
  constructor() {           // 构造器`constructor`函数
    this[size] = 0;         // 在当前类上私有化了一个size属性
  }

  add(item) {              // Collection类下的一个方法
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) { // 静态属性
    return instance[size];
  }
}

let x = new Collection(); // 实例化x对象
Collection.sizeOf(x) // 0

x.add('foo');       // 调用方法
Collection.sizeOf(x) // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
```

:::
上面代码中，对象 `x` 的 `size` 属性是一个 `Symbol` 值，所以 `Object.keys(x)`、`Object.getOwnPropertyNames(x)`都无法获取它。这就造成了一种非私有的内部方法的效果

- ### 应用场景 3-模块化机制

结合`Symbol`与模块化机制,类的私有属性和方法完美实现,如下代码所示
在文件`a.js`中
::: details 点击即可查看

```
const PASSWORD = Symbol();  // 定义一个PASSWORD变量,类型是Symbol

class Login() {      // class关键字声明一个Login类
  constructor(username, password) {    // 构造器函数内初始化属性
    this.username = username;
    this[PASSWORD] = password;
  }

  checkPassword(pwd) {
    return this[PASSWORD] === pwd;
  }

}
export default Login;
```

:::

在文件`b.js`中

::: details 点击即可查看

```
import Login from './a'

const login = new Login('itclanCoder', '123456'); // 实例化一个login对象

login.checkPassword('123456'); // true
login.PASSWORD;  // 访问不到
login[PASSWORD]; // 访问不到
login['PASSWORD'] // 访问不到

```

:::

因为通过`Symbol`定义的`PASSWORD`常量定义在`a.js`模块中,外面的模块是获取不到这个`Symbol`的,在外部无法引用这个值,也无法改写,也不可能在在创建一个一模一样的`Symbol`出来

因为`Symbol`是唯一的

在`a.js`模块中,这个`PASSWORD`的`Symbol`类型只能在当前模块文件(`a.js`)中内部使用,所以使用它来定义的类属性是没有办法被模块外访问到的

这样就达到了一个私有化的效果

- ### 应用场景 4-使用`Symbol`来替代常量

在使用`React`中,结合`Redux`做公共数据状态管理时,当想要改变组件中的某个状态时,`reducer`是一个纯函数,它会返回一个最新的状态给`store`,返回的结果是由`action`和`state`共同决定的

`action`是一个对象,有具体的类型`type`值,如果你写过几行`Redux`的代码,就会常常看到,进行`action`的拆分,将事件动作的类型定义成常量

::: details 点击即可查看

```
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';  // 监听input框输入值的常量
const ADD_INPUT_CONTENT = 'ADD_INPUT_CONTENT';    // 添加列表
const DELETE_LIST = 'DELETE_LIST';                // 删除列表

function reducer(state, action) {
    const newState =  JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
             // ...
        case ADD_INPUT_CONTENT:
             // ...
        case DELETE_LIST;
              // ...
        default:
             return state;
    }

}
```

:::

以上代码在`Redux`中很常见,将`action`对象中的`type`值,给抽离出来,定义一个常量存储,来代表一种业务逻辑,通常希望这些常量是唯一的,在`Redux`中定义成常量,是为了便于调试查错

常常因为取`type`值时,非常苦恼.

现在有了`Symbol`,改写一下,就可以这样

```
const CHANGE_INPUT_VALUE = Symbol()
const ADD_INPUT_CONTENT = Symbol();
const DELETE_LIST = Symbol()

function reducer(state, action) {
    const newState =  JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case CHANGE_INPUT_VALUE:
             // ...
        case ADD_INPUT_CONTENT:
             // ...
        case DELETE_LIST;
              // ...
        default:
             return state;
    }

}
```

通过`Symbol`定义字符串常量,就保证了三个常量的值唯一性

::: tip 划重点

- 常量使用`Symbol`值最大的好处,就是其他任何值都不可能有相同的值了,可以保证常量的唯一性,因此,可以保证上面的`switch`语句按照你设计的方式条件去工作
- 当`Symbol`值作为属性名时,该属性是公开属性,不是私有属性
  :::

- ### 应用场景 5-注册和获取全局的`Symbol`

在浏览器窗口(`window`)中,使用`Symbol()`函数来定义生成的`Symbol`实例是唯一的

但是若应用涉及到多个`window`,最常见的就是在各个页面窗口中嵌入`iframe`了,并在各个`iframe`页面中取到来自同一份公共的数据源

也就是在各个`window`中使用的某些`Symbol`希望是同一个,那么这个时候,使用`Symbol()`就不行不通了

因为用它在不同`window`中创建的`Symbol实例`总是唯一的，而我们需要的是在所有这些`window环境下`保持一个共享的`Symbol`值。

在这种情况下，我们就需要使用另一个 API 来创建或获取`Symbol`，那就是`Symbol.for()`，它可以注册或获取一个`window`间全局的`Symbol实例`，它是`Symbol`的一个静态方法

这个在前面已经提到过一次,这个还是有那么一点点用处,所以在提一嘴的

如下示例代码所示

```
let gs1 = Symbol.for('global_symbol_1')  //注册一个全局Symbol
let gs2 = Symbol.for('global_symbol_1')  //获取全局Symbol

console.log(gs1 === gs2 ) // true
```

经过`Symbol.for()`实例化出来的`Symbol`字符串类型,只要描述的内容相同,那么不光是在当前`window`中是唯一的,在其他全局范围内的`window`也是唯一的,并且相同

该特性,若是创建跨文件可用的`symbol`，甚至跨域（每个`window`都有它自己的全局作用域） , 可以使用 `Symbol.for()`取到相同的值

也就是说,使用了`Symbol.for()`在全局范围内,`Symbol`类型值可以共享

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

- ### `Symbol`函数不能使用`new`命令

`Symbol`函数前不能使用`new`命令,否则就会报错,`Symbol`是一个原始类型的值,不是对象,它是类似字符串的数据类型

- ### `Symbol值`作为对象属性名时，不能用点运算符

当`Symbol`值作为对象的属性名时,访问它时,不能用点运算符

```js{4}
const username = Symbol();
const person = {};
person.username = '随笔川迹';
person[username]; // undefined
person['username']; // 随笔川迹
```

第 4 行代码值为`undefined`,因为点运算符后面总是字符串,所以不会读取`username`作为标识符名所指代的那个值

导致`person`对象的属性名实际上是一个字符串,而不是一个`Symbol`值

由此可见:在对象内部,使用`Symbol`类型定义属性名时,**`Symbol`值必须放在中括号之中**

```
let s = Symbol();
let obj = {
  [s]: function(arg) {
    return arg;
  }
}

obj[s]("itclanCoder")
```

在上面的代码中,如果变量`s`不放在中括号中,该属性的键名就是字符串`s`,而不是定义`Symbol`类型值

## 总结

本文主要介绍了`Es6`中`Symbol`的常见使用,`Symbol`是一种新的基础类型,它形式字符串的数据类型,是字符串类型的一种额外拓展

常用于作为对象属性的键名,每个从`Symbol()`返回的`symbol值`都是唯一的,可保证对象的每个属性名的唯一性,可解决属性名的冲突问题

`Symbol()`函数会返回`symbol`类型的值，该类型具有静态属性(如`Symbol().description`,)和静态方法(`Symbol.for()`,`Symbol.keyFor()`)

当然也介绍了`Symbol`的一些常见应用场景,作为对象的属性名(key),定义类的私有属性和方法,替代常量,以及注册全局`Symbol`等,以及一些注意事项

关于`Symbol`暂且就这么多,还是得多多使用

## 相关参考文档

- [Es6 标准入门-Symbol](https://es6.ruanyifeng.com/#docs/symbol)
- [MDN-Symbol](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [MDN-Symbol 介绍](https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)

<div align="right">
  <ShareLink />
</div>
<div align="center">
  <DaShang />
</div>
