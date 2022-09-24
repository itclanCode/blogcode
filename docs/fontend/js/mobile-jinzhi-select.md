---
title: 移动端web如何禁止长按选择文字以及弹出菜单
autoGroup-4: 常用片段代码
---

## 移动端web如何禁止长按选择文字以及弹出菜单

在做移动端页面时,当用户用手机打开网站,当在上面用手指进行一些用户操作时

如果没有做任何处理,当用户点击屏幕,且有长按的动作时,屏幕会弹出一菜单,以及选中的效果,这个是非常不好的体验,那怎么禁用呢，用css几行代码就可以解决

```js
/*如果是禁用长按选择文字功能，用css*/  
    * {  
        -webkit-touch-callout:none;  
        -webkit-user-select:none;  
        -khtml-user-select:none;  
        -moz-user-select:none;  
        -ms-user-select:none;  
        user-select:none;  
    } 
   // 这是input
   input {      
             -webkit-user-select:auto; /*webkit浏览器*/     
        } 
    // 如果是想禁用长按弹出菜单, 用js的话,阻止默认事件  
    window.addEventListener('contextmenu', function(e){  
        e.preventDefault();  
    }); 
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />