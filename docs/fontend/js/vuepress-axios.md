---
title: VuePress网站如何使用axios请求第三方接口
---

## VuePress网站如何使用axios请求第三方接口

## 快速导航

<TOC />

## 前言

`VuePress`是一个纯静态网站生成器,也就是它是无后端,纯前端的,那想要在`VuePress`中,发送`ajax`请求,请求一些第三方接口,有时想要达到自己一些目的

在`VuePress`中，使用`axios`请求第三方接口，需要先安装`axios`，然后引入，最后使用

## 实例效果

<business-vuepressAxios />

## 本文包括

* `VuePress`中安装和使用`axios`,直接使用与挂载在根实例下使用
* 解决跨域的问题,`VuePress`中使用`axios`请求第三方接口时,会出现跨域问题
* 使用`axios`请求第三方接口时,如何携带参数,完成请求


## 安装axios

```js
npm install axios@0.21.1 -S
```
::: tip 注意事项
如果使用`axios`报错,则尝试降低`axios`版本
:::

## 组件内使用axios

在单文件见组件中引用`axios`,然后使用`axios.get()`与`axios.post()`发送`get`请求或`post`请求
```html
<template>
    <div>
        <el-button type="primary" @click="handleBtnGetJoke" :disabled="isDisabled">请求数据</el-button>
        <el-button type="danger" @click="handleBtnClearData" v-if="aDatas.length > 0?true:false">清空数据</el-button>
        <ul v-if="aDatas.length > 0?true:false">
            <li class="joke-list" v-for="item in aDatas"
                                  :key="item.hashId">{{ item.content }}
            </li>
            <div class="loading" v-if="aDatas.length > 0?true:false"> 
                <el-button size="mini"  type="primary" @click="handleBtnLoading" >加载</el-button>
            </div>
        </ul> 
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'vuepressAxios',
        data() {
            return {
               aDatas: [],
               isDisabled: false,
               page: 1,
               pagesize: 5,
            }
        },
        methods: {
            async handleBtnGetJoke() {
                this.isDisabled = true;
                const params = {
                    key: "aa1b7ad08be2a09a4e0d2d46897e2dc8",
                    page: this.page,
                    pagesize: this.pagesize,
                }
                // const response = await axios.get('/api/joke/content/text.php',{params});
                const response = await this.$axios.get('/api/joke/content/text.php',{params});
                console.log(response);
                if(response.status === 200) {
                    this.isDisabled = false;
                    this.$message.success('数据请求成功');
                    const { data } = response;
                    this.aDatas = this.aDatas.concat(data.result.data);
                }else {
                    this.$message.error('数据请求失败');
                }
               
            },

            handleBtnClearData() {
                this.aDatas = [];
            },

            handleBtnLoading() {
                this.page++;
                this.handleBtnGetJoke();
            }
        }
    }
</script>

<style lang="scss" scoped>
.joke-list {
    list-style-type: decimal;
    list-style-position: outside;
    padding: 5px 0;
    border-bottom: dashed 1px #ccc;
}

.loading {
    margin: 0 auto;
    text-align:center;
}
</style>
```
## 解决跨域问题

如果你在组件中`ajax`发起请求时`axios.get('http://v.juhe.cn/joke/content/text.php',{params:{key:'xxx'}})`

此时会报错`Access to XMLHttpRequest at 'http://v.juhe.cn/joke/content/text.php?key=xxx' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.`

进入`.vuepress/config.js`,配置文件中

```js
module.exports = {
  title: 'itclanCoder', // 博客标题
  description: 'itclanCoder,itclanCoder的技术博客,itclan', // 博客描述,利于SEO
  keywords: 'itclanCoder的技术博客, itclanCoder', // 关键字
  // ...其他省略
  devServer: {    // 添加这个devServer配置  
    proxy: {     
         '/api': {       
             target: 'http://v.juhe.cn',     // 这里填写具体的真实服务器接口地止   
             changeOrigin: true,            // 允许跨域  
             pathRewrite: {          
                '^/api': ''       
             }      
          }, 
    }  
  }
};
```
当在`Vue`组件中访问`/api`开头时,前端会自动的代理到`target`目标地止上,这样就完成了转向代理,解决了开发环境下跨域的问题的

网上有的说,在根目录下创建`vue.config.js`把`devServer`配置配置到`vue.config.js`中,我试了,发现不起作用,不知道为什么,有知道的朋友可以告诉我一下,谢谢

如果想要全局进行使用`axios`,把它挂载到`Vue`根实例下,则可以全局引入,如果不这样,那在组件当中,在使用`axios`之前,每次都需要按需引入的

为了解决这个问题,可以,一次性注入的,将`axios`对象挂载在`Vue`的`prototype`下的,这样,在实例组件下都是有`axios`对象的


## 全局引入axios

在`docs/.vuepress/enhanceApp.js`中引入

```js
import axios from 'axios'
export default ({ Vue }) => {
    Vue.prototype.$axios = axios;
}
```
那在组件中,使用时,只需要`this.$axios.get()`,或`this.$axios.post()`,就可以了的,无需单文件组件前每次都引入`axios`了的

其实,引入`Jquery`也是同样类似的,凡是想要挂载在`Vue`组件根实例下公有属性和方法,都可以这么做

<footer-FooterLink :isShareLink="false" :isDaShang="true" />




