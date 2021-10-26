---
title: React进阶(6)-react-redux的使用
autoGroup-2: React进阶
---

## react-redux 的使用

## 快速导航

<TOC />

## 前言

您将在本文当中学习到

- `react-redux`是什么,解决什么问题
- `UI`组件以及容器组件
- `react-redux`中两个重要的`API`,``Provider`以及`connect`
- `mapStateToProps`以及`mapDispatchToProps`等的学习

是不是搞不清楚`React`与`Redux`,以及`React-Redux`的关系?是不是不清楚`mapStateToProps`以及`mapDispatchToProps`的使用?

那么本文就是你想要知道的

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/advance-react-redux/01-guide.jpg" alt="todolist" />
</div>

## react-redux 是什么

以下是上节内容的代码结构,完成的一个`todolist`,并对`Redux`进行了拆分,按功能模块化管理

```js
├─.gitignore
├─package-lock.json
├─package.json
├─README.md
├─yarn-error.log
├─yarn.lock
├─src                              // 源代码主要目录
|  ├─index.js                   // 入口文件
|  ├─views                      // 视图
|  |   └TodoList.js
|  ├─store                    // Redux中store组件的公共数据状态
|  |   ├─actionCreators.js   // action创建者
|  |   ├─actionTypes.js       // actionTypes的类型,定义成常量
|  |   ├─index.js                 // 创建store的主文件
|  |   └reducer.js                // 创建的reducer
|  ├─components             // UI组件
|  |     └TodoListUI.js
├─public
|   ├─favicon.ico
|   ├─index.html
|   └manifest.json
```

**`Redux`**: 是一个用于管理组件公共状态的一个可预测状态的框架,集中管理组件的状态.核心在于`store`,它提供了`dispatch`,`getState`,`subscribe`方法,理解`Redux`的工作流程很重要

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/advance-react-redux/02-react-redux.jpg" alt="todolist" />
</div>

- `react-redux`: 它是`redux`作者封装的一个库,是一个第三方的模块,对`Redux`进一步的封装简化,提供了一些额外的 API(例如:`Provider`,`connect`等),使用它可以更好的组织和管理我们的代码,遵循一定的组件拆分规范,在`React`中更方便的使用`Redux`

- **关系**: 它不是必须的,在实际项目中,可选用.是使用`Redux`还是使用`react-redux`,取决于你自己,项目组成员的熟悉程度,适合自己的才是最好的,使用后者提供了一些便利,但需要额外的掌握一些`API`的使用

如果只是使用`Redux`,那么流程是这样的:

- `component`-->`dispatch(action)`-->`reducer`-->`subscribe`-->`getState`-->`component` 这在前几篇的内容,一直都是遵循这个流程

如果使用`react-redux`,那么流程是这样的:
`component`-->`actionCreator(data)`-->`reducer`-->`component`

在上几节内容中,我们将`todolist`的组件进行了拆分,拆分成`UI`组件(无状态组件)和容器组件,将`Reudcer`按照各个职责进行管理

虽然已经做了简化,但是想更进一步更好的组织我们的代码,那么可以使用 react-redux,当你使用了它之后,你不需要手动的写`dispatch`,`subscribe`,以及`getState`了

因为它对内输入的逻辑(即外部的数据（即`state`对象）如何转换为 `UI` 组件的参数,通过`mapStateToProps`),对外输出逻辑(即用户发出的动作如何变为 `Action` 对象，从 `UI` 组件传出去,通过`mapDispatchToProps`)

`react-redux`帮我们做了监听,获取`state`等工作,同时它提供了两个好用的`API`,`Provider`和`connect`,在下文中我们会学习到的

## 安装 react-redux

既然是一个第三方的模块,那么可以通过`npm`或者`yarn`的方式下载

```js
npm install --save react-redux
或
yarn add react-redux
```

安装完成后,可以在根目录的`package.json`中查看是否有的

对于理解 `react-redux`中的 `Provider`和`connect`,有必要再次回顾一下之前学过的 UI 组件和容器组件

## UI 组件(傻瓜组件/无状态组件)

既然是一个第三方的模块,那么可以通过 npm 或者 yarn 的方式下载

`react-redux`将所有组件分成两大类：`UI` 组件（`presentational component`）和容器组件（`container component`）
`UI` 组件有以下几个特征

- 只负责 `UI` 的呈现，不带有任何业务逻辑,
- 没有状态,`UI`的渲染通过外部的`props`传入（即不使用`this.state`这个变量)
- 所有数据都由参数（`this.props`）对象提供
- 不使用任何 `Redux` 的 `API`
  如下所示, UI 组件的例子

```js
const Counter = (num) => <h1>{num}</h1>;
```

因为不含有状态`state`，`UI` 组件又称为"纯组件"，即它纯函数一样，输出的结果纯粹由参数决定它的值,给定的输入,便会有指定的输出,与`UI = render(data)`完全吻合

## 容器组件(聪明组件)

容器组件的特征与 UI 组件相反

- 负责管理数据和业务逻辑，不负责 `UI` 的呈现
- 带有内部状态(`state`）
- 使用 `Redux` 的 API(下面会有具体的例子),比如:`dispatch`,`getState`,`subscribe`等

总之：**UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑**

如果一个组件既有 `UI` 又有业务逻辑，那怎么办？可以将它拆分成下面的结构：外面是一个容器组件，里面包了一个`UI` 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图。

这也是之前我们将`todolist`组件进行了容器组件和`UI`组件不断的拆分的方式.当然这种拆分因人而异,没有绝对的,太细粒度的拆分也会带来管理上的麻烦.不能为了拆分而拆分.

而 `react-redux`规定，所有的 `UI` 组件都由用户提供，容器组件则是由 `react-redux`自动生成(下面的`connect`方法返回的结果就是容器组件)。也就是说，用户负责视觉层，状态管理则是全部交给它

## Provider

**作用**: 它是一个组件,用于连接了`Store`,它把`store`提供给内部组件,接受`store`作为`props`,然后通过`context`往下传，这样`react`中任何组件都可以通过`context`获取`store`

只要被这个 `Provider`组件包裹了,那么它内部的子组件就有能力接收到`store`，内部的组件都有能力获取`store`的数据的

这样也就意味着我们可以在任何一个组件里利用 `dispatch(action)`来触发 `reducer`改变 `state`，并用 `subscribe`监听 `state`的变化，然后通过 `getState`来获取变化后的值。但是官方并不推荐这样做，它只会让数据流变的混乱，过度的耦合也会影响组件的复用，维护起来会更麻烦

**`Provider`其实是对`Redux`中的`store`的`subscribe`,`dispatch`,`getState`的一个封装,集成.它对外暴露`props`属性,内部却已经帮我们实现了的`react-redux`提供 `Provider`组件，可以让容器组件拿到`state`**
例如如下代码:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux'; // 从react-redux库中引入Provider
import store from './store'; // 引入store

const container = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    {' '}
    // 通过属性props的方式将store赋值给store,这样Provider组件就能接收到store中的数据,其内部的组件也可以拿到store中的状态
    <TodoList />
  </Provider>,
  container
);
```

如果为了代码更好看点,也可以这样,定义一个变量的,以下这种写法与上面是等价的,`JSX`的内容可以看以前的内容

```js
const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

const container = document.getElementById('root');
ReactDOM.render(App, container);
```

这里需要注意的是:当你使用`React-Router` 路由库时,与其他项目没有不同之处，也是使用`Provider`在`Router`外面包一层，因为`Provider`的唯一功能就是传入`store`对象
如果不这样包裹着:内部的组件时接收不到`store`中的状态数据的,如下所示

```js
<Provider store={store}>
  <Router>
    <Route path="/" component={App} />
  </Router>
</Provider>
```

## connect

**作用**:`connect`顾名思义,是一个连接器,**它是连接容器组件和 UI(傻瓜)组件的**,它是 `react-redux`提供的一个方法,**用于从 UI 组件生成容器组件,把两种组件给连接起来**

`connect`方法接收四个参数,一个是 `mapStateToProps`,另一个是`mapDispatchToProps`,当然还有两个参数: `mergeProps`, `options`,它们是可选的,它执行的结果依然是一个函数,所以才可以在后面在加上一个圆括号的,而圆括号内又接收一个参数,即是 UI 组件,也是傻瓜组件

有两次 `connect`的执行,第一次 `connect`函数的执行是从`react-redux`库中引入这个方法,第二次是把 `connect`函数返回的函数再次执行,最后产生的就是容器组件,如下代码所示

```js
import { connect } from 'react-redux';
const VisibleTodoList = connect()(TodoList); // 命名成ContainerTodoList也是一样的
```

如果不给`connect`传递任何参数,可以为空,也可以指定参数`null`,或者只有`mapStateToProps`,没有`mapDispatchToProps`,这也是没有什么问题的,如下代码所示

```js
import { connect } from 'react-redux';
const VisibleTodoList = connect(mapStateToProps, null)(TodoList);
```

在上面代码中，`TodoList`就是`UI`组件，而`VisibleTodoList`就是由 `React-Redux`通过`connect`方法自动生成的容器组件。
但是，因为没有定义业务逻辑，上面这个容器组件毫无意义，只是 `UI`组件的一个单纯的包装层。为了定义业务逻辑，需要给出下面两方面的信息。

- 输入逻辑：外部的数据（即`state`对象）如何转换为 `UI` 组件的参数(负责接收`state`)
- 输出逻辑：用户发出的动作如何变为 `Action` 对象，从 `UI` 组件传出去(负责派发动作`dispatch`方法)

所以,`connect`的两个`API`如下所示:

```js
import { connect } from 'react-redux';
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  options
)(TodoList); // 命名成ContainerTodoList也是一样的
```

在上面代码中，`connect`方法接受四个参数：分别是 `mapStateToProps`和 `mapDispatchToProps`,后面两个参数 `mergeProps`，以及 `options`可以省略,这四个参数的名字可以是任意的,并不一定非得这样叫,也可以定义为 `mapState`或者 `mapDispatch`,只是这样命名,见名知意,已经是约定俗成的一个习惯

它们定义了`UI` 组件的业务逻辑。前者负责输入逻辑(`mapStateToProps`)，即将`state`映射到 `UI`组件的参数（`props`），后者负责输出逻辑(`mapDispatchToProps`)，即将用户对 `UI`组件的操作映射成 `Action`

综归来说, `connect`做了两件事情:

- 把`store`上的状态转换为内层的 UI 组件(傻瓜组件)的 props
- 把内层 UI 组件(无状态组件)中的用户触发的动作转化为派送个`store`的动作,前者(`mapStateToProps`)是一个内层傻瓜组件对象的输入,后者(`mapDispatchToProps`)内层傻瓜组件的输出
  `mapStateToProps`与`mapDispatchToProps`的工作套路就是:把`Store`上的状态转化为内层组件的`props`，然后在组件内部通过 `this.props`的方式拿到,这是不同于之前 `this.state`的方式的,其实就是一个映射关系。

## mapStateToProps(state, [ownProps])

`mapStateToProps`是一个函数。见名思义,它是建立一个从（外部的）`state`对象到（`UI` 组件的）`props`对象的映射关系。

既然作为函数， `mapStateToProps`执行后应该返回一个对象，里面的每一个键值对就是一个映射

`mapStateToProps` 接受两个参数,第一个是 `state`,第二个是 `ownProps`, `store`的 `state`和自定义的 `props`，并返回一个新的对象，这个对象会作为 `props`的一部分传入 ui 组件。

我们可以根据组件所需要的数据自定义返回一个对象。`ownProps`的变化也会触发 `mapStateToProps`, `ownProps`代表容器组件的 `props`对象

```js
const mapStateToProps = (state) => {
  // state代表的是store中state的状态
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};
```

在上面代码中， `mapStateToProps`是一个函数，它接受`state`作为参数，并且第一个参数就是 `state`, 它返回一个对象。这个对象有 `inputValue`和 `list`属性，它代表着 `UI` 组件的同名参数，后面的 `state.inputValue`，以及 `state.list`就是从 `Store`中的 `state`的拿到内部组件输入框的值和底下列表的值

`mapStateToProps`会订阅 `Store`，每当 `state`更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。

## mapDispatchToProps(dispatch,[ownProps])

`mapDispatchToProps`是 `connect`函数的第二个参数，它是用来建立 `UI` 组件的参数到 `store.dispatch`方法的映射。

换句话说，它定义了哪些用户的操作应该当作 `Action`，传给 `Store`。它可以是一个函数，也可以是一个对象。
如果 `mapDispatchToProps`是一个函数，会得到 `dispatch`和 `ownProps`（容器组件的`props`对象）两个参数

```js
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange(e) {
      const action = {
        type: 'handle_input_change',
        value: e.target.value,
      };
      dispatch(action);
    },

    handleAddContent() {
      const action = {
        type: 'handle_add_content',
      };
      dispatch(action);
    },

    handleDeleteList(index) {
      const action = {
        type: 'handle_delete_list',
        index,
      };
      dispatch(action);
    },
  };
};
```

从上面代码可以看到，`mapDispatchToProps`作为函数，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 `UI` 组件的参数怎样发出 `Action`。

如果 `mapDispatchToProps`是一个对象，那么会和 `store`绑定作为 `props`的一部分传入`ui`组件,它的每个键名也是对应 `UI` 组件的同名参数,键值应该是一个函数，会被当作 `Action creator`，返回的 `Action`会由 `Redux` 自动发出。举例来说，上面的 `mapDispatchToProps`写成对象,则如下所示:下面的函数是 Es6 的简写形式

```js
const mapDispatchTopProps = {
  handleInputChange(e) {
    // 等价于handleInputChange: function(e){ ...}
    const action = {
      type: 'handle_input_change',
      value: e.target.value,
    };
    dispatch(action);
  },

  handleAddContent() {
    const action = {
      type: 'handle_add_content',
    };
    dispatch(action);
  },

  handleDeleteList(index) {
    const action = {
      type: 'handle_delete_list',
      index,
    };
    dispatch(action);
  },
};
```

不论 `mapDispatchToProps`是对象还是函数，它最终都会返回一个对象，如果是函数，这个对象的 `key`值是可以自定义的

```js
function mapDispatchToProps(dispatch) {
  return {
    attrActions: bindActionCreators(todoActionCreators, dispatch), // bindActionCreators是Redux的一个方法,会将action和dispatch绑定并返回一个对象，这个对象会和ownProps一起作为props的一部分传入ui组件
  };
}
```

`mapDispatchToProps`返回的对象其属性其实就是一个个 `actionCreator`，因为已经和 `dispatch`绑定，所以当调用 `actionCreator`时会立即发送`action`，而不用手动`dispatch`

`mapStateToProps`和 `mapDispatchToProps`都可以包含第二个参数 `ownProps`,`ownProps`的变化也会触发 `mapDispatchToProps`

## mergeProps(stateProps, dispatchProps, ownProps)

**作用**:它是 `connect`函数的第三个参数,将 `mapStateToProps()`与 `mapDispatchToProps()`返回的对象和组件自身的 `props`合并成新的 `props`并传入组件。默认返回 `Object.assign({}, ownProps, stateProps, dispatchProps)`的结果

```js
const mergeProps = () => {
  return Object.assign({}, ownProps, stateProps, dispatchProps);
};
```

## options

当 `pure = true`表示 `connect`容器组件将在 `shouldComponentUpdate`中对 `store`的 `state`和`ownProps`进行浅对比，判断是否发生变化，优化性能。若为`false`则不对比

这个`options`有很多,具体可以参考 `react-redux`官方文档

```js
{
  context?: Object,
  pure?: boolean,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
```

## 结语

本文主要学习了如何使用 react-redux,使用 react-redux 只是为了简化 Redux 的,不使用 react-redux 也没有问题,只是使用 react-redux 可以更简便的管理我们的状态,更好的组织我们的代码

但是随之而来的就是学习成本,得学习那些 Provider, connect 等 API 的使用,这也是为什么这些框架令人蛋疼的原因,本以为学了 React 能搞事,但发现依旧还有一座山在等着你

什么解决异步问题 react-thunk,react-saga 等中间件,middleWare,路由 react-router 等

当然最新版本的 React 中已经有了 React hooks,有了这个你可以替代 Redux,或者 react-redux,但是笔者认为,技术没有金弹或者银弹,适合业务的技术才是最好的
理解 redux 以及 react-redux 不妨也是一种技术选择,更好的与 React hooks 做比较,从而选择一个最适宜的.

React 很多东西很抽象 学习起来,就有些费劲~以后也会循序渐进,一一进行分享的
最后,看完本节:记住几点

- `Provider`是一个由`react-redux`提供的组件,用于接收 store 的数据,供内部组件暴露的一个接口
- connect 是 react-redux 库提供的一个函数,用于连接 UI 组件的,并且最终生成一个容器组件,提供了一些映射方法,mapStateToProps 以及 mapDispatchToProps
  在`UI`组件内部的数据通过`this.props`来填充渲染

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
