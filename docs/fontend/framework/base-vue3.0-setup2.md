---
title: VueJs中setup的使用(下)
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中setup的使用(下)

## 快速导航

<TOC />

## 前言

在`Vue`当中,父组件想要向子组件传值,是通过在父组件标签上通过自定义属性实现的,而在子组件中是通过`props`进行接收

在`Vue2.0`里面,在子组件中的选项式API配置项选项中`props`进行接收就可以了的,在子组件中的模板中可以直接使用

但在`Vue3`里面与`Vue2.0`存在一些差异,这个主要是针对组合式API的`setup`函数

## seup()函数接收第一个参数props

`setup`函数的第一个参数是接收父组件传递过来的`props`,这个`setup`函数的`props`是响应式的,并且会在传入的新的`props`时同步更新

如下是父组件的数据
```html
<script setup>
import  Comp  from "./Comp.vue"
import { ref } from 'vue'
const name = "https://coder.itclan.cn"
</script>

<template>
  <Comp :name="name" />
</template>
```
如下是子组件`Comp.vue`
```js
export default {
    props: {
        name
    },
    setup(props) {
        console.log(props.name);
    }
}
```
在模板中渲染
```html
<template>
  <h1>{{name}}</h1>
</template>
```
那如何去修改模板中的数据呢,这个与`Vue2.0`绑定事件一样,在模板中,通过`v-on`或`@`进行绑定,函数则通过`function`定义在`setup`里面,同时返回出去

```html
<template>
  <h1>{{name}}</h1>
  <button @click="handleChange">修改</button>
</template>
```
对应的`js`
```js
<script>
 import { ref } from 'vue'
 export default {
   props: {    // 必须要声明接收才可以,否则页面数据不会显示
     name
   },
   setup(props){
     console.log(props.name);
     let name = ref(props.name);   // 相当于是对props传递过来的数据做了一份拷贝
     function handleChange() {
        console.log(name.value);
        name.value = "川川"
     }
     return {
       name,
       handleChange
     }
   }
 }
</script>
```
::: tip 注意事项
[1]. 想要修改父组件传递过来的`props`值,接收到的`props.name`必须要使用`ref`进行响应式处理,否则的话,修改`name`的值,页面是不起作用的

[2]. 在逻辑中,需要通过`xxx.value`才能拿到具体的值

[3]. `setup`中定义的函数,需要返回出去,否则模板中绑定的函数是无效的
:::

当使用选项式`API`,方法定义在`methods`内时,想要访问,修改`setup()`函数内定义的响应式变量或函数时,可以使用`this.setup对外暴露的变量`

如下代码所示,`Comp.vue`,下面的方法是定义`methods`内的,同样是可以实现同样的功能
```html
<template>
  <h1>{{name}}</h1>
  <button @click="handleChange">修改</button>
</template>
<script>
  import { ref } from "vue"
  export default {
    props: {      // Vue2要用props配置项,声明接收,可以对类型进行控制,当然通过this.$attrs.属性也是可以拿到的,只是这种方式没办法控制类型,使用这种方式,是没有声明props,若声明接收了,则实例上会没有$attrs属性的挂载
        name
    },
    methods: {
      handleChange() {
        console.log(this.name);
        this.name = "itclanCoder";  // 通过this.setup函数对外暴露出去的变量
      }
    },
    setup(props) {
        console.log(props.name);
        let name = ref(props.name);  // 这里的值必须要用ref包裹,否则页面的数据不会响应式
      
        return {
          name
        }
    }
}
</script>
```
通过上面的代码,在选项式API中可以通过`this`访问组合式API中的变量数据,也可以得出,组合式API内定义的变量和函数,最终都会变为选项式API的配置选项

在选项式API内,可以通过`this`访问`setup`内对外暴露的变量和函数

其实,选项式API是在组合式API的基础上实现的,对于`Vue2.0`的基础知识,放在`Vue3`里面,也都是通用的

那不用`setup`函数,直接在`script`标签上书写`setup`,这个`setup`是在单文件组件(sfc)中使用组合式API编译时的语法糖

如下代码所示`Comp.vue`
```html
<template>
  <h1>{{name}}</h1>
  <button @click="handleChange">修改</button>
</template>
<script setup>
  import { ref} from "vue"
  // 如果直接使用setup在标签上,那么接收父组件传递过来的值,需要使用defineProps()函数,它不需要从vue当中引入,直接在逻辑中就可以使用，使用的编译器宏。会随着 <script setup> 的处理过程一同被编译掉
  const props = defineProps({
    name: {
      type: String
    }
  })
  // 想要修改父组件的值,需要使用defineEmits(['父组件上定义的事件名'])
  const emit = defineEmits(['handleChangeTxt'])
  let newName = ref("itclanCoder");
  function handleChange() {
    emit('handleChangeTxt',newName);  // 第一个参数值是事件名,第二个是具体要修改的参数值
  }
  
</script>
```
在父组件中的代码如下所示
```html
<script setup>

import Comp from "./Comp.vue"
import { ref } from 'vue'

let name = ref('https://coder.itclan.cn')  // 原始数据
function handleChangeTxt(event) {
  name.value = event.value;
}
</script>

<template>
  <Comp @handleChangeTxt="handleChangeTxt" :name="name" />
</template>
```
以上就是通过在`setup`在`script`标签上,接入父组件传递过来的值,需要使用`defineProps()`函数,它不需要从`vue`当中引入,直接在逻辑中就可以使用，使用的编译器宏。会随着 `<script setup>` 的处理过程一同被编译掉

且必须要声明`defineProps({})`,并接收`props`值,否则的话,页面是没有任何显示的

而若要修改父组件传递过来的`props`值,是没有办法直接修改的,在`Vue`当中是数据父组件向子组件传递数据流失单向的，数据的流动方向只能是自上往下的方向

想要修改的话,如果是使用`setup()`函数的方式,那么需要使用`ref`包裹接收的`props`值,如`let name = ref(props.name); `,否则页面的数据不会响应式

使用选项式`API`的方法`methods`修改页面中的数据,还是直接在`setup`里面,都是可以修改的

但是如果是通过`setup`形式,那么需要借用`defineEmits('定义的事件名')`,这里是有一点绕的
```js
import { ref} from "vue"

  // 想要修改父组件的值,需要使用defineEmits(['父组件上定义的事件名'])
  const emit = defineEmits(['handleChangeTxt'])     // 可以是多个,多个事件,用逗号分开defineEmits(['事件名1','事件名2'])
  let newName = ref("itclanCoder");   // 想要修改的值
  function handleChange() {           // 修改的函数
    emit('handleChangeTxt',newName);  // 第一个参数值是事件名,第二个是具体要修改的参数值
  }
```
当前子组件的模板

```html
<template>
  <h1>{{name}}</h1>
  <button @click="handleChange">修改</button>
</template>
```
而在父组件中,调用组件处,绑定事件,事件函数中接收一个参数`event`,携带的是子组件的内传递过来的数据,在父组件中修改数据,从而达到页面的数据的变更
```html
<script setup>
  import Comp from "./Comp.vue"
import { ref } from 'vue'

let name = ref('https://coder.itclan.cn')
function handleChangeTxt(event) {
  name.value = event.value;
}
</script>

<template>
  <Comp @handleChangeTxt="handleChangeTxt" :name="name" />
</template>
```
::: tip 注意事项
在使用`setup()`函数中,如果是通过解构`props`对象,那么解构出来的变量将会丢失响应式,也就是你改变此数据,页面不会更新,因此官方推荐通过`props.父组件传递给子组件的props值`的形式来接收`props`值
```js
setup(props) {
   const {name} = props;  // 此时name的响应式值会丢失
   // 官方推荐如下这种形式，同时对传递过来的props值进行响应式数据处理
   const name = ref(props.name);  
}
```
如果你确定要结构`props`对象,或需要将某个`prop`传到一个外部函数中并保持响应式,可以使用`toRefs()`和`toRef()`这两个组合式API函数

如下示例代码所示
```js
import { toRefs, toRef } from 'vue'

export default {
  setup(props) {
    // 将 `props` 转为一个其中全是 ref 的对象，然后解构
    const { name } = toRefs(props)
    // `title` 是一个追踪着 `props.name` 的 ref
    console.log(name.value)

    // 或者，将 `props` 的单个属性转为一个 ref
    const title = toRef(props, 'name')
  }
}
```
:::

## setup()函数的第二个参数context

`setup`第一个参数是`props`,它的值是一个`proxy`对象,接收组件外部传递过来的`props`值,且在组件内部声明接收了的属性

第二个参数是`context`,上下文对象,接收外部传递过来的属性,需要关注`attrs(相当于vue2.0的$attrs)`,`emit(触发自定义事件)`,`slots(相当于vue2中的$slots)`

[1]. `context.attrs`:相当于`vue2.0`当中的$attrs

[2]. `context.emits`:

如下子组件中`Comp.vue`
```js
<script>
  export default {
    emits: ['parentFun'],  // 需要声明一下自定义事件,否则会有警告
    setup(props,context) {

      // 子组件绑定的方法
      function childFun() {
        context.emit('parentFun','itclanCoder')
      }

      return {
        childFun
      }
    }
  }
</script>

```
在父组件中
```html
<template>
   <Comp @parentFun ="showParent"></Comp>
</template>
<script>
  export default {
    setup() {
      function showParent(value) {
        alert("触发了showParent事件,收到的参数是",`${value}`);
      }

      return {
        showParent
      }
    }
  }
</script>
```
上面的是针对`setup`函数,如果`setup`直接写在`script`上,那么使用`defineEmits()`

[3]. `context.slots`: 接收父组件插入的插槽,相当于`this.$slots`,在`vue3`中的命名插槽的是`v-slot:插槽名字`,同时它是使用在`template`标签上的

上下文对象是非响应式的，可以安全地解构的

```js
export default {
  setup(props, { attrs, slots, emit, expose }) {
    ...
  }
}
```
需要注意的是,`attrs` 和 `slots` 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 `attrs.x `或 `slots.x `的形式使用其中的属性。此外还需注意，和 `props `不同，`attrs` 和` slots `的属性都不是响应式的。如果你想要基于 `attrs` 或 `slots `的改变来执行副作用，那么你应该在 `onBeforeUpdate` 生命周期钩子中编写相关逻辑

## 总结

需要知道的是,在使用`setup()`函数形式时,怎么接收父组件传递过来的值,以及`setup`直接使用在`script`标签上的,怎么接收父组件传递过来的值,还有怎么修改

子组件中的数据,分别有两种不同的方式,以及`setup()`函数的第二个参数上下文对象参数的含义与使用

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />

