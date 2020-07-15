---
title: 用户名-手机号加密特殊处理
---

# 用户名-手机号加密特殊处理

## 快速导航

<TOC />

## 用户名-只保留姓氏或中间字符特殊处理

**需求**:

在做用户信息展示时,只需展示用户名姓,和最后一位,中间一位用`*`替代

- **方法 1**:封装函数,利用`substr`截取字符串

::: details 点击即可查看

```js
function formatName(name) {
  let newStr;
  if (name.length === 2) {
    newStr = name.substr(0, 1) + '*'; // 通过substr截取字符串从第0位开始截取,截取1个
  } else if (name.length > 2) {
    // 当名字大于2位时
    let char = '';
    for (let i = 0, len = name.length - 2; i < len; i++) {
      // 循环遍历字符串
      char += '*';
    }
    newStr = name.substr(0, 1) + char + name.substr(-1, 1);
  } else {
    newStr = name;
  }

  return newStr;
}
console.log(formatName('王海龙'));
```

:::
输出

```
王*龙
```

- **方法 2**: 使用正则表达式，只保留姓后面都变为\*

::: details 点击即可查看详情

```js
var str = '王小明';
var reg = /(?<=.)./g;
result = str.replace(reg, '*');
console.log(result);
```

:::
输出

```
王**
```

## 手机号码中间 4 位用星号（\*）替换显示

在做用户信息展示时,手机号属于私人信息,需要将中间四位给隐藏掉

- **方法 1**: 使用正则表达式

::: details 点击即可查看详情

```js
var phone = '13701134148';
var resultPhone = phone.replace(/^(\d{3})\d{4}(\d+)/, '$1****$2');
console.log(resultPhone);
```

:::
输出

```js
137****4148
```

- **方法 2**: 使用`substr`方法,字符串截取

::: details 点击即可查看详情

```js
var phone = '13701134148';
var mphone = phone.substr(0, 3) + '****' + phone.substr(7);
console.log(mphone);
// 如果用 Es6 模板字符串的话,可以不用+号做拼接
var phone = '13701134148';
var mphone = `${phone.substr(0, 3)}****${phone.substr(7)}`;
```

:::

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/js-article-imgs/name-mobile-encrye/usersensitive.png" alt="移动手机" />
</div>

<div align="center">
   <p>具体案例体验,可如下小程序码在我的页面体验</p>
   <img class="medium-zoom lazy" width="200" height="200" loading="lazy"  src="../../about/images/jiahaoruisen-min-code.jpg" alt="移动手机" />
</div>

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
