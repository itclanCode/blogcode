---
title: 使用一行css实现黑白色主题皮肤的切换
---

## 使用一行css实现黑白色主题皮肤的切换

## 快速导航

<TOC />

## 示例

<exampleskill-setTheme />


## 示例代码

```html
<template>
        <div class="css-switch-theme">
            <el-switch
                    @change="hanldeSwitchTheme"
                    v-model="themValue"
                    active-text="暗黑"
                    inactive-text="白色"
                    active-color="#42b983"
            >
            </el-switch>
        </div>
  </template>
  
  <script>

  export default {
    name:"setTheme",
    data() {
        return {
           themValue: false   
        }
    },

    methods: {
        hanldeSwitchTheme(value) {
                if(value) {
                        document.querySelector('html').style = 'filter:invert(1) hue-rotate(180deg);transition:all 300ms';
                }else {
                 // 白色模式
                    console.log(value);
                 document.querySelector('html').style = 'filter:grayscale(0);transition:all 300ms';
               }
        }
    }
  };
  </script>
  
  <style lang="stylus" scoped>
  .css-switch-theme {
        display:flex;
        justify-content: center;
  }
  </style>
```

其核心就是下面这行代码

```js
document.querySelector('html').style = 'filter:invert(1) hue-rotate(180deg);';
```
`filter`是一个非常神奇的属性，能将`Photoshop`一些基础的滤镜效果应用到网站上

使用`hue-rotate`这个函数结合CSS变量动态生成过渡颜色

暗黑模式使用到两个滤镜函数：`invert`、`hue-rotate`

* `invert`：反相，反向输出图像着色，值为 `0%`则无变化，值为`0~100%`则是线性乘子效果，值为`100%`则完全反转

* `hue-rotate`:色相旋转，减弱图像着色，处理非黑白的颜色，值为 `0deg`则无变化，值为`0~360deg`则逐渐减弱，值超过`360deg`则相当绕N圈再计算剩余的值

`invert`简单理解就是黑变白，白变黑，黑白颠倒。`hue-rotate`简单理解就是冲淡颜色。为了确保主题色调不会改变，将色相旋转声明为`180deg`比较合理

