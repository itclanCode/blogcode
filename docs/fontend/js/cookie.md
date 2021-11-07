---
title: cookie操作
autoGroup-4: JS 实用案例技巧
---

## cookie增删查

## 快速导航

<TOC />

## 添加cookie

```js
function setCookie(key, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = key + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}
```

## 删除cookie

```js
function delCookie(name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
  }
}
```

## 查找cookie

```js
function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = document.cookie.match(reg)){
    return (arr[2])
  } else{
    return null
  }
}
```

