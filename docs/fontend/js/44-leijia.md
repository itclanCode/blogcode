---
title: Js如何实现一个累加上漂浮动画
autoGroup-5: JS特效
---

## Js如何实现一个累加上漂浮动画

## 快速导航

<TOC />

## 前言

之前,看到一个比较有意思的小程序,就是**静神木鱼**,可以实现在线敲木鱼,自动敲木鱼,手盘佛珠,静心颂钵的

整个小程序功能比较小巧,大道之简,风靡过一阵的,而且赚得盆满钵满的,下面就实现一下这个小程序中敲木鱼的例子的

## 小程序示例

  <div align="center">
      <img class="medium-zoom lazy" loading="lazy"  src="/images/latest/jingxinmuyu.jpg" alt="静神木鱼" width="200" height="200" />
  </div>

## 具体示例

<template>
  <div class="leijia-wrap">
        <div class="leijia-content">
             <h2>静神木鱼</h2>
             <div class="text">{{count}}<span class="animatetip" v-show="isTip">功德+1</span></div>
             <div class="btn">
                 <el-button type="primary" size="mini" @click="handleClick" ref="btnClick">敲击</el-button>
                 <el-button type="primary" size="mini" @click="handleVoince" ref="btnJinYin">{{isVoince == true?'非静音':'静音'}}</el-button>
                 <el-button type="danger" size="mini" @click="handleAuto">{{onOff == true?'自动':'非自动'}}</el-button>
                 <el-button type="info" size="mini" @click="handleClear">清除</el-button>
             </div>
        </div>
        <!--敲击音频--->
         <audio id="myaudio"   src="../images/js-article-imgs/video/qiaoji.mp3"  style="display:none">
             Your browser does not support the audio element.
        </audio>
  </div>
</template>

<script>
  export default {
    data() {
        return {
           count: 0,     
           timer: null,
           onOff: true,
           isVoince: true,
           isTip: false
        }
    },

    mounted(){
        this.count = localStorage.getItem('count') || 0;   // 获取本地存储localStorage
    },

    methods: {
      // 敲击
      handleClick() {
        this.count = parseInt(this.count)+1;
        localStorage.setItem('count',this.count);    // 设置本地存储localStorage
        this.isTip = true;
        setTimeout(()=> {
			this.isTip = false;
		}, 300);
        let music = document.getElementById("myaudio");
        if(this.isVoince) {
            music.play();
        }else {
            music.pause();
        }
        
      },

      // 控制静音还是非静音
      handleVoince() {
         let music = document.getElementById("myaudio");
         if(this.isVoince) {
            music.play();
         }else {
             music.pause();
         }
         this.isVoince = !this.isVoince;
      },

     // 重置数据,清除localStorage
      handleClear(){
        localStorage.removeItem('count');
        this.count = 0;
      },

      // 自动敲打,累加
      handleAuto() {
        let music = document.getElementById("myaudio");
        if(this.onOff) {
            this.timer = setInterval(() => {
                this.count = parseInt(this.count)+1;
                this.isTip = true;
                 setTimeout(()=> {
			        this.isTip = false;
		        }, 300);
                music.play();
            },1000)
        }else {
            clearInterval(this.timer);   // 清除定时器
            music.pause();
        }
        this.onOff = !this.onOff;
      },
    }
}
</script>
<style lang="scss" scoped>
  .leijia-wrap {
    text-align: center;
    margin-top: 10px;
    .btn {
        margin-top: 20px;
    }

    .text {
        position:relative;
    }

    .animatetip {
        opacity: 0;
        animation: showtip 1s;
        position:absolute;
        right: 320px;
        top: 0px;
    }

    /* 关键帧动画 */
    @keyframes showtip {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-15px);
        }
    }
  }

</style>

## 具体代码

示例代码如下所示

```html
<template>
  <div class="leijia-wrap">
        <div class="leijia-content">
             <h2>静神木鱼</h2>
             <div class="text">{{count}}<span class="animatetip" v-show="isTip">功德+1</span></div>
             <div class="btn">
                 <el-button type="primary" size="mini" @click="handleClick" ref="btnClick">敲击</el-button>
                 <el-button type="primary" size="mini" @click="handleVoince" ref="btnJinYin">{{isVoince == true?'非静音':'静音'}}</el-button>
                 <el-button type="danger" size="mini" @click="handleAuto">{{onOff == true?'自动':'非自动'}}</el-button>
                 <el-button type="info" size="mini" @click="handleClear">清除</el-button>
             </div>
        </div>
        <!--敲击音频--->
         <audio id="myaudio"   src="../images/js-article-imgs/video/qiaoji.mp3"  style="display:none">
             Your browser does not support the audio element.
        </audio>
  </div>
</template>

<script>
  export default {
    data() {
        return {
           count: 0,     
           timer: null,
           onOff: true,
           isVoince: true,
           isTip: false
        }
    },

    mounted(){
        this.count = localStorage.getItem('count') || 0;   // 获取本地存储localStorage
    },

    methods: {
      // 敲击
      handleClick() {
        this.count = parseInt(this.count)+1;
        localStorage.setItem('count',this.count);    // 设置本地存储localStorage
        this.isTip = true;
        setTimeout(()=> {
			this.isTip = false;
		}, 300);
        let music = document.getElementById("myaudio");
        if(this.isVoince) {
            music.play();
        }else {
            music.pause();
        }
        
      },

      // 控制静音还是非静音
      handleVoince() {
         let music = document.getElementById("myaudio");
         if(this.isVoince) {
            music.play();
         }else {
             music.pause();
         }
         this.isVoince = !this.isVoince;
      },

     // 重置数据,清除localStorage
      handleClear(){
        localStorage.removeItem('count');
        this.count = 0;
      },

      // 自动敲打,累加
      handleAuto() {
        let music = document.getElementById("myaudio");
        if(this.onOff) {
            this.timer = setInterval(() => {
                this.count = parseInt(this.count)+1;
                this.isTip = true;
                 setTimeout(()=> {
			        this.isTip = false;
		        }, 300);
                music.play();
            },1000)
        }else {
            clearInterval(this.timer);   // 清除定时器
            music.pause();
        }
        this.onOff = !this.onOff;
      },
    }
}
</script>
<style lang="scss" scoped>
  .leijia-wrap {
    text-align: center;
    margin-top: 10px;
    .btn {
        margin-top: 20px;
    }

    .text {
        position:relative;
    }

    .animatetip {
        opacity: 0;
        animation: showtip 1s;
        position:absolute;
        right: 320px;
        top: 0px;
    }

    /* 关键帧动画 */
    @keyframes showtip {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-15px);
        }
    }
  }

</style>
```
上面的一个小例子虽然很小,但是它囊括很多知识,想要实现这个效果,那么需要知道的

## 分析

1. [1]. 实现控制数字的累加,并且解决字符串`+`拼接的问题(具体解决使用`parseInt()`即可)
2. [2].实现自动的累加,需要知道设置定时器`setInterval`,以及清除定时器
3. [3].一个控件控制元素状态的变化,开关的设置
4. [4].刷新页面,下次进来时仍然保留上一次的状态,则需要使用本地缓存`localStorage`,以及清除指定的本地缓存
5. [5].控制音频`audio`元素的播放和暂停
6. [6].想要实现累加向上漂浮动画,则需要使用css3中的动画关键帧

在微信小程序当中,实现的逻辑是相似的,也是使用了微信的本地存储功能的,动画的话,使用了小程序自带的动画`API`就可以实现的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />



