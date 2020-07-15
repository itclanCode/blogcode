---
title: 本地存储
---

## 本地存储

## 快捷导航

<TOC />

## 前言

`Cookie` 用于存储 `web`页面的用户信息

## Cookie

- ### 增加 cookie

::: details 点击即可查看代码

```js
function setCookie(key, value, expiredays) {
  var exdate = new Date(); // 当前时间
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie =
    key +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString());
}
```

:::

- ### 删除 cookie

::: details 点击即可查看代码

```js
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}
```

:::

- ### 查找 cookie

:::details 点击即可查看代码

```js
function getCookie(name) {
  var arr,
    reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  if ((arr = document.cookie.match(reg))) {
    return arr[2];
  } else {
    return null;
  }
}
```

:::
