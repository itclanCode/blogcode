---
title: React面经目录
---

## 1-React中hooks的优缺点是什么

在`react`中,`hooks`是一个非常抽象的概念,对初学者,往往不是很友好,比较一下`React`中`hooks`的优缺点

### 优点

[1]. 代码的可读性强,使用`hooks`之前,发布/订阅自定义事件需要挂载到`componentDidMount`生命周期上面,然后需要在`componentWillUnmount`生命周期中清除,在使用`hooks`之后,通过`useEffect`,可以把`componentDidMount`生命周期,`componentDidUpdate`生命周期,还有`componentWillUnmount`生命周期集中在一起,方便代码的维护

[2]. 组件的层级更浅,在使用`hooks`之前,通常使用高阶组件`Hoc`的方法来实现多个组件共用状态,增强组件的功能,这样是增加了组件渲染的开销,影响了性能,但是在`Hooks`中可以使用自定义`hooks`组件`useXXx()`的方法将多个组件之间共用的状态放到自定义`hooks`就可以轻松的做到状态的共享

[3]. 不用在考虑`class`类组件`this`的指向问题了,在`hooks`组件中不需要使用`this.state`来获取数据和方法了

[4]. 可以从组件中提取状态逻辑,使得这些逻辑可以单独测试并复用,`Hook`使你在无需修改组件结构的情况下复用状态逻辑,这使得在组件间共享`Hook`变得更便捷，也就是可以大大减少冗余的代码,尤其是针对那些需要复用逻辑的场景

[5]. 没有破坏性改动,`Hook`不会影响对`React`概念的理解,`Hook`为已知的`React`概念提供了更直接的`API`,`props`,`state`,`context`,`refs`以及生命周期，同时`Hook`提供了一种强大的方式来组合它们

[6]. 更易于测试: 由于`hooks`是纯`JavaScript`函数,因此他们易于编写单元测试并模拟

### 缺点

[1]. 一个`useEffect`里面不能写太多东西,把每个不同的功能分给多个`useEffect`来使用,分成多个模块,把每个功能块分开来写遵循了软件设计当中的单一职责模式,`hooks`的`useEffect`只包括`conponentDidMount`,`componentDidUpdate`和`componentWillUnmount`这三个生命周期,对于其他的`class`类组件的生命周期却不支持

[2]. 不要在`class`组件中调用`hook`,这样是无效的,不能完全模拟类组件的生命周期,虽然可以使用`useEffect hook`来模拟,但是它使用起来需要更多的思考和规划

[3]. `Hooks`是一种新的特性，存在一些兼容性的问题,相对类组件方式,学习曲线比较陡峭,需要一些时间来适应这种编程模式


React中hooks的优点主要是提高了代码的可读性和性能，方便代码的维护和迭代，同时也可以更好地实现状态共享,但是也需要在使用中结合具体的场景和需求来选择最合适的方式,无非就是有了`hook`,多了一种技术方案选择

## 2-React事件绑定原理

在`React`中,事件绑定采用驼峰命名方式,而不是`DOM`元素中的小写字母命名方式,例如:`onclick`要写成`onClick`,`onchange`要写成`onChange`等

`React`中绑定的事件不是原生事件,而是由原生事件合成的`React`事件,例如:`click`事件合成为`onClick`事件,`blur`,`change`,`input`,`keydown`,`keyup`等合成为`onChange`,`React`这么做的原因是为了消除不同浏览器之间的差异

`React`事件的工作原理主要分为以下几个步骤

[1]. 收集事件监听器:`React`会将事件监听器收集到一个数组中,其中包括目标元素的监听器和根元素的监听器


[2]. 获取所有事件:`React`会将所有事件名处理成`domEventName`和`reactEventName`,即`react`事件名和`dom`事件名的对应关系

`React`会遍历`simpleEventPluginEvents`列表,将事件名处理成`domEventName`和`reactEventName`,例如:`click`事件对应着`onClick`事件

一共有75个映射关系,`registationNameDependencies`则保存着`react`事件名和依赖事件名之间的关系,例如:`onClick`事件依赖于`click`事件

[3]. 特殊处理:对于`onDoubleClick`,`onFocus`和`onBlur`这三个事件,他们的`reactEventName`与对应的`domEventName`不通,因此需要特殊处理

[4]. 收集合成事件:`React`会将`event`对象处理成合成事件,为了消除不同浏览器之间的差异,`React`设计了`normalize`函数来将`event`对象处理成合成事件

如果`normalize`存在,说明`propName`对应的属性在合成事件中是一个函数,否则,`propName`对应的属性是一个原生事件

在`React v17`中,`React`不会在将事件处理添加到`document`上,而是将事件处理添加到渲染`React`树的根`DOM`容器中

```js
const rootNode = document.getElementById('root');
ReactDOM.render(<App />,rootNode); 
```
在`React16`及之前版本中,`React`会对大多数事件进行`document.addEventListener()`操作,`React V17`开始会通过调用`rootNode.addEventListener()`来代替

总之,`React`事件绑定的原理是通过使用合成事件来将浏览器原生事件（如`click`、`keyup`等）封装成一个跨浏览器可靠的事件池

在`React`组件中通过使用事件处理函数来监听这些合成事件。`React`使用了一些优化策略来提高事件绑定的性能和效率

比如，`React`会在组件卸载时自动销毁事件绑定。另外，`React`还支持一些高级特性，如事件代理、事件委托以及捕获和冒泡等。

可以通过`event`对象来获取事件的相关信息，如事件类型、触发元素、按下的键等

在使用`React`事件绑定时，应该避免直接操作`DOM`元素，而应该通过调用组件的`setState`方法来实现状态更新从而触发重新渲染


## 3-React中setState是同步还是异步的?

在`React`中,`setState`既可以是同步的也可以是异步的,这取决于执行时机和执行的上下文

[1]. `setState`的异步并不是指内部由异步代码实现的,实际上执行的过程和代码都是同步的,只是合成事件和钩子函数调用的顺序在更新之前,导致在合成事件和钩子函数中不能立即看到`state`的变化,而在原生事件和`setTimeout`中,`setState`是同步的

[2]. 在`React17`中,`setState`是批量执行的,因为执行前会设置`executionContext`,但如果在`setTimeout`,事件监听器等函数中,就不会设置`executionContext`的，这时候`setState`会同步执行,可以在外面包一层`batchUpdates`函数,手动设置下`excutionContext`来切换成异步批量执行

[3]. 在`React`的渲染流程中,`setState`会创建`update`对象挂到`fiber`对象上,然后耨调度`performSyncWorkOnRoot`重新渲染,一个主要任务的先后顺序是:`render`阶段`render`函数执行-->`commit`阶段真实`DOM`替换--->`setState`回调函数执行`callback`,因此,可以看出`setState`的执行顺序是在`render`之后，`commit`之前

[4]. 如果`ExecutionContext`为0,表示当前没有正在进行的其他任务,则`setState`是同步的,在`React`的源码中,当`ExecutionContext`为0时,`setState`是同步的

[5]. 批量更新:多个顺序的`setState`不是同步的一个一个执行的,而是会一个一个加入队列,然后最后一起执行,在合成事件和生命周期钩子中,`setState`更新队列时,存储的是合并状态,因此,前面设置的`key`值会被后面的覆盖,最终只会执行依次更新

综上所述,`setState`既可以是同步的也可以是异步的,具体取决于执行时机和执行的上下文,在`React`中,如果需要手动控制`setState`的异步执行

也就是在合成事件和生命周期函数中是异步的,在原生事件和定时器中都是同步的,`setState`本身不分同步或异步,而是取决于是否处于`batch update`中

可以使用`batchUpdates`函数手动设置`excutionContext`来切换成异步批量执行,同时,在合成事件和生命周期钩子中,`setState`更新队列时,会存储合并状态,因此需要注意`key`值的覆盖问题






