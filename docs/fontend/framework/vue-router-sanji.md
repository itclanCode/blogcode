---
title: vuejs中如何实现三级路由并刷新页面时保持当前路由的激活状态
autoGroup-3: Vue基础
---

## vuejs中如何实现三级路由并刷新页面时保持当前路由的激活状态

## 快速导航

<TOC />

## 前言

之前有介绍过`vuejs`中的路由的传参及路由的`props`配置,对于如何配置一级路由,二级路由,对于很多同学来说,基本上没什么难度

然后在配置三级路由以上的时候,往往却没那么容易,会出现一些问题

比如:如下的,二级路由下的`tab`选项页,当刷新页面时,还能保持当前`tab`的一个状态

在切换到其他路由后,在回到当前路由,依旧能保证上一个状态等
<div align="center">
    <img class="medium-zoom lazy" loading="lazy" src="https://i.postimg.cc/QNzzwT0t/01.gif"  alt="路由示例" />
</div>

## 配置一级二级路由

这里我使用的是基础模板:`vue-admin-template`,搭建的一个简易后台管理系统,在`views/fontend/index.vue`创建一个`index.vue`组件

并使用`elementUI`组件中的**按钮样式的单选组合**,实现一个`tab`按钮选项按钮的切换

以下是`fontend/index.vue`示例代码

:::: tabs type:border-card
::: tab index.vue lazy
```html
<template>
    <div class="wrap">
        <el-radio-group v-model="activeTab" @change="handleRadio">
            <el-radio-button v-for="item in lists" :key="item.name"  :label="item.name">{{item.name}}</el-radio-button>
        </el-radio-group>     
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'FontEnd',
        data(){
            return {
              activeTab: '',
              lists: [
                {
                    // path: '/fontend/html',  
                    name: 'html'
                },
                {
                    // path: "/fontend/javascript",
                    name: 'javascript'
                },
                {
                    // path: "/fontend/css",
                    name: "css"
                }
              ]
           };
        },
        methods: {
            handleRadio(val) {
                this.$router.push({
                    name: val
                })
            }
        },
        watch: {
            $route: {
                handler(val) {
                    console.log(val);
                    this.activeTab = val.name;
                },
                immediate:true
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    padding: 30px;
}
</style>
在上面的模板代码中,使用了elementUI中的单选按钮组合组件el-radio-group,并结合v-for指令循环遍历了一个数组

同时在点击按钮时,绑定了一个change事件,使用编程式导航this.$router.push({})控制按钮路由的跳转
```
:::
::: tab router.js配置 lazy
```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  
  {
    path: '/fontend',
    component: Layout,
    name:'Font',
    children: [
      {
        path: '',
        component: () => import('@/views/fontend/index'),
        hidden: true,
        redirect: '/fontend/html',
        // meta: { title: '前端', icon: 'nested' },
        children: [
          {
            path: 'html',
            name: 'html',
            component: () => import("@/views/fontend/html.vue"),
            meta: {
              title: 'html'
            }
          },
          {
            path: 'javascript',
            name: 'javascript',
            component: () => import("@/views/fontend/javascript.vue"),
            meta: {
              title: 'javascript'
            }
          },
          {
            path: 'css',
            name: 'css',
            component: () => import("@/views/fontend/css.vue"),
            meta: {
              title: 'css'
            }
          },
        ]
      }
    ],
    meta: {
      title: '前端',
      icon: 'nested'
    }
  },

]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

在`router.js`中,使用`children`配置了子路由,并使用异步路由懒加载形式,配置了三个子路由
```
::: 
::: tab 路由不显示 lazy
页面右侧不显示,子路由未配置
:::
::: tab 按钮的激活状态不显示 lazy
未设置初始值
```js
<script>
    export default {
        name: 'FontEnd',
        data(){
            return {
              activeTab: '', // 激活状态
              lists: [
                {
                    // path: '/fontend/html',
                    name: 'html'
                },
                {
                    // path: "/fontend/javascript",
                    name: 'javascript'
                },
                {
                    // path: "/fontend/css",
                    name: "css"
                }
              ]
           };
        },
        methods: {
            handleRadio(val) {
                this.$router.push({
                    name: val
                })
            }
        },
        watch: {
            $route: {
                handler(val) {
                    console.log(val);
                    this.activeTab = val.name;
                },
                immediate:true
            }
        }
    }
</script>
```
:::
::: tab 刷新页面时,按钮不显示当前激活状态 lazy
未监听路由,并且设置激活状态
```js
watch: {
    $route: {
        handler(val) {
            this.activeTab = val.name
        },
        immediate: true   // 一加载页面时,就自动触发上面的handler函数
    }
}
```
:::
::: tab 解决切换闪烁抖动问题 lazy
当切换按钮的时候,出现页面抖动
在`layout/components/AppMain.vue`文件中,去掉`transition`的`name='fade-transform'`即可
```js
<transition  mode="out-in">
    <router-view :key="key" />
</transition>
```
:::
::::


## 配置三级路由

会配置一级,二级路由,那么配置三级,四级路由..也是一样的,路由是可以进行嵌套的,使用children属性,可以无限的嵌套下去

以下是`fontend/html.vue`的示例代码

:::: tabs type:border-card
::: tab html.vue代码 lazy
```html
<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
                v-for="item in tabLists"
                :key="item.name"
                :label="item.name"
                :name="item.name"
            >
            </el-tab-pane>
        </el-tabs>
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: 'Html',
        data() {
            return {
                activeName:'ATag',
                tabLists: [
                    {
                        name:'ATag'
                    },
                    {
                        name:'BTag'
                    },
                    {
                        name:'SpanTag'
                    },
               ],
            }
        },
        methods:{
            handleClick(val) {
                this.$router.push({
                    name:val.name,
                })
            }
        },
        watch: {
            $route: {
                handler(val) {
                    this.activeName = val.name
                },
                immediate: true
            }
        }

    }
</script>
上面是模板代码,使用了`elementUI`中`el-tabs`组件,并使用`v-for`循环遍历一数组对象,同样绑定`tab-click`事件

使用编程式导航`this.$route.push({})`,实现路由的跳转,并监听当前路由,控制当前`tab`的激活状态,保持刷新页面时,仍然保持上一次的一个状态
```
:::
::: tab router.js代码 lazy
```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [

  {
    path: '/fontend',
    component: Layout,
    name:'Font',
    children: [
      {
        path: '',
        component: () => import('@/views/fontend/index'),
        hidden: true,
        redirect: '/fontend/a',
        children: [
          {
            path: 'html',
            name: 'html',
            component: () => import("@/views/fontend/html.vue"),
            meta: {
              title: 'html'
            },
            children: [   // 三级子路由
              {
                path: '/fontend/a',   // 这个是必须要写的
                name: 'ATag',         // 要与html.vue中的配置的name保持一一对应
                component: () => import("@/views/fontend/a.vue"),
              },
              {
                path: '/fontend/b',
                name: 'BTag',
                component: () => import("@/views/fontend/b.vue"),
              },
              {
                path: '/fontend/span',
                name: 'SpanTag',
                component: () => import("@/views/fontend/span.vue"),
              },
            ]
          },
          {
            path: 'javascript',
            name: 'javascript',
            component: () => import("@/views/fontend/javascript.vue"),
            meta: {
              title: 'javascript'
            }
          },
          {
            path: 'css',
            name: 'css',
            component: () => import("@/views/fontend/css.vue"),
            meta: {
              title: 'css'
            }
          },
        ]
      }
    ],
    meta: {
      title: '前端',
      icon: 'nested'
    }
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

因为`a.vue`,`b.vue`.`span.vue`,所属在`html.vue`下,所以,在`router.js`中,使用`children`配置三个子路由

1. 注意`name`要与模板中的循环遍历数组对象中的`name`值保持一致
2. 路由的`path`路径的值,是必须要写的

```
:::
::: tab 解决路由点击两下才会切换到选中激活的状态 lazy
解决这个问题,监听当前下的路由就可以了的
```js
 watch: {
    $route: {
      handler(val) {
          this.activeName = val.name
      },
      immediate: true  // 自动触发上面的hander函数
    }
}
```
:::
::::

上面是通过路由的方式去实现的,但是会出现一个问题,就是二级路由`tab`切换的状态无法保持,怎么样控制在切换三级tab选项时,刷新页面,依旧保持二级导航切换的对应激活的状态

具体解决的办法,也可以是在路由器里面,对父级路由添加标识,这种方式非常复杂,而且代码不好维护,不建议使用这种方式

## 使用动态组件方式渲染组件

对于一级,二级可以使用路由组件去实现,但是当出现多级的时候,路由嵌套的层级太深,只会让项目代码越来越复杂,而变得不易维护

在二级导航切换按钮,显示具体的对应的内容,就可以使用动态组件的方式去渲染

`html.vue`使用动态组件实现

:::: tabs type:border-card
::: tab html.vue使用动态组件实现 lazy
```html
<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
                v-for="item in tabLists"
                :key="item.name"
                :label="item"
                :name="item"
            >
            <!-- 使用动态组件渲染 -->
            <component :is="activeName"></component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import ATag from "./a.vue";       // 引入组件
    import BTag from "./b.vue";
    import SpanTag from "./span.vue"
    export default {
        name: 'Html',
        components: {   // 注册组件
            ATag,
            BTag,
            SpanTag
        },
        data() {
            return {
                activeName:'ATag',
                tabLists: ["ATag","BTag","SpanTag"],
            }
        },
        mounted() {
            this.updateActiveTab()
        },
        methods:{
            updateActiveTab() {
                const { query } = this.$route;
                this.activeName = query.activeName || 'ATag'
            },
            handleClick() {
                const { activeName } = this;
                this.$router.push({
                    name:'html',
                    query: {
                        activeName
                    }
                })
            }
        },

    }
</script>

上面`el-tabs`组件的切换,具体显示哪个对应的组件,使用了动态组件`component`,并通过`is`属性,绑定`activeName`，以达到控制指定组件的显示

在逻辑代码中,点击`tab`时,使用`query`的方式,经过这样的操作后,即使刷新页面,也不会丢失,保持在当前状态下的
```
:::
::: tab 注意事项 lazy
使用`query`的方式,即使是刷新页面,也会保持当前的状态,但是若使用`params`的方式,刷新页面时,会丢失参数,并不会保持当前的状态,如果想要保持

那么就要结合`localstorage`，如下示例所示
:::

::::

上面是使用`<component :is="activeName"></component>`,动态组件的方式去渲染的

## 使用本地localStorage存储保持状态

如果不使用`query`方式,使用`params`的方式也是可以的,但若想保持状态,那么就需要结合`localStorage`进行使用,如下代码所示
代码上基本没有什么变化

只不过是使用了本地存储`localStorage`
```js
<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane
                v-for="item in tabLists"
                :key="item.name"
                :label="item"
                :name="item"
            >
            <component :is="activeName"></component>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import ATag from "./a.vue";
    import BTag from "./b.vue";
    import SpanTag from "./span.vue"
    export default {
        name: 'Html',
        components: {
            ATag,
            BTag,
            SpanTag
        },
        data() {
            return {
                activeName:'ATag',
                tabLists: ["ATag","BTag","SpanTag"],
            }
        },
        mounted() {
            this.updateActiveTab()
            console.log(localStorage.getItem('activeName'));
        },
        methods:{
            updateActiveTab() {
                const { params } = this.$route;
                this.activeName = params.activeName || localStorage.getItem('activeName');
            },
            handleClick() {
                const { activeName } = this;
                localStorage.setItem('activeName',activeName);  // 设置本地存储
                this.$router.push({
                    name:'html',   // 如果使用params方式,就需要使用name方式,如果是query,也可以写具体的path:'/font/html'
                    params: {
                        activeName
                    }
                })
            }
        },
    }
</script>
```

针对这种三级或三级以上的,使用路由的方式,不是不可以,但是当路由嵌套的层次太多,就会使组件变得复杂起来

而使用动态渲染组件的方式,就极大的简化了逻辑,只需要考虑渲染显示对应的组件就可以

## 总结

其实,二级导航的切换,同样也是可以设计成动态组件的,具体看自己习惯用哪个,能够实现具体的业务就行,但有些情况下,设计成动态组件

明显要简单,容易得多,能够减少很多不必要的逻辑

而使用`query`的方式是可以保持状态的,参数会明文的出现在地止栏上,即使刷新页面,也不会丢失,而若使用`params`方式,想要状态不丢失,那么就要结合`localStorage`进行配合使用

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />



