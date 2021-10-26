---
title: 文字超出末尾显示省略号
autoGroup-2: 常见实例技巧
---

## 文字超出末尾显示省略号

## 快速导航

<TOC />

## 单行文字

<ellipsis-singleEllipsis />

实现代码如下

```scss{2,4}
.single-ellpsis-wrap {
  width: 500px; // 注意宽度是必须的
  overflow: hidden; // 超出部分隐藏
  text-overflow: ellipsis; // 超出部分,用...省略号代替
  white-space: nowrap; // 不换行
}
```

## 多行文字

<ellipsis-multiEllipsis />

实现代码如下

```scss{2,4}
.multi-ellpsis-wrap {
  display: -webkit-box; // 声明弹性盒模型,浏览器前缀必须加上,火狐-moz/IE-moz/chrome-webkit
  -webkit-box-orient: vertical; // 垂直方向
  -webkit-line-clamp: 3; //需要显示的行数
  overflow: hidden; // 溢出隐藏
  text-overflow: ellipsis; // 内容超出部分,省略号显示
}
```

::: warning 提示
当声明`display:box`,时,必须要加上浏览器前缀`-webkit-box`,否则就不会生效.
:::

## 相关文档

- [MDN-overflow 详解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow)
- [MDN-text-overflow 详解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-overflow)
- [MDN-white-space 详解](https://developer.mozilla.org/zh-CN/docs/Web/CSS/white-space)
- [w3cshool-box-orient](https://www.w3school.com.cn/cssref/pr_box-orient.asp)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
