---
title: css实现烟雾效果
autoGroup-2: 常见实例技巧
---

## css实现烟雾效果

## 快速导航

<TOC />


## 文字烟雾效果

<exampleskill-textYanwu />

:::: tabs type:border-card
::: tab html lazy
```html
 <div class="textYanWu-wrap">
    <span>C</span><span>S</span><span>S</span><span>&nbsp;</span><span>S</span
    ><span>m</span><span>o</span><span>k</span><span>y</span><span>&nbsp;</span
    ><span>T</span><span>e</span><span>x</span><span>t</span><span>&nbsp;</span
    ><span>E</span><span>f</span><span>f</span><span>e</span><span>c</span
    ><span>t</span>
  </div>
```
:::
::: tab css lazy
```css
.textYanWu-wrap {
    margin: 10px 0px;
    font-family: Arial, Helvetica, sans-serif;
}

span {
  display: inline-block;
  text-shadow: 0 0 0 whitesmoke;
  animation: smoky 5s 3s both;
}

span:nth-child(even){
  animation-name: smoky-mirror;
}

@keyframes smoky {
  60% {
    text-shadow: 0 0 40px whitesmoke;
  }
  to {
    transform:
      translate3d(15rem,-8rem,0)
      rotate(-40deg)
      skewX(70deg)
      scale(1.5);
    text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@keyframes smoky-mirror {
  60% {
    text-shadow: 0 0 40px whitesmoke; }
  to {
    transform:
      translate3d(18rem,-8rem,0)
      rotate(-40deg) 
      skewX(-70deg)
      scale(2);
     text-shadow: 0 0 20px whitesmoke;
    opacity: 0;
  }
}

@for $item from 1 through 21 {
  span:nth-of-type(#{$item}){ 
    animation-delay: #{(3 + ($item/10))}s; 
  }
} 
```
:::
::::
