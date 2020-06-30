---
title: 不可不知的 JSX
collapsable: true
---

## 快速导航

<TOC />

## 不可不知的 JSX

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/the-indispensable-jsx/jsx-01.jpg" alt="JSX" />
</div>
## 前言

当您读完本文,就`get`到

1.  JSX 中添加属性有什么要注意的?以及 JSX 中的子元素是怎么操作的?
2.  React 组件中的大小写问题,使用拓展运算符,以及怎么循坏遍历一个对象
3.  JSX 中的 prop 指的是什么?以及表单的 labe 应该要注意什么?

## JSX 添加特定属性

自定义标签拓展了原生`HTML`标签不具备的能力,**最大的一个用处就是属性传值,标签的属性值,可以是字符串,变量对象**

例如:如下所示

```
const element = <div divIndex ="0"></div>
```

当然也可以使用下面这种方式,是等价的,用一个大括号`{ }`将变量包裹起来

```
const element = <div divIndex={"0"}></div>
```

至于更多插值表达式内容,你可以看上一节[深入浅出 JSX](/fontend/framework/jsx-in-depth)

这里要提一下,在属性中嵌入 javascript 表达式,不要在双大括号外面加上引号,例如,下面的是错误的

```
const element = <div divIndex="{ variable }"></div>
```

也就是说,对于字符串或者双大括号中的表达式,对于同一属性,不能同时使用这两种符号
::: warning 注意
`JSX语法`是更接近`Javascript`而不是`HTML`，只是长得像而已,对于 Reat 中自定义组件的属性名称,使用 `camelCase`驼峰式命名来定义属性的名称,例如:定义 JSX 里的 class 属性 className,而 divindex 变成 divIndex
:::

## JSX 中的子元素

在原生`HTML`标签中,要是对于`DOM结构树`熟悉的话,理解 JSX 的子元素也是比较容易的

原生 HTML 的标签叫做节点,节点有节点属性,以及节点的内容

如果一个标签或者 React 组件没有内容,你是可以使用 />,单标签来闭合的,就像 XML 语法一样

例如如下所示

```
const element = <img src={ user.avatarUrl} />
```

JSX 标签里面能够包含很多个子元素

例如:如下所示

```
const element = (
   <div>
      <h1 title="我是子h1元素属性的内容">我是子h1元素的节点内容</h1>
      <h2>欢迎关注微信itclanCoder公众号</h2>
      <h3>川川是全宇宙最帅的小伙子</h3>
   </div>
)
```

包含在开始和结束标签之间的 JSX 表达式内容将会被作为特定属性 `props.children`传递给外层组件
其中

有下面几种不同的方法来传递子元素

- ### 字符串字面量
  你可以将字符串放在开始和结束标签之间,此时`props.children`就只是该字符串,对于内置的 HTML 元素是很有用的,但同时要注意怎么接收这个内容

```
<MyComponent>itclanCoder</MyComponent>
```

上面的`JSX,MyComponent`的子元素内容是`itclanCoder`,可以通过`props.children`来获取，它是一个没有转移的字符串 itclanCoder

JSX 会移除首尾行以及空行,与标签相邻的空行都会被删除,文本字符串之间的新航都会被压缩一个空格
所以下面的这几种写法都是等价的,但是笔者建议,该换行就换行的

```
<div>itclanCoder</div>
<div>
  itclanCoder
</div>
<div>
  川川
  itclanCoder
</div>
<div>
  itclanCoder
</div>
```

- ### JSX 子元素嵌套

在 React 中,子元素允许由多个 JSX 元素组成,组件可以嵌套组件

例如:如下所示

```
<MyContainer>
   <Header />
   <Navigator />
   <Aside />
   <Footer />
</MyContainer>
```

在 React 中,是可以将不同类型的子元素混合在一起的,这跟在以前写 HTML 是一样的

```
<div>
  七月的天好热
  <ul>
   <li>item1</li>
   <li>item2</li>
   <li>item3</li>
  </ul>
</div>
```

在 React 组件中,render 函数的 return 的返回值,可以返回一个数组,例如

```
render() {
// return 后面是一个数组
return [
  <div key="div1">div1</div>,
  <div key="div2">div2</div>,
  <div key='div3'>div3</div>
]
}
// 当然为了更好的看得舒服些的,最好是定义一个变量的
render() {
var aDiv = [
   <div key="div1">div1</div>,
   <div key="div2">div2</div>,
   <div key='div3'>div3</div>
]
  return aDiv;
}
```

- ### javascript 表达式作为子元素

在插值表达式中,`javascript`表达式可以被包裹在双大括号`{}`中,以下两种写法都是等价的,这跟上面提到的是一样的

```
<myComponent>川川</myComponent>
// 等价于
<myComponent>{'川川'}</myComponent>
```

至于这种写法的具体实用:对于展示任意长度的列表就非常有用了的,渲染 HTML 列表

```
import React from 'react';
import ReactDOM from 'react-dom';
class Item extends React.Component {
constructor(props) {
  super(props);
}
render() {
return (
  <ul>
    <li>{ this.props.message }</li>
  </ul>
);
}
}
class TodoLIst extends React.Component {
constructor(props) {
   super(props);
   this.todos = ['起床', '刷牙', '洗脸', '工作'];
}
render() {
return (
<div>
 {
   this.todos.map((message) => <Item key = {message} message = { message } />)
  }
</div>
);
}
}
const container = document.getElementById('root');
ReactDOM.render(<TodoLIst />, container);
```

效果如下所示:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/the-indispensable-jsx/jsx-02.jpg" alt="JSX" />
</div>

- ### 函数作为子元素

`{}`插值表达式内可以可以变量,字符串,普通 HTML 元素,甚至可以是组件,还可以是函数

```
import React from 'react';
import ReactDOM from 'react-dom';

function Repeat(props){
  let items = [];
  for(let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{ items }</div>
}
function ListOfTenFun() {
   return (
    <Repeat numTimes={ 10 }>
     {
       (index) => <div key={index}>我是列表 { index }</div>
     }
   </Repeat>
)
}
const container = document.getElementById('root');
ReactDOM.render(<ListOfTenFun />, container);
```

效果如下所示:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/the-indispensable-jsx/jsx-03.jpg" alt="JSX" />

</div>
上面使用的是两个函数组件,组件里面是可以嵌套另一组件的,并且属性值可以通过`props`拿到

也说明了,你是可以将任何东西作为子元素传递给自定义的组件的

只要该组件渲染之前能够被转换成 React 理解的对象,它可以用于拓展 JSX

## 自定义的组件必须是大写字母开头

通常来说,**如果在 React 中小写字母开头的 html 标签,称为普通元素,它是原生 HTML 内置的元素(也可以视为为组件)**

例如: `<div><span><a>`会被 React 转化生成相应的字符串 `div`, `span`传递给 `React.createElement`作为参数

大写字母开头的元素,我们将它视为自定义的组件,例如 <MyButton />

其实它最终也会被`React.createElement`函数作为转化
**使用大写字母开头命名自定义组件,这是一种约定俗成的规定,本质上它就是一构造函数,是为了区别普通函数的**

模拟类的功能,但 Es6 提供了类的语法,以后更多的使用的还是 Es6 的 class

JSX 标签的第一部分指定了 React 元素的类型

**凡是大写字母开头的 JSX 标签元素,就意味着它们是 React 组件**

如果你定义的一个组件首字母是小写,React 就会当做一个普通元素来处理,而原生 HTML 标签并没有把你自定义的元素归纳进去,它是会报错的

例如:如下所示

```
import React from 'react';
import ReactDOM from 'react-dom';

// 以下是定义的函数组件,首字母小写,这个是不正确的
function myButton(props) {
return (
  <div>
   <button>{ props.content }</button>
  </div>
)
}
function OutButton(){
  return (
   <myButton content="按钮" />
  );
}
const container = document.getElementById('root');
ReactDOM.render(<OutButton />, container);
// 正确的写法,首字母大写,驼峰式命名
function MyButton(props) {
return (
  <div>
    <button>{ props.content }</button>
  </div>
)
}
ReactDOM.render(<OutButton />, container);
```

虽然错误的写法不会报错,它会将 `button`认为是一个`html`普通的标签元素.不会达到预期的效果
::: warning 注意:

React 必须在作用域内,**JSX 其实就是 React.createElement 函数的语法糖**,`React.createElement`是更接近底层的 API,所以 React 库也必须包含在 JSX 代码作用域内

**引入 React 库一部分目的就是为了识别 JSX 语法的,这也是为什么只要你定义一个 React 组件时,要引入 React 库的原因**
:::

## 使用点(.)语法

有时候,在一个模块中需要导出多个`React`组件时,在 JSX 中,使用点语法来引用一个 React 组件就非常方便了的

例如:如下所示

```
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
// MyButton组件
class MyButton extends Component {
   constructor(props){
   super(props);
}
render() {
return (
  <Fragment>
    <button>{ this.props.btnContent }</button>
  </Fragment>
);
}
}
// MyInput组件
class MyInput extends Component{
  constructor(props) {
  super(props);
}
render() {
return (
  <Fragment>
     <input value = { this.props.inputValue } />
   </Fragment>
);
}
}
// 搜索部分
class SearchArea extends Component {
render() {
return (
  <Fragment>
    <FormComponent.MyInput inputValue="我是input组件输入框内容" />
    <FormComponent.MyButton btnContent="搜索按钮" />
  </Fragment>
);
}
}
let FormComponent = {
  MyButton: MyButton,
  MyInput: MyInput
}
// 或者下面是Es6的一种等价写法
let FormComponent = {
  MyButton,
  MyInput
}
const container = document.getElementById('root');
ReactDOM.render(<SearchArea />, container);
```

最终结果如下图所示:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/the-indispensable-jsx/jsx-04.jpg" alt="JSX" />
</div>

上面是把页面中的某一个模块(搜索),把与之相关的组件集中放在一个对象下管理,当然在实际开发中,因人而异了,要是看到别人这么写,也不要觉得怪怪的

## 拓展运算符-属性展开

对于拓展运算符`(...)`,是一个非常有用的语法,如果你已经有了一个`props对象`

你**可以使用展开运算符 `...`在 JSX 中传递整个 props 对象**
如下所示:

```
function PersonA() {
  return (
   <Info name="川川" age="一个靠前排的90后帅小伙" />
  );
}
// 上面的return后面的等价于
function personA() {
  const props = { name: "川川", age:"一个靠前排的90后帅小伙"}
  return (
    <Info { ...props } />
  );
}
function Info(props){
  return (
    <div>{ props.name }--{ props.age }</div>
);
}
const container = document.getElementById('root');
ReactDOM.render(<PersonA />, container);
```

::: tip 如何将一对象进行输出？

对于数组对象,可以通过 map 方法进行输出,然而假如是对象的话,却是没有这个方法的
具体使用的是`Object.keys`(对象)这个方法,它会返回一个数组,并且将对象的属性名保存在一个数组中,如果是要获取对象的属性值,则可以先转数组,然后在使用数组的一些方法：例如 map 方法进行处理一下
:::

```
var obj = {
name: "川川",
age: "你猜,小鲜肉一枚"
}
var getAttr = Object.keys(obj);
var getValue = Object.keys(obj).map((item) => obj[item]);
console.log(getAttr); // ["name", "age"]
console.log(getValue);// ["川川", "你猜,小鲜肉一枚"]
```

如下真实例子所示:

```
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';


class List extends Component {
    constructor(props) {
    super(props);
    // 下面是为简化代码,绑定this
    this.content = this.props.content;
    this.value = this.props.value;
}

render() {
return (
   <Fragment>
     <ul>
       {
         <li>{ this.content }-- { this.value }</li>
       }
     </ul>
   </Fragment>
);
}
}

class Person extends Component {
    constructor(props) {
    super(props);

    this.person = {
       name: "川川",
       age: "一个靠前排的90后帅小伙",
       desc: "欢迎关注微信itclanCoder公众号"
    }
}

render() {
   let getPerson = Object.keys(this.person);
   return (
     <Fragment>
     {
       getPerson.map((item) => <List key = { item }
                           content = { item }
                           value = { this.person[item]} />
                )
     }
     </Fragment>
);
}
}

const container = document.getElementById('root');

ReactDOM.render(<Person />, container);
```

最终的效果如下所示:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/the-indispensable-jsx/jsx-05.jpg" alt="JSX" />
</div>

## JSX 中的 props

自定义组件定义的属性称为`prop`,而属性值称为`prop值`,由于组件可以定义多个属性

所以可以有多种方式在 JSX 中指定 props

由于 JSX 会被转换为 React.createElement(组件元素, 属性对象, 子元素)

例如:如下 JSX

```
const info = {
title:"我是一个组件",
number: 20
}
// 将info对象存储到infoMessage变量属性中,并传给MyComponent组件
<MyComponent infoMessage = { info }>my component</MyComponent>
// 最终会被转化为
React.createElement(MyComponent, { infoMessage: info}, 'my component')
```

对于怎么校验 JSX 转换为`React.createElement()`可以去 babel 在线编译的官网校验的
打开如下网址即可
[babeljs-io-JSX 转化](https://babeljs.io/repl/#?presets=react&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA)

调用组件处,被称为父组件,而定义组件处,被称为子组件,对应的子组件想要接收父组件的值,用 props 去接收

## label 中的 htmlFor

在原生`html`标签中`label`与`input`中的 for 与 id 结合使用,增大鼠标的触控范围,起到增强用户体验的作用

for 在 JSX 中应该被写作 `htmlFor`

```
<label htmlFor="firstname">First name:</label>
<input type="text" name="firstname" id="firstname">
```

结果如下所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/the-indispensable-jsx/jsx.gif" alt="JSX" />
</div>

## 结语

本文主要讲述**在 JSX 中添加属性的命名方式应是 camelCase 驼峰式命名来定义属性的名称**，JSX 中的子元素可以是字符串,可以嵌套,以及 js 表达式,函数都可以作为子元素

并且**在 React 中组件的定义以及调用处,组件名称首字母必须要大写**,**当导出多个 React 组件时,使用点语法来引用一个 React 组件**

`使用展开运算符 ...在JSX中传递整个props对象`

某些时候,拓展运算符是一个非常有用的语法,另外,当遍历要渲染的是一对象时,对象并没有数组的一些方法,通过`Object.keys()`进行转换,然后在使用.能够得到对象的属性以及属性值

也知道 JSX 中的何为 prop,以及怎么去接收 props 值

对于 label 与 input 使用时,要注意的一些地方.

当然对于 JSX 的相关知识学习暂且就这么多了

<div align="right">
  <ShareLink />
</div>
<div align="center">
  <DaShang />
</div>
