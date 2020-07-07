---
title: 文字超出末尾显示省略号
---

## 文字超出末尾显示省略号

## 快速导航

<TOC />

## 单行文字

<ellipsis-singleEllipsis />

实现代码如下

```scss
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

```scss
.multi-ellpsis-wrap {
  display: -webkit-box;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; //需要显示的行数
  overflow: hidden;
  text-overflow: ellipsis;
}
```
