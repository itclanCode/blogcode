---
title: vuejs中缓存组件状态-keepAlive
---

## vuejs中缓存组件状态-keepAlive

## 快速导航

<TOC />

## 前言

在 `vuejs`中，我们经常需要缓存一些组件的状态，比如用户登录后，切换到其他页面，再切换回来，需要保留之前的登录状态，而不是重新登录。

或者在切换不同组件的时候，需要保留之前的组件状态，而不是重新加载。如果你什么都不设置

你会发现，之前已更改的状态都被重置了。

在切换时创建新的组件实例通常是有意义的，但在有些情况下，我们的确想要组件能在被“切走”的时候保留它们的状态。要解决这个问题，我们可以用 `<KeepAlive>` 内置组件将这些动态组件包装起来

## 代码示例

```html
<!-- 非活跃的组件将会被缓存！ -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```
## 包含(include)与排除(exclude)

`<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 `include` 和 `exclude` 的`prop` 来控制组件的缓存与不缓存的。这两个 `prop` 的值都可以是一个以英文逗号分隔的字符串、一个正则表达式，或是包含这两种类型的一个数组
```html
<!-- 以英文逗号分隔的字符串,a,b代表的是组件 -->
<KeepAlive include="a,b">
  <component :is="view" />
</KeepAlive>

<!-- 正则表达式 (需使用 `v-bind`) -->
<KeepAlive :include="/a|b/">
  <component :is="view" />
</KeepAlive>

<!-- 数组 (需使用 `v-bind`),如果有多个,可以用一个数组 -->
<KeepAlive :include="['a', 'b']">
  <component :is="view" />
</KeepAlive>
```
它会根据组件的 `name` 选项进行匹配，所以组件如果想要条件性地被 `KeepAlive `缓存，就必须显式声明一个 `name `选项

::: tip 注意事项
使用`<script setup>` 的单文件组件会自动根据文件名生成对应的 `name` 选项，无需再手动声明
:::

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

