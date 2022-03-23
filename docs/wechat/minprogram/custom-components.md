---
title: 小程序实现自定义组件以及自定义组件间的通信
autoGroup-2: 小程序技术
---

## 小程序实现自定义组件以及自定义组件间的通信

## 快速导航

<TOC />

## 前言

对于组件的封装,在小程序当中对于多个页面的复用有着重要的作用,小程序中注册的每个页面都是独立的

页面的显示`view`层与逻辑层是通过`data`进行绑定关联,若需要更改页面中的数据,则通过`setData`的方式进行修改

那么在小程序中如何自定义组件,以及自定义组件之间是如何进行通信呢

## 实例效果

<form-inputNumber />

通过上面一个简单的数字加减输入框组件,阅读完本文后,您将收获到

⒈ 在小程序中如何自定义组件

⒉ 在小程序页面中如何使用自定义组件

⒊ 父(外部)组件如何向子组件传值

⒋ 子组件如何接受父组件传递过来的值,同时渲染组件

⒌ 子组件内如何进行事件交互,如何向父组件传递数据,影响父组件定义的数据

⒍ 另一种方法父组件获取子组件的数据(非`triggerEvent`方式,即`selectComponent`)

⒎ 达到某些条件时,如何禁止`view`的`bindtap`事件

⒏ 数字加减输入框代码的优化

## 为什么要自定义组件?

每个小程序页面都可以看成一个自定义组件,当多个页面出现重复的结构时,可以把相同的部分给抽取出来封装成一个公共的组件,不同的部分,在页面中通过传参的方式传入组件,渲染出来即可,达到复用的目的

下面以一个简单的数字加减输入框组件为例,麻雀虽小,但五脏俱全。

## 怎么使用自定义组件?

在`miniprogram`下的目录下创建一个`components`文件夹,与`pages`目录同级,这个文件夹专门是用来放自定义组件的

例如:在`components`目录下创建了一个`count`文件夹,然后在新建`Component`,组件名称命名为`count`,微信开发者工具会自动的创建`count`组件

自定义组件如下代码所示:

:::: el-tabs
::: el-tab-pane label=wxml

```html
<view>
  <view class="count-container">
    <view bindtap="reduce" class="{{count == 1? 'btn-disabled': ''}}">-</view>
    <input bindinput="handleInput" type="number" value="{{count}}" />
    <view bindtap="add">+</view>
  </view>
</view>
```

:::
::: el-tab-pane label=wxss

```css
/* components/count/count.wxss */
.count-container {
  width: 200rpx;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 30px auto;
}

.count-container view {
  width: 30px;
  text-align: center;
}

.count-container view:nth-child(1) {
  border-right: 1px solid #ccc;
}
.count-container view:nth-child(3) {
  border-left: 1px solid #ccc;
}

.count-container input {
  flex: 1;
  text-align: center;
}

.btn-disabled {
  background: #eee;
  pointer-events: none; /*微信小程序view禁掉bindtap事件,阻止点击,它是css3的一个属性，指定在什么情况下元素可以成为鼠标事件的target（包括鼠标的样式）*/
}
```

:::
::: el-tab-pane label=javaScript

```javascript
// components/count/count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    reduce() {
      console.log('减');
      var count = this.data.count - 1;
      if (count < 1) {
        count = 1;
      }
      this.setData({
        count,
      });
      this.triggerEvent('changeCount', count);
      console.log(this.data.count);
    },

    add() {
      console.log('加');
      var count = this.data.count + 1;
      this.setData({
        count,
      });
      this.triggerEvent('changeCount', count);
      console.log(this.data.count);
    },

    handleInput(event) {
      console.log(event);
      this.setData({
        count: event.detail.value,
      });
      this.triggerEvent('changeCount', event.detail.value);
    },
  },
});
```

:::
::::

自定义组件定义好了,那么如何使用呢

在`pages`目录下,这里我创建了一个`customComponents`页面

在要使用页面对应的`customComponents.json`中的`usingComponents`自定义组件的名称,同时引入组件的路径

```js
{
  "usingComponents": {
    "count":"/components/count/count"
  }
}
```

::: tip 注意

引入组件:使用相对路径地止也是可以的,如上面引入根路径`/`也可以,自定义组件名称区分大小写,为了代码的可读性,建议统一小写,多个字母之间用`-`连字符，例如:`count-number`

前面是自定义组件的名称,后面是声明创建该组件的路径

```js
  "usingComponents": {
    "count":"../../components/count/count"
  }
```

:::
那么在对应页面(这里是`customComponents`),的父组件(外部)`wxml`中直接调用组件,以`标签`形式插入就可以了的

你可以将自定义组件看作为自定义的标签,对原生`wxml`中的`view`的一种拓展,在自定义组件上可以添加自定义属性,绑定自定义事件.

父组件`customComponents`-页面的示例代码如下所示

:::: el-tabs
::: el-tab-pane label=wxml

```html
<count count="{{countNum}}" bind:changeCount="handleCount"></count>
<view class="parentText">父组件count:{{countNum}}</view>
```

:::
::: el-tab-pane label=wxss

```css
.parentText {
  text-align: center;
}
```

:::
::: el-tab-pane label=json

```js
// 页面配置文件
{
  "usingComponents": {
    "count":"../../components/count/count"
  }
}

```

:::
::: el-tab-pane label=javaScript

```js
// pages/customComponents/customComponents.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    countNum: 1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 父组件中自定义绑定的事件
  handleCount(event) {
    this.setData({
      countNum: event.detail,
    });
  },
});
```

:::

::::

在微信小程序中,使用组件就是这么简单,想要在哪个页面使用,就在哪个页面的`xxx.json`中声明组件,就可以了的

上面的代码也许看得有点懵逼,下面将逐步拆解的.

## 小程序中组件的通信与事件

在小程序中,组件间的基本通信方式有以下几种

- **`wxml`数据绑定**:用于父组件向子组件指定属性设置数据(以后会单独做一小节的,本篇不涉及)

- **事件**: 用于子组件向父组件传递数据,可以传递任意数据(监听事件是组件通信的主要方式之一,自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件,监听自定义组件事件的方法与监听基础组件事件的方法完全一致)

- **this.selectComponent**:如果上面两种方式都无法满足,在父组件中还可以通过`this.selectComponent("类名或ID")`方法获取子组件的实例对象,这样在父组件中不必通过`event.detail`的方式获取,可以直接访问子组件任意的数据和方法(后面也会提到)

## 如何向自定义组件内传递数据？

在页面`customComponents`的`wxml`中,以标签的方式,引用`count`组件

这个页面,可以视作为父组件,父组件中可以定义当前组件的数据,方法等,如下所示

```html
<count count="{{countNum}}" bind:changeCount="handleCount"></count>
```

定义在父组件中的数据,也可以视作为外部数据,例如:上面的`countNum`就是挂载在`customComponents`中的`data`下的,初始值`countNum`等于 1

**父(外部)组件向子(内)组件传递数据是通过在子组件上自定义属性的方式实现的,自定义属性可以是基本数据类型(数字`Number`,字符串`String`,布尔(`Boolean`)等)与复杂数据类型(对象`Object`,数组`Array`)**

如本示例中的,`count`组件上定义了`count`属性,这个名字并不是固定的,和自定义了`changeCount`方法

也就是,将`countNum`变量对象赋值给`count`属性,给`count`组件自定义了`changeCount`方法
::: tip 注意
`handleCount`方法是定义在父组件当中的

```js
// 父组件中自定义绑定的事件
  handleCount(event){
    this.setData({
      countNum: event.detail  // 通过event.detail可以拿到子组件传过来的值,如果不重新设置countNum,父组件的countNum是不会更新同步的
    })
  }
```

:::

## 子组件内如何接收父组件传递过来的值?

在子组件内,`Component`构造器可以用于定义组件,调用`Component`构造器时,可以指定组件的属性,数据,方法等

其中`properties`对象接收外部(父)组件传过来的自定义属性数据,可以是对象,数组,基本数据类型等

而`data`是定义当前组件内的私有变量数据,可用于组件模板的渲染

::: warning 温馨提示
至于变量数据对象是定义在 properties 下还是挂载在 data 下,具体要看组件的使用

凡是外部传递过来的数据,那么就放置在`properties`中,而若是当前(内部)的组件模板渲染,那么就挂载在`data`下

而这个`data`下面挂载的数据,又分为普通数据字段,和纯数据字段,其中后者纯数据字段变量用`_`开头

这些指定的纯数据字段需要在`Component`构造器的`options`对象中指定`pureDataPattern`的一个正则表达式,字段名符合这个正则表达式的字段将成为纯数据字段

在小程序组件中,某些情况下,一些`data`中的字段,也包括`setData`中设置的字段,有些只参与业务逻辑,不会展示在界面上,也不会传递给其他组件,仅仅在当前组件内部使用

这样的数据字段被称为`纯数据字段`,它可以定义在全局作用域中,也可以定义在`data`下,若定义在`data`下,它会被记录在`this.data`中,而不会参与任何界面的渲染过程

如下所示

```js
Component({
  options: {
    pureDataPattern: /^_/, // 指定所有 _ 开头的数据字段为纯数据字段
  },
  data: {
    a: true, // 普通数据字段
    _b: true, // 纯数据字段
  },
  methods: {
    myMethod() {
      this.data._b; // 纯数据字段可以在 this.data 中获取
      this.setData({
        c: true, // 普通数据字段
        _d: true, // 纯数据字段
      });
    },
  },
});
```

上面的组件中的纯数据字段不会被应用到`wxml`中

```html
<view wx:if="{{a}}"> 这行会被展示 </view>
<view wx:if="{{_b}}"> 这行不会被展示 </view>
```

:::
在`properties`对象中接收外部组件传递过来的数据

```js
// components/count/count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number, // 在这里接收外部组件传递过来的属性,同时确定传递过来数据的类型,类型有String,Boolean,Object,Array等
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});
```

那么在内部组件中如何渲染呢,直接将`properties`下的变量对象与`wxml`中通过`{{}}`插值表达式进行绑定关联就可以了的
如下所示`input`中的`count`

```html
<view>
  <view class="count-container">
    <view>-</view>
    <input type="number" value="{{count}}" />
    <view>+</view>
  </view>
</view>
```

以上就完成了子组件接收父组件外部传过来的值,然后在组件中渲染的过程

那么想要操作当前组件的数据,对加减输入框进行动态操作,在组件元素上绑定相应的事件操作就可以了的

```html
<view>
  <view class="count-container">
    <view bindtap="reduce" class="{{count == 1? 'btn-disabled': ''}}}">-</view>
    <input bindinput="handleInput" type="number" value="{{count}}" />
    <view bindtap="add">+</view>
  </view>
</view>
```

在`+`,`-`上添加了`bindtap`方法,进行业务逻辑的处理,如下所示
::: details 点击即可查看加减操作逻辑

```js
// components/count/count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 减操作
    reduce() {
      console.log('减');
      var count = this.data.count - 1;
      if (count < 1) {
        count = 1;
      }
      this.setData({
        count,
      });
    },
    // 加操作
    add() {
      console.log('加');
      var count = this.data.count + 1;
      this.setData({
        count,
      });
    },

    // 监听表单输入
    handleInput(event) {
      console.log(event);
      this.setData({
        count: event.detail.value,
      });
    },
  },
});
```

:::

## 子组件如何向父组件传递数据,影响父组件定义的数据

小程序,组件与组件之间是相互隔离,独立的,通过上面的一顿操作,数字框架的加减确实已经实现了的,但是若在外部组件中,想要获取拿到子组件中的数据,如果不通过某些手段,子组件中的数据是影响不到父组件的

因为小程序当中数据的传递是单向的,也就是父组件传递数据给子组件,是通过在组件上添加自定义属性实现的,而在子组件内部的`properties`中接收自定义组件的属性

如果你接触过`vue`,与`react`等框架,你会发现有惊人的相似之处,`vue`中是`props`接收,而`react`是`this.props`接收

小程序正是借鉴了它们的思想.

那父组件想要拿到子组件中的数据,换而言之,子组件又如何向父组件传递数据呢?影响到父组件中定义的初始化数据呢,该怎么办呢

**父组件想要拿到子组件的数据,通过在组件上绑定自定义监听事件**

**监听事件**

- 事件是视图层到逻辑层的通讯方式
- 可以将用户的行为反馈到逻辑层进行处理
- 可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数
- 事件对象可以携带额外信息，如 `id`, `dataset`, `touches`

事件系统是组件间通信的主要方式之一。自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件,监听自定义组件事件的方法与监听基础组件事件的方法完全一致

如下所示

```html
<!-- 当自定义组件触发“myevent”事件时，调用“onMyEvent”方法 -->
<component-tag-name bindmyevent="onMyEvent" />
<!-- 或者可以写成 -->
<component-tag-name bind:myevent="onMyEvent" />
```

在本文示例中如下所示,`bind:changeCount="handleCount"`,就是绑定了自定义`changeCount`事件,这句话的含义,相当于是
在`count`组件上监听绑定了一个`changeCount`事件,当触发`changeCount`事件时,就会调用后面父组件中定义的`handleCount`方法

```html
<count
  class="count"
  count="{{countNum}}"
  bind:changeCount="handleCount"
></count>
```

而在父组件中,声明`handleCount`方法,可以通过`event`事件对象拿到子组件中的数据

```js
Page({
  handleCount: function(event) {
    event.detail; // 自定义组件触发事件时提供的detail对象
  },
});
```

既然在父组件中通过监听自定义事件,那么在子组件内部如何触发该事件呢

**触发事件**

自定义组件触发事件时，需要使用 `triggerEvent` 方法，指定`事件名`、`detail对象`和`事件选项`

如下所示

```js
Component({
  properties: {},
  methods: {
    onTap: function() {
      var myEventDetail = {}; // detail对象，提供给事件监听函数
      var myEventOption = {}; // 触发事件的选项
      this.triggerEvent('自定义事件名称myEvent', myEventDetail, myEventOption);
    },
  },
});
```

在本示例中:
::: details 点击即可查看 triggerEvent 事件方法

```js
// components/count/count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    // 减
    reduce() {
      console.log('减');
      var count = this.data.count - 1;
      if (count < 1) {
        count = 1;
      }
      this.setData({
        count,
      });
      this.triggerEvent('changeCount', count);
    },
    // 加
    add() {
      console.log('加');
      var count = this.data.count + 1;
      this.setData({
        count,
      });
      this.triggerEvent('changeCount', count);
    },
    // 监听输入框
    handleInput(event) {
      console.log(event);
      this.setData({
        count: event.detail.value,
      });
      this.triggerEvent('changeCount', event.detail.value);
    },
  },
});
```

:::
至于为什么有三次`triggerEvent`,每次加,减都是子组件内部的操作,外部组件想要实时获取到,那么就需要触发父组件监听的自定义方法的,同时`triggerEvent`方法的第二个参数代表的就是当前子组件的内部所要传递给父组件的数据

当子组件触发了`changeCount`方法,会调用父组件的`handleCount`方法,在父组件中进行重新`setData`父组件中的初始化数据,就可以更新同步到页面上了的

这个过程虽然有些绕,曲折,对于初学者,需要自行感悟,理一下的

这个`triggerEvent`,就相当于`vue`中的`this.$emit('绑定在父组件自定义事件名称',携带的数据)`方法的,而在`React`中是通过`this.props.方法`接收,调用父组件的方法

::: tip 注意
在父组件中监听的自定义方法(如上示例的`changeCount`),是通过`triggerEvent`进行触发的,是放置在子组件内部要监听的方法内的,而不是定义在`methods`方法中

```js
changeCount() { // 这是错误的写法,有些小伙伴误以为自定义方法,就必须要写成方法这种形式的,它只是一个名称而已

}
```

:::
通过以上的代码示例,文字介绍,就知道子组件如何向父组件传递数据,影响父组件定义的数据

子组件想要传递数据给父组件,影响父组件初始化定义的数据

- 首先需要在父组件上的自定义组件上设置监听自定义方法
- 在子组件内部的事件方法中,通过`triggerEvent`触发父组件中的自定义事件名称,同时,`triggerEvent`第二个参数为携带所需的数据
- 在父组件中定义的方法,即可通过事件对象`event.detail`的方式获取到子组件中传递过来的值
- 在父组件中,重新`setData`数据即可更新父组件中初始化的数据,从而渲染到页面上

以上是通过`triggerEvent`的方式,并携带参数传递给自定义事件,从而在父组件中可以通过`event.detail`的方式拿到子组件中的数据

其实,还有另外一种简便的方法,同样可以拿到

## 父组件通过`this.selectComponent`拿到子组件中的数据

### 前提条件

需要在父组件的引用自定义组件上,添加`class`或`id`

例如:在`count`组件上添加了一个`class`类`count`

```html
<count
  class="count"
  count="{{countNum}}"
  bind:changeCount="handleCount"
></count>
```

那么,在父组件中的`handleCount`中里调用 `this.selectComponent`，获取子组件的实例数据

调用时需要传入一个匹配选择器 `selector`，`class`与`Id`都可以,如,`this.selectComponent('类或ID')`

本示例中是`this.selectComponent('.count')`,如下示例代码所示

```js
 handleCount(){
    console.log(this.selectComponent('.count'));
    var count = this.selectComponent('.count');
    this.setData({
      countNum: count.data.count  // 重新赋值setData countNum数据
    })

  }
```

这种方法也是可以的,在小程序当中也很常用

## 如何禁止掉`view`的`bindtap`事件？

在做数字加减输入框时,对于减到某个数值时,想要禁用状态,遇到类似的情况时,要么把`view`换成`button`

然后当达到某个条件时,将`button`的状态设置为`disabled`属性也是可以的

但是若不用`button`呢,该怎么实现呢

如果用`view`代替`button`,虽然在某个条件下,可以达到样式上是禁用状态,但是如果你在测试时,这个`减`操作仍然是在不断触发的

这样显然有些鸡肋

解决这个问题: 借助了 css3 中的一个非常好用的特性
在指定的类上添加一个`pointer-events: none`就可以了的

```css
.btn-disabled {
  pointer-events: none; /*微信小程序view禁掉bindtap事件,阻止点击,它是css3的一个属性，指定在什么情况下元素可以成为鼠标事件的target（包括鼠标的样式）*/
}
```

这个属性,作用在`view`上,可以组织`bindtap`的点击

## 数字加减输入框代码的优化

在上面实现数字加减框组件,分别给`减`,`加`绑定了两个方法,多次出现了`triggerEvent`

```html
<view>
  <view class="count-container">
    <view
      bindtap="handleCount"
      data-count="-1"
      class="{{count == 1? 'btn-disabled': ''}}}"
      >-</view
    >
    <input bindinput="handleInput" type="number" value="{{count}}" />
    <view bindtap="handleCount" data-count="1">+</view>
  </view>
</view>
```

在上面的加减中绑定一个相同的事件方法`handleCount`,而通过设置`data-xx`属性,判断是加还是减
那么在逻辑代码中

```js
methods: {
  handleCount(event){
      var count = event.currentTarget.dataset.count;
      count  = this.data.count+Number(count);  // 这里之所以要把count,转换为Number,因为自定义属性的count是字符串,+加号字符串拼接,会变成一个字符串
      if(count < 1) {
        count = 1;
      }
      this.setData({
        count: count
      })
      this.triggerEvent('changeCount', count);
    },
}
```

上面的代码相比于前面写的代码,就要简便得不少,看着舒服得多

在做这种类似的业务逻辑时,不妨可以通过这种方式对代码进行优化的

## 结语

本文主要是讲到了在小程序中父子组件之间如何进行通信,父组件向子组件传递数据是通过在引用组件上绑定自定义属性实现的

而子组件是通过在`properities`对象中进行接收的,子组件如何向父组件传递数据,它是通过在引用组件上绑定监听自定义事件,然后在子组件的事件方法内,通过`this.triggerEvent`方法进行触发自定义事件名,并可以携带子组件内的数据,在父组件中的函数中

可以通过`event.detail`可以拿到子组件中传递给父组件的值,从而重新在`setData`数据,就可以更新父组件中的初始化数据

这个关系虽然有点绕,至于重要性不言而喻.如果您有任何疑问,关注微信`itlanCoder`公众号,在文章下方留言,一起学习谈论,欢迎添加微信`suibichuanji`进行咨询.

## 相关链接

- [组件间通信与事件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html)
- [小程序中的事件](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)

## 视频学习

- [1-小程序-自定义组件-加减数字输入框布局(上)](https://www.zhihu.com/zvideo/1306322188631429120)
- [2-小程序-自定义组件-父组件向子组件传递数据(中)](https://www.zhihu.com/zvideo/1306323034652504064)
- [3-小程序-自定义组件-子组件如何向父组件传递数据(下)](https://www.zhihu.com/zvideo/1306323294304628736)
- [4-小程序-自定义组件-父组件获取子组件数据的第 2 中方式(结尾)](https://www.zhihu.com/zvideo/1306323618129874944)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
<footer-FeedBack />