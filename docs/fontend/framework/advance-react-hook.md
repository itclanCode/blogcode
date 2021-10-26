---
title: React中的hook
---

## React 中的 hook

## 快速导航

<TOC />

## 前言

## Hook 是什么

- 增强了函数组件的功能
- 状态
- 生命周期
  - hook 并不能提供全部的生命周期

* 引用

普通的函数组件没有状态

所有的 Hook 都是用 use 开头,自定义的 use 也得 hook 开头

useState 就是一个 Hook

```js
import React, { useState } from 'react';
function App() {
  const [a, setA] = useState(0);
  return (
    <div>
      <button type="button" onClick={(ev) => setA(a + 1)}>
        +1
      </button>
      React {a}
    </div>
  );
}
```

## Hook 使用

class 组件

1. 功能齐全,但是用麻烦

函数组件+hook

功能也齐全,而且使用方便

1. 状态
2. 生命周期
3. 引用
4. 其他

useState,useRef

## 支持情况

- 主流的 React 版本均支持
-

## React Hooks

## 基本用法

1. useState
2. useEffect

UI = render(data)

如何理解:函数 f 将数据(data)映射到用户界面(UI)
例如:商品 1，商品 2...商品列表

状态是数据?

状态有一个隐含,就是存在改变状态的行为

例如:点赞数(likes-状态)隐含了增加一个赞(addLike-行为),而这个行为(点赞)只有在某中上下文(context)中才会存在

1. React16.8 的新增特性,可以让你在不写 class 的情况下使用 state 等 react 特性

2. hooks 是对函数式组件的极大加强

看上去 UI = f(data)

点赞数 --> 点赞数展示

看上去只需要有足够多的切图经验+足够好的数据分类就可以做好 UI

### 实际上

1. setTimeout
2. console.log
3. window.location.href

重新定义 UI 界面是什么,有哪些要素

1. state hook
2. effect hook
3. context hook
4. 函数 v = f(props,state), UI = V usehook1() usehooks2()

状态

在某个上下文中(用户界面)数据和改变数据的行为

// 计数器例子
const [count, setCount] = useState(0);
React hooks 帮助大家将数据和行为绑定

```js
function useCount() {
  const [count, setCount] = useState(initialValue);
  return [
    count,
    () => {
      setCount(count + 1);
    },
  ];
}

export default () => {
  const [count, addCount] = useCount(0);
  return (
    <div>
      Your count: {count}
      <button onClick={() => addCount()}>Add</button>
    </div>
  );
};
```

状态与行为封装在一起

## 作用

UI 如果这样实现,它不仅仅是一个将数据映射到视图的函数

客观世界存在输入和输出之外的东西(改变 URL,改变坏境)

## React Hooks 如何描述作用(Effect)

1. 客观世界有 url,计时器,logger...我们做不到完美而纯净(pure functional)的视图渲染
2. 相同(或类似)的作用如何进行复用,React 团队提出了这个方案

## React Hooks 解决方案

1. UI 产生的过程中,能够从 context 中获取信息(知识)
2. UI 更像是一个人而不是机械的结构

```
UI => () => {
  const {} = useContext(UserTypeContext);
  switch(userType) {
    // 不同的渲染逻辑
  }
}
```

createContext

## reducer

1. 设计模式:提供一种抽象状态行为的通用封装(action),以及计算过程的抽象方案(reducer)
   useReducer

## 引用行为ref(erence)

1. 引用React管理以外的对象
2. 需要在React之外做一些事情,例如:focus,媒体对象操作等
3. 通常搭配useEffect
4. 附带作用:方便得保存值

## 缓存

1. 为什么要缓存?
2. v=f(state,props) useHooks
3. 想在f中new Object()只创建一次
4. 一些复杂的计算只有在状态改变后才做
5. 缓存一个函数(useCallback)
6. 缓存一个值(useMemo)

使用React.memo减少重绘次数

hooks同步问题

