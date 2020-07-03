---
title: 微信小程序中 setData 详解
autoNext: new-scroll-up-down
sidebarDepth: 3
---

## 微信小程序中 setData 详解

## 快速导航

<TOC />

## 前言

在小程序中各个页面之间是相互独立的,一个页面分为渲染层(视图层 webview),逻辑层(JavaScript),系统层(底层),在架构上，`WebView`和 `JavascriptCore` 都是独立的模块，并不具备数据直接共享的通道,换而言之,若要将逻辑层中的`data`的数据渲染到页面中,他们之间是无法直接通信的,往往需要系统层作为中间角色

我们都知道视图层的数据来源于逻辑层 data,而视图图层若想要改变逻辑层 data 的数据,需要借助`setData`这个方法去触发,以达到更新视图层的数据,具体的工作过程是怎么样的?

## setData 是什么

**定义**: 设置数据,更改数据

**作用**: `setData`函数用于**将数据从逻辑层发送到视图层(异步)**,**同时改变对应的`this.data`的值（同步）**

仔细细品这句话,会包含了很多信息

- `setData`它是微信小程序提供的一个内置的接口,是用于改变逻辑层中`data`下的数据的
- 视图层 `view`的数据挂载在逻辑层的`data`下,发送到视图层中是异步的
- 改变`this.data`是同步,换句话说,若直接修改 `this.data` 而不调用 `this.setData`方法,是无法改变页面的状态的，还会造成数据不一致

<div align="center">
   <img class="medium-zoom lazy" loading="lazy"  src ="../images/setdata-detail/setdata01.png" alt="setData原理" />
</div>
从上面的这张图中就可以看到,当逻辑层data数据渲染到界面的时候,逻辑层的数据需要经过系统层,当系统层接收到这个逻辑层的数据后

系统层在把数据转发给渲染层,然后在渲染层展示出来,在这个过程当中是异步的

视图层和逻辑层的数据传输,实际上通过两边提供的`JavScript Core`所实现,即用户传输的数据，需要将其转换为字符串形式传递，同时把转换后的数据内容拼接成一份 JS 脚本，再通过执行 JS 脚本的形式传递到两边独立的环境

## setData 接收两重要参数

从官方文档中看到这句`Page.prototype.setData(Object data, Function callback)`,得知,`setData`方法是挂载当前页面实例`Page`原型下一个公用实例方法

也就是说,Page 下面的任何一个方法内,都可以使用 setData 方法,它接收两个参数

- 一个是`Object data`,第一个参数`Object data`是必传的,数据类型是`Object`,所代表的含义是,这次要改变的数据
- 而第二个参数`Function callback`回调函数是非必填的,它所代表的含义是,`setData`引起的界面更新渲染完毕后的回调函数

为了便于理解,在小程序中创建一个 page 页面,名为`setdata`,如下是逻辑层 js 文件
::: details 点击即可查看文

```
// miniprogram/pages/setdata/setdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "itclanCoder"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})
```

:::

而 wxml 文件如下

::: details 点击即可查看

```v-pre
// miniprogram/pages/setdata/setdata.wxml
<text>{{name}}</text>
```

:::

在`Web` 开发中，开发者使用 `JavaScript` 通过`Dom`接口来完成界面的实时更新。而在小程序中，使用 `WXML`语言所提供的数据绑定功能，来完成此项功能,在小程序中是没有`DOM`,`BOM`的那一套东西的,没有`document.getElementById`等的

小程序是数据驱动视图的,逻辑层中的 data 数据改变了,视图层 view 也会跟着改变,它是单向数据流的,如果想要触发视图中数据的更新,那么就需要借助`setData`这个方法

上面的`WXML`通过**插值表达式**来绑定 `WXML`文件和对应的`JavaScript`文件中的`data`对象属性

在上面的示例中,页面会显示`itclanCoder`,那如何更改逻辑层的数据呢

在下面的示例中,演示了如何更改逻辑层的数据,在 wxml 中新增了一个按钮,用`bindtap`绑定了一个`handleChangeName`方法,触发按钮,改变 data 下的数据

```
<!--miniprogram/pages/setdata/setdata.wxml-->
<text>{{name}}</text>
<button type="primary" bindtap="handleChangeName">更改data中数据</button>
```

而在逻辑层 JS

```
// miniprogram/pages/setdata/setdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "itclanCoder"
  },

  // 改变data的方法
  handleChangeName() {
    console.log("name开始的数据", this.data.name); // itclanCoder
    this.setData({
      name: "川川"
    })
    console.log("name经过setData后的数据", this.data.name); // 川川
  }

})
```

在上面的示例代码中,更改`data`下面的`name`字段值,使用的是`setData`方法,这个方法接收了一个参数,第一个参数是对象,这个`Object` 以 `key: value` 的形式表示，将 `this.data` 中的 `key` 对应的值改变成 `value`
::: warning 注意
这个`key` 可以以数据路径的形式给出,支持改变数组中的某一项或对象的某个属性，如 array[2].message，a.b.c.d，并且不需要在 `this.data` 中预先定义,但凡是页面要显示的变量数据,最好先挂载在`data`下初始化定义,然后在使用
:::

也就是说在更改`setData`下的变量时,直接写`key`名就可以了的,不用写`this.data.属性`,如下所示

```
this.setData({
   // this.data.name: "川川"  // 这样写是会报错的
   name: "川川"               // 正确的写法
})
```

而`setData`接收第二个参数,是一个`Function callback`

```js{4}
handleChangeName() {
    console.log("name开始的数据", this.data.name); // itclanCoder
    this.setData({
      name: "川川"
    }, () => { // 接收第二个回调函数
       console.log("执行setData引起的界面更新渲染完毕后的回调函数");
    })
    console.log("name经过setData后的数据", this.data.name); // 川川
  }
```

上面代码的执行顺序是

```
itclancoder
川川
执行setData引起的界面更新渲染完毕后的回调函数
```

此结果说明这个`setData`方法是异步的,等待主线程任务做完了,然后在去执行第二个参数,回调异步函数

## 如何更改当前对象某个属性的值

有时候,我们的接口数据类型是对象,并非是基本数据类型(number,boolean,string,null),但由于业务需求,我们往往需要改变对象下的某个属性

如下所示,我想改变`person`下的 age 属性值

```
// miniprogram/pages/setdata/setdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person: {
      name: "随笔川迹",
      sex: "男神",
      age: 20
    }
  },

  handleChangeName() {
    this.setData({
      person: {
        age: 24
      }
    })
  }
})
```

在上面的代码中,的确可以更改`person`对象下的`age`属性,但是随之带来的问题是,`person`对象下除了`age`属性,其他属性都消失了
这非常令人郁闷

<div align="center">
    <img class="medium-zoom lazy" loading="lazy" width="300" height="300"  src ="../images/setdata-detail/remove-attr.gif" alt="修改属性" />
</div>

那如何解决这个问题?

**原因**:

对象是一个引用数据类型,上面那种方式,是把我们当前的值指向了一个新的对象

这样,就相当于现在的对象把之前的对象的值给覆盖掉了的,所以只看到`age`属性值,其他属性值给覆盖掉了的,这是一个非常蛋疼的问题,

解决方式如下

- **方法 1**: 指明具体的修改对象属性

```
this.setData({
   "person.age": 24  // 注意要用双引号或单引号将属性给引起来
})
```

- **方法 2**:使用中扩号`['对象.属性']:属性值`

```
this.setData({
   ['person.age']: "川川"   // 访问对象下的属性可以用.也可以用中括号,中间代表是一个变量,需要用引号引起来
})

```

如下所示

<div align="center">
    <img class="medium-zoom lazy" loading="lazy" width="400" height="400"  src ="../images/setdata-detail/remove-attr-success.gif" alt="成功改属性" />
</div>
这个在以后的开发中,很有用,有时候,在需要更改对象下的某个属性值的时候,就可以使用这种方式

## setData 注意事项

- 直接修改 `this.data`而不调用 `this.setData`是无法改变页面的状态的，还会造成数据不一致
- 仅支持设置可 `JSON`化的数据,如果不是 JSON 对象数据格式,需要将数据进行转化成`json对象`,`key:value`形式
- 单次设置的数据不能超过`1024kB`(1M)，不要一次设置过多的数据(由于小程序运行逻辑线程与渲染线程之上,`setData`的调用会把数据从逻辑层传到渲染层，数据太大会增加通信时间,会增加脚本的编译执行时间，占用 `WebView JS` 线程，)
- 不要把 `data`中任何一项的`value`设为`undefined`，否则这一项将不被设置并可能遗留一些潜在问题
- 页面中需要显示的数据,可以挂载在`data`下面初始化,虽然这个值不一定要先设置,但是建议先声明然后在使用
- 避免`setData`的调用过于频繁(`setData接口`的调用涉及逻辑层与渲染层间的线程通信,通信过于频繁可能导致处理队列阻塞,界面渲染不及时而导致卡顿,应避免无用的频繁调用)
  - 在`Android` 下用户在滑动时会感觉到卡顿,操作反馈延迟严重,因为`JS` 线程一直在编译执行渲染，未能及时将用户操作事件传递到逻辑层,逻辑层亦无法及时将操作处理结果及时传递到视图层
  - 渲染有出现延时，由于 `WebView`的 JS 线程一直处于忙碌状态，所以,逻辑层到页面层的通信耗时上升，视图层收到的数据消息时距离发出时间已经过去了几百毫秒，渲染的结果并不是实时的
- 避免 setData 数据冗余(`setData`操作会引起框架处理一些渲染界面相关的工作,避免将未绑定在 WXML 的变量传入`setData`,减少不必要的性能消耗)
- 后台态页面进行 `setData`(比如退出小程序),当页面进入后台态（用户不可见），不应该继续去进行 `setData`，后台态页面的渲染用户是无法感受到的，另外后台态页面去 `setData` 也会抢占前台页面的执行

## 总结

在本文中主要介绍了下`setData`的使用,它是用于修改挂载在 data 下面的数据的,当想要修改视图 view,那么需要借助 setData 函数,它接收两个参数,第一个参数时必传的,也就是要修改视图 view 层的对象,而第二个参数时非必传的

setData 将数据从逻辑层发送到视图层是异步,同时改变对应的`this.data`的值是同步,它并不是实时的,这也导致了必须要考虑性能的因素

从而介绍了 setData 的使用注意事项,值得注意的是,如何修改对象下的某个属性,这个在往后的开发中,是使用比较频繁的.

如果小伙伴们有问题,欢迎大家下面留言,一起学习讨论

## 相关文档

- [setData 官方文档](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html)
- [setData 官方文档解析](https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips.html)

<div align="right">
  <ShareLink />
</div>
<div align="center">
  <DaShang />
</div>
