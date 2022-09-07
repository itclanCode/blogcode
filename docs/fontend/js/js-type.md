---
title: script标签中type的使用
---

## script标签中type的使用

## 快速导航

<TOC />

## 前言

对于`script`标签,对于一个前端开发工程师来说,不会陌生,反而熟悉,因为只要写纯静态`html`,想要写点脚本,那么就需要在页面顶部或者`body`底部插入`script`标签，我们比较熟悉的有`src`,和`type`属性,今天就来聊聊这个`type`属性

## type

**MDN**:该属性定义`script`标签元素包含或src应用的脚本语言,属性的值为MIME类型（Multipurpose Internet Mail Extensions Type, 多用途互联网邮件扩展类型）也叫媒体类型

支持的MIME类型包括`text/javascript` ，`text/ecmascript`, `application/javascript`, 和`application/ecmascript,application/json,module`

大部分媒体类型是服务端通过`http`协议告知客户端(浏览器)的,准确的来说,是服务端通过`Content-type`这个响应头来告诉浏览器接收到的响应体的媒体类型到底是什么

这个媒体类型决定了服务端返回的内容(响应体)究竟该如何被我们的浏览器解析处理,比如：`Content-type: text/html`,此时浏览器将会将响应的内容当做一个`html`文件来解析处理

在`script`标签中如果没有定义这个`type`属性,脚本会被视为`javascript`,会被浏览器解析

## type=""text/javascript

平时写`script`标签的时候,一些编辑器如果安装`emmet`插件,就会自动的提升将这个`type="text/javascript"`属性带上

```js
<script type="text/javascript"></script>
```
这个是可以省略的,加上的话是`html4and xHTML`,而忽略的话表示是`HTML5`的写法,也就是说,在最新的语法规则里,把这个`type="text/javascript"`自动给加上了的

当你在`script`标签上定义了`type="text/javascript"`，此时浏览器会将里面的内容当做`javascript`来执行,所以我们写在里面的代码,要符合js语法的规范,否则就会报错
```html
<script type="text/javascript">
 // 这里面书写形式得符合Js语法的一个规范，否则的话就会报错
 console.log(name);   // 会报错,因为没有定义name这个变量，就直接读取这个变量的,这个变量不存在
 // 正确的写法
 var name = "itclan.cn"
 console.log(name); 
</script>
```
在阅读有些网站源码的时候,在`script`标签上除了`type="text/javascript"`,还会看到一个就是`application/json`

比如：`Nextjs`官网,打开`console,Elelement`或`netWork`,直接搜索即可

## application/json

看到这个`type`值,我们会想到服务端请求头会给我们返回一个响应头

`Content-Type: application/json`;
<p align="center"><img class="medium-zoom lazy" loading="lazy" src="https://itclan.cn/wp-content/uploads/2022/06/01-application-json.png"  alt="" /></p>

当`type="text/javascript"`，是让浏览器把标签里面的内容当做js来执行，那这里的`application/json`呢

```js
<script type="application/json">
    const nameStr = "itclan.cn";
    console.log(nameStr);
</script>
```
这个时候刷新页面,打开控制台,`itclan.cn`,不会被输出,控制台一片空白，没有报错,也没有输出任何内容

如果写成`type="text/javacript"`,`script`里面的内容就会被浏览器当做`js`来执行,因此一开始的js执行了就会输出`itclan.cn`

而`script`的`type`属性为`application/json`时浏览器则不会把`script`里面的内容当做js来执行,那如果把标签里面内容修改为`json`格式呢

```js
<script type="application/json">
    {
      "data": [
        {
          "a": 1,
          "b": 2
        },
        {
          "c": 3,
          "d": 4
        }
      ],
      "total": 100
    }
  </script>
```
我们会发现我们的控制台没有任何变化,也不会报错,但是我们想要获取里面的内容，我们给这个`script`标签添加上个`id`

```js
 <script id="json-script" type="application/json">
    {
      "data": [
        {
          "a": 1,
          "b": 2
        },
        {
          "c": 3,
          "d": 4
        }
      ],
      "total": 100
    }
  </script>
```
然后再通过一段js去获取这个标签里面的内容再转成`json:`

```js
<script>
        const node = document.getElementById("json-script");
        const jsonStr = JSON.parse(node.innerText);
        console.log(jsonStr);
 </script>
```
那如果书写的时候不符合`json`的语法, 或者说故意破坏json的语法呢? 比如先破坏`json`的语法, 然后不获取也不解析:

如果写的不是`json`格式,那么在解析`json`的时候,就会报错，必须得遵循`json`语法

也就是说,浏览器不会把里面的内容当做js去解析，它会把里面的内容当做数据块,而不会被当做是`js`执行

## application/json应用场景

大家平时写一些临时活动页面，在页面上展示固定数据的时候,有的产品经理对前端提出了这么一个需求就是

页面中的数据和图片,以及信息,希望是能够通过配置而成,然后通过`Ajax`请求

1. 方法1-在文件外部创建一个js文件,加载数据,然后写到html页面上
2. 方法2-把数据对象写成一json,然后请求该`json`文件,动态的插入到页面结构中
3. 方法3-script上定义`type=”application/json”``,把配置对象选项写在里面

```html
<script id="_json_data" type="application/json">
    {
      "data": [
        {
          "name": "川川",
          "desc": "itclan.cn"
        },
        {
          "name": "iT资源网",
          "desc": "https://itclan.cn"
        }
      ],
      "total": 100
    }
  </script>
```
然后我们再通过`js`去获取, 关键代码如下

```js
const jsonScriptNode = document.getElementById('_json_data');
const jsonStr = jsonScriptNode.innerText;
const json = JSON.parse(jsonStr);
```
这样可以避免使用js加载数据时多余的网络请求, 同时语义也更加的明确,定义在一个文件里,可以减少文件的请求

## type="module"

平时写纯静态页时,不会用到,但是大家使用`vue-cli`,`vite`都使用得最多的模块化,`import`,`export`使用比较频繁

我们新建一个目录,里面有`module.html`文件,如下所示

```html
project
|--public
|   |--js
|   |   |--a-module.js
|   |--module.html
```
如下是`a-module.js`代码
```js
export const func = () => {
    console.log("https://tv.itclan.cn");
}
```
如下是`module.html`代码
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <script type="module">
        import { func } from "./js/a-module.js"
        func()
    </script>
</body>
</html>
```
如何你是直接从本地环境直接打开的话,会直接报一个跨域的错
```js
Access to script at 'file:///D:/itclan/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Vue%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/03-script%E4%B8%AD%E7%9A%84type/project/public/js/a-module.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
a-module.js:1          Failed to load resource: net::ERR_FAILED
```
这是因为`script[type=”module”]`会受到`cors`策略的限制,直接在浏览器中打开文件用的是file协议,而只有`http`,`data`,`chrome`,`chrome-extension`,`chrome-untrusted`,`https`这几个协议才能使用

遇到这种问题,本地搭建一个服务就可以了,你可以用`express`写一个后端服务文件,用`node`起得

这里我使用的是在`vscode`中安装一个`live-server`插件,起一个本地服务的,比较简单粗暴

这里有怎么使用安装的

在实际项目开发中,模块化的开发,在`vite`中已经引入了的,而在`vue2`项目里,很多依赖`webpack`打包工具,工程化的项目,使用这种`type="module"`兼容性是有待考量的,之所以使用`webpack`,他会处理成`IIFE`形式的代码,同时辅以`babel`将我们的`Es6` 的代码转为更具兼容性的`Es5`的代码,既提升了我们的编程体验,同时还兼顾了兼容性问题

## 总结

本篇只是在一些开源的项目代码里,看到了``type="application/json"``，一时好奇,所以就总结记录了一下

在实际开发中,平时写静态页,如果想配置成动态的数据,这种方式是可以的,减少文件的请求


<footer-FooterLink :isShareLink="true" :isDaShang="true" />