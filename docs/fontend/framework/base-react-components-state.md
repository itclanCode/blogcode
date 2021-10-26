---
title: React基础(6)-React中组件的数据-state
autoGroup-1: React基础
---

## React 中组件的数据-state

## 快速导航

<TOC />

## 前言

- 组件中的`state`具体是什么?怎么更改`state`的数据?
- `setState`函数分别接收对象以及函数有什么区别？
- 如何划分组件的状态数据,进行自我的灵魂拷问,以及`props`与`state`的灵魂对比

那么本节就是你想要知道的

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-components-state/01-guide.jpg" alt="todolist" />
</div>

## React 中的 state

一个组件最终渲染的数据结果,除了`prop`还有`state`,`state`代表的是当前组件的内部状态,你可以把组件看成一个'状态机",它是能够随着时间变化的数据,更多的是应当在实现交互时使用,根据状态`state`的改变呈现不同的 UI 展示

在 React 中,因为不能直接修改外部组件传入的 prop 值

当需要记录组件自身数据变化时，想要使组件具备交互的能力,那么需要有触发该组件基础数据模型改变的能力,那么此时就需要使用`state`

一旦组件的状态(数据)发生更改,组件就会自动的调用`render`函数重新渲染`UI`,更改这个`state`状态是通过`this.setState`方法来触发实现的

下面我们从一个简单的点击按钮,显示和隐藏的效果开始: 效果如下所示:

连续点击按钮,上方的`itclanCoder`文本在显示和隐藏进行切换,当状态为`true`时,`itclanCoder`文本显示,状态为`false`时,`itclanCoder`文本隐藏,注意控制台调试器

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-components-state/01-change-state.gif" alt="todolist" />
</div>

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends Component {
  constructor(props) {
    super(props);

    // 初始化state
    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div className={this.state.isShow ? 'showText' : 'hiddenText'}>
          itclanCoder
        </div>
        <div>{String(this.state.isShow)}</div>
        <div>
          <button onClick={this.handleBtnClick}>点击按钮切换文本状态</button>
        </div>
      </div>
    );
  }

  handleBtnClick = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
}

const container = document.getElementById('root');

ReactDOM.render(<Button />, container);
```

通过上面的代码,可以看出初始化`state`数据,一般在组件的构造器结尾处进行编写

在上面的`Button`组件内,通过对`this.state`的赋值,完成了对该`Button`组件内部`state`的初始化

**注意:**

- `this.state`放置的位置:应当放在构造器函数内进行使用的,否则是会报错的

- 初始化该组件当前状态的`state`值必须是一个`javascript`对象,不能是`string`,或者`number`,`boolean`等简单的基本数据类型

- 即使你想要存储一个只是数字类型的数据,也只能把它存作`state`对象下的某个字段对应的值中,这个`state`可以看做是组件自身提供的一个固定的对象,用于存储当前组件自身的状态,它是私有的对象,并且完全只受控于当前组件

在以上代码中,通过给`button`按钮监听绑定`onClick`属性挂载点击事件处理函数(上面是`handleBtnClick`),来达到控制组件`state`中的`isShow`这个状态,从而让文本显示还是隐藏

显示和隐藏是通过添加`class`层叠样式进行设置,但是控制这个行为切换动作的,却是 js

这里用的是箭头函数,如果不用此方法,一定要记得用 bind 进行 this 坏境的绑定

在代码中,通过`this.state`可以读取当前组件状态的`state`,但是想要改变`state`的状态,并不是直接通过`this.state`进行更改,而是通过 React 内置提供的一个`setState`方法进行触发的

为了解释不能直接更改`this.state`,我们来看另一个加减数字的例子，代码如下所示

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    // this坏境的绑定
    this.handleBtnIncrease = this.handleBtnIncrease.bind(this);
    this.handleBtnReduce = this.handleBtnReduce.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <button onClick={this.handleBtnReduce}>-</button>
          <span className="text">{this.state.count}</span>
          <button onClick={this.handleBtnIncrease}>+</button>
        </div>
      </Fragment>
    );
  }

  handleBtnReduce() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  handleBtnIncrease() {
    // 尝试直接更改this.state的值,这样是有问题的
    this.state.count = this.state.count + 1;
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Count />, container);
```

当你点击加按钮的时候,页面不会有任何反应,打开控制台,会有一个警告提示 不要直接的更改 state 的值,当你在点击减号时,你会发现计数发生阶跃性变化,比如初始计数值是 0 的情况下,在你连续点击加按钮三次时,计数值没有发生任何变化

但是当你点击减号时计数值就会变成 2,这个就非常诡异了,效果如下所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-components-state/02-change-state.gif" alt="todolist" />
</div>

直接修改`this.state`的值,虽然改变了组件的内部状态,但是并没有驱动组件进行重新渲染,既然组件没有重新渲染,页面上的 UI 这个`this.state`当然不会有任何变化

但是`React`中的`setState`方法却能够触发页面的渲染,它可以接收一个对象或者函数

正确的写法应当是:利用`setState`进行对组件`state`的更改

```js
handleBtnIncrease() {
  this.setState({
    count: this.state.count+1;
  });
}
```

## React 中 setState 要知道的

**定义**: `setState`方法是`React`中`React.Component`组件所提供的一个内置的方法,当你调用这个`setState`方法的时候,`React`会更新组件的状态`state`,并且重新调用`render`方法,最终实现当前组件内部`state`的更新,从而最新的内容也会渲染到页面上

**作用**:修改组件的内部`state`的状态,往往用于更新用户界面以响应事件处理器和处理服务器数据的主要方式

**参数**:`setState`函数接收参数有两种方式,一个是对象,另一个是函数

**注意事项**

- 不能直接修改`state`,它并不会重新渲染组件,如下所示

```js
// 错误的写法 this.state.xxx = "新的值"
this.state.count = this.state.count + 1;
```

应该使用`setState()`函数去更新当前组件的状态

```js
<!--this.setState({-->
<!-- xxx: "新的值" -->
<!--});-->
this.setState({
  count: this.state.count+1
})
```

一般而言,通过在 React 中封装的事件,例如:`onChange`,`onClick`,`onKeyDown`,`onFocus`,`onBlur`等这些事件类型里面绑定事件方法内的`setState`都是异步的

有时候,`this.props`和`this.state`可能会异步更新,在调用`setState`之后,并不会立马更新组件

其实它是会批量延迟更新

也就是`props`,`state`的值并不会立马的映射更新,它是把这个`state`对象放到一个更新队列里面,然后从队列当中把新的状态提出来合并到`state`中,最后在触发`render`函数组件的更新,从而导致 UI 界面的改变

你不能依赖它来更新下一个状态

对于 SetState 什么时候同步什么时候异步?如果是 React 控制的事件处理程序以及在它的钩子(生命周期)函数内调用 setState,它不会同步的更新 state

也就是说:`React`控制之外的事件调用`setState`是同步更新的,例如原生 js 绑定的事件,`setTimeout/setInterval`等,当然在 React 中绝大多数都是异步处理的

对于实现同步,我们可以看一下下面这个代码,先看下效果:点击减号(-)按钮,页面上 `count` 变化与控制台上的值的对应关系,点击加(+)按钮与另加按钮,观看控制台也页面 UI 效果

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-components-state/03-change-state.gif" alt="todolist" />
</div>

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
    };

    // this坏境的绑定
    this.handleBtnIncrease = this.handleBtnIncrease.bind(this);
    this.handleBtnReduce = this.handleBtnReduce.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <button onClick={this.handleBtnReduce}>-</button>
          <span className="text">{this.state.count}</span>
          <button onClick={this.handleBtnIncrease}>+</button>
          <button id="btn-add">另加</button>
        </div>
      </Fragment>
    );
  }
  // 通过React绑定监听的onClick事件类型绑定的方法内的setState方法都是异步的
  handleBtnReduce() {
    this.setState({
      count: this.state.count - 1,
    });
    console.log('点击减-count值', this.state.count);
  }

  handleBtnIncrease() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log('点击加-count的值', this.state.count);
    }, 10);
  }

  // 非React绑定的事件类型方法内调用的setState,是同步的
  componentDidMount() {
    const btnAdd = document.getElementById('btn-add');
    btnAdd.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    });
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Count />, container);
```

以上通过`setTimeout/setInterval`等`addEventListener`,以`js`的事件绑定方式内调用`setState`方法,此时,`state`的值将是同步更新的

如果要追究 setState 内部执行过程,其实它是很复杂的,包括了更新 state,以及各个生命周期函数,以后有时间单独在详聊的

在这里,你只需要只知道,对于在 React 中的 JSX 绑定的事件处理函数中调用`setState`方法是异步的就可以了

如果你需要基于当前的 state 来计算出新的值,那么`setState`函数就应该传递一个函数,而不是一个对象,它可以确保每次调用的都是使用最新的 state,这一点正是取决于是否传对象和函数的区别

多个`setState`调用会合并处理

当在事件处理方法内多次调用`setState`方法时,`render`函数只会执行一次,并不会导致组件的重复渲染,因为 React 会将多个`this.setState`产生的修改放在一个队列里面进行批量延迟处理,所以从这点上讲,React 设计这个 setState 函数是非常高效的,结合了函数式编程,不用考虑性能的问题

如下代码所示: 在事件处理程序内调用`setState`方法改变`state`的值,虽然是两次调用但是并不会引起`render`函数的重复渲染,它会合并成到一个队列中执行一次操作,只有`state`或者`props`发生改变时,它才会引起`render`函数的重新渲染

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class ChangeText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      desc: '欢迎关注微信itclanCoder公众号',
      isStatus: true,
    };

    // this坏境的绑定
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  render() {
    console.log('render变化了');
    const name = this.state.isStatus ? this.props.name : '随笔川迹';
    const age = this.state.isStatus ? this.props.age : 20;
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <div>{this.state.desc}</div>
          <div>
            {name},永远的{age}岁
          </div>
          <button onClick={this.handleChangeText}>点击按钮改变上方文字</button>
        </div>
      </Fragment>
    );
  }

  handleChangeText() {
    this.setState((prevState, newProps) => ({
      isStatus: !prevState.isStatus,
    }));

    this.setState({
      desc: '学习React',
    });
  }
}
// 给props值设置一个默认初始值,外部组件若不传任何值,则显示默认值,具体这部分内容可以看上一节
ChangeText.defaultProps = {
  name: '川川',
  age: 25,
};
// 利用prop-types第三方库对外部传来的props值进行校验操作,确保输入与输出数据类型一致,这部分详细内容,可以看上一节
ChangeText.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

const container = document.getElementById('root');

ReactDOM.render(<ChangeText name="川川,一个帅小伙" age={18} />, container);
```

刷新浏览器,查看`render`函数执行的次数,当点击按钮时,只要`state`和`props`发生了改变,`render`函数就会重新渲染

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-components-state/04-change-state.gif" alt="todolist" />
</div>

从上面的代码中,在事件处理函数中调用`setState`方法时,当`setState`函数传递的是一个函数时,这个函数接收两个形参数,第一个参数`prevState`(参数名任意),是先前组件状态时的`state`,而后一个参数`newProps`(形参名任意)是此次更新被应用时的`props`,它不是必传的,具体视情况而定

直到现在,知道给`setState`函数传递一个对象与传递一个函数的区别是什么?

传递一个函数可以让你在函数内访问到当前的`state`的值,因为`setState`的调用是异步的,`this.state`.以及`this.props`不会立即更新,它会被放置到一个队列中延迟合并处理

只有当`state`和`props`数据发生改变时,`render`函数才会重新渲染

所以你是可以链式的进行更新,并确保它们是建立在另一个之上的,这样不会发生冲突

这也正是`setState`函数传递一个函数的原因,绝大多数时候,最优的方式是,你传递一个函数给`setState`就可以了,并给该函数传递两个形参（`state`,`prop`）,然后通过当中的形参来更新`state`就可以避免诡异的`bug`了

**小结一下:**

`setState`函数是用于更新当前组件的状态的,不仅可以更改`props`也可以更改`state`

它接收两种参数形式,一个是对象,另一个是函数

当需要基于当前的`state`计算出新的值进行处理,给`setState`函数应该传递一个函数而不是对象,这样可以保证每次调用的状态值都是最新的

至于为什么`React`不选择同步更新`this.state`

这是因为`React`是有意这么设计的,做异步等待,在`constructor`构造器函数执行完后,在执行`render`函数,直到所有组件的事件处理函数内调用`setState`函数完成之后,避免不必要的重新渲染来提升性能

你可以能会想,`React`不能对`this.state`进行立马更新,而不对组件进行重新渲染呢

如果`this.state`能立即更新改变,就会破坏组件的协调,只有当`props`或者`state`发生改变时,`React`通过将最新返回的 JSX 元素与原先的元素进行对比(`diff`算法),来决定是否有必要进行一次 DOM 节点的更新,如果前后 JSX 元素不相等,那么 React 才会更新 DOM
如果 props 或者 state 能被直接被修改,将会破坏组件复用的原则,会出现一些莫名其妙的 bug

## 如何划分组件的状态数据

无论是`props`还是`state`都是组件的数据,影响组件最终的 UI 展示,究竟怎么样进行区分,哪个组件应该拥有某个`state`状态,进行设置,有时候,它们是非常模糊的概念

但是在`React`中应该遵循一些原则

- 让组件尽可能的少状态
- 如果该组件只是用于`UI`渲染,数组展示,并无复杂的页面逻辑交互,那么应该让组件的数据定义成`props`,通过外部组件传入,而并非将数据设置到状态当中去

那么究竟什么样的数据属性可以视为状态？

状态(`state`)应该是会随着时间产生变化的数据,当更改这个状态(`state`),需要更新组件的 UI，就可以将它定义成`state`,更多是在实现页面的交互时使用的

另一种程度上讲,在写静态,没有任何交互页面时,不应该用`state`定义当前组件的状态用来填充页面

而应该能用外部世界(组件)传来的数据,就用外部组件传来的`props`进行数据的填充

下面的这些就不是状态(state),不应该定义成 state,如何判定该用 props 还是 state,可以进行自我的”灵魂拷问“

- 该数据是否由父组件(外部世界)通过 props 传递给子组件而来的?如果是,那么它就不是`state`
- 通过`state`或者`props`可以计算出的数据:比如一个数组的长度等,那么它就不是`state`
- 它是否随着时间的变化而保持不变?如果不改变,那么也不应该是`state`:例如:某些页面固定的标题,字段等
- 与`props`重复的数据,除非这个数据后期是需要做变更的

而针对这种无状态的组件(`UI`组件/函数式组件)

可以用纯粹的函数来定义,所谓纯函数,只有输入和输出,无状态,无生命周期钩子函数,只是用作于接收父组件传来的`props`值渲染生成`DOM`结构,无交互,无逻辑层的数据展示

无状态(函数式)组件,在性能上是最高效的,开销很低,因为没有那些生命周期函数嘛

就是一普普通通的函数,执行效率是很高的

```js
UI = render(data);
```

还记得上次提过上面的公式?`React`组件扮演的角色应该就是一个纯函数(`UI`组件),它是没有任何副作用的,由于组件的复用性原则,是不能直接修改`props`的值的

如果该组件只用于做数据层展示,无需添加生命周期函数等,就可以毫无悬念的使用无状态组件去定义,当然用箭头函数也是可以的,它就是普通函数一简写的替换,但是要注意,箭头函数没有`this`的绑定

```js
const Header = (props) => {
return (
  <div>Hello, {props.content}</div>
);
}
const container = document.getElementById('root')
ReactDOM.render(<Header content="itclanCoder">, container)
```

## props 与 state 的灵魂对比

**共同点**:

都是组件内的数据,是一普通的`javascript`对象,都是用来保存信息的,这些信息可以控制组件的形态

**不同点**:

- `props`是由父组件传入的(类似形参),用于定义外部组件的接口,是`React`组件的输入,它是从父组件传递给子组件的数据对象,在父(外部)组件`JSX`元素上,以自定义属性的形式定义，传递给当前组件,而在子组件内部,则以`this.props`或者`props`进行获取
- `props`只具备读的能力,不能直接被修改,如果想要修改某些值,用来响应用户的输入或者输出响应,可以借用`React`内提供的`setState`函数进行触发,并用`state`来作为替代
- `state`是当前组件的内部状态,它的作用范围只局限于当前组件,它是当前组件的一个私有变量.用于记录组件内部状态的,如果组件中的一些数据在某些时刻发生变化,或者做一些页面逻辑交互时,需要更新 UI,这个时候就需要使用`state`来跟踪状态(例如控制一元素的显示隐藏来回切换等状态),它由组件本身管理,可以通过`setState`函数修改`state`

## 结语

本文主要讲述了`React`组件中的数据属性-`state`,它是组件内部的状态,是一私有的变量,用于记录组件内部状态,由于`props`不可修改,通过`React`中内置提供`setState`方法修改`state`的值,并且定义 state 时,它只能是一个对象,用于存储组件内部特殊的状态

并且大篇幅的讲到`setState`这个函数需要知道的,可接收两种类型的参数,一个是对象,另一个是函数,以及这两种方式的区别,如何划分组件的状态数据,原则上是尽可能的减少组件的状态。以及最后的`props`与`state`的灵魂对比

虽然可以简单的用几句话概括`props`与`state`的作用,但是理解它们是非常重要的,往往程序的 bug,就是通过`props`和`state`进行追踪查案的线索,是否经得起自我的灵魂拷问,我觉得至今我也在摸索..

能够以`props`和`state`这种形式顺藤摸瓜,寻本溯源到页面上任何一个 UI 组件,这种`React`的能力可以说非常重要了

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
