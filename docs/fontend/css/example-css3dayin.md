---
title: 使用css3如何实现一个文字打印效果
autoGroup-2: 常见实例技巧
---


## 使用css3如何实现一个文字打印效果

## 快速导航

<TOC />

## 前言

在很多网站首页介绍页里,为了吸引用户,暂留更长时间,使用了一些css3动画的


## 如下动画所示

<exampleskill-autoTypePrint  />

## 实现这个动画原理

想要实现这个动画,改变元素的宽度,结合动画css3关键帧实现,以及背景渐变

## 具体代码如下所示

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>css3实现打字机效果</title>
<style>
.example-css3dayin {
        text-align: center;
        font-weight: 700;
        font-size: 60px;
        line-height: 79px;
        background: linear-gradient( 270deg, rgba(198, 141, 255, 0.9) 8.92%, #5685ff 46.17%, #48d6ff 92.17% );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        white-space: nowrap;
        animation: animateText 4.7s steps(8) infinite;
        -webkit-animation: animateText 4.7s steps(8) infinite;
}

@-webkit-keyframes animateText {
        0% {
            width: 0;
        }
        35% {
            width: 8.1em;
        }
        75% {
            width: 8.1em;
        }
        100% {
            width: 0;
        }
   }
    
    @keyframes animateText {
        0% {
            width: 0;
        }
        35% {
            width: 8.1em;
        }
        75% {
            width: 8.1em;
        }
        100% {
            width: 0;
        }
   }      

    </style>
  </head>
  <body>
       <p class="example-css3dayin">AI创新，引领未来</p>
  </body>
</html>
      
```

## 效果当中的关键帧动画

`animation`动画通过设置多个节点来精确控制一个或者一组动画，常用来实现复杂的动画效果；

相对过渡动画，`animation`动画可以实现更多变化，更多控制，实现自动播放等效果

制作animation动画需要两个步骤

第一步，需要先定义动画，0%的时候我们一般建议什么也不要设置，默认就是初始的样式；
```css
 @keyframes 动画名称 {

    0% {

        开始动画

    }

    100% {

        结束动画

    }

}
```    
第二步，定义了的动画需要调用才能使用生效，哪一个盒子需要调用动画就设置以下两个必须的属性；

```css
animation-name: 动画名称;

animation-duration: 持续时间（单位是s）  
```
例如上面的动画
```css
.example-css3dayin {
        // 上面省略
        animation: animateText 4.7s steps(8) infinite;
        -webkit-animation: animateText 4.7s steps(8) infinite;
}

@-webkit-keyframes animateText {
        0% {
            width: 0;
        }
        35% {
            width: 8.1em;
        }
        75% {
            width: 8.1em;
        }
        100% {
            width: 0;
        }
   }
    
    @keyframes animateText {
        0% {
            width: 0;
        }
        35% {
            width: 8.1em;
        }
        75% {
            width: 8.1em;
        }
        100% {
            width: 0;
        }
   }      

```

`0%`是动画的开始，`100%`是动画的完成，完成整个动画过程的规则就是动画序列；

动画定义的是也可以用`from`和`to`来定义，的等同于`0%`到`100%`；

`@keyframes`中规定某项`css`样式，将当前的样式逐渐改为新的样式的过程，称之为动画，我们可以改变任意的样式，改变任意的次数

## CSS3动画常见属性

* @keyframes :规定动画

* animation: 所有动画属性的简写属性，除了 `animation-play-state` 属性。

* animation-name:规定 `@keyframes` 动画的名称。（必须有）。

* animation-duration: 规定动画完成一个周期所花费的秒或毫秒。默认是 0。（必须有）。

* animation-timing-function: 规定动画的速度曲线。默认是 "ease"。

* animation-delay: 规定动画何时开始。默认是 0。必须写单位s。

* animation-iteration-count: 规定动画被播放的次数。默认是 1。循环是infinite；

* animation-direction: 规定动画是否在下一周期逆向地播放。默认是 “normal”。alternate逆向

* animation-play-state: 规定动画是否正在运行或暂停。默认是 "running“,暂停是paused。

* animation-fill-mode: 规定对象动画时间之外的状态。保持现状`forwards`，回到起始`backwards`

## animation-timing-function

animation-timing-function: linear,动画从头到尾的速度是相同的。

animation-timing-function: ease,默认。动画以低速开始，然后加快，在结束前变慢。

animation-timing-function: ease-in,动画以低速开始。

animation-timing-function: ease-out,动画以低速结束。

animation-timing-function: ease-in-out,动画以低速开始和结束。

animation-timing-function: steps(步数设置),让动画在规定的时间里几步完成

## CSS3动画简写

animation: 动画名称  持续时间  运动曲线   何时开始（延时） 播放次数  是否反向播放  动画结束后的状态

animation: name duration timing-function delay iteration-count direction fill-mode

```css
animation: animateText 4.7s steps(8) infinite;
```

## 注意事项

动画简写属性的时候，动画名称和动画持续时间必须要书写，其他属性需要就书写不需要就省略，如果书写动画延时必须书写单位s，哪怕是0s也要书写

持续时间和延时的时间有先后顺序

## 多个动画同时调用

如果一个元素需要同时调用多个动画我们只需要用一个`animation`,不同的动画用英文的逗号隔开
```css
animation: bear .3s steps(8) infinite;

 animation: move 1s ease forwards;
 // 可以合并到一起使用
 animation: bear .3s steps(8) infinite, move 3s ease forwards;
 ```

 ## 总结

 css3动画是一个非常强大的属性,属性值也特别多,很多动画,看似很简单,但是一写就不会,还是要多模仿,多写相关的动画

 看到了有趣的效果,就研究一下的,可以应用到公司的产品和网站当中去的

 <footer-FooterLink :isShareLink="false" :isDaShang="true" />