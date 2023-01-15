---
title: vueJs中readonly与shallowReadonly函数的使用比较
collapsable: true
autoGroup-2: Vue3基础
---

## vueJs中readonly与shallowReadonly函数的使用比较

## 快速导航

<TOC />

## readonly

让一个响应式数据变为只读的,接收一个响应式数据,经过`readonly`加工处理一下,那么新赋值的数据都不允许修改

接受一个对象 (不论是响应式还是普通的) 或是一个 `ref`，返回一个原值的只读代理

页面没有更新有两种情况

[1]. 数据修改了,但数据不是响应式,`vue`监测不到

[2]. 数据压根就没有更改

```js
const original = reactive({ count: 0 })

const copy = readonly(original)

// 更改源属性会触发其依赖的侦听器
original.count++

// 更改该只读副本将会失败，并会得到一个警告,页面数据不会更新
copy.count++ // warning!
```

## shallowreadonly

接收一个响应式数据,经过`shallowreadonly`的处理,变成一个只读的,只考虑对象的第一层数据,不可以修改,但是第一层嵌套里的深层数据却支持修改

让一个响应式数据变为只读能力(浅只读)

应用场景: 不希望数据被修改,当数据是从别的地方取过来,不希望影响源数据

```js
const state = shallowReadonly({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 更改状态自身的属性会失败,不可以修改
state.foo++

// ...但可以更改下层嵌套对象
isReadonly(state.nested) // false

// 这是可以通过的
state.nested.bar++

```

## 总结

`readonly`与`shallowReadonly`都是让响应式数据只具备读的能力,后者是浅层次的只读,也就是只对数据对象第一层起作用,深层次的嵌套,当时用`shallowReadonl()`处理时,深层次数据支持被修改

在不希望数据被修改,或当数据是从别的地方取过来,不希望影响源数据时,使用`readonly()`或`shallowReadonly()`就很有用

至于数据能不能修改是由写代码的开发者决定的,也是由产品功能决定的,支不支持修改,可以控制数据是否能读写能力

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />