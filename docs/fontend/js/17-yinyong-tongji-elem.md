---
title: js如何引用同级元素
autoGroup-5: JS特效
---

## js如何引用同级元素

## 快速导航

<TOC />

## 具体效果

如下效果,点击按钮时,把按钮自身相对应的值,显示到底部

<jingdiantexiao-tongjiElem />


## 具体描述

在网页中,同级(兄弟)元素,指的是拥有相同的直接父级元素的元素,并且往往指的是同类的元素,同类元素在实际开发中遇到的比较多

比如:列表`li`,并列的按钮等,当需要做一些特殊的效果时,可以对其他同级的元素进行一些操作,满足特定的网页要求

比如:隔行填充颜色等

## 原生方法实现

以下是通过原生js实现,点击按钮时,获取按钮的值
```js
// 获取同级按钮元素的value
function getLevelBtnVal(btn) {
    var p = btn.parentNode;    // 通过点击按钮获取到它的父级节点
    var children = p.childNodes;  // 通过childNodes可以得到父节点的所有子节点
    
    // 遍历子节点
    for(var i = 0;i<children.length;i++) {
        // 判断不是当前节点,但却是同类节点的节点
        if(children[i] != btn && children[i].nodeType == btn.nodeType) {
            alert(children[i].value); // 弹出提示对方的value值
        }
    }
}
```
以下是`html`模板代码
```html
<p>
    <!---按钮组-->
    <input type="button" value="JavaScipt" onclick="getLevelBtnVal(this)" />
    <input type="button" value="HTML" onclick="getLevelBtnVal(this)">
</p>
```

## 具体分析

上面的两个`input`就是同级元素,同级元素拥有相同的父级元素都是`p`,那么就可以得到除自身以外的的同级元素,如果还需要排除同一类别的话,那么可以使用节点的`nodeType`属性来加以区别

## Vue版本实现

在`Vue`里面,就不用类似原生`js`的，不断的想办法,在寻找`DOM`节点,然后操作`DOM`,在`Vue`里面是直接操作的数据

如上面示例的按钮组合示例代码如下所示
```html
<template>
    <div class="wrap">
        <el-radio-group v-model="skillVal" @change="handleRadio">
            <el-radio-button  v-for="(item,index) in lists" :key="index" :label="item">{{item}}</el-radio-button>
       </el-radio-group>
       <div class="content">
          {{content}}
       </div>
    </div>
</template>

<script>
    export default {
        name: "tongjiElem",
        data() {
            return {
                skillVal: 'JavaScript',
                lists: ["JavaScript","HTML","CSS","Vue","React","Angular"],
                content: "JavaScript"
            }
        },

        methods: {
            handleRadio(data) {
                this.content = data;
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    margin: 20px 0;
}

.content {
    padding: 20px 0 0 0;
}
</style>
```

从上面可以看出,使用`Vue`实现类似同样的效果,就几行代码,相比原生`js`实现是比较简单的,但是原生`js`的操作依旧还是要知道的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />