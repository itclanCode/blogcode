---
title: TypeScript可能会问题
autoGroup-4: TypeScript常见问题
---

## vscode终端使用tsc命令无法将ts文件转化为js文件

## 快速导航

<TOC />

## 背景

在vscode终端中,执行`tsc xxx.ts`时,执行失败,无法将ts文件转化为`js`文件,显示错误如下所示
```js
VS Code: 无法加载文件 C:\Users\Administrator\AppData\Roaming\npm\tsc.ps1,因为在此系统上禁止运行脚本
```

## 原因

你的PC禁止运行脚本

## 解决办法

![windows电脑](https://img.it610.com/image/info8/0ff6a062509e4beaa88dcdc62efe9580.jpg)

终端下输入
```js
set-ExecutionPolicy RemoteSigned
```
确认Y

![](https://img.it610.com/image/info8/27c49729ece64065ba2135bc7991e736.png)

最终在vscode中执行tsc命令,与之相关类似的问题,都是如此

