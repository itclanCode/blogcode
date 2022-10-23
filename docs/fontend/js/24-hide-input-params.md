---
title: JS如何使用隐藏控件为表单添加参数
autoGroup-5: JS特效
---

## JS如何使用隐藏控件为表单添加参数

## 快速导航

<TOC />

## 前言

在一些前端动态网页的表单里,并不是所有的参数都需要填写或选择,有些需要隐藏起来,然后跟着小单一起提交传递给后台,发送到服务器端

那这个是怎么实现的呢

## 示例展示

<jingdiantexiao-hideInputParams />


## 原生js

对于不显示在界面上的元素,但在提交表单时,却又要携带上去,是有这种需求的,比如用户修改某件商品信息时,商品的`id`,商品的`id`并不是用户想要关心的

但是这个`id`又是数据库表格的标识,往往是一个必传的字段,因此使用隐藏变量把这个参数隐藏起来,可以很好的解决这个问题

具体如下代码所示

```js
// 展示表单参数的函数
function showParams() {
    // 设置萤囊变量的值,这个值也可以通过标签的value指定
    document.forms[0].myhidden.value = "我是隐藏的参数";
    var str = "表单将提交的参数包括"   // 定义字符拼接变量
    // 拼接年份参数
    str += '\n年份:'+document.forms[0].myyear.value;
    // 拼接姓名参数
    str += '\n姓名:'+document.forms[0].myname.value;
    // 拼接隐藏参数
    str += '\n隐藏变量'+document.forms[0].myhidden.value;
    alert(str);   // 展示字符拼接的值
}

```
如下是`html`
```html
<input type="hidden" name="myhidden" />
年份:
<select name="myyear">
   <option value="2022">2022</option>
   <option value="2021">2021</option>
   <option value="2022">2020</option>
   <option value="2021">2019</option>
</select>
<br />
姓名: <input type="text" name="myname" />
<input type="button" value="提交" onclick="showParams()" />
```

## Vue版本实现

如下是`vue`方式实现,其实都是类似的
```html
<template>
  <div class="wrap">
    <el-form :inline="true" :model="formParams">
      <el-form-item>
        <el-input v-model="formParams.id" type="hidden"  ></el-input>
      </el-form-item>  
      <el-form-item label="姓名">
        <el-input v-model="formParams.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="年份">
        <el-select v-model="formParams.year" placeholder="请选择年份" @change="handleSelect">
          <el-option v-for="item in formParams.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "hideInputParams",
  data() {
    return { 
      formParams: {
        id: '我是隐藏携带的参数',
        name: "",
        year: "",
        options: [
            {
                label: '2022',
                value: '2022'
            },
            {
                label: '2021',
                value: '2021'
            },
            {
                label: '2020',
                value: '2020'
            },
            {
                label: '2019',
                value: '2019'
            },
            {
                label: '2018',
                value: '2018'
            },
            {
                label: '2017',
                value: '2017'
            },
            {
                label: '2016',
                value: '2016'
            }
        ]
      },
    };
    
  },
  methods: {
    handleSelect(val) {
        console.log(val);
        this.formParams.year = val;
    },
    onSubmit() {
      console.log("submit!");
      const {id,name,year} = this.formParams;
      if(name && year) {
        this.$alert(`id:${id},名字:${name},年份:${year}`, '提交的数据', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }else {
        this.$message.error('名字或年份不能为空');
      }
     
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}
</style>
```

## 总结

一些需要隐藏的表单参数控制,有时是需要传给后端的,传统的方法,隐藏表单的数据,然后在提交时,传递给后端,是一个比较常见的操作


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />