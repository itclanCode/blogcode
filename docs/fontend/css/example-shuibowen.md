---
title: 纯css3实现水波纹从中心向四周扩散动画
---

## 纯css3实现水波纹从中心向四周扩散动画

## 快速导航

<TOC />

## 示例效果

<exampleskill-shuibowen />

## 示例代码

```html
<template>
    <div class="zanbtn-wrap">
        <div @click="handleClick('https://pay.aikelaidev.cn/paypage/?merchant=35bdYxSx7dCUrVUBqFQjdqqlzhWryCA7lqOn9VhakWHC')" class="zanBtn">赞</div>
    </div>
</template>
<script>
export default {
    name:'shuibowen',
    methods: {
        handleClick(openUrl) {
            window.open(openUrl, "_blank");
        }
    }

}
</script>
<style scoped>
@keyframes zanBtnAnimation {
  0% {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 1px rgba(255, 37, 37, 0);
  }

  10% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px 2px rgba(255, 37, 37, 0.1);
  }

  20% {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0), 0px 0px 0px 4px rgba(255, 37, 37, 0.2);
  }

  40% {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 1px rgba(255, 37, 37, 0.1), 0px 0px 0px 4px rgba(0, 0, 0, 0), 0px 0px 0px 6px rgba(255, 37, 37, 0.3);
  }

  50% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px 3px rgba(255, 37, 37, 0.2), 0px 0px 0px 5px rgba(0, 0, 0, 0), 0px 0px 0px 8px rgba(255, 37, 37, 0.4);
  }

  60% {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0), 0px 0px 0px 5px rgba(255, 37, 37, 0.3), 0px 0px 0px 6px rgba(0, 0, 0, 0), 0px 0px 0px 10px rgba(255, 37, 37, 0.5);
  }

  70% {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0), 0px 0px 0px 6px rgba(255, 37, 37, 0.4), 0px 0px 0px 7px rgba(0, 0, 0, 0), 0px 0px 0px 11px rgba(255, 37, 37, 0.4);
  }

  80% {
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0), 0px 0px 0px 7px rgba(255, 37, 37, 0.3), 0px 0px 0px 8px rgba(0, 0, 0, 0), 0px 0px 0px 12px rgba(255, 37, 37, 0.3);
  }

  90% {
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0), 0px 0px 0px 6px rgba(255, 37, 37, 0.2), 0px 0px 0px 9px rgba(0, 0, 0, 0), 0px 0px 0px 13px rgba(255, 37, 37, 0.2);
  }

  100% {
    box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 0), 0px 0px 0px 7px rgba(255, 37, 37, 0.1), 0px 0px 0px 10px rgba(0, 0, 0, 0), 0px 0px 0px 14px rgba(255, 37, 37, 0);
  }
}

.zanbtn-wrap {
    text-align: center;
}

.zanBtn {
  width: 45px;
  height: 45px;
  padding: 10px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  background: rgba(255, 37, 37, 0.6);
  color: #fff;
  text-decoration: none;
  border-radius: 100%;
  -webkit-animation: zanBtnAnimation 2s alternate infinite;
  animation: zanBtnAnimation 2s alternate infinite;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: 500;
  line-height: 45px;
  border: none;
  outline: none;
  cursor:pointer;
}
</style>

```
实现这个示例效果,主要是使用css3中的动画关键帧,以及`box-shadow`实现

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />