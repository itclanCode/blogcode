---
title: 切换安装源
---

## 快速导航

<TOC />

## 切换安装源

因为 npm 服务器在国外的原因,有时,在本地安装一下包依赖时会很慢,有时也拉不下来,令人捉急,这时可以使用国内的淘宝镜像源,它与`npm`是同步的,同步频率目前为 `10分钟`, 一次以保证尽量与官方服务同步,官方文档链接[cnpm 文档](https://developer.aliyun.com/mirror/NPM?from=tnpm)

`cnpm`的使用基本与`npm`一致

- ### 如何查看 npm 的镜像源

使用`npm config get registry`,可以查看当前镜像源,默认是国外的

```
npm config get registry
https://registry.npmjs.org/
```

- ### 修改成淘宝的镜像源

使用`npm config set registry`替换成淘宝的镜像源,以后使用`npm`安装包时,就会从淘宝的镜像源中拉,而不是从官方`npm`市场里安装了的

```
npm config set registry https://registry.npm.taobao.org
```

上面的也可以在一开始就这样的,全局替换安装`cnpm`

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
