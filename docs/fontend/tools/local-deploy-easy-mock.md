---
title: 本地部署 easy-mock
---

## 本地部署 easy-mock

## 快速导航

<TOC />

## 前言

如今的一些项目都是前后端分离,在后端接口没有出来之前,前端往往可以模拟真实的数据,等待真实接口开发完后,替换成真实的接口就可以了的,easy-mock 就是一个非常棒的可视化模拟接口的工具,能够快速生成模拟数据

easy-mock 集成了 swagger 与 mock.js,让前端模拟假数据更简单,但是官方的 easy-mock 因为开箱即用,用户太多了的,所以 easy-mock 经常崩掉,现在官网已经挂掉了的

因为项目需要,所幸就自己在本地部署的

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclancode/blogImgAssets@master/local-deploy-easy-mock/1611286828677-01-Easy-Mock.png" alt="easy-mock" />
</div>

## 安装 Redis

- 下载地止:[下载 redis-x64-3.0.504.zip](https://github.com/microsoftarchive/redis/releases)
    <div align="center">
        <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclancode/blogImgAssets@master/local-deploy-easy-mock/1611287029150-02-install-redis.png" alt="redis" />
    </div>
  解压缩redis安装包,进入文件夹,在该目录终端下(可通过cmd打开):并输入

```js
redis-server.exe redis.windows.conf
```

## 安装 MongoDB

⒈ [下载 MongoDB](https://www.mongodb.com/download-center/community)

安装 MongoDB 与安装其他什么软件没有什么区别,点击`Next`即可,安装在自己想要的磁盘目下即可

::: tip 注意
注意自己的 redis 安装在磁盘哪个目录下,不要一顿下一步,下一步,最后不知道 radis 安装在哪个盘上的
:::

⒉ 进入安装目录,进入`\data`,建一个文件夹,取名`db`

⒊ 启动`Mongodb`

在 redis 目下的`\bin`下打开`cmd`,即输入

```js
mongod --dbpath D:\software\mongodb\data\db (路径根据个人安装情况而定)
```

::: tip 注意
--dbpath 是指定数据库存放目录，要注意 dbpath 前有两个“-”
:::

⒋ 在浏览器输入：`http://localhost:27017/`，你会看到

```js
It looks like you are trying to access MongoDB over HTTP on the native driver port.
```

如果看到这样,表示 redis 配置成功

## 部署 easy-mock

因为用的是大搜车技术团队,直接克隆仓库到本地部署即可

⒈ 克隆 easy-mock 仓库并安装依赖包

```js
$ git clone https://github.com/easy-mock/easy-mock.git
$ cd easy-mock && npm install
```

⒉ 更改`easy-mock\config`文件夹下的配置文件`default.json`,将 host 改为`localhost`

```js
{
  "port": 7300,
  "host": "localhost",  // 需要将这里更改为localhost
  "pageSize": 30,
  "proxy": false,
  "db": "mongodb://localhost/easy-mock",
  "unsplashClientId": "",
  "redis": {
    "keyPrefix": "[Easy Mock]",
    "port": 6379,
    "host": "localhost",
    "password": "",
    "db": 0
  },
  "blackList": {
    "projects": [],
    "ips": []
  },
  "rateLimit": {
    "max": 1000,
    "duration": 1000
  },
  "jwt": {
    "expire": "14 days",
    "secret": "shared-secret"
  },
  "upload": {
    "types": [".jpg", ".jpeg", ".png", ".gif", ".json", ".yml", ".yaml"],
    "size": 5242880,
    "dir": "../public/upload",
    "expire": {
      "types": [".json", ".yml", ".yaml"],
      "day": -1
    }
  },
  "ldap": {
    "server": "",
    "bindDN": "",
    "password": "",
    "filter": {
      "base": "",
      "attributeName": ""
    }
  },
  "fe": {
    "copyright": "",
    "storageNamespace": "easy-mock_",
    "timeout": 25000,
    "publicPath": "/dist/"
  }
}
```

::: tip 注意
要在 `Redis` 和 `MongoDB` 已经启动了的条件下部署 easy-mock
:::
⒈ 启动 redis

进入`D:\software\redis`文件夹,并在终端 cmd 下中输入

```js
redis-server.exe redis.windows.conf
```

⒉ Mongo DB 启动方式

在`MongoDb`中的`D:\software\mongodb\bin`下打开`cmd`,输入

```js
mongod --dbpath D:\software\mongodb\data\db (路径根据个人安装情况而定)
```

⒊ 在启动`redis`和`MongoDB`之后,启动`easy-mock`

```js
npm run dev
```

⒋ 在浏览器中输入`http://localhost:7300`,即可成功

<div align="center">
    <img class="medium-zoom lazy"  loading="lazy"  src="https://cdn.jsdelivr.net/gh/itclancode/blogImgAssets@master/local-deploy-easy-mock/1611286828677-01-Easy-Mock.png" alt="easy-mock" />
</div>

## 或许会遇到的问题

如果无法访问网站,打不开,貌似是因为 node 版本太高,网上说替换成 `node 8.9.0` 版本就能部署成功

所以下载本地的 node,重新安装 node 8.9.0 版本的

- [下载安装 node-v8.9.0 版本](https://nodejs.org/download/release/v8.9.0/node-v8.9.0-x64.msi)

但我是一路下来,没有遇到版本问题,估计这个问题已经被官方给修复了的,如果启动不起来,在排除 redis 和 mongoDB 没有问题,如果 easy-mock 依然启动不起来,那就尝试替换 node 版本的

## 总结

当你本地部署 easy-mock 后,就可以愉快的 mock 数据了,整个过程非常 happy,在也不怕奔溃了的,但是这种本地部署,有一个弊端就是

只能在本地玩玩,如果想要支持线上的,那么可以将 easy-mock 部署到服务器上的,可以部署在内网,也可以部署支持外网.

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
<footer-AvoidCopy />