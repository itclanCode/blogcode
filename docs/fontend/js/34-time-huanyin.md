---
title: JS如何实现根据不同的时间段显示不同的欢迎语
autoGroup-5: JS特效
---

## JS如何实现根据不同的时间段显示不同的欢迎语

## 快速导航

<TOC />

## 前言

我们平时在逛一些网站的时候,有时,会看到网站有一些欢迎语,不同的时间段,用不同的欢迎语提示用户

让用户进入你的网站,感受一波温馨,心情愉悦,那要实现这个效果该怎么实现呢

其实,就是获取时间,根据不同的时间段,设置不同的欢迎语就可以了的

## 具体示例

<template>
  <div class="wrap">
      <div class="welcome-tip" :style="{color}">{{str}}</div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          color: "#409eff",
          str: '', // 定义拼接的字符串变量
        }
    },
    mounted() {
      this.welcomeTime();
    },
    methods: {
      welcomeTime() {
        let date = new Date();  // 获取当前的时间
        let hour = date.getHours();  // 得到小时数
        if(hour<12) {
          this.str = 'Hi,早上好,又是崭新的一天,打工人,要加油哦';
          this.color = "#409eff";
        }else if(hour >= 12 && hour < 13 ) { // 如果为12~13点,那么是中午
          this.str = 'Hi,中午好,在忙,也不要忘记眯一小会儿,不然下午会神游哦'
          this.color = "#67c23a";
        }else if(hour >=13 && hour <18) { // 13点到18点为下午
          this.str = "Hi,下午好,打起精神,该起来搬砖干活了";
          this.color = "#909399";
        }else if(hour >=18 && hour <22) { // 18-22点,晚上
          this.str = "Hi,晚上好,忙完了一天,该放下手机,电脑,好好休息下了"
          this.color = "#e6a23c";
        }else {
          this.str = "Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧";
          this.color = "#f56c6c";
        }

      } 
    },
  };
</script>
<style>
  .wrap {
    text-align: center;
    margin-top: 20px;
  }
</style>

## 原生js

用原生`js`实现,先通过`new Date()`获取当前时间,然后听过`getHours()`得到小时,通过小时,进行时间间隔的判断就可以了的

```js
function weclomeTime() {
    var date = new Date();  // 获取当前时间
    var str = "";    // 用于拼接
    var hour = date.getHours();  // 得到小时
    // 判断时间间隔
     if(hour<12) {
          str = 'Hi,早上好,又是崭新的一天,打工人,要加油哦';
      }else if(hour >= 12 && hour < 13 ) { // 如果为12~13点,那么是中午
          str = 'Hi,中午好,在忙,也不要忘记眯一小会儿,不然下午会神游哦'
      }else if(hour >=13 && hour <18) { // 13点到18点为下午
          str = "Hi,下午好,打起精神,该起来搬砖干活了";
      }else if(hour >=18 && hour <22) { // 18-22点,晚上
          str = "Hi,晚上好,忙完了一天,该放下手机,电脑,好好休息下了"
      }else {
          str = "Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧";
      }
    return str;
}

var pText = document.getElementById("text");
pText.innerHTML = weclomeTime();
```
如下是`html`

```html
<p id="text"></p>
```

## Vue版本实现

原生`js`会实现,在`vue`里面实现也是一样的,代码如下所示
```html
<template>
  <div class="wrap">
      <div class="welcome-tip" :style="{color}">{{str}}</div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          color: "#409eff",
          str: '', // 定义拼接的字符串变量
        }
    },
    mounted() {
      this.welcomeTime();
    },
    methods: {
      welcomeTime() {
        let date = new Date();  // 获取当前的时间
        let hour = date.getHours();  // 得到小时数
        if(hour<12) {
          this.str = 'Hi,早上好,又是崭新的一天,打工人,要加油哦';
          this.color = "#409eff";
        }else if(hour >= 12 && hour < 13 ) { // 如果为12~13点,那么是中午
          this.str = 'Hi,中午好,在忙,也不要忘记眯一小会儿,不然下午会神游哦'
          this.color = "#67c23a";
        }else if(hour >=13 && hour <18) { // 13点到18点为下午
          this.str = "Hi,下午好,打起精神,该起来搬砖干活了";
          this.color = "#909399";
        }else if(hour >=18 && hour <22) { // 18-22点,晚上
          this.str = "Hi,晚上好,忙完了一天,该放下手机,电脑,好好休息下了"
          this.color = "#e6a23c";
        }else {
          this.str = "Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧";
          this.color = "#f56c6c";
        }

      } 
    },
  };
</script>
<style>
  .wrap {
    text-align: center;
  }
</style>
```

上面是使用`vue`实现的,核心原理是没有变的,只不过是根据不同的时间,除了改变文本内容,还修改了下样式

## 总结

实现这个效果主要是利用`new Date()`获取当前时间，而使用`new Date()`下面的`getHour()`可以获取小时,也可以获取`分钟`,`秒`,`月`的

其次就是知道时间段

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />