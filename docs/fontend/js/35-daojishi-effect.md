---
title: JS如何实现倒计时效果
autoGroup-5: JS特效
---

## JS如何实现倒计时效果

## 快速导航

<TOC />

## 前言

在一些重大的消费节日,或特殊节日,比如:双十一,奥运会,圣诞节,元旦等,很多电商网站都会有倒计时的习惯

团购拼抢等促销活动,本示例演示一个简易的倒计时的效果

## 示例展示

<template>
  <div class="wrap">
      <div>
         <el-date-picker
            v-model="timeValue"
            type="date"
            placeholder="请选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp"
            clearable
            @change="handleDatePicker"
            :picker-options="pickerOptions"
        >
         </el-date-picker>
      </div>
      <div class="timer" v-if="isTimeTxt">
          {{timeText}}
      </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          isTimeTxt: false,
          timeValue: '',
          timeText: '',
          pickerOptions: {
            disabledDate(time) {
            // 禁用当前以前的时间不能选
            return time.getTime() < Date.now() - 3600 * 1000 * 24;
            },
         },
        }
    },

    watch: {
        timeValue: {
            handler(value) {
                if(value) {
                   this.isTimeTxt = true;
                 }else {
                   this.isTimeTxt = false;
                 }
            },
            immediate: true,
        }
    },

    mounted() {  
      this.timerInit();
    },
    methods: {
      handleDatePicker(val) {
        this.timeValue = val;
      },
      // 倒计时
      timerInit() {
        setInterval(() => {
            let nowTime = new Date();  // 得到当前时间
            let endTime = this.timeValue;
            // 得到时间间隔,结束时间-当前时间
            let durationTime = endTime-nowTime.getTime();
            this.timeText = `距离该天还剩${this.formatDateTime(durationTime)}`

        },1000)
      },
      // 得到时间格式,得到天,小时,分钟,秒,时间格式化
      formatDateTime(time){
           time /= 1000;   // 除去毫秒的尾数
           let days = time / (24*60*60);  // 得到天数
           let hours = time % (24*60*60) /(60*60); // 得到小时
           let min = time % (24*60*60) % (60*60) /60; // 得到分钟
           let sec = time % (24*60*60) % (60*60) % 60; // 得到秒

           if(days > 0) {
             days = Math.floor(days)+'天';
           }
           if(hours > 0) {
              hours = Math.floor(hours)+'时';
           }
           if(min > 0) {
             min = Math.floor(min)+'分';
           }

          return  `${days}${hours}${min}${Math.floor(sec)}秒`;

      }
    }
  };
</script>
<style>
  .wrap {
    text-align: center;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
  }

  .timer {
    margin-top: 10px;
  }
</style>

## 原生js

具体的代码如下所示
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>计算离元旦还有多长时间</title>
  </head>
  <body>
      <input type="button" value="开始进入倒计时" onclick="timeInit()" />
      <p id="text"></p>
      <script>
          // 开始倒计时函数
          function timeInit() {
            setInterval(function() {
              var now = new Date(); // 获取当前时间
              // 得到下一个特定的时间,比如元旦
              var end = new Date(now.getYear()+1+1900,0,1);
              // 得到距离元旦时间戳的毫秒数
              var time = end.getTime() - now.getTime();
              var str = getTimeTxt(time); // 拼接字符
              // 填充内容
              var text = document.getElementById('text');
              text.innerHTML = '距离明年元旦还剩'+str
            },1000)
          }

          function getTimeTxt(time) {
            time /= 1000;  // 除去毫秒的尾数
            var days = time / (24*60*60);  // 得到天数
            var hours=  time % (24*60*60)/(60*60); // 得到小时
            var min = time % (24*60*60) % (60*60)/60; // 得到分钟数
            var sec = time % (24*60*60) % (60*60)%60; // 得到秒数
            var str = ''; 

            if(days > 0) {
              str += Math.floor(days)+'天'; // 取整
            }
            if(hours > 0) {
              str += Math.floor(hours)+'时'; // 取整
            }
            if(min > 0) {
              str += Math.floor(min)+'分';
            }

            str += Math.floor(sec)+'秒';
            return str;
          }

      </script>
  </body>
</html>
      
```


## Vue版本实现所示

```html
<template>
  <div class="wrap">
      <div>
         <el-date-picker
            v-model="timeValue"
            type="date"
            placeholder="请选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="timestamp"
            clearable
            @change="handleDatePicker"
            :picker-options="pickerOptions"
        >
         </el-date-picker>
      </div>
      <div class="timer" v-if="isTimeTxt">
          {{timeText}}
      </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          isTimeTxt: false,
          timeValue: '',
          timeText: '',
          pickerOptions: {     // 这里主要是小于当前的时间,不能选,禁用
            disabledDate(time) {
            // 禁用当前以前的时间不能选
            return time.getTime() < Date.now() - 3600 * 1000 * 24;
            },
         },
        }
    },

    watch: {
        // 监听时间
        timeValue: {
            handler(value) {
                if(value) {
                   this.isTimeTxt = true;
                 }else {
                   this.isTimeTxt = false;
                 }
            },
            immediate: true,
        }
    },

    mounted() {  
      this.timerInit();
    },
    methods: {
      handleDatePicker(val) {
        this.timeValue = val;
      },
      // 倒计时
      timerInit() {
        setInterval(() => {
            let nowTime = new Date();  // 得到当前时间
            let endTime = this.timeValue;
            // 得到时间间隔,结束时间-当前时间
            let durationTime = endTime-nowTime.getTime();
            this.timeText = `距离该天还剩${this.formatDateTime(durationTime)}`

        },1000)
      },
      // 得到时间格式,得到天,小时,分钟,秒,时间格式化
      formatDateTime(time){
           time /= 1000;   // 除去毫秒的尾数
           let days = time / (24*60*60);  // 得到天数
           let hours = time % (24*60*60) /(60*60); // 得到小时
           let min = time % (24*60*60) % (60*60) /60; // 得到分钟
           let sec = time % (24*60*60) % (60*60) % 60; // 得到秒

           if(days > 0) {
             days = Math.floor(days)+'天';
           }
           if(hours > 0) {
              hours = Math.floor(hours)+'时';
           }
           if(min > 0) {
             min = Math.floor(min)+'分';
           }

          return  `${days}${hours}${min}${Math.floor(sec)}秒`;

      }
    }
  };
</script>
<style>
  .wrap {
    text-align: center;
    margin-top: 20px;
  }

  .timer {
    margin-top: 10px;
  }
</style>
```

其中核心代码,时间格式化如下所示,将时间转化为天,小时,分钟,秒
```js
function formatDateTime(time){
    time /= 1000;   // 除去毫秒的尾数
    let days = time / (24*60*60);  // 得到天数
    let hours = time % (24*60*60) /(60*60); // 得到小时
    let min = time % (24*60*60) % (60*60) /60; // 得到分钟
    let sec = time % (24*60*60) % (60*60) % 60; // 得到秒

    if(days > 0) {
        days = Math.floor(days)+'天';
    }
    if(hours > 0) {
        hours = Math.floor(hours)+'时';
    }
    if(min > 0) {
        min = Math.floor(min)+'分';
    }
    return  `${days}${hours}${min}${Math.floor(sec)}秒`;
}
```
定时器函数,里面主要是,得到距离时间的毫秒数,通过时间戳的相减获得
```js
setInterval(() => {
    let nowTime = new Date();  // 得到当前时间
    let endTime = this.timeValue;
    // 得到时间间隔,结束时间-当前时间
    let durationTime = endTime-nowTime.getTime();
    this.timeText = `距离该天还剩${this.formatDateTime(durationTime)}`
},1000)
```

## 总结

以上使用`vue`版本实现当中,添加了一个监听器,当没有选中时间时,隐藏底下的文本显示的,同时控制当前日期之间的时间是不能选,为禁用状态

其他的逻辑,与原生`js`实现都是一样的,`Vue`里面是操作数据,而原生`js`里面是操作`DOM`


<footer-FooterLink :isShareLink="false" :isDaShang="true" />
<footer-FeedBack />