---
title: 函数的防抖与节流
autoGroup-4: 常用片段代码
---

## 函数的防抖与节流

## 快速导航

<TOC />

## 前言

在开发中，我们经常会遇到需要频繁触发某个函数的情况，比如：

- 监听滚动条的变化，当滚动条的位置发生变化时，需要执行某个函数
- 监听鼠标的移动，当鼠标的位置发生变化时，需要执行某个函数
- 监听键盘的按键，当键盘的某个按键被按下时，需要执行某个函数

当用户频繁的与`UI`界面操作交互时,例如:`窗口调整`(触发resize),`页面滚动`,`上拉加载`(触发scroll),表单的按钮提交,商城抢购疯狂的点击(触发`mousedown`),而实时的搜索(`keyup`,`input`),拖拽等

当你频繁的触发用户界面时,会不停的触发事件处理函数,换而言之,当出现连续点击,上拉加载,实时搜索,对DOM元素频繁操作,请求资源加载等耗性能的操作,可能导致界面卡顿,浏览器奔溃,页面空白等情况

而解决这一问题的,正是函数节流与函数防抖

## 函数节流

**定义**: 节约(减少)触发事件处理函数的频率,连续每隔一定的时间触发执行的函数,它是优化高频率执行一段js代码的一种手段
**特点**: 不管事件触发有多频繁,都会保证在规定的间隔时间内真正的执行一次事件处理函数,只会让一个函数在某个时间窗口内执行一次,若在时间窗口内再次触发,则重新计算时间

**应用场景**: 常用于鼠标连续多次点击`click`事件,鼠标移动`mousemove`,`拖拽`,`窗口尺寸改动`(resize),`鼠标滚轮页面上拉`(onScroll),`上拉刷新懒加载`

**原理**: 通过判断是否达到一定的时间来触发函数,若没有规定时间则使用计时器进行延迟,而下一次事件则会重新设定计时器,它是间隔时间执行

通常与用户界面高频的操作有:

* 鼠标滚轮页面上拉(onScroll),下拉刷新懒加载
* 窗口尺寸改动(onresize)
* 拖拽

若是高频操作,若不进行一定的处理,必然会造成多次数据的请求,服务器的压力,这样代码的性能是非常低效的,影响性能,降低这种频繁操作的一个重要的手段,就是降低频率,通过节流控制,也就是让核心功能代码在一定的时间,隔多长时间内执行一次

节流就是保证一段时间内只执行一次核心代码

你可以联想生活中节约用水(三峡大坝设置很多水闸)的例子:

高频事件就像是一个大开的水龙头,水流源源不断的大量流出,就像代码在不断的执行,若不加以控制,就会造成资源的一种浪费
对应页面中的,若是表单中连续点击提交按钮,监听滚动事件,连续下拉加载等请求服务器的资源

要节流,拧紧水龙头,要它的流水频率降低,每隔一段时间滴一滴水的,从而节省资源

在代码中的体现就是:设置一定时器,让核心功能代码,隔间段的去执行

下面是一个鼠标滚轮,节流操作实现:类似连续操作的，都是如此,连续点击按钮,上拉加载

### 节流方式一:时间戳+定时器

```js
/* throttle1函数,节流实现方式1:时间戳+定时器
    	 *  @params method,duration 第一个参数为事件触发时的真正要执行的函数
    	 *  第二个参数duration表示为定义的间隔时间
    	 *
    	 *  原理:通过判断是否达到一定的时间来触发函数,若没有规定时间则使用计时器进行延迟,而下一次事件则会重新设定计时器,它是间隔时间执行,不管事件触发有多频繁,都会保证在规定内的事件一定会执行一次真正事件处理函数
    	 *
    	 * */
function throttle1(method, duration) {
    var timer = null;
    var prevTime = new Date();   // 之前的时间
return function() {
    var that = this,
        currentTime = new Date(),          // 获取系统当前时间
        resTime = currentTime - prevTime;  // 时间戳
    // 打印本次当前的世间和上次世间间隔的时间差
    console.log("时间差", resTime);
    // 当前距离上次执行时间小于设置的时间间隔
    if(resTime < duration) {
        // 清除上次的定时器,取消上次调用的队列任务，重新设置定时器。这样就可以保证500毫秒秒内函数只会被触发一次，达到了函数节流的目的
        clearTimeout(timer);
        timer = setTimeout(function(){
            prevTime = currentTime;
            method.apply(that);
        }, duration)
    }else { // 当前距离上次执行的时间大于等于设置的时间时,直接执行函数
        // 记录执行方法的时间
        prevTime = currentTime;
        method.apply(that);
    }
    
}
}

// 事件触发的方法(函数),函数节流1
function handleJieLiu1(){
console.log("节流方式1");
}   

var handleJieLiu1 = throttle1(handleJieLiu1, 500);
document.addEventListener('mousewheel', handleJieLiu1);
```

**节流方式二:重置一个开关变量+定时器**:

```js
/*
* throttle2函数节流实现方式2:重置一个开关变量+定时器
* @params method,duration形参数与上面的含义一致
* @return 返回的是一个事件处理函数
*
* 在throttle2执行时定义了runFlag的初始值,通过闭包返回一个匿名函数作为事件处理函数,
*
* 在返回的函数内部判断runFlag的状态并确定执行真正的函数method还是跳出,

每次执行method后会更改runFlag的状态,通过定时器在durtion该规定的间隔时间内重置runFlag锁的状态
* 
*/
function throttle2(method, duration){
  // 当前时间间隔内是否有方法执行,设置一个开关标识
  var runFlag = false;
// 返回一个事件处理函数
return function(e) {
    // 判断当前是否有方法执行,有则什么都不做,若为true,则跳出
    if(runFlag){
        return false;
    }
    // 开始执行
    runFlag = true;
    // 添加定时器,在到达时间间隔时重置锁的状态
    setTimeout(function(){
        method(e);
        // 执行完毕后,声明当前没有正在执行的方法,方便下一个时间调用
        runFlag = false;
    }, duration)
}
} 
// 事件触发的方法(函数),函数节流2
function handleJieLiu2(){
console.log("节流方式2");
}
var handleJieLiu2 = throttle2(handleJieLiu2, 500);
document.addEventListener('mousewheel', handleJieLiu2);
```

上面两种实现函数节流的方式都可以达到防止用户频繁操作而引起重复请求资源的

当鼠标滚轮不断滚动时,事件处理函数的执行顺序不一样

当给一个大范围的时间内,比如:1小时内,每几分钟执行一次,超过一小时不在执行,推荐使用第一种函数节流的方式

如果仅仅要求间隔一定时间执行一次,推荐使用第二种函数节流的方式



## 函数防抖

**定义**:防止抖动,重复的触发,频繁操作,核心在于，延迟事件处理函数的执行,一定时间间隔内只执行最后一次操作,就是当函数被触发后，只有在上一次函数执行完，一段时间后，才会再次触发函数。 例如:表单多次提交,推荐使用防抖

换句话说,也就是当连续触发事件时并没有执行事件处理函数,只有在某一阶段连续触发的最后一次才执行,它遵循两个条件

1. 必须要等待一段时间

2. 上一次触发的时间间隔要大于设定值才执行

**特点**: 某段时间内只执行一次

在生活中,你可以想象公交司机等人上车后,才出站一样

**应用场景**: 常应用于输入框事件`keydown`,`keyup`,搜索联想查询,只有在用户停止键盘输入时,才发送Ajax请求

**原理**: 它是维护一个计时器,规定在`duration`(延迟)时间后出过事事件处理函数,但是在`duration`时间内再次触发的话,都会清除当前的`timer`重新计时,这样一来,只有最后一次操作事件处理函数才被真正的触发

具体代码如下所示:

```js
 /*
*  函数防抖
*  例如：假定时间间隔时500ms,频繁不同的操作5s,且每两次执行时间小于等于间隔500ms
*  那么最后只执行了1次，也就是每一次执行时都结束上一次的执行
*  @params method,duration,与上面一致
*
*  原理:它是维护一个计时器,规定在duration时间后出发时间处理函数,但是在duration时间内再次出发的化,都会清除当前的timer重新计时,这样一来,只有最后一次操作事件处理函数才被真正的触发
*
* 一般用于输入框事件,常用场景就是表单的搜索或者联想查询,如果不使用防抖会连续发送请求,增加服务器的压力,使用防抖后,会在用户输入要查询的关键词后才发送请求，百度搜索就是这么实现的
*
* 
*/
function debounce(method, duration) {
var timer = null;
return function(){
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

}

}
    // 事件触发的方法(函数),防抖
function handleFangDou(){
    console.log("函数的防抖",new Date());
}
var handleFangDou = debounce(handleFangDou, 500);
var oInput = document.querySelector("#input"); // 获取input元素
oInput.addEventListener('keyup',handleFangDou);
```
如上输入框效果所示,每当输入框输入后,键盘弹起时,执行事件处理函数,而不应该是键入内容时都触发一次事件处理函数

同理,搜索引擎,表单联想查询功能时,不是根据用户键入的字母,数字,内容同时进行Ajax数据请求的,如果每键入一个字母都触发一次数据请求,那就耗性能了的
应当是用户停止输入的时候才去触发查询请求,这个时候就用到函数防抖了的

表单的多次提交,百度搜索等都是用的防抖实现的

**小结**:

**共同点**: 都是解决频繁操作触发事件处理函数,引起页面卡顿,不流畅等性能问题,都是通过设置延时计时器逻辑来提升性能,以减少http请求次数,节约请求资源

**不同点**:函数节流,间隔时间内执行事件处理函数,而函数防抖,一定时间间隔内只执行最后一次操作

## 直接引入lodash库

如果自己不原生手动实现,可以直接安装`yarn add lodash`,然后引入

```js
// 函数接口
npm i -S lodash.throttle;

import throttle from 'lodash.throttle'; // 引入lodash.throttle库

// 事件触发的方法(函数),节流
function handleThrottle(){
    console.log("函数的节流",new Date());
}

throttle(handleThrottle, 500); // 将触发事件处理函数作为第一个参数传入,第二个参数为间隔的时间,这里是500毫秒
```    

下面是函数防抖的实现

在终端下通过`npm`或者`cnpm`或`yarn`的方式安装第三方库

```js
npm i -S loadsh.debounce
或者
cnpm install -S loadsh.debounce
```
在组件中使用
```js
import debounce from 'lodash.debounce'; // 函数防抖

function handleDebounce() {
    console.log("函数的防抖", new Date());
}                        

debounce(handleDebounce, 500);
```
自己原生实现函数防抖
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
            timer = setTimeout(() =>   method(...args), duration)
          }

  }
```
当然对于上面的代码,还是可以优化一下的,对于回调函数,在Es6中,常用于箭头函数来处理,这样会省去不少麻烦

例如：this的指向问题

如下所示:`debouce`函数最简易的封装

你也可以把上面的定时器初始值放在debouce函数作为第三个形参数设置,也是可以的
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
如果自己封装`throttle`和`debounce`函数,可以单独封装到一个文件对外暴露就可以了,在需要用它们的地方,通过`import`引入即可,在代码中直接调用就可以

在根目录下(以你自己的为准)创建一个`throttle.js`
通过`export default` 暴露出去

```js
/*
*  @authors 川川 (itclancode@163.com)
 * @ID suibichuanji
 * @date 2023-10-04
 * @weChatNum 微信公众号:itclancoder
   @desc 封装节流函数
*  @param method,duration:method事件处理函数,duration:间隔的时间
*  @return 匿名函数
*  原理: 通过判断是否达到一定的时间来触发函数,
*  若没有规定时间则使用计时器进行延迟,而下一次事件则会重新设定计时器
*  它是间隔时间执行,不管事件触发有多频繁
*  都会保证在规定内的事件一定会执行一次真正事件处理函数
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
      console.log("时间差", resTime);
      // 当前距离上次执行时间小于设置的时间间隔
      if (resTime < duration) {
        // 清除上次的定时器,取消上次调用的队列任务，重新设置定时器。这样就可以保证500毫秒秒内函数只会被触发一次，达到了函数节流的目的
        clearTimeout(timer);
        timer = setTimeout(function() {
          prevTime = currentTime;
          method.apply(that);
        }, duration)
      } else { // 当前距离上次执行的时间大于等于设置的时间时,直接执行函数
        // 记录执行方法的时间
        prevTime = currentTime;
        method.apply(that);
      }

    }
  }
  export default throttle;
```

然后在需要使用函数节流文件中引入
```js
import throttle from './throttle';


throttle(事件触发处理函数, 1000);

```
同理,若是自己封装`debounce`函数的防抖,把它单独的抽离出去封装成一个函数,通过`export` 对外暴露,供其他地方调用

```js
/**
 * 
 * @authors 川川 (itclancode@163.com)
 * @ID suibichuanji
 * @date  2023-10-04 
 * @weChatNum 微信公众号:itclancoder
 * @version $Id$
 * @description  函数防抖
 * @param { method, duration} [method是事件处理函数,duration是延迟时间]
 * 原理
 * 原理:它是维护一个计时器,规定在duration时间后出发时间处理函数
 * 但是在duration时间内再次出发的化,都会清除当前的timer重新计时
 * 这样一来,只有最后一次操作事件处理函数才被真正的触发
 *
 * 一般用于输入框事件,常用场景就是表单的搜索或者联想查询,
 * 如果不使用防抖会连续发送请求,增加服务器的压力
 * 使用防抖后,会在用户输入要查询的关键词后才发送请求，百度搜索就是这么实现的
 */
function  debounce(method, duration) {
          var timer = null;
         return function(){
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

          }

  }

  export default debounce;
```

如何阻止函数调用太快(函数节流,两种方式)或者太多次(函数防抖),分别用原生JS以第三方库实现

对于函数的节流与防抖是前端提升性能的手段,虽然就几行代码,但是面试时,常问不衰,让你手写,很多时候,拍拍胸脯,不借助搜索,你还真不一定能写得出来

在实际的开发中,函数的节流与函数防抖也是比较频繁的,可见它的重要性不言而喻


<footer-FooterLink :isShareLink="false" :isDaShang="true" />



