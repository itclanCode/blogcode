---
title: JS数组中的一些实用方法
---

## 快速导航

<TOC />

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/array-methods/01-array-methods.png" alt="js数组中一些实用的方法" />
</div>

## 前言

您将在本文中学习到

- `for`循环与`forEach/map/filter/find`的一个使用对比

- 同 `for` 循环性能的一个比较

是不是一提到循环,就条件反射的只知道 `for`循环呢,那么本文就是你想要知道的

**需求场景**: 假若后端返回这么一个`json`数据格式,如下所示,我们需要拿到返回对象中的数组项,或者根据某些指定的条件，取特定的值,然后渲染到页面当中去,例如:拿`name`属性值

```js
{
  "ret":true,
  "data":{
      "headerTitle":"群成员",
      "members":{
        "A":[
           {"id":"0A1","name":"小爱","imgPhoto","http://default.png","phoneNumber":1333344,“age”:18},
         ],
        "B":[],
        "C":[],
        "D":[
           {"id":"0D1","name":"小兵","imgPhoto","http://default.png","phoneNumber":14343344,"age":19},
        ],
        "E":[],
        "F":[],
        "H":[
           {"id":"0H1","name":"黄药师","imgPhoto","http://default.png","phoneNumber":14343344
        }],
        "L":[
           {"id":"0L1","name":"小
            L1","imgPhoto","http://default.png","phoneNumber":14343344,"age":20},
           {"id":"0L2","name":"小L1","imgPhoto","http://default.png","phoneNumber":14343344,"age":22}
           {"id":"0L3","name":"小L2","imgPhoto","http://default.png","phoneNumber":14343344,"age":21}
        ]
        }
        }
}
```

对应的 `UI` 渲染图结果如下所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/array-methods/02-qunnumber.png" alt="js数组中一些实用的方法" />
</div>

从数组对象中拿到特定的值渲染到页面当中，一些新增数组的方法就很有用了,单纯靠一个 `for` 循环就很难搞定了

**目标**: 取对象中的值,然后循环遍历数组

Es5 实现方法:先通过对象,方式拿到数组对象,然后 `for` 循环,拿到数组项

不同的框架代码中实现的方式语法表现有些不一样

Angular 中

```js
// array表示要遍历的数组,obj表示遍历时的每个元素,index表示遍历数组的下标,当然ng中提供 ng-repeat指令也是可以循环遍历
angular.forEach(array,funciton(obj,index){
// dosomething
}
```

**React 中:**

`react`中父组件向子组件传值,同样,使用最多是`map`方法

**Vue 中**

`vue`中比较粗暴,直接用指令`v-for="item in items"`可以遍历,比较暴力,下面的是伪代码,仅供参考

```js
var members = {}; // 初始化一个空对象,用于接收后台要返回的对象,然后通过DOM(innerHTML方式，字符串拼接)操作,将数据内填充到页面中指定的位置,当然下面的是伪代码模拟一下
axios.get("/api/mock/linker.json")
.then(res=>{
  res = res.data;
  if(res.ret == true){
   let data = res.data;
   this.members = data.members;
  }
})
function showName(){
  for(key in this.members){
    for(var i=0;i<members[key].length;i++){
      for(j in members[key]) {
       console.log(members[key][j].name)
      }
    }
  }
}

}
```

如下一简单示例所示:

从对象中取某一数组中的某个值,与上面的数据格式是一致的

```js
var obj = {
  data: {
    members: [
      { id: 111, name: '小高' },
      { id: 222, name: '小凡' },
      { id: 333, name: '小王' },
    ],
  },
};
var newArrs = []; // 初始化一个空数组
for (key in obj.data) {
  //console.log(obj.data[key]);
  for (let i = 0; i < obj.data[key].length; i++) {
    console.log(obj.data[key][i]);
    for (j in obj.data[key][i]) {
      console.log(obj.data[key][i].name);
      newArrs.push(obj.data[key][i].name);
      // break;至于为什么会重复打印两次,因为在里层for-in始终每次都得走一遍,然后在跳到上层for循环,加上break的话,就跳出for-in循环了的,就达到目的了,这里可以浏览器打断点看得出
    }
  }
}
console.log(newArrs); // (6) ["小高", "小高", "小凡", "小凡", "小王", "小王"]
console.log(new Set(newArrs)); // 去重,{"小高", "小凡", "小王"}
```

**forEach 实现**

```js
var obj = {
  data: {
    members: [
      { id: 111, name: '小高' },
      { id: 222, name: '小凡' },
      { id: 333, name: '小王' },
    ],
  },
};
var newArrs = [];
obj.data.members.forEach(function(member, index, originArrs) {
  newArrs.push(member.name);
});
console.log(newArrs); //["小高", "小凡", "小王"]
```

## forEach

**功能**: 循环遍历数组中的每一项,只能遍历数组

**写法**

```js
数组对象.forEach(function(参数变量名1,参数变量名2，参数变量名3)){
// 做一些操作,forEach是没有返回值,返回值为undefined
})
```

**特点**

`callback`函数，为数组中每个元素执行的函数，该函数接收三个参数

- 变量参数名 1 表示的是数组中的项值(数组当前项的值)

- 变量参数名 2 表示的是索引(数组当前项的索引)

- 变量参数名 3 表示原数组(数组对象本身)

- 返回值:`undefined`,并且总是返回`undefined`值,并且不可链式调用

**使用场景**

邮箱,QQ,购物车,列表,全选:删除所选项邮件等,`todolist`

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/array-methods/03-forEach.png" alt="js数组中一些实用的方法" />
</div>

## map

**功能**:循环遍历数组中的每一项,也只能遍历数组

**写法**

```js
数组对象.map(callback(参数名1,参数名2,参数名3){
// 对原数组做一些操作
}
```

**特点**

`map`使用方式与`forEach`类似,`callback`回调函数接收的参数意义与`forEach`一致

必须要有返回值,如果不给`return`,它会返回一个`undefined`

`return` 的返回值是什么,相当于给这个新增的数组添加新的值,但它不会影响原数组,只是将原来的数组拷贝了一份,把拷贝的数组项进行更改,支持链式调用

**使用场景**

**场景 1**: 拷贝原数组,改变一些东西,假定有一个数组(A),将 A 数组中的值以双倍的数值放到 B 数组中

Es5 写法

```js
var numbersA = [1, 2, 3, 4, 5, 6];
var numbersB = [];

for (var i = 0; i < numbersA.length; i++) {
  numbersB.push(numbersA[i] * 2);
}
console.log(numbersB);
```

为了遍历数组,我们需要创建变量 i,指向数组的长度(`numbersA.length`),还需定义计数器的修改(`i++`),这是一个非常烦人容易出错的事

当多层`for`循坏嵌套时,不仅阅读上困难,代码也很难理解,你不得不跟踪`for`循坏中的每一步,确保遍历了数组中的每一个元素没有遗漏

那么`forEach`和`map`等迭代器函数就避免了此类问题,简化了操作

`Es6`中`map`写法

```js
var numbersA = [1,2,3,4,5,6];
var numbersB = []
var numbersC = numbersA.map(function(numberA,index,originArrs){
   return numbersB.push(numberA*2);
}
console.log(numbersA); // [1,2,3,4,5,6]
console.log(numbersB);// []
console.log(numbersC);// [4, 8, 12, 16, 20, 24]
console.log(numbersC==numbersA)
```

**场景 2:在一个数组对象中拿到数组中对象的属性**

```js
/*
 假定有一个对象数组(arrsA),将arrsA数组中对象某个属性的值存储到B数组中
*/
var arrsA = [
  { name: '苹果', price: 8888, city: '旧金山' },
  { name: '金立', price: 1100, city: '深圳' },
  { name: '小米', price: 999, city: '北京' },
  { name: '锤子', price: 888, city: '上海' },
];
var sum = 0;
var prices = arrsA.map(function(item, index, arr) {
  console.log(item, index, arr);
  return item.price;
}); // 也可以直接在这后面链式调用,跟着forEach的
console.log(prices); // [8888,1100,999,888]
prices.forEach(function(price, index, arr) {
  sum += price;
});
console.log(sum); // 11875
```

## filter

**功能**

经过`filter`函数后会创建一个新的数组, 回调函数返回的结果一个`boolean`值,若结果为真,则返回匹配的项,若为假,则返回一个空数组，它不会改变原有数组,返回的是过滤后的新数组

**写法**

```js
数组对象.filter(function(currentVal,index,arrs){
// 做一些操作
}
```

**特点**

`filter`函数遍历的元素范围在第一次调用回调函数`callback`的时候就已经确定了的

在调用`filter`之后添加到数组中的元素不会被`filter`遍历到,如果已经存在的元素被改变了，则他们传入`callback`的值是`filter`遍历到他们那一刻的值,被删除或从来未被赋值的元素不会被遍历到,支持链式调用

**使用场景**

**场景 1:假定有一个对象数组(A),获取数组中指定类型的对象放到 B 数组中**

**Es5 实现**

```js
/*假定有一个对象数组(A,persons),获取数组A(这里指persons)中指定类型的对象放到B数组中*/

var persons = [
  { name: '小王', type: 'boy', city: '广西', age: 15, height: 170 },
  { name: '小美', type: 'girl', city: '北京', age: 16, height: 180 },
  { name: '小高', type: 'girl', city: '湖南', age: 18, height: 175 },
  { name: '小刘', type: 'boy', city: '河北', age: 20, height: 177 },
];
// Es5，假定要拿person数组对象中类型为boy的对象
var filterPersons = [];
for (var i = 0; i < persons.length; i++) {
  if (persons[i].type == 'boy') {
    filterPersons.push(persons[i]); // 若是想要拿到对象的键值,直接persons[i].属性名
  }
}
console.log(filterPersons);
```

Es6 中的`filter`实现

```js
var persons = [
  { name: '小王', type: 'boy', city: '广西', age: 15, height: 170 },
  { name: '小美', type: 'girl', city: '北京', age: 16, height: 180 },
  { name: '小高', type: 'girl', city: '湖南', age: 18, height: 175 },
  { name: '小刘', type: 'boy', city: '河北', age: 20, height: 177 },
];

var filterPersons = persons.filter(function(person, index, arrs) {
  return person.type === 'boy';
});
console.log(filterPersons); // 会过滤筛选出类型type为boy的整个对象,然后塞到一个新的数组当中去
```

控制台显示如下所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/array-methods/04-filter.png" alt="js数组中一些实用的方法" />
</div>

**场景 2:假定有一个数组(A,persons)，过滤掉不满足以下条件的对象**

```js
/*
* 取出persons数组对象满足类型为男孩
age大于18的，小于等于20，身高小于180，如果没有匹配的它会返回一个空数组
*
*/
var persons = [
  { name: '小王', type: 'boy', city: '广西', age: 15, height: 170 },
  { name: '小美', type: 'girl', city: '北京', age: 16, height: 180 },
  { name: '小高', type: 'girl', city: '湖南', age: 18, height: 175 },
  { name: '小刘', type: 'boy', city: '河北', age: 20, height: 177 },
];
var filterNum = persons.filter(function(person, index, arrs) {
  return (
    person.type === 'boy' &&
    person.age > 18 &&
    person.age <= 20 &&
    person.height < 180
  );
});
console.log(filterNum); // [{name: "小刘", type: "boy", city: "河北", age: 20, height: 177}]
```

**场景 3:假定有两个对象(A),根据对象 A 中 id 值,过滤掉 B 数组中不符合的数据（也就是根据某个条件,去抽取出要操作对象中的属性）**

```js
/*
假定有两个对象(A(下面代码中指info),
B(如下languanges)所示,
根据对象A中id值,过滤掉B数组中不符合的数据
（也就是根据某个条件,去抽取出要操作对象中的属性）

*/
var info = { Id: 4, content: 'JavaScript' };

var languanges = [
  { Id: 4, content: 'Angular4' },
  { Id: 2, content: 'Vue.js', author: '尤大大' },
  { Id: 3, content: 'Node.js' },
  { Id: 4, content: 'React.js' },
];

var filterFun = function(info, languanges) {
  return languanges.filter(function(laguange) {
    return laguange.Id === info.Id;
  });
};
console.log(filterFun(info, languanges)); //会挑选出languanges数组符合id等于4的选项,如果你想取对象中某个值,支持链式调用,直接跟着map或者forEach即可
```

如下链式调用

```js
// 如下链式调用
var filterFun = function(info,languanges){
return languanges.filter(function(laguange){
return laguange.Id === info.Id;
}).map(function(currentVal){
return currentVal.content;
}).forEach(function(curr){
console.log(curr);
})
}
console.log(filterFun(info,languanges)
```

这个`filter`方法有时会很有用,过滤掉某个对象中有没有某个属性值,有的话,就返回,没有就返回一个空数组

如下所示:找到满足`laguanges`数组对象中是否包含`author`的属性

```js
var filterFun = function(info, languanges) {
  return languanges.filter(function(laguange) {
    return laguange.hasOwnProperty('author');
  });
};
console.log(filterFun(info, languanges));
```

## find

**功能:**

用来查找目标元素,若找到就返回该元素，若找不到就返回`undefined`，同样不会改变原有数组

**写法**

```
数组.find(callback(参数1,参数2,参数3)
```

- `callback`同样接受三个参数

- 第一个参数 1 表示的是当前遍历到的元素，

- 第二个参数 2 表示的是,每一次迭代查找的数组元素的索引

- 第三个参数 3 表示的是原操作数组

**特点**

找到第一个符合条件之后,就不会往后找了,这与 filter 过滤是不一样的，find 方法比较快速便捷

返回值:若匿名回调函数结果为真,则返回所匹配的选项对象,若为假,则返回 undefined

**使用场景**

**场景 1:假定有一个数组对象(A),找到符合条件的对象**

```js
/*
假定有一个对象数组(A)
找到符合条件的对象
如下示例:找到learnWebs数组对象中name值为segementdefault*/

// Es5实现

var learnWebs = [
  { name: 'segmentdefault' },
  { name: 'MDN' },
  { name: 'stackoverflow' },
  { name: 'v2ex' },
  { name: 'w3cplus' },
  { name: 'segmentdefault' },
];
var learnWeb = [];
for (var i = 0; i < learnWebs.length; i++) {
  if (learnWebs[i].name === 'segmentdefault') {
    learnWeb.push(learnWebs[i]);
    //break;// 若不加break，都会走完一遍for循环
  }
}
console.log(learnWeb);
```

使用 Es6 中的 find 实现

```js
// Es6中的find方法,找到第一个符合条件之后的就不会往后在找了
var learnWebs = [
  { name: 'segmentdefault' },
  { name: 'MDN' },
  { name: 'stackoverflow' },
  { name: 'v2ex' },
  { name: 'w3cplus' },
  { name: 'segmentdefault' },
];
newWebs = learnWebs.find(function(learnWeb, index, orginArrs) {
  return learnWeb.name === 'segmentdefault';
});
console.log(newWebs);
```

下面是 find 方法使用图解，只要迭代器函数中找到匹配项了,就不会往下找了,结果为真就会返回所匹配选项对象,若结果为假,则返回`undefined`

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/array-methods/05-find.png" alt="js数组中一些实用的方法" />
</div>

**场景 2: 假定有一个数组对象(A),根据指定对象的条件找到数组中符合条件的对象**

```js
/*假定有一个对象数组(A),根据指定对象的条件找到数组中符合条件的对象

例如:新闻列表
商品列表,博客文章等
从商品列表数组对象中找到id,然后点击id跳转到详情页，从一个数组对象中找到对象中的某个id，进行匹配操作*/

var goods = [
  { id: 1, name: '鞋子', size: 34, color: 'red' },
  { id: 2, name: '皮包', type: '爱马仕' },
  { id: 5, name: '手机', type: 'iPhone6' },
];
var goodDetails = { id: 5, desc: '我是手机详情页', price: 666 };

function showDetailFun(goods, goodDetails) {
  return goods.find(function(good) {
    return good.id === goodDetails.id;
  });
}
console.log(showDetailFun(goods, goodDetails));
// 对应的UI界面,点击左边的商品列表页面,进入到商品对应的详情页（博客,新闻都与这类似）
```

## 同 for 循环的性能比较

这是一个容易引起撕扯的话题,笔者准备不进行大篇幅的介绍,结论先行,从两个角度出发:

**性能上:for 循环>forEach>map**

**可读性: forEach/map>for 循环**

**区别**: `for循环`是按顺序遍历，按照下标索引的方式进行读取访问元素的,随机访问,而`forEach/map`等是使用`iterator`迭代器进行遍历，先取到数组中的每一项的地止放入到队列中,然后按顺序取出队里的地址来访问元素

大体上讲,如果数据量不是很大的情况下,抛开业务场景和使用便利性，单纯谈性能和效率是没有意义的,一些 Es5,ES6 新增的数组迭代器方法方便了前端开发，使得以往复杂或者冗长的代码，可以变得易读而且精炼

而好的`for`循环写法，在大数据量的情况下，确实也有着更好的兼容和多环境运行表现

你可以使用`console.time()`以及`console.timeEnd()`进行测试的,个人觉得还是要多用 Es5 和 Es6 新增的迭代器方法,相比于 for 循环,得定义初始值,得跟踪循环计数的变量,是很容易出问题的

## 结语

以上的`forEach`,`map`,`filter`,`find`,方法都是不改变原有数组的,当然还有`every`,`some`等一些方法,`forEach`方法没有返回值，默认返回值为`undefined`,所以它不支持链式调用，而`map`,`filter`方法会返回一个新的数组

`find`方法返回的根据迭代器函数结果`boolean`值，若结果为真则返回指定的元素，若无则返回`undefined`

而改变原有数组的有:增加(`push`,`unshift`),删除(`pop`，`shift`),`reverse`(颠倒),`sort`(排序)，`splice`,限于篇幅所致,以后也会拿出来分享的,针对数组中的这些方法是非常值得反复学习研究的,用好了,它就是神器

对于同`for`循环的性能的比较,其实没有多大的差异,还是要多用

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
