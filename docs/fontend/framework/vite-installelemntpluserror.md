---
title: vue3+vite安装element-plus报错解决-使用组件不起作用
collapsable: true
autoGroup-2: Vue3基础
---

## vue3+vite安装element-plus报错解决-使用组件不起作用

## 快速导航

<TOC />

## 前言

在刚开始使用`vue3+vite+ts`项目中安装`element-plus`，使用组件不起作用，报错如下：
```
UnCaugh SyntaxError:The requested module '/node_modules/element-plus/lib/locale/lang/zh-cn.js?v=7.0.2' does not provide an export named 'default'       
```

## 解决方案

1. 删除`node_modules`文件夹和`package-lock.json`文件

2. 修改`package.json`

3. 修改`Vue`版本号,必须`3.3.2`以上

4. 安装`element-plus`,重新`npm install i --force`,强制安装,否则会报错

## element-plus找不到样式

在`main.js`中,找到引入`element-plus`样式

解决也很简单，既然自己已经安装了`element-plus`依赖，却找不到文件，大概率是路径变了。于是手动翻了下`node-modules`，发现果然整个`theme-chalk`文件夹都被挪了位置

旧版本安装位置
```js
import 'element-plus/lib/theme-chalk/index.css';   // 这里巨坑,路径问题
```
新版本安装位置
```js
import 'element-plus/dist/index.css';
```
如果发现样式问题,那大概率是引入样式的位置问题

## 总结 

`element-plus`使用与`ElementUI`没啥多大区别,但是是有些坑的,需要踩


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

