---
title: Es6中的拓展运算符参数解构在实际项目当中应用
---

## Es6中的拓展运算符参数解构在实际项目当中应用

## 快速导航

<TOC />

## 前言

扩展操作符 `…` 是ES6中引入的，将可迭代对象展开到其单独的元素中,常见的应用场景有:拷贝数组对象,合并数组,参数传递,数组去重,字符串转字符数组,解构变量等

单纯的学习某个技术知识点,很容易的,但是能在实际项目中运用进去,那就不简单了的

单纯的学习某个语言的语法,都相类似,但是多种技术融合起来,那就复杂了的

## 应用场景

* 解构参数,传递参数

* 向后端接口传递参数,拼接参数传递给后端


<business-resetParams />

```html
<template>
    <div>
       <div class="movie-item">
          <el-select
            class="move-item"
            v-model="videoForms.ztid"
            placeholder="视频专题"
            clearable
            size="small"
          >
                <el-option
                v-for="(item, index) in videoZhuanTiOptions"
                :key="index"
                :label="item.label"
                :value="item.ztid"
                >
                </el-option>
            </el-select>
          </div>
           <div class="movie-select">
                <el-select
                    class="move-item"
                    v-model="videoForms.zd"
                    placeholder="视频名称"
                    clearable
                    size="small"
                >
                    <el-option
                    v-for="(item, index) in videoSelectOptions"
                    :key="index"
                    :label="item.label"
                    :value="item.zd"
                    >
                    </el-option>
                </el-select>
                <el-input
                    size="small"
                    v-model="videoForms.key"
                    placeholder="请输入关键字"
                 >
           </div>
        <div>
          <el-button type="primary" size="small" @click="handleSearch">搜 索</el-button>
        </div>
    </div>    
</template>
<script>
    export default {
        name: 'resetParams',
        data() {
            return {
                data: [],  // 电影列表数据,初始化
                // 把form表单接口条件相关联的放置到一个对象下面管理,便于接口字段的管理
                page:1,  // 默认第一页
                limit: 20, // 默认返回20条数据
                total: '', // 分页总数据
                videoForms: {
                    ztid: '',  // 视频专题
                    zd: '',    // 视频筛选
                    key:'',  // 视频输入框关键字
                    year: '', // 年份
                    area: '',  // 地区
                    lang: '', // 语言
                    pay: '1',  // 1,免费,2收费,后端接口定义,默认免费
                    reco: '1',// 1,不轮播,2轮播
                    app: '', // app端是否展示
                    order: '', // 排序方式
                    kstime:'', // 开始时间
                    jstime: '' // 结束时间
                },
                videoZhuanTiOptions: [
                    {
                    label: "精品电影",
                    ztid: "6",          // ztid: '1',  视频专题,1代表精品国漫
                    },
                    {
                      label: "好莱坞电影",
                      ztid: "5",
                    },
                    {
                      label: "盗墓影视",
                      ztid: "4",
                    },
                    {
                      label: "鬼片大王",
                      ztid: "3",
                    },
                     {
                       label: "星爷电影",
                       ztid: "2",
                    },
                    {
                      label: "精品国漫",
                      ztid: "1",
                    },
                ],

                videoSelectOptions: [
                    {
                    label: "视频ID",
                    zd: "id",         //  zd: '', 视频筛选
                    },
                    {
                      label: "视频导演",
                      zd: "director",
                    },
                    {
                      label: "视频主演",
                      zd: "actor",
                    },
                ],
            }
        },

        methods: {
            // 获取影视列表接口数据
            async getVideoList() {
                try {    // 这里使用了try..cartch
                    let params = {   // 向后端请求的实参数
                       page:this.page,
                       limit: this.limit,
                       ...this.videoForms,
                    }
                    // Ajax请求接口，第一个参数是接口地止,第二个就是具体的参数,这里使用的是axios发送get请求数据
                    let res = await this.$axios.get(Interface.getVideoList,{ params });
                    if(res.code == 0) { // 说明成功
                       const { data }  = res.data;
                       this.data = data;  // 表格需要渲染的数据
                       this.total = res.data.count;
                    }
    
                } catch (err) {
                    // 如果请求接口报错,则扔出一个异常
                    console.log(err);
                }
                
            },
            // 搜索,查询影视列表接口
            handleSearch() {
                this.getVideoList();  // 调用请求影视列表查询接口
            }  
        }
    }
</script>
```

对象解构如下所示
```js
var videoForms = {
    ztid: '',
    zd: '',
    key:'',  
    area: '',  
    lang: '', 
    pay: '1',  
    reco: '1',
    app: '',
    order: '', 
    kstime:'', 
    jstime: ''
}

var params = {
    page:1,
    limit: 20,
    ...videoForms
}
console.log(params);
```
在上面的示例代码码中,发送`Axos`请求使用的是`axios`库,在请求接口时,使用了`try..catch`,如果接口响应有错误,那么将错误返回给开发者

在有的项目里,做得比较好的,会统一进行处理的,进行错误的拦截的,对于`get`和`post`可以在进一步封装的

上面没有去过度的封装,对于初学者比较好理解,但是缺点也是显而易见的,就是每次逗得重复写相同的`get`请求或`post`请求

关于需要向后端传递的参数数据,在定义时,往往,把form表单接口条件相关联的放置到一个对象下面管理,这样便于接口字段的管理,添加和删除

普通基本数据类型初始化,尽量写在前面,而对象,数组字段,写在后面

这个不是唯一的,只是个人开发的习惯,因人而已

关于接口的字段参数,对于UI界面的渲染,正常的去开发就可以,前端开发者更多关注的是接口参数,接口具体返回的什么数据

关注`NetWork`面板的`headers`,与`PayLoad`,以及`preview`与`Response`



<footer-FooterLink :isShareLink="false" :isDaShang="true" />

<footer-FeedBack />


