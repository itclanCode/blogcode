---
title: js如何实现随机数切换
autoGroup-5: JS特效
---

## js如何实现随机数切换

## 快速导航

<TOC />

## 前言

在一些电商网站,或一些活动页上,看到一些特效,比如:抽奖时,点击图片,实现图片的随机切换,数字的随机切换等,为了吸引用户的注意力,增加网页的互动性,这个效果是怎么实现的呢

## 具体示例

<jingdiantexiao-clickImgSuiji />


## 随机切换图片代码

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>点击图片随机切换</title>
    <style>
        * {
	      padding:0;
          margin:0
        }
        #wrap{
            width:420px;
            height:531px;
            margin:auto;
            border:1px solid #000;
            text-align: center;
            cursor: pointer
        }
    </style>
</head>

<body>
    <div id="wrap">
        <img src="images/1.jpg" alt="" width="100%" height="100%">
    </div>

    <script>
    	    var index = 0;
    	    var oWrap = document.getElementById('wrap');
    	    var timer = null;   // 定义一个定时器
    	    var onOff = true;   // 开关按钮
    	    play();
            function play(){
            	 timer = setInterval(function(){
                    index++;
                    if(index>10){
                       index = 1;
                    }
                    document.querySelector("img").src="images/"+index+".jpg"
    	         },100);
            }
            // 事件操作
            oWrap.onclick = function(){
            	if(onOff){
                   clearInterval(timer); // 清除定时器
            	}else{
                   play();
            	}
            	onOff = !onOff;
            }
    </script>
</body>
</html>
```
随机切换图片,其实就是在切换图片`img`的`src`,当然也可以把图片放到一个数组当中存储的,上面我是把一些图片放到一个`images`文件夹里面

通过相对路径的方式去实现的,上面定时器内的代码也可以使用`for`循环去实现的

实现这个效果,需要借助一个定时器,点击图片显示和暂停时,需要借助一个开关按钮即可实现

## 实现随机数的切换

具体代码如下所示,当使用原生`js`方法能实现后,在用`vue`或等其他一些框架,在里面实现相同的效果，核心代码实现依旧是没有变的

```html
<template>
    <div id="wrap">
          <p class="text" :style="{color}">{{num}}</p>
          <p>
            <el-button :type="onOff == true?'primary':'danger'" @click="handleBtnCLick">{{onOff ==true?'暂停':'开始'}}</el-button>
        </p>
    </div>
</template>

<script>
    export default {
        name:"clickimgSuiji",
        data() {
            return {
                num: 0,
                numbers: [],
                timer: null,
                onOff: true, // 开关
                color: "red"

            }
        },
        mounted() {
            this.addNum();
            this.randomNum();
        },

        methods: {
          addNum() {
             for(let i = 1;i<=100;i++) {
                this.numbers.push(i)
             }
           },

           randomNum() {
              this.timer = setInterval(() => {
                // 定义一个random()函数，原理是 随机数和最大值减最小值的差相乘 最后再加上最小值
                // Math.floor(Math.random() * (max - min)) + min
                this.num = Math.floor(Math.random() * (this.numbers.length - 1)) + 1
              },100)
           },

           handleBtnCLick() {
              if(this.onOff) {
                this.color="#000";
                clearInterval(this.timer); // 清除定时器
              }else {
                this.color="red";
                this.randomNum();
              }
              this.onOff = !this.onOff;
           }
         
        }
    }
</script>

<style lang="scss" scoped>

#wrap{
	text-align: center;
}

.text {
    font-size: 20px;
    font-weight: bold;
}
</style>
```

## 重要的知识点

上面实现随机数的生成,在一定的数值范围内生成随机数

定义一个`random()`函数,原理是随机数和最大值减最小值的差相乘,最后再加上最小值

其中`Math.floor()`浮点数向下取整
```js
Math.floor(Math.random() * (max - min)) + min
```
其他的,都是与原生`js`实现都是一样的,同样用的是定时器,加上一个开关去实现的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />