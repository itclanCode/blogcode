---
title: 正则表达式1
---

## 快速导航

<TOC />

## 前言

正则是一个非常强大能完成搜索和替换的文本工具,著称火星文字

## 使用场景

正则最常见的是用在表单验证上,比如要注册一个网站的账号,申请注册邮箱,填写收货人信息等,需要填写用户信息,比如:姓名,地止,手机号,邮箱,出生日期等

在将这些表单数据信息提交到服务器处理之前,我们使用 javascript 程序检查表单以确认用户输入的信息,并且是否符合某些条件要求的,当然正则的用处远不止在表单上,比如:

- 你正在搜索一个文件,这个文件里包含 `suibichuanji`(不区分大小写),你并不想要把包含着其他的字母给找出来,比如什么 `hello`, `boy`, `handsome`( 搜索文件关键字,排除其他字符)
- 创建了一张用户表单的`web`页面,用来收集用户信息,web 页面中包含了一个邮件地止,你需要检查用户给出的电子邮件是否正确的语法格式( 验证文本格式的正确性)
- 正在编辑一段源码并且要把所有的`name`都替换成`myName`驼峰式命名
- 一份计算机文件系统中所有文件的清单,想要把文件名里包含`fileName`的文件列举出来
- 想要在文件里搜索某个特定的文本,但是你只想要把出现在特定位置的字符(比如每行的开头或是每条语句的结尾)找出来
- 用一种应用服务器动态的生成一个 web 网页以显示从某个数据库里检索出来的文本,在那些文本里可能包含着一些 url 地止字符串,你希望那些 url 地止最终生成的页面是可以点击的

正则最强大的两个功能就是:

- **搜索**:用于查找特定的信息(文本)
- **替换**:查找到后进行替换等操作

一般来说,不用正则处理字符操作而想要达到同样的目的,无非想到的就是不断的循环遍历所要操作的字符,在循环体里面用 if 语句来进行判断,那么就不得不用一些特殊的标记来标识找到了什么,没有找到什么

还需要检测空白字符和特殊字符等,实现过程非常的繁琐,然而如果使用正则,就会好很多

**将一个字符串转化成驼峰的方法**

常规方法:

::: details 点击即可查看常规方法实现

```
/*
*
* 将一个字符串转换为驼峰命名
*
* @function test
* @param {String} str
* @return {Array}
*   1.功能函数的编写，函数的调用，传参
*   2.js中的内置对象,切割:split(),切割完后得用一个变量给存储起来
*   3.for循环的遍历,遍历查找
*   4.找到对应的字符串,第0个转化为大写,转化为大写的函数,toUpperCase()在加上字符串的拼接，在进行截取(substring())
*   5. 把字符串给拼接起来(join())
*
*/
var str = 'border-top-color';
console.log(str);  // border-top-color
function test(str){
    var arr = str.split('-');  // spilt切割,border,top,color
    console.log(arr);          // [border,top,color]
    for(var i = 1;i<arr.length;i++){  // 循环遍历数组
    arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
        console.log(arr[i]);    // [border,Top,Color]
    }
  return arr.join(''); // 字符串给加起来
}
console.log(test(str)); // borderTopColor
```

:::

利用正则表达式将一字符串转换为驼峰式命名

::: details 点击即可查看用正则实现

```js
var str = 'border-top-color';
function test(str) {
  var re = /-(\w)/g; // \w 匹配所有的字母和数字字符以及下划线\_
  return str.replace(re, function($0, $1) {
    // 第一个参数 re 表示正则,第二个回调函数,对该字符串处理方式,圆括号内的形参数表示正则表达式的子选项
    return \$1.toUpperCase(); // 转大写
  });
}
console.log(test(str)); // borderTopColor
```

:::

两者对比:

**相同点**:都是为达到同一个目的,将一个字符串转换为驼峰命名
**不同点**:普通正常方法,得利用循环以及 js 中内置对象提供的字符串(split,substring,join 等)方法对所要操作的字符串进行操作,而正则少去了复杂的循环遍历,处理的结果比较快,但是前者比较好理解,而后者难以阅读和理解

使用了正则可以避免过多的利用循环对字符串的操作,往往循环次数多了,就意味代码逻辑变得复杂,但凡用正则实现起来复杂的程序,即普通面向过程的方法的逻辑要复杂得多,正则是为了解放它而生的,进行搜素查找结合内置对象提供的方法可以快速匹配

## 什么是正则表达式?

**正则表达式**:用来匹配和处理文本的字符模式的对象,在`Ecmascript`中`RegExp`类表示正则表达式,是正则表达式语言创建的,是一种为解决以上等问题的工具而造就的一门规则,它有特殊的语法和指令,`String`和`RegExp`都定义了使用正则表达式进行强大的模式匹配和文本检索与替换的函数

**用途**:解决以上等问题,主要是用于验证客户端的输入的数据,当用户填写完表单后执行某些操作(比如点击提交按钮),表单的数据就会发送到服务器端,在服务器端`php`,`java`等后端语言,会进一步的做处理,进行验证和反馈

因为在客户端(浏览器)验证,可以节约大量的服务器端系统资源,避免频繁的交互,延迟响应,提供更好的用户体验

## 如何创建正则表达式

- ### 采用 new 操作符:

```js
var pattern = new RegExp('pattern'); // 第一个参数字符串
var pattern = new RegExp('pattern', 'ig'); // 第二参数可选模式参数,模式修饰符,对字符串某些限制
console.log(Object.prototype.toString.call(pattern)); //检查类型"[object RegExp]"
console.log(new RegExp('pattern')); // 等价于/pattern/
console.log(new RegExp('pattern', 'ig')); //等价于 /pattern/gi,其中ig顺序任意
```

- ### 字面量表达式方式

```js
var pattern = /pattern/; // 用两个反斜杠,中间任意字符
var pattern = /pattern/gi; // 第二个斜杠后加一个或者多个模式修饰符,这里忽略大小写,全局匹配
```

模式修饰符的可选参数

| 参数 |        含义         |
| ---- | :-----------------: |
| i    | 忽略大小写(ignore)  |
| g    |  全局匹配(global)   |
| m    | 多行匹配(multiline) |

## RegExp 对象与 String 提供的方法

- `test()`:一个用来测试在给定字符串里是否存在一个匹配的正则表达式的方法,返回布尔值,如果存在,则返回`true`,如果没有,则返回`false`
- `exec()`:一个用来搜索一个匹配的`regExp`方法,用于在字符串中查找指定正则表达式，如果 `exec()`方法执行成功，则返回包含该查找字符串的相关信息数组,如果执行失败,则返回`null`
- `match(pattern)`:一个用来匹配一个字符串的`string`方法,返回`pattern`中的子串或者`null`
- `replace(patternReg,replaceReg)`:一个用来完成替换操作的`String`方法,用`replaceReg`替换`patternReg`
- `search(pattern)`:一个用来测试在某给定字符串里是否存在着一个匹配的`String`方法,返回字符串中`pattern`的开始位置
- `split(pattern)`:一个用来把一个字符串拆分为多个子串的`String`方法,返回字符串按指定的`pattern`拆分成的数组

## 模式修饰符 i,g

绝大多数正则表达式引擎的默认行文只是返回第一个匹配的结果,如果想要把两个或者更多个匹配的结果都找出来,通常返回为一个数组或者是其他的专用格式,可以使用`g修饰符`,表示全局匹配,该标志将返回一个包含着所有匹配的结果数组.例如:

```js
var str = 'my name is suibichuanji,my public numer is itclanCoder'; // 待匹配对象
var pattern = /my/; // 后面无修饰符，书写好正则规则,然后拿着要待匹配对象进行匹配
console.log(pattern.test(str)); // true
```

用全局匹配修饰符

```js
var str = 'my name is suibichuanji,my public numer is itclanCoder';
var pattern = /my/g;
console.log(pattern.test(str)); // true
```

::: tip 注意
默认行为只返回第一个匹配的结果,若匹配到了,就不会往后匹配了,具体示例验证,可以在线正则表达式测试 正则表达式中是区分字母大小写的,`my` 与 `MY` 是两个不同的字符串,可以用修饰符 `i` 来强制匹配不区分大小写 字母大小写有区分
:::

```js
var str = 'my name is suibichuanji,my public numer is itclanCoder';
var pattern = /MY/; // 未使用任何修饰符
console.log(pattern.test(str)); // false
```

使用`i修饰符`,不区分大小写匹配

```js
var str = 'my name is suibichuanji,my public numer is itclanCoder';
var pattern = /MY/i; // 第二个斜杠后使用i修饰符,表示忽略大小写
console.log(pattern.test(str)); // true
```

使用一条语句实现正则

```js
console.log(
  /my/.test('my name is suibichuanji,my public numer is itclanCoder')
);
console.log(
  /MY/i.test('my name is suibichuanji,my public numer is itclanCoder')
); // 前面是正则规则.test()方法,圆括号内是要待匹配的对象与前面的规则进行匹配,其结果,要么true,要么false
```

### test():该方法用于检测一个字符串是否匹配某个模式

- **语法**:正则规则.test(待要检测的字符串),`pattern.test(str);`
- **参数**:圆括号内的`str`表示你想要的检测的字符串对象
- **返回值**:执行完与正则规则匹配后,如果字符串`str`中含有与`pattern`匹配的文本的话,那么返回`true`,否则返回`false`,具体示例,以上例子可得

### exec():在字符串中执行匹配搜索返回结果数组

- **语法**:正则规则.exec(待要检测的字符串),`pattern.exec(str)`
- **参数**:`str`是需要待检测的字符串,`pattern`是我们写的正则规则
- **返回值**:执行完与正则规则匹配后,若有匹配到,则会返回一个数组,如果未找到匹配，则返回值为`null`,如下示例

```js
var str = 'welcome focus on itclanCoder public Number';
var pattern = /suibichuanji/gi; // 忽略大小写,并且全局匹配
console.log(pattern.exec(str)); // null
```

使用`exec()`函数,当有匹配时,则返回一数组

```js
var pattern = /itclanCoder/gi;
console.log(pattern.exec(str)); //["itclanCoder", index: 17, input: "welcome focus on itclanCoder public"
```

## 使用`match()`:一个用来匹配一个字符串的 string 方法,返回 pattern 中的子串或者 null

**注意**:使用`match()`的位置,前面是待要匹配的对象,而圆括号内是正则表达式

当匹配对时,结果返回待匹配的特定字符的子串,该方法类似于 `indexOf()`或者 `lastIndexOf()`;但是它返回的是指定的值,而不是字符串的位置

- **语法**:待要检测的字符串对象.match(正则规则),`str.match(pattern)`
- **参数**:`pattern`表示是正则表达式,可以是在`pattern`中检索的字符串,也可以是需要检索的`RegExp`对象
- **返回**:如果匹配到,则返回一成功的数组,如果没有找到任何的一个匹配,那么它将返回的是`null`

```js
var str = '"chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人"';
console.log(str.match('chuanchuan')); // ["chuanchuan", index: 1, input: ""chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人""]
var pattern = /chuanchuan/gi;
var str = '"chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人"';
console.log(str.match(pattern)); // ["chuanchuan", "chuanchuan"]
var str = '"chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人"';
console.log(str.match(/handsome/)); // ["handsome", index: 15, input: ""chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人""]
```

当不匹配时,其结果返回`null`,同样要注意圆括号内是正则表达式与`test()`和`exec()`方法不同

```js
var pattern = /随笔川迹/gi;
var str = '"chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人"';
console.log(str.match(pattern)); // null
```

## 使用 search(pattern):返回字符串中 pattern 开始位置

::: tip 注意
`search`方法查找到即返回,会忽略`g`修饰符全局匹配,同时它也没有`RegExp`对象的`lastIndex`的属性,且总是从字符串开始位置进行查找,总是返回的是 str 匹配的第一个位置查到并返回第一个,若没有匹配到,则返回`-1`
:::

- **语法**:待要检测字符串对象.search(pattern);`str.search(pattern)`
- **参数**:`pattern`是正则规则表达式,`str`是要待检测的字符串对象
- **返回**:`str`中第一个与`RegExp(pattern)`对象相匹配的子串的起始位置,如果没有找到任何匹配的子串,则返回`-1`,若匹配到,则返回该子串的位置,示例代码如下

```js
var pattern = /随笔川迹/i;
var str = 'chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人';
console.log(str.search(pattern)); // -1
```

若匹配到,则返回的是该待匹配对象子字符串的位置

```js
var pattern = /川川/gi; // 由于search方法查到就返回,无需g修饰符,查到返回第一个
var str = 'chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人';
console.log(str.search(pattern)); // 37
```

## 使用`replace(pattern,replacePattern)`

使用`replace`方法替换匹配到的数据

- **语法**:待检测字符串对象.replace(正则规则,要替换的文本或者功能函数),`str.replace(pattern,fun)`;
- **参数**:圆括号内第一个参数表示正则规则,第二个参数可以是字符串也可以是函数,在 `str`中查找与`RegExp(pattern)`相匹配的子字符串,第二个参数值或者功能函数执行结果来替换这些子串,如果`RegExp(pattern)`具有全局标志`g`,那么`replace()`方法将替换所有匹配的子串,否则,它只替换第一个匹配子串(也就是说默认只会找第一个子串进行返回,若想全局替换,则要加`g`修饰符),`replace()`中的第二个参数,`$`字符具有特定的含义,它是从模式匹配得到的字符串将用于替换待检测字符串文本,具体下节在做补充
- **返回**:返回替换后的新字符串,示例代码如下

```js
var pattern = /chuanchuan/i;
var str = 'chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人';
console.log('未使用replace方法之前', str);
console.log('使用replace方法之后', str.replace(pattern, '随笔川迹')); //未使用replace方法之前 chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人//使用replace方法之后 随笔川迹 is handsome man,chuanchuan川川是一个全宇宙最帅的男人
```

::: tip 注意
`replace`方法替换,也查到后并返回,默认返回第一个,如果想要全局匹配替换,那么对正则使用修饰符 g 全局匹配,可达到全局匹配替换
:::

## 使用 split()方法拆分成字符串数组

**使用方法**:待匹配对象.split(正则规则确定是以什么样的格式将该字符串进行拆分,可选参数); 第一个参数表示以什么样的格式对该字符串进行拆分,而第二个参数可选,若没有则是对整个字符串的进行拆分,若是有数字参数,则返回的子字符串不会多于这个参数指定的数组

- **语法**:待匹配对象.split(第一个参数以什么样的形式将待匹配对象进行拆分必填项,可以是字符串或者正则,第二个为可选参数,用指定拆分后数组的长度,若无,则对待检测的整个字符串进行操作),`str.split(pattern,2)`;
- **参数**:`pattern`可以是字符串也可以是正则规则,第二个参数可选,用于对待检测字符串切割后的数组长度,返回的数组不会超过该指定的长度
- **返回**:一个字符串数组,该数组通过在`split()`圆括号内第一个参数,指定的边界处将字符串`str`分割成子字符串

```js
var pattern = / /i; // 中间是空格,空格也是字符,用来分割单词之间的字符之一,意味着以空格的规则将字符串进行拆分成数组
var str = 'chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人';
console.log('未使用split方法之前', str);
console.log('使用split方法之后', str.split(pattern)); //未使用split方法之前 chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人//使用split方法之后 (4) ["chuanchuan", "is", "handsome", "man,chuanchuan川川是一个全宇宙最帅的男人"]
```

`split()`:圆括号后设置第二个参数,会指定返回字符串的长度

```
var pattern = / /i;
var str = "chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人";
console.log("未使用split方法之前",str); //未使用split方法之前 chuanchuan is handsome man,chuanchuan川川是一个全宇宙最帅的男人
console.log("使用split方法之后",str.split(pattern,2)); //使用split方法之后["chuanchuan", "is"]
```

可以使用 `Object.prototype.toString.call()`进行准确的确定返回结果的具体类型 上述`String`与`RegExp`对象提供的方法语法很简单,但是真正在使用的时候,他们之间的组合就非常强大了,要想灵活运用

其实验证某个模式能不能获得预期的匹配结果不是那么困难,但是如果验证它不会匹配到你不想要的东西就不简单了,往往在使用时,有时会忘记他们当中的某一个,以至于卡壳,从而不得不向度娘伸手,好像除了多撸,没有什么别的好办法了

**小结**:各个方法的差异比较

- **相同点**:都是对待检测字符串进行操作,会返回一个指定的结果
- **不同点**:正则表达式`RegExp`对象中提供的两个`test()`,`exec()`方法的书写格式与`String()`提供的`match()`,`search()`,`replace()`,`split()`有所不同
  前者是:正则规则.test(待检测字符串对象),`pattern.test(str),pattern.exec(str)`,而后者是:**待检测字符串对象.match(正则规则),str.match(pattern),str.search(pattern),str.replace(pattern,替换的文本或功能函数)**

`str.split(确定对待检测字符串以什么样的格式拆分,可选参数项指定切割后数组长度)`;只要知道 RegExp()中的两个检测方法与 String()提供的四个的方法格式相反就可以了

## 特殊字符控制特定匹配模式

若反斜线后跟元字符,则将失去特殊的含义,比如 `\.`就是表示一个 `点`,反斜杠用来对字符进行转义

**字符类:单个字符和数字**

- ### 元字符号:

- `.`:匹配除换行符以外的字符(也就是匹配任何单个字符,字母,数字,下划线,甚至字符本身)
- `[a-z0-9]`:匹配括号中的字符集中的任意字符 等价于 `[abcd..z0123..9]`
- `\d`:匹配任何一个数字字符, 等价于 `[0-9]`或者 `[0123456789]`
- `\D`:匹配任何一个非数字字符, 等价于 `[^0-9]`
- `\w`:匹配任何一个字母数字字符(大小写均可),或下划线, 等价于 `[a-zA-Z0-9_]`
- `\W`:任何一个非字母数字或非下划线字符, 等价于 `[^a-zA-Z0-9_]`

- ### 字符类:锚字符

- `^`:匹配字符串的开头(行首匹配),还有另外一个作用就是取非(反),将给定的字符集合排除在匹配操作以外,除了该字符集合里的字符,其他字符都可以被匹配,注意,给定字符集的所有字符或字符区间,而不是仅仅限于紧跟在`^`字符后面的那一个字符或字符区间
- `$`:匹配字符串的结束(行尾匹配)
- `\A`:只有匹配字符串开始处
- `\b`:匹配单词边界,一个单词的开始或者结尾,并且匹配且匹配一个位置,不匹配任何字符
- `\B`:不匹配一个单词的边界,匹配非单词边界,与`\b`相反,可以用来查找前后都有多于的空格的连字符等,在正则里,小写与大写,往往功能相反

点`.`元字符的使用

**解释**:匹配除换行符以外的字符(也就是匹配任何单个字符,字母,数字,下划线,甚至字符本身) 使用一个点符号,只匹配一个字符,使用 test()测试

```js
var str = 'suibichuanji';
var pattern = /s.i/;
console.log(pattern.test(str)); //true
```

使用`exec()`测试结果

```js
var str = 'suibichuanji';
var pattern = /s.i/;
console.log(pattern.exec(str)); // ["sui", index: 0, input: "suibichuanji"]
```

使用`match()`方法,圆括号内是要待匹配的对象与前面的规则进行匹配,其结果,要么`true`,要么`false`

```js
var str = 'suibichuanji';
var pattern = /s.i/;
console.log(str.match(pattern)); // ["sui", index: 0, input: "suibichuanji"]
```

使用`search`方法查找到即返回,也就是说无需`g`修饰符全局匹配,查到并返回第一个 若没有匹配到,则返回`-1`

```js
var str = 'suibichuanji';
var pattern = /s.i/;
console.log(str.search(pattern)); // 0
```

用`replace(pattern,replacePattern)`使用`replace`方法替换匹配到的数据

```js
var str = 'suibichuanji';
var pattern = /s.i/;
console.log(str.replace(pattern, 'ab')); // abbichuanji
```

使用`split()`方法对指定的字符串进行以指定的正则规则进行切割并返回数组

```js
var str = 'suibichuanji';
var pattern = /s.i/;
console.log(str.split(pattern)); // ["", "bichuanji"]
```

以上主要是熟悉一下`String`与`RegExp`提供的方法,他们真的很强大 `[a-z0-9]`匹配括号中的字符集中的任意字符等价于`[abcd..z0123..9]`

`[]`:用来定义一个字符集合,在使用左[和]右中括号定义的字符集合里,这两个元字符之间的所有字符集合都是该集合的组成部分,该字符集合的匹配结果是能够与该集合里的任意一个成员相匹配

`-`:连字符,是一个特殊的元字符,它只能用在左中括号[和]右括号之间, [0123456789]等价于 [0-9], [ABCDEF 中间字母省略 Zabcd 中间字母省略 z0123456789]等价于 [A-Za-za-9]在字符集合以外的地方,`-`横岗只是一个普通的字符,只能与`-`本身相匹配,所以,在正则里,`-`字符不需要被转义
::: tip 注意
在定义一个字符区间的时候,一定要避免让这个区间的尾字符小于它的首字符,(比如[4,0]);这种区间是无意义的,而且会让整个模式匹配失效
:::

```js
var str = 'itclanCoder 2323535';
var pattern = /[a-z0-9]/; // 匹配区间里面的任意一个字符,如有则返回第一个字符,若无则返回false，或者null
console.log(pattern.test(str)); // true
```

若无字符匹配,使用`test()`或`exec()`返回 false,或 null test()测试

```js
var str = 'ABBCC';
var pattern = /[a-z0-9]/;
console.log(pattern.test(str)); // false
```

`exec()`测试

```js
var str = 'ABBCC';
var pattern = /[a-z0-9]/;
console.log(pattern.exec(str)); //null
```

`\d`字符 匹配任何一个数字字符,等价 [0-9]或者 [0123456789] 示例代码如下 test()方法测试如下

```js
var str = '345893347852394';
var pattern = /\d/; // 检测匹配数字
console.log(pattern.test(str)); //因为str确实含有数字,只要待匹配的字符串含有数字,就返回true
```

exec()测试结果

```js
var str = '345893347852394';
var pattern = /\d/;
console.log(pattern.exec(str)); // ["3", index: 0, input: "345893347852394"]
```

`[0-9]`等价`\d`

```js
var str = '345893347852394';
var pattern = /[0-9]/; // [0-9]使用字符集合区间[],并用连接符-横岗
console.log(pattern.test(str)); //true
```

当不匹配时,则返回`false`

```js
var str = 'abcdfeffsgsdgasd'; // 字符串中并没有包含数字
var pattern = /[0-9]/;
console.log(pattern.test(str)); // 所要匹配的字符串中并没有包含数字,false假若是要与此相反,则使用^
var str = 'abcdfeffsgsdgasd'; // 字符串中并没有包含数字
var pattern = /[^0-9]/; // 注意^应放在中括号里面,它
console.log(pattern.test(str)); // true
```

`\D`字符

匹配任何一个非数字字符,等价 `[^0-9]`

```js
var str = 'absdjfsksdjg';
var parttern = /^\D/; // 匹配任何一个非数字字符等价[^0-9]
console.log(pattern.test(str)); // true
```

当不匹配时

```js
var str = ''; // 由于没有字符
var parttern = /^0-9/;
console.log(pattern.test(str)); //由于没有字符,所以返回false,注意逻辑
```

`\w` 字符

匹配任何一个字母数字字符(大小写均可),或下划线,等价`[a-zA-Z0-9_]`

```js
var str = 'shjfuiewgns_235356345';
var pattern = /\w/; // 匹配[a-zA-Z0-9_]中任意一字符即可
console.log(pattern.test(str)); // 因为匹配的字符串有,所以结果true
```

当为空格或者没有任何字符时,则为 false

```js
var str = ' '; // var str = "";
var pattern = /\w/;
console.log(pattern.test(str)); //false
```

\W 字符

任何一个非字母数字或非下划线字符,等价于 `[^a-zA-Z0-9_]`

```js
var str = ' '; // 空格
var pattern = /\W/;
console.log(pattern.test(str)); // true
```

`^`字符

匹配字符串的开头(行首匹配)

```js
var str = 'itclanCoder ';
var pattern = /^itclanCoder/; // 注意从开头开始匹配,^后面跟着的字符串全匹配
console.log(pattern.test(str)); // 只要待匹配的字符串有包含正则所匹配的规则,都返回true,若不满足则返回false
```

不完全匹配时,则返回 false

```js
var str = 'itclanCode -';
var pattern = /^itclanCoder/;
console.log(pattern.test(str)); //false,由此^是对后面的整个字符都进行匹配限制
```

`$`字符

匹配字符串的结束(行尾匹配)

```js
var str = 'itclanCoder';
var pattern = /itclanCoder$/;
console.log(pattern.test(str)); //true
```

同上不匹配时

```js
var str = 'tclanCoder';
var pattern = /itclanCoder$/; // 从结尾处开始匹配,会与待匹配的字符串向前查找
console.log(pattern.test(str)); // 因为与规则的正则不完全匹配,所以返回false
```

`^`与`$` 结合使用

```js
var str = 'itclanCoder';
var pattern = /^itclanCoder$/; // ^开头是i开始匹配,结尾$开始匹配,若待检测字符串有一个与正则表达式不同,则返回false
console.log(pattern.test(str)); // true
```

待检测字符有一处或若干处不同时,则返回 `false`

```js
var str = 'itclansdfdCoder'; // 待检测字符对象
var pattern = /^itclanCoder$/;
console.log(pattern.test(str)); // false
```

`\A`元字符
只有匹配字符串开始处,示例代码如下

```js
var str = 'javascript is a very important skill';
var pattern = /\A/;
console.log(pattern.test(str)); // false
var str = 'javascript is a very important skill';
var pattern = /\A/;
console.log(pattern.exec(str)); // null
var str = 'Aavascript is a very important skill';
var pattern = /\A/;
console.log(pattern.test(str)); // true
var str = 'Aavascript is a very important skill';
var pattern = /\A/;
console.log(pattern.exec(str)); // ["A", index: 0, input: "Aavascript is a very important skill"]
```

`\b`:匹配单词边界,一个单词的开始或者结尾,并且匹配且匹配一个位置,不匹配任何字符 示例代码如下 从末尾开始匹配

```js
var str = 'codeincode';
var pattern = /code\b/; //从末尾处,一个个往前匹配,若有则返回,若无返回null
console.log(pattern.exec(str)); // ["code", index: 6, input: "codeincode"]
```

反例:无匹配到

```js
var str = 'codeinnode';
var pattern = /code\b/; // 从后往前逐个匹配，意味倒数第四个是n不是c所以没有匹配到,其结果返回null
console.log(pattern.exec(str)); //null
```

从头开始匹配

```js
var str = 'codeinnode';
var pattern = /\bcode/;
console.log(pattern.exec(str)); // ["code", index: 0, input: "codeinnode"]
```

从头开始匹配,当没有时,有一个字符不匹配时,就会返回 null

```js
var str = 'coceinnode';
var pattern = /\bcode/; // 从头开始匹配
console.log(pattern.exec(str)); // 因为第三个字符是c不是d,与所要的正则规则不匹配,所以返回null
```

`\B`:不匹配一个单词的边界,匹配非单词边界,与`\b`相反,可以用来查找前后都有多于的空格的连字符,在正则里,小写与大写,往往功能相反 示例代码如下:

## 总结

正则是一个非常强大的文本匹配工具,用特殊的字符正着去匹配文本还好(其实也不简单),往往需要逆向的去折腾它,就是不在你考虑范围条件下也要考虑进去从而剔除一些程序上的漏洞,是比较难的
