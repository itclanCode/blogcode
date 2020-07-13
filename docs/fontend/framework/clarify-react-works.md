---
title: 理清React的工作方式
sidebarDepth: 3
collapsable: true
---

## 理清 React 的工作方式

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/clarify-react-works/react-works1.jpg" alt="react工作方式" />
</div>

## 快速导航

<TOC />

## 前言

在接触 React 之前,我们也许习惯了 DOM 编程,那它相比于原生 JS,JQ 编程方式,究竟有什么区别？React 的工作方式是什么样子的?所谓的虚拟 DOM 又指的是什么?以及 React 的工作方式的优点有哪些?
那么本篇就是你想要知道的

## 从一个简单的 React 组件应用开始

我们先看一个加减数字框组件,具体效果如下所示,分别通过原生 JS 和 JQ 是怎么实现的

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/clarify-react-works/01-react-works1.gif" alt="数字加减" />
</div>

- ### 原生 JS 实现

DOM 结构

```html
<div>
  <button id="reduce">-</button>
  <input id="input" type="text" value="0" />
  <button id="add">+</button>
</div>
```

CSS 层叠样式

```css
* {
  padding: 0;
  margin: 0;
}

div {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  position: fixed;
  left: 40%;
  top: 10%;
}

button {
  padding: 10px;
}

input {
  text-align: center;
}
```

对应的 JS

```js
// 获取DOM元素
var oBtnReduce = document.querySelector('#reduce'),
  oInput = document.querySelector('#input'),
  oBtnAdd = document.querySelector('#add');

// 添加事件
oBtnAdd.onclick = function() {
  oInput.value++;
};

oBtnReduce.onclick = function() {
  oInput.value--;
};
```

- ### JQ 实现

```js
var $reduce = $('#reduce'),
  $input = $('#input'),
  $add = $('#add'),
  $nowVal = $('#input').val();

$reduce.click(function() {
  $input.val($nowVal--);
});

$add.click(function() {
  $input.val($nowVal++);
});
```

当然,你把事件添加在内联元素身上,可以在行内元素里面添加事件,通过传参的方式去控制,如下代码所示,也是可以的

```js
<div>
   <button onclick = "handleClick('-')" id = "reduce">-</button>
   <input id = "input" type="text" value="0">
   <button onclick = "handleClick('+')" id = "add">+</button>
</div>
<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.js"></script>

<script type="text/javascript">

function handleClick(flag) {
  var nowVal = $("#input").val();
  if(flag == '+') {
    $("#input").val(parseInt(nowVal) +1);
  }else if(flag == '-' ) {
    $("#input").val(parseInt(nowVal) -1);
  }
}
</script>
```

对于在原生 JS,JQ 中,通过内联方式添加事件,是不推荐的,然而在如今的一些面向数据编程,例如 React,Vue 等框架中,这一方式却得到了支持与延续,要从面向 DOM 编程转移到面向数据编程

- ### React 实现

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CountNum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: 0,
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <button onClick={this.handleClickReduce.bind(this)}>-</button>
        <input
          style={{ textAlign: 'center' }}
          value={this.state.inputVal}
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.handleCLickAdd}>+</button>
      </div>
    );
  }

  handleCLickAdd = () => {
    this.setState({
      inputVal: this.state.inputVal + 1,
    });
  };

  // handleCLickAdd(){
  //   this.setState({
  //   inputVal: this.state.inputVal+1
  //  })
  // }

  handleClickReduce() {
    this.setState({
      inputVal: this.state.inputVal - 1,
    });
  }

  handleInputChange(e) {
    let changeVal = e.target.value;
    this.setState({
      inputVal: changeVal++,
    });
  }
}

const container = document.getElementById('root');

ReactDOM.render(<CountNum />, container);
```

从上面一看,对于刚接触 React 的小伙伴来说,可能觉得用原生 JS,JQ 实现起来很简单呀,React 写起来的代码,什么玩意的,那么一大堆的,JS 里面还写 HTML 代码,简直恶心到不行,并未达到,内容结构,层叠样式,逻辑的分离,如果对于这部分内容有疑惑的,可以阅读之前两篇 JSX 的文章的

- [深入浅出 JSX](./jsx-in-depth)
- [不可不知的 JSX](./the-indispensable-jsx)

对于 JS,JQ 的实现方式,主要工作是在操作 DOM,获取元素,添加事件,执行操作。对于简单的业务实现,是没有什么问题的,但是当 DOM 结构层级比较深,要进行一些复杂的逻辑操作时,此时,不断的操作 DOM 就变得非常恶心了的

这里并不是忽视原生 JS,即使有了一些上层的框架简化了操作,但核心的逻辑代码编写仍然是要写的,只是关注点不一样了的

而在 React 中,我们可以发现,并没有操作 DOM 的过程,一切以数据为中心,数据是什么,页面就显示什么

并没有像 JS,JQ 一样获取元素,添加事件然后执行一些操作的动作.

对于大型项目迭代开发,这种方式编写的代码会更容易的管理,因为 React 只是用作于视图 UI 层的渲染工作,我们关心的是渲染成什么样子,而不需要关心如何实现渲染,怎么进行 DOM 操作

这就好比在业界里有这么一句话,优秀的程序员关心数据结构,平凡的程序员操心代码一样,如果把 JQ,与 React 做这样一个对比,前者就是 React,在这里没有任何贬低 JQ 的意思.

JQ 仍然是无比强悍的,每个技术都有与之对应的应用场景.

况且也没有 JQ 实现不了的,只不过是略繁琐一些而已.

至少在没有出现 React,vue,Angular 等这些框架之前,它仍然是霸主统治性地位存在的,然而现在真的不得不说,它的确是在走向落寞.

从上面的 React 代码中,我们可以归结出,React 的理念可以用这么一个公式表示

```
UI = render(data)
```

这个等号左边 UI 用户界面的显示取决于等号右边的 render 函数,这个 render 函数接收一个数据 data 作为参数,这个函数是一个纯函数,也可以称为是无状函数(函数式组件),换而言之,类似这种只用作 UI 显示的函数,我们可以用无状态函数去定义

因为它只负责页面的渲染,没有去做任何逻辑操作的时候,UI 组件我们一般都可以用无状态组件来定义，UI 组件只负责页面的渲染,当然这并不是绝对的,有时候,也可以做一些简单逻辑的操作

使用无状态组件(函数组件),它的性能是高于普通组件的,因为它是函数,而用 class 类定义的组件，类生成的对象里面有生命周期函数,所以它执行起来肯定没有函数组件(UI 组件)快

对于我们开发来说,最重要的是区分哪些是属于 data,哪些是属于 render,想要更新用户界面,要做的是更新 data,用户的界面自然会做出响应,所以把 React 称为响应式编程(面向数据编程)

::: tip 注意
`render`函数返回的值,组件生成的 HTML 结构只能有一个单一的根节点
:::

## Virtual(虚拟) DOM

元素(JSX)是构成 React 应用的最小砖块,它描述了你在在屏幕上看到的 UI 内容

与浏览器的 DOM 元素不同,React 元素时创建开销极小的普通对象,并不会跟原生操作 DOM 一样,影响整个 DOM 的重绘渲染,React DOM 会负责更新 DOM 与 React 元素保持一致

React 只更新它需要更新的部分,React DOM 会将元素和它的子元素与它们之前的状态进行比较,并只会进行必要的更新,例如:如下示例

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/clarify-react-works/react-works2.gif" alt="虚拟DOM" />
</div>

具体代码如下所示

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <Fragment>
      <div style={{ textAlign: 'center' }}>
        <h1>欢迎关注微信itclancoder公众号</h1>
        <p>现在北京时间是 {new Date().toLocaleTimeString()}</p>
      </div>
    </Fragment>
  );

  const container = document.getElementById('root');

  ReactDOM.render(element, container);
}

setInterval(tick, 1000);
```

当然,我们可以对它进一步的优化,写成一个组件,如下所示

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <h1>欢迎关注微信itclanCoder公众号</h1>
          <p>现在是北京时间:{this.state.date.toLocaleTimeString()}</p>
        </div>
      </Fragment>
    );
  }

  // 生命周期函数,组件挂载时自动执行这个方法,组件已经被渲染到 DOM 中后运行
  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  // 组件卸载时,清除定时器
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
}

const container = document.getElementById('root');
ReactDOM.render(<Clock />, container);
```

对于上面的代码,涉及到初始化`state`状态数据,以及`componentDidMount`和`componentWillUnmount`两个生命周期函数

在组件挂载时设置一个定时器函数,自动更新时间,在组件卸载时,清除定时器,通过`setState`这个方法,实时更新 state 数据。
更多相关 state 以及 props,生命周期的知识,暂时知道这么用就可以了,后续会有更详细的内容介绍的
尽管每一秒我们都会新建一个描述整个 UI 树的元素,但是 React DOM 只会更新实际改变了的内容，也就是上面中的文本节点

这是因为 React 利用 Virtual DOM,让每次渲染都只重新渲染最少的 DOM 元素

而操作 DOM 会引起整个浏览器对网页进行重排重绘。

**DOM 树是对 HTML 的抽象,而 vitrtual DOM 就是对 DOM 树的抽象,虚拟 DOM 不会触及浏览器,虚拟 DOM 本质上就是 javascript 对象**,还记得前面说过的 JSX 是 React.createElement()方法的一个语法糖?

它是存在于 javascript 空间树形结构,每次自上而下渲染 React 组件时,会对比这一次产生的 virtual DOM 和上一次渲染的 virtual DOM,对比就会发现差别,然后修改真正的 DOM 树时就只需要修改中的部分就可以了的

## React 的工作方式及优点

在没有组件化`React`,`Vue`,`Angular`之前,毫无疑问,JQ 是最直观易懂的,但是当项目逐渐变得复杂庞大时,用 JQ 写出来的代码耦合度就没那么高了的,正是这样,也就诞生了一些 requirejs 以及 Seajs 解决一些问题,但是使用 JQ 写出来的代码往往互相纠缠 如下图所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/clarify-react-works/react-works2.jpg" alt="JQ工作方式" />
</div>
使用React的方式,就可以避免构建这样复杂的程序结构,无论何种事件,引发的都是React组件的重新渲染,它只会修改数据变化的的DOM部分,并不需要去关心怎么去操作DOM

如下图所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/clarify-react-works/react-works3.jpg" alt="React的工作流程" />
</div>
在React中，对`JSX`元素上添加事件,是通过`on*EventType` 这种内联方式添加的,不需要手动调用浏览器原生的 `addEventListener` 进行事件监听,在React中,它已经帮我们封装好了一些事件类型属性（`onClick`,`onChange`,`onFocus`,`obBlur`等）

当需要给某个 JSX 元素监听事件的时候,只需要通过内联方式,在 React 元素上加`on*EventType`就可以了,注意这里事件类型的写法,驼峰式命名法

也无需考虑浏览器的兼容性,这里要格外注意的是,这些 on\*EventType 的事件监听只能用在普通的 HTML 的标签上（div,input,p,a 等原生浏览器支持的标签），而不能用在组件标签上。也就是说， `<Button onClick={…} />` 这样的写法是不起作用的

如果想要在组件标签上监听事件起作用,也可以做到,就是结合第三方模块 `styled-components`样式组件进行使用,是可以做到的,更多内容,你可以参考官网[styled-components](https://styled-components.com)

这里简单提一下:

- 终端里,安装`styled-components: npm install --save styled-components`
- 在文件中引入`styled-components`模块
- 样式组件定义使用,如下所示

```
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-comonents"; // 引入styled-components模块,并引入了styled这个变量对象
// 样式化组件定义
export const Button = styled.button`
  outline:none;
`
// class Button extends Component {

// render() {
// return (
// <button>按钮</button>
// );

// }

// }
class CountNum extends Component {
    constructor(props) {
    super(props);

    this.state = {
      inputVal: 0
    }
}

render() {
return (
   <div style = {{ textAlign: "center", marginTop: "50px"}}>
     <button onClick = { this.handleClickReduce.bind(this) }>-</button>
     <input style = {{ textAlign: "center"}} value = { this.state.inputVal } onChange = { this.handleInputChange.bind(this) } />
     <button onClick = { this.handleCLickAdd }>+</button>
     <Button onClick = { this.handleBtnClick.bind(this) }>按钮</Button>
</div>
);
}

handleBtnClick() {
  alert("我是样式组件,简直帅呆了");
}

handleCLickAdd = () => {
   this.setState({
     inputVal: this.state.inputVal+1
   });
}

// handleCLickAdd(){
// this.setState({
// inputVal: this.state.inputVal+1
// })
// }

handleClickReduce() {
  this.setState({
  inputVal: this.state.inputVal-1
 })
}

handleInputChange(e) {
  let changeVal = e.target.value;
    this.setState({
      inputVal: changeVal++
    });
 }
}


const container = document.getElementById('root');

ReactDOM.render(<CountNum />, container);
```

具体效果如下所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/clarify-react-works/react-works3.gif" alt="React的工作流程" />
</div>
React的编程模式是函数式编程来解决用户界面渲染问题的,也称为面向数据编程，一切皆是JS,基于组件开发模式,这在以后的React编码中将会体会越来越深

## 结语

本文主要从一个简单的`React`数字框组件应用开始,分别用原生`JS`,`JQ`,`React`进行了实现,在`React`中 UI 视图取决于`render`函数返回的内容,数据是什么,就让页面显示什么,无需关注 DOM 操作,并且 React 引入了虚拟 DOM

它是对 DOM 树的一种抽象,本质上就是一 js 对象,当进行视图的改变时,当 React 的子元素内容发生改变时,并不会引起整个浏览器的重绘和重排,只会更改变化的数据部分,并且在给 JSX 添加事件监听时,使用`on*EnentType`的方式

并且这种事件的监听,它只作用于原生 HTML 元素上,若放在自定义的组件上时,是不起作用的,具体解决办法,可以引入第三方 `styled-components` 模块的,后续单独拿一篇幅来说也不为过的,涉及到的知识还是挺多的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
