---
title: 解析 super 关键字
---

## 解析 super 关键字

## 快速导航

<TOC />

## 前言

在写`React`中,用类`class`声明的组件,常常看到,React 组件内数据初始化往往放在`constructor`构造器函数里面,而子类继承`React.Component`,如果想要接收父组件的数据

那么必须要调用`super(props)`,同时还需要让`constructor`构造器函数接收一个`props`参数,否则的话,在当前组件内是无法获取到外部组件传过来的值的

```
import React, { Component } from 'react'
import ReactDom from 'react-dom'


class Button extends Component {
  constructor(props) {
      super(props)
  }
  render() {
    const { content } = this.props;
    return (
      <div>
           <button>{content}</button>
      </div>
    )
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Button content="按钮" />, container);
```

在 React 中你经常会看到上面的代码,如果一个组件需要定义自己的构造函数,那么就一定要调用`super(props)`,也就是继承了`React.Component`构造函数

**至于为什么要调用`super(props)`方法,因为 Es6 采用的是先创建父类实例的 this,然后在用子类的构造函数修改 this**

**如果没有`constructor`构造器函数,调用`super()`,以及参数`props`,它是会报错的**

**在组件实例被构造之后,该组件的所有成员函数都无法通过`this.props`访问到父组件传递过来的`props`值**

下面一起来详细了解下`super`这个关键字

它不仅仅是一个关键字，还可以作为函数调用和对象使用

## super 作为函数调用

当`super` 作为函数调用时, 它代表的指向的是父类的构造函数,在子类的构造函数必须执行一次`super`函数

也就是说,在子类继承父类中，如果`super`作为函数调用，只能写在子类的构造函数(constructor)里面，`super`代表的是父类的构造函数

```
class A {          // class关键字声明了一个类A
  constructor() {
  }
}

class B extends A { // class关键字声明了类B继承自A类
  constructor() {   // constructor构造器函数
    super();        // 调用super()
  }
}

new A() // A
new B() // B
```

在上面的代码中,子类 B 的构造函数之中的`super()`,它代表调用父类的构造函数。这是必须的,否则 JavaScript 引擎就会报错。
::: tip 注意
super 虽然代表了父类 A 的构造函数,但是返回的是子类 B 的实例,即 super 内部的 this 指向的是 B 的实例
:::
这里的`super`相当于 A 类的`constructor`构造函数,会执行 A 的`constructor`,但是此时的`this`指向的是 B,所以打印出 B

换一种理解是：在执行`super`时，A 把 constructor 方法给了 B，此时 B 有了 A 的功能，但是执行的是 B 的内容，也就是 es5 的`A.prototype.constructor.call(this)`

而作为函数调用:它必须只能在子类的构造器函数(constructor)中进行调用的,如果放在其他地方,则是会报错的,如下所示:

```
class A {}

class B extends A {
  fun() {
    super(); // 报错,super()不能放置在函数内调用
  }
}
```

在上面代码中,`super()`用在 B 类的`fun`方法之中,就会造成语法错误

## super 作为对象使用

`super`作为对象使用时，分为在**普通方法中使用**和在**静态方法中使用**

- **普通方法使用**:`super`指向父类的原型,即`A.prototype`,可以访问到原型上的方法和属性,也就是指向它父类的原型对象

```
class Animal {     // class关键字声明了一个Animal类
    constructor() {
    }
    parent(){  // 类Animal的一个方法
        console.log('我是父类Animal的普通方法... ...');
    }
}

class Dog extends Animal {   // class关键字定义了Dog继承自Animal类
    constructor() {
        super()
    }
   watchHome(){            // 子类watchHome为Dog的方法
       super.parent() // 我是父类的普通方法
       // 等价于Animal.prototype.parent() // // 我是父类的普通方法
   }
}
const dog = new Dog()
dog.watchHome()
```

在上面代码中,子类 `Dog` 当中的 `super.parent()`, 就是将 `super` 当做一个对象使用, 此时, `super`在普通方法之中, 指向`A.prototype`, 所以`super.parent()`就相当于 `Animal.prototype.parent()`

::: tip 注意
由于 super 指向父类的原型对象, 所以定义在父类实例上的方法或属性, 是无法通过 super 调用的
:::

```
class Animal {
    constructor() {
        this.name = '父类上的实例上的属性'
    }
}

class Dog extends Animal {
   watchHome(){
       return super.name
   }
}
const dog = new Dog()
console.log(dog.watchHome()); // undefined,定义在父类实例上的属性, 无法通过super调用
```

在上面代码中 `name` 是父类`Animal`实例的属性, `super.name` 就引用不到它

但如果属性是定义在父类的原型对象上,`super`就可以取到,如下所示

```
class Animal {

}

Animal.prototype.name = 'super实例上的属性'

class Dog extends Animal {
    watchHome() {
        return super.name
    }
}

const dog = new Dog()
console.log(dog.watchHome()); // super实例上的属性,可以拿到父类中原型下的name属性,定义在原型下的属性和方法都是公有的
```

而在`ES6`中规定, 在子类普通方法中, 通过 `super` 调用父类的方法时, 方法内部的 `this` 指向当前子类的实例. 如下所示

```
class A {
  constructor() {
    this.name = "itclanCoder";   // 定义在A类的私有属性
  }
  print() {   // 定义在A类的print私有方法
    console.log(this.name);
  }
}

class B extends A {  // 类B继承自类A
  constructor() {
    super();         // 调用父类的super
    this.name = "随笔川迹";     // 子类B的私有属性
  }
  m() {
    super.print();
  }
}

let b = new B();
b.m() // 随笔川迹

```

`super.print()`虽然调用的是`A.prototype.print()`，但是`A.prototype.print()`内部的`this`指向子类 B 的实例
导致输出的是"随笔川迹"，而不是`"itclanCoder"`。也就是说，实际上执行的是`super.print.call(this)`

**这个特性很有用,可以用于重写(覆盖)父类的私有属性**

由于`this`此时指向子类实例，所以如果通过`super`对某个属性赋值，这时 super 就是 this，赋值的属性会变成子类实例的属性

```
class A {
  constructor() {
    this.name = "itclanCoder";
  }
}

class B extends A {
  constructor() {
    super();
    this.name = "itclan";     // 子类B的私有属性
    super.name = "川川";
    console.log(super.name);  // undefined,super是父类,而name是父类的私有属性,无法直接访问
    console.log(this.name);   // 川川
  }
}

let b = new B();
```

在上面面示例代码中，`super.name`赋值为"川川"，这时等同于对`this.name`赋值为`川川`。而当读取`super.name`的时候，它读的是`A.prototype.name`，所以返回`undefined`

- **如果用在静态方法之中**

如果 `super`作为对象,用在静态方法之中,这时`super`将指向父类 , 而不是父类的原型对象

```
class Parent {
    static myMethod(msg) {  // 父类的方法之前加静态static关键字
        console.log('static1', msg);
    }

    myMethod(msg) {            // 父类的私有普通方法
        console.log('instance2', msg);
    }
}

class Child extends Parent {  // 类child继承自篇Parent
    static myMethod(msg) {    // 子类的私有myMethod方法前声明static
        super.myMethod(msg); // super在静态方法中指向父类, 而不是父类的原型
    }

    myMethod(msg) {
        super.myMethod(msg); // super在普通方法中指向父类的原型
    }
}

Child.myMethod(1); // static1 1

var child = new Child();
child.myMethod(2); // instance2 2
```

上面代码中，super 在静态方法之中指向父类，在普通方法之中指向父类的原型对象

另外，**在子类的静态方法中通过 super 调用父类的方法时，方法内部的 this 指向当前的子类而不是子类的实例**

如下代码所示

```
class A {
  constructor() {
    this.x = 1;
  }
  static print() {
    console.log(this.x);
  }
}

class B extends A {
  constructor() {
    super();
    this.x = 2;
  }
  static m() {
    super.print();
  }
}

B.x = 3;
B.m() // 3
```

上面代码中，静态方法`B.m`里面，`super.print`指向父类的静态方法。这个方法里面的`this`指向的是 B，而不是 B 的实例

::: warning 注意
当使用 super 的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错

```
class A {}

class B extends A {
  constructor() {
    super();
    console.log(super); // 报错
  }
}

```

:::
在上面代码中，`console.log(super)`当中的`super`，是无法看出是作为函数使用，还是作为对象使用，所以 JavaScript 引擎解析代码的时候就会报错。这时，如果你能清晰地表明 super 的数据类型，就不会报错

```
class A {}

class B extends A {
  constructor() {
    super();
    console.log(super.valueOf() instanceof B); // true
  }
}

let b = new B();
```

在上面代码中，`super.valueOf()`表明 super 是一个对象，因此就不会报错。同时，由于 super 使得 this 指向 B 的实例，所以`super.valueOf()`返回的是一个 B 的实例

`instanceof`:的作用是`A instanceof B`,A 是否是由 B 实例化出来的,若是则为`true`,若不是则为`false`

- [MDN 相关参考文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super)
- [Es6 标准入门-super 关键字](https://es6.ruanyifeng.com/#docs/class-extends#super-%E5%85%B3%E9%94%AE%E5%AD%97)

## 总结

关于`super`关键字的使用,确实是复杂,主要的功能是可以在子类中调用父类的方法,在子类中调用父类的普通方法时,只能定义放置在构造器函数中,否则就会报错,无法直接引用父类的私有属性,但是却可以应用父类中的原型下的属性和方法

`super`关键字可以用于覆盖重写父类型中的属性,这也是它的一个作用,有时候在面试的时候,只要问到 class 继承,深一点话,就会问到`super`关键字

在做面向对象开发时,这个`super`也是非常重要的

<div align="right">
  <ShareLink />
</div>
<div align="center">
  <DaShang />
</div>
