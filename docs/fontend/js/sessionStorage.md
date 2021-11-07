---
title: sessionStorage
autoGroup-4: JS 实用案例技巧
---

## sessionStorage

## 快速导航

<TOC />

## 设置seesionStorage
```js
 setStorageData(key, value) {
      sessionStorage.setItem(key, value);
    },
```

## 获取sessionStorage
```js
getStorageData(key) {
      const str = sessionStorage.getItem(key);
      if (typeof str == "string") {
        try {
          return JSON.parse(str);
        } catch (e) {
          return str;
        }
      }
      return str;
    },
```
例如:在做分页时,点击页码,刷新页面时,仍停留在当前页,而不回到第一页

```js
  created() {
    this.pageNo = this.getStorageData("currentPage") || 1;
    console.log("当前页", this.pageNo);
  },
   // 跳转页,currentPage 当前页改变时会触发
    pageCurrentChange(pageNo) {
      this.pageNo = pageNo;
      this.setStorageData("currentPage", this.pageNo);
      // this.getProjectList();
      console.log("跳转页,currentPage 当前页改变时会触发");
    },
```

