---
title: Js如何实现给一注册按钮添加倒计时效果
autoGroup-5: JS特效
---

## Js如何实现注册按钮10秒倒计时效果

## 快速导航

<TOC />

## 前言

我们平时在逛到一些网站的时候,在一些网站的会员注册页面里,为了提高用户的责任心

以及给用户留下足够的时间阅读完注册协议,可以采用10秒倒计时的方式,阅读完协议后,才可以单机注册按钮的特效

其实这与发送短信验证码倒计时,是一样的

## 示例效果

<template>
  <div class="el-button-wrap">
    <div class="content">请认真阅读完协议....等待停留15秒后,一起见证奇迹</div>
    <el-button @click="handleReg"  :type="sec==0?'danger':'primary'"  :disabled="sec == 0?false:true"
      >注册<span v-show="sec == 0?false:true">({{sec}})秒</span></el-button>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            sec: 15, // 倒计时15秒
        }
    },
    mounted() {
        this.countDownTimer()
    },
    methods: {
      countDownTimer() {
        if(this.sec > 0) {
            setTimeout(() => {
                this.sec -= 1
                this.countDownTimer()
            }, 1000)
        }
      },

      handleReg() {
        window.open('https://itclan.cn','_blank');
      }
    },
  };
</script>
<style>
  .el-button-wrap {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content{
    margin-bottom: 20px;
  }
</style>

## 原生JS实现

以下是原生简易`js`实现
```js
var sec = 10;
function countDownTimer() {
    timer = setInterval(function() {
        // 获取注册按钮的DOM
        var btn = document.getElementById("btn");
        sec--;
        btn.value = `注册(${sec})`;
        if(sec == 0) {
            clearInterval(timer);  // 清除定时器
            btn.disabled = false;  // 按钮恢复可用
            btn.value = '注册';    // 设置按钮文本
        }
    },1000)
}
countDownTimer();
```
如下是`html`代码
```html
<p>请认真阅读完协议</p>
<input type="button" value="注册(10)" id="btn" disabled="disabled" />
```
## 分析

实现这个示例,主要依赖于定时器,且倒计时的时间间隔必须是1秒钟,另外还需要注意的是需要把握倒计时是否已经结束,如果结束的话,那么就需要回复按钮的可用状态

## Vue版本实现

如下是`Vue`的实现,也就是上面示例展示的源代码

### 方式1-使用方法实现

```js
<template>
  <div class="el-button-wrap">
    <div class="content">请认真阅读完协议....</div>
    <el-button  type="primary"  :disabled="sec == 0?false:true"
      >注册<span v-show="sec == 0?false:true">({{sec}}秒)</span></el-button>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            sec: 15, // 倒计预设15秒
        }
    },
    mounted() {
        this.countDownTimer()
    },
    methods: {
      countDownTimer() {
        if(this.sec > 0) {
            setTimeout(() => {
                this.sec -= 1
                this.countDownTimer()
            }, 1000)
        }
      }
    },
  };
</script>
<style>
  .el-button-wrap {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content{
    margin-bottom: 20px;
  }
</style>
```
上面这种使用方法去实现,是一种比较常见的方式

### 方式2-使用watch实现

使用`watch`同样可以达到同样的效果,可以不用创建方法，只需创建钩子,如下代码所示

:::: details 使用watch方式实现
```html
<template>
  <div class="el-button-wrap">
    <div class="content">请认真阅读完协议....</div>
    <el-button  type="primary"  :disabled="second == 0?false:true"
      >注册<span v-show="second == 0?false:true">({{second}}秒)</span></el-button>
  </div>
</template>

<script>
  export default {
    data() {
        return {
            second: 30, // 倒计时30秒
        }
    },

    watch:{
       second: {
          handler(value) {
            if(value > 0) {
                setTimeout(() => {
                    this.second--;
                },1000)
            }
          },
          immediate: true  // 首次加载时,调用上面的handler函数
       } 
    },
  };
</script>
<style>
  .el-button-wrap {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content {
    margin-bottom: 20px;
  }
</style>
```
::::

## 总结

无论是使用原生js方式还是使用`vue`方式,都是可以实现的,都需要借助定时器功能去实现,在`vue`当中可以用普通方法的方式去实现,也可以使用

`watch`监听器的方式去实现,至于哪个更好,自己习惯使用那种,就用哪种,前者容易想到,而后者要略复杂一点


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />