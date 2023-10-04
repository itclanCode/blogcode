---
title: vuejs中使用axios时如何追加数据
---

## vuejs中使用axios时如何追加数据

## 快速导航

<TOC />

## 前言

在vuejs中使用`axios`时，有时候需要追加数据,比如,移动端下拉触底加载,分页加载,滑动滚动条,等等,这时候就需要追加数据了,下面我们来演示下.

## 代码演示

```html
<template>
    <div>
          <div>
            <el-button type="primary"  @click="handleBtnGetJoke">请求数据</el-button>
            <el-button type="danger" @click="handleBtnClearData" v-if="aDatas.length > 0?true:false">清空数据</el-button>
          </div>  
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
    </div>
</template>

<script setup>
import axios from "axios";
import { ref  } from "vue";

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

    const response =  await axios.get('/api/joke/content/text.php',{params})
    console.log(response);
    if(response.status == 200) {
        const { data } = response.data.result;
        console.log(data);
        // 之类使用了concat方法,将数据叠加到aDatas中
        aDatas.value = aDatas.value.concat(data);
    }
}

// 加载数据,叠加
function handleBtnLoading() {
    // 页码+1,自增
    page.value++;
    // 重新加载数据
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

在上面的示例代码中,实现数据的追加, 需要使用concat方法, 该方法用于合并两个或多个数组,核心就是如下一行代码

新的数据和旧`data`合并, 然后赋值给`aDatas.value`
```js
aDatas.value = aDatas.value.concat(data);
```
而点击加载更多数据, 需要使用`handleBtnLoading`方法, 该方法中, 页码+1, 然后重新加载数据,调用一次`handleBtnGetJoke`方法, 该方法中, 请求数据, 然后将数据追加到`aDatas.value`中, 这样就实现了数据的追加

如果不进行,页码`page.value++`, 数据不会追加, 因为数据是异步加载的, 需要等待数据加载完成, 才能追加数据
```js
 // 页码+1,自增
    page.value++;
    // 重新加载数据
    handleBtnGetJoke(); 
```
## 如果想一上来就加载数据

需要从`vue`中引入`onMounted`,方法, 该方法, 会在组件挂载完成后, 执行, 这样, 就可以在挂载完成后, 调用`handleBtnGetJoke`方法, 加载数据
```js
import { onMounted } from 'vue';

onMounted() {
    // 调用handleBtnGetJoke方法, 加载数据
    handleBtnGetJoke();
}

```

很多初学者, 不知道如何实现数据的追加, 其实很简单, 就是使用`concat`方法, 然后将数据追加到`aDatas.value`中，就可以实现数据追加

针对写静态页面很熟悉, 写动态页面很生疏, 其实, 写动态页面, 比写静态页面, 简单很多, 因为动态页面, 需要使用`vue`提供的`API`, 这些`API`, 都是封装好的, 调用起来很简单

但是基础的数组方法,增删查改, 还是需要了解的, 因为这些基础的数组方法, 都是`API`封装的, 调用起来很简单,如果不知道这些基础的数组方法, 写动态页面, 就会很生疏,会很难写

数组中常见实用方法, 如下所示

| 方法 | 说明 |         
| :-- | :-- |           
| push | 向数组末尾添加一个或多个元素 |         
| pop | 删除数组的最后一个元素 |            
| shift | 删除数组的第一个元素 |            
| unshift | 向数组的开头添加一个或多个元素 |                    
| slice | 截取数组, 返回一个新数组 |                
| splice | 删除数组中指定位置的元素, 并可在指定位置添加元素 |               
| concat | 合并两个或多个数组 |             
| join | 把数组作为字符串返回 |                 
| indexOf | 查找元素在数组中的位置 |                
| lastIndexOf | 查找元素在数组中的最后一个位置 |                        
| forEach | 遍历数组 |              
| map | 遍历数组, 返回一个新数组 |              
| filter | 过滤数组, 返回一个新数组 |                   
| some | 判断数组中, 是否有元素满足条件 |               
| every | 判断数组中, 所有元素是否都满足条件 |                  
| reduce | 遍历数组, 并返回一个值 |             
| reduceRight | 遍历数组, 并返回一个值 |                    
| find | 查找数组中, 第一个满足条件的元素 |             
| findIndex | 查找数组中, 第一个满足条件的元素的位置 |              
| fill | 用一个固定值填充数组 |                 
| copyWithin | 数组的一部分, 复制到同一数组中的另一个位置 |                 
| includes | 查找数组中, 是否包含某个元素 |                 
| entries | 返回数组中每个索引的键值对 |                                                
| keys | 返回数组中每个索引的键 |                           
| values | 返回数组中每个索引的值 |                                                                                                                                                                                   
| isArray | 判断是否为数组 |                                                                                                                                                                                                                                                                             
以上这些数组的基础方法需要非常熟悉,因为编程中操作数据,就是操作数组,字符串,对象,一些方法是非常重实用的,如果自己不知道,那就会业务编写实现受阻碍

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />



