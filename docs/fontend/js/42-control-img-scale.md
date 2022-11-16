---
title: Js如何实现控制图片的放大和缩小
autoGroup-5: JS特效
---

## Js如何实现控制图片的放大和缩小

## 快速导航

<TOC />

## 前言

实现图片的放大和缩小,可以通过计算图片的宽度和高度来实现,在`css3`中提供了一种更为简洁的方法来实现图片的等比例缩放

## 示例展示


<template>
  <div class="control-img-wrap">
        <div>
            <img :style="stylesObj" class="scale-img" src="https://img0.baidu.com/it/u=507185353,2128878975&fm=253&fmt=auto&app=120&f=JPEG?w=200&h=100" />
        </div>
        <div class="btn">
                 <el-button type="primary" @click="handleImg(-1)">缩小</el-button>
                 <el-button type="success" @click="handleImg(1)">放大</el-button>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          x: 1, // 当前的x
          y: 1, // 当前的y
          stylesObj: {
            width:"200px",
            height: "100px",
            transform: "scale(1,1)"
          }
        }
    },

    methods: {
        // 缩小与放大
        handleImg(scale) {
            if(scale > 0) {  // 向右 
                this.x += 0.1; // x坐标自加0.1
                this.y += 0.1; // y坐标自加0.1 
                console.log(this.x,this.y);
                if(this.x >= 1.5 && this.y >=1.5) {
                    this.x = 1.5;
                    this.y = 1.5;
                    this.$message({
                        message: '图片已经很大了,不能再放大了',
                        type: 'warning'
                    });
                }
            } else {
                this.x -= 0.1; // x坐标自减0.1
                this.y -= 0.1; // y坐标自减0.1
                if(this.x <= 0.1 && this.y <=0.1) {
                    this.x = 0.1;
                    this.y = 0.1;
                    this.$message({
                        message: '已经缩小到很小了,不能再小了',
                        type: 'warning'
                    });
                }
            }
           this.stylesObj.transform = `scale(${this.x},${this.y})`;
        }
    }
}
</script>
<style>
  .control-img-wrap {
    text-align: center;
    margin-top: 10px;
  }

  .scale-img {
    transform: scale(1,1);
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>

## 原生js实现如下

如下是简易的原生`js`实现

```js
// 缩小与放大
var x = 1;   // 当前的x
var y = 1;   // 当前的y
function handleImg() {
   var d = document.getElementById("demo");  // 获取DOM
   if(r > 0) {
        x +=0.1;   // x坐标自加0.1
        y +=0.1;   // y坐标自加0.1
   }else {
     x -= 0.1;     // x坐标自减0.1
     y -= 0.1;     // y坐标自减0.1
   }
   // 改变现状的移动位置
   d.style.transform = 'scale('+x+','+y+')'
}
```
如下是`html`
```html
<img src="xxx.jpg" id="demo" />
<input type="button" value="缩小" onclick="handleImg(-1)" />
<input type="button" value="放大" onclick="handleImg(1)" />
```

## Vue版本实现

用`vue`实现也很简单,与原生`js`实现的逻辑是一样的
```html
<template>
  <div class="control-img-wrap">
        <div>
            <img :style="stylesObj" class="scale-img" src="https://img0.baidu.com/it/u=507185353,2128878975&fm=253&fmt=auto&app=120&f=JPEG?w=200&h=100" />
        </div>
        <div class="btn">
                 <el-button type="primary" @click="handleImg(-1)">缩小</el-button>
                 <el-button type="success" @click="handleImg(1)">放大</el-button>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          x: 1, // 当前的x
          y: 1, // 当前的y
          stylesObj: {
            width:"200px",
            height: "100px",
            transform: "scale(1,1)"
          }
        }
    },

    methods: {
        // 缩小与放大
        handleImg(scale) {
            if(scale > 0) {  // 向右 
                this.x += 0.1; // x坐标自加0.1
                this.y += 0.1; // y坐标自加0.1 
                console.log(this.x,this.y);
                if(this.x >= 1.5 && this.y >=1.5) {
                    this.x = 1.5;
                    this.y = 1.5;
                    this.$message({
                        message: '图片已经很大了,不能再放大了',
                        type: 'warning'
                    });
                }
            } else {
                this.x -= 0.1; // x坐标自减0.1
                this.y -= 0.1; // y坐标自减0.1
                if(this.x <= 0.1 && this.y <=0.1) {
                    this.x = 0.1;
                    this.y = 0.1;
                    this.$message({
                        message: '已经缩小到很小了,不能再小了',
                        type: 'warning'
                    });
                }
            }
           this.stylesObj.transform = `scale(${this.x},${this.y})`;
        }
    }
}
</script>
<style>
  .control-img-wrap {
    text-align: center;
    margin-top: 10px;
  }

  .scale-img {
    transform: scale(1,1);
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>

```

## 具体分析

`scale()`函数是用于对图片的进行缩放,它的参数分别代表横轴和纵轴的比例,当大于1时表示放大,小于1时表示缩小,代码中,对横轴和纵轴的比例始终保持一致

因此实现了图片的等比例缩放效果

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />