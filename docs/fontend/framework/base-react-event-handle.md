---
title: React 基础(7)-React中的事件处
autoGroup-1: React基础
---

## React 中的事件处理

## 快速导航

<TOC />

## 前言

`props`与`state`都是用于组件存储数据的一`js`对象,前者是对外暴露数据接口,后者是对内组件的状态,它们决定了`UI`界面显示形态,而若想要用户与界面有些交互动作

也就是`web`浏览器通知应用程序发生了什么事情,例如:鼠标点击,移动,键盘按下等页面发生相应的反馈,它是用户与文档或者浏览器窗口中发生的一些特定的交互瞬间. 这个时候就需要用事件实现了

在原生`JS`操作`DOM`中,往往有如下方式

- 内联方式(在`HTML`中直接事件绑定)

```js
<p onclick="alert('关注微信itclanCoder公众号')"></p>
```

- 直接绑定(对象.事件类型 = 匿名函数

```js
// DOM元素对象.事件类型 = 匿名函数
obj.onclick = function(){})
```

- 事件委托监听方式

```js
//对象.addEventListener('事件类型,不带on', 回调函数))对DOM对象进行事件监听处理
document.addEventListener('click', function() {
  alert('川川是个全宇宙最帅的小伙子');
});
```

而在`React`中事件处理和内联方式相似,但是却有些不同

如何确保函数可以访问组件的属性?

如何传递参数给事件处理器回调? 怎样阻止函数被调用太快或者太多次?

频繁操作`DOM`会造成浏览器的卡顿,响应不及时,引起浏览器的重绘重排,从而加重了浏览器的压力

频繁的调用后台接口,好好的接口被前端玩坏,造成页面空白,崩溃,容易被后端同学提刀来见

既要提升用户体验,又要减少服务器端的开销

那么本篇就是你想要知道的

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/01-guide.jpg" alt="todolist" />
</div>

## React 中的事件

在`React`中事件的绑定是直接写在`JSX`元素上的,不需要通过`addEventListener`事件委托的方式进行监听

**写法上**:

- 在`JSX`元素上添加事件,通过`on*EventType`这种内联方式添加,命名采用小驼峰式(`camelCase`)的形式,而不是纯小写(原生 HTML 中对`DOM`元素绑定事件,事件类型是小写的),无需调用`addEventListener`进行事件监听

- 也无需考虑兼容性,`React`已经封装好了一些的事件类型属性(`ps:onClick`,`onMouseMove`,`onChange`,`onFocus`)等
  使用`JSX`语法时,需要传入一个函数作为事件处理函数,而不是一个字符串,也就是`props`值应该是一个函数类型数据,事件函数方法外面得用一个双大括号包裹起来

- `on*EventType`的事件类型属性,只能用作在普通的原生`html`标签上 (例如:`div`,`input`,`a`,`p`等,例如:

```js
<div onClick={事件处理函数}></div>
```

无法直接用在自定义组件标签上,也就是: 下面这样

```js
<Button onClick={事件处理方法}></Button>
```

这样写是不起作用的,要想解决,也有方法,借用第三方库,`styled-component`,`这个我们在后续的内容当中单独拿出来讲的

不能通过返回`false`的方式阻止默认行为,必须显示使用`preventDefault`,如下所示

```js
// 在React中无法通过return false阻止默认事件,下面是错误的写法
function handleClick() {
  // 逻辑代码
  return false;
}
// 正确的写法,应该用preventDefault去阻止默认事件
function handleClick(event) {
  event.preventDefault();
}
```

## event(事件)对象

事件是`web`浏览器通知应用程序发生的什么事情,例如:鼠标点击,移动，键盘按下等

它并不是`javascript`对象,但是由事件触发的事件处理函数接收携带的事件对象参数(`event`),它会记录这个事件的一些详细的具体信息

```js
<a href="#" onClick = { this.handleLink} >链接</a>

handleLink(event){
 event.preventDefault();
 console.log(event);
}
```

event 会记录该事件对象的信息,如下图所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/02-event.jpg" alt="todolist" />
</div>

当给`DOM`元素绑定了事件处理函数的时候,该函数会自动的传入一个`event`对象,这个对象和普通的浏览器的对象记录了当前事件的属性和方法

在`React`中,`event`对象并不是浏览器提供的,你可以将它理解为`React`的事件对象,由`React`将原生浏览器的 event 对象进行了封装,对外提供一公共的 API 接口,无需考虑各个浏览器的兼容性

与原生浏览器处理事件的冒泡(`event.stopPropatation`),阻止默认行为(`event.preventDefault`)使用一样

## this 绑定性能比较

在上一节中已经对`this`的绑定进行了学习,在一次拿出来,说明它的重要性

通常在对`JSX`元素绑定事件监听处理函数时,针对`this`的绑定,将事件处理函数绑定到当前组件的实例上:以获取到父组件传来的`props`

以下几种方式可以确保函数可以访问组件属性

在构造函数中绑定 在`constructor`中进行`this`坏境的绑定,初始化事件监听处理函数

```js
class Button extends Component {
  constructor(props) {
    super(props);
    // 在构造器函数中进行this坏境的绑定
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBtnClick}>按钮</button>
      </div>
    );
  }

  handleBtnClick() {
    console.log(this); // 会输出Button组件
  }
}
```

当在`JSX`上进行事件监听绑定的时候,对于`JSX`回调函数中的`this`，由于 Es6 中的 class 的方法默认不会绑定 this,如果你不进行 this 的坏境绑定,忘记绑定事件处理函数,并把它传给事件方法(上面是`onClick`),那么`this`的值是`undefined`

解决这个问题:

- 一种是如上面的在构造器函数中进行 this 坏境的绑定，这种方式是 React 官方推荐的,也是性能比较好的

- 第二种方式是直接在 JSX 上,Render 中通过 bind 方法进行 this 的绑定

```js
<button onClick={this.handleBtnClick.bind(this)}>按钮</button>
```

使用这种 bind 直接的绑定,每次渲染组件,都会创建一个新的函数,一般而言,这种写法也没什么问题,但是如果该回调函数作为 prop 值传入子组件时,这些组件就会进行额外的重新渲染，会影响性能，这与使用箭头函数同样存在这样的问题

解决办法:

- 在构造器函数中进行绑定,如上所示:
- 利用`class fields`(类字段)语法

```js
class Button extends Component {
  // 类字段的形式进行绑定,函数表达式
  handleClick = () => {
    alert('学习React基础内容');
  };
  render() {
    return (
      <div>
        <button onClick={this.handleBtnClick}>按钮</button>
      </div>
    );
  }
}
```

如果不用类字段语法,可以在回调中使用箭头函数,这与它是等价的

```js
class Button extends Component{

handleClick()
 alert("学习React基础内容");
}
render(){
 return (
  <div>
    <button onClick={ () => { this.handleBtnClick } }>按钮</button>
  </div>
);
}
}
```

此方法与直接在`Render`函数中使用`bind`绑定`this`坏境一样存在性能问题,当该事件处理函数作为`prop`传入子组件,必定会引起 Render 函数的渲染

所以出于性能的考虑,将`this`的绑定放在`constructr`函数中或者用类字段的语法来解决这种性能瓶颈问题

## 向事件处理程序中传递参数

在循环操作列表中,有时候要实现某些操作,我们需要向事件处理函数传递一些额外的参数,比如说:索引,要删除哪一行的`ID` 通过以下两种方式都可以向事件处理函数传递参数

```js
<button onClick = { this.handleBtnDelete.bind(this,id)}>删除</butto/n>
或者
<button onClick = { (e) => this.handleDelete(id, e) }>删除</button>
```

如下以一个删除`list`的例子,效果如下,代码所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/01-handle-event.gif" alt="todolist" />
</div>

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
  constructor(props) {
    super(props);

    const { list } = this.props;
    this.state = {
      list: list,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <Fragment>
        <ul>
          {// list.map((item, index) => <li onClick={ this.handleDelete.bind(this, index)} key={index}>{ item }</li>)
          list.map((item, index) => (
            <li onClick={(e) => this.handleDelete(index, e)} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }

  handleDelete(index, e) {
    console.log(e);
    // 拷贝state的一个副本,不要直接的去更改state,在React中,不允许对state做任何改变
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState(() => ({
      list: list,
    }));
  }
}

const listData = ['itclanCoder', '川川', 'chrome', 'Firefox', 'IE'];

const container = document.getElementById('root');

ReactDOM.render(<List list={listData} />, container);
```

在上面代码中,分别在`render`函数中绑定(`Function.proptype.bind`)和利用箭头函数包裹事件处理器,向事件监听处理函数传递参数，都是等价的

```js
<button onClick = { this.handleBtnClick(this, id)}></button>
// 等价于
<button onClick = { () => this.handleBtnClick(id) }></button>
```

若使用箭头函数,`React`的事件对象会被作为第二个参数传递,而且也必须显示的传递进去

而通过`bind`的方式,事件对象以及更多的参数将会被隐式的传递进去

在 render 函数中直接的通过`bind`方法的绑定,会在每次组件渲染时都会创建一个新的函数,它会影响性能:最好是放在`constructor`函数中进行`this`坏境的绑定,因为`constructor`函数只会执行一次

```js
constructor(props){
  super(props);
  // 事件监听处理函数,this坏境的绑定
  this.handleDelete = this.handleDelete.bind(this);
}
```

## 解决事件处理函数每次被重复渲染的问题

在 Es5 中,当调用一个函数时,函数名往往要加上一个圆括号,而在`JSX` 中给`React`元素绑定事件处理函数时,一个不小心,就习惯给加上了的

这就会造成,每次组件渲染时,这个函数都会被调用,会引起不必要的`render`函数渲染，将会引起性能问题

应当确保在传递一个函数给组件时,没有立即调用这个函数,如下所示

```js
render(){
  return (
   <button onClick = { this.handleClick()}>button</button>
  );
}
```

正确的做法是,应该传递该事件函数本身(不加括号),如下所示

```js
render(){
 <button onClick = { this.handleClick }>button</button>
}
```

下面介绍本节的重点,听过函数节流,防抖,但不一定就真的就懂了

## 如何阻止函数调用太快(函数节流)或者太多次(函数防抖)

有时候,当用户频繁的与 UI 界面操作交互时,例如:窗口调整(触发`resize`),页面滚动,上拉加载(触发 scroll),表单的按钮提交,商城抢购疯狂的点击(触发 mousedown),而实时的搜索(`keyup`,`input`),拖拽等

当你频繁的触发用户界面时,会不停的触发事件处理函数,换而言之,当出现连续点击,上拉加载,实时搜索,对 DOM 元素频繁操作,请求资源加载等耗性能的操作,可能导致界面卡顿,浏览器奔溃,页面空白等情况

而解决这一问题的,正是函数节流与函数防抖

### **函数节流**

**定义**: 节约(减少)触发事件处理函数的频率,连续每隔一定的时间触发执行的函数,它是优化高频率执行一段 js 代码的一种手段

**特点**: 不管事件触发有多频繁,都会保证在规定的间隔时间内真正的执行一次事件处理函数

**应用场景**: 常用于鼠标连续多次点击 click 事件,鼠标移动`mousemove`,拖拽,窗口尺寸改动(`resize`),鼠标滚轮页面上拉(`onScroll`),上拉刷新懒加载

**原理**: 通过判断是否达到一定的时间来触发函数,若没有规定时间则使用计时器进行延迟,而下一次事件则会重新设定计时器,它是间隔时间执行

通常与用户界面高频的操作有:

- 鼠标滚轮页面上拉(`onScroll`),下拉刷新懒加载
- 窗口尺寸改动(`onresize`)
- 拖拽

若是高频操作,若不进行一定的处理,必然会造成多次数据的请求,服务器的压力,这样代码的性能是非常低效的,影响性能,降低这种频繁操作的一个重要的手段,就是降低频率,通过节流控制,也就是让核心功能代码在一定的时间,隔多长时间内执行一次

**节流就是保证一段时间内只执行一次核心代码**

你可以联想生活中节约用水(三峡大坝设置很多水闸)的例子:

高频事件就像是一个大开的水龙头,水流源源不断的大量流出,就像代码在不断的执行,若不加以控制,就会造成资源的一种浪费

对应页面中的,若是表单中连续点击提交按钮,监听滚动事件,连续下拉加载等请求服务器的资源

要节流,拧紧水龙头,要它的流水频率降低,每隔一段时间滴一滴水的,从而节省资源

**在代码中的体现就是:设置一定时器,让核心功能代码,隔间段的去执行**

下面是一个鼠标滚轮,节流操作实现:类似连续操作的，都是如此,连续点击按钮,上拉加载

**节流方式一:时间戳+定时器**

```js
/*
throttle1函数,节流实现方式1:时间戳+定时器
* @params method,duration 第一个参数为事件触发时的真正要执行的函数
* 第二个参数duration表示为定义的间隔时间
*
* 原理:通过判断是否达到一定的时间来触发函数,若没有规定时间则使用计时器进行延迟,而下一次事件则会重新设定计时器,它是间隔时间执行,不管事件触发有多频繁,都会保证在规定内的事件一定会执行一次真正事件处理函数
*
* */
function throttle1(method, duration) {
  var timer = null;
  var prevTime = new Date(); // 之前的时间
  return function() {
    var that = this,
      currentTime = new Date(), // 获取系统当前时间
      resTime = currentTime - prevTime; // 时间戳
    // 打印本次当前的世间和上次世间间隔的时间差
    console.log('时间差', resTime);
    // 当前距离上次执行时间小于设置的时间间隔
    if (resTime < duration) {
      // 清除上次的定时器,取消上次调用的队列任务，重新设置定时器。这样就可以保证500毫秒秒内函数只会被触发一次，达到了函数节流的目的
      clearTimeout(timer);
      timer = setTimeout(function() {
        prevTime = currentTime;
        method.apply(that);
      }, duration);
    } else {
      // 当前距离上次执行的时间大于等于设置的时间时,直接执行函数
      // 记录执行方法的时间
      prevTime = currentTime;
      method.apply(that);
    }
  };
}

// 事件触发的方法(函数),函数节流1
function handleJieLiu1() {
  console.log('节流方式1');
}

var handleJieLiu1 = throttle1(handleJieLiu1, 500);
document.addEventListener('mousewheel', handleJieLiu1);
```

**节流方式二:**

```js
/*
 * throttle2函数节流实现方式2:重置一个开关变量+定时器
 * @params method,duration形参数与上面的含义一致
 * @return 返回的是一个事件处理函数
 * 在throttle2执行时定义了runFlag的初始值,通过闭包返回一个匿名函数作为事件处理函数,
 * 在返回的函数内部判断runFlag的状态并确定执行真正的函数method还是跳出,每次执行method后会更改runFlag的状态,通过定时器在durtion该规定的间隔时间内重置runFlag锁的状态
 *
 */
function throttle2(method, duration) {
  // 当前时间间隔内是否有方法执行,设置一个开关标识
  var runFlag = false;
  // 返回一个事件处理函数
  return function(e) {
    // 判断当前是否有方法执行,有则什么都不做,若为true,则跳出
    if (runFlag) {
      return false;
    }
    // 开始执行
    runFlag = true;
    // 添加定时器,在到达时间间隔时重置锁的状态
    setTimeout(function() {
      method(e);
      // 执行完毕后,声明当前没有正在执行的方法,方便下一个时间调用
      runFlag = false;
    }, duration);
  };
}
// 事件触发的方法(函数),函数节流2
function handleJieLiu2() {
  console.log('节流方式2');
}
var handleJieLiu2 = throttle2(handleJieLiu2, 500);
document.addEventListener('mousewheel', handleJieLiu2);
```

上面两种实现函数节流的方式都可以达到防止用户频繁操作而引起重复请求资源的

具体效果如下所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/02-handle-event.gif" alt="todolist" />
</div>

从上面的效果示例当中,当鼠标滚轮不断滚动时,事件处理函数的执行顺序不一样

当给一个大范围的时间内,比如:1 小时内,每几分钟执行一次,超过一小时不在执行,推荐使用第一种函数节流的方式

如果仅仅要求间隔一定时间执行一次,推荐使用第二种函数节流的方式

## 函数防抖

**定义**:防止抖动,重复的触发,频繁操作,核心在于，延迟事件处理函数的执行,一定时间间隔内只执行最后一次操作,例如:表单多次提交,推荐使用防抖

换句话说,也就是当连续触发事件时并没有执行事件处理函数,只有在某一阶段连续触发的最后一次才执行,它遵循两个条件

- 必须要等待一段时间
- 上一次触发的时间间隔要大于设定值才执行

**特点**: 某段时间内只执行一次 在生活中,你可以想象公交司机等人上车后,才出站一样

**应用场景**: 常应用于输入框事件`keydown`,`keyup`,搜索联想查询,只有在用户停止键盘输入后,才发送 Ajax 请求

**原理**: 它是维护一个计时器,规定在`duration`(延迟)一定的时间后,触发事件处理函数,但是在`duration`时间内再次触发的话,都会清除当前的`timer`定时器重新计时,这样一来,只有最后一次操作事件处理函数才会被真正的触发

具体代码如下所示

```js
/*
 * 函数防抖
 * 例如：假定时间间隔时500ms,频繁不同的操作5s,且每两次执行时间小于等于间隔500ms
 * 那么最后只执行了1次，也就是每一次执行时都结束上一次的执行
 * @params method,duration,与上面一致
 *
 * 原理:它是维护一个计时器,规定在duration时间后出发时间处理函数,但是在duration时间内再次出发的化,都会清除当前的timer重新计时,这样一来,只有最后一次操作事件处理函数才被真正的触发
 *
 * 一般用于输入框事件,常用场景就是表单的搜索或者联想查询,如果不使用防抖会连续发送请求,增加服务器的压力,使用防抖后,会在用户输入要查询的关键词后才发送请求，百度搜索就是这么实现的
 *
 *
 */
function debounce(method, duration) {
  var timer = null;
  return function() {
    var that = this,
      args = arguments;
    // 在本次调用之间的一个间隔时间内若有方法在执行,则终止该方法的执行
    if (timer) {
      clearTimeout(timer);
    }
    // 开始执行本次调用
    timer = setTimeout(function() {
      method.apply(that, args);
    }, duration);
  };
}
// 事件触发的方法(函数),防抖
function handleFangDou() {
  console.log('函数的防抖', new Date());
}
var handleFangDou = debounce(handleFangDou, 500);
var oInput = document.querySelector('#input'); // 获取input元素
oInput.addEventListener('keyup', handleFangDou);
```

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/03-handle-event.gif" alt="todolist" />
</div>
如上输入框效果所示,每当输入框输入值后,当键盘弹起时,执行事件处理函数,而不应该是键入内容时都触发一次事件处理函数

同理,搜索引擎,表单联想查询功能时,不是根据用户键入的字母,数字,内容同时进行 Ajax 数据请求的,如果每键入一个字母都触发一次数据请求,那就非常耗性能了的

应当是用户停止输入的时候才去触发查询请求,这个时候就用到函数防抖了的

表单的多次提交,百度搜索等都是用防抖实现的
**小结:**

**共同点**: 都是解决频繁操作触发事件处理函数,引起页面卡顿,不流畅等性能问题,都是通过设置延时计时器逻辑来提升性能,以减少 http 请求次数,节约请求资源

**不同点**:函数节流,间隔时间内执行事件处理函数,而函数防抖,一定时间间隔内只执行最后一次操作

那么在`React`中,又是如何实现函数的节流,函数的防抖的?

在`React`中借用了一个`loadsh.throttle`的库实现函数的节流

首先你要在命令行终端下通过`npm`或者`cnpm`安装这个库

```js
cnpm i -S lodash.throttle
```

然后在你编写的`React`组件内引入,调用一个`throttle`的函数,这个`throttle`接收两个参数,第一个参数是要触发的事件处理函数,第二个是延迟的时间,隔多少秒调用一次

下面是函数的节流代码,给定时间内被调用不能超过一次,对点击`click`事件处理器,使每秒钟只能调用一次

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.throttle'; // 引入lodash.throttle库

class LoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tip: '',
      trigerTimes: 1,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = throttle(this.handleClick, 1000); // 将触发事件处理函数作为第一个参数传入,第二个参数为间隔的时间,这里是1秒
  }

  componentWillUnmount() {
    this.handleClickThrottled.cancel();
  }

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.handleClickThrottled}>Load More</button>
        </div>
        <div>{this.state.tip}</div>
      </Fragment>
    );
  }

  handleClick() {
    this.setState({
      tip: `加载按钮触发了: ${this.state.trigerTimes}次`,
      trigerTimes: this.state.trigerTimes + 1,
    });
  }
}

class Load extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <LoadMoreButton />
      </Fragment>
    );
  }
}
const container = document.getElementById('root');

ReactDOM.render(<Load />, container);
```

效果如下所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/04-handle-event.gif" alt="todolist" />
</div>

如果你不使用`lodash.throttled`第三方库实现函数的节流,同样,自己单独封装一个`throttled`实现函数节流也是可以的，例如:

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class LoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tip: '',
      trigerTimes: 1,
    };

    this.handleLoadTime = this.handleLoadTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickThrottled = this.throttle(this.handleClick, 1000); // 将触发事件处理函数作为第一个参数传入,第二个参数为间隔的时间,这里是1秒
  }

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this.handleClickThrottled}>Load More</button>
        </div>
        <div>{this.state.tip}</div>
      </Fragment>
    );
  }

  handleLoadTime() {
    // this.setState((prevState) => ({
    // tip: `加载按钮触发了: ${prevState.trigerTimes}次`,
    // trigerTimes: prevState.trigerTimes+1
    // }))
    // 等价于下面的
    this.setState({
      tip: `加载按钮触发了: ${this.state.trigerTimes}次`,
      trigerTimes: this.state.trigerTimes + 1,
    });
  }
  // 事件处理函数
  handleClick() {
    this.handleLoadTime();
  }

  // 核心函数节流代码实现
  throttle(method, duration) {
    // 当前时间间隔内是否有方法执行,设置一个开关标识
    var runFlag = false;
    // 返回一个事件处理函数
    return function(e) {
      // 判断当前是否有方法执行,有则什么都不做,若为true,则跳出
      if (runFlag) {
        return false;
      }
      // 开始执行
      runFlag = true;
      // 添加定时器,在到达时间间隔时重置锁的状态
      setTimeout(function() {
        method(e);
        // 执行完毕后,声明当前没有正在执行的方法,方便下一个时间调用
        runFlag = false;
      }, duration);
    };
  }
}

class Load extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <LoadMoreButton />
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Load />, container);
```

你可以试着不加第三方库`lodash.throttled`中的`throtte`函数以及不封装`throttle`函数,你会发现,当你点击按钮时,你连续点多少次,它会不断的触发事件处理函数,如果是一个表单提交按钮,使用函数的节流就很好的优化了代码了

不加函数节流的效果:如下所示:

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/05-handle-event.gif" alt="todolist" />
</div>
假如这是一个表单的提交按钮,你点击多少次,就向服务器请求多少次,这显然是有问题的，如果你用函数的节流就很好解决这个问题

上面说完了`React`的函数节流,那么函数防抖又怎么实现呢?同样,`React`可以借助一个第三方库`loadsh.debounce`来实现

你仍然先要在终端下通过`npm`或者`cnpm`或`yarn`的方式安装第三方库

```js
npm i -S loadsh.debounce
或者
cnpm install -S loadsh.debounce
```

有没有安装上,可以在根目录下查看`pageckage.json`中的`dependencies`依赖里面有没有`loadsh.debounce`

下面看一个输入框,校验手机号的例子: 这在一些邮箱注册,快捷登录等表单处是一个很常见的应用场景

没有使用函数防抖 示例代码如下所示：

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: null,
      trigerTimes: 1,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value) {
      this.setState({
        tip: null,
      });
    }
  }

  handleKeyUp = (e) => {
    if (e.target.value) {
      this.isPhoneLegal(e.target.value); // 对用户输入进行判断
    }
  };
  isPhoneLegal = (phone) => {
    const phoneRegexp = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    const { trigerTimes } = this.state;
    if (phoneRegexp.test(phone)) {
      this.setState({
        tip: `手机号符合规则!`,
        trigerTimes: 0,
      });
    } else {
      this.setState({
        tip: `手机号有误, 触发了：${trigerTimes}次`,
        trigerTimes: trigerTimes + 1,
      });
    }

    // 这里发送Ajax请求
  };

  render() {
    return (
      <Fragment>
        <div>
          <input
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder="请输入手机号"
          />
        </div>
        <div>{this.state.tip}</div>
      </Fragment>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <Fragment>
        <SearchBox />
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Search />, container);
```

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/06-handle-event.gif" alt="todolist" />
</div>
未使用防抖时,每次键盘`keyup`弹起一次,就会触发一次,用户未输入完成就提示输入有误,这种体验不是很好

换而言之,如果每次键盘弹起时,都发送 Ajax 请求,这种思路本是没错的,但是若是间隔时间很短,连续输入,总是频繁的发送 Ajax 请求,那就造成页面卡顿，服务器端的压力了

正常的效果 示例效果如下所示:应该等键盘内容输入完之后,才触发事件处理函数

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/07-handle-event.gif" alt="todolist" />
</div>
下面是使用了`debounce`函数进行函数防抖 示例代码如下所示

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
//import throttle from 'lodash.throttle'; // 函数节流
import debounce from 'lodash.debounce'; // 函数防抖,引入loadash.debounce库

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tip: null,
      trigerTimes: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.isPhoneLegal = debounce(this.isPhoneLegal, 1000); // 此处调用debounce函数,第一个参数为事件处理函数,第二个参数为延迟的时间间隔,这里是1s
  }

  componentWillUnmount() {
    this.isPhoneLegal.cancel();
  }

  handleChange(e) {
    if (e.target.value) {
      this.setState({
        tip: null,
      });
    }
  }

  handleKeyUp = (e) => {
    if (e.target.value) {
      this.isPhoneLegal(e.target.value); // 对用户输入进行判断
    }
  };
  isPhoneLegal = (phone) => {
    const phoneRegexp = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    const { trigerTimes } = this.state;
    if (phoneRegexp.test(phone)) {
      this.setState({
        tip: `手机号符合规则!`,
        trigerTimes: 0,
      });
    } else {
      this.setState({
        tip: `手机号有误, 触发了：${trigerTimes}次`,
        trigerTimes: trigerTimes + 1,
      });
    }

    // 这里发送Ajax请求
  };

  render() {
    return (
      <Fragment>
        <div>
          <input
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder="请输入手机号"
          />
        </div>
        <div>{this.state.tip}</div>
      </Fragment>
    );
  }
}

class Search extends Component {
  render() {
    return (
      <Fragment>
        <SearchBox />
      </Fragment>
    );
  }
}

const container = document.getElementById('root');

ReactDOM.render(<Search />, container);
```

如果你不使用`lodash.debounce`这个库提供的`debounce`函数进行防抖处理,自己用原生的方法封装一个`debounce`函数也是可以的
上面有介绍的 代码如下所示:你只需把对事件处理函数 this 坏境绑定处的`deboucunce`更改一下即可,其他代码跟以前一样

```js
this.isPhoneLegal = this.debounce(this.isPhoneLegal, 1000);
```

注意此时`debounce`函数是放在这个`searchBox`组件内的,如果该`debounce`函数放在组件外部,是直接用`function`声明式定义的

直接调用`debouce`函数名即可,这里要稍稍注意下区别,对于这种常用的函数,可以单独把它封装到一个文件里去也是可以的

收集成自己常用库当中,避免这种防抖,节流函数分散在各个文件,到处都是的,以下是`debounce`防抖函数的封装

```js
// 自己封装一个debounce函数用于防抖
debounce(method, duration) {
var timer = null;
/*return function(){
var that = this,
args = arguments;
// 在本次调用之间的一个间隔时间内若有方法在执行,则终止该方法的执行
if(timer) {
clearTimeout(timer);
}
// 开始执行本次调用
timer = setTimeout(function(){
method.apply(that,args);
}, duration)

}*/
// 上面的return匿名函数可以用Es6的箭头函数,以下写法与上面等价,最简洁的写法,但是没有上面的代码好理解
return (...args) => {
  clearTimeout(timer);
  timer = setTimeout(() => method(...args), duration)
}

}
```

当然对于上面的代码,还是可以优化一下的,对于回调函数,在`Es6`中,常用于箭头函数来处理,这样会省去不少麻烦 例如：`this`的指向问题 如下所示:`debouce`函数最简易的封装

你也可以把上面的定时器初始值放在`debouce`函数作为第三个形参数设置,也是可以的

```js
debounce(method, duration, timer = null) {
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
    method(...args)
   }, duration)
  }

}
```

如果自己封装`throttle`和`debounce`函数,可以单独封装到一个文件对外暴露就可以了,在需要用它们的地方,通过`import`引入即可,在代码中直接调用就可以 在根目录下(以你自己的为准)创建一个`throttle.js` 通过`export default` 暴露出去

```js
/*
* @authors 川川 (itclancode@163.com)
* @ID suibichuanji
* @date 2019-08-31 21:08:17
* @weChatNum 微信公众号:itclancoder
@desc 封装节流函数
* @param method,duration:method事件处理函数,duration:间隔的时间
* @return 匿名函数
* 原理: 通过判断是否达到一定的时间来触发函数,
* 若没有规定时间则使用计时器进行延迟,而下一次事件则会重新设定计时器
* 它是间隔时间执行,不管事件触发有多频繁
* 都会保证在规定内的事件一定会执行一次真正事件处理函数
*
*/
function throttle(method, duration) {
  var timer = null;
  var prevTime = new Date(); // 之前的时间
  return function() {
    var that = this,
      currentTime = new Date(), // 获取系统当前时间
      resTime = currentTime - prevTime; // 时间戳
    // 打印本次当前的世间和上次世间间隔的时间差
    console.log('时间差', resTime);
    // 当前距离上次执行时间小于设置的时间间隔
    if (resTime < duration) {
      // 清除上次的定时器,取消上次调用的队列任务，重新设置定时器。这样就可以保证500毫秒秒内函数只会被触发一次，达到了函数节流的目的
      clearTimeout(timer);
      timer = setTimeout(function() {
        prevTime = currentTime;
        method.apply(that);
      }, duration);
    } else {
      // 当前距离上次执行的时间大于等于设置的时间时,直接执行函数
      // 记录执行方法的时间
      prevTime = currentTime;
      method.apply(that);
    }
  };
}
export default throttle;
```

然后在需要使用函数节流文件中引入,如下所示:其他代码省略

```js
import throttle from './throttle';

// 在组件的constructor内初始化,this坏境绑定处进行调用
this.handleClickThrottled = throttle(this.handleClick, 1000);
```

同理,若是自己封装`debounce`函数用于防抖,应把它单独的抽离出去封装成一个函数,通过`export` 对外暴露,供其他地方调用

```js
/**
 *
 * @authors 川川 (itclancode@163.com)
 * @ID suibichuanji
 * @date 2019-08-31 21:10:17
 * @version $Id$
 * @description 函数防抖
 * @param { method, duration} [method是事件处理函数,duration是延迟时间]
 * 原理:它是维护一个计时器,规定在duration时间后出发时间处理函数
 * 但是在duration时间内再次出发的化,都会清除当前的timer重新计时
 * 这样一来,只有最后一次操作事件处理函数才被真正的触发
 *
 * 一般用于输入框事件,常用场景就是表单的搜索或者联想查询,
 * 如果不使用防抖会连续发送请求,增加服务器的压力
 * 使用防抖后,会在用户输入要查询的关键词后才发送请求，百度搜索就是这么实现的
 */
function debounce(method, duration) {
  var timer = null;
  return function() {
    var that = this,
      args = arguments;
    // 在本次调用之间的一个间隔时间内若有方法在执行,则终止该方法的执行
    if (timer) {
      clearTimeout(timer);
    }
    // 开始执行本次调用
    timer = setTimeout(function() {
      method.apply(that, args);
    }, duration);
  };
}

export default debounce;
```

小结:

`React`中如何实现函数的节流和防抖?

- 引用`lodash.throttle`第三方库的`throttle`函数用于节流
- 自己封装`throttle`函数用于节流
- 引用`lodash.debounce`第三方库的`debounce`函数用于防抖
- 自己封装`debounce`函数用于防抖

## 结语

整篇文章到这里就结束了,如果你能够坚持读完或者看完视频,相信对于 React 中的事件处理有了一定的理解和认识,光看仍然是迷迷迷糊的,似懂非懂,一手写起来,就卡壳..文字讲千百遍,不如代码撸一遍

主要从介绍`React`事件开始,`event`(事件)对象,this 绑定性能比较,向事件处理程序中传递参数,到最后的如何阻止函数调用太快(函数节流,两种方式)或者太多次(函数防抖),分别用原生`JS`以及`React`中的第三方库实现

对于函数的节流与防抖是前端提升性能的手段,虽然就几行代码,但是面试时,常问不衰,让你手写,很多时候,拍拍胸脯,不借助搜索引擎,还真不一定能立马写得出来

在实际的开发中,函数的节流与函数防抖也是用得比较频繁的,可见它的重要性不言而喻

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
