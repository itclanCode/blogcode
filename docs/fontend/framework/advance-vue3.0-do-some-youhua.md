---
title: Vue3.0 做了哪些优化
autoGroup-3: Vue3.0源码
---

## Vue3.0 做了哪些优化

<TOC />

## 快速导航

## 前言

从 vue1.x 到 2.0,引入虚拟 DOM 的概念,所谓虚拟 DOM 就是`javaScript`对象

在页面渲染完成之前,把页面转换为 javaScript 对象,最后才会真正的渲染成真正的 DOM

Vue3.0 做了一些不小的改变

## 源码优化

主要使用`monorepo`和`typeScript`管理和开发源码，加入了静态类型,提升代码的可维护性

### 更好的代码管理方式-monorepo

vuejs2.x 的开发源码是放置在 src 目录下的,然后根据功能拆分成`components`,什么`store`,`router`等之类的,有`compiler`,模板编译的相关的代码,core(与平台无关的通用运行代码),platform(平台转悠代码),server(服务端渲染的相关代码),sfc(xxx.vue 单文件组件相关代码),assets 等静态资源等目录

总得来说,vue2.xx 的目录结构是这样的
:::: tabs type:border-card
::: tab vue2.xx 目录结构 lazy

```js
src;
---compiler;
---core;
---platforms;
---server;
---sfc;
---components;
---shared;
```

:::
::: tab vue3.0 的目录结构 lazy
vue3.0,整个源码是通过 momorepo 的方式进行维护的,根据功能将不同的模块拆分到 packages 目录下面的不同子目录中

```js
packages
  --compiler-core
  --compiler-dom
  --compiler-sfc
  --compiler-ssr
  --reacitvity
  --runtime-core
  --runtime-dom
  --server-renderer
  --shared
  --size-check
  --template-explorer
  --vue
   ...
```

:::
::: tab 说明 lazy
相对于 vue2.x 的源码组织方式，monorepo 把这些模块拆分到不同的 package 中,每个 package 都有各自的 API,类型定义盒测试,这样使得模块拆分更细化,职责划分更明确，模块之间的依赖关系更加明确

一些 package（比如 reactivity 响应式库）是可以独立于 `Vue.js` 使用的，这样用户如果只想使用 Vue.js 3.0 的响应式能力，可以单独依赖这个响应式库而不用去依赖整个 Vue.js，减小了引用包的体积大小，而 Vue.js 2 .x 是做不到这一点的

:::
::::

## 有类型的 javaScript:TypeScript

vue3.0 使用 TypeScript 重构了整个项目,TypeScript 提供了更好的类型检查，能够支持复杂的类型推导

## 性能优化

### 源码体积优化

javaScript 包体积越小,意味着网络传输的时间越短,javaScript 引擎解析包的速度也越快

⒈ 移除了一些冷门的 feature(比如:filter)

⒉ 引入 tree-shaking 的技术,减少打包体积

tree-shaking 依赖 ES2015 模块语法的静态结构（即 import 和 export），通过编译阶段的静态分析，找到没有引入的模块并打上标记

一个 math 模块定义了 2 个方法 `square(x)` 和 `cube(x)`

```js
export function square(x) {
  return x * x;
}
export function cube(x) {
  return x * x * x;
}
```

我们在这个模块外面只引入了 cube 方法

```js
import { cube } from './math.js';
// do something with cube
```

最终 math 模块会被 webpack 打包生成如下代码

```js
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
  'use strict';
  /* unused harmony export square */
  /* harmony export (immutable) */ __webpack_exports__['a'] = cube;
  function square(x) {
    return x * x;
  }
  function cube(x) {
    return x * x * x;
  }
});
```

未被引入的 `square` 模块被标记了， 然后压缩阶段会利用例如 `uglify-js`、`terser` 等压缩工具真正地删除这些没有用到的代码。

也就是说，利用 `tree-shaking` 技术，如果你在项目中没有引入 `Transition`、`KeepAlive` 等组件，那么它们对应的代码就不会打包，这样也就间接达到了减少项目引入的 Vue.js 包体积的目的

### 数据劫持优化

Vue.js 是响应式的,它是 DOM 是数据的一种映射，数据发生变化后可以自动更新 DOM，用户只需要专注于数据的修改

当数据改变后，为了自动更新 DOM，那么就必须劫持数据的更新，也就是说当数据发生改变后能自动执行一些代码去更新 DOM

Vue.js 1.x 和 Vue.js 2.x 内部都是通过 `Object.defineProperty` 这个 `API` 去劫持数据的 `getter` 和 `setter`，具体是这样的

```js
Object.defineProperty(data, 'a', {
  get() {
    // track
  },
  set() {
    // trigger
  },
});
```

这个 `API` 有一些缺陷，它必须预先知道要拦截的 `key` 是什么，所以它并不能检测对象或数组属性的添加和删除。尽管 Vue.js 为了解决这个问题提供了 `$set` 和 `$delete` 实例方法

如果这个嵌套层级比较深，使用`Object.defineProperty`就会有问题

```js
export default {
  data: {
    a: {
      b: {
        c: {
          d: 1,
        },
      },
    },
  },
};
```

由于 Vue.js 无法判断你在运行时到底会访问到哪个属性，所以对于这样一个嵌套层级较深的对象，如果要劫持它内部深层次的对象变化，就需要递归遍历这个对象，执行 `Object.defineProperty` 把每一层对象数据都变成响应式的。

毫无疑问，如果我们定义的响应式数据过于复杂，这就会有相当大的性能负担。

Vue.js 3.0 使用了 `Proxy API` 做数据劫持，它的内部是这样的

```js
observed = new Proxy(data, {
  get() {
    // track
  },
  set() {
    // trigger
  },
});
```

由于它劫持的是整个对象，那么自然对于对象的属性的增加和删除都能检测到。

但要注意的是，Proxy API 并不能监听到内部深层次的对象变化，因此 Vue.js 3.0 的处理方式是在 getter 中去递归响应式，这样的好处是真正访问到的内部对象才会变成响应式，而不是无脑递归，这样无疑也在很大程度上提升了性能

## 编译优化

在 vue3.0 中做到了,它通过编译阶段对静态模板的分析,编译生成了`block tree`,`block tree`是一个将模板基于动态节点指令切割的嵌套区块,每个区块内部的节点结构是固定的

而且每个区块只需要以一个`Array`来追踪自身包含的动态节点,借助`block tree`,vue.js 将`vnode`更新性能由与模板整体大小相关提升为与动态内容的数量相关

在 vue3.0 中,在编译阶段还包括了对`slot`的编译优化,事件侦听器函数的缓存优化,并且在运行时重写了 diff 算法

### 语法 API 优化-composition API

⒈ 优化逻辑组织

在 vue2.0 中编写组件的本质就是在编写一个包含了描述组件选项的对象,我们把它成为`options API`,它的好处就是在于写法符合直觉思维

Options API 的设计是按照`methods`,`computed`,`data`,`props`这些不同的选项分类.当组件小的时候,这种分类方式一目了然

但是在大型项目组件中,一个组件可能有多个逻辑关注点,当使用`options API`的时候,每一个关注点都有自己的`options`,如果需要修改一个逻辑点关注点,就需要在单个文件中不断的上下切换和寻找

Vue3.0 中提供了一种新的 API,composition API，它有一个很好的机制去解决这样的问题,就是将某个逻辑关注点相关的代码全部放在一个函数里,这样当需要修改一个功能时,就不在需要在文件中跳来跳去

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/568b0ced69f241d282cf2c512e4e5f33~tplv-k3u1fbpfcp-watermark.image" alt="OptionsAPI" />
   <img class="medium-zoom lazy"  loading="lazy"  src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d05799744a6341fd908ec03e5916d7b6~tplv-k3u1fbpfcp-watermark.image" alt="OptionsAPI" />
    <img class="medium-zoom lazy"  loading="lazy"  src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4146605abc9c4b638863e9a3f2f1b001~tplv-k3u1fbpfcp-watermark.image" alt="OptionsAPI" />
   <p>图采用掘金的一位大佬</p> 
</div>

⒉ 优化逻辑复用

当我们开发项目变得复杂的时候，免不了需要抽象出一些复用的逻辑。在 Vue.js 2.x 中，我们通常会用 mixins 去复用逻辑

```js
const mousePositionMixin = {
  data() {
    return {
      x: 0,
      y: 0,
    };
  },

  mounted() {
    window.addEventListener('mousemove', this.update);
  },

  destroyed() {
    window.removeEventListener('mousemove', this.update);
  },

  methods: {
    update(e) {
      this.x = e.pageX;
      this.y = e.pageY;
    },
  },
};

export default mousePositionMixin;
```

然后在组件中使用

```js
<template>
  <div>
    Mouse position: x {{ x }} / y {{ y }}
  </div>
</template>
<script>

import mousePositionMixin from './mouse'
export default {
  mixins: [mousePositionMixin]
}

</script>
```

使用单个 mixin 似乎问题不大，但是当我们一个组件混入大量不同的 mixins 的时候，会存在两个非常明显的问题：命名冲突和数据来源不清晰。

首先每个 `mixin` 都可以定义自己的 `props`、`data`，它们之间是无感的，所以很容易定义相同的变量，导致命名冲突。另外对组件而言，如果模板中使用不在当前组件中定义的变量，那么就会不太容易知道这些变量在哪里定义的，这就是数据来源不清晰。

但是`Vue.js 3.0` 设计的 `Composition API`，就很好地帮助我们解决了 `mixins` 的这两个问题。

我们来看一下在 Vue.js 3.0 中如何书写这个示例：

```js
import { ref, onMounted, onUnmounted } from 'vue';

export default function useMousePosition() {
  const x = ref(0);

  const y = ref(0);

  const update = (e) => {
    x.value = e.pageX;

    y.value = e.pageY;
  };

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return { x, y };
}
```

这里我们约定 `useMousePosition` 这个函数为 hook 函数，然后在组件中使用

```js
<template>
  <div>
    Mouse position: x {{ x }} / y {{ y }}
  </div>
</template>

<script>

  import useMousePosition from './mouse'

  export default {

    setup() {

      const { x, y } = useMousePosition()

      return { x, y }

    }

  }

</script>

```

可以看到，整个数据来源清晰了，即使去编写更多的 hook 函数，也不会出现命名冲突的问题。

Composition API 除了在逻辑复用方面有优势，也会有更好的类型支持，因为它们都是一些函数，在调用函数时，自然所有的类型就被推导出来了，不像 Options API 所有的东西使用 this。另外，Composition API 对 tree-shaking 友好，代码也更容易压缩。

虽然 Composition API 有诸多优势，它也不是一点缺点都没有，关于它的具体用法和设计原理，我们会在后续的章节详细说明。这里还需要说明的是，Composition API 属于 API 的增强，它并不是 Vue.js 3.0 组件开发的范式，如果你的组件足够简单，你还是可以使用 Options API

## 结语

总结来说,vue3.0 是一种不可阻挡的趋势,但是周边生态并没有 v2.0 完善,大量应用于项目中还有待考量,需要有人填坑,补坑

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
