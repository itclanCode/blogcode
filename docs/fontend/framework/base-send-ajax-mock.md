---
title: React基础(9)-React中发送Ajax请求以及Mock数据
autoGroup-1: React基础
---

## React 中发送 Ajax 请求以及 Mock 数据

## 快速导航

<TOC />

## 前言

在 `React` 中,`render` 函数返回的结果,取决于组件的 `props` 和 `state`

我们都知道 `UI` 页面上的数据不是写死的,往往是从后端的数据接口中拿到的

然后将真实的数据填充到页面上 ,那么应该在哪个生命周期函数中发起请求?

又如何发起 `Ajax` 请求呢以及有哪些方式? 以及我们怎么样模拟一个后端数据接口?

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/01-guide.jpg" alt="JSX" />
</div>

## 示例`API`返回如下`json`对象

假如后端返回的商品列表如下所示

```js
{
  "goodLists": [
      {"id": 1, "name": "瓜子", "price": 10, "address": "广东"},
      {"id": 2, "name": "苹果", "price": 20, "address": "北京"}，
      {"id": 3, "name": "橘子", "price": 8, "address": "湖南"}，
      {"id": 4, "name": "桃子", "price": 13, "address": "北京"},
      {"id": 5, "name": "榴莲", "price": 18, "address": "海南"}
   ]
}
```

把这段商品列表的`json`代码命名为`goodlist.json`,放到根目录`public`的`api`文件夹内

在`public`目录下的`api`文件夹下都可以放置你自己模拟的数据,该模拟的数据文件只能放置在`public`目录下,否则就会报错,不生效的

对应的 `UI` 效果显示:如下所示

当然对于 `UI` 以什么样的方式来显示,你自己可以用 `css` 进行控制的，这并不是文本的重点

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/02-ui.png" alt="JSX" />
</div>

## 在哪个生命周期函数中发送 AJax 请求

把`Ajax`请求放在`componentWillMount`组件即将被挂载的函数中也是可以的

但是官方推荐放在`componentDidMount`这个生命周期函数中发起`Ajax`请求,因为执行这个生命周期时,`DOM`已经挂载完了

这样做可以拿到`Ajax`请求返回的数据并通过`setState`来更新组件

```js
componentDidMount(){
   // 在这里进行Ajax数据请求，axios,fetch,jquery Ajax或者request都可以
}
```

## 如何发送 AJax 请求？

在`React`中,你可以使用你喜欢的`Ajax`库,例如：`Axios`,浏览器内置的`feach`方法,`JQuery Ajax`,或是第三方库`request`,下面就逐一来看看的

- 方式一使用`Axios`发送`Ajax`请求

该方式无论是`Vue`还是`React`甚至其他一些框架中,都普遍常用,它支持`promise`方式，在使用`axios`库之前,应该先在终端下使用`npm`或者`cnpm`全局安装一下

```js
npm install -S axios
或者cnpm install -S axios
或者yarn add axios
```

安装完`axios`后,在需要使用请求数据的文件最上面,引入`axios`库,如下代码所示,下面是上面示例`API`的具体代码

```js
import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; // 引入axios库
import './style.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.baseUrl = '/api/goodlist'; // 这里是本地模拟,在public下创建一个api文件,放置一个json文件，这里的路径直接是根路径即可,react会自动的找到这个目录
    // this.baseUrl = 'http://localhost:4000/api/goodlist'; // 这种方式是使用代理的方式,这里用的是mockoon工具
    // this.baseUrl = 'https://easy-mock.com/mock/5b24e12cf076d94c646a9aa2/api/googlists'; //这是使用easy-mock
    this.state = {
      list: [],
    };
  }

  render() {
    const { list } = this.state;
    return (
      <Fragment>
        <ul>
          {list.map((item) => {
            const isRed = item.price >= 10 ? 'red' : '';
            return (
              <li key={item.id}>
                {item.name}-<span className={isRed}>{item.price}￥</span>-
                {item.address}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  // Ajax请求放在componentDidMount生命周期内
  componentDidMount() {
    // 使用axios完成ajax数据请求
    axios
      .get(this.baseUrl)
      .then((res) => {
        const { goodlists } = res.data;
        this.setState({
          list: goodlists,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const container = document.getElementById('root');

ReactDOM.render(<List />, container);
```

上面的代码就是在`componentDidMount`中发起`Ajax`请求,用`axios`请求数据

拿到数据后,然后通过`setState`去更新组件的`state`的数据渲染到页面上

同时,当价格大于 10 时,进行了一些逻辑判断,让价格大于 10 的变红色,在 JSX 里面是可以插值表达式的方式进行一些特殊处理的

注意:本地模拟数据的`json`文件(这里是`goodlist.json`),放置的位置只能是放置在根目录`public`目录文件夹下,若放置在其他处,是不起作用的

之所以放在`public`能起作用,访问的路径直接是根路径即可,`webpack`做了一些处理,`react`会自动的找到这个目录

- 方式二:使用浏览器内置的`fetch`方法

该方法是浏览器标准的一个接口,提供了一种简单合理的方式来跨网络异步的获取资源数据,现在也是越来越流行使用的,同样 `Ajax` 请求也是放在`componentDidMount`组件挂载完之后进行数据请求,如下代码所示

```js
componentDidMount(){
    // 使用fetch,这里的地止换成上面的this.baseUrl也是可以的
    fetch('/api/goodlist')
      .then(res => res.json())
      .then((result) => {
        console.log(result);
        const { goodlists } = result;
        this.setState({
          list: goodlists
        })
     },
     // 注意在这里处理错误时,与axios有些区别,不是用catch()去捕获错误,因为使用catch去捕获异常会掩盖掉组件本身可能产生的bug
     (error) => {
        console.log(error);
     }

     )
  }
```

上面使用的是`fetch`的方式请求数据,`fetch`是前沿的标准,它是`Ajax`的替代品,它的`API`是基于`Promise`设计的,旧版本的浏览器不支持`fetch`,需要用`polyfill es6-promise`

具体更详细的`fetch`使用,可参照`MDN`文档的

- 方式三:使用`JQ`的`Ajax`
  `jquery`是一个库,在`React`中你想要用时,得先安装,使用该方法请求数据不是不可以,但是不推荐

```js
npm install -S jquery
或者
cnpm install -S jquery
```

然后在你需要请求数据的文件处,引入`jquery`

```js
import $ from 'jquery';
```

然后在`componentDidMount`生命周期函数内,使用`jquer`请求数据的方法，下面以`$.get()`为例,`$`至于`$.post()`,`$.ajax()`使用方式可自行查阅的

```js
componentDidMount(){
   /*
     $.get('/api/goodlist', function(res){
       console.log(res);
       this.setState({
         list: res.goodLists
       })
     }.bind(this)) // 这里必须手动绑定this
    */
    // 等价于下面的,如果不手动绑定,可以使用箭头函数,避免this的绑定
    $.get('/api/goodlist', (res) => {
       console.log(res);
       const { goodlists } = res;
       this.setState({
          list: goodlists
       })
    })
  }
```

上面是使用`jquery`中提供的方法`Ajax`请求数据,我们只需要请求一数据,但却要把整个`jquery`库都给引入进来,这个按照当今的按需加载模块化开发的话，是非常不合理的，于是就有了`fetch`,和`axios`的解决方案

在`React`中推荐使用`axios`或者`fetch`的方式进行`Ajax`请求数据

- **方式四:使用 request 库**: https://github.com/request/request

这个不仅仅是在`Vue`,`React`等框架中使用,在微信小程序里`Ajax`请求数据也是支持的

这个`request`模块也是非常流行和好用的,在这里不提一下,都觉得埋没了的

使用时,先要安装`request`模块然后在安装`request-promise`模块,因为`request-pormise`是依赖于`request`,所以两个依赖都得依次安装

```js
npm install -S request
npm install -S request-promise
```

然后在你需要使用请求数据的文件上方引入`request-promise`库,调用一个`rp`函数

```js
import rp from 'request-promise';
```

然后在`componentDidMount`内进行`Ajax`的数据请求,如下代码所示

```js
componentDidMount(){
    // 使用request-promise请求数据
    // 注意这里的this.baseUrl不支持/api/goodlist.json方式,下面的this.baseUrl是http://localhost:4000/api/goodlist,以及真实的地止,都是可以的
    rp(this.baseUrl)
      .then(res => {
        // 这里要注意的是res返回的是一个字符串,需要用JSON.parse()方法将字符串转化为json对象
        const { goodlists } = JSON.parse(res);
        this.setState({
           list: goodlists
        })
      })
      .catch(error => {
        console.log(error);
      })
  }
```

上面是使用`request-promise`的方式实现`Ajax`数据的请求也是可以的,注意使用该方式时,无法使用本地`mock`数据的

它也是支持`promise`对象,注意,当返回成功的`response`的类型是一个`json`字符串格式,你需要用`JSON.parse()`的方式

将`json`字符串,转化为`json`对象,然后做处理的

如果你是使用`axios`的方式请求数据,那么是不用进行`json`序列的格式化的

**小结**

在`React`中请求数据的几种方式

- `axios`(普遍常用)
- `fetch`方法(尝鲜,显逼格用)
- `jquery Ajax`(不推荐使用)
- `request`(常用,仅次于`axios`使用频率)

**注意:** 都是放在`componentDidMount`函数中进行数据请求的

在本地的`public`目录下`mock`本地数据

这种方式比较简单,直接在工程`public`目录下创建一个`api`文件夹,新建一个`json`文件就可以了

若使用`axios`进行数据的请求,或者`fetch`的方式,`url`以反斜杠`/`开头就可以了,如上示例代码所示,但是若是`request`的方式，`url`写成反斜线/的方式是不生效的

使用`request`的方式,需要带上`http`协议,它也支持线上接口

若是遇到跨域问题,在请求头 `headers` 中,添加`Access-Control-Allow-Origin: *`即可

这个我们在稍后的 `mockoon` 工具中会介绍到

```js
react-ajax
├── package-lock.json
├── package.json
├── public // 在该目录下创建一个api文件夹,把需要的模拟的数据放在一个json文件即可
│ ├── api
│ │ └── goodlist.json
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
├── README.md
├── src
│ ├── App.js
│ ├── index.js
│ └── style.css
└── yarn-error.log

```

## 使用 charles 抓取本地化模拟数据

`charles`是一款代理服务器,通过将自己设置成系统的网络访问代理服务器,然后截取请求和请求结果达到分析抓包的目的,该软件是用`java`写的,安装`charles`的时候,先要装好`Java`坏境,也就是`Jdk`坏境的设置

下面就来看看`charles`的简单具体使用

先百度百科 `charles` 下载该工具,下一步,下一步安装就好,当然你在后台回复【`charles` 下载】也是获取到的

使用方式如下所示:

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/02-charles.jpg" alt="JSX" />
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/03-charles.jpg" alt="JSX" />
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/04-charles.jpg" alt="JSX" />
</div>

**注意**：`charles`的`port`端口号与`React`本地启动的服务端口号一致即可

在你没有配置`charles`工具代理服务时,若该假数据的文件放置在项目根目录`public`之外,这时请求`url`,`/api/goodlist`是会报错的

换而言之,假数据放置在`public`目录下,不使用`charles`等其他代理工具，也能成功,因为在`React`中的`webpack`自动的帮你处理了,会自动的找到`public`目录下的文件

当然除了`charles`还有`mockoon`等其他一些工具的

## 使用 mockoon 进行 mock 本地数据

使用该方式时,需要你去官方下载`mockoon`工具,当然你若懒于百度谷歌,你在后台回复【mockoon】,这里我只提供了 `windows` 版本的,`linux` 与 `Mac` 用户可自行解决

官网地止:`https://mockoon.com/`

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/05-mockon.jpg" alt="JSX" />
</div>

`mockoon`配置如下所示

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/06-mockon.jpg" alt="JSX" />
</div>

## 使用 Easy Mock 伪造数据

`Easy Mock` 这是大搜车技术团队一个开源伪造数据的工具,是一个可视化，并且能快速生成模拟数据的持久化服务

官网地止:`https://easy-mock.com`

<div align="center">
<img class="medium-zoom lazy" loading="lazy"  src ="../images/framework-article-imgs/base-send-ajax-mock/07-mockon.jpg" alt="JSX" />
</div>

`easy-mock`结合了`mock.js`,支持接口代理,`Restful`风格等非常好用的功能

把上面代码中的`baseUrl`换成线上`easy-mock`的就可以了

```js
this.baseUrl =
  'https://easy-mock.com/mock/5b24e12cf076d94c646a9aa2/api/googlists';
```

至于更多`easy-mock`工具的使用,自己可以多试一试的,有了它,就可以不依赖后端接口了,等后端接口弄好了,直接替换就可以了的

**小结**

`mock`本地数据的几种方式

- 在本地的`public`目录下`mock`本地数据(最简单粗暴,常用)
- 使用`charles`抓取本地化模拟数据
- 使用`mockoon`进行`mock`本地数据
- 使用`easy-mock`伪造接口数据(推荐多用)

## 结语

本文主要讲解了`React`中如何发送`Ajax`请求,其中发送请求放置的地方应当在`componentDidMount`组件挂载完这个生命周期内,而发送`Ajax`的方式有`axios`,`fetch`,`Jquery Ajax`,以及`request`的方式,其中`axios`与`fetch`,`request`是主流的方式

同时介绍了在项目的根目录 `public` 文件夹下放置模拟的假数据,个人觉得这个很简单粗暴,但是唯一不足是你得自己手动的编写数据

而利用 `charles` 和 `mockoon` 工具拦截本地的请求,mock 数据,需要你额外的配置一下的

当然最后介绍了`easy-mock`这个非常好用的模拟后端假数据的工具

以上的代理数据模拟手段选择其中一种自己喜欢的就可以了,工具无好坏之分,自己用的爽就可以,不过个人推荐使用`easy-mock`,但是其他方式也不赖,要是不是线上的,断网了

那么其他方法就比较适用了，之所以介绍了不同的工具,主要是开拓自己的思路

这个工具用得不爽,就用另外一个的,总有一个适合自己的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
