---
title: css实现动画箭头
autoGroup-3: css3动效
---

## css 实现动画箭头

## 快速导航

<TOC />

## 实例效果

<animate-animateArrowDown />
::: details 点击即可查看向下箭头示例代码
```css{6,7,8}
.arrow {
  display: block;
  width: 20px;
  height: 20px;
  margin-left: -11px;
  border: 3px solid transparent;     // 透明
  border-right: 3px solid #42b983;   // 主要是改变border的方向,与制作三角形类似
  border-bottom: 3px solid #42b983;  // 主要是改变border的方向
  z-index: 99;
  opacity: 0.8;
  -webkit-transform: rotate(45deg);
  -webkit-animation: arrow 1.5s infinite ease-in-out;
}
// webkit浏览器,若是需要兼容firefox,IE需要添加浏览器前缀-moz,-ms
@-webkit-keyframes arrow {
0% {
opacity: 0;
-webkit-transform: translate(0, 0px) rotate(45deg);
}
50% {
opacity: 1;
-webkit-transform: translate(0, -5px) rotate(45deg);
}
100% {
opacity: 0;
-webkit-transform: translate(0, -10px) rotate(45deg);
}
}

// 标准浏览器
@keyframes arrow {
0% {
opacity: 0;
-webkit-transform: translate(0, 0px) rotate(45deg);
}
50% {
opacity: 1;
-webkit-transform: translate(0, -5px) rotate(45deg);
}
100% {
opacity: 0;
-webkit-transform: translate(0, -10px) rotate(45deg);
}
}

````
:::

<animate-animateArrowUp />
::: details 点击即可查看朝上箭头示例代码
```css{6,7,8}
.arrow {
  display: block;
  width: 20px;
  height: 20px;
  margin-left: -11px;
  border: 3px solid transparent;
  border-top: 3px solid #42b983;  // 改变的是top, left
  border-left: 3px solid #42b983;
  z-index: 99;
  opacity: 0.8;
  -webkit-transform: rotate(45deg);
  -webkit-animation: arrow 1.5s infinite ease-in-out;
}

@-webkit-keyframes arrow {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0px) rotate(45deg);
  }
  50% {
    opacity: 1;
    -webkit-transform: translate(0, -5px) rotate(45deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, -10px) rotate(45deg);
  }
}

````

:::

<animate-animateArrowLeft />

::: details 点击即可查看朝左箭头示例代码

```css{6,7,8}
.arrow {
  display: block;
  width: 20px;
  height: 20px;
  margin-left: -11px;
  border: 3px solid transparent;
  border-left: 3px solid #42b983;
  border-bottom: 3px solid #42b983;
  z-index: 99;
  opacity: 0.8;
  -webkit-transform: rotate(45deg);
  -webkit-animation: arrow 1.5s infinite ease-in-out;
}

@-webkit-keyframes arrow {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0px) rotate(45deg);
  }
  50% {
    opacity: 1;
    -webkit-transform: translate(0, -5px) rotate(45deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, -10px) rotate(45deg);
  }
}
```

:::
<animate-animateArrowRight />
::: details 点击即可查看朝右箭头示例代码

```css{6,7,8}
.arrow {
  display: block;
  width: 20px;
  height: 20px;
  margin-left: -11px;
  border: 3px solid transparent;
  border-top: 3px solid #42b983;
  border-right: 3px solid #42b983;
  z-index: 99;
  opacity: 0.8;
  -webkit-transform: rotate(45deg);
  -webkit-animation: arrow 1.5s infinite ease-in-out;
}

@-webkit-keyframes arrow {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0px) rotate(45deg);
  }
  50% {
    opacity: 1;
    -webkit-transform: translate(0, -5px) rotate(45deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, -10px) rotate(45deg);
  }
}
```

:::

## 简要分析

实现这个箭头,与制作三角形类似,控制`border`的上,下，左,右四个方向,结合`transparent`透明,给一个宽度和高度,然后控制`border`的方向即可实现箭头,动画主要是使用`@keyframes`,通过`transform`上下平移,及旋转相对应的角度,渐隐渐现的通过`opacity`透明度`0`,`1`来控制

```css
width: 20px;
height: 20px;
border: 3px solid transparent;
border-top: 3px solid #42b983;
border-right: 3px solid #42b983;
```

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>
