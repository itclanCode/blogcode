---
title: 鼠标移到边框时效果
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## 鼠标移到边框时效果

## 具体效果实现

<exampleskill-mouseBorder />

## 具体代码实现

::: details 点击即可查看 html 代码

```html
<div id="draw-border">
  <button>Hover</button>
</div>
```

:::

::: details 点击即可查看 css 代码

```css
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
}

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before,
button::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before,
button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.3s, width 0.3s ease-out 0.3s,
    height 0.3s ease-out 1s;
}
```

:::

## 鼠标经过圆形效果

<exampleskill-circularEffect />

## 具体实例代码

::: details 点击即可查看 html 效果

```html
<div id="circle-btn">
  <div class="btn-container">
    <button>Hover</button>
  </div>
</div>
```

:::

::: details 点击即可查看 css 代码

```css
#circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
}

.btn-container {
  position: relative;
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 40px 16px 40px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 2s ease;
}

button:hover {
  background-position: left bottom;
}
```

:::

## 鼠标经过元素抖动效果

<exampleskill-shake />

## 具体实现

::: details 点击即可查看`html`代码

```
<span class="shake">弹</span>
```

:::
::: details 点击即可查看`css`代码

```css
.shake {
  width: 40px;
  height: 40px;
  display: block;
  background: lightgreen;
  border-radius: 50%;
  margin: 5px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  -webkit-transition: all 0.25s;
}

.shake:hover {
  -webkit-animation: shake 0.25s;
  background: lightblue;
}

@keyframes shake {
  0%,
  10%,
  55%,
  90%,
  94%,
  98%,
  100% {
    -webkit-transform: scale(1, 1);
  }

  30% {
    -webkit-transform: scale(1.14, 0.86);
  }

  75% {
    -webkit-transform: scale(0.92, 1.08);
  }

  92% {
    -webkit-transform: scale(1.04, 0.96);
  }

  96% {
    -webkit-transform: scale(1.02, 0.98);
  }

  99% {
    -webkit-transform: scale(1.01, 0.99);
  }
}
```

:::
