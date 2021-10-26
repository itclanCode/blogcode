---
title: css实现switch开关
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## 单个开关

<switch-singleSwitch />

::: details 点击即可查看代码
html 结构

```html
<div class="switch-wrap">
      <input type="checkbox" id="checkbox" name="" />
      <label for="checkbox">
        <span></span>
      </label>
    </div>
  </div>
```

css 代码

```css
.switch-wrap {
  width: 42px;
  height: 20px;
  margin: 10px auto;
}

input {
  display: none;
}

label {
  display: block;
  border: 1px solid #888;
  height: 20px;
  border-radius: 15px;
  transition: all 0.5s ease;
}

label span {
  display: block;
  width: 20px;
  height: 20px;
  box-shadow: 1px 1px 1px #ccc;
  border-radius: 50%;
  background: #fff; // 默认背景色是白色
  transition: all 0.5s ease;
  cursor: pointer;
}

input:checked + label {
  // 这里是核心代码,当选中input中checkbox时,让同级元素背景色变化
  background: #42b983;
}

input:checked + label span {
  // 这里是核心代码
  transform: translateX(20px); // transform变换,水平方向向右平移20像素
  box-shadow: none; // 去掉盒阴影
}
```

:::

## 携带文字的开关

<switch-singSwitchWord />

::: details 点击即可查看代码
html 内容结构

```html
<div class="switch-wrap">
  <input id="checkboxword" type="checkbox" />
  <label for="checkboxword">
    <span class="move">
      <span>
        <em>开</em>
        <em>关</em>
      </span>
    </span>
  </label>
</div>
```

css 代码

```css
.switch-wrap {
  width: 42px;
  height: 20px;
  margin: 10px auto;
}

input {
  display: none;
}

label {
  display: block;
  border: 1px solid #888;
  height: 20px;
  border-radius: 15px;
  transition: all 0.5s ease;
}

label .move {
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  box-shadow: 1px 1px 1px #ccc;
  border-radius: 50%;
  background: #fff;
  transition: 0.3s;
  overflow: hidden;
}

input:checked + label {
  // 同上,当选中 checkbox 时,背景色改变
  background: #42b983;
}

input:checked + label .move {
  // 向右平移 20 像素
  transform: translateX(20px);
  box-shadow: none;
}

.move span {
  width: 40px;
  display: block;
  height: 20px;
  line-height: 20px;
  transition: 0.3s;
}

input:checked + label .move span {
  transform: translateX(-20px);
}

em {
  text-align: center;
  width: 50%;
  font-size: 12px;
  font-style: normal;
  float: left;
}
```

:::

## 分析

实现这个效果,主要利用了`input`中`checkbox`,`label`的`for`与`id`两者结合起来一起使用的特性

同时利用了 css3 中的`transform`变换中的`translateX`平移,如果说自己在`vue`或者`React`中,自己去实现一个类似这样的小组件
`大小`,及`按钮`的背景色,以及它应有的两个状态`true`,`false`

样式可以通过 css 去控制,这些动态可改变的都是该组件的接口属性

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
