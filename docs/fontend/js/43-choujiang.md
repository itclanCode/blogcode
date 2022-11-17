---
title: Js如何实现一个抽奖程序
autoGroup-5: JS特效
---

## Js如何实现一个抽奖程序

## 快速导航

<TOC />

## 前言

无论是在手机App端,还是网页,在活动日的时候,商家都会弄些抽奖的活动,抽金币,金劵等

那用`js`如何实现一个简易的抽奖程序呢

## 具体效果

<template>
  <div class="choujiang-wrap">
        <div>
            <p>抽奖名单</p><ul class="item">
                         <li v-for="(item,index) in lists" :class="index==randIndex?'active':''" :key="index">{{item}}</li>
                      </ul>
        </div>
        <div class="btn">
                 <el-button type="primary" @click="handleStart">开始抽奖</el-button>
                 <el-button type="success" @click="handleStop">停止抽奖</el-button>
                 <span>抽奖结果:{{this.result}}</span>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
           lists: ['张三','李四','王五','小刘','罗胖','胡玲','周通','徐达','杨新'],
           timer: null,  // 定时器
           result: '',
           randIndex: null
        }
    },

    methods: {
       // 开始抽奖
       handleStart() {
          if(!this.timer) {
            // 创建定时器
            this.timer = setInterval(() => {
                let max = this.lists.length-1;  // 最大的下标数字
                let rand = Math.random();       // 随机数,小于0
                 // 定义一个random()函数，原理是 随机数和最大值减最小值的差相乘 最后再加上最小值
                // Math.floor(Math.random() * (max - min)) + min
                this.randIndex = Math.floor(rand*max)+1;  // 向下取整
                this.result = this.lists[this.randIndex]   // 得到的结果
            },50)
          }
       },
       // 停止抽奖
       handleStop() {
         clearInterval(this.timer); // 清除定时器
         this.timer = null;
         this.result = this.lists[this.randIndex];
         this.$message({
            message: `中奖的是${this.result}`,
            type: 'success'
         });
       }
    }
}
</script>
<style>
  .choujiang-wrap {
    text-align: center;
    margin-top: 10px;
  }

  .item {
    display:flex;
    justify-content: center;
  }

   .item li {
     margin-right: 10px;
   }

   .active {
     color: red;
     font-weight: bold;
   }

   .btn {
     margin-top: 20px;
   }
</style>

## Vue实现如下所示

```html
<template>
  <div class="choujiang-wrap">
        <div>
            <p>抽奖名单</p><ul class="item">
                         <li v-for="(item,index) in lists" :class="index==randIndex?'active':''" :key="index">{{item}}</li>
                      </ul>
        </div>
        <div class="btn">
                 <el-button type="primary" @click="handleStart">开始抽奖</el-button>
                 <el-button type="success" @click="handleStop">停止抽奖</el-button>
                 <span>抽奖结果:{{this.result}}</span>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
           lists: ['张三','李四','王五','小刘','罗胖','胡玲','周通','徐达','杨新'],
           timer: null,  // 定时器
           result: '',
           randIndex: null
        }
    },

    methods: {
       // 开始抽奖
       handleStart() {
          if(!this.timer) {
            // 创建定时器
            this.timer = setInterval(() => {
                let max = this.lists.length-1;  // 最大的下标数字
                let rand = Math.random();       // 随机数,小于0
                 // 定义一个random()函数，原理是 随机数和最大值减最小值的差相乘 最后再加上最小值
                // Math.floor(Math.random() * (max - min)) + min
                this.randIndex = Math.floor(rand*max)+1;  // 向下取整
                this.result = this.lists[this.randIndex]   // 得到的结果
            },50)
          }
       },
       // 停止抽奖
       handleStop() {
         clearInterval(this.timer); // 清除定时器
         this.timer = null;
         this.result = this.lists[this.randIndex];
         this.$message({
            message: `中奖的是${this.result}`,
            type: 'success'
         });
       }
    }
}
</script>
<style>
  .choujiang-wrap {
    text-align: center;
    margin-top: 10px;
  }

  .item {
    display:flex;
    justify-content: center;
  }

   .item li {
     margin-right: 10px;
   }

   .active {
     color: red;
     font-weight: bold;
   }

   .btn {
     margin-top: 20px;
   }
</style>
```

上面的一个示例代码,是一个简易的抽奖程序,用到的核心技术实现就是实现随机数,如何生成随机数,开始和结束监听器

使用定时器,对于随机数,`js`中提供了一个`Math.random()`函数,该函数可以生成一个大于0小于1的小数,之后用该随机数乘以最大的下标索引值

就得到一个随机的整型下标值,而至于监听器,用`timer`变量来控制监听器的开始和停止,在开始定时器时,`timer`就被创建和赋值

当点击停止按钮时,在清除定时器,这样就达到了目的,当然在现实的业务里,抽奖程序,不会这么简单设置,系数设置的粒度决定中奖的机率的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />