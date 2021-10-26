---
title: JavaScript企业级编程规范(3)-换行与缩进-空格约束-语句格式-常见技巧
autoGroup-2: 编程规范
---

## 快速导航

<TOC />

## 前言

您将在本篇中看完收获到

- 换行与缩进
- 空格约束
- 常见开发实用技巧

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/program-rules/program-rules3/01-guide.png" alt="编程规范" />
</div>

## 换行与缩进

每行语句的字符数不得超过 120 个英文字符,当一行的字符超过 120 行时,可以换行(这个不是硬性规定,一行语句太长了,就会影响阅读）
换行按照以下约束进行行缩进控制：函数参数换行。

换行后的第一个参数的首字母应该和函数第一个参数的首字母左对齐，如下所示

```js
// 当有一些函数名称比较长的时候,多个参数,可以选择换行
function someLongNameMethod(longExpression1, longExpression2, longExpression3) {
  // 逻辑代码
}
```

表达式换行。操作符应该换行。如果表达式中含有"( )"运算符，则不应该换行。如下所示

**合法:把有关联的放在一起**

```js
longName1 = longName2 * (longName3 + longName4 - longName5) + 4 * longname6;
```

非法

```js
longName1 = longName2 * (longName3 + longName4
longName5) + 4 * longname6;
```

对于较长的需要换行的三重运算符`" ? :"`，应该采用如下格式

```js
nHeight = (x==y)
? alert( '弹出一表达式为真的提示' )
: alert( ''弹出表达式为假的提示");
```

从`"?"`和`":"`换行，且`":"`和`"?"`左对齐
以下情况,不应该使用缩进

针对整个 js 文件的注释的第一行及最后一行

```js
/**
 * 函数功能详细
 * @param [参数1] [参数说明]
 * @param [参数2] [参数说明]
 * @return [返回值说明]
 */
```

- 常量定义及其注释行

```js
const LANGUAGE_KEY = 'language_key';
```

- 全局变量定义及其注释行

- 针对函数的注释的第⼀行以及最后一行

- 每个函数结尾的`"}"`

- 函数中的语句，每行的缩进数为 2 个空格

```js
function getParentNode(node) {
  let oParentNode;
}
```

缩进应该使用空格符，严禁使用制表符进行缩进 因为在使用不同的文本编辑工具编写代码时,Tab 字符会由于用户设置的不同而调整为不同的宽度

## 空格约束

- 元算术运算符和二元逻辑运算符的两侧必须且只能留出一个空格

```js
var nWidth = 100;
x = y + z;
width = height / 2;
x += 1;
if (exp1 && exp2 && exp3 && exp4 == exp5) {
}
```

- 三元运算符中，`"?"`和`":"`两侧须留一个空格,如下

```js
x = y == 0 ? 1 : 0;
```

一元运算符与变量或表达式之间不能留空格,如下所示

```js
x = !y;
if(!exp1 && exp2)
```

- 函数定义中，每个参数后面的","与下一个参数之间必须留出一个空格，第一个参数与"("之间不能有空格；最后⼀个参数与")"之间不能有空格

```js
// 弹出模态框
function openModelDialog(url, winName, width, height) {
  // 逻辑代码
}
```

- 函数定义中，函数名与其后面的"("之间不能留空格

```js
function openModelDialog() {}
```

- 函数定义中，`")"`与`"{"`之间必须留留一个空格

```js
function openModelDialog() {}
```

- 条件语句句、流程控制语句中，关键字与左括号"("之间不必须有空格；但右括号")"与"{"花括号之间必须有空格,如下所示

```js
// if语句句：
if (true) {
  // 逻辑判断语句
} else {
  // 逻辑判断语句
}
// while语句句：
while (x != 0) {
  // 逻辑语句
}
// switch语句句：
switch (
  x
  // 逻辑语句
) {
}
// do..while语句句：
do {
  // 逻辑语句
} while (i == 0);
// for语句句：
for (i = 0; 10 >= i; i++) {
  // 逻辑语句
}
```

- 键值对当中冒号与值之间要空格

```js
var obj = { key: 'value' }; // ✗ avoid
var obj = { key: 'value' }; // ✗ avoid
var obj = { key: 'value' }; // ✗ avoid
var obj = { key: 'value' }; // ✓ ok
```

- 行末不留空格

## 语句格式

每行定义一个变量，写一条语句,如下所示

```js
const nWidth = 100;
const nHeight = 200;
const nWidth, nHeight; // ✗ avoid,不要写在一行,线上代码可以压缩成一行,但是本地代码应当换行的
x += 2; remove(this); // ✗ avoid,同上
```

- 函数体的第⼀条语句与函数定义行之间不留空行

```js
function openModelDialog() {
  x = y + 1;
}
```

- 函数语句之间，应该根据实际情况进行空行，以增加代码的可读性

```js
function openModelDialog() {
  let clickRow = setItem();
  if (clickRow) {
    clickRow.className = rowStyle;
  }
  let key = LASTCLICKITEM_KEY;
  let value = id;
}
```

- 两个函数定义之间，必须空⼀行

```js
function fun1() {}

function fun2() {}
```

- 函数的返回语句与其他的语句之间须空⼀行

```js
function openModelDialog() {
  x = y + 1;
  return true;
}
```

- 函数定义中，左大括号`"{"`与右括号`")"`须位于同⼀行,中间留⼀个空格。右大括号`"}"`必须独占⼀行，并且与关键字`"function"`对⻬

```js
function openModelDialog() {
  // ...
}
```

if 语句
格式如下

```js
if (row === clickRow) {
  row.className = clickItemStyle;
  width = 100;
} else {
  row.className = rowStyle;
}
```

约束说明

- `if`与`else`中的语句缩进数为 2 个空格（相对于`if`和`else`关键字）
- 即使只有⼀条语句句，也必须用`"{ }"`括起来，禁止使用以下格式

```js
if (row === clickRow)
  // 非法
  return;
```

switch 语句

```js
switch (x) {
  case 1:
    语句;
    break;
  case 2:
    语句;
    break;
  default:
    语句;
    break;
}
```

约束说明

各个`case`关键字相对于`switch`的缩进数为 2 个空格 `case`中的语句相对于`case`关键字的缩进数为 2 个空格 必须有`default`分⽀

**for 语句**

```js
for (i = 0; i <= 10; i++) {
   语句；
}
```

约束说明：

- 循环判断中，分号";"与后面的表达式之间须留一个空格
- 各语句相对于`for`的缩进数为 2 个空格
- 即使`for`中只有一条语句,也必须用`"{ }"`双大括号括起来，禁止使用以下格式

```js
// 非法
for (i = 0; i <= 10; i++) alert(i);
```

while 语句

```js
while (i <= 10) {
  // 逻辑代码
}
```

约束说明

- 各语句相对于 while 的缩进数为 2 个空格
- 即使`while`中只有一条语句，也必须用`"{ }"`括起来，禁止使用以下格式

do while 语句

```js
do {
   // 逻辑代码
} while （10 >= i）
```

约束说明

- 各语句相对于关键字 do 的缩进数为 2 个空格
- 即使只有一条语句句，也必须用`"{ }"`括起来，禁止使用以下格式

```js
do
   alert(i); // ⾮法
while （10 >= i）
```

不允许有连续多行空行
如下是一个完整的例子

```js
/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:itclanCoder
 * @Date: 2020-03-06 11:17:19
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @LastEditTime: 2020-03-06 11:17:44
 * @Description: 完整的注释例子
 */

/* 声明最后一个列表的key */
const LASTCLICKITEM_KEY = 'lastClickItem';
/* 点击最后一个列表的样式风格 */
const g_sLastClickItemStyle = 'selectedRow';
/* 正常行的样式风格 */
const g_sNormalRowStyle = 'normalRow';
/* 鼠标经过行的样式风格 */
const g_sMouseoverRowStyle = 'mouseOverRow';
/**
 * 打开浏览器器新窗⼝。
 *
 * @param url 窗⼝URL。
 * @param winName 窗⼝名称。
 * @param width 窗⼝宽度。
 * @param height 窗⼝⾼高度。
 */
function openNewDialog(url, winName, width, height) {
  const nWidth = window.screen.width;
  const nHeight = window.screen.height;
  const sWinStr =
    'left=' +
    (swidth - width) / 2 +
    ',top=' +
    ((sheight - height) / 2 - 20) +
    ',width=' +
    width +
    ',height=' +
    height;
  // open a dialog
  const win = window.open(url, winName, `resizable=no,scrollbars=yes,${str}`);
  win.focus();
  return false;
}
/**
 * 打开模态窗⼝口。
 *
 * @param url 窗⼝URL。
 * @param winName 窗名称。
 * @param width 窗⼝宽度。
 * @param height 窗⼝⾼度。
 */
function openModelDialog(url, winName, width, height) {
  const nWidth = window.screen.width;
  const nHeight = window.screen.height;
  const winStr =
    'left=' +
    (swidth - width) / 2 +
    ',top=' +
    ((sheight - height) / 2 - 20) +
    ',width=' +
    width +
    ',height=' +
    height;
  // open a model dialog,打开模态对话框
  const win = window.showModalDialog(url, winName, str);
  win.focus();
  return false;
}
```

## 常见开发技巧

`True`和`false`布尔表达式 下面的布尔表达式都返回`false`

- `null`
- `undefined`
- `""` // 空字符串
- `0` // 数字 0

注意下面的返回`true`

- `'0'` // 字符串 0
- `[]` // 空数组
- `{}` // 空对象

```js
while (x != null) { // bad,如果你想判断变量x是不是为null空
   // 逻辑代码
}

while (x) {   // good (只要你希望 变量x 不是 0 和空字符串, 和 false)
  // 逻辑代码
}
if (y != null && y != '') { // bad
...
}

if (y) { // good (只要你希望 变量x 不是 0 和空符串, 和 false)
...
}
```

也要注意下面的

```js
Boolean('0') == true; // true
'0' != true; // true
0 != null; // true
0 == []; // true,比较的是值,如果是全等===,那么将是false
0 == false; // true
Boolean(null) == false; // true
null != true; // true
null != false; // true
Boolean(undefined) == false; // true
undefined != true; // true
undefined != false; // true
Boolean([]) == true; // true
Boolean({}) == true; // true
```

条件(三元)操作符 `(?)`

```js
// 传统写法
if (val != 0) {
  return foo();
} else {
  return bar();
}
// 三元操作符写法
return val ? foo() : bar();
```

- `?`和`:`与他们所负责的代码处于同⼀行
  `if..else`表达式都可以转换为三元操作符,但是可读性没那么好, `&&`与`||` 二元布尔操作符是可以短路的, 只有在必要时才会计算到最后一项.`"||"`被称作为 `'default'` 操作符, 因为可以这样

```js
// 传统写法
if (node) {
  if (node.kids) {
    if (node.kids[index]) {
      foo(node.kids[index]);
    }
  }
}
// "&&"操作符代替写法
if (node && node.kids && node.kids[index]) {
  foo(node.kids[index]);
}
// 或者按如下写法:
var kid = node && node.kids && node.kids[index];
if (kid) {
  foo(kid);
}
// 下面这种写法就不要写成这样了的
node && node.kids && node.kids[index] && foo(node.kids[index]);

// 传统写法
function foo(opt_win) {
  let win;
  if (opt_win) {
    win = opt_win;
  } else {
    win = window;
  }
}

// "||"操作符代替写法
function foo(opt_win) {
  let win = opt_win || window;
}
```

## 结语

篇主要介绍了 JS 中一些编程规范,涉及到换行与缩进-空格约束-语句格式,以及最后的常见开发技巧,表达式中真假,以及短路的处理

你或多或少都会看到一些类似这样的写法,`Es6`中也提供了设置默认参数,也是一种简化处理

如果强制自己写代码写的得更规范,可以用 eslint 等一些工具强制自己的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
