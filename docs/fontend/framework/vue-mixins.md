---
title: vuejs中的mixin混入-局部混入/全局混入
autoGroup-3: Vue基础
---

## vuejs中的mixin混入-局部混入/全局混入

## 快速导航

<TOC />

## 前言

我们在实际项目开发中,有很多基本相似功能模块,只是操作显示数据不同,很多逻辑和配置都是相同的

在`Vue`项目里,每个单文件组件都是一个模块组件,每个组件都有自己内部的数据和方法逻辑

如果每个单文件组件想要实现同样的功能

那么在每个单文件组件都要在逻辑业务代码里重复写一遍,这样在很多单文件组件内,到处都是从某一处复制粘贴过来的代码

在`Vue`当中,可以用封装组件来达到复用代码的目的,除了可以复用模板,那么逻辑,一些配置选项,是不是也可以公用?

当然是可以的,当只需要二次修改时,同样的逻辑的代码，只需要修改一处就可以了的

今天就来学习下`Vue`当中的这个`mixin`的,多个组件,当遇到相同的逻辑,是如何共用逻辑配置的

## 需求

假设:现在有两个不同的按钮组件`ButtonA`,`ButtonB`,点击它弹出组件自身不同的属性

用`Vue-cli`脚手架创建一个项目,在`components`文件夹下分别创建`ButtonA.vue`,`ButtonB.vue`两个组件

以下是`ButtonA`组件内容,在按钮上绑定了`handleButton`方法,并在`methods`选项配置中定义
```html
<template>
    <div class="wrap">
        <button @click="handleButton">按钮组件A</button>
    </div>
</template>
<script>
    export default {
        name: "ButtonA",
        data() {
            return {
                name: "itclan.cn"
            }
        },
        methods: {
            handleButton() {
                alert(this.name);
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    margin-right: 20px;
}
</style>
```
以下是`ButtonB`组件内容,在按钮上绑定了`handleButton`方法,并在`methods`选项配置中定义
```html
<template>
    <div>
        <button @click="handleButton">按钮组件B</button>
    </div>
</template>

<script>
    export default {
        name: "ButtonB",
        data() {
            return {
                name: "video.itclan.cn"
            }
        },
        methods: {
            handleButton() {
                alert(this.name);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>

```
然后再`App.vue`当中引入两个`ButtonA`,`ButtonB`组件
```html
<template>
  <div id="app">
       <ButtonA></ButtonA>
       <ButtonB></ButtonB>
  </div>
</template>

<script>

import ButtonA from "./components/ButtonA"
import ButtonB from "./components/ButtonB"
export default {
  name: 'App',
  components: {
    ButtonA,
    ButtonB
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
  display: flex;
  justify-content: center;
}
</style>

```
经过上面的几行代码,可以实现我们想要的目的,但是你会发现,他们的功能逻辑都是一样的,定义的方法名也都是一样的

如果一个项目里,有很多个这样的组件,只要想改,那么所有的单文件组件都得手动的修改一次,毫无疑问,重复性的代码也比较多,比较分散

对于不同组件间同样的配置,能不能提取出来共用一份呢,在`Vue`当中,提供了`mixin`

## 什么是mixin

把多个组件共有的配置提取成一个混入对象,然后通过局部混入或者全局混入,以达到共用配置的目的,这就是`mixin`

**官方文档**: 混入 `(mixin) `提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项 

**翻译一下**: 将组件的公共逻辑或者配置(包括`data`,`方法`,`生命周期`,甚至`props`等)提取出来，哪个组件需要用到时，直接将提取的这部分混入到组件内部即可。这样既可以减少代码冗余度，也可以让后期维护起来更加容易，改一处即可,不用到处去每个组件内修改配置

**注意**：提取的是逻辑或配置，而不是`HTML`代码和`CSS`代码。也就是说，`mixin`就是组件中的组件，`Vue`组件化让我们的代码复用性更高

那么组件与组件之间还有重复部分，比如逻辑业务的复用,我们还可以使用`Mixin`在抽离一遍

以下是经过`mixin`改写过的

在`src`文件夹下创建一个`mixin`文件夹(这个文件夹下全部放入一些混入),创建一个`popButton.js`文件,创建一个对象,然后暴露出去,如下所示
```js
export const popButton  = {
    // 这里面组件选项的配置都是可以的,生命周期等,data属性,计算属性,监听属性等
    methods: {
        handleButton() {
            alert(this.name);
        }
    }
}
```
然后再组件使用处引入即可,如下`ButtonA`组件,通过`import`引入,同时在组件配置选项中`mixins:[引入的混入名]`,要是多个的话,用逗号分隔
```html
<template>
    <div class="wrap">
        <button @click="handleButton">按钮组件A</button>
    </div>
</template>

<script>
import {popButton} from "../mixin/popButton.js"
    export default {
        name: "ButtonA",
        mixins: [popButton],
        data() {
            return {
                name: "itclan.cn"
            }
        },
    }
</script>

<style lang="scss" scoped>
.wrap {
    margin-right: 20px;
}
</style>
```
这种在组件内部,通过`minxins:[混入名称]`,也被视为局部混入

局部混入也就是只在当前组件内起作用,与按需加载有些相似,也就是需要用到`mixin`中的代码时，我们再在组件内引入它

而全局混入的话，则代表我在项目的任何组件中都可以使用`mixin`,从根组件下至到它的任何一个组件都会用到混入

## 全局混入

局部混入是,在需要的组件引入混入,通过`import`导入混入,在通过在组件的配置选项中通过`minxins: [混入名称]`

而全局混入,则是在项目代码中的`main.js`中去引入混入,在用`Vue.mixin(混入名称)`进行注册

这样任何一个组件,都可以使用混入了的,如下代码所示
```js
import Vue from 'vue'
import App from './App.vue'

import {popButton} from "./mixin/popButton.js"

Vue.mixin(popButton);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

```
::: tip 注意事项
在使用全局混入时,应当格外小心,一旦使用全局混入,它将影响每一个之后创建的`vue`实例,也就是所有的`vm`,`vc`都会有混入

它与局部混入没有啥区别,虽然一次性注入混入很方便,但是也会带来一些问题,所有的组件实例,Vue实例都会有混入

在官方的特殊提示里,提到了,谨慎使用全局混入,因为它会影响每个单独创建的`vue`实例(包括第三方组件)

大多数情况下,只应当应用于自定义选项,就像上面示例一样,推荐将其作为插件发布,以避免重复应用混入
:::

## 几个重要的疑问

* `mixin`中的生命周期函数会和组件的生命周期一起合并执行
* `mixin`中的`data`数据在组件中可以使用
* `mixin`中的方法在组件内部可以直接调用
* 生命周期函数合并后执行顺序:先执行`mixin`中的,然后执行组件的
* `mounted`不会合并,都会加载一遍
* 不同组件中的`mixin`是相互独立的,改变一个组件中`mixin`中的数据,另一个引用了`mixin`的组件不会受影响

如下代码
```js
export const popButton  = {
    data() {
        return {
            name: "川川",
            age: 18
        }
    },
    created() {
        console.log("混入生命周期开始执行");
    },
    mounted() {
        console.log("我是混入");
    },
    methods: {
        handleButton() {
            alert(this.name);
        },
        handleMounted() {
            console.log("加载方法");
        }
    }
}
```
## 选项合并

当组件和混入对象含有同名选项时,这些选项将以合适的方式进行合并

也就是说,当`mixin`中定义的数据,方法名与组件里的属性名,方法名同名时,会怎么样呢

会存在数据,和方法名的覆盖问题?谁覆盖谁?执行先后顺序是?

### 生命周期函数

`mixin`里面可以有自己的生命周期函数，同组件一样,生命周期函数是自执行函数,在某个阶段会自动执行

它都是固定的,默认合并策略如下所示

* 先执行`mixin`中生命周期函数中的代码,然后再执行组件内部的代码
```js
export const popButton  = {
    data() {
        return {
            name: "川川",
            age: 18
        }
    },
    beforeCreate() {
        console.log("创建之前");
    },
    created() {
        console.log("混入生命周期开始执行");
    },
    mounted() {
        console.log("我是混入");
    },

    beforeUpdate() {
        console.log("更新之前");
    },
    updated() {
        console.log("更新之时");
    },
    beforeDestroy() {
        console.log("销毁之前");
    },
    destroyed() {
        console.log("销毁时");
    },
    methods: {
        handleButton() {
            alert(this.name);
        },
        handleMounted() {
            console.log("加载方法");
        }
    }
}
```
若是方法重名,则后者组件内的方法会覆盖`mixin`中的方法

### data数据冲突

当`mixin`中的`data`数据与组件中的`data`数据冲突时,组件中的`data`数据会覆盖`mixin`中的数据

若是没有相同的话,会进行数据的合并
```js
export const popButton  = {
    data() {
        return {
            name: "川川",
            age: 18
        }
    },
}
```
### 方法名冲突

在同一个项目里,起相同的名称,是很容易遇到的,如果`mixin`中的方法名与引入`mixin`中组件的方法名一致时,那么以当前组件为准

## mixin的优缺点

既然`mixin`这么好用,那为什么不直接大量推荐使用?`mixin`可以复用组件的逻辑,这样可以节省很多代码,但是同样,也会带来一些问题

### 1.变量名来源不明确

在某些单文件组件里,引入`mixin`,因为组件内可以调用`mixin`的方法和使用`mixin`中定义的数据,找上下文的时候,变得不是那么直观，要么通过阅读代码逐级向上进行查找,要么就是全局进行搜索查找

使用`mixin`时,不利于阅读,代码变得难以维护

因为组件里可以引入多个`mixin`,并直接隐式的调用`mixin`里面的变量和方法,这会让写代码的人看着有些混乱,区分不出这些变量和方法,分别是哪个`mixin`的

所以这里建议是：但凡`mixin`的方法,统一放到`mixin`文件夹下进行管理的

### 2. 多个mixins的生命周期会合并融合到一起运行,但是同名属性,同名方法无法融合,会导致冲突或覆盖

当遇到组件中定义的属性,方法与`minxin`当中的出现相同时,后者组件的属性会覆盖`mixin`中的属性

### 3. mixins和组件可能出现多对多的关系,复杂度会变高

一个组件可以引用多个`mixins`一个`mixins`也可以被多个组件引用,因为是共用逻辑,所以在关系上,不是很明确

不好追溯代码,排查问题,可以利用工具`vscode`全局搜索,如果是很多个地方用到了的`mixin`那么就得挨个的检查

如果滥用`mixin`的话,会让代码变得难以维护

如果是用了全局混入,在审查代码时,在任何一组件当中会莫名的多出一些属性和方法,会令新的同学很困惑,如果对`mixin`很熟悉的话,那没什么,如果不熟悉

那么就非常苦恼,这个变量名和方法,我在组件当中明明没有定义,但是为啥能使用呢,带来一些困惑

::: tip 注意
如果一个功能,逻辑,一开始就很确定,它以后是不会动的,那么就可以使用`mixin`
:::

## mixin优点

* 提高组件代码复用性
* 无需传递状态
* 维护方便,只需要修改一处地方就可以,全局混入,应当谨慎使用

## 总结

`mixin`是在`vue`当中复用逻辑,精简代码的一种思想,相当于就是提取组件当中的公共配置属性,方法，可以使用`mixins:[混入名称]`局部混入,也可以在`main.js`中`Vue.mixin(混入名称)`,全局混入

给封装复用代码带来了很多方便,但是也不要滥用它,有些场景非常适合,但是有些场景使用过多了,也会带来一些不可预知的问题

一般封装公共组件就比较适合使用`mixin`,还有做数据可视化时,当组件层级较多,想要从同一个数据源抽出公共的数据时,也可以使用`mixin`

在阅读一些优秀的项目时,也会看到很多项目里有使用`mixin`的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />


