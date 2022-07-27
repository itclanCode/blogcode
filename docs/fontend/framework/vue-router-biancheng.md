---
title: vuejs中的编程式导航Vs声明式导航
autoGroup-3: Vue基础
---

## vuejs中的编程式导航Vs声明式导航

## 快速导航

<TOC />

## 前言

在`vue`当中实现链接的跳转,通过使用的是`vue`提供的`router-link`标签,并结合`to`属性去跳转,这种可直接在模板中进行使用

我们称为它是声明式的导航,但有时,我们项目里,写的不是`router-link`而是一个`button`组件,或是需要有一定的异步逻辑处理,同样要实现跳转

那么这个时候,`router-link`就无法满足实现了的,这时候编程式导航就可以满足我们的需求的

它等价于`router-link`,是`vue`提供的一种通过调用`vue`实例`API`的方法实现的,它的概念名字比较抽象,你可以把编程式导航理解成,它是通过`js`的方式去实现类似`router-link`的功能不

不借助`router-link`的方式实现链接跳转，而是通过`Vue`实例的方法实现跳转

使路由的跳转更加灵活,自由


## 具体的实现

其实,编程式导航非常简单,是使用`Vue`的两个实例方法`this.$router.push`和`this.$router.replace`实现的


### this.$router.push(path)

点击路由链接,可以返回到当前的路由界面,它是一种队列方式呈现的,先进先出

```js
this.$router.push({
    name: '路由规则配置的名字'  // 定义在路由规则的name名字,保持一致,而非定义组件时的name名字,
    params: {                // 如果是query形式,那么这里就是query
        id:'11',
        name: 'itclan.cn'
    }
})
```
### this.$router.replace(path)

用心的路由去替换当前的路由,也就是没有历史记录,前进和后退,没法返回到当前路由界面,它是以栈的方式呈现的,先进后出

```js
this.$router.replace({
    name: '路由规则配置的名字',
    params: {
        id:'22',
        name: 'itclanCoder'
    }
})
```
### this.$router.forward

`this.$router.forward()`表示前进

### this.$router.back

`this.$router.back()` // 表示后退

### this.$router.go

`this.$router.go(正数/负数)`,若为正数,则表示前进几步,若为负数,则后退几步

## 总结

总得来说,在`vue`当中实现路由的跳转,有两种方式,一种是声明式`router-link`的方式,另一种就是通过`vue`的实例方法`this.$router.push`或`this.$router.replace`实现

前者具备历史的前进和后退,默认就是这种方式,而后者是替换当前的路由

非常简单

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />