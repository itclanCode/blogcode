---
title: vueJs中toRaw与markRaw函数的使用比较
collapsable: true
autoGroup-2: Vue3基础
---

## vueJs中toRaw与markRaw函数的使用比较

## 快速导航

<TOC />


## toRaw()函数

接收一个`reactive`响应式数据,将一个响应式的数据变为普通类型的数据,转化为非响应式数据,相当于还原对象,`reactive`相当于制作,但对于`ref`响应式数据不起作用

将一个由`reactive`生成的响应式对象转为普通(原始)对象

`toRaw()`可以返回由`reactive()`,`readonly()`,`shallowReactive()`或`shallowReadonly()`创建的代理对应的原始对象

这是一个可以用临时读取而不引起代理访问/跟踪开销,或是写入而不触发更改的特殊方法,在官方文档里,是不建议保存对原始对象的持久引用

使用场景:用于读取响应式对象的普通对象,对这个普通对象的所有操作,不会引起页面的更新

```js
const foo = {}
const reactiveFoo = reactive(foo)

console.log(toRaw(reactiveFoo) === foo)  // true
```

::: tip 注意
针对对象,后续动态新增的属性,如果没有把整个对象对外暴露出去,模板中使用新增的变量是不生效的(针对setup函数形式)
:::

## markRaw()函数

接收一个原始数据,标记一个对象,使它永远不会再成为响应式对象,也就是数据在逻辑中即使修改变化了,但是页面不会更新变化

将一个对象标记为不可被转为代理,返回该对象本身

应用场景:

[1]. 有些值不应该被设置为响应式的,例如复杂的第三方类库或`Vue`组件对象

[2]. 当渲染具有不可变数据源的大列表时,跳过响应式转换可以提高性能

```js
const foo = markRaw({})
console.log(isReactive(reactive(foo))) // false

// 也适用于嵌套在其他响应性对象
const bar = reactive({ foo })
console.log(isReactive(bar.foo)) // false
```

`markRaw()`与`shallowReactive()`这样浅层式`API`使你可以有选择的避开默认的深度响应/只读转换,并在状态关系谱中嵌入原始,非代理的对象

如果把一个嵌套的,没有标记的原始对象设置成一个响应式对象,然后再次访问它,你获取到的是代理的版本,这可能会导致对象身份风险

即执行一个依赖于对象身份的操作,但却同时使用了同一对象的原始版本和代理版本
```js
const foo = markRaw({
  nested: {}
})

const bar = reactive({
  // 尽管 `foo` 被标记为了原始对象，但 foo.nested 却没有
  nested: foo.nested
})

console.log(foo.nested === bar.nested) // false
```

## 总结

`ref()`与`reactive()`是将一个非响应式类型数据变为响应式数据,而`toRaw()`与`markRaw()`相当于是对响应式数据的还原,将一个响应式数据变为非响应式数据

而`toRaw`只针对响应式对象类型的数据起作用,如果涉及到将一个响应式数据转变为非响应式数据,只用于纯数据的渲染,不引起页面的更新,就可以使用`toRaw`或`markRaw()`

往往可以提升数据的性能

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />





