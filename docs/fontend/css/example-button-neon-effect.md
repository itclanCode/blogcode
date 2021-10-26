---
title: css 实现按钮霓虹效果
autoGroup-2: 常见实例技巧
---

## css 实现按钮霓虹效果

## 快速导航

<TOC />

## 实现效果

<exampleskill-buttonNone />

## 具体实例代码

::: details 点击即可查看`html`代码

```html
<div id="neon-btn">
  <button class="btn one">Hover</button>
  <button class="btn two">Hover</button>
  <button class="btn three">Hover</button>
</div>
```

:::

::: details 点击即可查看 css 代码

```css
#neon-btn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 15vh;
  background: #031628;
}

.btn {
  border: 1px solid;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 300;
}

.one {
  color: #4cc9f0;
}

.two {
  color: #f038ff;
}

.three {
  color: #b9e769;
}

.btn:hover {
  color: white;
  border: 0;
  cursor: pointer;
}

.one:hover {
  background-color: #4cc9f0;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
  box-shadow: 10px 10px 99px 6px rgba(76, 201, 240, 1);
}

.two:hover {
  background-color: #f038ff;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
  box-shadow: 10px 10px 99px 6px rgba(240, 56, 255, 1);
}

.three:hover {
  background-color: #b9e769;
  -webkit-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  -moz-box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
  box-shadow: 10px 10px 99px 6px rgba(185, 231, 105, 1);
}
```

:::

主要利用的是伪类`hover`,更多关于伪类与伪元素的区别:[css 中的伪类与伪元素](/fontend/css/css-pseudo-class-pseudo-el)
