---
title: vuejs中实用axios时如何实现滑动滚动条来加载数据

---

## vuejs中实用axios时如何实现滑动滚动条来加载数据

## 快速导航

<TOC />

## 前言

在`vuejs`中，我们经常使用axios来请求数据，但是有时候，我们请求的数据量很大，那么我们如何实现滑动滚动条来加载数据呢？

## 实现思路

1. 首先，我们需要在vuejs中引入`axios`
2. 然后，我们需要从`vue`中,引入`onMounted,onUnmounted`生命周期钩子函数
3. 然后，我们需要在`onMounted`函数中,进行监听
4. 而在`onUnmounted`函数中,我们需要取消监听,解绑
5. 编写事件处理函数`handleScroll`,  获取变量`scrollTop`是滚动条滚动时，距离顶部的距离,获取变量`scrollHeight`是滚动条的总高度,获取变量`clientHeight`是滚动条可视区域的高度
6. 当滚动条到达底部，并且距离底部小于10px时，加载数据，也就是请求`axios`数据,页码++,重新加载数据函数          
7. 为了防止用户频繁触发下拉滑动滚动条,往往需要添加一个函数防抖,在指定的时间内,只执行最后一次事件处理函数,避免频繁请求数据,给服务器造成压力

## 代码实现

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
import { ref,onMounted,onUnmounted  } from "vue";

let aDatas = ref([]);
let page = ref(1);
let pagesize = ref(20);

onMounted(() => {
    // 获取数据
    handleBtnGetJoke();
    window.addEventListener('scroll', debounce(handleScroll,500));
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})

// 事件处理函数
function handleScroll() {
    // 变量scrollTop是滚动条滚动时，距离顶部的距离
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // 变量scrollHeight是滚动条的总高度
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
     // 变量clientHeight是滚动条可视区域的高度
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
     // 当滚动条到达底部，并且距离底部小于10px时，加载数据   
    if (scrollTop + clientHeight - scrollHeight <= 10) {
        page.value++;
        handleBtnGetJoke();
    }
}

// 函数的防抖
function  debounce(method, duration) {
         var timer = null;
         return function(){
            var that = this,
                args = arguments;
            // 在本次调用之间的一个间隔时间内若有方法在执行,则终止该方法的执行
            if(timer) {
              clearTimeout(timer);
            }
            // 开始执行本次调用
            timer = setTimeout(function(){
              method.apply(that,args);
            }, duration)
          }

  }


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
        aDatas.value = aDatas.value.concat(data);
        if(page.value*pagesize.value >= data.length) {
            alert("没有更多数据了")
        }

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
其中核心防抖函数如下所示，实现方式也很简单，就是利用定时器，在规定的时间内，如果再次触发，则清除定时器，重新开始计时。

只执行最后一次
```js
// 函数的防抖
function  debounce(method, duration) {
         var timer = null;
         return function(){
            var that = this,
                args = arguments;
            // 在本次调用之间的一个间隔时间内若有方法在执行,则终止该方法的执行
            if(timer) {
              clearTimeout(timer);
            }
            // 开始执行本次调用
            timer = setTimeout(function(){
              method.apply(that,args);
            }, duration)
          }

  }
```
至于怎么样判断数据是否加载完毕,到最后一页

每次在请求完成数据的时候去判断一下当前的 `page × pagesize `是否已经大于等于接口返回的 `total` 值就行了，也可以是`pageNum` 等于 `total` 的时候，就说明已经没有数据了，可以提示用户了。

```js
if(page.value*pagesize.value >= data.length) {
            alert("没有更多数据了")
}
```

## 总结

其实这个功能很简单，但是写起来还是有点麻烦，因为涉及到异步请求，所以需要判断数据是否加载完毕，还要判断是否最后一页，还要判断是否还有数据，还要判断是否需要提示用户没有更多数据了，所以代码量还是挺多的，但是写完之后，感觉还是挺有成就感的。 

什么上拉，下拉刷新，下拉加载更多，其实原理都差不多，都是利用了防抖函数，然后利用定时器，在规定的时间内,如果再次触发，则清除定时器，重新开始计时。 实现方式都差不多    


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />