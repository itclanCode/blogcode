---
title: js如何实现克隆元素
autoGroup-5: JS特效
---

## js如何实现克隆元素

## 快速导航

<TOC />

## 前言

在`js`当中,创建一个元素需要使用`createElement()`函数,那么克隆一个元素又没有比较直接的方法呢

克隆一个元素使用的是`cloneNode()`

## 具体示例

<jingdiantexiao-cloneNodeElem />

## 原生js实现

在原生`js`当中克隆元素使用的是`cloneNode(参数)`,参数为`true`标识克隆元素及其所有子元素,如果为`false`则标识只克隆元素但不包含它的子节点,不过在绝大多数情况下,我们都是希望复制所有的子节点,所以,一般都是使用`true`参数
```js
// 克隆元素
function cloneImg() {
    // 获取元素DOM
    var myImg = document.getElementById("myImg");
    // 克隆出新的元素
    var newImg = myImg.cloneNode(true);
    // 使用appendChild()函数挂载到指定的DOM中
    document.querySelector('.myContent').appendChild(newIMg);
}
```
如下是`Html`模板代码
```html
<p class="myContent">
    <input type="button" value="克隆" onclick="cloneImg()" /><br />
    <!--定义图片要克隆的元素--->
    <img id="myImg" src="xxxx.jpg" width="100" height="200" />
</p>
```

## 分析

克隆一个元素使用的是`cloneNode()`方法,想要复制哪个`DOM`对象,那么直接在这个对象下面直接使用这个`cloneNode()`方法就好

## Vue示例实现

下面的代码是上面演示的示例完整源码

```html
<template>
    <div class="wrap">
        <div>
            <el-button type="primary" @click="handleClone">克隆</el-button>
        </div>
        <div class="img-content">
              <div class="myImg">
                <img class="img" src="https://img1.baidu.com/it/u=829829583,2565413602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=661" width="150" height="100" alt=""></img>
                <img class="closeimg" @click="handleDelete" src="https://img0.baidu.com/it/u=3387898836,1597995708&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666026000&t=e8de3885ef1563b4f8806bc4fcc3507b"  width="25" height="25" alt=""> 
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cloneNodeElem',
        data() {
            return {
                handleClone() {
                    let myImg = document.querySelector(".myImg");
                    if(myImg) {
                        // 克隆出新的元素
                        var newImg = myImg.cloneNode(true);
                        // 克隆节点,只会克隆元素，但新的节点不会将事件也复制进来,所以针对新添加的元素需要添加事件函数
                        // 标准浏览器是不复制事件的，防止循环引用无法释放内存。 IE使用attachEvent添加的事件可以复制，直接dom.onclick也无法复制。 重新给克隆的对象添加事件来解决
                        newImg.children[1].addEventListener('click',(event) => {
                            console.log(event);
                            let myImg = event.currentTarget.parentElement;
                            let imgContent =  myImg.parentElement;
                            imgContent.removeChild(myImg);
                        })
                        // 使用appendChild()函数进行挂载
                       document.querySelector(".img-content").appendChild(newImg);
                    } else {
                       alert('元素节点不存在,无法克隆新元素,请刷新页面,然后对原有的元素进行克隆');
                       location.reload()
                    }
                    
                },

                handleDelete(elem){
                    console.log(elem);
                    // 通过事件对象,cuurentTarget目标元素,parentElement找到父级元素,此时找到的是myImg元素
                    let myImg = elem.currentTarget.parentElement;
                    console.log(myImg);
                    // 在次通过parentElement找到muImg的父级元素,也就是imgContent
                    let imgContent =  myImg.parentElement;
                    console.log(imgContent)
                    // 通过removeChild()方法,删除对应的子元素
                    imgContent.removeChild(myImg);  
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}
.img-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.img-content .myImg {
    position:relative;
}

.img-content .myImg .img  {
    margin-left: 10px;
    margin-top: 10px;
}

.closeimg {
    position:absolute;
    right: 5px;
    top: 17px;
    cursor:pointer;
}
</style>
```

## 注意事项

使用`cloneNode()`复制元素节点,只会复制元素,并不会将原有元素绑定的事件也一并复制过来,所以在复制原有元素的节点后,需要对新的元素

指定的目标元素绑定事件,不然的话,新创建的元素是没有任何事件绑定,是不会触发的,只有原始的元素绑定的事件才会有效

另外需要注意的是,在`vue`当中获取子元素的父节点,跟原生`js`的获取父节点`parentNode`有点不一样

它使用的是`事件对象参数.currentTarget.parentElement`这种方式获取子元素的父级节点的

其他的,与原生`js`删除一个节点,使用`removeChild()`都没有什么区别

上面的示例代码中,在克隆元素前做了一个条件判断,判断有没有子元素存在,因为当没有子元素存在时,对于一个页面中不存在的元素,是没办法实现克隆的

实现克隆的基础,是原DOM对象元素必须是存在页面中的,才可以实现克隆

上面的示例代码只是为了一个演示这个`cloneNode()`API的使用,在原生`js`和在`Vue`当中如何使用,以及如何删除一个节点

在实际开发中,如果使用的是`Vue`框架,并不会像项目那样,去操作`DOM`,一般都是把数据存放到一个数组对象当中,结合复制的接口,然后操作数组对象,去克隆数据的

光在前台实现静态的数据克隆的复制,也没有啥意义,实际开发中,克隆复制,是要拷贝到数据库当中去的,所以实现这个克隆操作,是需要后台提供具体的接口支持的

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />