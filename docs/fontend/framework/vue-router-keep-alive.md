---
title: vuejs中如何实现动态路由切换及路由的缓存
autoGroup-3: Vue基础
---

## vuejs中如何实现动态路由切换及路由的缓存

## 快速导航

<TOC />

## 前言

我们知道在`vue`项目里,实现路由的跳转是使用`router-link`标签,由于导航链接不止一个,在模板里写死导航的话,不是很灵活

我们往往是结合现成的UI框架,一些现成的组件,快速的去实现我们的导航,路由的跳转等

而当切换导航时,若有表单数据,想要保留表单的数据,那应该怎么实现呢

## 使用vue-router

### 1. 安装vue-router

```js
npm install -D vue-router@3   // 注意:如果没有加后面的3,默认安装的是vue-router@4.0的版本
```

### 2. 引入vue-router

导入`Vue`和`VueRouter`，还要调用`Vue.use(VueRouter)`
```js
import Vue from 'vue';   // 引入vue
import VueRouter from 'vue-router';   // 引入vueRouter,引入VueRouter函数
```

### 3. 调用Vue.use(VueRouter)

```js
// 省略...
// 使用插件的方式注入
Vue.use(VueRouter);
```

### 4. 引入路由组件

通过`import`关键字引入在`pages`文件夹下定义好的路由组件
```js
import XXX from 'xxxx.vue'
```
### 5. 定义路由

每个路由应该映射一个组件。 其中`component` 可以是静态组件,也可以是懒加载组件
```js
const routes = [
   {
     name:'组件名称1',
     path: '路径1',
     component: xxx1,  // 组件名
   },
    {
     name:'组件名称2',
     path: '路径2',
     component: xxx2,  // 组件名
   },
]
```
### 6. 构造VueRouter实例化对象

使用`new VueRouter`创建 `router` 实例，接收一配置对象,然后传 `routes` 配置
```js
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
```
### 7. 创建和挂载根实例

导出路由`router`对象,然后在根实例中注入

要通过 `router` 配置参数注入路由

```js
const app = new Vue({
  router
}).$mount('#app')
```

### 8. 模板中使用`router-link`

在模板中使用`router-link`结合`to`进行路由的设置和跳转
```js
<router-link to='路径'></router-link>
```

## 实现路由切换

在模板中我们使用`router-link`实现路由的跳转,并且要展示的内容视图,使用`router-view`代码如下所示
```js
<template>
  <div id="app">
      
      <router-link :to="item.path" v-for="item in routers" :key="item.path" >{{item.name}}</router-link>
    
      <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      routers: [
        {
          path: '/recent',
          name: '最新文章'
        },
        {
          path: '/fontend',
          name: '前端'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```
那在路由文件中如何进行配置呢,如下代码所示
```js
import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 实例化router对象
const router = new VueRouter({
    routes: [
        {
            path: '/recent',
            name: 'recent',
            component: () => import('../pages/RecentArticle/RecentArticle.vue')   // 路由的懒加载
        },
        {
            path: '/fontend',
            name: 'fontend',
            component: () => import('../pages/FontEnd/FontEnd.vue')
        },
    ],
    
})



export default router;
```
此时经过这样操作之后,可以实现路由的切换和展示,但是问题来了,我想要给当前激活路由添加样式,用于区别未激活的路由,那该怎么办?

## 如何设置当前路由激活的样式

在`vue-router`路由的实例化对象配置中,可以设置一个`linkActiveClass`的属性,全局配置激活`class`的样式

```js
const router = new VueRouter({
    linkActiveClass: 'active',   // 后面是自己自定义的激活类名
    // 其他不变
})

```
在对应的组件中添加激活样式的类名
```js
.active {
    color: red;
}
```
当然，你也可以在`router-link`上局部添加
```html
<router-link active-class="active" to="路径"></router-link>
```


## 如何设置默认路由

当我们启动一个项目时,希望它自动的跳转到我们指定的路由上,也就当用户访问`https://域名/端口/`时,默认的跳转到一个路由上,这个该怎么实现呢

是通过路由的重定向(`redirect`)实现的,同样是在`routes`中进行配置,如下代码所示
```js
import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 实例化router对象
const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',              // 访问根路径时
            // redirect: '/recent'  // 重定向到某个路由
            redirect: {             // 与上面等价
                name: 'recent'
            }
        },
        {
            path: '/recent',
            name: 'recent',
            component: () => import('../pages/RecentArticle/RecentArticle.vue')   // 路由的懒加载
        },
        {
            path: '/fontend',
            name: 'fontend',
            component: () => import('../pages/FontEnd/FontEnd.vue')
        },
    ],
    
})



export default router;
```
当我们访问网站时,由于设置了重定向,默认的会跳转到指定的路由组件上,可以直接使用`redirect: '路径'`,或者使用`redirect: { name: '路由命名'}`

## 当访问的页面路由不存在时跳转到404

当用户访问的页面不存在时,手动输入的路由不存在,可以直接重定向到首页,也可以直接展示一个404页面

使用的是`*`符号,会进行全局匹配,如果没有匹配到相对应的路由,那么就重定向到这个`notFound`路由页面

```js
{
    path: '/404',
    name: 'notFound',
    component: notFound
 },
{
    path: "*",
    redirect: {
        name:'notFound'
    },
    component: notFound
},
```
## 使用ElementUI组件实现导航切换

上面我们是使用`vue-router`中提供的`router-link`实现的路由跳转,但我们在实际项目开发里,都是使用现成的一些UI框架

进行快速的开发,毕竟用现成的UI框架,开发快,对于要求不是很严格的项目,使用成熟的UI框架,就是要快,能快速实现业务即可

哪有那么多时间和精力,让你造轮子,写css样式呢

这里我以`elementUI`框架为例,如果你是`vue3`的项目,可以使用`elementplus`

### 1. 安装elementUI

```js
npm install -D element-ui
```
### 2. 引入ElementUI

这里以全局引入,在`main.js`中引入如下内容（当然也是可以按需引入的）
```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

```
然后我们将原先的代码替换成`elementUI`组件当中的**按钮样式的单选组合**组件,如下代码所示
```html
<template>
  <div id="app">
      <el-radio-group v-model="radio" v-for="item in routers" :key="item.name" @change="handleRadioRoute">
          <el-radio-button :label="item.path">{{item.name}}</el-radio-button>
      </el-radio-group>
      <!-- 内容展示 -->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      radio: '/recent',
      routers: [
        {
          path: '/recent',
          name: '最新文章'
        },
        {
          path: '/fontend',
          name: '前端'
        }
      ]
    }
  },
  methods: {
    // 绑定事件
    handleRadioRoute(val){
       console.log(val);
       this.$router.push({
          path:val
       })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

```
对比之前的实现,如下代码所示，是使用`router-link`实现
```html
<template>
  <div id="app">
      
      <router-link active-class="active" :to="item.path" v-for="item in routers" :key="item.path" >{{item.name}}</router-link>
    
      <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      routers: [
        {
          path: '/recent',
          name: '最新文章'
        },
        {
          path: '/fontend',
          name: '前端'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  color: red;
}
</style>

```
你会发现,如果你使用的是`btton`组件进行路由的跳转,那么就需要使用`vue-router`中的编程式导航,也就是`this.$router.push({})`这种方式

我们发现,上面的编程式导航实现的路由跳转不是很优雅



<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />