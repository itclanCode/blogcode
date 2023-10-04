---
title: vuejs中封装axios请求集中管理
---

## vuejs中封装axios请求集中管理

## 快速导航

<TOC />

## 前言

在`vuejs`中，使用`axios`请求数据，一般会封装一个请求方法，然后在每个页面中调用，这样就造成代码冗余，导致代码可读性差，维护困难。

在项目当中,单独使用`axios`或者在`main.js`中全局引入`axios`，然后在每个页面中调用，这样做,不是不可以,但是会使项目的请求非常分散,这样是不易代码维护的,如果一些要求比较高的项目,是需要对请求进行封装的。

我们需要将`axios`请求集中管理，方便以后维护。

## 未封装前代码   

若没有进行封装,则需要在具体单文件中，单独引入`axios`，然后进行请求。

如下所示

```html
<template>
    <div>
          <div>
            <el-button type="primary"  @click="handleBtnGetJoke">请求数据</el-button>
            <el-button type="danger" @click="handleBtnClearData" v-if="aDatas.length > 0?true:false">清空数据</el-button>
    </div>
</template>

<script setup>
// 引入axios    
import axios from "axios";

let aDatas = ref([]);
let page = ref(1);
let pagesize = ref(5);

// 请求数据
async function handleBtnGetJoke() {
    const params = {
        key: 'aa1b7ad08be2a09a4e0d2d46897e2dc8',
        page: page.value,
        pagesize:pagesize.value,
        time: 1418816972
    }
    // 使用axios中的get请求数据
    const response = await await axios.get('/api/joke/content/text.php',{params})
    console.log(response);
    if(response.status == 200) {
        const { data } = response.data.result;
        console.log(data);
        aDatas.value = aDatas.value.concat(data);
    }
}

// 加载数据,叠加
function handleBtnLoading() {
    page.value++;
    handleBtnGetJoke(); 
    //getJokeListsData();
}

// 清空数据
function handleBtnClearData() {
    aDatas.value = [];
}
</script>

<style scoped>
.joke-list {
    list-style-type: decimal;
    list-style-position: outside;
    padding: 5px 0;
    border-bottom: dashed 1px #ccc;
}

.loading {
    margin: 0 auto;
    text-align:center;
}
</style>
```
如果没有进行`axios`封装,那么只要项目中的单文件组件,需要请求数据，那么就必须引入`axios`,而且需要频繁的写`axios.get()`或`axios.post()`

如果不想重复引入`axios`,也可以在`main.js`文件中，进行`axios`的全局的引入
```js

import { createApp } from 'vue';

import axios from "axios";

import ElementPlus from 'element-plus';
//import 'element-plus/lib/theme-chalk/index.css';   
import 'element-plus/dist/index.css';
import App from './App.vue';

const app = createApp(App);
// 全局 挂载axios,在vue2.0里面是挂载在原型下的vue.prototype.$axios = axios,写过vue2.0的代码的应该不会陌生
app.config.globalProperties.$axios = axios

app.use(ElementPlus)

app.mount('#app');
```
那在单文件组件中，就可以直接使用
```html
<template>
    <div>
          <div>
            <el-button type="primary"  @click="handleBtnGetJoke">请求数据</el-button>
            <el-button type="danger" @click="handleBtnClearData" v-if="aDatas.length > 0?true:false">清空数据</el-button>
    </div>
</template>

<script setup>
// 需要引入getCurrentInstance() 获取当前实例
import { ref,getCurrentInstance  } from "vue";
// 调用getCurrentInstance() 获取axios实例
const { proxy } = getCurrentInstance();

let aDatas = ref([]);
let page = ref(1);
let pagesize = ref(5);


async function handleBtnGetJoke() {
    const params = {
        key: 'aa1b7ad08be2a09a4e0d2d46897e2dc8',
        page: page.value,
        pagesize:pagesize.value,
        time: 1418816972
    }
    // 需要proxy.$axios.get() 这样才能使用
    const response = await proxy.$axios.get('/api/joke/content/text.php',{params})
    console.log(response);
    if(response.status == 200) {
        
        const { data } = response.data.result;
        console.log(data);
        aDatas.value = aDatas.value.concat(data);
    }
}

// 加载数据,叠加
function handleBtnLoading() {
    page.value++;
    handleBtnGetJoke(); 
}

// 清空数据
function handleBtnClearData() {
    aDatas.value = [];
}
</script>

<style scoped>
.joke-list {
    list-style-type: decimal;
    list-style-position: outside;
    padding: 5px 0;
    border-bottom: dashed 1px #ccc;
}

.loading {
    margin: 0 auto;
    text-align:center;
}
</style>
```
类型上面的代码,把`axios`全局挂载在`proxy`上，然后就可以在`vue`文件中直接使用`proxy.$axios.get()`了,这样单文件组件中，就不用每次都引入`axios`了。

但是同样是存在弊端的,这样每次请求数据，都需要把`params`参数传进去，这样就比较麻烦，所以，我们还可以封装一个`get`请求方法，把`params`参数封装到`get`请求方法中，这样每次请求数据，就不用每次都传`params`参数了。


## 封装`axios`请求数据的方法


### 1. 封装一个`request.js`文件，用于请求数据,这个文件中，封装了`axios`请求数据的方法，以及请求拦截和响应拦截。

封装了`get`和`post`请求方法，以及请求拦截和响应拦截。一般会放在`src`目录下的`api`文件夹中。

如下示例所示

```js
import axios from 'axios';
// 接口地止
const baseUrl = '/api/joke/content/list.php';

// get请求方法封装,具体某个页面当中的get请求方法，可以调用这个方法
export const getJokeLists =  (params)=> {
    return  axios.get(`${baseUrl}`,{
        params:{
            ...params
        }
    })
}


```        
### 2. 在组件中进行使用

在组件中，使用`request.js`中的方法，进行请求数据。

如下示例所示
```html
<template>
    <div>
          <div>
            <el-button type="primary"  @click="getJokeListsData">请求数据</el-button>
            <el-button type="danger" @click="handleBtnClearData" v-if="aDatas.length > 0?true:false">清空数据</el-button>
          <div>
            <ul v-if="aDatas.length > 0?true:false">
                <li class="joke-list" v-for="item in aDatas"
                                    :key="item.hashId">{{ item.content }}
                </li>
                <div class="loading" v-if="aDatas.length > 0?true:false"> 
                    <el-button size="mini"  type="primary" @click="handleBtnLoading" >加载</el-button>
                </div>
            </ul> 
    </div>
</template>

<script setup>
import { getJokeLists } from "../../api/request.js";

let aDatas = ref([]);
let page = ref(1);
let pagesize = ref(5);



async function getJokeListsData() {
    // 请求参数
    const params ={
        key: "aa1b7ad08be2a09a4e0d2d46897e2dc8",
        page: page.value,
        pagesize:pagesize.value,
        time: 1418816972
    }
    // 这里的话,直接调用request.js中的方法，进行请求数据,就可以了的
    const response = await getJokeLists(params)
    console.log(response);
    if(response.status == 200) {
        
        const { data } = response.data.result;
        console.log(data);
        aDatas.value = aDatas.value.concat(data);
    }
}


// 加载数据,叠加
function handleBtnLoading() {
    page.value++;
    getJokeListsData();
}

// 清空数据
function handleBtnClearData() {
    aDatas.value = [];
}

</script>

<style scoped>
.joke-list {
    list-style-type: decimal;
    list-style-position: outside;
    padding: 5px 0;
    border-bottom: dashed 1px #ccc;
}

.loading {
    margin: 0 auto;
    text-align:center;
}
</style>

```

你会发现,如果封装了页面的`axios`的`get`请求,

那么,我们就可以直接使用`get`请求了,不需要再写`get`请求的代码了,直接调用`get`请求的方法就可以了,是不是很方便呢?

因为我们的`get`请求,在`request.js`中已经封装好了,所以,我们直接调用就可以了.封装`post`也是类似的

但凡一些写得比较规范的项目里,都是会对`axios`进行封装的,这样便于代码的管理和复用,也便于项目的维护

封装有封装的好处,不封装,也有不封装的好处,对于初学者,写零散的`axios`请求,比较直接,而封装后的代码,需要开发者自己去追溯

封装的代码,对于初学者,可能比较难以理解,所以,对于初学者,建议先写零散的代码,等够熟练了,然后再进行封装,在自己不是很熟练的时候,先写零散的代码,这样,对封装,有一个比较直观的理解

而不要一上来就封装请求代码的,给自己挖坑的,确定零散的代码没有问题,再封装,这样,对初学者,比较友好

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
  