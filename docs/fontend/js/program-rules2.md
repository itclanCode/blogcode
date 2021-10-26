---
title: JavaScript企业级编程规范(2)-常量-变量-函数-事件-操作符
autoGroup-2: 编程规范
---

## 快速导航

<TOC />

## 前言

您将在本篇中看完收获到

- 常量的命名
- 变量的命名
- 函数的命名
- 事件的命名
- 操作符的使用

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules2/01-guide.png" alt="编程规范" />
</div>

## 常量的命名

- 常量名应全部采用大写字⺟，以便和普通变量区别
- 常量名应采用完整的英文单词，或者常用的缩写，能够从字面上理解其意义。不要随意使用英文单词首字母组合的方式
- 如果常量名含有两个或两个以上的英文单词，单词之间必须⽤中下划线\_分隔。如下所示
- 在 `es6`语法环境下，常量命名使用`const`，相对`var`可以节省资源

```js
const HANDLE_CLICLK_TEXT = 'handle_click_text';
```

**场景:** 在`React`或者`Vue`中使用`Redux`或者`vuex`做数据状态管理时,当定义`action`的`type`类型时,往往使用的就是`const`去定义我们要改变`store`的事件类型常量,若有这方便开发经验的是不会陌生的,小程序开发也是如此

## 变量的命名

**局部变量 类型 + 变量名称(匈牙利命名法)**

变量名=属性+类型+对象描述

变量的定义需要区分类型，**增加类型前缀属性+类型+对象属性描述**，如`sBtnColor(按钮的的颜色)`,`sTextBgColor(文本背景色)`

主要前缀有`s(string)`, `a(Array)`, `b(boolean)`, `n(number)`,`o(object)`,`fn/pf(function)`, `rc(React)`, `g(global全局变量)`,`C(Component)`类或结构体,`m`(成员变量`m_nCustomers`)

- 所有的变量定义应该使用有意义的词，最好增加定语前缀，如`sBtnColor`,`sXxxName`, `bLoaded`，尽量避免像`color`,`name`这样的变量对象的属性名称全部是用小写，要避免常用单词和`JavaScript`的关键字，如`in`, `out`, `if`, `do`, `for`等,这个无法速成,非一日之功,多阅读参考开源代码或者团队中优秀小伙伴的代码,虚心学习,请教,思考...模仿
- 变量在生命周期的一开始就定义，一般放在函数的顶部，全局变量放在文件的开头(也就是先声明后使用),按照特定的顺序编写,赋有具体数值的放在后面,这样便于代码的增,删,改阅读,不应该将变量分散在各处,五花八门,到处都是的,如下所示

```js
// 这里以小程序中的js为例,web开发都是类似
Page({
  data: {
    blogTitle: '', // 博客标题
    blogList: [], // 博客列表内容
    bBtnDisabled: true, // 禁止按钮状态,默认禁用
    userInfo: {}, // 用户信息
    pageNum: 0, // 分页起始页
  },
});
```

- 变量名采用小驼峰式（`camelCase`）定义，也就是俗成的烤串式
- 如果变量表示一个 html 组件，名称建议以该控件的类型名结尾。如:`let rcLeftComboTable`(右边组合`table`)
- 在 `es6` 语法环境下，变量命名使用`let`。`let sLeftComboBox`;如果是常量则使用`const`,例如:`const LANGUAGE_KEY`

局部变量示例如下所示

```js
let sDepartName; // 部门名称,字符串
let nDivWidth; // 一个div元素的宽度,类型number
let bFirst; // 是否是第一个,boolean
let aGoodLists; // 商品列表,数组array
let oProducts; // 产品对象,Object
```

全局变量
以`g_`开头，后面与局部变量相同。如：`let g_sClassName`

其他

- 标准变量采用驼峰式命名

```js
var sItclanCoder = 'itclanCoder';
```

- ID 在变量名中全大写

```js
var nGoodID = 12; // 商品ID
```

- `URL`在变量名中全大写

```js
var baseURL = 'http://localhost/8080/detail?page=1';
```

- 常量名应全大写，用下划线连接,并用 `const`关键字声明,相比`var`,更节省内存资源

```js
const MAX_COUNT = 10; // 最大数量
```

- 构造函数，第一个字母大写,用区别于普通函数

```js
function Button(color) {
  this.color = color;
}
```

`jQuery`对象应以`$`开头命名,用于区别是`jQ`对象还是`JS`对象

```js
var $body = $('body');
```

- `Android`在变量名中第一个字母大写

```js
var AndroidVersion;
```

iOS 在变量名中小写第一个，大写后两个字母

```js
var iOSVersion;
```

私有变量, 属性和方法, 名字以下划线\_开头,也就是内部定义的私有方法和属性

```js
let _nInitValue = 0; // 初始值为0
function _getHomeData() {
  // 获取首页数据
  // 逻辑代码
}
```

- 方法和函数的可选参数, 名字以 `opt_`开头, 并在函数注释头使用`@param`标记说明;

```js
/*
 **
 * @param opt_name 模态框可选名称
 *
 */
function isModel(opt_name) {
  // 逻辑代码
}
```

## 函数的命名

- 函数名采用小驼峰式(`camelCase`)定义。避免使用单词首字母组合的方式定义
- 对于具有返回值，且返回值不为`boolean`型的函数，其名称以`get`开头

```js
// 获取莫态框列表数据
function getModelList(list) {
  // 逻辑代码
}
```

- 对于具有返回值，且返回值为`boolean`型的函数，其名称可以以`is`、`can`或`has`开头

```js
function isLeafNode(node) {
  // 逻辑代码
}
function canModify(node) {
  // 逻辑代码
}
function hanSelected(selected) {
  // 逻辑代码
}
```

- 具有初始化功能的函数,其名称可以`init`或`initialize`开头

```js
// 初始化工具栏
function initToolBar() {
  // 逻辑代码
}
```

## 事件的命名

- 对事件的调用函数，命名以 `handle` + `event` 格式命名(或`handle+元素+event`),或`on+元素+event`
  如,`handleInputChange`,`handleBtnClick`,`handleInputFocus`,`onFocus`,`onBlur`,`onInputChange`等
- 事件处理程序提供参数写 `event`,可以使用`ev`,但是还是写全吧,单词也不长
- 可以使用`Before`,`After`表示事件发生的时间顺序，如 `onBeforeSave` , `onAfterSave`依然使用驼峰式`camelCase` 大小写命名
- 一些事件可以用时态表示顺序，如`onchange` ,`onChanged`

```js
function handleInputChange() {
  // 逻辑代码,监听表单内容
}

function onBlur() {
  // 逻辑代码,失去焦点时
}
// 箭头函数也是可以的
let onBtnClick = () => {
  // 逻辑代码,点击按钮
};
```

## 操作符的使用

始终使用`===`替代`==`,它比较的不仅仅数值还有数据类型,如下所示

```js
if (sName === 'itclanCoder') // ✓ ok,全等
if (sName == 'itclanCoder') // ✗ avoid,双等
if (sName !== 'itclanCoder') // ✓ ok,全不等
if (sName != 'itclanCoder') // ✗ avoid
```

这里需要额外注意的是可以用：`obj == null`可以用来检查`null || undefined`
有时候,你也会看到有人把条件判断的数值放在左边,一般有这个习惯的,看得出是个高手,至少写程序是比较严谨的

```js
// 判断bShow是否为false,判断的数值结果放在左边,需要检测的数值放在右边
var bShow = false;
if (true == bShow) {
  // 平常当中,有没有见过这种代码?
  console.log(bShow);
  console.log('执行语句1');
} else {
  console.log(bShow);
  console.log('执行语句2');
}
```

显然,这段代码的最终输出的结果是 else 后面的语句,执行语句 2 被执行了的

如果你一不小心在做判断时,少写了一个等(=)号,也就是双等或者全(三)等变成了一个等号,变成了赋值

平常开发中,漏写一个,少写一个,将等值判断写成赋值,这个是很容易书写造成的,而这个小 bug 虽然不是什么大 bug,但会影响程序的正常运行,没有按照你预期的逻辑走,这个 bug 是很隐性的
有时候,很难察觉

而这种把判断的结果放在左边,检测的对象放在右边,一旦少写了一个等号,编译器就会有提示错误,当然在一些高级的编辑器里面,例如 IDEA 里面是有提示的
如果在这种情况下少写一个等号,如下所示

```js
var bShow = false;
if ((true = bShow)) {
  // 如果漏写一个等号,只有一个等号就是赋值,注意赋值与全等的区别
  console.log(bShow);
  console.log('执行语句1');
} else {
  console.log(bShow);
  console.log('执行语句2');
}
```

那么编译就会报错,给你很好的错误提示,一看判断条件是单等号,也就是赋值,就看出问题在哪了

```js
if(true = bShow) {
    ^^^^
ReferenceError: Invalid left-hand side in assignment
    at new Script (vm.js:79:7)
    at createScript (vm.js:251:10)
    at Object.runInThisContext (vm.js:303:10)
    at Module._compile (internal/modules/cjs/loader.js:656:28)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:699:10)
    at Module.load (internal/modules/cjs/loader.js:598:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:537:12)
    at Function.Module._load (internal/modules/cjs/loader.js:529:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:741:12)
    at startup (internal/bootstrap/node.js:285:19)
```

与之相反,如果把检测的对象放在左边,被检测结果放在右边,也就是常规方式,普遍的做法

因为代码从左往后读,好理解,位置稍有区别,执行结果一样,但是理解起来,检测对象放在等号左边要好容易理解得多

而将检测结果放在左边,却是可以检测到在编写代码时,**如果少写了一个“=”，编译器也能判断出错误，而前者编译器不会出错,执行结果不对,是逻辑代码顺序问题,编译器是无法告知的,它只能识别语法词法的错误**,如下所示

```js
var bShow = false;
if ((bShow = true)) {
  // 如果这样写,漏写了一个等号,程序将会执行,不会报错,但是会影响你想要的结果
  console.log(bShow);
  console.log('执行语句1');
} else {
  console.log(bShow);
  console.log('执行语句2');
}
```

如上代码,在做条件判断时,只写了一个等号(=),程序不会报错,但是会影响最终结果,程序执行了语句 1,这显然是不符合自己预期想要的

编译器也不会给你任何提示,有时候,这种错误找起来非常难受,一旦发现找出来了,气着抽自己都难以解气,哈哈,把检测的结果放在等号的左边是个很好的编程习惯

**如果你硬要抬杠,纠结放前放后的区别,前者正常思维,容易理解,后者却可以让自己少犯错,即使漏写了,让编译器给你找错,比眼睛发现错误要靠谱得多**

## 结语

本篇主要介绍了 JS 中一些编程规范,**涉及到常量,变量,函数名,事件以及操作符**

谈不上什么高大上的内容,所有的规范都是为了让代码可读性更好,好维护,规范并非是束缚,而是一种约定俗成

当然最后谈到一个条件语句中判断放置前后的问题,没有绝对的好与坏,不必较真

如果有人或者自己证明过了这种写法有优于之前的写法,那么就尝试新的方法的,总停留在以前,是难以有进步和突破的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
