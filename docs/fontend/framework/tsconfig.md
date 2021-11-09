---
title: tsconfig配置介绍
autoGroup-5: TypeScript基础
---

## tsconfig配置文件

## 生成tsconfig文件生成

根目录下初始化,该文件为一些配置文件,把所有的ts文件转化为es5,而不是单独的使用tsc命令对ts文件进行转化

::: tip 终端下执行tsc命令可将所有的ts文件转化为js
tsc 
:::

```js
tsc --init
```

## 自动保存将ts文件转化为js文件

借助`TypeScript Auto Compiler`插件,可以实现不用手动编译,vscode会自动的将ts转化为js

