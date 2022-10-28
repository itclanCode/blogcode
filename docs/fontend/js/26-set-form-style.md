---
title: JS如何为表单聚焦控件设置醒目的样式
autoGroup-5: JS特效
---

## JS如何为表单聚焦控件设置醒目的样式

## 快速导航

<TOC />

## 前言

在用户填写表单时,为了让用户集中精力填写或某一个表单控件,可以通过设置此空间的样式来达到目的

那这样的效果如何实现呢,如下示例所示的

## 示例展示

<jingdiantexiao-formStyle />

## 原生JS实现

如下是简易的示例代码,要想实现这一个效果,必须要知道`onfocus`和`onblur`,前者是聚焦的回调事件,而后者是控件失去焦点的回调

在一个网页里,永远都只能有一个控件获得焦点,因此需要遍历所有的控件,为它们定义相同的`onfocus`以及`onblur`的逻辑

当控件获得焦点时,为它设置独特的边框样式,否则就恢复原有的边框样式

```js
function init() {
    var f = document.form[0];  // 获取表单DOM
    var elements = f.elements; // 获取所有的控件数组
    var str = '';              // 拼接字符串
    // 循环遍历
    for(var i = 0;i<elements.length;i++) {
        var e = elements[i];   // 当前的控件
        e.onfocus = function() { // 定义聚焦的样式回调
            // 修改边框的红色
            this.style.border = '1px solid red';
        }
        e.onblur = function() {      // 失去焦点的回调
            this.style.border = '';  // 恢复原有边框样式
        }
    }
}
init();
```
如下是`html`模板代码
```html
<form>
    年份
    <select name="myyear">
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
    </select><br />
    <input type="button" value="提交" onclick="showParams()">
</form>
```

## Vue版本实现

在`vue`里面是直接在元素上绑定`focus`与`blur`事件进行实现的,如下代码所示
```html
<template>
  <div class="wrap">
    <el-form
      status-icon
      label-width="100px"
    >
      <el-form-item>
        名字:
        <input type="text"
          v-model="name"  
          autocomplete="off"
          placeholder="请输入名字"
          @blur="handleInput('blur')"
          @focus="handleInput('focus')"
          :style="style" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "formStyle",
  data() {
    return {
        name: '',
        style: {
            border: "1px solid #ccc"
        }
    }
  },

  methods: {
    handleInput(type) {
        if(type == 'blur') {
            this.style.border = '1px solid #ccc';
        }else {
            this.style.border = '1px solid red';
        }
    }
  }

};
</script>
<style lang="scss" scoped>
.wrap {
    text-align: center;
    margin: 20px 0 20px 0;
}
</style>
```

## 相关示例

* [表单聚焦时输入框变化](/fontend/css/example-input-focus-animate)

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />