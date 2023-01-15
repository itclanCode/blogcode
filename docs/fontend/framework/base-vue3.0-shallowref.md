---
title: VueJs中的shallowRef与shallowReactive的使用比较
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中的shallowRef与shallowReactive的使用比较

## 快速导航

<TOC />

## shallowRef

如果传入基本数据类型,那么`shallowRef`与`ref`的作用基本没有什么区别,也就是浅层的`ref`的内部值将会原样的存储和暴露,并不会被深层递归地转为响应式

但如果是对象的话,那么就存在区别了的,`shallowRef`不处理对象类型的数据

其实,它就是只处理基本数据类型的响应式,不进行对象的响应式处理

性能优化,应用场景:如果有一个对象数据,后续功能不会修改该对象中的属性,而是生的对象来替换,那么就可以用`shallowRef`

`shallowRef()` 常常用于对大型数据结构的性能优化或是与外部的状态管理系统集成

```js
const state = shallowRef({ count: 1 })

// 不会触发更改
state.value.count = 2

// 会触发更改
state.value = { count: 2 }
```

## shallowReactive

浅层作用的响应式数据处理，也就是只处理第一层对象的数据,在往下嵌套的数据,操作数据是不起作用的

只考虑对象第一层的数据响应式,在第一层嵌套下的数据不考虑

与`reactive()`不同,没有深层及的转换,一个浅层响应式对象里只有根级别的属性是响应式的,属性的值会被原样存储和暴露,这意味着值为`ref`的属性不会被自动解构的

性能优化:具体应用场景:

如果有一个对象数据,数据结构比较深,复杂,但变化时只需要外层属性变化,那么就可以使用`shallowReactive`

```js
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 更改状态自身的属性是响应式的
state.foo++

// ...但下层嵌套对象不会被转为响应式
isReactive(state.nested) // false

// 不是响应式的
state.nested.bar++
```

## 总结

`shallowReative`与`shallowRef`在某些特殊的应用场景下,是可以提升性能的,前者针对对象,用于浅层作用的响应式数据处理,而后者只处理基本数据类型的响应式,不进行对象的响应式处理


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />



