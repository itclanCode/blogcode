---
title: Js 笔试真题
sidebarDepth: 3
collapsable: true
---

## JS 笔试真题

## 快速导航

<TOC />

## 前言

以下一些题,均来各大小公司现场的真实笔试题

## 第 1 题. 变量声明不会提升

直接写出下边程序的输出结果

```
console.log(foo);
var foo = "test"
```

::: details 点击即可查看
答案: undefined

解析: 变量`foo`,相当于只有`var foo`;但是却没有赋值,所以值是`undefined`,并且变量的声明并不会提升,只有函数声明会提升
:::

## 第 2 题 词法作用域

写出下面一段代码输出结果

```
var temp = 123;
function f() {
  console.log(temp);
  if(false) {
    var temp = 456
  }
}
f();
```

::: details 点击即可查看
答案: `undefined`

解析: 在没有调用 f 函数时,`temp`的值是`123`,在查找变量时,它先会从函数内沿着作用域链逐级向外进行查找,若有则会返回,若无,则会返回`undefined`,

使用`var`声明的变量并不会有块级作用域,在`if`语句块声明赋值的变量,相当于是裸露的,因为在 f 函数内,变量先使用,但是未赋值,所以是`undeifined`

:::

## 第 3 题 块级作用域

写出下面一段代码输出的结果

```
var temp = 123;
function f() {
  console.log(temp);
  if(true) {
     console.log(temp);
     let temp = 456;
  }
}
f();
```

::: details 点击即可查看详情
答案: 123,然后报错`ReferenceError: Cannot access 'temp' before initialization`,无法在初始化之前访问变量

解析: `let`声明的变量是有块级作用域的,不能重复声明定义
:::

## 第 4 题-Promise 执行问题

写出下面一段程序的输出的结果

```
new Promise(resolve => {
    console.log(1);
    setTimeout(() => console.log(2),0)
    Promise.resolve().then(() => console.log(3))
    resolve();
}).then(() => console.log(4))
console.log(5)
```

::: details 点击可查看详情
答案: 1 5 3 4 2

解析:事件循环,任务队列的执行顺序,`new Promise`是会立即调用,接收了一个`resolve`参数,执行调用输出`console.log(1)`语句,遇到`setTimeout`,它是一个异步宏任务,会推送到任务队列中,进入挂起状态

而`promise.resove`也是一个异步微任务,仍然会推送到任务队列中,进入挂起状态,当主线程`console.log(5)`执行完后,在从异步任务队列中进行执行,在同一栈中,微任务要优先于宏任务的执行,所以先执行 3,然后 4,最后是 2

最终执行的顺序结果是:1,5,3,4,2
:::

## 第 5 题-"123456789".match(/\d{3,5}?/g)的结果是什么?

正则表达式: 考察`match`的用法
::: details 点击即可查看详情
答案: ["123", "456", "789"]

解析:

`match`方法的返回值是存放首次匹配内容的数组。如果没有找到匹配结果，返回 `null`

**用法**：`stringObject.match(searchvalue | regexp)`，这里介绍一下`regexp`模式

**返回值**：存放匹配结果的数组。该数组的内容依赖于 `regexp` 是否具有全局标志 `g`

**使用描述**:

该`match()` 方法将检索字符串`stringObject`，以找到一个或多个与`regexp`匹配的文本。这个方法的行为在很大程度上有赖于 `regexp`是否具有标志`g`

如果 `regexp` 没有标志 `g`，即全局匹配,那么`match()`方法就只能在`stringObject` 中执行一次匹配

如果没有找到任何匹配的文本,`match()` 将返回 `null`。否则，它将返回一个数组，其中存放了与它找到的匹配文本有关的信息

如下示例所示

```
let str="itclanCoder";
console.log(str.match("C"));
```

输出结果

```
["C", index: 6, input: "itclanCoder", groups: undefined]
```

该数组的第 0 个元素存放的是匹配文本，而其余的元素存放的是与正则表达式的子表达式匹配的文本。除了这些常规的数组元素之外，返回的数组还含有两个对象属性。 `index`属性声明的是匹配文本的起始字符在 `stringObject`中的位置，`input` 属性声明的是对 `stringObject` 的引用

如果 `regexp` 具有标志 `g`，则 `match()`方法将执行全局检索，找到 `stringObject` 中的所有匹配子字符串。

若没有找到任何匹配的子串，则返回 null。

**如果找到了一个或多个匹配子串，则返回一个数组**。不过全局匹配返回的数组的内容与前者大不相同，它的数组元素中存放的是 `stringObject`中所有的匹配子串，而且也没有 `index` 属性或 `input`属性

**示例**:

- 不带修饰符 g

```
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/;
var result = url.match(reg);
console.log(result);//["a=1", "a", "1", index: 21, input: "http://www.baidu.com?a=1&b=2&c=3", groups: undefined]
console.log(result.index);  // 21
console.log(result.input);  // http://www.baidu.com?a=1&b=2&c=3

```

- 带修饰符的 g

```
var url = 'http://www.baidu.com?a=1&b=2&c=3';
var reg = /([^?&=]+)=([^?&=])*/g;
var result = url.match(reg);
console.log(result);    //["a=1", "b=2", "c=3"]
console.log(result.index);  //undefined
console.log(result.input);  //undefined
```

有全局 g 匹配和无 g,是不一样的
:::
而在本题中的`"123456789".match(/\d{3,5}?/g)`,从`123456789`字符传中第 3 个位置查找,结束位置在第 5 个位置,全局匹配查找,最终会返回一个数组`[123, 456, 789]`

这个`match`方法有时候会很有用,在匹配某查找一字符串参数的时候,经常在面试中,被问到,怎么将一`url`中的参数给提取出来的,此时这个方法就很有用了的

## 第 6 题-编程将字符串"2018-11-03"转换成"11/03/2018"

字符串中一些方法操作:`split`

::: details 点击即可查看详情

```
var str = "2018-11-03";
var arrs = str.split('-'); // 经果 split 的分割,返回结果是一个数组,arrs 的结果为["2018", "11", "03"]
var result = arrs.map((item, index, arr) => {
return arr[1]+'/'+arr[2]+'/'+arr[0]; // 当然也是可以通过 join 方法进行拼接的["11", "03","2018"].join('/')
})
var tranResult = Array.from(new Set(result)); // 数组去重.这里也可以使用拓展运算符 [...new Set(result)]
console.log(tranResult[0]); // 11/03/2018
```

:::
::: tip 注意
其中这个`Array.from`是可以将类数组格式,转化为真实的数组,经过`new Set()`后,`set`数据结构,如果不进行转化,是没有办法通过数组访问下标的方式进行访问的

这个`Array.from`方法不仅可以将 Set 生成数组,也可以从 `String中生成数组`,从 `Map`生成数组都是可以的,从类数组对象（arguments）生成数组,将一个类(伪)数组转换为一个真实的数组

具体详细使用可参考 MDN 文档[Array.from 使用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
:::

## 第 7 题-如果浏览器不支持 bind 函数,实现一个函数让其兼容

主要考察`bind方法`

- **作用**: 创建一个新的函数（称为绑定函数）, 当它被调用时，将其 `this`关键字设置为提供的值,在调用新函数时,在任何提供之前提供一个给定的参数序列

* **与 call,apply 方法区别**: 都是`Function`对象内置的方法,挂载在`Function`原型下共享方法,它们的第一个参数都是用来更改调用方法中 this 的指向。**需要注意的是 bind 是返回新的函数，以便稍后调用**,它往往跟事件结合使用,只有触发了事件,才会调用,而**apply 、call 则是立即调用原函数**

::: details 点击即可查看

```js{10}
const module = {
  name: 'itclanCoder',
  getName: function() {
    return this.name;
  },
};

const unboundGetName = module.getName;
console.log(unboundGetName()); //  函数在全局范围内被调用,undefined,这里的this指向的是window,很多面试题在全局范围定义了一个var name = "川川",那么此处便会输出"川川",因为这里全局作用域内没有name,所以是undefined
const boundGetName = unboundGetName.bind(module); // 通过bind改变this的指向,指向module对象
console.log(boundGetName()); // itclanCoder
```

在上面的示例代码中,将一个方法从对象中拿出来(上面的 getName 就是 module 对象下的一个方法)，然后再调用(module.getName 赋值给 unboundGetName)，总期望方法中的 `this` 是原来的对象（在这里指的是 module 对象，比如在回调中传入这个方法）。

如果不做特殊处理的话，一般会丢失原来的对象。基于这个函数，用原始的对象创建一个绑定函数，巧妙地解决了这个问题(上面使用 bind 后就解决了这个问题,让 this 指向了 module 对象)
:::

- **语法**

```
// 所要改变的this指向的那个函数.bind(thisArg[, arg1[, arg2[, ...]]])
function.bind(thisArg[, arg1[, arg2[, ...]]])
```

- **thisArg**: 当绑定函数被调用时，该参数会作为 this 的指向。当使用 new 操作符调用绑定函数时，该参数无效，会被忽略,当使用 `bind`在 `setTimeout`中创建一个函数（作为回调提供）时，作为 `thisArg` 传递的任何原始值都将转换为`object`。如果 bind 函数的参数列表为空，或者 thisArg 是 null 或 undefined，执行作用域的 this 将被视为新函数的 thisArg

- **arg1, arg2**: 当目标函数被调用时，被预置入绑定函数的参数列表中的参数

- **返回值**:

返回一个原函数的拷贝，并拥有指定的 this 值和初始参数

- **应用场景 1**:可以对一个函数预设初始参数

只要将这些参数（如果有的话）作为 bind() 的参数写在 this 后面。当绑定函数被调用时，这些参数会被插入到目标函数的参数列表的开始位置，传递给绑定函数的参数会跟在它们后面,如下所示
::: details 点击即可查看

```
function list() {
  return Array.prototype.slice.call(arguments);  // 将类数组转换成真正的数组
}

function addArguments(arg1, arg2) {
    return arg1 + arg2
}

var list1 = list(1, 2, 3); // [1, 2, 3]
var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.bind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.bind(null, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
var result2 = addThirtySeven(5); // 37 + 5 = 42
var result3 = addThirtySeven(5, 10);// 37 + 5 = 42 ，第二个参数会被忽略
```

:::

- **应用场景 2**: 与`setTimeout`一起使用

在默认情况下，使用 `window.setTimeout()`时,此时`this`关键字会指向 `window` （或 `global`）对象。当类的方法中需要 `this`指向类的实例时,你可能需要显式地把`this`绑定到回调函数，这样就不会丢失该实例的引用

也就是说,当使用类的方法时需要`this`指向类实例，就可以使用`bind()`将 this 绑定到回调函数来管理实例
::: details 点击即可查看详情

```
function Bloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 在 1 秒钟后声明 bloom
Bloomer.prototype.bloom = function() {
  window.setTimeout(this.declare.bind(this), 1000); // 这里的this原本指向window,但是通过bind方法后,指向Bloomer
};

Bloomer.prototype.declare = function() {
  console.log('我有 ' + this.petalCount + ' 朵花瓣!');
};

var flower = new Bloomer();
flower.bloom();   // 1秒后输出 我有 11 朵花瓣
```

:::
::: warning 注意
对于事件处理函数和 setInterval 方法也可以使用上面的方法
:::

- **应用场景 3**:绑定函数作为构造函数

绑定函数也适用于使用`new操作符`来构造目标函数的实例。当使用绑定函数来构造实例
::: tip 注意
this 会被忽略，但是传入的参数仍然可用
:::
如下实例代码所示
::: details 点击即可查看

```
function Point(x, y) {   // 声明构造器Point函数
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {   // 构造器Point方法原型下添加toString
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'


var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0/*x*/);
// 实现中的例子不支持,
// 原生bind方法支持
var YAxisPoint = Point.bind(null, 0/*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true,axisPoint是Point的实例化出来的一对象
axisPoint instanceof YAxisPoint; // true,axisPoint是YAxisPoint实例化出来的一对象
new Point(17, 42) instanceof YAxisPoint; // true // 同上
```

:::
在上面的示例代码中,`Point`和`YAxisPoint`是共享原型对象，因此使用 instanceof 运算符判断时为 true

- **应用场景 4**:快捷调用-将类数组对象转换为真实的数组

`bind()`也可以为需要特定 this 值的函数创造捷径

```
var slice = Array.prototype.slice;

slice.call(arguments);
```

如果使用 bind()的话，情况变得更简单

```
// // 与前一段代码的 "slice" 效果相同,下面使用了bind
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

slice(arguments);
```

**在上面的示例代码中,`bind()`有很多的使用场景,但是 bind()函数是在 ECMA-262 第五版才被加入；它可能无法在所有浏览器上运行。这就需要我们自己实现 bind()函数了,在面试题中,可以说是屡见不爽,屡见屡面**

- **方法 1**: 模拟实现 bind 方法

::: details 点击即可查看实现模拟 bind 方法

```
  //在Function的原型上自定义myBind()方法
  Function.prototype.myBind = function myBind(context){
       //获取要操作的函数
       var _this=this;
       //获取实参（context除外）
      var args=Array.prototype.slice.call(arguments,1);
      //判断当前浏览器是否兼容bind()方法
     if('bind' in Function.prototype){
         //如果浏览器兼容bind()方法，则使用bind()方法，并返回bind()方法执行后的结果
         return _this.bind(context,args);
      }
      //如果不兼容bind()方法，则返回一个匿名函数
      return function(){
           _this.apply(context,args);
       }
 }
```

:::

- **自建 bind 函数来给一个对象绑定事件**
- **思路**: 三个参数分别是 `对象`，`事件`，`回调函数`
- **兼容性**: 通过 if 判断对象是否存在`addEventListener方法`来区分浏览器,当然也可以跟上面一样通过`bind`是不是`Function`下的原型对象
- **this 问题的解决**:由于传入的回调函数是浏览器调用的，我们是无法去直接操作的，所以我们在`attachEvent()`不直接传入回调函数，而是先定义一个匿名函数，然后在函数内部调用回调函数，并利用 call 方法改变 this

::: details 点击即可查看

```
<!DOCTYPE html>
 <html>
      <head>
          <meta charset="UTF-8">
          <title></title>
          <script type="text/javascript">
            window.onload = function() {
                  var btn1 = document.getElementById("btn1");
                  bind(btn1, "click", function() {
                     alert(this);
                 });
             };
             //定义一个函数bind()，用来为指定元素绑定事件响应函数
             /*
             * 参数：
              *  obj 要绑定事件的对象
              *  eventStr 事件的字符串
              *  func 回调函数
              */
             function bind(obj, eventStr, func) {
                 //判断是否有addEventListener()方法
                 if(obj.addEventListener) {
                     //大部分浏览器兼容的方式,addEventListener是标准浏览器支持的
                     obj.addEventListener(eventStr, func, false);
                 } else {
                      //IE8及以下,注意使用的是on,绑定事件使用的是attachEvent
                     //obj.attachEvent("on"+eventStr, func);//此方法this为window下面提供解决方法
                     //统一this 不直接调用func而是在匿名函数内调用
                     obj.attachEvent("on" + eventStr, function() {
                         //在匿名函数内调用回调函数 利用call()方法将this改为obj
                         func.call(obj);
                     });
                 }
             };
         </script>
     </head>
     <body>
        <button id="btn1">btn1</button>
    </body>
</html>

```

:::

[MDN 中 bind 使用相关介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## 第 8 题-简单实现一下对象的深拷贝

**考察点**:基本数据类型的拷贝是赋值,而对象复杂数据类型的拷贝是赋止
**解决**: 递归实现深拷贝

::: details 点击即可查看

```
/*
  *  *
  *  @description:把一个对象递归拷贝给另外一个对象
  *  源对象与拷贝后的对象没有引用关系,实现克隆
  *  @params {obj2} obj2为被拷贝的对象
  *  @return {obj} obj为最终拷贝出来的对象
  *  @author itclanCoder
  *  */
function deepCopy(obj2){    // 递归函数
    var obj =  isArray(obj2)?[]:{}; // 判断被拷贝对象是数组还是对象,如果不考虑数组的话,会出现一些问题,如果被拷贝对象里面有数组对象的话,会把数组变为对象,如果传进来是一个数组的话,就让它是一个数组的,是一个对象就是一个对象的
    // 取出obj2的所有属性,如果当前拷贝的数据还是一个对象的话,那么继续调用,deepCopy进行二次拷贝，递归
    for(var property in obj2){
        if(isObject(obj2[property])){
            obj[property] = deepCopy(obj2[property])  // 递归
        }else{
            obj[property] =  obj2[property]
        }
    }
    return obj;
}

// 判断一个值是不是数组
function isArray(val){
    return Object.prototype.toString.call(val) === '[object Array]';
    // 这里直接用Es6中的Array.isArray()方法判断是不是数组也是可以的,但是上面那种是一些标准库的常见用法
}
// 判断是不是对象
function isObject(val){
    return typeof val ==='object' && val !== null;
}
var obj1 = {x: 1, y: 2, z: { a:3, b: 4}}
var obj2 = deepCopy(obj1);
obj2.x = 100；
obj2.z.a = 200;
console.log(obj1, obj2);
```

:::
具体与浅拷贝-深拷贝,可参考文章
[JavaScript 中的浅拷贝 VS 深拷贝](/fontend/js/shallow-vs-deep-copy)

## 第 9 题-实现一个数组的快速排序

**原理**:取出数组的中间项,然后把数组剩下的每一项与该项进行比较

如果小于该项就放在该项的左边,大于该项就放在该项的右边,再分别把左边的项和右边的项的中间项取出

重复上面的步骤到项数小于等于 1 为止,最后把所获得的项进行拼接
::: details 点击即可查看

```
var ary = [21,8,4,32,5];
function quickSort(ary){
   if(ary.length<=1){
	   return ary;
   }

   var num = Math.floor(ary.length/2);
   var numValue = ary.splice(num,1)[0];
   var left = [];
   var right = [];
   for(var i = 0;i<ary.length;i++){
       var cur = ary[i];
       if(cur<numValue){
		      left.push(cur);
       }else{
		      right.push(cur);
       }
   }
   return quickSort(left).concat([numValue],quickSort(right))
}
console.log(quickSort(ary));

```

:::

## 第 10 题-实现一个数组的插入排序

**原理**:取出数组的第一项放到新数组里,让剩余的每一项与新数组的每一项进行比较,小的放左边,大的放右边
::: details 点击即可查看

```
var ary = [21,8,4,32,5];
function insertSort(ary){
  var left = ary.splice(0,1);
  for(var i = 0;i<ary.length;i++){
	var cur = ary[i];
       for(var j = left.length-1;j>=0;){
          var nex = left[j];
          if(cur<nex){
		          j--;
          if(j===-1){
			        left.unshift(cur);
         }
       }else {
            left.splice(j+1,0,cur);
            break;
       }
    }
  }
  return left;
}
console.log(insertSort(ary));
```

:::

## 第 11 题-实现一个数组的冒泡排序

**原理**:从第一项开始,与它后面的每一项进行比较,如果大于后面的项,则交换位置
::: details 点击即可查看

```
var ary = [43,5,82,21];
function buddleSort(data){
   var temp = "";
   for(var i = data.length;i>0;i--){
       for(var j = 0;j<i-1;j++){
		     if(data[j]>data[j+1]){
				    temp = data[j];
            data[j] = data[j+1];
            data[j+1] = temp;
          }
       }
   }
   return data;
}
console.log(buddleSort(ary));
```

:::

## 第 12 题 以下结果是 false 的选项有哪些

考察点:条件表达式中,有哪些结果值是 false 的

```
A. 0 == ''
B. null == undefined
C: NaN == NaN
D: 0.1+0.2 === 0.3
E: {} == []
F: !{}
G: !0
```

::: details 点击即可查看
答案: C D F
:::
