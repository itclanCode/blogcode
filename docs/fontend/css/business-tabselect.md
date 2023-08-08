---
title: tab选项卡切换
autoGroup-4: 业务型实例
---

## tab选项卡切换

## 快速导航

<TOC />

## 示例效果

### 追随动画

<business-hoverTab />

::: details hoverTab示例代码
```html
<style scoped lang="scss">
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tab-container {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title{
      padding-left:30px;
      font-size: 12px;
      color:#ddd;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 100%;
          bottom: 0;
          transition: all .4s;
        }

        &:hover {
          color: #00adb5;
          &::after {
            width: 100%;
            left: 0;
            transition-delay: 0.1s;
          }
          & ~ li::after {
            left: 0;
          }
        }
      }

    }
  }
</style>

<template>
  <div class="tab-container">
    <div class="title">hover to change</div>
    <ul class="tabs">
      <li class="tab-item" v-for="(tabName,index) in lists" :key="index">{{tabName}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hoverTab',
    data() {
      return {
        lists: ['前端','后端','算法','区块链','大数据','架构设计','DBA']
      }
    },
  }
</script>

```
:::

<business-clickTab/>

::: details 点击Tab示例代码
```html
<style scoped lang="scss">
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tab-container2 {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title{
      padding-left:30px;
      font-size: 12px;
      color:#ddd;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 100%;
          bottom: 0;
          transition: all .4s;
        }

        &.active {
          color: #00adb5;
          &::after {
            width: 100%;
            left: 0;
            transition-delay: 0.1s;
          }
          & ~ li::after {
            left: 0;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="tab-container2">
    <div class="title">click to change</div>
    <ul class="tabs">
      <li class="tab-item" v-for="(listName,index) in lists" :key="index" :class="{active:isActive==index}" @click="setActive(index)">{{listName}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'clickTab',
    data() {
      return {
        isActive: 1,
        lists:['html','css','javascript','vue','react','angular']
      }
    },
    methods: {
      setActive(index) {
        this.isActive = index
      }
    }
  }
</script>

```
:::

```html
<ul class="tabs">
    <li>tab1</li>
    ...
</ul>
```

```scss
  .tabs {
    li {
      color: #909399;
      background-color: #fff;
      &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #00adb5;
        position: absolute;
        left: 100%;
        bottom: 0;
        transition: all .4s;
      }

      &:hover {
        color: #00adb5;
        &::after {
          width: 100%;
          left: 0;
          transition-delay: 0.1s;
        }
        & ~ li::after {
          left: 0;
        }
      }
    }
  }
```

:::tip
`click` 变化只需把 `:hover` 改为对应的类名即可
:::

### 中间展开

<business-centerTab />

```scss
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      cursor: pointer;
      position: relative;
      font-size: 18px;
      color: #909399;
      background-color: #fff;
      &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #00adb5;
        position: absolute;
        left: 0; right: 0;
        bottom: 0;
        margin: auto;
        transition: width .4s;

      }
    }
    li.active {
      &::after {
        width: 100%;
      }
    }
  }
```

::: details 中间向两边
```html
<style scoped lang="scss">
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .tab-container3 {
    border: 1px solid #eee;
    margin: 50px auto;
    padding: 20px 0;
    .title {
      padding-left: 30px;
      font-size: 12px;
      color: #ddd;
    }
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        cursor: pointer;
        position: relative;
        font-size: 18px;
        color: #909399;
        background-color: #fff;
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: 0;
          transition: width .4s;

        }
      }
      li.active {
        &::after {
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="tab-container3">
    <div class="title">click to change</div>
    <ul class="tabs">
      <li class="tab-item" v-for="n in 5"
        :key="n"
        :class="{active:isActive==n}"
        @click="setActive(n)">tab{{n}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'centerTab',
    data() {
      return {
        isActive: 1
      }
    },
    methods: {
      setActive(index) {
        this.isActive = index
      }
    }
  }
</script>

```
:::

### tab底部圆形边框

<business-circleTab />

::: details Tab底部圆形边框
```html
<style scoped lang="scss">
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

$radius: 10px;
$bg-color: #eee;
$active-color: #00adb5;
.tab-container2 {
  border: 1px solid #eee;
  margin: 50px auto;
  padding: 20px 0;
  .title {
    padding-left: 30px;
    font-size: 12px;
    color: #ddd;
    margin-bottom: 15px;
  }
  .tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $active-color;

    li {
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      cursor: pointer;
      position: relative;
      font-size: 18px;
      color: #fff;
      background: $active-color;
      transition: color 0.2s, height 0.2s, margin 0.2s;
      border-radius: $radius;
      position: relative;

      &:not(:first-of-type)::before,
      &:not(:first-of-type)::after {
        content: "";
        bottom: 0;
        width: $radius;
        height: $radius;
        position: absolute;
      }

      &.active {
        color: #909399;
        background: $bg-color;
        height: 50px;
        line-height: 50px;
        margin-top: -10px;
        border-radius: $radius $radius 0 0;
        &::before {
          left: -$radius;
          border-radius: 0 0 $radius 0;
          background: $active-color;
          z-index: 2;
        }
        &::after {
          left: -$radius;
          background: $bg-color;
          z-index: 1;
        }
      }
      &.active + li {
        &::before {
          left: 0;
          background: $bg-color;
        }
        &::after {
          border-radius: 0 0 0 $radius;
          left: 0;
          background: $active-color;
        }
      }
    }
  }
}
</style>

<template>
  <div class="tab-container2">
    <div class="title">click to change</div>
    <ul class="tabs">
      <li
        class="tab-item"
        v-for="n in 5"
        :key="n"
        :class="{ active: isActive == n }"
        @click="setActive(n)"
      >
        tab{{ n }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "circleTab",
  data() {
    return {
      isActive: 2
    };
  },
  methods: {
    setActive(index) {
      this.isActive = index;
    }
  }
};
</script>


```
:::


<footer-FooterLink :isShareLink="false" :isDaShang="true" />