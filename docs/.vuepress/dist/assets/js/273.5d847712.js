(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{1843:function(s,n,e){"use strict";e.r(n);var a=e(12),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"解析-super-关键字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解析-super-关键字"}},[s._v("#")]),s._v(" 解析 super 关键字")]),s._v(" "),e("h2",{attrs:{id:"快速导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),e("TOC"),s._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),e("p",[s._v("在写"),e("code",[s._v("React")]),s._v("中,用类"),e("code",[s._v("class")]),s._v("声明的组件,常常看到,React 组件内数据初始化往往放在"),e("code",[s._v("constructor")]),s._v("构造器函数里面,而子类继承"),e("code",[s._v("React.Component")]),s._v(",如果想要接收父组件的数据")]),s._v(" "),e("p",[s._v("那么必须要调用"),e("code",[s._v("super(props)")]),s._v(",同时还需要让"),e("code",[s._v("constructor")]),s._v("构造器函数接收一个"),e("code",[s._v("props")]),s._v("参数,否则的话,在当前组件内是无法获取到外部组件传过来的值的")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import React, { Component } from 'react'\nimport ReactDom from 'react-dom'\n\n\nclass Button extends Component {\n  constructor(props) {\n      super(props)\n  }\n  render() {\n    const { content } = this.props;\n    return (\n      <div>\n           <button>{content}</button>\n      </div>\n    )\n  }\n}\n\nconst container = document.getElementById('root');\n\nReactDOM.render(<Button content=\"按钮\" />, container);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("在 React 中你经常会看到上面的代码,如果一个组件需要定义自己的构造函数,那么就一定要调用"),e("code",[s._v("super(props)")]),s._v(",也就是继承了"),e("code",[s._v("React.Component")]),s._v("构造函数")]),s._v(" "),e("p",[e("strong",[s._v("至于为什么要调用"),e("code",[s._v("super(props)")]),s._v("方法,因为 Es6 采用的是先创建父类实例的 this,然后在用子类的构造函数修改 this")])]),s._v(" "),e("p",[e("strong",[s._v("如果没有"),e("code",[s._v("constructor")]),s._v("构造器函数,调用"),e("code",[s._v("super()")]),s._v(",以及参数"),e("code",[s._v("props")]),s._v(",它是会报错的")])]),s._v(" "),e("p",[e("strong",[s._v("在组件实例被构造之后,该组件的所有成员函数都无法通过"),e("code",[s._v("this.props")]),s._v("访问到父组件传递过来的"),e("code",[s._v("props")]),s._v("值")])]),s._v(" "),e("p",[s._v("下面一起来详细了解下"),e("code",[s._v("super")]),s._v("这个关键字")]),s._v(" "),e("p",[s._v("它不仅仅是一个关键字，还可以作为函数调用和对象使用")]),s._v(" "),e("h2",{attrs:{id:"super-作为函数调用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#super-作为函数调用"}},[s._v("#")]),s._v(" super 作为函数调用")]),s._v(" "),e("p",[s._v("当"),e("code",[s._v("super")]),s._v(" 作为函数调用时, 它代表的指向的是父类的构造函数,在子类的构造函数必须执行一次"),e("code",[s._v("super")]),s._v("函数")]),s._v(" "),e("p",[s._v("也就是说,在子类继承父类中，如果"),e("code",[s._v("super")]),s._v("作为函数调用，只能写在子类的构造函数(constructor)里面，"),e("code",[s._v("super")]),s._v("代表的是父类的构造函数")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class A {          // class关键字声明了一个类A\n  constructor() {\n  }\n}\n\nclass B extends A { // class关键字声明了类B继承自A类\n  constructor() {   // constructor构造器函数\n    super();        // 调用super()\n  }\n}\n\nnew A() // A\nnew B() // B\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("在上面的代码中,子类 B 的构造函数之中的"),e("code",[s._v("super()")]),s._v(",它代表调用父类的构造函数。这是必须的,否则 JavaScript 引擎就会报错。")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("super 虽然代表了父类 A 的构造函数,但是返回的是子类 B 的实例,即 super 内部的 this 指向的是 B 的实例")])]),s._v(" "),e("p",[s._v("这里的"),e("code",[s._v("super")]),s._v("相当于 A 类的"),e("code",[s._v("constructor")]),s._v("构造函数,会执行 A 的"),e("code",[s._v("constructor")]),s._v(",但是此时的"),e("code",[s._v("this")]),s._v("指向的是 B,所以打印出 B")]),s._v(" "),e("p",[s._v("换一种理解是：在执行"),e("code",[s._v("super")]),s._v("时，A 把 constructor 方法给了 B，此时 B 有了 A 的功能，但是执行的是 B 的内容，也就是 es5 的"),e("code",[s._v("A.prototype.constructor.call(this)")])]),s._v(" "),e("p",[s._v("而作为函数调用:它必须只能在子类的构造器函数(constructor)中进行调用的,如果放在其他地方,则是会报错的,如下所示:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class A {}\n\nclass B extends A {\n  fun() {\n    super(); // 报错,super()不能放置在函数内调用\n  }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("在上面代码中,"),e("code",[s._v("super()")]),s._v("用在 B 类的"),e("code",[s._v("fun")]),s._v("方法之中,就会造成语法错误")]),s._v(" "),e("h2",{attrs:{id:"super-作为对象使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#super-作为对象使用"}},[s._v("#")]),s._v(" super 作为对象使用")]),s._v(" "),e("p",[e("code",[s._v("super")]),s._v("作为对象使用时，分为在"),e("strong",[s._v("普通方法中使用")]),s._v("和在"),e("strong",[s._v("静态方法中使用")])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("普通方法使用")]),s._v(":"),e("code",[s._v("super")]),s._v("指向父类的原型,即"),e("code",[s._v("A.prototype")]),s._v(",可以访问到原型上的方法和属性,也就是指向它父类的原型对象")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Animal {     // class关键字声明了一个Animal类\n    constructor() {\n    }\n    parent(){  // 类Animal的一个方法\n        console.log('我是父类Animal的普通方法... ...');\n    }\n}\n\nclass Dog extends Animal {   // class关键字定义了Dog继承自Animal类\n    constructor() {\n        super()\n    }\n   watchHome(){            // 子类watchHome为Dog的方法\n       super.parent() // 我是父类的普通方法\n       // 等价于Animal.prototype.parent() // // 我是父类的普通方法\n   }\n}\nconst dog = new Dog()\ndog.watchHome()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("在上面代码中,子类 "),e("code",[s._v("Dog")]),s._v(" 当中的 "),e("code",[s._v("super.parent()")]),s._v(", 就是将 "),e("code",[s._v("super")]),s._v(" 当做一个对象使用, 此时, "),e("code",[s._v("super")]),s._v("在普通方法之中, 指向"),e("code",[s._v("A.prototype")]),s._v(", 所以"),e("code",[s._v("super.parent()")]),s._v("就相当于 "),e("code",[s._v("Animal.prototype.parent()")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("由于 super 指向父类的原型对象, 所以定义在父类实例上的方法或属性, 是无法通过 super 调用的")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Animal {\n    constructor() {\n        this.name = '父类上的实例上的属性'\n    }\n}\n\nclass Dog extends Animal {\n   watchHome(){\n       return super.name\n   }\n}\nconst dog = new Dog()\nconsole.log(dog.watchHome()); // undefined,定义在父类实例上的属性, 无法通过super调用\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("p",[s._v("在上面代码中 "),e("code",[s._v("name")]),s._v(" 是父类"),e("code",[s._v("Animal")]),s._v("实例的属性, "),e("code",[s._v("super.name")]),s._v(" 就引用不到它")]),s._v(" "),e("p",[s._v("但如果属性是定义在父类的原型对象上,"),e("code",[s._v("super")]),s._v("就可以取到,如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Animal {\n\n}\n\nAnimal.prototype.name = 'super实例上的属性'\n\nclass Dog extends Animal {\n    watchHome() {\n        return super.name\n    }\n}\n\nconst dog = new Dog()\nconsole.log(dog.watchHome()); // super实例上的属性,可以拿到父类中原型下的name属性,定义在原型下的属性和方法都是公有的\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("而在"),e("code",[s._v("ES6")]),s._v("中规定, 在子类普通方法中, 通过 "),e("code",[s._v("super")]),s._v(" 调用父类的方法时, 方法内部的 "),e("code",[s._v("this")]),s._v(" 指向当前子类的实例. 如下所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('class A {\n  constructor() {\n    this.name = "itclanCoder";   // 定义在A类的私有属性\n  }\n  print() {   // 定义在A类的print私有方法\n    console.log(this.name);\n  }\n}\n\nclass B extends A {  // 类B继承自类A\n  constructor() {\n    super();         // 调用父类的super\n    this.name = "随笔川迹";     // 子类B的私有属性\n  }\n  m() {\n    super.print();\n  }\n}\n\nlet b = new B();\nb.m() // 随笔川迹\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[e("code",[s._v("super.print()")]),s._v("虽然调用的是"),e("code",[s._v("A.prototype.print()")]),s._v("，但是"),e("code",[s._v("A.prototype.print()")]),s._v("内部的"),e("code",[s._v("this")]),s._v('指向子类 B 的实例\n导致输出的是"随笔川迹"，而不是'),e("code",[s._v('"itclanCoder"')]),s._v("。也就是说，实际上执行的是"),e("code",[s._v("super.print.call(this)")])]),s._v(" "),e("p",[e("strong",[s._v("这个特性很有用,可以用于重写(覆盖)父类的私有属性")])]),s._v(" "),e("p",[s._v("由于"),e("code",[s._v("this")]),s._v("此时指向子类实例，所以如果通过"),e("code",[s._v("super")]),s._v("对某个属性赋值，这时 super 就是 this，赋值的属性会变成子类实例的属性")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('class A {\n  constructor() {\n    this.name = "itclanCoder";\n  }\n}\n\nclass B extends A {\n  constructor() {\n    super();\n    this.name = "itclan";     // 子类B的私有属性\n    super.name = "川川";\n    console.log(super.name);  // undefined,super是父类,而name是父类的私有属性,无法直接访问\n    console.log(this.name);   // 川川\n  }\n}\n\nlet b = new B();\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("在上面面示例代码中，"),e("code",[s._v("super.name")]),s._v('赋值为"川川"，这时等同于对'),e("code",[s._v("this.name")]),s._v("赋值为"),e("code",[s._v("川川")]),s._v("。而当读取"),e("code",[s._v("super.name")]),s._v("的时候，它读的是"),e("code",[s._v("A.prototype.name")]),s._v("，所以返回"),e("code",[s._v("undefined")])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("如果用在静态方法之中")])])]),s._v(" "),e("p",[s._v("如果 "),e("code",[s._v("super")]),s._v("作为对象,用在静态方法之中,这时"),e("code",[s._v("super")]),s._v("将指向父类 , 而不是父类的原型对象")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class Parent {\n    static myMethod(msg) {  // 父类的方法之前加静态static关键字\n        console.log('static1', msg);\n    }\n\n    myMethod(msg) {            // 父类的私有普通方法\n        console.log('instance2', msg);\n    }\n}\n\nclass Child extends Parent {  // 类child继承自篇Parent\n    static myMethod(msg) {    // 子类的私有myMethod方法前声明static\n        super.myMethod(msg); // super在静态方法中指向父类, 而不是父类的原型\n    }\n\n    myMethod(msg) {\n        super.myMethod(msg); // super在普通方法中指向父类的原型\n    }\n}\n\nChild.myMethod(1); // static1 1\n\nvar child = new Child();\nchild.myMethod(2); // instance2 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("上面代码中，super 在静态方法之中指向父类，在普通方法之中指向父类的原型对象")]),s._v(" "),e("p",[s._v("另外，"),e("strong",[s._v("在子类的静态方法中通过 super 调用父类的方法时，方法内部的 this 指向当前的子类而不是子类的实例")])]),s._v(" "),e("p",[s._v("如下代码所示")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class A {\n  constructor() {\n    this.x = 1;\n  }\n  static print() {\n    console.log(this.x);\n  }\n}\n\nclass B extends A {\n  constructor() {\n    super();\n    this.x = 2;\n  }\n  static m() {\n    super.print();\n  }\n}\n\nB.x = 3;\nB.m() // 3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("p",[s._v("上面代码中，静态方法"),e("code",[s._v("B.m")]),s._v("里面，"),e("code",[s._v("super.print")]),s._v("指向父类的静态方法。这个方法里面的"),e("code",[s._v("this")]),s._v("指向的是 B，而不是 B 的实例")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),e("p",[s._v("当使用 super 的时候，必须显式指定是作为函数、还是作为对象使用，否则会报错")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class A {}\n\nclass B extends A {\n  constructor() {\n    super();\n    console.log(super); // 报错\n  }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])]),s._v(" "),e("p",[s._v("在上面代码中，"),e("code",[s._v("console.log(super)")]),s._v("当中的"),e("code",[s._v("super")]),s._v("，是无法看出是作为函数使用，还是作为对象使用，所以 JavaScript 引擎解析代码的时候就会报错。这时，如果你能清晰地表明 super 的数据类型，就不会报错")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("class A {}\n\nclass B extends A {\n  constructor() {\n    super();\n    console.log(super.valueOf() instanceof B); // true\n  }\n}\n\nlet b = new B();\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("在上面代码中，"),e("code",[s._v("super.valueOf()")]),s._v("表明 super 是一个对象，因此就不会报错。同时，由于 super 使得 this 指向 B 的实例，所以"),e("code",[s._v("super.valueOf()")]),s._v("返回的是一个 B 的实例")]),s._v(" "),e("p",[e("code",[s._v("instanceof")]),s._v(":的作用是"),e("code",[s._v("A instanceof B")]),s._v(",A 是否是由 B 实例化出来的,若是则为"),e("code",[s._v("true")]),s._v(",若不是则为"),e("code",[s._v("false")])]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/super",target:"_blank",rel:"noopener noreferrer"}},[s._v("MDN 相关参考文档"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://es6.ruanyifeng.com/#docs/class-extends#super-%E5%85%B3%E9%94%AE%E5%AD%97",target:"_blank",rel:"noopener noreferrer"}},[s._v("Es6 标准入门-super 关键字"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),e("p",[s._v("关于"),e("code",[s._v("super")]),s._v("关键字的使用,确实是复杂,主要的功能是可以在子类中调用父类的方法,在子类中调用父类的普通方法时,只能定义放置在构造器函数中,否则就会报错,无法直接引用父类的私有属性,但是却可以应用父类中的原型下的属性和方法")]),s._v(" "),e("p",[e("code",[s._v("super")]),s._v("关键字可以用于覆盖重写父类型中的属性,这也是它的一个作用,有时候在面试的时候,只要问到 class 继承,深一点话,就会问到"),e("code",[s._v("super")]),s._v("关键字")]),s._v(" "),e("p",[s._v("在做面向对象开发时,这个"),e("code",[s._v("super")]),s._v("也是非常重要的")]),s._v(" "),e("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}})],1)}),[],!1,null,null,null);n.default=t.exports}}]);