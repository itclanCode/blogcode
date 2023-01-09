---
title: VueJs中的toRef与toRefs函数的一个比较
collapsable: true
autoGroup-2: Vue3基础
---

## VueJs中的toRef与toRefs函数的一个比较

## 快速导航

<TOC />

## 前言

`ref`是处理基本数据类型响应式`API`函数,在`setup`中声明定义的变量,可以直接在模板中使用

没有被响应式API包裹处理的变量数据,是不具备响应式能力的

也就是往往在逻辑中修改了数据,但是页面不会更新,那怎么样将一个非响应式数据变成响应式数据

就需要用到`toRef()`与`toRefs()`这两个`componsition API`的

单纯的去看概念,往往比较抽象,是难以理解的,还是需要从具体的实例出发

## toRef()函数

**作用**:创建一个`ref`对象,其`value`值指向另一个对象中的某个属性值,与原对象是存在关联关系的

也就是基于响应式对象上的一个属性,创建一个对应的`ref`,这样创建的`ref`与它的源属性是保持同步的,与源对象存在引用关系

改变源属性的值将更新`ref`的值
**语法**: `const 变量名 = toRef(源对象,源对象下的某个属性)`,如:`const name = toRef(person,'name')`
**应用**: 要将响应式对象中的某个属性单独提供给外部使用时,不想丢失响应式,把一个`prop`的`ref`传递给一个组合式函数也会很有用
**缺点**：`toRef()`只能处理一个属性,但是`toRefs(源对象)`却可以一次性批量处理

```html
<script setup>
import { reactive } from "vue";
const person = reactive({
   name:"川川",
   age: 18,
   job: {
     web: '前端开发',
     trade: '互联网'
   } 
});
</script>
```
那在模板当中想要渲染数据可以这么写
```html
{{person.name}} -{{person.age}}-{{person.job.web}}-{{person.job.trade}}
```
如果不想在模板当中,写那么长,那么可以先解构,如下所示
```html
<script setup>
import { reactive } from "vue";
const person = reactive({
   name:"川川",
   age: 18,
   job: {
     web: '前端开发',
     trade: '互联网'
   } 
});

const { name, age} = person;
const { web,trade} = person.job;
</script>
```
那在模板中,可以直接使用变量的,如下所示
```html
{{name}}-{{age}}-{{web}}-{{trade}}
```
现在,如果我们想要去修改变量数据,会发现,逻辑中的数据会被修改,但是页面中的数据不会更新,也就是丢失了响应式
比如:如下模板,分别修改名字,年龄属性
```html
<button @click="handleChangeAttrs">修改属性</button>
```
那在逻辑代码中
```html
<script setup>
import { reactive } from "vue";
const person = reactive({
   name:"川川",
   age: 18,
   job: {
     web: '前端开发',
     trade: '互联网'
   } 
});

const { name, age} = person;
const { web,trade} = person.job;

// 这样直接操作数据是无法修改的,因为它不是一个响应式数据,只是一个纯字符串,不具备响应式
function handleChangeAttrs() {
    name = "itclanCoder";
    age = 20;
}
</script>
```
如果想要修改数据,支持响应式,将一个非响应式数据,变成一个响应式数据,需要借用`toRef(源对象,源对象下指定的属性)`函数,如下所示

```html
<script setup>
import { reactive,toRef } from "vue";
const person = reactive({
   name:"川川",
   age: 18,
   job: {
     web: '前端开发',
     trade: '互联网'
   } 
});

// 想要修改指定哪个对象具备响应式,那么就使用toRef函数处理,toRef(源对象,源对象下的某个属性)
const name = toRef(person，'name');  
const age = toRef(person,'age');

// 经过了toRef的处理,修改变量的值,那么就需要xx.value
function handleChangeAttrs() {
    name.value = "itclanCoder";
    age.value = 20;
}
</script>
```
在模板当中,仍然是如上所示
```html
{{person}}
{{name}}-{{age}}-{{web}}-{{trade}}
<button @click="handleChangeAttrs">修改属性</button>
```
你会发现使用`toRef()`函数处理后,非响应式数据就具备响应式数据的能力了的,而且源数据也会同步

如果只是用于纯数据页面的展示,那是没有必要将数据转化为响应式数据的,如果需要修改数据,那么就需要将非响应式数据转化为响应式数据

是通过`toRef()`函数实现的

## 与ref的不同

如果你用`ref`处理数据的话,如下所示,使用`ref`处理数据,页面也能实现数据的响应式,更新,但是它与`toRef`是不同,有区别的

```html
<script setup>
import { reactive,toRef } from "vue";
const person = reactive({
   name:"川川",
   age: 18,
   job: {
     web: '前端开发',
     trade: '互联网'
   } 
});

// 使用ref
const name = ref(person.name);  
const age = toRef(person.age);

// 经过了toRef的处理,修改变量的值,那么就需要xx.value
function handleChangeAttrs() {
    name.value = "itclanCoder";
    age.value = 20;
}
</script>
```
修改数据,页面数据会更新,但是源数据不会同步,修改,并无引用关系,`ref`相当于是对源对象重新拷贝一份数据
`ref()`接收到的是一个纯数值


## toRefs()函数

`toRef()`只能处理源对象指定的某个属性,如果源对象属性很多,一个一个的使用`toRef()`处理会显得比较麻烦

那么这个`toRefs()`就很有用了,它与`toRef()`的功能一致,可以批量创建多个`ref`对象,并且能与源对象保持同步,有引用关系

**语法**:`toRefs(源对象)`,`toRefs(person)`

如上面的示例代码,修改为`toRefs()`所示
```html
<script setup>
import { reactive,toRefs } from "vue";
const person = reactive({
   name:"川川",
   age: 18,
   job: {
     web: '前端开发',
     trade: '互联网'
   } 
});

// 通过toRefs()批量处理,此时通过解构
const {name,age} = toRefs(person);  

// 经过了toRef的处理,修改变量的值,那么就需要xx.value
function handleChangeAttrs() {
    name.value = "itclanCoder";
    age.value = 20;
}
</scrip>   
```
当从组合式函数中返回响应式对象时，`toRefs` 是很有用的。使用它，消费者组件可以解构/展开返回的对象而不会失去响应性
```js
import { toRefs } from "vue";
function useFeatureX() {
  const state = reactive({
    foo: 1,
    bar: 2
  })

  // 在返回时都转为ref
  return toRefs(state)
}

// 可以解构而不会失去响应性
const { foo, bar } = useFeatureX()
```
::: tip 注意事项
`toRefs` 在调用时只会为源对象上可以枚举的属性创建 `ref`。如果要为可能还不存在的属性创建 `ref`，则改用 `toRef`
:::

## 为啥需要toRef()与toRefs()函数

**目的**：在保证不丢失响应式的前提下，把对象进行解构，方便对象数据分解和扩散

**前提**：针对的是响应式对象（`reactive`封装的）非普通对象

**注意**：不创造响应式（那是`reactive`的事情),它本身只是延续响应式,让一个非响应式数据通过`toRef`或`toRefs`转换为响应式数据能力

## 总结

这个`toRef()`与`toRefs()`是非常实用的,都是将一个非响应式数据变为一个具备响应式数据能力,与源对象可保持数据的同步,具备引用关系,前者只支持单个属性数据的处理,而后者支持数据的批量处理

修改数据时,页面数据会更新,这两个`composition API`函数是非常实用的,在实际业务开发中,如果涉及到修改页面的数据,那么就会用到

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />