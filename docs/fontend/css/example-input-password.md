---
title: 表单用户密码框内容的显示和隐藏
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## 实例效果

<form-inputPassword />

## 具体实现

::: details 点击即可查看代码

html 代码

```
<input :type="type" name="pass" v-model="inputVal" />
<button @click="switchPass">{{ type==="password" ? "隐藏密码":"显示密码"}}</button>
```

css 代码

```css
input {
  border: #cccccc 1px solid;
  background-color: #fff;
  color: #666;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
}

button {
  width: 30%;
  background: #42b983;
  outline: none;
  color: #fff;
  border: none;
  cursor: pointer;
}
```

js 代码

```js
export default {
  name: 'inputPassword',
  data() {
    return {
      type: 'password', // 通过切换input的type类型即可进行切换
      inputVal: '123456',
      onOff: true,
    };
  },

  methods: {
    switchPass() {
      if (this.onOff) {
        // 这里是核心切换密码的显示与隐藏代码
        this.type = 'password';
      } else {
        this.type = 'text';
      }
      this.onOff = !this.onOff;
    },
  },
};
```

:::

## 原生实现

::: details 点击即可查看代码

```html
<input type="password" name="pass" id="pwd" />
<span state="off" id="iState" onclick="showPassWord()">隐藏密码</span>
```

js

```js
function showPassWord() {
  var iState = document.getElementById('iState'); // 获取元素
  var spanText = iState.innerText; // 获取span元素内的文本
  var pwd = document.getElementById('pwd'); // 获取input元素
  var state = iState.getAttribute('state'); // 获取span元素的state的属性
  if (state === 'off') {
    //根据属性判断
    pwd.setAttribute('type', 'text'); // 设置input,type属性
    iState.setAttribute('state', 'on');
    spanText = '隐藏密码';
  } else {
    pwd.setAttribute('type', 'password'); // 密码框
    iState.setAttribute('state', 'off');
    spanText = '显示密码';
  }
}
```

:::

## 总结

这个`span`的作用主要是用于用户两次点击效果的判断. 点击第一次, 密码显示; 点击第二次, 密码隐藏. 重复这样的动作. 利用这个`state` 来查看其状态.

重点就在于, 修改 `input` 的 `type` 属性, 显示的时候 `type` 为 `text`, 隐藏的时候是`password.`

无论`jQ`,`Vue`,`React`,最终处理的逻辑都差不多
