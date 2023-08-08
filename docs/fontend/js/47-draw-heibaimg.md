---
title: 有趣的拖动黑白对比图片特效
---

## 有趣的拖动黑白对比图片特效

## 快速导航

<TOC />

## 示例效果

<exampleskill-drawHeiBai />

## 原生版本实现

```html
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>有趣的拖动黑白对比图片特效</title>
  <style>
    .container{
      max-width:900px;
      margin:auto;
    }

    #inked-painted { 
      position: relative;
      font-size: 0; 
      -ms-touch-action: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
    }

    #inked-painted img { 
      width: 100%;
      height: auto; 
    }

    #colored { 
      background-image: url(https://codyhouse.co/demo/image-comparison-slider/img/img-original.jpg);
      position: absolute;
      top: 0; 
      left: 0;
      height: 100%;
      width: 50%;
      background-size: cover; 
    }

    #inked-painted:hover {
      cursor: col-resize; 
    }
  </style>

</head>
<body>
<div class="container">
  <div id="inked-painted">
    <img src="https://codyhouse.co/demo/image-comparison-slider/img/img-modified.jpg" id="inked" alt>
    <div id="colored"></div>
  </div>
  
</div>
<script>
    var inkbox = document.getElementById("inked-painted");
    var colorbox = document.getElementById("colored");

    var fillerImage = document.getElementById("inked");

    inkbox.addEventListener("mousemove",trackLocation,false);
    inkbox.addEventListener("touchstart",trackLocation,false);
    inkbox.addEventListener("touchmove",trackLocation,false);

    function trackLocation(e){
        var rect = fillerImage.getBoundingClientRect();
        var position = ((e.pageX - rect.left) / fillerImage.offsetWidth)*100;
        if(position <= 100){ 
        colorbox.style.width = position+"%";
    }
    }   
</script>

</body>
</html>
```

## Vue版本实现

如下是示例代码

```html
<template>
    <div>
        <div class="container">
            <div id="inked-painted" ref="inkedPainted">
                <img src="https://codyhouse.co/demo/image-comparison-slider/img/img-modified.jpg" id="inked" ref="inkedImg" alt>
                <div id="colored" ref="colored"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'drawHeiBai',
    mounted() {
        this.$refs.inkedPainted.addEventListener('mousemove',this.trackLocation,false);
        this.$refs.inkedPainted.addEventListener('touchstart',this.trackLocation,false);
        this.$refs.inkedPainted.addEventListener('touchmove',this.trackLocation,false);
    },
    methods: {
        trackLocation(e) {
            let rect = this.$refs.inkedImg.getBoundingClientRect();
	        let position = ((e.pageX - rect.left) / this.$refs.inkedImg.offsetWidth)*100;
	        if(position <= 100){ 
                this.$refs.colored.style.width = position+"%";
            }
        }
    }

}
</script>
<style scoped>
#inked-painted { 
  position: relative;
  font-size: 0; 
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
}

#inked-painted img { 
  width: 100%;
  height: auto; 
}

#colored { 
  background-image: url(https://codyhouse.co/demo/image-comparison-slider/img/img-original.jpg);
  position: absolute;
  top: 0; 
  left: 0;
  height: 100%;
  width: 50%;
  background-size: cover; 
}

#inked-painted:hover {
  cursor: col-resize; 
}
</style>

```
<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />