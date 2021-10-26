---
title: React 进阶(8)-如何在React中使用装饰器-即@修饰符
autoGroup-2: React进阶
---

## 如何在 React 中使用装饰器-即@修饰符

## 快速导航

<TOC />

## 前言

装饰器 decorator 是一种函数,是 Es6 的一个语法糖,是一种与类(class)相关的语法,用来注释或修改类和方法

以`@+函数名`形式展现,可以放在类和类方法的定义前面

那它在 React 中是如何使用的呢,这里以`create-react-app`脚手架搭建的项目为例

## 为什么要使用装饰器模式?

在设计模式中讲到优先使用对象而不是类继承,动态的给对象添加一些额外的属性或方法，相比与使用继承,装饰器模式更加灵活

在 React 中,高阶组件是一个非常厉害的东西,它最大的特点就是能够:重用组件逻辑.达到精简代码能力

## 前提条件

在使用这种装饰器方式时,需要对`create-react-app`做一些配置,它默认是不支持装饰器模式的,需要对项目做一些配置

在项目根目录中终端下使用`npm run eject`,这条命令主要是将我们的配置项做一个反向输出,暴露出隐藏的 webpack 配置项,这样可以项目进行修改了的,注意它是不可逆的

### 方式 1-经过 eject 后在 package.json 中的 plugins 中配置

使用装饰器,需要使用`babel`来进行转换,用到的插件是`@babel/plugin-proposal-decorators`

当用`eject`将`webpack`一些配置弹射出来以后,会看到根目录下的`package.json`文件下新增了很多文件

在`babel`对象处进行插件的配置,将`@babel/plugin-proposal-decorators`添加到`plugins`后

```js
{
  "babel": {
    "presets": [
      "react-app"
    ],

    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            { "legacy": true }
        ]
    ]

  }
}
```

::: warning 注意
create-react-app 脚手架中已经安装了 `@babel/plugin-proposal-decorators` 插件，如果是自己配置的脚手架,则先要安装插件：`npm install @babel/plugin-proposal-decorators --save-dev`
:::

当然有一个比较便捷的写法就是使用安装`babel-plugin-transform-decorators-legacy`

```js
{
  "babel": {
    "presets": [
      "react-app"
    ],

  "plugins":[
    "transform-decorators-legacy"
   ]

  }
}
```

::: warning 注意
如果使用的是 vscode, 可以在项目根目录下添加 jsconfig.json 文件来消除代码警告

```js
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
```

或者在 vscode 中的设置中`tsconfig`启动`Experimental Decorators`就可以解决此警告
:::

### 方式 2-安装 babel 插件在 babelrc 中配置

在使用这种装饰器方式时,需要对`create-react-app`做一些配置,它默认是不支持装饰器模式的,你需要对项目做一些配置

在`create-react-app`根目录中终端下使用`npm run eject`,这条命令主要是将我们的配置项做一个反向输出,暴露出隐藏的 webpack 配置项,这样可以项目进行修改了的,注意它是不可逆的

使用装饰器模式时:需要安装两个依赖:

```js
cnpm install -D babel-preset-stage-2
cnpm install -D babel-preset-react-native-stage-0
```

然后你需要在根目录下创建一个`.babelrc`文件,对`.babelrc`文件做一些配置

```js
{
  "presets": ["react-native-stage-0/decorator-support"]
}
```

经过这么配置后,就可以使用装饰器了的

### 未使用装饰器之前

如下是`componentA.js`一个高阶组件

```js
import React, { Component } from 'react';

function A(WrappedComponent) {
  // 函数接收一个组件为参数,并返回一个类组件,继承自Component
  return class componentA extends Component {
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      );
    }
  };
}

export default A;
```

如下`componentB.js`一个组件

```js
import React, { Component } from 'react';
import A from './componentA'; // 引入高阶组件

class componentB extends Component {
  render() {
    return <div>我是组件B</div>;
  }
}

export default A(componentB); // 直接调用A,将组件componentB作为参数传入
```

如果嵌套层次很多,会发现这种代码不优雅,很难理解,如果用装饰器,就解决了多层嵌套的问题

### 使用装饰器

在`componentB.js`组件中

```js
import React, { Component } from 'react';
import A from './componentA'; // 引入高阶组件

@A // 直接@+函数名就可以了的
class componentB extends Component {
  render() {
    return <div>我是组件B</div>;
  }
}

export default componentB; // 这里直接返回componentB组件
```

你可以给高阶组件添加静态属性,以及实例属性

```js
import React, { component } from 'react';

function Foo(params) {
  params.title = 'itclanCoder';
  params.prototype.decorator =
    'decorator是装饰器,即@+函数名,用来注释或修改类方法';
}

@Foo
class ComponentA extends Component {
  render() {
    return (
      <div>
        <p>{ComponentA.title}</p>
        <p>{ComponentA.decorator}</p>
      </div>
    );
  }
}
```

在调用装饰器的时候,可以往里面传入实参,则在函数需要`return`一个函数,`return` 返回的函数参数是类的本身,下面的 Foo 函数可以接受参数,这就等于可以修改装饰器的行为

```js
import React, { component } from 'react';

function Foo(isAble) {
  return function(target) {
    target.isAble = isAble;
  };
}

@Foo(false)
class ComponentA extends Component {
  render() {
    return <div>{componentA.isAble} // false</div>;
  }
}
```

## TypeScript

如果你的项目已经开始使用`TypeScript`,那我们只需要在`tsconfig.json`文件中的 `experimentalDecorators` 设置为 `true`

就可以使用 ES7 新特性装饰器了

## 解决 vscode 中不支持 decorator 语法警告问题

在项目根目录创建`tsconfig.json`,设置如下所示

```js
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```

## 注意事项

⒈ 装饰器对类的行为的改变时代码编译时发生的,而不是在运行时,这意味着,装饰器能在编译阶段运行代码,它本身就是编译时执行的函数

⒉ 装饰器只能用于类和类的方法,不能用于函数,因为它存在函数提升

## 结语

高阶组件是函数,参数是组件并返回一个组件的函数,允许向一个现有的对象添加新的功能,增加静态属性于实例属性,又不改变结构,属于包装器模式的一种

因为 Es7 中添加了 decorator 属性,使用`@函数名`表示,在编写 React 组件时,高阶组件是一个非常实用的东西

或许不知不觉中,自己就已经实现了的,很久以前看过设计模式中的装饰器模式,一直云里雾里,不知道这个东西有什么用

直到它在 React 中高阶组件还可以简写,这么用..

如果您有关装饰器问题,欢迎给我留言,一起学习探讨

## 相关参考文档

- [装饰器-decorator](https://es6.ruanyifeng.com/#docs/decorator)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
