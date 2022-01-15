---
title: vue基础面试题1
autoGroup-1: vue基础面试题
---

## vue 基础面试题

<TOC />

## 第 1 题-为什么 vue 组件中的 data 是函数而不是对象

```js
export default {
  data() {
    // data是一个函数,data: function() {}的简写
    return {
      // 页面要初始化的数据
      name: 'itclanCoder',
    };
  },
};
```

而非:如下所示

```js
export default {
  data: {
    // data是一个对象
    name: 'itclanCoder',
  },
};
```

当一个组件被定义,`data`必须声明为返回一个初始数据对象的函数,因为组件可能被用来创建多个实例

也就是说,在很多页面中,定义的组件可以复用在多个页面

**如果`data`是一个纯碎的对象,则所有的实例将共享引用同一份`data`数据对象,无论在哪个组件实例中修改`data`,都会影响到所有的组件实例**

**如果`data`是函数,每次创建一个新实例后,调用`data`函数,从而返回初始数据的一个全新副本数据对象**

这样每复用一次组件,会返回一份新的`data`数据,类似于给每个组件实例创建一个私有的数据空间,让各个组件的实例各自独立,互不影响,保持低耦合

可以看下面一段代码

```js
// 声明构造器函数
function Person() {}

Person.prototype.data = {
  // 原型下挂载一对象,并有name属性
  name: 'itclanCoder',
};

var p1 = new Person();
var p2 = new Person();
p1.data.name = '川川';
console.log(p1.data.name); // 川川
console.log(p1.data.name); // 川川
```

挂载在原型下属性如果是一个对象,实例化出来的对象(p1,p2)都指向的是同一份实体

原型下的属性相当于是公有的

修改一个实例对象下的属性,也会造成另一个实例属性跟着改变,这样在组件复用的时候,肯定是不行的,那么改成函数就可以了的

```js
function Person() {
  this.data = this.data();
}

Person.prototype.data = function() {
  return {
    name: 'itclanCoder',
  };
};

var p1 = new Person();
var p2 = new Person();

p1.data.name = '随笔川迹'; // 如果是函数的形式去定义属性,它是有自定的作用域的,在修改的时候不会影响到别人
console.log(p1.data.name); // 随笔川迹
console.log(p2.data.name); // itclanCoder
```

## 第 2 题-vue-router 路由的模式

`vue-router` 默认 `hash` 模式 —— 使用 `URL` 的 `hash` 来模拟一个完整的 `URL`，于是当 `URL` 改变时，页面不会重新加载

如下所示

```js
http://localhost/#home
```

如果觉得`hash`很丑，我们可以用路由的 `history` 模式，这种模式充分利用 `history.pushState API`来完成 `URL`跳转而无须重新加载页面

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

如下所示

```js
http://localhost/home
```

配置路由模式:

- `hash`: 使用 `URL hash` 值来作路由。支持所有浏览器，包括不支持 `HTML5 History Api`的浏览器。
- `history`: 依赖 `HTML5 History API` 和服务器配置。查看 `HTML5 History` 模式。
- `abstract`: 支持所有 `JavaScript` 运行环境，如 `Node.js` 服务器端。如果发现没有浏览器的 `API`，路由会自动强制进入这个模式

`base`为应用的基础路径,例如:整个单页面应用服务在`/app/`下,那么`base`就应该设为`/app/`,当你在`HTML5 history`模式下使用`base`选项之后,所有的`to`属性都不需要写基础路径了

## 第 3 题-写一下 vue2 实例的生命周期

生命周期函数(钩子函数):在特定的阶段,能够自动执行的函数,总共分为 8 个阶段:创建前/后,载入前/后,更新前/后,销毁前/后

1. `beforeCreate阶段`: `vue`实例挂载元素`el`和数据对象`data`都为`undefined`,还未初始化

::: tip 注意

在当前阶段`data`,`methods`,`computed`以及`watch`上的数据和方法都不能被访问

**应用场景:**

1. 可以在此时加一些`loading`效果,在`created`时进行移除
2. 也可以在此阶段做一些页面拦截,当进入一个路由时,可以判断是否有权限进去,是否安全,携带参数是否完整,参数是否安全,使用好这个钩子的时候就避免了让页面去判断,省掉了创建一个组件`vue`实例
3. 做自定义重定向,当路由还没有进去时,判断是否正确进去,若不正确则可以重定向到指定的页面
4. 想要在实例化数据之前做什么事情,都可以在这个钩子函数里设置

:::

1. `created阶段`: `vue`实例的数据对象`data`有了,`el`还没有,在实例创建完成后会被立即调用。在这一阶段，实例已完成,数据观测(`data observer`)，`property` 和方法的运算，`watch/event` 事件回调

然而，挂载阶段还没开始，`$el property`目前尚不可用

在这一阶段可以做一些初始化数据的获取,在当前阶段无法与`DOM`进行交互,如果非要做,可以通过`vm.$nextTick`来访问`DOM`

**应用场景**: 需要异步请求数据的方法可以在此时执行，完成数据的初始化(`Ajax`请求放在这个阶段也是可以的)

**挂载时**

- `beforeMount`: 在挂载开始之前被调用,相关的`render`函数首次被调用
- `mounted`: 实例已经挂载完成,可以进行一些`DOM`操作

**载入前/后**

1. `beforeUpdate阶段`: 在挂载开始之前被调用: 相关的 `render` 函数首次会被调用,监测到`data`发生变化,在变化的数据重新渲染视图之前会触发,这也是重新渲染之前最后修改数据的机会

可以在当前阶段进行更改数据,不会造成重渲染

2. `updated`: 监测到`data`发生变化,并完成渲染更新视图之后触发,虚拟 DOM 重新渲染和打补丁之后调用,组合新的`DOM`已经更新,避免在这个钩子函数中操作数据,防止死循环

**销毁前/后**

1. `beforeDestory阶段`: 实例销毁前调用,实例还可以用,`this`能获取到实例,常用于销毁定时器,解绑事件

在当前阶段实例完全可以被使用,我们可以在时进行善后收尾工作,比如:清除计时器

2. `destoryed阶段`: 实例销毁后调用,调用后所有事件监听器会被移除,所有的子实例都会被销毁,当前阶段组件被拆解,数据绑定被卸除,监听被移出,子实例也统统被销毁

## 第 4 题-vue 的父组件和子组件声明周期钩子执行顺序

第一次页面加载时会触发`beforeCreate`,`created`,`beforeMount`,`mounted`

渲染过程:

父组件挂载完成一定是等子组件都挂载完后,才算是父组件挂载完,所以父组件的`mounted`在子组件`mounted`之后

父组件`beforeCreate`-->父`created`-->父`beforeMount`--> 子`beforeCreate`-->子`created`-->子`beforeMount`--->子`mounted` --> 父`mounted`

父组件更新过程

影响到子组件: 父`beforeUpdate`-->子`beforeUpdate`-->子`updated`--->父`updated`

不影响子组件: 父`beforeUpdate`-->父`updated`
**销毁过程**

父`beforeDestory`-->子`beforeDestory`-->子`destoryed`-->父`destroyed`

**注意:** 父组件等待子组件完成后,才会执行自己对应完成的钩子

## 第 5 题-vue.js DOM 渲染性能为什么比 jQuery 快?

`vue`通过建立一个虚拟 `DOM`来追踪自己要如何改变真实的`DOM`
通过数据改变去`diff`差异,而`jq`创建之后,比如:更新,会去拼接字符串,再渲染,但是`dom`节点上包含很多属性,每次都要重复变,是很浪费性能的,所以就有了虚拟`DOM`,与数据进行绑定,只有数据变了,`dom`也会跟着变

## 第 6 题-vue 脚手架编译后,如果存在过大的 js 文件怎么处理?

- 把一些不常改变的库放到`index.html`中,通过`cdn`的方式引入

```
<script src="https://unpkg.com/vue@2.5.2/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router@3.0.1/dist/vue-router.js"></script>
<script src="https://unpkg.com/axios@0.18.0/dist/axios.min.js"></script>
```

然后找到`build/webpack.base.config.js`文件,在`module.exports={}`中添加以下代码

```js
externals: {
  'vue': 'vue',
  'element-ui': 'element',
  'axios': 'axios'
}
```

- 通过路由的懒加载

```js
export default new VueRouter({
  mode: `history`,
  routes: [
    {
      path: '/',
      name: 'Account',
      compontent: (resolve) => require(['@/components/Account'], resolve),
    },
  ],
});
```

- 剥离`css`文件,单独打包

安装`webpack`插件`extract-text-webpack-plugin`,`npm install extract-text-webpack-plguin --save-dev`

```js
plugins: [new ExtractTextPlugin('static/css/styles.[contenthash].css')];
```

- 开启`gzip`压缩

使用`compression-webpack-plugin`插件进行压缩
安装`npm install compression-webpack --save-dev`

```js
const CompressionPlugin = require('compression-webpack-plugin');
plugins: [
  new CompressionPlugin({
    asset: '[path].gz[query]', //目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
    algorithm: 'gzip', //算法
    test: new RegExp(
      '\\.(js|css)$' //压缩 js 与 css
    ),
    threshold: 10240, //只处理比这个值大的资源。按字节计算
    minRatio: 0.8, //只有压缩率比这个值小的资源才会被处理
  }),
];
```

## 第 7 题-谈谈对 SPA 单⻚⾯的理解，优缺点是什么？

仅仅在 web 页面初始化时加载相应的`html`,`javaScript`和`css`一旦页面加载完成,`SPA`不会因为用户的操作而进行页面的重新加载或跳转,取而代之的是利用路由机制实现`html`内容的变换,`UI`与用户的交互,避免页面的重新加载

**优点:**

1. 用户体验好,快,内容的改变不需要重新加载整个页面,避免了不必要的跳转和重复渲染
2. SPA 相对服务器压力小
3. 前后端职责分离,架构清晰,前端进行交互逻辑,后端负责数据处理

**缺点:**

1. 首屏初次加载慢:为实现单页面 web 应用功能及显示效果,需要在加载页面的时候将`javaScript,css`统一加载,部分页面按需加载
2. 不利于`seo`,由于所有的内容都在一个页面中动态替换显示,所以在`seo`上有着天然的弱势

## 第 8 题-怎么提高首屏渲染

安装`webpack-bundle-analyzer`这个插件,然后使用`npm run build --report`输出项目打包情况,直观的比较哪个`bundle`文件的大小,有针对性的模块化拆分

- 路由懒加载
  在 `router.js`文件中，原来的静态引用方式，如

```js
import ShowBlogs from '@/components/ShowBlogs';

routes: [(path: 'Blogs'), (name: 'ShowBlogs'), (component: ShowBlogs)];
```

改为

```js
routes:[
 		path: 'Blogs',
 		name: 'ShowBlogs',
 		component: () => import('./components/ShowBlogs.vue')
 	]
```

如果是在 `vuecli 3`中，我们还需要多做一步工作
因为 `vuecli 3`默认开启 `prefetch`(预先加载模块)，提前获取用户未来可能会访问的内容
在首屏会把这十几个路由文件，都一口气下载了
所以我们要关闭这个功能，在 `vue.config.js`中设置

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    // 移除prefetch插件
    config.plguins.delete('prefetch');

    // 或者
    // 修改它的选项
    config.plugin('prefetch').tap((options) => {
      options[0].fileBlacklist = options[0].fileBlacklist || [];
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/);
      return options;
    });
  },
};
```

- 一些 UI 框架按需加载,不要整个的引入
  这里以饿了么 ui 为例：
  原本的引进方式引进了整个包

```js
import ElementUI from 'element-ui';
Vue.use(ElementUI);
```

如果只用了按钮,表单,分页，表格,提示等更改为

```js
import {
  Button,
  Input,
  Pagination,
  Table,
  TableColumn,
  MessageBox,
} from 'element-ui';
Vue.use(Button);
Vue.use(Input);
Vue.use(Pagination);
Vue.prototype.$alert = MessageBox.alert;
```

注意 `MessageBox`注册方法的区别，虽然用到了`alert`，但并不需要引入 `Alert`组件

在`.babelrc / babel.config.js`文件中添加（`vue-cli 3`要先安装 `babel-plugin-component`)

```js
plugins: [
  [
    'component',
    {
      libraryName: 'element-ui',
      styleLibraryName: 'theme-chalk',
    },
  ],
];
```

- gzip 压缩
  安装 `compression-webpack-plugin`

```js
cnpm i compression-webpack-plugin -D
```

在 `vue.congig.js`中引入并修改 `webpack`配置

```js
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
            return {
                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/, //匹配文件名
                    threshold: 10240, //对超过10k的数据进行压缩
                    deleteOriginalAssets: false //是否删除原文件
                })]
            }
        }
```

**注意**:在服务器也要做相应的配置，如果发送请求的浏览器支持 `gzip`，就发送给它`gzip`格式的文件
如果服务器是用`express`框架搭建的
只要安装一下 `compression`就能使用,其他也类似

```js
const compression = require('compression');
app.use(compression()); // 要放在所有其他中间件注册之前
```

- 首屏内容可以做静态缓存(`hash+`强缓存的一个方案。比如`hash+ cache control: max-age=1`年)
- 首屏内联 `css` 渲染
- 图片懒加载(可以通过给`img`标签上添加`loading=lazy`)来开启懒加载模式
- 使用字体图标代替小图片
- 图片尺寸大小控制适当
- 利用好`script`标签的`async`和`defer`这两个属性,功能独立且不要求马上执行的`js`文件,可以加入`async`属性,如果是优先级低且没有依赖的`js`,可以加入`defer`属性
- 前端做一些接口的缓存:缓存的位置有两个: 一个是内存,即赋值给运行时的变量,另一个是`localStorage`,比如签到日历(展示用户是否签到),可以缓存这样的接口到`localStorage`,有效期是当天,或者有个列表页,我们总是缓存上次的列表内容到本地,下次加载时,我们先从本地读取缓存,并同时发起请求到服务器获取最新列表

* 页面使用骨架屏(元素进行占位)
* 使用`ssr`渲染:服务器性能一般都很好,那么可以在服务器先把`vdom`计算完后,在输出给前端
* 引入`http2.0`,`http2.0`对比`http1.1`最主要的是提升是传输性能,在接口小而多的时候更加明显
* 选择先进的图片格式:使用`webP`的图片格式来代替现有的`jpeg`和`png`,当页面图片较多时,这点作用非常明显
* 利用好`http`压缩:即使是最普通的`gzip`,也能把文件大小压缩不小

## 第 9 题-`new Vue()`发生了什么?

`new Vue()`是创建了`vue`实例,它内部执行了根实例的初始化过程

具体包括以下操作

- 选项合并
- `$children`,`$refs`,`$slots`,`$createElement`等
- 自定义事件处理
- 数据响应式处理
- 生命周期钩子调用(`beforecreate created`)
- 挂载

`new Vue()`创建了根实例并准备好数据和方法,未来执行挂载时,此过程还会递归的应用于它的子组件上,最终形成了一个有紧密关系的组件实例树

## 第 10 题-Vue.use 是干什么的,原理是什么?

`Vue.use`是用来使用插件的,我们可以在插件中**拓展全局组件**,**指令**,**原型方法**等

1. 检查插件是否注册,若已注册,则直接跳出
2. 处理入参,将第一个参数之后的参数归集,并在首部塞入`this`上下文
3. 执行注册方法,调用定义好的`install`方法,传入处理的参数,若没有`install`方法并且插件本身为`function`则直接进行注册

::: tip 注意

1. 插件不能重复的加载
2. install 方法的第一个参数是`vue`的构造函数,其他参数是`vue.set`中除了第一个参数的其他参数,代码:`args.unshift(this)`
3. 调用插件的`install`方法,代码: `typeof plugin.install === 'function'`
4. 插件本身是一个函数,直接让函数执行,代码:`plugin.apply(null, args)`
5. 缓存插件:代码:`installedPlguins.push(plugin)`

:::

## 第 11 题-说一下响应式数据的理解

根据数据类型来做不同的处理,数组和对象类型当值变化时如何劫持

1. 对象内部通过`defineReactive`方法,使用`Object.defineProperty()`监听数据属性的`get`来进行数据依赖收集,在通过`set`来完成数据更新的派发
2. 数组则通过重写数组方法来实现的,拓展它的 7 个变更方法,通过监听这些方法可以做到依赖收集和派发更新(`push/pop/shift/unshift/splice/reverse/sort`)
3. 在`vue3`中是使用`proxy`来实现响应式数据

内部依赖收集是怎么做到的,每个属性都拥有自己的`dep`属性,存放它所依赖的`watcher`,当属性变化后会通知自己对应的`watcher`去更新

响应式流程:

1. `defineReactive`把数据定义成响应式的
2. 给属性增加一个`dep`,用来收集对应的那些`watcher`
3. 等数据变化进行更新
4. `dep.depend()` // get 取值,进行依赖收集
5. `dep.notify()` // set 设置时,通知视图更新

这里可以引出性能优化相关的内容:

1. 对象层级过深,性能就会差
2. 不需要响应式数据的内容不要放在`data`中
3. `object.freeze()`可以冻结数据

## 第 12 题-Vue 如何检测数组变化?

没有考虑数组原因是有用`defineProperty`对数组的每一项进行拦截,而是选择重写数组方法以进行重写,当数组调用到这 `7` 个方法的时候,执行`obj.dep.notify()`进行派发通知`watcher更新`，重写数组方法:`push/pop/shift/unshift/splice/reverse/sort`

在`Vue`中修改数组的索引和长度是无法监控到的。需要通过以下 7 种变异方法修改数组才会触发数组对应的`wacther`进行更新。

数组中如果是对象数据类型也会进行递归劫持。

那如果想要改索引更新数据怎么办？

可以通过`Vue.set()`来进行处理 =》 核心内部用的是 `splice` 方法

```js
// 取出原型方法；
const arrayProto = Array.prototype
// 拷贝原型方法；
export const arrayMethods = Object.create(arrayProto)
// 重写数组方法；
def(arrayMethods, method, function mutator (...args) { }
ob.dep.notify()  // 调用方法时更新视图；
```

## 第 13 题-Vue.set 方法是如何实现的?

为什么`$set`可以触发更新,我们给对象和数组本身都增加了`dep`属性,当给对象新增不存在的属性则触发对象依赖的`watcher`去更新,当修改数组索引时我们调用数组本身的`splice`方法去更新数组

**官方定义**: Vue.set(object, key, value)

如果是数组,调用重写`splice`方法
代码: `target.splice(key, 1, val)`

2. 如果不是响应式的也不需要将其定义成响应式属性
3. 如果是对象,将属性定义成响应式的`defineReactive(ob.value,key,val)`,通知视图更新`ob.dep.notify()`

## 第 14 题-vue 中是如何监听路由 hash 变化的

## 第15题-说说Vue组件间的通信方式

1. 父组件向子组件通信

2. 子组件向父组件通信

3. 隔代组件间通信

4. 兄弟组件间通信

props,vue自定义事件,消息订阅与发布,vuex,slot

方式1: props

通过在组件上自定义属性方式实现父向子组件通信

通过函数属性实现向子向父通信

缺点: 隔代组件和兄弟组件间通信比较麻烦

方式2: vue自定义事件

Vue内置实现,可以代替函数类型的props

a:绑定监听:<MyComp @eventName='callback'>

b: 触发(分发):事件: this.$emit("eventName",data)

缺点: 只适合子向父通信

方式3:消息订阅与发布

需要引入消息与发布的实现库,如:pubsub-js

a. 订阅消息:PubSub.suscrbe('msg',(msg,data)=>{})
b. 发布消息:PubSub.publish('msg',data);

优点：此方式可实现任意的关系组件的通信

方式4-vuex

 vuex是vue官方提供的集中式管理vue多组件共享状态数据的vue插件

 优点:对组件间关系没有限制,相比于pubsub库管理更集中,更方便

 方式5-slot

 专门用来实现父向子传递带数据的标签

 a:子组件
 b: 父组件

 通信的标签模板是在父组件中解析好后在传递给子组件的

 

