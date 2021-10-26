---
title: 安装某些包失败
---

## 快速导航

<TOC />

## npm-安装某些包失败

有时候,在使用某些`cli`或者`命令`的时候,会报这个错误

<div align="center">
<img class="medium-zoom lazy" loading="lazy" src="../images/npm/install-fail.png" alt="安装包失败" />
</div>

安装某些包时,总是安装不上,启动项目总是失败

遇到此类问题可以尝试如下操作:

- 清除`npm`缓存,`npm cache clean -f`
- 删掉本地的`node_modules`,重新使用`cnpm`或`yarn`重新安装
- 将错误翻译出来,然后直接复制到浏览器,查看有没有同样遇到的问题的
- 去错误日志文件内,看具体的报错信息
- 根据错误信息去相应的目录下,把相应`npm`中的`node_modules`给删掉,重新在安装

<div align="center"> 
<img class="medium-zoom lazy" loading="lazy" src="../images/npm/solve-install-fail.png" alt="解决错误信息" />
</div>

::: tip 提醒
推荐使用`yarn`进行安装某些插件和安装包,因为`npm`有时候,`npm` 会生成错误的依赖树,导致安装某些插件安装不上,即使安装上了,在执行`npm run dev`启动项目时,会报错,影响项目的启动
:::
