---
title: JS如何实现勾选全部复选框
autoGroup-5: JS特效
---

## JS如何实现勾选全部复选框

## 快速导航

<TOC />

## 前言

在一些后台管理系统里面,针对全选,复选框是一个很常见的操作,复选框可以执行多项选择的一种控件,有时，为了方便用户选中所有的复选框,网页界面

会提供一个选中所有复选框的功能,怎么实现一个复选框全部被选中的效果呢

## 示例效果

<jingdiantexiao-checkedAll />

## 原生js

实现全选的效果,复选框是否被勾选,是由它的`checked`属性决定的,因此,实现本例效果的关键就是找到所有对应的复选框,然后将其它的`checked`属性设置为`true`或`false`实现全选或全不选

如下实现一个简易的全选功能
```js
// 选择所有函数
function checkAll(c) {
    var arr = document.getElementsByTagName("myname");
    if(c) {
        // 遍历所有的复选框
        for(var i = 0;i<arr.length;i++) {
            arr[i].checked = true;   // 选中
        }
    }else {
        // 遍历所有的复选框
        for(var i = 0;i<arr.length;i++) {
            arr[i].checked = false; // 不选中
        }
    }
}
```
如下是`html`
```html
<input type="checkbox" name="mayall" onclick="checkAll(this.checked)" />全选<br />
<input type="checkbox" name="myname" />前端&nbsp;&nbsp;
<input type="checkbox" name="myname" />后端&nbsp;&nbsp;
<input type="checkbox" name="myname" />小程序
```

## Vue版本实现

如下代码所示,像这种全选,复选框,我们往往在提交的时候,是需要将具体的参数值,传递给后端的,而并非一些UI组件示例库当中
实现一下效果,就完事了的,往往需要自己进行二次特殊处理的

以下是上面全选,复选的示例代码

```html
<template>
    <div class="wrap">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedLanNames" @change="handleCheckedlanguagesChange">
                <el-checkbox v-for="lan in checkedLanOptions" :label="lan.type" :key="lan.name">{{lan.name}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
    export default {
        name: 'checkedAll',
        data() {
            return {
                checkAll: true, // 默认全选，true表示全选,false,不全选
                checkedLanNames: [], // 绑定默认选中
                type: "", // 向后端传的code字符串
                languages: [
                    {
                        type:'1',
                        name: "前端"
                    },
                    {
                        type:'2',
                        name: "后端"
                    },
                    {
                        type:'3',
                        name: "小程序"
                    },
                    {
                        type:'4',
                        name: "云开发"
                    },
                ],
                isIndeterminate: true
            };
       },

       mounted () {
           this.checkedLanNames = this.languages.map(item => item.type);
       },

       computed: {
         checkedLanOptions() {
            return this.languages;
         }
       },

       methods: {
        handleCheckAllChange(val) {
            //console.log("全选", val); // val就是v-model绑定的值,即this.checkAll
            if (this.checkAll) {
                  // 当全选被选中的时候,循环遍历源数据,把数据的每一项加入到默认选中的数组中区
                 this.checkedLanNames = this.languages.map((item) => item.type);
                } else {
                    this.checkedLanNames = [];
                    this.type = "";
                }
                this.isIndeterminate = false;
        },
        handleCheckedlanguagesChange(value) {
                // value就是v-model绑定的值,即this.checkedLanNames
                console.log(value);
                if (this.checkedLanNames.length == this.languages.length) {
                    this.checkAll = true;
                } else {
                    this.checkAll = false;
                }
                this.type = this.checkedLanNames.join(",");  // 用逗号拼接成字符串传递给后端
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
    margin:20px 0 20px 0;
}
</style>
```
## 相关拓展

- [全选-复选框-控制表格的列的显示和隐藏](/fontend/css/business-control-col-show)
- [全选-复选/单选框](/fontend/css/business-select-all)

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />