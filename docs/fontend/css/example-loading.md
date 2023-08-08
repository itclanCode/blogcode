---
title: 纯css3彩色loading加载进度条动画特效
---

## 纯css3彩色loading加载进度条动画特效

## 快速导航

<TOC />

## 示例效果

<template>
   <div>
        <div class="example-loading-wrap">
            <div class="progress progress-striped">
                <div class="progress-bar"> </div>
            </div>
            </div>
            <div class="example-loading-wrap">
            <div class="progress2 progress-moved">
                <div class="progress-bar2" > </div>
            </div>
            </div>
            <div class="example-loading-wrap">
            <div class="progress progress-infinite">
                <div class="progress-bar3" > </div>
            </div>
            </div>
   </div>
</template>
<style>
.example-loading-wrap {
  margin: 100px auto;
  width: 500px;
  text-align: center;
}
.progress {
  padding: 6px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}
.progress-bar {
  height: 18px;
  background-color: #ee303c;
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
}
.progress-striped .progress-bar {
  background-color: #FCBC51;
  width: 100%;
  background-image: linear-gradient(45deg, #fca311 25%, transparent 25%, transparent 50%, #fca311 50%, #fca311 75%, transparent 75%, transparent);
  animation: progressAnimationStrike 6s;
}
@keyframes progressAnimationStrike {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.progress2 {
  padding: 6px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}
.progress-bar2 {
  height: 18px;
  border-radius: 30px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 0.4s linear;
  transition-property: width, background-color;
}
.progress-moved .progress-bar2 {
  width: 85%;
  background-color: #EF476F;
  animation: progressAnimation 6s;
}
@keyframes progressAnimation {
  0% {
    width: 5%;
    background-color: #F9BCCA;
  }
  100% {
    width: 85%;
    background-color: #EF476F;
  }
}
.progress-bar3 {
  height: 18px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
  transition: 0.4s linear;
  transition-property: width, background-color;
}
.progress-infinite .progress-bar3 {
  width: 100%;
  background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
  animation: colorAnimation 1s infinite;
}
@keyframes colorAnimation {
  0% {
    background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
  }
  20% {
    background-image: linear-gradient(to right, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964);
  }
  40% {
    background-image: linear-gradient(to right, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa);
  }
  60% {
    background-image: linear-gradient(to right, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff);
  }
  100% {
    background-image: linear-gradient(to right, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7DC8E8);
  }
}
</style>

## 示例代码

```html
<template>
   <div>
        <div class="example-loading-wrap">
            <div class="progress progress-striped">
                <div class="progress-bar"> </div>
            </div>
            </div>
            <div class="example-loading-wrap">
            <div class="progress2 progress-moved">
                <div class="progress-bar2" > </div>
            </div>
            </div>
            <div class="example-loading-wrap">
            <div class="progress progress-infinite">
                <div class="progress-bar3" > </div>
            </div>
            </div>
   </div>
</template>
<style>
.example-loading-wrap {
  margin: 100px auto;
  width: 500px;
  text-align: center;
}
.progress {
  padding: 6px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}
.progress-bar {
  height: 18px;
  background-color: #ee303c;
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
}
.progress-striped .progress-bar {
  background-color: #FCBC51;
  width: 100%;
  background-image: linear-gradient(45deg, #fca311 25%, transparent 25%, transparent 50%, #fca311 50%, #fca311 75%, transparent 75%, transparent);
  animation: progressAnimationStrike 6s;
}
@keyframes progressAnimationStrike {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
.progress2 {
  padding: 6px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.25);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
}
.progress-bar2 {
  height: 18px;
  border-radius: 30px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.05));
  transition: 0.4s linear;
  transition-property: width, background-color;
}
.progress-moved .progress-bar2 {
  width: 85%;
  background-color: #EF476F;
  animation: progressAnimation 6s;
}
@keyframes progressAnimation {
  0% {
    width: 5%;
    background-color: #F9BCCA;
  }
  100% {
    width: 85%;
    background-color: #EF476F;
  }
}
.progress-bar3 {
  height: 18px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
  transition: 0.4s linear;
  transition-property: width, background-color;
}
.progress-infinite .progress-bar3 {
  width: 100%;
  background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
  animation: colorAnimation 1s infinite;
}
@keyframes colorAnimation {
  0% {
    background-image: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55);
  }
  20% {
    background-image: linear-gradient(to right, #5ac8fa, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964);
  }
  40% {
    background-image: linear-gradient(to right, #007aff, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa);
  }
  60% {
    background-image: linear-gradient(to right, #7DC8E8, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff);
  }
  100% {
    background-image: linear-gradient(to right, #5856d6, #ff2d55, #4cd964, #5ac8fa, #007aff, #7DC8E8);
  }
}
</style>

```

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />