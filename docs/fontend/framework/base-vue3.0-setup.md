---
title: VueJs中setup的使用(上)
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中setup的使用(上)

## 快速导航

<TOC />

## 前言

在写组合式`API`代码时,首先接触到的是`setup`这个函数,在一些项目代码里,你会看到有的直接在`script`标签上添加`setup`标识,有的在选项式API

方式里,以`setup()`函数,配置选项的方式出现在单文件组件里

什么时候用`setup()`函数方式,什么时候不用,对于有些新手同学,有些困惑,以及它的一个使用特点和规则,都是需要知道的

在学习`setup`之前,先写一个常见的数字加减的示例,介绍两个概念**声明式渲染**与**响应式**

## 数字加减选项式API实现

<template>
  <div class="base-vue3-setup">
      <p><el-input-number v-model="num" @change="handleChange" :min="1"></el-input-number></p>
      <p>num: {{num}}</p>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            num:0
        }
    },
    methods: {
      handleChange(value) {
        this.num = value;
      }
    },
  };
</script>
<style scoped>
  .base-vue3-setup {
    text-align: center;
  }
</style>

如下是选项式示例代码如下所示

```html
<template>
  <div class="base-vue3-setup">
      <p><el-input-number v-model="num" @change="handleChange" :min="1"></el-input-number></p>
      <p>num: {{num}}</p>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            num:0
        }
    },
    methods: {
      handleChange(value) {
        this.num = value;
      }
    },
  };
</script>
<style scoped>
  .base-vue3-setup {
    text-align: center;
  }
</style>
```
以上是使用选项式API实现的,响应式数据挂载在配置选项`data()`函数下,而方法绑定在`methiods`下

## 数字加减组合式API实现

<template>
   <div class="base-vue3-setup">
      <p><el-input-number v-model="num" @change="handleChange" :min="1"></el-input-number></p>
      <p>num: {{num}}</p>
  </div> 
</template>
<script setup>  
import { ref } from "vue";
const num = ref(0);

function handleChangeCom(value) {
    num.value = value;
}
</script>

如下是组合式API代码

```html
<template>
   <div class="base-vue3-setup">
      <p><el-input-number v-model="num" @change="handleChangeCom" :min="1"></el-input-number></p>
      <p>num: {{num}}</p>
  </div> 
</template>
<script setup>
import {ref} from "vue";
const num = ref(0);
function handleChangeCom(value) {
    num1.value = value;
}
</script>
```
以上就是通过组合式`API`代码实现的,响应式定义的数据直接放在函数里面,并通过`ref`函数包裹起来,才具备响应式能力,同时在`script`标签上添加`setup`标识

在组件的模板中可直接使用函数内定义的变量,但在逻辑代码中,若想要取到响应式变量的值时,需要通过`.value`的形式获取的

## 声明式渲染

编写`Vue`代码,本质上就是在编写`Vue`组件,而`Vue`基于`html`拓展了一套自己的模板语法,让我们可以声明式的描述最终输出的`HTML`和`JavaScript`状态之间的一个关系

当状态改变时,`HTML`会自动的更新,那么页面也会自动更新

## 响应式状态

`Vue`会自动跟踪`JavaScript`的状态,并在其发生变化时响应式的更新`DOM`,能在改变时触发更新状态的,就可以称为响应式数据

在`vue3`中想要一个基本类型数据具备响应式,那么需要用`ref`这个组合API函数给包裹起来,经过该函数处理加工一下,就具备了响应式的能力,而对象类型数据

则需要使用`reactive()`API函数来声明响应式状态,这些组合式`API`函数都是`Vue`框架提供的,它是固定的,相当于是`Vue`对外暴露的接口

你只需要拿来即用就可以,无需关心底部是如何操作的(当然如果想深入了解,那可以看研究源码,是如何编译实现的)

## Vue中setup的两种风格

对于有些初学者,有时看到`setup`以属性的方式出现在`script`标签上,有时,又会看到,在选项式API当中以`setup()`函数的形式出现

那什么时候用,什么场景用呢,下面就来讲一讲的

### setup直接以属性的方式写在script标签上

在`Vue3`中,在`xxx.vue`单文件组件中的`<script setup></script>`,会有一个`setup`标记,只要标记了它,那就说明,在`script`标签代码块内就具备

了`vue3`的语法环境,可以使用`Vue3`中的一些特性,比如组合式API函数,`ref`,`reactive`等

可以在`script`中声明响应式数据状态,定义声明完后,可以直接在模板中使用

比如如下:

```html
<template>
     <!--在模板中不用.value,它会被自动解析,直接可以使用变量名--->
     {{name}}
</template>
<script setup>
  import {ref} from "vue";
  let name = ref("itclanCoder");
  //在逻辑中,想要读取name的值,需要.value方式
  console.log(name.value);
</script>
```

从上面的`Vue3`代码风格看出,它是比`Vue2`更简洁的,可以自由的编写`javascript`代码,不受约束,就是需要另一个思维方式从`vue2`固定编程方式中

走出来

### setup()以函数配置选项方式

在`vue3`当中,它是向下兼容的,如果想要在`vue2`中体验`vue3`当中的一些新特性,在`vue3`中新增了一`setup`的配置选项

`setup`是一个新的配置项,值为一个函数,`setup`为设置,译为组合,是所有`Composition API`组合API表演的舞台，它是在组件中使用组合式API的入口

一般,在如下情况下使用`setup()`钩子

[1]. 需要在非单文件组件中使用组合式API时

[2]. 需要在基于选项式API的组合中集成基于组合式API的代码时或第三方库整合的项目中,可以用`setup()`函数

其他情况下,都应该优先使用`<script setup></script>`语法

如下代码所示

```html
<template>
    <div>
        {{name}}
    </div>
</template>
<script>
  import { ref } from "vue";
  export default {
    // 其他配置选项
    data() {
      return {
        num: 1
      }
    },
    setup() {
      const name = ref('itclanCoder');
      // 在逻辑中访问,同样需要使用.value的方式访问
      console.log(name.value);
      // 声明的变量或函数,都需要暴露出去,否则在模板中使用,会不起作用
      return {
        name
      }
    }
  }
</script>
```
::: tip 重点注意
[1]. 在`setup()`函数内定义声明的响应式数据变量或函数,都需要对外暴露出去,否则在模板中直接使用的话,是不起作用的

[2]. 在模板中可以直接使用定义的响应式数据变量,或函数,因为它可以自动解析,而在逻辑中需要使用`变量.value`读取

[3]. `setup()`函数自身并不具备对组件实例的访问权限,所以在`setup()`函数作用域内,访问`this`会是`undefined`,但在选项式API中可以访问组合式API对外暴露出来的值,反过来却不行,也就是在`setup()`中无法通过`this`访问选项式API配置选项下的`data`数据或`methods`方法

[4]. 当选项式API中的`data`数据,`methods`方法名与`setup()`内定义的变量名或函数同名时,后者会覆盖前者

[5]. 凡是组合中用到数据,方法,均要配置在`setup`中,并且需要通过`return`对外暴露出去

[6]. `setup`函数有两种返回值,一个是对象,另一个是函数

[7]. 如果`setup()`函数返回一个对象,则对象中的属性,方法,在模板中可以直接使用,但在逻辑内,普通变量需要使用`.value`访问读取,若返回一个渲染函数,则可以自定义渲染内容
```js
import {h} from 'vue';
export default {
  setup() {
    // 返回一个函数
    return () => h('h1','内容')
  }
}
```

[8]. 如果你使用vue3组合式API,尽量不要与`vue2.x`配置混用

[9]. `setup`不能是一个`async`函数,因为返回值不在是`return`的对象,而是`propmise`,这样会令,模板看不到`return`对象中属性(其实也可以返回一个`Promises实例,但需要结合`Suspense`和异步组件配合进行使用`)
:::

## setup()是在什么时候执行的?

`setup()`是`Vue`提供的一个钩子,它的执行时机是在`beforeCreate()`函数之前执行的,在`setup()`函数里面访问`this`是`undefined`

## 总结

`setup`是`vue3`新增的一个特性,有两种使用,一种是直接写在`script`标签上,此时`script`标签代码块内可写`vue3`的新特性

而在选项式`API`编码风格当中,若想要使用`vue3`,那么需要借用`setup()`这配置选项,所有的组合响应式`API`函数,响应式变量,都需要放在`setup()`函数里面

同时,需要对外暴露出去

两种方式都是可以使用的,不过在官方推荐的使用当中,应当优先使用`setup`放在`script`标签上,当需要基于选项式API的组合中,基于组合式API的代码时或第三方库整合的项目中,或非单文件组件中使用组合式API时,可以用`setup()`函数


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />















