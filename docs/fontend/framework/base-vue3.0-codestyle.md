---
title: vuejs中组件的两种不同的编写风格-选项式API及组合式API
collapsable: true
autoGroup-2: Vue3基础
---

## vuejs中组件的两种不同的编写风格-选项式API及组合式API

## 快速导航

<TOC />

## 前言

随着`vue3`的逐渐稳定,以及周边生态的完善,现在`vue3`已经成为默认的使用方式了的

所以,对于一个前端开发者,`Vue2`与`Vue3`都得要会,在`vue3`中新增很多东西,比如:`Fragment`,`Teleport`,`Suspense`,也去掉了`vue2`中一些特性,比如:移除`keyCode`支持作为`v-on`的修饰符等

在编程风格上也有一些区别

## 选项式API

选项式`API`也可以成为配置项`API`,它是将组件的实例选项对象来描述组件的逻辑,比如:组件的`data`,`methods`,还有生命周期钩子`mounted`,以及`watch`监听器

组件所定义的属性都会暴露在函数内部的`this`上,它会指向当前组件的实例,在生命周期以及方法内,可以通过`this`进行访问读取

<template>
  <div class="base-vue3-code-style">
      <el-button type="danger"  @click="handleIncrease"
      >选项式API累加</el-button>
      <p>{{count}}</p>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            count:0
        }
    },
    methods: {
      handleIncrease() {
        this.count++
      }
    },
  };
</script>
<style scoped>
  .base-vue3-code-style {
    text-align: center;
  }
</style>

如下选项式`API`示例代码如下所示
```html
<template>
  <div class="base-vue3-code-style">
      <el-button type="danger"  @click="handleIncrease"
      >选项式API累加</el-button>
      <p>{{count}}</p>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            count:0
        }
    },
    methods: {
      // 定义方法,修改data下面的数据  
      handleIncrease() {
        this.count++
      }
    },
  };
</script>
<style scoped>
  .base-vue3-code-style {
    text-align: center;
  }
</style>
```
对于选项式`API`,是`vue2.0`书写规范,响应式数据与页面显示相关的,就挂载在`data`下,绑定方法就放在`methods`里面,它是约定俗成的

一些选项配置参数,是可进行配置的

## 组合式API(composition API)

组合式API(Composition API)是一系列API的集合

通过组合式`API`,可以通过从`vue`中导入特定的`API`(比如`ref`(普通数据类型),`reactive(只适用于对象)`),函数来描述组件的逻辑,实现我们想要的功能

通常,组合式会与`<script setup></script>`进行搭配使用

这个`setup`是一个标识,就像`type="text/javascript"`一样,告诉`vue`需要在编译时进行一些处理

让我们可以简洁的使用组合式`API`,比如:`<script setup></script>`中的导入和顶层变量或函数都能够直接在模板中使用

而非声明选项的方式编写`vue`组件,组合式API只是一种概括性的技术术语,因为它把一些API进行组合的使用

[1]. 响应式API:例如:`ref()`和`reactive()`,可以直接创建基础数据类型响应式,和对象数据类型响应式

[2]. 生命周期钩子: 例如`onMounted()`,`onUnmounted()`,可以在组件的生命周期阶段添加逻辑

[3]. 依赖注入:使用`provide()`和`inject()`,可以在使用响应式`API`时,利用`Vue`的依赖注入系统

<template>
   <div class="base-vue3-code-style">
     <el-button type="primary"  @click="handleIncrease"
      >组合式API累加</el-button>
      <p>{{count}}</p>
     </div> 
</template>
<script setup>
  import  {ref} from "vue";
  // 响应式数据状态,初始化数据
  const count = ref(0);  
  // 用来修改状态,触发更新元素,注意的是需要在逻辑中,需要使用`.value`进行访问
  function handleIncrease() {
    count.value++;
  }
</script>

具体代码如下所示

```html
<template>
   <div class="base-vue3-code-style">
     <el-button type="primary"  @click="handleIncrease"
      >组合式API累加</el-button>
      <p>{{count}}</p>
     </div> 
</template>
<script setup>
  // 引入ref API
  import  {ref} from "vue";
  // 响应式数据状态,初始化数据,ref接受一个内部值，返回一个响应式的、可更改的 ref 对象，此对象只有一个指向其内部值的属性
  const count = ref(0);  
  // 用来修改状态,触发更新元素,注意的是需要在逻辑中,需要使用`.value`进行访问
  function handleIncrease() {
    count.value++;
  }
</script>
```
[1]. 需要从`vue`中引入`ref`这个`API`函数

[2]. 在组件的逻辑代码中,需要使用`xxx.value`取值,并修改

[3]. 模板中不需要写`xxx.value`,在函数中定义的响应式变量数据可以直接在模板中使用

 从选项式`API`和组合式API两种代码编写风格当中对比可以看出,若使用选项式API,那么页面中绑定的响应式数据需要挂载在`data`配置选项下,而绑定方法

 则需要放在`methods`配置选项下,写法都是固定的,在选项式API中,逻辑内想要访问属性和方法,更多依赖的是`this`,达到访问组件实例下的数据和方法,而在组合式API,是具体需要什么,就从`vue`当中引入解决什么问题功能的`API`,做到真正的按需引入
 
 想要一个基础的数据具备响应式能力,那么需要使用`ref`函数包裹起来,此时,它就具备响应式的能力

 而组件式代码内,是没有`this`绑定的,`this` 会是 `undefined`,你可以在选项式 `API` 中访问组合式 `API` 暴露的值，但反过来却不行

 如下这张图很好对比了选项式`API`与组件式`API`的区别
 
  <div align="center">
  <img class="medium-zoom lazy" loading="lazy"  src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eccd93f7981e47d88cf0c3624e7825fb~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?" alt="佳豪瑞森装饰"/>
  </div>

## 两种风格的对比

`vue2`已经稳定很多年,各周边生态已非常完善,选项式`API`,和组件式`API`,两种不同风格代码没有哪一个好与不好

只有自己熟悉与不熟悉,`Vue3`更是对`vue2`的一种升级和拓展

在底层系统上,提供了两套不同的接口供开发者自由的选择和使用

选项式`API`是以组件实例为中心,构造器函数,即`this`为核心,对于熟悉面向对象语言的开发者来说,与类的使用变得更和谐

它是将与组件的相关细节抽象出来,比如数据,方法,并通过一些约定的规则,将数据,方法,进行分离,保持各自独立,按照选项式的方式来组织我们的代码

对于新手初学者是非常友好的

而组合式`API`的核心是直接在函数作用域内定义响应式状态变量,不会跟选项式API那样,需要挂载到`data`实例选项下

它是直接从函数中得到状态,通过直接从`vue`当中引入相对应的响应式API函数,对基数数据类型和非基础数据类型进行包装

实现数据的响应式

这种编程方式更加自由,代码的执行效率也会更高,它的灵活性使得组织和重用逻辑的模式变得非常强大

如果说`vue2`是带着紧箍咒的野马,那么`vue3`就是脱离了紧箍咒的野马,变得更加自由

## 学习建议

[1]. `Vue2`与`Vue3`也是可以混用的,但是选择自己喜欢熟悉的一种方式编码就可以了的,无非就是多一种风格的编码

[2].在生产项目中,当您不需要使用构建工具,或者打算要在低复杂度的场景中使用`vue`，比如,渐进增强的应用场景,那么官方推荐您采用选项式API,也就是`vue2`的编程风格

[3]. 当您打算用`vue`构建完整的单页面应用,那么官方推荐采用`组合式API+单文件组件`方式去构建您自己的项目


## 低版本的Vue2.7如何使用vue3

在`vue3`和`vue2.7`以上的版本,都是可以使用组合式API,对于低版本`vue2.7`以下的,可以使用官方维护的插件
`@vue/composition-api`

在`vue3`中,组合式`API`基本都会配合`<script setup></script>`语法在单文件组件中使用

## 组合式API并不是函数式编程

组合式API的风格是基于函数的组合,但它不是函数式编程

::: tip 温馨提示
函数式编程:可以把函数当做数据,参数进行传递,函数是第一公民,纯UI函数,如果你用过`React`的话,那就知道这个的

纯函数:无状态的世界,有输入和输出,`React`中的高阶函数,以及数组当中的`map`,`reduce`都是一种函数式编程

:::

组合式API是已`Vue`中数据可变的,细粒度的响应式系统为基础的,而函数式编程通常强调的是数据不可变,也就是单向数据流向的

## 为什么要有组合式API

### 1. 更好的逻辑复用

组合式`API`能够通过组合函数来实现更加简洁高效的逻辑复用,在选项式`API`中我们主要的逻辑复用机制是`mixins`,而有了组合式API,
可以解决`mixins`中的所有缺陷

### 2. 更灵活组织代码

在`vue2.0`选项式`API`编程里,必须要遵从`vue`的使用规范,去组织自己的代码,响应式数据放在`data`下,而方法则放在`methods`里面

然而,在选项式API在单个文件组件的逻辑复杂到一定程度时,会出现一些问题,这些问题主要是在多个逻辑关注点上

得在文件组件中,来回上下翻滚查看代码片段

处理相同的逻辑关注点的代码被强制拆分在不同的选项中,位于文件的不同部分

在一个如有几百行的大组件中,要读懂代码中的一个逻辑关注点,是需要来回在当前文件上下滚动的,而如果想要将一个逻辑关注点

抽取重构到一个可复用的工具函数中,需要从文件的多个不同部分找到所需要的正确的片段,而如果是使用组合式API重构这个组件

代码逻辑的组织就会变得非常清晰

现在与同一个逻辑关注点相关的代码被归为了一组,我们无需再为一个逻辑关注点在不通的选项块之间来回滚动切换

另外,还可以将这一组代码移到一个外部文件中,不在需要为了抽象而重新组织代码,大大降低了重构的成本

这在一些大型项目中是非常重要的,有利于项目的维护和迭代

## 更好的类型推导

组合式API主要利用基本的变量和函数,它们本身就是类型友好的,用组合式API重写的代码可以享受到完整的类型推导,不需要书写太多类型标注

大多时候,用`Ts`书写的组合式API代码和用`js`写的都差不多

## 更小的生产包体积

使用组合式API相比选项式API更加高效,因为组合式API,不会自动的引入生命周期,是纯函数,对代码压缩也更友好

这也是`<script setup></script>`形式书写的组件模板被编译为一个内联函数,和`<script setup></script>`中的代码位于同一个作用域

不像选项式API需要依赖`this`上下文对象访问属性,被编译的模板可以直接访问`<script setup></script>`中定义的变量,无需与选项式API,实例对象中代理

使用组合式API,对代码的压缩更友好,因为本地变量的名字可以被压缩,但对象的属性名则不能

## 关于组件式API的思考

使用组合式API不像选项式API那样,会约定俗成的将指定的逻辑挂载在指定的选项配置对象下面,它的编程风格使用是固定的,确实是可以在编写`Vue`组件里

让开发者少思考,你只需要按照配方,一步一步先后顺序来就可以了的

而组合式API,它比较偏向原生`js`,不受框架的规则约束和限制,比较自由,洒脱,像编写普通的`javascript`那样来编写组件的代码

可以编写组织好的`javascript`,有能力编写组合式API代码

选项式API代码风格,一定程度上确实可以减少自己思考的时间,想要实现一个具体的功能,那么你需要按照框架的规则去组织自己的代码,没有选择的余地

这也会导致一个问题,脱离了框架,那么就不能干活的弊端

在一些比较大规模的项目中,选项式API代码风格想要重构的话,是非常费劲的,比较难以进行重构和提高代码质量,在这一方面,组合式API提供了更好的长期可维护性

## 组合式API覆盖所有场景

在官方介绍当中,组合式API基本上能够覆盖所有状态逻辑方面的需求,也就是说,使用`vue2`选项式API实现的功能

同样使用`vue3`依旧能够实现

## 两种API编程方式可以混用

选项式API和组合式API是可以进行混用的,如果在选项式API中想要使用组合式API,基于`Vue3`或`vue2.7`后的版本

可以通过`setup()`选项来使用组合式API

在官方文档中,谈到了,在一个基于选项式API开发很久,但又需要和基于组合式API的新代码或第三方库整合的项目中,就使用`setup()`这种方式的

换而言之,就是`vue2`的项目,依旧使用选项式API方式,`Vue3`的项目就选用组合式API，无非就是多了一种编写代码的风格

选项式API不会被废弃,是`vue`不可分割的一部分,选项式 API 是在组合式 API 的基础上实现的,对于中小型项目,使用选项式API是一个不错的选择

而组合式API比较适合大型复杂项目,这两种代码风格都是可以实现的,看自己对哪种更熟悉和青睐

## 总结

选项式`API`与组合式`API`是`Vue`提供的两种不同的编程风格,在`vue2.7`版本之前都是使用`选项式API`,响应式数据需要挂载在`data`下,而方法需要挂载
在`methods`下,而在组合式API当中,则只需要在`script`标签内添加`setup`标识后,表示具备组合式API的使用环境

具体使用什么,就需要从`vue`中引入对应的`API`函数,在`script`中定义的变量和函数可以直接在模板中使用,更多的是一种风格的变化,让前端更好的组织逻辑代码

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />












