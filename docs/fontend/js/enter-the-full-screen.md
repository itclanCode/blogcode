---
title: 进入/退出全屏模式
autoGroup-4: JS 实用案例技巧
---

## 进入全屏模式

## 快速导航

<TOC />

## 实例代码

```javascript
function launchFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen()
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen()
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen()
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullScreen()
  }
}

launchFullscreen(document.documentElement)
launchFullscreen(document.getElementById("id")) //某个元素进入全屏
```

## 退出全屏模式

```javascript
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}

exitFullscreen()
```

## 全屏事件

```javascript
document.addEventListener("fullscreenchange", function (e) {
  if (document.fullscreenElement) {
    console.log('进入全屏')
  } else {
    console.log('退出全屏')
  }
})
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />