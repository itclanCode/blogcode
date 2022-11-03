---
title: JS如何利用浏览器的cookie保存用户名
autoGroup-5: JS特效
---

## JS 如何利用浏览器的 cookie 保存用户名

## 快速导航

<TOC />

## 前言

浏览器的`cookie`可以用来存储一些少量的网站信息,比如登录的用户名,用于提高用户体验非常有帮助

有的一些网站在第一次登录后,在指定的时间范围内容,下次在打开网站,再次登录时,不用每次都重新输入用户名的

## 具体示例

<template>
  <div class="wrap">
    <div class="content">
          <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用戶名">
                    <el-input v-model="form.name" class="input" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" class="input" v-model="form.pass" clearable></el-input>
                </el-form-item>
                <el-form-item label="记住用户名">
                    <el-radio-group v-model="form.date" @change="handleCheck">
                        <el-radio :label="3" border>保存3天</el-radio>
                        <el-radio :label="7" border>保存7天</el-radio>
                        <el-radio :label="10" border>保存10天</el-radio>
                        <el-radio :label="30" border>保存30天</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin">登录</el-button>
                </el-form-item>
          </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
           form: {
                name: '',
                pass: '',
                date: 7,
            }
        }
    },
    mounted() {
      this.getCookie('username');
      console.log(this.form.name);
    },
    methods: {
      handleCheck(val) {
        console.log(val);
        this.form.date = val;  // 多少天以后失效,这里默认设置的是7天,需要转化成时间戳秒
      },
      
      // 设置cookie,包括key名,value,值,过期时间expiredays
      setCookie(user,val,expiredays) {
        // 把用户名保存进cookie里面
        document.cookie = `${user}=${val}`
        var exdate = new Date(); // 当前时间
        exdate.setTime(exdate.getDate() + expiredays*24*3600*1000);  // 设置时间,多少天失效
        // 设置为新的值
        document.cookie += `;'expires='${exdate.toGMTString()}`;
         console.log(document.cookie)   
     },
     
     getCookie() {
         // 提取当前的cookie
         let c = document.cookie;
         // 提取key为username的cookie值
         if(c != '' && c.indexOf('username') > -1) {
            var arr = c.split(';');  // 以分号,将cookie进行拆分存到一个arr数组中
            for(var i = 0;i<arr.length;i++) { // 遍历数组arr
               var key_val = arr[i].split("=");  // 获取key和val
               if(key_val[0] == 'username') { // 设置cookie的值到输入框
                    this.form.name = key_val[1];
               }
            }

         }
      },

      onLogin() {
         const user = 'username'
        const {name,date} = this.form;
        if(name) {
            this.setCookie(user,name,date);
             this.$message({
                message: `用户名的cookie已经设置成功,刷新页面时仍然是显示的,保存${date}天时间`,
                type: 'success',
                duration: '5000'
            });
            console.log('submit!');     
        }else {
            this.$message.error('用户名不能为空')
        }
        
      }
    },
  };
</script>
<style>
  .wrap {
    text-align: left;
  }

  .content {
    margin: 10px auto;
    display: flex;
    justify-content: center;
  }
</style>


## 具体示例代码如下所示

```html
<template>
  <div class="wrap">
    <div class="content">
          <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用戶名">
                    <el-input v-model="form.name" class="input" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" class="input" v-model="form.pass" clearable></el-input>
                </el-form-item>
                <el-form-item label="记住用户名">
                    <el-radio-group v-model="form.date" @change="handleCheck">
                        <el-radio :label="3" border>保存3天</el-radio>
                        <el-radio :label="7" border>保存7天</el-radio>
                        <el-radio :label="10" border>保存10天</el-radio>
                        <el-radio :label="30" border>保存30天</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onLogin">登录</el-button>
                </el-form-item>
          </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
           form: {
                name: '',
                pass: '',
                date: 7,
            }
        }
    },
    mounted() {
      this.getCookie('username');
      console.log(this.form.name);
    },
    methods: {
      handleCheck(val) {
        console.log(val);
        this.form.date = val;  // 多少天以后失效,这里默认设置的是7天,需要转化成时间戳秒
      },
      
      // 设置cookie,包括key名,value,值,过期时间expiredays
      setCookie(user,val,expiredays) {
        // 把用户名保存进cookie里面
        document.cookie = `${user}=${val}`
        var exdate = new Date(); // 当前时间
        exdate.setTime(exdate.getDate() + expiredays*24*3600*1000);  // 设置时间,多少天失效
        // 设置为新的值
        document.cookie += `;'expires='${exdate.toGMTString()}`; // 根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果
         console.log(document.cookie)   
     },
     
     getCookie() {
         // 提取当前的cookie
         let c = document.cookie;
         // 提取key为username的cookie值
         if(c != '' && c.indexOf('username') > -1) {
            var arr = c.split(';');  // 以分号,将cookie进行拆分存到一个arr数组中
            for(var i = 0;i<arr.length;i++) { // 遍历数组arr
               var key_val = arr[i].split("=");  // 获取key和val
               if(key_val[0] == 'username') { // 设置cookie的值到输入框
                    this.form.name = key_val[1];
               }
            }

         }
      },

      onLogin() {
        const user = 'username'
        const {name,date} = this.form;
        if(name) {
             this.setCookie(user,name,date);
             this.$message({
                message: `用户名的cookie已经设置成功,刷新页面时仍然是显示的,保存${date}天时间`,
                type: 'success',
                duration: '5000'
            });
            console.log('submit!');     
        }else {
            this.$message.error('用户名不能为空')
        }
        
      }
    },
  };
</script>
<style>
  .wrap {
    text-align: left;
  }

  .content {
    margin: 10px auto;
    display: flex;
    justify-content: center;
  }
</style>

```

以上本示例中的源码,其中核心代码`设置cookie`如下所示
```js
// 如果是在原生js里,需要写function,上面的是vue的代码,省略了function 的
function setCookie(user,val,expiredays) {
        // 把用户名保存进cookie里面
        document.cookie = `${user}=${val}`
        var exdate = new Date(); // 当前时间
        exdate.setTime(exdate.getDate() + expiredays*24*3600*1000);  // 设置时间,多少天失效
        // 设置为新的值
        document.cookie += `;'expires='${exdate.toGMTString()}`; // 根据格林威治时间 (GMT) 把 Date 对象转换为字符串，并返回结果
     },
```
设置`cookie`主要需要有`cookie`名,它是键值对的,还需要一个设置一个过期时间

使用`document.cookie`可以读取`cookie`,也可以重新设置`cookie`

而获取`cookie`,需要将从`cookie`中拿到指定的`cookie`,需要通过`split`,先拆,然后在获取指定的`cookie`值,重新在设置值的

具体代码如下所示
```js
 function getCookie() {
         // 提取当前的cookie
         let c = document.cookie;
         // 提取key为username的cookie值
         if(c != '' && c.indexOf('username') > -1) {
            var arr = c.split(';');  // 以分号,将cookie进行拆分存到一个arr数组中
            for(var i = 0;i<arr.length;i++) { // 遍历数组arr
               var key_val = arr[i].split("=");  // 获取key和val
               if(key_val[0] == 'username') { // 设置cookie的值到输入框
                    this.form.name = key_val[1]; // 这里就是在重新赋值,将cookie获取到的val进行赋值
               }
            }

         }
      },
```

## 总结

`cookie`它是浏览器`document`下的属性,是一种机制,只是提供了一个接口给`js`脚本进行使用,通过添加`cookie`以及`expires`达到保存多少天的效果

`cookie`的用途比较多,可以与服务器端进行交互,`cookie`的值是会随着表单的提交发送到服务器的,所以它可以作为一些特殊的字段来使用的

比如:服务端的`session`就需要依赖`cookie`

<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />



