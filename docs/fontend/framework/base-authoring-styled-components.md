---
title: React基础(10)-React中编写样式css(styled-components)
autoGroup-1: React基础
---

## React 中编写样式 css(styled-components)

## 快速导航

<TOC />

## 前言

React 是一个构建用户界面的 js 库,从`UI=render()`这个等式中就很好的映射了这一点,`UI`的显示取决于等式右边的`render`函数的返回值.

而编写`React`应用,就是在编写`React`组件,组件中最重要的数据就是`props`和`state`,有了数据,怎么让其以什么样的显示,那就是 CSS 做的事情了

在`React`中,一切皆可以是`Js`,也就是说在`js`里面可以写`css`,这相比传统的内容(`html`),层叠样式(`css`),行为动作(`js`)进行分离,这种分离仅仅是把三个不同的技术进行了物理上的分离,进行分开管理,如果从另一个视觉角度上讲,并没有实现高内聚的特点

既然前端本身就是页面的展示,那么把`js`和`css`放在一起,也是一种细粒度的组合,`css`也可以和`Js`一样,通过模块化的形式嵌入到 js 里面去

`CSS modules`很好的解决了样式冲突,利用了分而治之的理念,在如今组件化开发大行其道上,同样 css 也在不断的进化,如同 js 一样,也有变量,函数等具备`Js`一样的活力,那么在`React`中是怎么实现样式的模块化的?

- 通过单独的`*.css`文件定义组件的样式,并且通过`clssName`指定他们,有什么不好的？
- 在`JSX`上进行事件的监听绑定,通过`on*EventType`只针对原生的`HTML`标签起作用的,如果是自定义的组件,是不起作用的,有什么好的解决办法?
- 样式化组件的魅力(特点)

那么本节就是你想要知道的

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-authoring-styled-components/01-guide.jpg" alt="JSX" />
</div>

## React 中组件形式

关于`React`中定义组件的形式,有如下几种方式,其中前两个在之前的学习当中,相信你已经很熟悉了的,如果不清楚,可以查看前面的内容的

- 类`class`声明的组件(类组件/容器组件)
- 函数式声明的组件(函数组件/无状态组件/`UI`组件)
- 样式化组件(`styled-components`)

本节主要讲的就是样式化组件,给一个 React 组件添加样式,有哪些方式?下面一起来看看的

## 行内样式 VS 外部样式

想要给`React`组件添加样式,常见的方式有

- 在`JSX`上添加`style`属性定义行内样式

- 通过`import`关键字引入外部样式

像如下所示,在`JSX`上添加样式: 下面的代码是用`class`类组件声明了一个`Header`组件,这个组件返回了一个`button`按钮,给这个按钮通过`style`添加了一些样式

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <button
          style={{
            width: '100px',
            height: '40px',
            borderRadius: '3px',
            outline: 'none',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            background: '#abcdef',
            color: '#fff',
          }}
        >
          button按钮
        </button>
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Header />, container);
```

对于上面的行内样式,也可以把它定义成一个对象 Object 的方式去定义样式,与下面是等价的

```js
class Header extends Component {
  render() {
    const btnStyle = {
      width: '100px',
      height: '40px',
      borderRadius: '3px',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      background: '#abcdef',
      color: '#fff',
    };
    return (
      <Fragment>
        <button style={btnStyle}>button按钮</button>
      </Fragment>
    );
  }
}
```

虽然这样也是在`JS`中写`css`样式,但是管理起来并不方便,很多时候,我们是用`clssName`的方式去定义样式的 ,按照我们熟悉的方式,就是把样式文件命名成`*.css`,然后通过`import`的方式给引入进去

```js
import './style.css';
```

对于样式名,有时候,对于各个不同的组件的`className`有可能会一样,如果是这样的话,后面引入的样式名会覆盖前面的,这样的话显然不是我们想要的结果了

那有什么好的解决办法?

在`React`中有`css-in-js`,它是一种模式,这个`css`由`js`生成而不是在外部文件中定义,是`CSS Modules`,主要是借助第三方库生成随机类名称的方式来建立一种局部类名的方式

这种`css-in-js`的第三方模块有很多:可以访问:`https://github.com/MicheleBertoli/css-in-js`

今天的主要学习的是`github`上`star`数最多的,`styled-components`

使用`styled-components`的好处是:它可以让组件自己的样式对自己生效,不是全局生效,做到互不干扰

首先你得通过`npm`或者`cnpm`进行安装`styled-components`模块

```js
npm install -S styed-components
```

在安装完后,在使用`styled-components`的文件内,通过`import`的方式引入该模块

如下代码所示: 在文件的上方引入`styled-components`,实例化了一个`styled`对象,通过给`styled`对象下添加你想要的 html 元素,利用了`Es6`中的一个模板字符串,反引号

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'; // 引入styled-components库,实例化styled对象

// 声明样式ButtonA组件,通过styled对象进行创建,注意styled.html元素,后面是反引号
const ButtonA = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #abcdef;
  color: #fff;
`;

// 样式化声明ButtonB组件
const ButtonB = styled.button`
  background: red;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
`;

class Header extends Component {
  render() {
    return (
      <Fragment>
        <ButtonA>按钮A</ButtonA>
        <ButtonB>按钮B</ButtonB>
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Header />, container);
```

这是渲染的结果:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-authoring-styled-components/02-render.jpg" alt="JSX" />
</div>

**注意**:要避免在`render`方法中声明样式化组件 如下所示:这样程序虽然不报错,但是会引起性能问题,引起组件不必要的渲染

下面这种做法是不推荐的,应当避免使用

```js
class Header extends Component {
  render() {
    const ButtonA = styled.button`
      width: 100px;
      height: 40px;
      border-radius: 3px;
      outline: none;
      border: none;
      cursor: pointer;
      background: #abcdef;
      color: #fff;
    `;

    // 声明样式ButtonB组件,不应该在render函数里面声明样式组件
    const ButtonB = styled(ButtonA)`
      background: red;
    `;
    return (
      <Fragment>
        <ButtonA>按钮A</ButtonA>
        <ButtonB>按钮B</ButtonB>
      </Fragment>
    );
  }
}
```

因为在`render`方法中声明样式化组件，每次都会动态渲染创建一个新的组件。这意味着`React`必须在每个后续渲染中丢弃并重新计算`DOM`树的那部分，而不是仅计算它们之间发生变化的差异。这会导致性能瓶颈

正确的做法就是如同刚开始那样,把样式组件放到组件最外面去

当然,为了便于样式的集中管理,对于样式化组件,我们往往会把它写在一个文件中去,把上面的样式组件放到一个`style.js`的文件中去,然后通过`Es6`中模块化的`export`的方式对外暴露出去,只要哪个组件模块需要,直接通过`import`引入即可

```js
import styled from 'styled-components'; // 引入styled-components

// 声明样式ButtonA组件
const ButtonA = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #abcdef;
  color: #fff;
`;

// 声明样式ButtonB组件
const ButtonB = styled.button`
  background: red;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
`;

// 对外暴露出去
export { ButtonA, ButtonB };
```

细心的朋友你会发现,其实两个按钮有很多相同的样式,只有背景颜色不一样而已,如果重复写很多样式,那么肯定是有很多冗余的代码,`styled-components`中提供了继承的能力

要创建一个继承另一个样式的新组件,只需将其包装在`styled`(继承的组件)构造函数中即可,如下所示

```js
// 声明样式ButtonA组件
const ButtonA = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  background: #abcdef;
  color: #fff;
`;

// 声明样式ButtonB组件,同时样式ButtonB组件继承了ButtonA组件的样式,又给自身拓展了样式,更改了自身的背景色
const ButtonB = styled(ButtonA)`
  background: red;
`;
```

在要使用样式组件的地方通过`import`引入`ButtonA`,`ButtonB`组件

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { ButtonA, ButtonB } from './style';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <ButtonA>按钮A</ButtonA>
        <ButtonB>按钮B</ButtonB>
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Header />, container);
```

## 样式组件可以接收 props

对于组件外部定义的属性,在样式组件内可以进行接收,写一些简单的逻辑表达式 如下所示:在确定按钮组件内设置了一个`color`属性,在样式组件内可以通过`props`进行接收

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from './style';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Button>取消</Button>
        <Button color="red">确定</Button>
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Header />, container);
```

在样式组件内,属性值可以通过`Es6`中的插值表达式,`${表达式}`的方式进行指定的逻辑判断,达到自己想要的目的

```js
import styled from 'styled-components'; // 引入styled-components

// 声明样式Button组件
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 3px;
  outline: none;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.color ? 'red' : '#fff')};
  color: ${(props) => (props.color ? '#fff' : 'red')};
  border: 2px solid red;
  margin-right: 15px;
`;

// 对外暴露出去
export { Button };
```

渲染的结果如下所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-authoring-styled-components/03-render.jpg" alt="JSX" />
</div>

这里只是为了说明在样式化组件内部可以接收 props 值,有时候,在一些场景下是很有用的

例如:自己封装一些自己组件,不同大小按钮等等的,通过在组件外部设置属性值,然后在样式组件内部进行接收,控制组件的样式 UI 形态

当然这种简单的样式处理,完全是可以用上面继承的方式去处理的

值得注意的是,在插入背景图片时,是不支持直接插入的,这样是不生效的

```js
const Content = styled.div`
  width: 550px;
  height: 290px;
  background: url('./react.jpg');
`;
```

引入本地图片必须得通过定义变量的方式来实现,如下所示

```js
import BgImg from './react.jpg'; // 将图片定义成一个变量的方式来引用

const Content = styled.div`
  width: 550px;
  height: 290px;
  background: url(${BgImg}); // 注意这里用Es6中的模板语法
`;
```

## `.attrs`方法支持给组件添加属性

`attrs`是一个构造方法,可以给样式组件添加自身的额外属性(这个属性只允许`html`标签原生自有的属性),不支持自定义属性,要想添加自定义属性,只能在 jsx 元素上进行添加

`attrs`可接收两种类型的参数:

- 参数可以接收一个对象,通过它添加的属性,会被合并到样式组件当中去
- 参数可以是一个函数,如果有`props`值,则可使用该模式 如下代码所示

```js
import styled from 'styled-components'; // 引入styled-components

// 参数是一个对象
const Input = styled.input.attrs({
  placeholder: '请输入信息',
  type: 'text',
})`
  width: ${(props) => props.width};
  height: ${(props) => (props.size === 'small' ? '24px' : '40px')};
  font-size: 14px;
  text-indent: 10px;
  border-radius: 3px;
  border: 1px solid palevioletred;
  display: block;
  margin: 0 0 1em;

  ::placeholder {
    color: palevioletred;
  }
`;

// 对外暴露出去
export { Input };
```

在要引用组件处

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

import { Input } from './style';

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Input width="150px" placeholder="请输入账号" size="small" />
        <Input
          width="200px"
          placeholder="请输入密码"
          size="large"
          type="password"
        />
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Header />, container);
```

渲染结果如下所示:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-authoring-styled-components/04-render.jpg" alt="JSX" />
</div>

如果有参数可以将样式组件写成下面这样,`attrs`内可接收一个函数,并且通过`props`接收外部的属性值

```js
const Input = styled.input.attrs((props) => ({
  // 参数是一个函数,可以通过props进行接收
  placeholder: '请输入信息',
  type: 'text',
}))`
  width: ${(props) => props.width};
  height: ${(props) => (props.size === 'small' ? '24px' : '40px')};
  // 如下省略
`;
```

**注意**:关于样式的优先级

行内样式>外部样式(样式组件),如果行内元素设置的了默认值,则行内样式优先

否则,在`attrs`内设置的属性会覆盖外部的属性

至于什么时候用`attrs`

使用`attrs`将属性传递给样式化组件

当你希望样式化组件的每个实例都具有该`prop`时使用`attrs`，换句话说,通过`attrs`设置的属性,它是公共的,如果每个实例需要不同的实例时则可直接传递`props`

## 如何覆盖默认样式

有时候,需要覆盖样式最粗鲁的方式就是在属性后面加权重,通过`！important`来完成，但这很容易出错,并且很容易出问题

具体的实现方式是通过&符号的方式,每添加一个`&`符号,都会随机生成一个类样式

```js
const ButtonB = styled(ButtonA)`
  &&& {
    color: palevioletred;
    font-weight: bold;
  }
`;
```

如下图所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-authoring-styled-components/05-render.jpg" alt="JSX" />
</div>

## 如何覆盖内联样式

内联样式的优先级是最高的,始终优先于外部`CSS`，因此无法通过简单地样式组件覆盖它,但是有具体的解决办法的, 就是使用`&[style]`和`！important`加权重的方式

有时候,如果在`JSX`上声明了行内样式,但是外部想要覆盖它,那么这个时候,`&[style]`和`import`加权重的方式就很有用了的,但是在实际开发中,应该避免使用行内样式,在这里只是为了说明诸如此类的解决办法

```js
const ButtonB = styled(ButtonA)`
  &[style] {
    background: blue !important;
    font-weight: bold;
  }
`;
```

同样，每追加一个`&`符号,都会新添加一个类,在实际的项目中,应当少用行内样式的,不要一时爽,后面给自己挖坑的

## 重置全局样式

对于`React`中重置默认样式,它使用的是`createGlobalStyle`这个函数,需要从`styled-components`中注入 如下所示:

```js
import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
   html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }

`;
export default globalStyle;
```

一般而言,把重置样式单独的定义成一个文件,单独的引入到`index.js`当中去的,全局生效的

需要注意的是:在早先的版本中使用全局的方式是`injectGlobal`,而这个`API`已经废弃,并由`styled-components v4`中的`createGlobalStyle`替换了

## CSS-module 编写样式

在使用`create-react-app`脚手架创建的项目后,该项目是支持`css-module`的

但是需要注意以下几点:

- 样式文件的名称必须以`xxx.module.css`或者`xxx.module.scss`的形式命名:例如`styles.module.css`或者`styles.module.scss`
- 以变量的形式导入样式文件,比如:`import styles from './style.module.css'`,如果是直接导入`xxx.css`,在`JSX`元素上的`className`的属性名称,是无法通过变量对象引入样式的,如果是直接引入样式,则在`className`的属性值中直接引入类名即可
  `className`以变量引用的方式进行添加,例如:`className ={styles.counter}`
- 使用`sass`时,脚手架创建的项目,默认是支持`sass`的,使用时只需要安装一下`node-sass`这个包即可

在根文件夹下定义`styles.module.css`文件,写入如下几行样式代码

```js
.counter{
    text-align: center;
}

.button{
    padding: 0 10px;
}

.spanText{
    padding: 0 15px;
}
```

在使用`css-module`样式的文件内,通过`import`的方式引入该`xxx.module.css`文件

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css'; // 引入styles.module.css,实例化一个styles对象

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <Fragment>
        <div className={styles.counter}>
          <button className={styles.button} onClick={this.decrement}>
            -
          </button>
          <span className={styles.spanText}>{this.state.count}</span>
          <button className={styles.button} onClick={this.increment}>
            +
          </button>
        </div>
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Counter />, container);
```

具体效果如下所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-authoring-styled-components/01-add.gif" alt="JSX" />
</div>

对于以上的写法,是我们在`React`中常见的写法,但是如果用`styled-components`的方式,那又该怎么样？如下代码所示

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components'; // 引入styled-components

// 在Render函数外定义样式组件
const CounterWrap = styled.div`
  text-align: center;
`;

const SpanText = styled.span`
  padding: 0 15px;
`;

const Button = styled.button`
  padding: 0 10px;
`;

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <Fragment>
        <CounterWrap>
          <Button onClick={this.decrement}>-</Button>
          <SpanText>{this.state.count}</SpanText>
          <Button onClick={this.increment}>+</Button>
        </CounterWrap>
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Counter />, container);
```

当然你可以跟之前一样,把样式组件单独的抽离出去的,然后通过`export`对外暴露出去的,当需要使用时,在另一文件内通过`import`引入即可

对于样式组件的命名:因为是组件,所以约定俗成的首字母大写,这是为了区分普通的 html 标签元素

小 tip:在`vs-code`推荐插件:`vscode-styled-components`

下面来总结一些`styled-components`的一些特性

## styled-components 支持的特性

- 支持嵌套,变量和继承:可以使用类似`sass`,`less`的语法嵌套,可以使用变量来设置不同的样式,使用这些不同样式时只需要给样式组件传递一个参数就可以了的,在样式化组件内部可以通过`props`来接收外部的的参数值
- 事件监听绑定:对于自定义的样式化组件可以进行事件监听的绑定,这正是解决类 class 声明的自定义组件,无法绑定事件监听的痛点,`onEventType`事件类型只针对原生`HTML`标签才起作用，而样式化组件正好弥补了这一点
- 模块化`css`:按需引入组件的代码,避免了一些多余的代码
- 唯一类名,没有类名错误,重复:`styled-components`生成的样式生成唯一的类名。永远不必担心重复，重叠或拼写错误
- 更容易的删除样式,维护简单:编写的样式都与特定组件相关联,如果组件未使用（工具可以检测到）并被删除，则所有样式都将被删除,保持功能性的单一,达到了高内聚,低耦合的组件化特点
- **动态样式**:样式组件内可以接收参数,很简单地调整和拓展组件的样式，而不需要建立很多个 `class` 类来维护组件的样式

## 结语

本文主要讲解了`React`编写样式的姿势,并不是什么高大上的内容,比较基础

通过`styled-components`第三方库的的引入,编写样式化组件,这个并不是必须的,视项目公司团队而定,不使用这个,通过`css-module`编写`React`的样式也是可以的

当然若是使用了`styled-components`,便解决了一些问题,例如,样式覆盖,命名等痛点,以及解决了在类声明组件当中,无法给自定义组件绑定事件的问题

本文只是学习了`styled-components`的一些常用的知识,至于更多`styled-components`详细的使用:可以多查阅`styled-components`的官方文档的

[styled-components 官方文档](https://www.styled-components.com/)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
