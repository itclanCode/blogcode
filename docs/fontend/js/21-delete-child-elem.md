---
title: Js如何删除所有子元素以及当前元素
autoGroup-5: JS特效
---

## Js如何删除所有子元素以及当前元素

## 快速导航

<TOC />

## 示例展示

<jingdiantexiao-deleteChildElem />



## 具体描述

在原生`js`当中,`html`的内容元素总是以嵌套的关系存在于网页中,因此,可以通过遍历树的方法访问网页里的每一个元素,当然也是可以删除指定的子元素的

## 原生js代码

```js
// 删除元素的函数
function deleteChilds() {
   var ul = document.getElementsByTagName("ul")[0];  // 获取父级DOM
   // 判断是否包含子元素
   if(ul.hasChildNodes()) {
     var len = ul.childNodes.length;  // 子元素的个数
     for(var i = 0;i<len;i++) {       // 遍历
        ul.removeChild(ul.childNodes[0]);  // 从第一个元素开始删除
     }

   }
}
```
如下是`html`代码
```html
<ul>
    <li>coder.itclan.cn</li>
    <li>itclan.cn</li>
    <li>aikelaidev.cn</li>
    <li>pay.aikelaidev.cn</li>
</ul>
```
删除父级元素的所有节点,我们常规性的思维,很容易写这样的代码,如下的代码是无法删除干净的
```js
function deleteChilds() {
   var ul = document.getElementsByTagName("ul")[0];  // 获取父级DOM
   
   var len = ul.childNodes.length;  // 子元素的个数
   for(var i = 0;i<len;i++) {       // 遍历
        console.log(ul.childNodes[i].nodeName)
        ul.removeChild(ul.childNodes[i]);  // 从第一个元素开始删除
   }
}
```
当你把索引为0的子节点删除后那么很自然的原来索引为1节点此时它的索引变成0了，而这时变量`i`已经变成1了，程序继续走时就会删除原先索引为`２`的现在为`1`的节点，这样程序运行的结果就是只删除了一半的子节点

在遍历时因为删除了子节点，`ul.childNodes.length`值已经减小，影响了遍历结果

我们应该从后面往前删除
```js
function deleteChilds() {
   var ul = document.getElementsByTagName("ul")[0];  // 获取父级DOM
   
   var len = ul.childNodes.length;  // 子元素的个数
   for(var i = len-1;i>=0;i--) {       // 从后往前
        ul.removeChild(ul.childNodes[i]);  // 从第一个元素开始删除
   }
}
```

## Vue版本实现

如下是上面展示示例的代码

```html
<template>
    <div class="wrap">
         <div>
               <ul id="ul">
                  <li  v-for="(item,index) in lists" :key="index"><span>{{item}}</span><el-button  type="danger" @click="handleDelteItem(index)" size="mini">删除</el-button></li>
               </ul> 
         </div>
         <div class="deletAllBtn">
            <el-button type="primary" @click="handleDelete">删除所有元素</el-button>
         </div>   
    </div>
</template>

<script>
    export default {
        name: 'deleteChildELem',
        data() {
            return {
                lists: ["coder.itclan.cn",'itclan.cn','tv.itclan.cn','short.itclan.cn','aikelaidev.cn']
            }
        },

        methods: {
            handleDelete() {
                // this.lists = [];  // 如果是使用Vue编程思维,删除所有子元素,直接操作数组为空,就删除所有子元素了的
                // 这里用原生js实现,主要是演示操作子节点的方式,在vue项目里,操作DOM的话,那使用vue就没有任何意义价值了的
                var ul = document.getElementById('ul');// 获取父级元素的DOM
                // 判断是否包含子元素
                if(ul.hasChildNodes()) {
                    var len = ul.childNodes.length;  // 子元素的个数
                    for(var i = 0;i<len;i++) {
                        ul.removeChild(ul.childNodes[0]);  // 从第一个元素开始删除
                    }
                }

                // 也可以等价如下这样,逆向删除节点
                /**
                 *
                 *  for(var i = ul.childNodes.length-1;i>=0;i--) {
                        ul.removeChild(ul.childNodes[i])
                    }
                 * 
                 */

            },

            handleDelteItem(index) {
                // 如果是使用vue的话,那么直接操作数组的方法就可以了的,一行代码就可以可以解决
                this.lists.splice(index,1);
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align:center;
}

span{
    display:inline-block;
    width: 200px;
}

ul>li {
  margin-bottom: 5px;
  border-bottom: 1px dashed #ccc;
}

.deletAllBtn {
    margin-top: 20px;
}
</style>
```
删除数组的所有子元素,在`Vue`当中直接清空数组就可以了也就是`this.lists = []`就可以,而删除当前元素则使用`this.lists.splice(index,1);`,splice方法就可以

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />