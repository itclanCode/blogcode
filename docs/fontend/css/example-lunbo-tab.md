---
title: 轮播图指示器一点一点加载动效
---

## 轮播图指示器一点一点加载动效

## 快速导航

<TOC />

## 示例效果

<template>
    <div class="lunbo-point-tab">
          <el-carousel :interval="6000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
    </div>
</template>
<script>
</script>
<style scoped>
.lunbo-point-tab {
    text-align: center;
}    
.lunbo-point-tab .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.lunbo-point-tab .el-carousel__item:nth-child(2n) {
    background-color: #42b983;
  }
.lunbo-point-tab .el-carousel__item:nth-child(2n+1) {
    background-color: #abcdef;
  }   
 .lunbo-point-tab .el-carousel__indicator--horizontal.is-active::after {
   content: "";
   display: block;
   width: 100%;
   height: 2px;
   background: red;
   transform: scaleX(0);
   animation: progress 6s linear 0s infinite;
   transform-origin: center;
   margin-top: -2px;
 }
@keyframes progress {
   0% {
       transform: scaleX(0);
   }
   to {
       transform: scaleX(1);
   }
}
</style>

## 示例代码

```html
<template>
    <div class="lunbo-point-tab">
          <el-carousel :interval="6000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
            <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
    </div>
</template>
<script>
</script>
<style scoped>
.lunbo-point-tab {
    text-align: center;
}    
.lunbo-point-tab .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
.lunbo-point-tab .el-carousel__item:nth-child(2n) {
    background-color: #42b983;
  }
.lunbo-point-tab .el-carousel__item:nth-child(2n+1) {
    background-color: #abcdef;
  }   
 .lunbo-point-tab .el-carousel__indicator--horizontal.is-active::after {
   content: "";
   display: block;
   width: 100%;
   height: 2px;
   background: red;
   transform: scaleX(0);
   animation: progress 6s linear 0s infinite;
   transform-origin: left;
   margin-top: -2px;
 }
@keyframes progress {
   0% {
       transform: scaleX(0);
   }
   to {
       transform: scaleX(1);
   }
}
</style>
```
核心的css代码,就是如下所示,主要结合伪类实现,css3中的变换`transform`以及动画关键帧来实现
```css
.lunbo-point-tab .el-carousel__indicator--horizontal.is-active::after {
   content: "";
   display: block;
   width: 100%;
   height: 2px;
   background: red;
   transform: scaleX(0);
   animation: progress 6s linear 0s infinite;
   transform-origin: left;   // 旋转变换的基点,从左边开始
   margin-top: -2px;
 }
@keyframes progress {
   0% {
       transform: scaleX(0);
   }
   to {
       transform: scaleX(1);
   }
}
```


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />
