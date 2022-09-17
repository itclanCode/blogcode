---
title: 如何屏蔽浏览器右键菜单以及屏蔽F12审查元素
autoGroup-4: 常用片段代码
---

## 如何屏蔽浏览器右键菜单以及屏蔽F12审查元素

## 快速导航

<TOC />

## 屏蔽浏览器右键菜单

```js
// 屏蔽右键菜单
   document.oncontextmenu = function (event) {
        if (window.event) {
            event = window.event;
        }
        try {
            var the = event.srcElement;
            if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
                return false;
            }
            return true;
        } catch (e) {
            return false;
        }
    }
```

## 屏蔽F12审查元素

```js
// 屏蔽F12审查元素
document.onkeydown = function () {
    if (window.event && window.event.keyCode == 123) {
        event.keyCode = 0;
        event.returnValue = false;
    }
    if (window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if (window.event && window.event.keyCode == 8) {
        window.event.returnValue = false;
    }
}
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />
