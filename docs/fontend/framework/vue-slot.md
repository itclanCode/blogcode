---
title: vuejs中的默认插槽-具名插槽-作用域插槽三者的比较
autoGroup-3: Vue基础
---

##  vuejs中的默认插槽-具名插槽-作用域插槽三者的比较

## 快速导航

<TOC />

## 前言

Vue中的插槽是一个非常强大的功能,在复用组件模块的时候,针对相似的结构,拥有不通的内容时,使用插槽就非常方便,一定程度上可以减少在模板中使用大量的逻辑判断,控制显示不通的内容

同时,也可以让代码组织结构更加清晰,虽然使用上是简单了,但是插槽有些不是很好理解，不是很直观

**它是让父组件可以向子组件指定位置处插入一html结构,自由灵活,也是组件间的一种通信方式**

形式上有,**默认插槽**,**具名插槽**还有**作用域插槽**

大家在使用`element-ui`表格的时候,虽然都知道怎么用,表头,以及内容模板的渲染,就使用了插槽,但是往往是很迷糊的

因为被抽象了的

今天就一起来学习下,学完之后,在看`element-ui`表格的时候,希望能给你带来一些启发,下次再次使用时,理解更上一层楼

## 默认插槽

官方文档里介绍到:`Vue` 实现了一套内容分发的 `API`，这套 `API` 的设计灵感源自 `Web Components `规范草案，将 `<slot> `元素作为承载分发内容的出口

这句话不是很好理解,换句话说,也就是,`<slot>`可以充当元素标签的占位符,可以代替在父组件引用的组件内的`html`标签内容

以如下示例所示

在App组件中引入`SlotBase.vue`组件
```html
<template>
  <div id="app">
     <SlotBase
              :lists="lists">
             <p>默认内容</p>
     </SlotBase>
  </div>
</template>

<script>

import SlotBase from "./components/SlotBase.vue"

export default {
  name: 'App',
  components: {
    SlotBase
  },
  data() {
    return {
      lists: [
        {
          id: "001",
          title: "直播卖酒"
        },
        {
          id: "002",
          title: "直播打赏"
        },
        {
          id: "003",
          title: "直播炫富"
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
而在编写`SlotBase.vue`组件中,引入`slot`标签,如下所示
```html
<template>
    <div class="wrap">
        <div class="list" v-for="list in lists" :key="list.id">
            {{list.title}}
            <!-- 此处引入slot标签 -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlotBase",
        props: {
            lists: {
                type: Array
            }
        },
        mounted() {
            console.log(this.lists);
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    justify-content: center;
}
.list {
    width: 400px;
    height: 200px;
    border:1px solid red;
    margin-right: 10px;
}
</style>
```
在子组件内的`<slot></slot>`标签就是插槽,代替了在父组件内的`<p>默认内容</p>`

如果你在父组件的自定义标签内,插入了`html`模板,在子组件没有使用`slot`,那么父组件内插入的标签内容是不会被插入进去的

现在知道插槽是什么了吧,可以在组件标签内定义需要的内容，通过插槽加入到组件内部中

组件内部的`<slot></slot>`元素就好像一个传送门，也就是所谓的槽，它提供了内容的入口，也决定了内容的位置。 组件标签中定义的内容，通过这个“传送门”就可以加入到组件内部中

插槽中的“插件”就是组件标签中的内容。

插槽中的“槽”就是在组件中的`<slot></slot>`元素,当没有`<slot></slot>`元素的时候，就不渲染组件标签中的内容

当是默认插槽时,我们可以使用`template`标签给包裹起来的,并且在上面添加`v-slot:default`属性,这代表的是默认插槽
```html
<template v-slot:default>
    <p>默认内容</p>
</template>
```
## 具名插槽

如果要将不通的内容放在不通的位置,那么默认插槽就无法办到了

顾名思义,具名插槽,就是给插槽定义一个名字,让每个不通的模板对应着不通的名字

我们给在父组件内的插入的模板属性上添加`v-slot:插槽名字`,而在子组件内通过添加name属性`<slot name="插槽名字"></slot>`

需要注意的是,`name`的值需要与`v-slot`的值要一一对应,如果对不上的话,那么就会达不到我们预期的效果

如下示例代码所示:在App父组件中
```html
<template>
  <div id="app">
     <SlotBase
              :lists="lists">
             <template v-slot:default>
               <p>默认内容</p>
             </template>
             <template v-slot:content>
                   <p>我是直播卖酒-content</p>
             </template>
              <!-- <template v-slot:content2>
                   <p>我是直播打赏-content</p>
             </template> -->
             <!-- 可以简写成如下所示 -->
              <template #content2>
                   <p>我是直播打赏-content</p>
             </template>
     </SlotBase>
  </div>
</template>

<script>

import SlotBase from "./components/SlotBase.vue"

export default {
  name: 'App',
  components: {
    SlotBase
  },
  data() {
    return {
      lists: [
        {
          id: "001",
          title: "直播卖酒",
        },
        {
          id: "002",
          title: "直播打赏"
        },
        {
          id: "003",
          title: "直播炫富"
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
而在子组件,`slotBase.vue`中
```html
<template>
    <div class="wrap">
        <div class="list" v-for="list in lists" :key="list.id">
            {{list.title}}
            <!-- 此处引入slot标签 -->
            <slot></slot>
            <slot name="content" v-if="list.title =='直播卖酒'"></slot>
            <slot name="content2" v-if="list.title =='直播打赏'"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlotBase",
        props: {
            lists: {
                type: Array
            }
        },
        mounted() {
            console.log(this.lists);
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    justify-content: center;
}
.list {
    width: 400px;
    height: 200px;
    border:1px solid red;
    margin-right: 10px;
}
</style>
```
上面我用了一个`v-if`条件渲染表达式,我们可以可以根据一些条件控制元素的显示和隐藏

上面的具名插槽,在父组件中`v-slot:content`可以缩写为`#content`,当我们看到这种简写的时候,知道它也是给插槽起一个具体的名字即可

它跟 `v-on` 和 `v-bind` 一样，`v-slot` 也有缩写，即把参数之前的所有内容 (`v-slot:`) 替换为字符 `#`。例如 `v-slot:header` 可以被重写为 `#header`


如果你看不懂,那就是对简写插槽的名称有些陌生了

从上面的示例中,我们可以做出一些总结

1. 具名插槽可以根据名称渲染对应的html标签模板内容
2. 没有定义名称的内容会被默认插槽统一渲染
3. 默认插槽其实也是一个具名插槽,名称为`default`
4. 父组件内插槽内容可以是模板`html`标签元素,也可以是组件

::: tips 注意
这个`v-slot`只能用在`template`标签上
:::

## 旧版本写法

在父组件上使用`v-slot:插槽名称`,这个是`vue2.6.0`以后的写法,在`vue2.6.0`之前,可以在模板上使用`slot="插槽的名称"`


## 作用域插槽

相比于默认插槽,具名插槽,作用域插槽有些难以理解

如果你理解js中的作用域链和Es6中的块级作用域,那么对于衔接作用域插槽,可能会好些

有时，让插槽内容能够访问子组件中才有的数据,是很有用的

**插槽中内容的流动方向是从组件标签传到组件内部**,而**作用域插槽则让作用域反向流动,从组件内部传到组件标签内,可以在组件标签内访问到组件内部的变量**，

换而言之,在父组件的模板中,如何拿到子组件传递过来的数据,而子组件(插槽)内部定义的数据,如何传递到父组件当中去

也就是可以通过作用域插槽传递数据

我们在`slotBase.vue`组件中内部定义一个数据`msg`
```html
<template>
    <div class="wrap">
        <div class="list" v-for="list in lists" :key="list.id">
            {{list.title}}
            <!-- 此处引入slot标签 -->
            <slot></slot>
            <!--  v-bind,自定义属性的方式向slot插槽传递了属性-->
            <slot name="content" 
                  v-if="list.title =='直播卖酒'" 
                  :msg="msg"></slot>
            <slot name="content2" v-if="list.title =='直播打赏'"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SlotBase",
        props: {
            lists: {
                type: Array
            }
        },
        data() {
            return {
                // 子组件定义的数据
                msg: "itclanCoder"
            }
        },
        mounted() {
            console.log(this.lists);
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    justify-content: center;
}
.list {
    width: 400px;
    height: 200px;
    border:1px solid red;
    margin-right: 10px;
}
</style>
```
在上面的代码中,在`slot`元素上绑定了`msg`属性,这个`attribute`被称为插槽prop

那么在父级作用域中,又该如何接收子组件传递过来的数据呢

在`v2.6.0`中使用的是`v-slot:插槽名="slotProps"`,其中这个`slotProps`是自己任意定义的,名字自己随意

代码如下所示:
```html
 <template v-slot:content="slotProps">
    {{slotProps.msg}}
</template>
// 也可以缩写为#插槽名="属性Props"
 <template #content="slotProps">
    {{slotProps.msg}}
</template>
```
而在旧版本中,也可以这么写
```html
<template slot="content" slot-scope="slotProps">
        {{slotProps.msg}}
</template>
```
新版本的写法与vue2.6.0以下的版本不能混写,注意,这种废弃的语法,在`vue3.0`中不会出现了的

所以还是用最新的写法吧,但是一些老的vue2.0项目,旧版本的写法,要看的懂的


以上就是默认插槽,具名插槽,作用域插槽的使用,插槽是一个非常强大的功能,在组件的复用时,对于复用结构和精简代码非常有用

如果大家有做过那种后台cms管理系统，针对很多不同种类的各种表单弹窗,而表单弹窗内,有时要根据后端返回的接口`props`去显示指定的内容

这时候,插槽就非常有用了

## 独占默认插槽的缩写

当被提供的内容只有默认插槽时,组件的标签才可以被当做插槽的模板来使用

我们可以直接把`v-slot`直接用在组件上

```html
<CurrentUser v-slot:default="slotProps">
          <p>{{slotProps.user}}</p>
</CurrentUser>
```
还可以在简化一下。就像假定未指明的内容对应默认插槽一样，不带参数的 `v-slot` 被假定对应默认插槽
```html
<CurrentUser v-slot="slotProps">
          <p>{{slotProps.user}}</p>
</CurrentUser>
```
需要注意的是,以下写法是不可以的,当`v-slot`用在自定义标签组件上,不能缩写

`Named slots must use '<template>' on a custom element`
```html
<CurrentUser #slotProps>
          <p>{{slotProps.user}}</p>
</CurrentUser>
```
::: tip 注意
默认插槽的缩写语法不能和具名插槽混用,因为它会导致作用域不明确
```html
<!-- 无效，会导致警告 -->
<current-user v-slot="slotProps">
  {{ slotProps.user.firstName }}
  <template v-slot:other="otherSlotProps">
    slotProps is NOT available here
  </template>
</current-user>
```
:::
只要出现多个插槽,所有的插槽使用完整的基于`template`的语法
也就是说,`v-slot`用在`template`标签上
```html
<current-user>
  <template v-slot:default="slotProps">
    {{ slotProps.user.firstName }}
  </template>

  <template v-slot:other="otherSlotProps">
    ...
  </template>
</current-user>
```
## 总结

以上本节的内容,插槽是一个非常强大的功能,默认插槽在子组件内部使用`<slot></slot>`进行占位,而在父组件内,使用`html`标签,或者组件

如果子组件使用了多个插槽，那么就使用**具名插槽**对每个插槽进行区分,子组件内的`<slot name="插槽名称"></slot>`,而在父组件中,使用`template`标签

`<template v-slot:插槽名称></template>`,其中`v-slot`有简写`#插槽名称`,可以使用在具体的标签上,但是当有多个插槽时,只能用在`template`标签上

当父组件想要拿到子组件中的数据,子组件内部又是如何把内部数据传递到外部组件中去的呢,在子组件内部是通过在`slot`插槽`props`传递到父父组件当中去的

而在父组件当中,通过`v-slot:插槽名="slotProps"`进行接收,这个`slotProps`是一个集合对象,接收了子组件`props`的

这就是作用域插槽,它也是父子组件传递数据的一种方式


<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />