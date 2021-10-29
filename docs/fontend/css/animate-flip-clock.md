---
title: 时钟翻转
autoGroup-3: css3动效
---

## 快速导航

## 时钟翻转

<TOC />

## 实现效果

<animate-flipClock />

## Vue版本实现

:::: tabs type:border-card
::: tab FlipClock组件 lazy
```javascript
/*
 * 翻牌数字
 * @author： itclanCoder
 */
<template>
  <div class="FlipClock">
    <Flipper ref="flipperHour1" />
    <Flipper ref="flipperHour2" />
    <em>:</em>
    <Flipper ref="flipperMinute1" />
    <Flipper ref="flipperMinute2" />
    <em>:</em>
    <Flipper ref="flipperSecond1" />
    <Flipper ref="flipperSecond2" />
  </div>
</template>

<script>
import Flipper from './flipper'

export default {
  name: 'flipClock',
  data() {
    return {
      timer: null,
      flipObjs: []
    }
  },
  components: {
    Flipper
  },
  methods: {
    // 初始化数字
    init() {
      let now = new Date()
      let nowTimeStr = this.formatDate(new Date(now.getTime()), 'hhiiss')
       for (let i = 0; i < this.flipObjs.length; i++) {
         this.flipObjs[i].setFront(nowTimeStr[i])
       }
    },
    // 开始计时
    run() {
      this.timer = setInterval(() => {
        // 获取当前时间
        let now = new Date()
        let nowTimeStr = this.formatDate(new Date(now.getTime() - 1000), 'hhiiss')
        let nextTimeStr = this.formatDate(now, 'hhiiss')
        for (let i = 0; i < this.flipObjs.length; i++) {
          if (nowTimeStr[i] === nextTimeStr[i]) {
            continue
          }
          this.flipObjs[i].flipDown(
            nowTimeStr[i],
            nextTimeStr[i]
          )
        }
      }, 1000)
    },
    // 正则格式化日期
    formatDate(date, dateFormat) {
      /* 单独格式化年份，根据y的字符数量输出年份
     * 例如：yyyy => 2019
            yy => 19
            y => 9
     */
      if (/(y+)/.test(dateFormat)) {
        dateFormat = dateFormat.replace(
          RegExp.$1,
          (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        )
      }
      // 格式化月、日、时、分、秒
      let o = {
        'm+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'i+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(dateFormat)) {
          // 取出对应的值
          let str = o[k] + ''
          /* 根据设置的格式，输出对应的字符
           * 例如: 早上8时，hh => 08，h => 8
           * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
           * 例如: 下午15时，hh => 15, h => 15
           */
          dateFormat = dateFormat.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : this.padLeftZero(str)
          )
        }
      }
      return dateFormat
    },
    // 日期时间补零
    padLeftZero(str) {
      return ('00' + str).substr(str.length)
    }
  },
  mounted() {
    this.flipObjs = [
      this.$refs.flipperHour1,
      this.$refs.flipperHour2,
      this.$refs.flipperMinute1,
      this.$refs.flipperMinute2,
      this.$refs.flipperSecond1,
      this.$refs.flipperSecond2
    ]
    this.init()
    this.run()
  }
}
</script>

<style>
.FlipClock {
    text-align: center;
}
.FlipClock .M-Flipper {
    margin: 0 3px;
}
.FlipClock em {
    display: inline-block;
    line-height: 102px;
    font-size: 66px;
    font-style: normal;
    vertical-align: top;
}
</style>
```

:::
::: tab flipper组件 lazy
```javascript 
/*
 * 翻牌数字
 * @author： itclanCoder
 */
<template>
  <div class="M-Flipper" :class="[flipType, {'go': isFlipping}]">
    <div class="digital front" :class="_textClass(frontTextFromData)"></div>
    <div class="digital back" :class="_textClass(backTextFromData)"></div>
  </div>
</template>

<script>
export default {
  name: 'FlipClock',
  data() {
    return {
      isFlipping: false,
      flipType: 'down',
      frontTextFromData: 0,
      backTextFromData: 1
    }
  },
  props: {
    // front paper text
    // 前牌文字
    frontText: {
      type: [Number, String],
      default: 0
    },
    // back paper text
    // 后牌文字
    backText: {
      type: [Number, String],
      default: 1
    },
    // flipping duration, please be consistent with the CSS animation-duration value.
    // 翻牌动画时间，与CSS中设置的animation-duration保持一致
    duration: {
      type: Number,
      default: 600
    }
  },
  methods: {
    _textClass(number) {
      return 'number' + number
    },
    _flip(type, front, back) {
      // 如果处于翻转中，则不执行
      if (this.isFlipping) {
        return false
      }
      this.frontTextFromData = front
      this.backTextFromData = back
      // 根据传递过来的type设置翻转方向
      this.flipType = type
      // 设置翻转状态为true
      this.isFlipping = true
      setTimeout(() => {
        // 设置翻转状态为false
        this.isFlipping = false
        this.frontTextFromData = back
      }, this.duration)
    },
    // 下翻牌
    flipDown(front, back) {
      this._flip('down', front, back)
    },
    // 上翻牌
    flipUp(front, back) {
      this._flip('up', front, back)
    },
    // 设置前牌文字
    setFront(text) {
        this.frontTextFromData = text
    },
    // 设置后牌文字
    setBack(text) {
        this.backTextFromData = text
    }
  },
  created() {
      this.frontTextFromData = this.frontText
      this.backTextFromData = this.backText
  }
}
</script>

<style>
.M-Flipper {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 100px;
  line-height: 100px;
  border: solid 1px #000;
  border-radius: 10px;
  background: #fff;
  font-size: 66px;
  color: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-family: 'HYLeMiaoTiW';
}

@media screen and (min-width: 375px) and (max-width: 768px){
   .M-Flipper {
       width: 35px;
      font-size: 40px;
   }
}

@media screen and (max-width: 320px){
   .M-Flipper {
       width: 25px;
      font-size: 40px;
   }
}

@media screen and (min-width: 320px) and (max-width: 375px){
   .M-Flipper {
      width: 27px;
      font-size: 40px;
   }
}

.M-Flipper .digital:before,
.M-Flipper .digital:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  background: #000;
  overflow: hidden;
  box-sizing: border-box;
}

.M-Flipper .digital:before {
  top: 0;
  bottom: 50%;
  border-radius: 10px 10px 0 0;
  border-bottom: solid 1px #666;
}

.M-Flipper .digital:after {
  top: 50%;
  bottom: 0;
  border-radius: 0 0 10px 10px;
  line-height: 0;
}

/*向下翻*/
.M-Flipper.down .front:before {
  z-index: 3;
}

.M-Flipper.down .back:after {
  z-index: 2;
  transform-origin: 50% 0%;
  transform: perspective(160px) rotateX(180deg);
}

.M-Flipper.down .front:after,
.M-Flipper.down .back:before {
  z-index: 1;
}

.M-Flipper.down.go .front:before {
  transform-origin: 50% 100%;
  animation: frontFlipDown 0.6s ease-in-out both;
  box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
}

.M-Flipper.down.go .back:after {
  animation: backFlipDown 0.6s ease-in-out both;
}

/*向上翻*/
.M-Flipper.up .front:after {
  z-index: 3;
}

.M-Flipper.up .back:before {
  z-index: 2;
  transform-origin: 50% 100%;
  transform: perspective(160px) rotateX(-180deg);
}

.M-Flipper.up .front:before,
.M-Flipper.up .back:after {
  z-index: 1;
}

.M-Flipper.up.go .front:after {
  transform-origin: 50% 0;
  animation: frontFlipUp 0.6s ease-in-out both;
  box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
  backface-visibility: hidden;
}

.M-Flipper.up.go .back:before {
  animation: backFlipUp 0.6s ease-in-out both;
}

@keyframes frontFlipDown {
  0% {
    transform: perspective(160px) rotateX(0deg);
  }

  100% {
    transform: perspective(160px) rotateX(-180deg);
  }
}

@keyframes backFlipDown {
  0% {
    transform: perspective(160px) rotateX(180deg);
  }

  100% {
    transform: perspective(160px) rotateX(0deg);
  }
}

@keyframes frontFlipUp {
  0% {
    transform: perspective(160px) rotateX(0deg);
  }

  100% {
    transform: perspective(160px) rotateX(180deg);
  }
}

@keyframes backFlipUp {
  0% {
    transform: perspective(160px) rotateX(-180deg);
  }

  100% {
    transform: perspective(160px) rotateX(0deg);
  }
}

.M-Flipper .number0:before,
.M-Flipper .number0:after {
  content: '0';
}

.M-Flipper .number1:before,
.M-Flipper .number1:after {
  content: '1';
}

.M-Flipper .number2:before,
.M-Flipper .number2:after {
  content: '2';
}

.M-Flipper .number3:before,
.M-Flipper .number3:after {
  content: '3';
}

.M-Flipper .number4:before,
.M-Flipper .number4:after {
  content: '4';
}

.M-Flipper .number5:before,
.M-Flipper .number5:after {
  content: '5';
}

.M-Flipper .number6:before,
.M-Flipper .number6:after {
  content: '6';
}

.M-Flipper .number7:before,
.M-Flipper .number7:after {
  content: '7';
}

.M-Flipper .number8:before,
.M-Flipper .number8:after {
  content: '8';
}

.M-Flipper .number9:before,
.M-Flipper .number9:after {
  content: '9';
}
</style>
```

:::
::::

## React版本实现

:::: tabs type:border-card
::: tab Filpper.js lazy
```javascript
/*
 * 翻牌数字
 * @author： itclanCoder-React
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './flipper.css'

class Flipper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFlipping: false,
            flipType: 'down',
            frontTextFromData: 0,
            backTextFromData: 1
        }
    }

    render() {
        const { isFlipping, flipType, frontTextFromData, backTextFromData } = this.state
        return (
            <div className={['M-Flipper', flipType, isFlipping?'go':null].join(' ')}>
                <div className={'digital front ' + this._textClass(frontTextFromData)}></div>
                <div className={'digital back ' + this._textClass(backTextFromData)}></div>
            </div>
        )
    }

    // componentDidMount() {
    //     this.props.onRef(this)
    // }
    test() {
        console.log('test')   
    }
    _textClass(number) {
        return 'number' + number
    }
    _flip(type, front, back) {
        // 如果处于翻转中，则不执行
        if (this.isFlipping) {
            return false
        }
        this.setState({
            frontTextFromData: front,
            backTextFromData: back,
            // 根据传递过来的type设置翻转方向
            flipType: type,
            // 设置翻转状态为true
            isFlipping: true
        })
        setTimeout(() => {
            this.setState({
                frontTextFromData: back,
                isFlipping: false
            })
        }, this.props.duration)
    }
    // 下翻牌
    flipDown(front, back) {
        this._flip('down', front, back)
    }
    // 上翻牌
    flipUp(front, back) {
        this._flip('up', front, back)
    }
    // 设置前牌文字
    setFront(text) {
        this.setState({
            frontTextFromData: text
        })
    }
    // 设置后牌文字
    setBack(text) {
        this.setState({
            backTextFromData: text
        })
    }
}

// props类型校验
Flipper.propTypes = {
    frontText: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    backText: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    duration: PropTypes.number
}

// props默认值
Flipper.defaultProps = {
    // front paper text
    // 前牌文字
    frontText: 0,
    // back paper text
    // 后牌文字
    backText: 1,
    // flipping duration, please be consistent with the CSS animation-duration value.
    // 翻牌动画时间，与CSS中设置的animation-duration保持一致
    duration: 600
}

export default Flipper
```
:::
::: tab FilpClock.js lazy
```javascript
import React, { Component } from 'react'
import Flipper from './Flipper'
import './flipClock.css'

class FlipClock extends Component {
    constructor(props) {
        super(props)
        this.timer = null
        this.flipObjs = []
    }

    render() {
        return (
            <div className="FlipClock">
                <Flipper ref="flipperHour1" />
                <Flipper ref="flipperHour2" />
                <em>:</em>
                <Flipper ref="flipperMinute1" />
                <Flipper ref="flipperMinute2" />
                <em>:</em>
                <Flipper ref="flipperSecond1" />
                <Flipper ref="flipperSecond2" />
            </div>
        )
    }

    componentDidMount() {
        this.flipObjs = [
            this.refs.flipperHour1,
            this.refs.flipperHour2,
            this.refs.flipperMinute1,
            this.refs.flipperMinute2,
            this.refs.flipperSecond1,
            this.refs.flipperSecond2
        ]
        this.init()
        this.run()
    }

    // 初始化数字
    init() {
        let now = new Date()
        let nowTimeStr = this.formatDate(new Date(now.getTime()), 'hhiiss')
        for (let i = 0; i < this.flipObjs.length; i++) {
            this.flipObjs[i].setFront(nowTimeStr[i])
        }
    }
    // 开始计时
    run() {
        this.timer = setInterval(() => {
            // 获取当前时间
            let now = new Date()
            let nowTimeStr = this.formatDate(new Date(now.getTime() - 1000), 'hhiiss')
            let nextTimeStr = this.formatDate(now, 'hhiiss')
            for (let i = 0; i < this.flipObjs.length; i++) {
                if (nowTimeStr[i] === nextTimeStr[i]) {
                    continue
                }
                this.flipObjs[i].flipDown(
                    nowTimeStr[i],
                    nextTimeStr[i]
                )
            }
        }, 1000)
    }
    // 正则格式化日期
    formatDate(date, dateFormat) {
        /* 单独格式化年份，根据y的字符数量输出年份
       * 例如：yyyy => 2019
              yy => 19
              y => 9
       */
        if (/(y+)/.test(dateFormat)) {
            dateFormat = dateFormat.replace(
                RegExp.$1,
                (date.getFullYear() + '').substr(4 - RegExp.$1.length)
            )
        }
        // 格式化月、日、时、分、秒
        let o = {
            'm+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'i+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(dateFormat)) {
                // 取出对应的值
                let str = o[k] + ''
                /* 根据设置的格式，输出对应的字符
                 * 例如: 早上8时，hh => 08，h => 8
                 * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
                 * 例如: 下午15时，hh => 15, h => 15
                 */
                dateFormat = dateFormat.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? str : this.padLeftZero(str)
                )
            }
        }
        return dateFormat
    }
    // 日期时间补零
    padLeftZero(str) {
        return ('00' + str).substr(str.length)
    }
}
export default FlipClock
```
:::
::: tab flipClock.css lazy
``` css
.FlipClock {
    text-align: center;
}

.FlipClock .M-Flipper {
    margin: 0 3px;
}
  
.FlipClock em {
    display: inline-block;
    line-height: 102px;
    font-size: 66px;
    font-style: normal;
    vertical-align: top;
}
```
  
:::
::: tab flipper.css lazy
```css
.M-Flipper {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 100px;
    line-height: 100px;
    border: solid 1px #000;
    border-radius: 10px;
    background: #fff;
    font-size: 66px;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
    text-align: center;
    font-family: 'Helvetica Neue';
  }
  
  .M-Flipper .digital:before,
  .M-Flipper .digital:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    background: #000;
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .M-Flipper .digital:before {
    top: 0;
    bottom: 50%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 1px #666;
  }
  
  .M-Flipper .digital:after {
    top: 50%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    line-height: 0;
  }
  
  /*向下翻*/
  .M-Flipper.down .front:before {
    z-index: 3;
  }
  
  .M-Flipper.down .back:after {
    z-index: 2;
    transform-origin: 50% 0%;
    transform: perspective(160px) rotateX(180deg);
  }
  
  .M-Flipper.down .front:after,
  .M-Flipper.down .back:before {
    z-index: 1;
  }
  
  .M-Flipper.down.go .front:before {
    transform-origin: 50% 100%;
    animation: frontFlipDown 0.6s ease-in-out both;
    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
    backface-visibility: hidden;
  }
  
  .M-Flipper.down.go .back:after {
    animation: backFlipDown 0.6s ease-in-out both;
  }
  
  /*向上翻*/
  .M-Flipper.up .front:after {
    z-index: 3;
  }
  
  .M-Flipper.up .back:before {
    z-index: 2;
    transform-origin: 50% 100%;
    transform: perspective(160px) rotateX(-180deg);
  }
  
  .M-Flipper.up .front:before,
  .M-Flipper.up .back:after {
    z-index: 1;
  }
  
  .M-Flipper.up.go .front:after {
    transform-origin: 50% 0;
    animation: frontFlipUp 0.6s ease-in-out both;
    box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
    backface-visibility: hidden;
  }
  
  .M-Flipper.up.go .back:before {
    animation: backFlipUp 0.6s ease-in-out both;
  }
  
  @keyframes frontFlipDown {
    0% {
      transform: perspective(160px) rotateX(0deg);
    }
  
    100% {
      transform: perspective(160px) rotateX(-180deg);
    }
  }
  
  @keyframes backFlipDown {
    0% {
      transform: perspective(160px) rotateX(180deg);
    }
  
    100% {
      transform: perspective(160px) rotateX(0deg);
    }
  }
  
  @keyframes frontFlipUp {
    0% {
      transform: perspective(160px) rotateX(0deg);
    }
  
    100% {
      transform: perspective(160px) rotateX(180deg);
    }
  }
  
  @keyframes backFlipUp {
    0% {
      transform: perspective(160px) rotateX(-180deg);
    }
  
    100% {
      transform: perspective(160px) rotateX(0deg);
    }
  }
  
  .M-Flipper .number0:before,
  .M-Flipper .number0:after {
    content: '0';
  }
  
  .M-Flipper .number1:before,
  .M-Flipper .number1:after {
    content: '1';
  }
  
  .M-Flipper .number2:before,
  .M-Flipper .number2:after {
    content: '2';
  }
  
  .M-Flipper .number3:before,
  .M-Flipper .number3:after {
    content: '3';
  }
  
  .M-Flipper .number4:before,
  .M-Flipper .number4:after {
    content: '4';
  }
  
  .M-Flipper .number5:before,
  .M-Flipper .number5:after {
    content: '5';
  }
  
  .M-Flipper .number6:before,
  .M-Flipper .number6:after {
    content: '6';
  }
  
  .M-Flipper .number7:before,
  .M-Flipper .number7:after {
    content: '7';
  }
  
  .M-Flipper .number8:before,
  .M-Flipper .number8:after {
    content: '8';
  }
  
  .M-Flipper .number9:before,
  .M-Flipper .number9:after {
    content: '9';
  }
```
:::
::::


## 原生javaScript实现

::: details 原生javaScript实现
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Flipper</title>
</head>

<body>
    <div class="single-demo">
        <div class="flip down" id="flip">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
        <div class="btn-con">
            <button id="btn1">向下翻+1</button>
            <button id="btn2">向上翻-1</button>
        </div>
    </div>
    <div class="clock" id="clock">
        <div class="flip down">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
        <div class="flip down">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
        <em>:</em>
        <div class="flip down">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
        <div class="flip down">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
        <em>:</em>
        <div class="flip down">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
        <div class="flip down">
            <div class="digital front number0"></div>
            <div class="digital back number1"></div>
        </div>
    </div>
</body>
<script>
var flip = document.getElementById('flip')
var backNode = document.querySelector('.back')
var frontNode = document.querySelector('.front')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')
btn1.addEventListener('click', function() {
    flipDown();
})
btn2.addEventListener('click', function() {
    flipUp();
})
// 当前数字
var count = 0
// 是否正在翻转（防止翻转未结束就进行下一次翻转）
var isFlipping = false

// 向下翻转+1
function flipDown() {
    // 如果处于翻转中，则不执行
    if (isFlipping) {
        return false
    }
    // 设置前牌的文字
    frontNode.setAttribute('class', 'digital front number' + count)
    // 计算后牌文字（越界判断）
    var nextCount = count >= 9 ? 0 : (count + 1)
    // 设置后牌的文字
    backNode.setAttribute('class', 'digital back number' + nextCount)
    // 添加go，执行翻转动画
    flip.setAttribute('class', 'flip down go')
    // 当翻转态设置为true
    isFlipping = true
    // 翻转结束后，恢复状态
    setTimeout(function() {
        // 去掉go
        flip.setAttribute('class', 'flip down')
        // 当翻转态设置为false
        isFlipping = false
        // 设置前牌文字为+1后的数字
        frontNode.setAttribute('class', 'digital front number' + nextCount)
        // 更新当前文字
        count = nextCount
    }, 1000)
}
// 向上翻转-1（同理，注释略）
function flipUp() {
    if (isFlipping) {
        return false
    }
    frontNode.setAttribute('class', 'digital front number' + count)
    var nextCount = count <= 0 ? 9 : (count - 1)
    backNode.setAttribute('class', 'digital back number' + nextCount)
    flip.setAttribute('class', 'flip up go')
    isFlipping = true
    setTimeout(function() {
        flip.setAttribute('class', 'flip up')
        isFlipping = false
        frontNode.setAttribute('class', 'digital front number' + nextCount)
        count = nextCount
    }, 1000)
}


/* 时钟代码 */
// 时钟翻牌
function Flipper(config) {
    // 默认配置
    this.config = {
        // 时钟模块的节点
        node: null,
        // 初始前牌文字
        frontText: 'number0',
        // 初始后牌文字
        backText: 'number1',
        // 翻转动画时间（毫秒，与翻转动画CSS 设置的animation-duration时间要一致）
        duration: 600
    }
    // 节点的原本class，与html对应，方便后面添加/删除新的class
    this.nodeClass = {
        flip: 'flip',
        front: 'digital front',
        back: 'digital back'
    }
    // 覆盖默认配置
    Object.assign(this.config, config)
    // 定位前后两个牌的DOM节点
    this.frontNode = this.config.node.querySelector('.front')
    this.backNode = this.config.node.querySelector('.back')
    // 是否处于翻牌动画过程中（防止动画未完成就进入下一次翻牌）
    this.isFlipping = false
    // 初始化
    this._init()
}
Flipper.prototype = {
    constructor: Flipper,
    // 初始化
    _init: function() {
        // 设置初始牌面字符
        this._setFront(this.config.frontText)
        this._setBack(this.config.backText)
    },
    // 设置前牌文字
    _setFront: function(className) {
        this.frontNode.setAttribute('class', this.nodeClass.front + ' ' + className)
    },
    // 设置后牌文字
    _setBack: function(className) {
        this.backNode.setAttribute('class', this.nodeClass.back + ' ' + className)
    },
    _flip: function(type, front, back) {
        // 如果处于翻转中，则不执行
        if (this.isFlipping) {
            return false
        }
        // 设置翻转状态为true
        this.isFlipping = true
        // 设置前牌文字
        this._setFront(front)
        // 设置后牌文字
        this._setBack(back)
        // 根据传递过来的type设置翻转方向
        let flipClass = this.nodeClass.flip;
        if (type === 'down') {
            flipClass += ' down'
        } else {
            flipClass += ' up'
        }
        // 添加翻转方向和执行动画的class，执行翻转动画
        this.config.node.setAttribute('class', flipClass + ' go')
        // 根据设置的动画时间，在动画结束后，还原class并更新前牌文字
        setTimeout(() => {
            // 还原class
            this.config.node.setAttribute('class', flipClass)
            // 设置翻转状态为false
            this.isFlipping = false
            // 将前牌文字设置为当前新的数字，后牌因为被前牌挡住了，就不用设置了。
            this._setFront(back)
        }, this.config.duration)
    },
    // 下翻牌
    flipDown: function(front, back) {
        this._flip('down', front, back)
    },
    // 上翻牌
    flipUp: function(front, back) {
        this._flip('up', front, back)
    }
}

// 定位时钟模块
let clock = document.getElementById('clock')
// 定位6个翻板
let flips = clock.querySelectorAll('.flip')
// 获取当前时间
let now = new Date()
// 格式化当前时间，例如现在是20:30:10，则输出"203010"字符串
let nowTimeStr = formatDate(now, 'hhiiss')
// 格式化下一秒的时间
let nextTimeStr = formatDate(new Date(now.getTime() + 1000), 'hhiiss')
// 定义牌板数组，用来存储6个Flipper翻板对象
let flipObjs = []
for (let i = 0; i < flips.length; i++) {
    // 创建6个Flipper实例，并初始化
    flipObjs.push(new Flipper({
        // 每个flipper实例按数组顺序与翻板DOM的顺序一一对应
        node: flips[i],
        // 按数组顺序取时间字符串对应位置的数字
        frontText: 'number' + nowTimeStr[i],
        backText: 'number' + nextTimeStr[i]
    }))
}


// 开始计时
setInterval(function() {
    // 获取当前时间
    let now = new Date()
    let nowTimeStr = formatDate(new Date(now.getTime() - 1000), 'hhiiss')
    let nextTimeStr = formatDate(now, 'hhiiss')
    for (let i = 0; i < flipObjs.length; i++) {
        if (nowTimeStr[i] === nextTimeStr[i]) {
            continue
        }
        flipObjs[i].flipDown('number' + nowTimeStr[i], 'number' + nextTimeStr[i])
    }
}, 1000)

//正则格式化日期
function formatDate(date, dateFormat) {
    /* 单独格式化年份，根据y的字符数量输出年份
     * 例如：yyyy => 2019
            yy => 19
            y => 9
     */
    if (/(y+)/.test(dateFormat)) {
        dateFormat = dateFormat.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    // 格式化月、日、时、分、秒
    let o = {
        'm+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'i+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(dateFormat)) {
            // 取出对应的值
            let str = o[k] + '';
            /* 根据设置的格式，输出对应的字符
             * 例如: 早上8时，hh => 08，h => 8
             * 但是，当数字>=10时，无论格式为一位还是多位，不做截取，这是与年份格式化不一致的地方
             * 例如: 下午15时，hh => 15, h => 15
             */
            dateFormat = dateFormat.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return dateFormat;
};

//日期时间补零
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

</script>
<style>
.single-demo {
    margin: 50px auto;
    padding: 30px;
    width: 600px;
    text-align: center;
    border: solid 1px #999;
}


.flip {
    display: inline-block;
    position: relative;
    width: 60px;
    height: 100px;
    line-height: 100px;
    border: solid 1px #000;
    border-radius: 10px;
    background: #fff;
    font-size: 66px;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, .5);
    text-align: center;
    font-family: "Helvetica Neue"
}

.flip .digital:before,
.flip .digital:after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    background: #000;
    overflow: hidden;
    box-sizing: border-box;
}

.flip .digital:before {
    top: 0;
    bottom: 50%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 1px #666;
}

.flip .digital:after {
    top: 50%;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    line-height: 0;
}

/*向下翻*/
.flip.down .front:before {
    z-index: 3;
}

.flip.down .back:after {
    z-index: 2;
    transform-origin: 50% 0%;
    transform: perspective(160px) rotateX(180deg);
}

.flip.down .front:after,
.flip.down .back:before {
    z-index: 1;
}

.flip.down.go .front:before {
    transform-origin: 50% 100%;
    animation: frontFlipDown 0.6s ease-in-out both;
    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
    backface-visibility: hidden;
}

.flip.down.go .back:after {
    animation: backFlipDown 0.6s ease-in-out both;
}

/*向上翻*/
.flip.up .front:after {
    z-index: 3;
}

.flip.up .back:before {
    z-index: 2;
    transform-origin: 50% 100%;
    transform: perspective(160px) rotateX(-180deg);
}

.flip.up .front:before,
.flip.up .back:after {
    z-index: 1;
}

.flip.up.go .front:after {
    transform-origin: 50% 0;
    animation: frontFlipUp 0.6s ease-in-out both;
    box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
    backface-visibility: hidden;
}

.flip.up.go .back:before {
    animation: backFlipUp 0.6s ease-in-out both;
}

@keyframes frontFlipDown {
    0% {
        transform: perspective(160px) rotateX(0deg);
    }

    100% {
        transform: perspective(160px) rotateX(-180deg);
    }
}

@keyframes backFlipDown {
    0% {
        transform: perspective(160px) rotateX(180deg);
    }

    100% {
        transform: perspective(160px) rotateX(0deg);
    }
}


@keyframes frontFlipUp {
    0% {
        transform: perspective(160px) rotateX(0deg);
    }

    100% {
        transform: perspective(160px) rotateX(180deg);
    }
}

@keyframes backFlipUp {
    0% {
        transform: perspective(160px) rotateX(-180deg);
    }

    100% {
        transform: perspective(160px) rotateX(0deg);
    }
}

.flip .number0:before,
.flip .number0:after {
    content: "0";
}

.flip .number1:before,
.flip .number1:after {
    content: "1";
}

.flip .number2:before,
.flip .number2:after {
    content: "2";
}

.flip .number3:before,
.flip .number3:after {
    content: "3";
}

.flip .number4:before,
.flip .number4:after {
    content: "4";
}

.flip .number5:before,
.flip .number5:after {
    content: "5";
}

.flip .number6:before,
.flip .number6:after {
    content: "6";
}

.flip .number7:before,
.flip .number7:after {
    content: "7";
}

.flip .number8:before,
.flip .number8:after {
    content: "8";
}

.flip .number9:before,
.flip .number9:after {
    content: "9";
}

.clock {
    text-align: center;
    margin-bottom: 200px;
}

.clock em {
    display: inline-block;
    line-height: 102px;
    font-size: 66px;
    font-style: normal;
    vertical-align: top;
}
</style>

</html>

```

:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />