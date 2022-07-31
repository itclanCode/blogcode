---
title: vuejs中的路由全局前置守卫-全局后置路由守卫及独享路由守卫-组件内的守卫
autoGroup-3: Vue基础
---

## vuejs中的路由全局前置守卫-全局后置路由守卫及独享路由守卫-组件内的守卫

## 快速导航

<TOC />

## 前言

对于前端路由守卫,只要做过后台权限管理系统的前端,多少都会接触到,**本质上就是为了保护访问路由的访问权限,也就是对路由权限进行控制**

只有在允许特定的情况下才能访问某个固定的路由,具备查看某些页面的权限,比如:未登录系统之前,禁止直接访问用户个人中心等

主子账户的权限设置等,路由守卫是一个非常重要的知识点,一起来学习一下的

## 全局前置守卫-beforeEach

全局前置守卫,初始化时执行,每次路由切换前执行,如下代码所示
```js
const router = new VueRouter({ ... })
// 在导出路由实话对象之前进行拦截使用
router.beforeEach((to, from, next) => {
  // 具体的逻辑
  // to:即将要进入的路由
  // from: 从哪个路由来的即当前导航正要离开的路由
  // next: 放行,进行管道中的下一个钩子  
})

export default router;
```
一般我们在切换路由之前,可以根据后台返回的一些字段,信息进行逻辑判断,从而控制路由的跳转
```js
import Vue from 'Vue';
import VueRouter from 'vue-router';
// 使用路由插件
Vue.use(VueRouter);
const router = new VueRouter({...})
// 全局前置路由
router.beforeEach((to,from,next) => {
  if(to.path === 'html' || to.path === '/fontend/javaScript' || to.path === '/fontend/css' ) {
    if(localStorage.getItem('role') === 'admin') {
      next();
    }else {
      alert("无权限查看");
    }
  }else {
    next();
  }
})

export default router
```
如果不使用`path`进行比较,使用`name`比较,也是可以的,如下代码所示
```js
router.beforeEach((to,from,next) => {
  if(to.name === 'Html' || to.name == 'JavaScript' || to.name==='Css') {
    if(localStorage.getItem('role') === 'admin') {
          next();
    }else {
          alert("无权限查看");
    }
  }else {
    next();
  }
})
```
上面的依旧比较复杂,我们往往为了方便,一般都是在路由的元信息`meta`里面添加一个字段标识,来对我们的路由进行访问权限的控制
如下所示
```js
const router = new VueRouter({
  routes: [
    {
      path: '/fontend/html',
      name: 'Html',
      component: () => import("@/videws/fontend/html"),
      meta: {
        isAuthenticated: true  // 表示需要有权限的控制
      }
    },

    {
      path: '/fontend/javaScript',
      name: 'JavaScript',
      component: () => import("@/videws/fontend/javaScript"),
      meta: {
        isAuthenticated: true  // 表示需要有权限的控制
      }
    },

    {
      path: '/fontend/css',
      name: 'Css',
      component: () => import("@/videws/fontend/css"),
      meta: {
        isAuthenticated: true  // 表示需要有权限的控制
      }
    }
  ]
})

router.beforeEach((to,from,next) => {
  // 这里就直接可以通过访问meta下的isAuthenticated
  // 判断当前路由是否需要进行权限控制
  if(to.meta.isAuthenticated) {
    if(localStorage.getItem('role') === 'admin') {
          next();
    }else {
          alert("无权限查看");
    }
  }else {
    next();
  }
})

export default router;
```
这个`next()`是放行的意思,可以指定到具体的哪个路由,就是确认下一步操作
```js
next('/')或next({path:'/'})
```
可以向`next`传递进去任意的位置对象
## 全局后置守卫afterEach

全局后置路由守卫,初始化时被调用,每次路由切换之后被调用
```js
router.afterEach((to,from) => {
  // 逻辑
  console.log("后置路由守卫",to,from);
})
```
需要注意的是,全局后置守卫,没有`next`函数

## 独享路由守卫beforeEnter

之前两个是对全局路由守卫的一个设置,而`beforeEnter`,它是针对路由可以单独进行设置，例如：某个独特的路由进行规则的设置
```js
const router = new VueRouter({
  routes: [
    {
        path: 'javascript',
        name: 'javaScript',
        hidden: true,
        component: () => import('@/views/fontend/javaScript.vue'),
        meta: {
        title: 'javaScript',
        icon: 'nested',
        },
        beforeEnter: (to, from, next) => {
        if(to.name == 'javaScript') {
            if(localStorage.getItem('role') === 'admin') {
                  next();
            }else {
                  alert("无权限查看");
            }
        }else {
            next();
        }  
      }
    },
  ]
})
```
## 路由组件内的守卫

不光可以在路由跳转前后,设置守卫,也是可以在路由组件内定义路由的导航守卫的

代码如下所示
```js
export default {
  name: 'FontEnd',
  data() {
    return {

    }
  },
  // 通过路由规则,进入该组件时被调用
  beforeRouterEnter(to,from,next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      // 在这里做一些逻辑的处理
      next(vm => {
        // 通过 `vm` 访问组件实例
      })
  },

  beforeRouteUpdate(to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
  },

  // 通过路由规则,离开该组件时被调用
  // 针对单个组件做权限控制
  beforeRouteLeave(to,from,next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // 放行
    next();
  }
}

```
## 总结

`Vue`中的路由守卫-包括全局前置路由守卫(路由初始化及切换之前触发beforeEach),全局后置路由守卫(路由初始化及切换之后触发afterEach),以及独享路由守卫(beforeEnter),以及组件内的路由守卫

在做权限管理的时候,根据自己的业务,选择在合适的时机进行拦截,从而控制路由的权限

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />