---
title: vuejs中路由的传参以及路由props配置
autoGroup-3: Vue基础
---

## vuejs中路由的传参以及路由props配置

## 快速导航

<TOC />

## 前言

在`Vue`项目里,去实现左侧菜单边栏多级内容的展示,导航的切换,以及内容链接的跳转等,用的都是前端路由`vue-router`,它的重要性,不可言喻

下面介绍一下`Vue中的路由传参以及路由的prps配置`

## 方式1-使用query方式

这里循环遍历一个列表为例,`query`的方式,跳转的`url`后面携带的一些具体的参数,比如下面的携带`id`,和`name`
* `to`字符串的写法
```js
<router-link :to="`/new/detail?id=${item.id}&name=${item.name}`">{{item.name}}</router-link>
```
* `to`对象的写法
```html
 <router-link :to="
    {
      path: '/new/detail',
      query:{
        id: item.id,
        name: item.name
    }
}">{{item.name}}
</router-link>
```
以上对象的写法,相比于字符串的写法,虽然麻烦了一点,但是比较清晰,当传入的参数比较多时,比较适合,而且也易维护

如下是完整的组件代码,定义了一个`NewCom.vue`的组件
```html
<template>
    <div>
        <ul>
            <li v-for="item in lists" :key="item.id">
                <router-link :to="`/new/detail/?id=${item.id}&name=${item.name}`">{{item.name}}</router-link>
            </li>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'NewCom',
        data() {
            return {
                lists: [
                    {
                        id: "1",
                        name: 'IT资源网',
                        url: 'https://itclan.cn'
                    },
                    {
                        id: '2',
                        name: 'itclanCoder',
                        url: 'https://coder.itclan.cn'
                    },
                    {
                        id: '3',
                        name: '客来影视TV',
                        url: 'https://video.itclan.cn'
                    },
                    {
                        id: '4',
                        name: '发卡商城',
                        url: 'https://faka.itclan.cn'
                    },
                    {
                        id: '5',
                        name: '爱客来科技',
                        url: 'https://aikelaidev.cn'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
ul,li {
    list-style: none;
}
</style>
```
那组件的另一边如何去接收传递过去的参数呢,通过`this.$route.query`的方式进行接收
```html
 <p>{{this.$route.query.id}} {{this.$route.query.name}}</p>
```
## 命名路由

在路由跳转时,`to`后面跟着路径这种写法是没什么问题的,但会发现,也很麻烦,有时,通过一个名称来标识一个路由,就会显得更方便一些的,特别是在链接一个路由,或是执行一些跳转的时候,你可以在创建`Router`实例的时候

在`routes`配置中某个路由设置名称,如下代码所示

```js
import VueRouter from "vue-router"

import New from   "../components/NewCom.vue";
import About from "../components/AboutCom.vue";
import Detail from "../components/DetaiCom.vue";

// 创建router示例对象
const router  = new VueRouter({
    routes: [
        {
            name: 'new',
            path: '/new',
            component: New,
            children: [
                {
                    name: "detailPage",   // 用name命名路由的名称
                    path: 'detail',
                    component: Detail
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router;
```
那么另一边路由跳转时,直接使用`name`就可以了,不用写具体的路径`path`了的,如下所示
```html
 <router-link :to="
       {
        name: 'detailPage', // 此处使用name就可以了的,其他的不变
        query: {
          id: item.id,
          name: item.name
       }
 }">{{item.name}}</router-link>
```
命名路由,其实就是可以简化路由的跳转
```html
<!--简化前,需要填写完整的路径-->
<router-link to="/new/detail"></router-link>
<!-- 简化后,直接通过名字跳转 -->
<router-link :to="{name:'detailPage'}"></router-link>
<!--简化写法配合query传递参数-->
<router-link :to="{
    name: 'detailPage',
    query: {
        id: '111',
        name: 'itclan.cn'
    }
}">
</router-link>
```
推荐使用命名路由,在调试和寻找组件的时候,可以根据路由的名字,排查问题

## 路由的params参数

这个路由的`params`参数,简单一点来说就是路径的的参数,并不是像`query`一样那么直观,而是如下所示,路径最后面的`/1/IT资源网`是`params`参数,它是动态的
```js
http://localhost:8080/#/new/detail/1/IT资源网
```
在官方文档里,这种被北城动态路由的匹配,就是把某种模式匹配到的所有路由,全都映射到同一个组件上,比如这个`detail`组件

对于所有`id`各不同的详情页,都要使用这个组件来渲染,那么在定义路由规则,配置时,就可以使用**动态路径参数**；来实现,如下所示
```js
import VueRouter from "vue-router"

import New from   "../components/NewCom.vue";
import About from "../components/AboutCom.vue";
import Detail from "../components/DetaiCom.vue";

// 创建router示例对象
const router  = new VueRouter({
    routes: [
        {
            name: 'new',
            path: '/new',
            component: New,
            children: [
                {
                    name: "detailPage",   // 用name命名路由的名称
                    // path: 'detail',   // 非动态路由设置
                    // 动态路径参数，以冒号开头:参数名
                    path: 'detail/:id/:name', // 使用占位符声明接收的params参数
                    component: Detail
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router;
```
那在组件中如何传递参数呢,如下所示
```html
 <router-link :to="`/new/detail/${item.id}/${item.name}`">{{item.name}}</router-link>
```
或如下对象的写法
```html
<router-link :to="
{
    name: 'detailPage',
    params: {
    id: item.id,
    name: item.name
    }
}
">{{item.name}}</router-link>
```
两种写法:归纳一下
```html
<!--跳转并携带params参数,to的字符串写法-->
<router-link :to="/new/detail/1/IT资源网">新闻</router-link>
<router-link :to="{name: 'detailPage',params: {id:1,name:'IT资源网'}}">

```
特别注意:
路由携带`params`参数时,若使用`to`的对象写法,则不能使用`path`配置项,必须使用`name`配置

另一边组件如何接收的？**通过`this.$route.params`**可以进行接收

## query与params的区别

1. `params`传参,必须使用命名路由方式传参
```js
<router-link :to="
{
    path: '/new/detail', // 如果是params,动态路由方式,这种方式是不生效的
    params: {
    id: item.id,
    name: item.name
    }
}
">{{item.name}}</router-link>
```
2. `params`传参,不会显示在地止栏上,会保存在内存中,刷新会丢失，可以配合本地存储`localStorage`进行使用
3. `query`的参数会显示在地止栏上,不会丢失

## 路由的props配置

让路由组件更方便的收到参数

我们知道在`Vue`中子组件接收父组件传递过来的数据,是用`props`进行接收,那么同样路由组件也是可以这么操作的

在接收传递过来的参数的组件,使用`$route`会与路由紧密耦合,但是不是很灵活,会写一堆的`this.$route.params`或`this.$route.query`这样的代码去读取传递过来的参数

### 路由配置的布尔模式

当 `props` 设置为 `true `时，`route.params` 将被设置为组件的 `props`
它是在对应的路由组件配置,设置`props:true`,如下所示

```js
// 省略
// 创建router示例对象
const router  = new VueRouter({
    routes: [
        {
            name: 'new',
            path: '/new',
            component: New,
            children: [
                {
                    name: "detailPage",   // 用name命名路由的名称
                    // path: 'detail',   // 非动态路由设置
                    path: 'detail/:id/:name', // 使用占位符声明接收的params参数
                    component: Detail,
                    props: true   // 此处设置props: true
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})

export default router;
```
那么在接收使用参数的组件,通过`props: ['参数1','参数2']`
```html
<template>
    <div>
        <!-- 直接在模板中可以使用 -->
       <p>{{id}} {{name}}</p>
    </div>
</template>

<script>
    export default {
        name: 'DetailCom',
        props: ['id','name'],   // 通过props进行接收
        mounted() {
            console.log(this.$route);
        }
    }
</script>
```
### 路由配置的对象模式

我们有时候,不仅仅是需要传入动态的参数,也需要传入静态的参数(写死的参数)传给路由组件,那么这个时候,`props`对象模式就会很有用,如下所示
```js
const router  = new VueRouter({
    routes: [
        {
            name: 'new',
            path: '/new',
            component: New,
            children: [
                {
                    name: "detailPage",   // 用name命名路由的名称
                    path: 'detail/:id/:name', // 使用占位符声明接收的params参数
                    component: Detail,
                    props: {         // 对象形式,静态参数
                       url: 'https://itclan.cn' 
                    }
                }
            ]
        },
    ]
})
```
在路由组件接收使用参数,依旧使用`props:['url']`进行接收

注意的是:当`props`为对象时,那么动态的参数,就失效了,只有静态参数才有用

所以接下来介绍的路由函数模式,就可以兼顾动态的路由参数与静态参数的结合

### 路由配置函数模式

`props`值为函数,该函数返回的对象中每一组`key-vaue`都会通过`props`传给路由组件

这种方式很好的解决了路由组件传参中对象模式的弊端,可以兼顾静态参数与动态参数

如下所示

```js
// 创建router示例对象
const router  = new VueRouter({
    routes: [
        {
            name: 'new',
            path: '/new',
            component: New,
            children: [
                {
                    name: "detailPage",   // 用name命名路由的名称
                    path: 'detail/:id/:name', // 使用占位符声明接收的params参数
                    component: Detail,
                    props(route) {       // props值为函数形式,接收一个参数route,并且返回一个对象
                        return {
                            id: route.params.id,
                            name: route.params.name,
                            url: 'https://itclan.cn'
                        }
                    }
                }
            ]
        },
    ]
})

export default router;
```
其中,上面的可以简写成
```js

// 可以对参数进行解构
   props({params}) {
         return {
            id: params.id,
            name: params.name,
            url: 'https://itclan.cn'
         }
   }
    // 对象的解构以及连续赋值,语义化不明确,不推荐
    props({params: {id,name}}) {
       return {
          id,
          name,
          url: 'https://itclan.cn'
      }
  }
```
其中,最原始的这种写法最为常见
```js
props(route) {
       return {
          id:route.params.id,  // 如果是query，则也类似
          name:route.params.name,
          url: 'https://itclan.cn'
      }
  }
```

让路由组件接收参数时,能够更加的灵活,不需要写很多重复`this.$route.query`或`this.$route.params`这样的代码,这样的写法是最强大的

## 总结

关于`Vue`中的路由传参以及`props`的配置就介绍到这里,其中传参有两种方式,一种是`query`,另一种就是`params`,前者通过`url`后面跟着参数

,而通过`this.$route.query`进行接收参数,后者,是在路由规则配置中的`path`路径中,以冒号`:`形式动态路由参数的配置,通过`this.$route.params`方式进行接收参数

两种方式各有特点

光看官方文档是理解不了的,这个必须得自己动手写代码测试,才能知道这两种方式的区别,路由的传参是一个非常重要的知识点

而路由组件的`props`配置则是更好的接收参数,让接收参数更加的灵活


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

