---
title: 加载时性能优化
autoGroup-2: 性能优化
---

## 加载时性能优化

## 快速导航

<TOC />

## 前言

网站的性能优化对于用户的用户体验,留存率,转化率有很大的影响,这不区分是网站,小程序,还是 App

通常性能优化的点有很多,这里归纳记录一下的,在实际开发中,多尝试多用的

## 加载时性能优化

加载时性能主要解决的是一个网站加载过程更快,比如压缩文件大小,使用 cdn 加速等方式可以优化加载性能,检查加载性感的指标一般根据:白屏时间和首屏时间

⒈ 白屏时间:指的是从输入网址,到页面开始显示内容的时间

⒉ 首屏时间: 指从输入网址,到首屏页面内容渲染完毕的时间

## 白屏时间计算

将代码脚本放在`<head>`前面就能获取白屏时间

```js
new Date().getTime() - performance.timing.navigationStart;
```

## 首屏时间计算

在`window.onload`事件中执行以下 diamante,可以获取首屏时间

```js
new Date().getTime() - performance.timing.navigationStart;
```

## 加载时性能优化有哪些

在浏览器中输入一个网址,经历了这么几个阶段

⒈ DNS 域名解析

⒉ 找到对应的 IP 地止

⒊ 然后进行 TCP 连接

⒋ 浏览器发送 HTTP 请求

⒌ 服务器接收请求

⒍ 服务器处理请求并返回 HTTP 报文

⒎ 以及浏览器接收并解析渲染页面

从这一过程中,其实就可以看出优化点,缩短请求的时间,从而去加快网站的访问速度,提升性能

⒈ DNS 解析优化,浏览器访问 DNS 的时间就可以缩短

⒉ 使用 HTTP2

⒊ 减少 HTTP 请求数量

⒋ 减少 http 请求大小

⒌ 服务器端渲染

⒍ 静态资源使用 cdn

⒎ 资源缓存,不重复加载相同的资源

## DNS 预解析

减少 DNS 解析时间和次数是个很好的优化方式,`DNS Prefetching`是具有此属性的域名不需要用户点击链接就在后台解析,而域名解析和内容载入是串行的网络操作,所以这个方式能减少用户的等待时间,提供用户体验

浏览器对网站第一次的域名 DNS 解析查找流程依次为

`浏览器缓存`-->`系统缓存`-->`路由器缓存`-->`ISP DNS缓存`-->`递归搜索`

## DNS 预解析的实现

用`meta`信息来告知浏览器,当前页面要做 DNS 预解析

```js
<meta http-equiv="x-dns-prefetch-control" content="on">
```

在页面 header 中使用 link 标签来强制对 DNS 预解析

```js
<link rel="dns-prefetch" href="https://coder.itclan.cn">
```

::: warning 注意
注意:dns-prefetch 需要慎用,多页面重复的 DNS 预解析会增加重复 DNS 查询次数
:::

## 使用 http2.0

HTTP2.0 带来了非常大的加载优化,所以在做优化上首先想要用 httl2 代替 http1

Http2 相对 HTTP1 有以下些优点

**解析速度快**

服务器解析 HTTP1.1 的请求时,必须不断的读入字节,直到遇到分隔符 CRLF 为止,而解析 HTTP2 的请求就不用这么麻烦,因为 HTTP2 是基于帧的协议,每个帧都有便是帧长度的字段

**多路复用**

在 HTTP2 上,多个请求可以共用一个 TCP 连接,这称为多路复用

当然 HTTP1.1 有一个可选的`Pipelining`技术,说的意思是当一个 HTTP 连接在等待接收响应时可以通过这个链接发送其他请求

需要注意的是:处理的响应是按照顺序的,也就是后发的请求有可能被先发的阻塞住,也正因此很多浏览器默认是不开启`pipelining`的

HTTP1 的`pipelining`技术会有阻塞的问题,HTTP/2 的多路复用可以粗略的理解为非阻塞版的`pipeling`,即可以同时通过一个`HTTP`连接发送多个请求,谁先响应就先处理谁,这样就充分压榨了 TCP 这个全双工管道的性能,加载性能会是`HTTP1`的几倍,需要加载的资源越多越明显,当然多路复用是建立在加载的资源同一域名下

首部压缩

HTTP2 提供了首部压缩功能

HTTP1.1 请求的大小变得越来越大,有时甚至会大于 TCP 窗口的初始大小,因为他们需要等待带着 ACK 的响应回来以后才能继续被发送,HTTP/2 对消息头采用 HPACK(专为 http/2 头部设计的压缩格式)进行压缩传输,能够节省消息头占用的网络的流量,而 HTTP/1.x 每次请求,都会携带大量冗余头信息,浪费了很多带宽资源

**服务器推动**

服务端可以发送页面 HTML 时主动推送其他资源,而不用等到浏览器解析到相应的位置,发起请求在响应

## 减少 HTTP 请求数量

HTTP 请求建立和释放需要时间

HTTP 请求从建立到关闭一共经过以下步骤

⒈ 客户端连接到 web 服务器
⒉ 发送 HTTP 请求
⒊ 服务器接受请求并返回 HTTP 响应
⒋ 释放连接 TCP 连接

## 压缩,合并文件

⒈ 压缩文件->减少 HTTP 请求大小,可以减少请求时间
⒉ 文件合并->减少 HTTP 请求数量

可以对 html,css,js 以及图片资源进行压缩处理,现在可以很方便的使用`webpack`实现文件的压缩

⒈ js 压缩:UglifyPlugin
⒉ CSS 压缩: MiniCssExtractPlugin
⒊ HTML 压缩: HtmlWebpackPlugin
⒋ 图片压缩:image-webpack-loader

提取公共代码

合并文件虽然能减少 HTTP 请求数量,但是并不是文件合并越多越好,还可以考虑按需加载方式

可以使用 webpack4 的`splitChunk`插件`cacheGroups`选项

```js
optimization: {
      runtimeChunk: {
        name: 'manifest' // 将 webpack 的 runtime 代码拆分为一个单独的 chunk。
    },
    splitChunks: {
        cacheGroups: {
            vendor: {
                name: 'chunk-vendors',
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                chunks: 'initial'
            },
            common: {
                name: 'chunk-common',
                minChunks: 2,
                priority: -20,
                chunks: 'initial',
                reuseExistingChunk: true
            }
        },
    }
},
```

## 采用 svg 图片或子图图标

因为字体图标或者 SVG 是矢量图，代码编写出来的，放大不会失真，而且渲染速度快。字体图标使用时就跟字体一样，可以设置属性，例如 `font-size`、`color` 等等，非常方便，还有一个优点是生成的文件特别小

## 按需加载代码，减少冗余代码

**按需加载**

在开发 spa 项目时,项目中经常存在十几个甚至更多的路由页面,如果将这些页面都打包进一个 js 文件,虽然减少了 HTTP 请求数量,但是会导致文件比较大,同时加载了大量首页不需要的代码,有些得不偿失

这个时候就可以使用按需加载,将每个路由页面单独打包为一个文件,当然不仅仅是路由可以按需加载

根据文件内容生成文件名,结合 import 动态引入组件实现按需加载

通过配置`output`的`filename`属性可以实现这个需求,`filename`属性的值选项中有一个`[contenthash]`,它将根据文件内容创建出唯一的`hash`,当文件内容发生变化时,`[contenthash]`也会发生变化

```js
output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
},
```

## 减少冗余代码

一方面避免不必要的转义:`babel-loader`用`include`或`exclude`来帮我们避免不必要的转译,不转转译`node_modules`中的`js`文件,其次在缓存当前转译的 js 文件,设置`loader:'babel-loader?cacheDirectory=true'`

其次减少 ES6 转为 ES5 的冗余代码：Babel 转化后的代码想要实现和原来代码一样的功能需要借助一些帮助函数，比如：

```js
class Person {}
```

经过 babel 会被转换为

```js
'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

var Person = function Person() {
  _classCallCheck(this, Person);
};
```

这里 `_classCallCheck`就是一个`helper`函数，如果在很多文件里都声明了类，那么就会产生很多个这样的`helper` 函数。

这里的 `@babel/runtime` 包就声明了所有需要用到的帮助函数，而 `@babel/plugin-transform-runtime` 的作用就是将所有需要`helper`函数的文件，从`@babel/runtime`包 引进来

```js
'use strict';
var _classCallCheck2 = require('@babel/runtime/helpers/classCallCheck');
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Person = function Person() {
  (0, _classCallCheck3.default)(this, Person);
};
```

这里就没有在编译出`help`函数`classCallCheck`了,而是直接引用了`@babel/runtime`中的`helper/classCallCheck`

## 安装

```js
npm i -D @babel/plugin-transform-runtime @babel/runtime
```

使用在`.babelrc`文件中

```js
"plugins": [
	"@babel/plugin-transfrom-runtime"
]
```

## 服务器端渲染

客户端渲染:获取 HTML 文件,根据需要下载`javaScript`文件,运行文件,生成 DOM,在渲染

服务端渲染:服务端返回 HTML 文件,客户端只需要解析 HTML

优点: 首屏渲染快,SEO 好
缺点:配置麻烦,增加了服务器的计算压力

## 使用 Defer 加载 JS

尽量将 css 放在文件头部,javaScript 文件放在底部

所有放在 head 标签里的 css 和 js 文件都会堵塞渲染,如果这些 css 和 js 需要加载和解析很久的话,那么页面就空白了,所以 js 文件要放在底部,等 HTML 解析完了在加载 js 文件

那为什么 css 文件还要放在头部呢?

因为先加载 HTML 再加载 css,会让用户第一时间看到的页面是没有样式的,丑陋的,为了避免这种情况发生,就要将 css 文件放在头部了

另外,js 文件也不是不可以放在头部,只要给`script`标签加上`defer`属性就可以了,异步下载,延迟执行

## 静态资源使用 CDN

用户与服务器的物理距离对响应时间也有影响,把内容部署在多个地理位置分散的服务器上能让用户更快的载入页面,cdn 就是为了解决这一问题,在多个位置部署服务器,让用户离服务器更近,从而缩短请求时间

## 图片优化

雪碧图

最为常用的图片合并场景就是雪碧图

雪碧图的核心原理在于设置不同的背景偏移量,大致包含两点

⒈ 不同的图标元素都会将`background-url`设置为合并后的雪碧图 url
⒉ 不同的图标通过设置对应的`background-posiiton`来展示大图中对应的图标部分,你可以用`photoshop`这类工具自己制作雪碧图,当然比较推荐的是将雪碧图的生成集成到前端自动化构建工具中,例如在`webpack`中使用`webpack-spritesmith`,或者在`gulp`中使用`gulp.spritesmith`,他们两者都是基于`spritesmith`这个库

## 图片懒加载

一般来说,我们访问网站页面时,很多图片并不在首屏中,如果我们都加载的话,相当于加载了用户不一定会看到图片,这显然是一种浪费,解决的核心思路就懒加载,实现方式就是先不给图片设置路径,当图片出现在浏览器可视区时才设置真正的图片路径

实现上就是先将图片路径设置给`original-src`,当页面不可见时,图片不会加载

```js
<img original-src="xxx.image" />
```

通过监听页面滚动,等页面可见时设置图片的`src`

```js
const img = document.querySelector('img');
img.src = img.getAttribute('original-src');
```

如果想使用懒加载,还可以借助一些已有的工具库,例如`aFarkas/lazysizes,verlok/lazyload,tuupola/lazyload`等

## css 中图片懒加载

除了对于`<img>`元素的图片进行来加载,在 css 中使用的图片一样可以懒加载,最常见的场景就是`background-url`

```js
.login {
	background-url: url(/static/img/login.png)
}
```

对于上面的这个样式规则,如果不应用到具体的元素,浏览器不会去下载该图片,可以通过切换`className`的方式,放心的进行 css 中图片的懒加载

用 innerHTML 代替 DOM 操作，减少 DOM 操作次数，优化 javascript 性能,当需要设置的样式很多时设置`className`而不是直接操作`style`

少用全局变量、缓存 DOM 节点查找的结果。减少 IO 读取操作,
