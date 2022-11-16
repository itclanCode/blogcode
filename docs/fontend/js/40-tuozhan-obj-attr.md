---
title: Js如何为对象拓展一个动态属性
autoGroup-5: JS特效
---

## Js 如何为对象拓展一个动态属性

## 快速导航

<TOC />

## 前言

`js`对象的属性时可以随意拓展的，那么是否可以利用网页中输入的数据来动态指定属性的名字和值呢

当然是可以的,如何为一对象动态的添加一属性

## 具体示例

<template>
  <div class="tuozhan-obj-wrap">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="属性名">
                <el-input v-model="form.attrname" clearable></el-input>
            </el-form-item>
            <el-form-item label="属性值">
                <el-input v-model="form.attrval" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleTuoZhan">拓展</el-button>
                 <el-button type="success" :disabled="showStatus" @click="handleShow">展示其值</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          form: {
            attrname: '',
            attrval: ''
          },
          obj: {}, // 目标对象
          showStatus: true
        }
    },
    mounted() {
      
    },
    methods: {
      // 拓展  
      handleTuoZhan() {
        const {attrname,attrval} = this.form;
        if(attrname && attrval) {
            let propName = this.form.attrname;
            let propVal = this.form.attrval;
            this.obj[propName] = propVal;
            this.$message({
                message: '对象数据拓展成功',
                type: 'success'
             });
             this.showStatus = false;
        }else {
            this.$message.error("输入框的值不能为空")
        }
        
      },

      handleShow() {
            for(let key in this.obj) {
                 this.$message({
                    message: `属性名是${key},属性值是:${this.obj[key]}`,
                    type: 'success'
                 });
            }
      }  
    },
  };
</script>
<style>
  .tuozhan-obj-wrap {
    text-align: center;
    margin-top: 10px;
  }
</style>


## 原生js实现

具体代码如下所示
::: details 点击即可查看
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>为对象拓展一个动态属性</title>
  </head>
  <body>
       属性名:<input value="" type="text" id="text" /><br /><br />
       属性值:<input value="" type="text2" /><br /><br />
       <input type="button" value="拓展" onclick="handleTuoZhan()" />
       <input value="展示其值" type="button" onclick="handleShow()" />
       <script>
           var obj = {}; // 目标对象
           function handleTuoZhan() {
             // 得到用户需要指定的属性的名字
             var propName = document.getElementById("text").value;
             // 得到具体的值
             var propVal = document.getElementById("text2").value;
             obj[propName] = propVal;  // 修改属性的值
           }

           function handleShow() {
             // 获取属性名
             var propName = document.getElementById("text").value;
             alert(obj[propName]);
           }
       </script>
  </body>
</html>
      
```
:::

## Vue版本实现

如下是`vue`版本实现

```html
<template>
  <div class="tuozhan-obj-wrap">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="属性名">
                <el-input v-model="form.attrname"></el-input>
            </el-form-item>
            <el-form-item label="属性值">
                <el-input v-model="form.attrval"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleTuoZhan">拓展</el-button>
                 <el-button type="success" @click="handleShow">展示其值</el-button>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          form: {
            attrname: '',
            attrval: ''
          },
          obj: {} // 目标对象
        }
    },
    mounted() {
      
    },
    methods: {
      // 拓展  
      handleTuoZhan() {
        let propName = this.form.attrname;
        let propVal = this.form.attrval;
        obj[propName] = propVal;
      },

      handleShow() {
        this.$message({
          message: `我是新得到的值${this.obj}`,
          type: 'success'
        });
      }  
    },
  };
</script>
<style>
  .tuozhan-obj-wrap {
    text-align: center;
  }
</style>
```

## 分析

对象的属性可以通过`.`或中括号`[]`来访问,但如果要动态的指定属性,显然`.`是不行的,所以,本示例中使用`[]`来指定这个属性和它的值

因为`[]`中可以是一个动态的字符变量

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />