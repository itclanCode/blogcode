---
title:了解PHP-入门
---

## 了解PHP-入门

<TOC />

## PHP是什么

`PHP` 是一种创建动态交互性站点的强有力的服务器端脚本语言， `PHP` 文件通常包含 `HTML` 标签和一些 `PHP` 脚本代码

`Hypertext Preprocessor`，超文本预处理器。是一种免费开源服务器端脚本语言，默认文件扩展名是 `.php `，可以嵌入到网页代码中，生成动态页面，是目前网站开发使用最多的一种编程语言

`PHP` 是免费的，并且使用非常广泛。同时，对于像微软 ASP 这样的竞争者来说，PHP 无疑是另一种高效率的选项

## PHP运行环境

`PHP` 脚本在服务器上执行，然后将纯 `HTML` 结果发送回浏览器。 `PHP`代码可以放在文档中的任何位置。 

`PHP` 脚本以`<?php` 开始，以 `?>` 结束，如
```js
<?php 

echo "Hello World!"; 

?> 
```

`PHP` 文件的默认文件扩展名是`.php`

## PHP文件是什么?

* PHP文件可包含文本,HTML,JavaScript代码和PHP代码
* PHP代码服务器上执行,结果以纯HTML形式返回给浏览器
* PHP文件默认文件拓展名是".php"

## PHP能做什么?

* PHP可以生成动态页面内容
* PHP可以创建,打开,读取,写入,关闭服务器上的文件
* PHP可以收集表单数据
* PHP可以发送和接收cookies
* PHP可以添加,删除,修改你数据库中的数据
* PHP可以限制用户访问你网站上的一些页面
* PHP可以解密数据

通过PHP,你不在限于输出`HTML`,你可以输出图像,PDF文件,甚至Flash电影,甚至可以输出任意的文本,比如`XHTML`和`XML`

## 为什么使用PHP

* PHP可以在不同的平台上运行(windows,Linux,Unix,Mac OSX等)
* PHP与目前几乎所有正在被使用的服务器相兼容(Apache,IIS)
* PHP提供了广泛的数据库支持
* PHP是免费开源的
* PHP易于学习,并且高效的运行在服务器端


## PHP安装

为了开始使用 `PHP`，您可以找一个支持 `PHP` 和 `MySQL` 的 `Web` 主机 ，在您自己的 `PC` 机上安装 `Web` 服务器，然后安装 `PHP` 和 `MySQL` 使用支持 `PHP` 的 `Web` 主机 如果您的服务器支持 `PHP`，那么您不需要做任何事情。 只要在您的 web 目录中创建 `.php` 文件即可，服务器将自动为您解析这些文件

## PHP安装需要做什么

* 找一个支持PHP和MySQL的web主机
* 在自己的pc机上安装web服务器,然后安装PHP和MySQL

## 使用支持PHP的web主机

如果你的服务器支持 PHP，那么您不需要做任何事情。

只要在您的 `web` 目录中创建 `.php` 文件即可，服务器将自动为您解析这些文件。

您不需要编译任何软件，或安装额外的工具。

由于 `PHP` 是免费的，大多数的 `Web `主机都提供对` PHP `的支持。

## 在自己电脑上安装PHP

* 安装web服务器
* 安装PHP
* 安装数据库,比如:MySQl

## 推荐安装集成环境

建议使用集成的服务器组件，它已经包含了 `PHP`、`Apache`、`Mysql` 等服务,免去了开发人员将时间花费在繁琐的配置环境过程。

* PHPStudy
* wampServer(windows系统可以使用,支持32位和64位)
* XAMP
* MAMP

<footer-FooterLink :isShareLink="false" :isDaShang="true" />