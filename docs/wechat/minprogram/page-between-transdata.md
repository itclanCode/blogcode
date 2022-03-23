---
title: 微信小程序-页面间如何进行传递数据(通信)
autoGroup-2: 小程序技术
---

## 微信小程序-页面间如何进行传递数据(通信)

## 快速导航

<TOC />

## 前言

在小程序中组件与组件之间的通信是通过在引用组件处,在自定义组件上添加自定义属性实现的,子组件内部通过`properties`进行接收

更多关于组件与组件之间的通信可参考[小程序实现自定义组件以及自定义组件间的通信](/wechat/minprogram/custom-components)这篇文章

那页面与页面之间又如何传递数据?

您将阅读完本文后,将收获到:

1. 页面间跳转携带参数(通过`url`的方式)传递数据
2. 如何返回上一级页面,并刷新页面呢
3. 使用全局`app`页面定义的变量实现数据的传递
4. 使用本地缓存数据
5. 使用 `eventChannel` 向被打开页面传送数据(`wx.navigateTo`高级用法)

## 页面间通过 `url` 方式传递数据

在小程序中当中,在父页面,通过`url`方式传递参数到子页面,是一种比较常见的做法

如下示例所示:应用场景

1. 点击列表页面,进入详情页
2. 动态改变详情页面的`navBar`中的`title`

<div align="center">
<img class="medium-zoom lazy" width="200" height="200" loading="lazy"  src ="../images/page-between-transdata/jiahaoruisen-min-code.jpg" alt="效果展示" />
<p>点击图片扫码即可体验</p>
</div>

### 父页面实例代码

:::: tabs type:border-card
::: tab wxml lazy

```html
<view>
  <view class="list-wrap">
    <block wx:for="{{listDatas}}" wx:key="index">
      <view bindtap="onListTap" data-list="{{item}}">
        <text>{{ item.list_text}}</text>
      </view>
    </block>
  </view>
</view>
```

:::
::: tab wxss lazy

```css
.list-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 15px;
}

.list-wrap view {
  width: 30%;
  height: 300rpx;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  text-align: center;
  line-height: 300rpx;
  font-size: 28rpx;
}
```

:::
::: tab javaScript lazy

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listDatas: [
      {
        listId: '1',
        list_text: '建钢构混泥房',
        link_phone: '137-0113-4148',
        linker: '王经理',
      },

      {
        listId: '2',
        list_text: '建办公楼房',
        link_phone: '137-0113-4148',
        linker: '陈经理',
      },

      {
        listId: '3',
        list_text: '建冰场钢结构',
        link_phone: '137-0113-4148',
        linker: '张经理',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  onListTap(event) {
    const {
      listId,
      list_text,
      link_phone,
      linker,
    } = event.currentTarget.dataset.list;
    // 1. 传递参数-通过url的方式传递当前页面数据到子页面当中去,在子页面的onload的options中可以拿到
    wx.navigateTo({
      url: `/pages/listDetail/listDetail?id=${listId}&navtitle=${list_text}&phone=${link_phone}&link=${linker}`,
    });
  },
});
```

:::

::::

切换`tab`选项就可以查看对应的代码,在上面示例中,从一个页面跳转到另一个页面是使用`wx.navigateTo()`这个方法,如果想要将该页面的数据传递到子页面中,可以通过`url`拼接参数的方式进行传递,多个参数之间使用`&`符号相连

路径后可以带参数,参数与路径之间使用 `?` 分隔，参数键与参数值用 `=` 相连，不同参数用 `&` 分隔；如`path?key=value&key2=value2`

上面示例代码中使用了`es6`的模板字符串,参数之间,也可以使用`+`拼接,个人觉得使用`+`真的很难受,不舒服,容易出错
:::: tabs type:border-card
::: tab 模板字符串拼参数 lazy

```js
wx.navigateTo({
  url: `/pages/listDetail/listDetail?id=${listId}&navtitle=${list_text}&phone=${link_phone}&link=${linker}`,
});
```

:::
::: tab +号拼接参数 lazy

```js
 wx.navigateTo({
      url: "/pages/listDetail/listDetail?id="+listId+"&navtitle="+list_text+"&phone="+link_phone+"&link="+link_phone+"&link="+linker,
    })
  }
```

:::
::: tab 两者比较 lazy
通过`es6`中的模板字符串,使用反引号,结合模板字符串`${变量}`的方式,要比使用`+`加号拼接参数要好理解得多

在单个参数情况下,或许使用模板字符串与加号没有影响,区别,但是当多个参数时,使用加号做拼接就会令人奔溃,很容易出错

甚至有可能在接收参数时,出现丢失的情况,这或许就是不小心使用加号前后空格或解析参数时,加号被转义导致的,很容易出现 bug
:::
::::

### 子页面实例代码

:::: tabs type:border-card
::: tab wxml lazy

```html
<view>
  <view class="container">
    <view>项目:<text>{{id}}-{{text}}</text></view>
    <view>联系人: {{link}}</view>
    <view>联系电话: {{phoneNumber}}</view>
  </view>
</view>
```

:::
::: tab wxss lazy

```css
.container {
  padding: 20px 0 10px 30px;
}

.container view {
  line-height: 30px;
}
```

:::
::: tab javaScript lazy

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 页面中要渲染的数据,数据初始化
    id: null,
    text: '',
    phoneNumber: '',
    linker: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    const { id, navtitle, phone, link } = options;
    this._setNavTitle(navtitle);
    this._getList(id, navtitle, phone, link);
  },

  // 设置navTitle
  _setNavTitle(navtitle) {
    wx.setNavigationBarTitle({
      title: navtitle,
    });
  },

  _getList(id, navtitle, phone, link) {
    // 改变页面中的数据,setData
    this.setData({
      text: navtitle,
      id,
      phoneNumber: phone,
      link,
    });
  },
});
```

:::
::::

当父页面通过`url`的方式传递数据给子页面时,在子页面中的生命周期`onLoad`函数中的`options`中可以拿到
想要更改什么数据,直接重新`setData`就可以了的

::: warning 注意

1. `url`的方式适合页面间跳转携带参数,多个参数之间使用`&`符号拼接
2. 此方法有一定的局限性,不适宜传入复杂的数据,例如:数组,对象
3. 适合参数比较少的情况

:::

<googleAd-googleInArticleAd />

### url 中有多个参数时传递

在小程序中,向跳转的目标`url`页面传递的参数有时候远不止一个,使用`wx.navigator`进行跳转,支持`/pages/xxx/xxx?param1=${param1}&param2=${param2}&param3=${param3}`的方式,并不支持类似`obj={key1:value1,key2: value2}`对象或者数组`list: [arr1, arr2, arr3 ..]`

**若`url`参数是数组情况**

:::: tabs type:border-card
::: tab 父页面(被跳转页面) lazy

```js
wx.navigateTo({
  url: `/pages/listDetail/listDetail?list=${[
    listId,
    list_text,
    link_phone,
    linker,
  ]}`,
});
```

:::
::: tab 子页面(跳转目标页) lazy

```js
onLoad: function (options) {
    console.log(options);
    const list = options.list.split(','); // 通过split分割成数组
    console.log(list);
  },
```

:::
::: tab 分析 lazy
当被跳转的 url 中的参数是数组时,那么在跳转的目标页面中的`onLoad`生命周期函数的`option`,将得到父页面中的字符串参数

通过`split`方法将字符串分割为数组,然后通过数组下标的方式拿到对应的参数

父页面中

```js
const name = 'itclanCoder';
const sex = 'boy';
wx.navigateTo({
  url: `/pages/listDetail/listDetail?data=${[name, sex]}`,
});
```

子页面中

```js
onLoad: function (options) {
    console.log(options);
    const data = options.data.split(','); // 通过split分割成数组
    console.log(data); // ["itclanCoder", "boy"]
  },
```

:::
::::

**若`url`参数是对象情况**

在`url`参数是对象时,并不会像数组一样,在目标页面中`onLoad`的`options`对象中是一个字符串,而却是一个对象

如下所示

```js
{
  obj: [object, object];
}
```

我们需要借助`JSON.stringify()`对传入的参数对象进行序列化
:::: tabs type:border-card
::: tab 父页面(对象参数序列化) lazy

```js
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${JSON.stringify({
    id: listId,
    text: list_text,
    phone: link_phone,
    link: linker,
  })}`,
});
```

通常,我们把参数对象,定义成一个对象的,简化我们的代码,用一个变量对象临时存储的

```js
const params = {
  // 参数放到外面,让代码更加清晰,可读,可维护性更高
  id: listId,
  text: list_text,
  phone: link_phone,
  link: linker,
};
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${JSON.stringify(params)}`,
});
```

:::
那么在子页面中,需要通过`JSON.parse()`对父页面中传递过来的参数进行反序列化,否则拿到的将是字符串对象,是无法通过对象.的方式访问属性
::: tab 子页面(对象参数反序列化) lazy

```js
onLoad: function (options) {
    console.log(options);
    const obj = JSON.parse(options.obj); // 将字符串对象转化为真正的对象
    console.log(obj); // {id: "1", text: "建钢构混泥房", phone: "137-0113-4148", link: "王经理"}
  },

```

:::

::: tab 分析 lazy
在父页面中若跳转目标的 url 参数是对象的情况下,需要先将参数通过`JSON.stringify()`序列化才可以

```js
const params = {
  // 参数放到外面,让代码更加清晰,可读,可维护性更高
  id: 22,
  name: '川川',
  sex: 'boy',
};
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${JSON.stringify(params)}`,
});
```

那么在子页面(目标页面中)的`onLoad`的`options`中

```js
onLoad: function (options) {
    console.log(options);
    const obj = JSON.parse(options.obj); // 将字符串对象转化为真正的对象
    console.log(obj); // {id: 22, name: "川川",sex: "boy"}
},
```

:::
::::

### 可能会遇到的问题

当传递的对象数据中含有特殊字符串时，在下个页面使用`JSON.parse()`还原为对象时会报错
也就是当`url传参 参数值过长`,在子页面接收时,会出现问题,存在丢失情况

具体解决办法

在上个页面(被跳转页面)将对象转化为字符串后(`JSON.stringify()`),然后使用`encodeURIComponent`进行编码，然后在下个页面先用`decodeURIComponent`进行解码,最终在还原为对象

:::: tab type:border-card
::: tab 父(上个)页面编码 lazy

```js
const params = {
  // 参数放到外面,让代码更加清晰,可读,可维护性更高
  id: 22,
  name: '川川',
  sex: 'boy',
};
const param = encodeURIComponent(JSON.stringify(params)); // 通过encodeURIComponent编码
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${param}`,
});
```

:::
::: tab 子页面解码 lazy

```js
onLoad: function (options) {
    console.log(options);
    const tempObj = decodeURIComponent(options.obj)
    const obj = JSON.parse(tempObj); // 将字符串对象转化为真正的对象
    console.log(obj); // {id: 22, name: "川川",sex: "boy"}
},
```

:::

::::

::: tip 注意

1. 当父页面传递的`url`参数为对象时，在子页面是无法直接获取的，在父页面中,必须先使用`JSON.stringify()`转换为字符串
   然后在下个页面使用`JSON.parse()`还原为对象,这样在子页面中便可以通过对象的方式拿到

2. 当父页面传递的`url`对象数据中含有特殊字符串时，在子页面使用 `JSON.parse()`还原为对象时会报错。需要在上个(父)页面将对象转化为字符串后(`JSON.stringify()`),在使用 `encodeURIComponent` 进行编码，然后在下个(子)页面先用 `decodeURIComponent` 进行解码在还原(`JSON.parse()`)为对象。

:::

## 如何返回上一级页面-并刷新页面

在使用`wx.navigateTo()`API 进行跳转时,在子页面中可以通过`wx.navigateBack()`返回上一级页面的

这个场景在日常开发中,就有不少的

例如:写完微博,发完微博成功后,自动要返回到首页,申请退款时,跳转到申清退款页面等等的

```js
const pages = getCurrentPages(); // 可以获取当前页面栈,上一个页面以及当前页面栈信息
console.log(pages); // 是一个数组，记录了上一个页面与当前页面信息
// 取到上一个页面
const prevPage = pages[pages.length - 2]; // 获取第0个页面,也就是上个页面
console.log(prevPage);
prevPage.onLoad(); // 可以调用上一页面的方法
prevPage.setData({
  name: 'itclanCoder',
});
```

这个方法非常厉害,而且很有用,当你通过`wx.navigateTo()`,一层一层跳转到子页面时,使用`getCurrentPages`方法就可以找到上级,上上级的页面栈信息

它是通过获取到其他页面的原型对象,然后通过小程序原型下的`setData`方法,对当前对象管理的数据`data`进行修改

这个方法`getCurrentPage`方法可以操作页面堆栈页面的数据和方法,可以做到对子(后一)页面对父(上一)页面的数据管理

::: warning 提示

`getCurrentPages()`用于获取当前页面栈,数组中第一个元素为首页，最后一个元素为当前页面

1. 不要尝试修改页面栈，会导致路由以及页面状态错误(不要依赖这个方法)
2. 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成

:::

## 使用全局`app`页面定义的变量实现数据的传递

在小程序当中,当有多个页面用到一些公共变量对象参数时,例如:小程序的`openId`,一些公用的状态,可以放到全局`app`中

:::: tabs type:border-card
::: tab 全局页面 app.js lazy

```js
//app.js
App({
  onLaunch: function() {
    // 定义的全局变量,如token,某些状态等,放在globalData下
    this.globalData = {
      token: 'token',
      url: 'http://coder.itclan.cn/',
      userInfo: 'itclanCoder',
    };
  },
});
```

:::

::: tab 使用页面 javaScript lazy

```js
const app = getApp(); // 在另一页面想要使用全局变量处,调用getApp()
Page({
  // 页面初始化的数据
  data: {
    token: '',
    url: '',
    userInfo: '',
  },
  // 生命周期函数
  onLoad: function(options) {},

  onGetGlobal() {
    // 获取全局变量
    const { token, url, userInfo } = app.globalData;
    console.log(token, url, userInfo);
    this.setData({
      token,
      url,
      userInfo,
    });
  },
});
```

:::

::: tab wxml lazy

```html
<view>
  <view class="globalData">
    <view class="getGloablBtn btn" bindtap="onGetGlobal">获取全局变量</view>
    <view class="changeGloablBtn btn" bindtap="onChangeGlobal"
      >修改全局变量</view
    >
  </view>
  <view>{{token}}</view>
  <view>{{url}}</view>
  <view>{{userInfo}}</view>
</view>
```

:::

::: tab wxss lazy

```css
.globalData {
  display: flex;
  justify-content: start;
  margin: 15px 0 0 0;
}

.getGloablBtn {
  background: rgb(89, 196, 119);
  margin-right: 15px;
}

.changeGloablBtn {
  background: rgb(160, 10, 7);
}

.btn {
  width: 120px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
```

:::

::: tab 分析 lazy

全局定义的变量,一些状态,可以挂载在全局页面 `app.js` 的`globalData`中,在使用全局变量页面处

1. 需要调用`getApp()`函数
2. 通过`getApp().globalData.a`可以拿到全局对象下定义的变量对象
3. 若要修改全局变量对象直接赋值即可`getApp().globalData.a = "bb"`;

:::
::::

### 全局定义变量注意事项

1. `App()`必须在`app.js`中注册,且不能注册多个
2. 不要在定义`App()`内的函数调用`getApp()`,使用`this`就可以拿到`App`下的实例
3. 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成
4. 通过`getApp()`获取到全局页面的实例后,就不要私自调用生命周期函数了的

<!-- <googleAd-googleMediumAd /> -->

## 使用本地缓存

在微信小程序都可以有自己的本地缓存

- `wx.setStorageSync`:同步设置本地存储某个指定的`key`数据
- `wx.setStorage`: 异步设置本地所有存储某个`key`数据
- `wx.getStorage`: 异步获取本地所有存储数据
- `wx.getStorageSync`:同步获取本地存储某个指定`key`的数据
- `wx.clearStorage`:一次性清除所有本地存储(缓存)数据,不需要参数
- `wx.clearStorageSync`:一次性清除同步所有本地存储,不需要参数
- `wx.removeStorage`:从本地缓存中异步移除指定 `key`,需要指定某个`key`
- `wx.removeStorageSync`:从本地存储中同步移除指定的`key`，需要指定某个`key`

上面的方法可以对本地缓存进行读写和清理的操作,读与写都是一一对应的

使用本地缓存,可以作为页面间数据传递,但是仍然需要注意一些实用情况,如下所示

:::: tabs type:border-card
::: tab 隔离策略 lazy
同一个微信用户，同一个小程序 `storage`上限为 `10MB`,一般可以作为缓存临时一些小的数据,比如用户登录信息之类的

`storage` 以用户维度隔离，同一台设备上，A 用户无法读取到 B 用户的数据；不同小程序之间也无法互相读写数据
:::
::: tab 存储大小限制 lazy
除非用户主动删除或因存储空间原因被系统清理，否则数据都一直可用。单个 `key` 允许存储的最大数据长度为 1MB，所有数据存储上限为 `10MB`
:::

::: tab 插件隔离限制 lazy

1. 同一小程序使用不同插件：不同插件之间，插件与小程序之间 `storage` 不互通。
2. 不同小程序使用同一插件：同一插件`storage`不互通
3. `storage`只是针对当前用户,不同用户,使用不同的插件,他们之间`storage`是无法实现数据共用的
   :::

::: tab 清理策略 lazy
本地缓存的清理时机跟代码包一样，只有在代码包被清理的时候本地缓存才会被清理
:::
::::

::: warning 注意事项
将数据存储在本地缓存中指定的 key 中。会覆盖掉原来该 key 对应的内容

也就是说,如果是相同的`key`，后面的会覆盖掉原来该 `key` 对应的内容
:::

### 设置/获取/删除存储

使用的是`wx.setStorageSync()`,`wx.getStorageSync`方法
:::: tabs type:border-card
::: tab 如何设置本地存储数据

```js
wx.setStorage({
  key: 'key',
  data: 'value',
});
```

或如下简写方式

```js
wx.setStorageSync('key', 'value');
```

:::
::: tab 如何获取本地存储数据

```js
wx.getStorageSync({
  key: 'key',
  success(res) {
    console.log(res.data);
  },
});
```

或如下简写

```js
var value = wx.getStorageSync('key');
```

:::
::: tab 如何删除本地存储数据
清除小程序当中的本地存储分为一次性全部删除所有存储,与删除存储中某指定的存储`key`

```js
wx.clearStorage(); // 一次性删除小程序中的所有存储数据
```

删除存储中某指定的存储`key`,一定要注意这两者的区别,有的小伙伴只知道`wx.clearStorage()`

```js
wx.removeStorageSync('key'); // 删除小程序中指定的key的存储
```

同样等价于

```js
wx.removeStorageSync({
  key: 'key',
  success(res) {
    console.log(res);
  },
});
```

注意:`wx.removeStorageSync`方法,不同于`wx.clearStorageSync()`方法,它同样也是删除小程序中所有同步存储的数据,
前者需要指定删除存储对应的`key`值,而后者不需要指定`key`,它是一次性删除所有同步存储的代码

```js
wx.clearStorageSync(); // 一次性删除小程序中所有同步存储的数据
```

:::

::::

关于小程序中本地存储的方法确实容易让人晕,搞混淆,理解它们的区别,还是要在开发者工具中,自行调试,才知道每个方法之间区别差异的

**光看文字,不动手写代码测试,是无法理解他们之间的差异的,很容易搞混,在使用时容易乱套**

::: tip 提示
凡是带`sync`结尾的都是同步的,而凡是带`clear`开头的都是一次性清除同步/异步的存储,而带·`remove`开头的都是需要指定删除某个存储的`key`
:::

### 解决相同 key 覆盖问题

在小程序中,当出现同名`key`,后者`key`覆盖前者是一个让人头疼的问题

**具体解决**

可以将需要存储数据存到一个数组当中,当需要使用时,取最后一个即可

至于若有增删操作,每次删除完某一数据后,重新在设置一次本地存储即可

```js
let lists = wx.getStorageSync('lists'); // 先获取lists本地存储的数据
if (!lists) {
  // 第一次判断缓存中有没有lists数据
  lists = []; // 若没有,则存储设置一个空数组
}
lists.push(data); // 这里的data是要存储到本地中的数据
wx.setStorageSync('lists', lists); // 设置本地存储key:val
```

通过上面的操作,就解决了存储 key 值覆盖的问题,那么如何取最新的呢

```js
const storageList = wx.getStorageSync('lists');
const listData = storageList[storageList.length - 1]; // 获取到最后一个
this.setData({
  // 重新setData数据即可
  lists: listData,
});
```

### 是使用同步存储还是异步存储

带有`Sync`,这个表示的**同步**的操作,与之相对的不带后缀就是**异步**”。

同步与异步是指的消息通讯机制。就是信息传来传去的时候是同步还异步。重点强调的是通讯这个动作。

很容易混淆,在计算机里,他们两是对立,相反的，同步代码是顺序执行,会形成阻塞,而异步代码不会阻塞,它是等待主线程执行完后,可以在回过头来执行

比如要请求用户信息的时候，需要从缓存中获取`username`这个变量，那只有先获取到这个变量才能进行下一步。那就应该使用同步,使用`wx.getStorageSync`。这样能确保一定能获取到这个变量,所有在第一次获取缓存中的数据时

我们往往先要判断一下缓存中是否有我们想要的那一数据的,否则若没有,在代码中使用了,就会报错

打电话就是一个同步的例子,必须先打完上一个,然后才能在打下一个,而发短信就是一个异步的例子,你可以跟 A 同学发,发完后不用等待,也可以更 B 同学发

在相同的时间内,使用同步只能干一件事情,必须得一件,一件的干完,而异步则在同一段时间内,可以同时干多件事情

`JavaScript` 是单线程的,但是浏览器是多线程的.它的异步是借助事件实现的.具体可自行查看多线程与单线程相关知识的

## 使用`eventChannel`向被打开页面传送数据(`wx.navigateTo`高级用法)

对于页面与页面之间的数据通信,一种方式是,可以通过`url`携带参数的方式跳转到指定的页面,在跳转的指定页面中的`onLoad`生命周期函数中的`options`中可以拿到数据

但是这种传递数据的方式是有限的,不适合数据多的情况下

另一种方式是可以传递数据没有限制,`wx.navigateTo`提供了一种更加高级的用法,通过`eventChannel`向被打开页面传送数据

### 父(当前)页面向子(目标)页面传递数据

@flowstart
process=>operation: 父(当前)页面
e=>end: 跳转(目标)页面
process->e
@flowend
:::: tabs type:border-card
::: tab 被打开(上/父级)页面 lazy

```js
Page({
  data: {
    parentPageData: {
      name: '川川',
      url: 'http://coder.itclan.cn',
      vx: 'itclanCoder',
    },
  },

  onEventChannel() {
    const parentPageData = this.data.parentPageData; // 当前页面的数据
    wx.navigateTo({
      url: `/pages/listDetail/listDetail`, // 打开的目标页面
      success: (res) => {
        // 通过eventChannel向被打开页面传送数据,目标页面是listDetail,这个data名字是你自己取的任意,在目标页面中有个参数接收就可以
        res.eventChannel.emit('parentPageEmit', { data: parentPageData });
      },
    });
  },
});
```

被打开(上/父级)页面的`wxml`,绑定事件

```html
<view bindtap="onEventChannel">打开跳转到目标页面</view>
```

:::

::: tab 打开(目标)页面 lazy
在目标打开页面中通过`getOpenerEventChange`方法,用`on`进行监听被跳转页面的方法,就可以拿到被跳转页面中通过`emit`方法传递过来的数据,其中使用`on`监听的方法名与被跳转页面的名字保持一致就可以,这样实现了两个不同页面之间的数据通信传递

```js
Page({
  data: {
    acceptParentData: {},
  },

  onLoad: function(options) {
    // 通过getOpenerEventChannel对象,对`parentPageEmit`进行监听
    const eventChannel = this.getOpenerEventChannel();
    eventChannel.on('parentPageEmit', (data) => {
      console.log(data);
      this.setData({
        acceptParentData: data,
      });
    });
  },
});
```

:::
::: tab 说明 lazy
将某整个父页面的数据传递给跳转到的子页面,是一个比较常见的需求操作

比如在商品详情页面中,跳到到下单页面,需要将详情页面的一些数据

传递给跳转的子页面,那么这个时候,用`url`的方式传递数据就不时很合适,选用`eventChannel`的方式就比价适合

在`wx.navigateTo`的成功`success`回调中,通过`emit`进行触发,`emit`接收两个参数,第一个是监听事件的名称,第二个参数是需要向目标页面传递的数据

```js
res.eventChannel.emit(`监听的事件名称parentPageEmit`, { data: '数据' });
```

在跳转的目标页面中,通过调用`getOpenerEventChannel`方法,然后进行`on`的绑定

```js
const eventChannel = this.getOpenerEventChannel();
eventChannel.on('监听的事件名称parentPageEmit', (data) => {
  console.log(data);
  this.setData({
    acceptParentData: data,
  });
});
```

:::
::::

当前页面`-->`目标页面是利用`wx.navigateTo` 中的 `success` 回调中使用 `emit` 触发,目标跳转页面用 `on` 监听

实现将当前页面的数据传递给目标页面中

那当前页面又如何获取目标页面的数据呢

### 父(当前)页面如何获取跳转(子/目标)页面中的数据

@flowstart
process=>operation: 父(当前)页面
e=>end: 获取跳转(目标)页面数据
process->e
@flowend

知道了当前页面向目标跳转页面传递数据,那么反过来,当前页面又如何接收跳转页面传递过来的数据?
:::: tabs type:border-card
::: tab 当前页面 lazy

```js
Page({
  data: {
    parentPageData: {
      name: '川川',
      url: 'http://coder.itclan.cn',
      vx: 'itclanCoder',
    },
    subdetailData: {},
  },

  onEventChannel() {
    const parentPageData = this.data.parentPageData; // 当前页面的数据
    wx.navigateTo({
      url: `/pages/listDetail/listDetail`, // 打开的目标页面
      events: {
        // 页面间通信接口，用于监听被打开页面发送到当前页面的数据
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        subPageEmit: (data) => {
          console.log(data);
          this.setData({
            subdetailData: data,
          });
        },
      },
    });
  },
});
```

:::
::: tab wxml lazy

```html
<view class="subdetail-box">
  <block wx:for="{{subdetailData}}" wx:key="index">
    <view>姓名:{{item.name}}</view>
    <view>站点:{{item.url}}</view>
    <view>微信:{{item.vx}}</view>
  </block>
</view>
```

:::
::: tab 子页面目标页面 lazy

```js
Page({
  data: {
    subdetailData: {
      name: '轻记账小程序-我是子页面传递过来的数据',
      url: 'http://itclan.cn/',
      vx: 'itclanCoder',
    },
  },

  onLoad: function(options) {
    this.returnSubPagePrev();
  },

  returnSubPagePrev() {
    const subdetailData = this.data.subdetailData;
    const eventChannel = this.getOpenerEventChannel();
    // 通过emit的方式进行触发,将子页面/目标页面中的数据传递给当前页面
    eventChannel.emit('subPageEmit', { data: subdetailData });
  },
});
```

:::
::: tab 说明 lazy
在当前页面中获取子页面的数据,是借助`wx.navigateTo`中提供的`event`这个参数接口,它可以用于监听被打开页面发送到当前页面的数据

换言之,也就是当前页面可以获取监听到子页面传递过来的数据,在子页面中通过`emit`的方式进行触发,同样,`emit`方法接收两个参数

第一个是监听的事件名称,第二个参数对象是具体要传递的数据
:::
::::

## 结语

本文主要介绍 4 种在小程序当中页面与页面之间的传递数据常见方法,其中如何返回上一级页面,这些都是实际开发中经常会遇到的问题

每一种方法都有与之对应的应用场景,`url` 方式比较适合跳转,携带少量的数据,当多个页面需要共享同一个数据对象时,可以使用全局`globalData`对象,也可以使用本地缓存数据

以及最后一种使用 `eventChannel` 向被打开页面传送数据(`wx.navigateTo`高级用法)

它适合一种传递复杂的数据.

关于页面之间数据传递就介绍这么多,如果您有问题,欢迎补充,给我留言,一起学习成长

## 相关文档

- [wx.navigateTo 跳转](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html)
- [小程序-页面路由](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)
- [小程序-页面间通信](https://developers.weixin.qq.com/miniprogram/dev/api/route/EventChannel.html)
- [小程序-本地存储](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorage.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>

<!-- <googleAd-googleBottomAd /> -->

<footer-FeedBack />