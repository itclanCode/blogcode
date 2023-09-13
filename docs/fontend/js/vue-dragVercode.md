---
title: Vue中拖动验证码实现
---

## Vue中拖动验证码实现

## 快速导航

<TOC />

## 示例效果

<business-loginSlideVerify />

## 示例完整代码

::: details 示例完整代码
```html
<template>
    <div class="login" :style="{backgroundImage:'url('+loginBgImg+')'}">
        <div class="login-container">
          <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
              <div class="title-container">
                <h3 class="title">itclanCoder</h3>
              </div>
              <el-form-item prop="username">
                  <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="用户名"
                    name="username"
                    type="text"
                    auto-complete="off"
                  >
                  <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" />
                  </el-input>
                 
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  placeholder="密码"
                  name="password"
                  auto-complete="off"
                  @keyup.enter.native="handleLogin"
                >
                 <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
                </el-input>
                <span class="show-pwd" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-form-item>
              <el-form-item>
                 <slide-verify 
                    :l="42"
                    :r="10"
                    :w="348"
                    :h="120"
                    slider-text="向右滑动"
                    @success="onSuccess"
                    @fail="onFail"
                  ></slide-verify>
              </el-form-item>
              <el-form-item  style="margin-bottom: 20px;text-align: center">
                   <el-button style="width: 100%" :loading="loading" type="primary" :disabled="loginDisabled"  @click.native.prevent="handleLogin">登录</el-button>
              </el-form-item>  
          </el-form>
        </div>
    </div>
  </template>
  
  <script>
  import Vue from "vue";
  import SlideVerify from 'vue-monoplasty-slide-verify';
  Vue.use(SlideVerify);
  export default {
    name: 'loginSlideVerify',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (value == "admin") {
          this.loginDisabled = false;
          this.typeAccount = "primary";
          callback()
        } else {
          this.typeAccount = "danger";
          this.loginDisabled = true;
          callback(new Error('请输入正确的用户名'))
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码不能为空并不少于6位'))
        }else if(value == "123456"){
          this.loginDisabled = false;
          this.typeAccount = "primary";
          callback()
        } else {
          this.typeAccount = "danger";
          this.loginDisabled = true;
          callback(new Error('请输入正确的密码'))
        }
      }
      return {
        typeAccount: "primary",
        loginBgImg: "https://picsum.photos/1920/1080?random=2",
        loginDisabled: true,
        slideStatus: false,
        elDialogWidth: "30%",
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
    },
  
    mounted() {
      this.isMobile();
      this.onResize();
    },
    methods: {
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid && this.slideStatus) {
              this.loading = true
              this.loginDisabled = false;
              this.$message.success('可成功登录');
              // 登录逻辑,跳转到指定的路由,首页
          } else {
            this.$message.error('请检查用户名或密码正确性以及滑块是否滑到指定位置');
            console.log('error submit!!')
            return false
          }
        })
      },
  
      onSuccess(){
          this.$message({
            message: '您已成功完成滑块拖动',
            type: 'success'
          });
          this.loginDisabled = false;
          this.slideStatus = true;
      },
  
      onFail(){
          this.slideStatus = false;
          this.$message.error('请正确拖动滑块到指定位置');
      },
      
      onResize() {
        this.screenWidth = document.body.clientWidth;
        window.onresize = () => {
          return (() => {
            this.screenWidth = document.body.clientWidth;
            if (this.screenWidth < 768) {
              this.elDialogWidth="78%";
            } else {
              this.elDialogWidth="30%";
            }
          })();
        };
      },
      isMobile() {
        const isMobile = /(phone|pad|pod|iPhone|iPod|ios|IEMobile|Opera Mini|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)
       ? true: false; // true代表是移动端,false代表pc端
        if (isMobile) {
          // 手机端
          this.elDialogWidth="78%";
        } else {
          // PC端
          this.elDialogWidth="30%";
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;
  $title_color:#707070;
  
  /* 修复input 背景不协调 和光标变色 */
  $bg:#283443;
  $cursor: #fff;
  
  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: $cursor;
    }
  }
  
  .login {
    min-height: 100%;
    width: 100%;
    background-color:$bg;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .login-container {
    .login-form {
      width: 400px;
      max-width: 100%;
      padding:25px 25px 5px 25px;
      overflow: hidden;
      background:#fff;
      border-radius: 6px;
      margin: 20px 0 20px 0;
    }
  
    .el-input {
      display: inline-block;
      height: 47px;
  
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
  
        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
  
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #fff;
      border-radius: 5px;
      color: #454545;
      margin-bottom: 20px;
      width: 100%;
      /deep/ .el-form-item__content .slide-verify {
        width:100% !important;
      }
    }
  
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
  
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
  
    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $title_color;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }
  
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
  
  }
  </style>
  
```
:::

## 拖动验证码

<business-vueSlideVerify />

## 拖动验证码使用

终端下安装`vue-monoplasty-slide-verify`插件

```
npm install --save vue-monoplasty-slide-verify
```
当前需要使用的组件进行引用,注册
```js
import Vue from 'vue';
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.use(SlideVerify);

```
在模板中调用
```html
<slide-verify :l="42"
            :r="10"
            :w="310"
            :h="155"
            slider-text="向右滑动"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            ></slide-verify>
<div>{{msg}}</div>

```
在逻辑中加入相对应的逻辑
```js
export default {
        name: 'App',
        data(){
            return {
                msg: '',
            }
        },
        methods: {
            onSuccess(){
                this.msg = 'login success'
            },
            onFail(){
                this.msg = ''
            },
            onRefresh(){
                this.msg = ''
            }
        }
    }

```

## 核心拖动验证源码实现

::: details 核心拖动验证源码slide-verify.vue实现
```html
<template>
  <div
    class="slide-verify"
    :style="{ width: w + 'px' }"
    id="slideVerify"
    onselectstart="return false;"
  >
    <!-- 图片加载遮蔽罩 -->
    <div :class="{ 'slider-verify-loading': loadBlock }"></div>
    <canvas :width="w" :height="h" ref="canvas"></canvas>
    <div v-if="show" @click="refresh" class="slide-verify-refresh-icon"></div>
    <canvas
      :width="w"
      :height="h"
      ref="block"
      class="slide-verify-block"
    ></canvas>
    <!-- container -->
    <div
      class="slide-verify-slider"
      :class="{
        'container-active': containerActive,
        'container-success': containerSuccess,
        'container-fail': containerFail
      }"
    >
      <div class="slide-verify-slider-mask" :style="{ width: sliderMaskWidth }">
        <!-- slider -->
        <div
          @mousedown="sliderDown"
          @touchstart="touchStartEvent"
          @touchmove="handleMoveEvent($event, 'touch')"
          @touchend="handleMoveEndEvent($event, 'touch')"
          class="slide-verify-slider-mask-item"
          :style="{ left: sliderLeft }"
        >
          <div class="slide-verify-slider-mask-item-icon"></div>
        </div>
      </div>
      <span class="slide-verify-slider-text">{{ sliderText }}</span>
    </div>
  </div>
</template>
<script>
const PI = Math.PI;

function sum(x, y) {
  return x + y;
}

function square(x) {
  return x * x;
}
export default {
  name: "SlideVerify",
  props: {
    // block length
    l: {
      type: Number,
      default: 42
    },
    // block radius
    r: {
      type: Number,
      default: 10
    },
    // canvas width
    w: {
      type: Number,
      default: 310
    },
    // canvas height
    h: {
      type: Number,
      default: 155
    },
    sliderText: {
      type: String,
      default: "Slide filled right"
    },
    accuracy: {
      type: Number,
      default: 5 // 若为 -1 则不进行机器判断
    },
    show: {
      type: Boolean,
      default: true
    },
    imgs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      containerActive: false, // container active class
      containerSuccess: false, // container success class
      containerFail: false, // container fail class
      canvasCtx: null,
      blockCtx: null,
      block: null,
      block_x: undefined, // container random position
      block_y: undefined,
      L: this.l + this.r * 2 + 3, // block real length
      img: undefined,
      originX: undefined,
      originY: undefined,
      isMouseDown: false,
      trail: [],
      sliderLeft: 0, // block right offset
      sliderMaskWidth: 0, // mask width,
      success: false, // Bug Fixes 修复了验证成功后还能滑动
      loadBlock: true, // Features 图片加载提示，防止图片没加载完就开始验证
      timestamp: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.initDom();
      this.initImg();
      this.bindEvents();
    },
    initDom() {
      this.block = this.$refs.block;
      this.canvasCtx = this.$refs.canvas.getContext("2d");
      this.blockCtx = this.block.getContext("2d");
    },
    initImg() {
      const img = this.createImg(() => {
        // 图片加载完关闭遮蔽罩
        this.loadBlock = false;
        this.drawBlock();
        this.canvasCtx.drawImage(img, 0, 0, this.w, this.h);
        this.blockCtx.drawImage(img, 0, 0, this.w, this.h);
        let { block_x: x, block_y: y, r, L } = this;
        let _y = y - r * 2 - 1;
        let ImageData = this.blockCtx.getImageData(x, _y, L, L);
        this.block.width = L;
        this.blockCtx.putImageData(ImageData, 0, _y);
      });
      this.img = img;
    },
    drawBlock() {
      this.block_x = this.getRandomNumberByRange(
        this.L + 10,
        this.w - (this.L + 10)
      );
      this.block_y = this.getRandomNumberByRange(
        10 + this.r * 2,
        this.h - (this.L + 10)
      );
      this.draw(this.canvasCtx, this.block_x, this.block_y, "fill");
      this.draw(this.blockCtx, this.block_x, this.block_y, "clip");
    },
    draw(ctx, x, y, operation) {
      let { l, r } = this;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
      ctx.lineTo(x + l, y);
      ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
      ctx.lineTo(x + l, y + l);
      ctx.lineTo(x, y + l);
      ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
      ctx.lineTo(x, y);
      ctx.lineWidth = 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.stroke();
      ctx[operation]();
      // Bug Fixes 修复了火狐和ie显示问题
      ctx.globalCompositeOperation = "destination-over";
    },
    createImg(onload) {
      const img = document.createElement("img");
      img.crossOrigin = "Anonymous";
      img.onload = onload;
      img.onerror = () => {
        img.src = this.getRandomImg();
      };
      img.src = this.getRandomImg();
      return img;
    },
    // 随机生成img src
    getRandomImg() {
      // return require('../assets/img.jpg')
      const len = this.imgs.length;
      return len > 0
        ? this.imgs[this.getRandomNumberByRange(0, len - 1)]
        : // "https://bing.ioliu.cn/v1/rand?w=300&h=150";
          "https://source.unsplash.com/300x150/?book,library";
      // "https://api.dujin.org/pic/fengjing";
    },
    getRandomNumberByRange(start, end) {
      return Math.round(Math.random() * (end - start) + start);
    },
    refresh() {
      this.reset();
      this.$emit("refresh");
    },
    sliderDown(event) {
      if (this.success) return;
      this.originX = event.clientX;
      this.originY = event.clientY;
      this.isMouseDown = true;
      this.timestamp = +new Date();
    },
    touchStartEvent(e) {
      if (this.success) return;
      this.originX = e.changedTouches[0].pageX;
      this.originY = e.changedTouches[0].pageY;
      this.isMouseDown = true;
      this.timestamp = +new Date();
    },
    bindEvents() {
      document.addEventListener("mousemove", this.handleMoveEvent);
      document.addEventListener("mouseup", this.handleMoveEndEvent);
    },
    // 处理函数抽离
    handleMoveEvent: throttle(function(e, type = "mouse") {
      if (!this.isMouseDown) return false;
      const moveX =
        type === "mouse"
          ? e.clientX - this.originX
          : e.changedTouches[0].pageX - this.originX;
      const moveY =
        type === "mouse"
          ? e.clientY - this.originY
          : e.changedTouches[0].pageY - this.originY;
      if (moveX < 0 || moveX + 38 >= this.w) return false;
      this.sliderLeft = moveX + "px";
      let blockLeft = ((this.w - 40 - 20) / (this.w - 40)) * moveX;
      this.block.style.left = blockLeft + "px";

      this.containerActive = true; // add active
      this.sliderMaskWidth = moveX + "px";
      this.trail.push(moveY);
    }),
    handleMoveEndEvent(e, type = "mouse") {
      if (!this.isMouseDown) return false;
      this.isMouseDown = false;
      if (
        (type === "mouse" && e.clientX === this.originX) ||
        (type === "touch" && e.changedTouches[0].pageX === this.originX)
      )
        return false;
      this.containerActive = false; // remove active
      this.timestamp = +new Date() - this.timestamp;

      const { spliced, TuringTest } = this.verify();
      if (spliced) {
        if (this.accuracy === -1) {
          this.containerSuccess = true;
          this.success = true;
          this.$emit("success", this.timestamp);
          return;
        }
        if (TuringTest) {
          // succ
          this.containerSuccess = true;
          this.success = true;
          this.$emit("success", this.timestamp);
        } else {
          this.containerFail = true;
          this.$emit("again");
        }
      } else {
        this.containerFail = true;
        this.$emit("fail");
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
    },
    verify() {
      const arr = this.trail; // drag y move distance
      const average = arr.reduce(sum) / arr.length; // average
      const deviations = arr.map(x => x - average); // deviation array
      const stddev = Math.sqrt(deviations.map(square).reduce(sum) / arr.length); // standard deviation
      const left = parseInt(this.block.style.left);
      const accuracy =
        this.accuracy <= 1 ? 1 : this.accuracy > 10 ? 10 : this.accuracy;
      return {
        spliced: Math.abs(left - this.block_x) <= accuracy,
        TuringTest: average !== stddev // equal => not person operate
      };
    },
    reset() {
      this.success = false;
      this.containerActive = false;
      this.containerSuccess = false;
      this.containerFail = false;
      this.sliderLeft = 0;
      this.block.style.left = 0;
      this.sliderMaskWidth = 0;
      // canvas
      let { w, h } = this;
      this.canvasCtx.clearRect(0, 0, w, h);
      this.blockCtx.clearRect(0, 0, w, h);
      this.block.width = w;

      // generate img
      this.img.src = this.getRandomImg();
      this.$emit("fulfilled");
    }
  },
  destroyed() {
    document.removeEventListener("mousemove", this.handleMoveEvent);
    document.removeEventListener("mouseup", this.handleMoveEndEvent);
  }
};

function throttle(
  fn,
  interval = 50,
  options = { leading: true, trailing: true }
) {
  const { leading, trailing, resultCallback } = options;
  let lastTime = 0;
  let timer = null;

  const _throttle = function(...args) {
    return new Promise((resolve, reject) => {
      const nowTime = new Date().getTime();
      if (!lastTime && !leading) lastTime = nowTime;

      const remainTime = interval - (nowTime - lastTime);
      if (remainTime <= 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }

        const result = fn.apply(this, args);
        if (resultCallback) resultCallback(result);
        resolve(result);
        lastTime = nowTime;
        return;
      }

      if (trailing && !timer) {
        timer = setTimeout(() => {
          timer = null;
          lastTime = !leading ? 0 : new Date().getTime();
          const result = fn.apply(this, args);
          if (resultCallback) resultCallback(result);
          resolve(result);
        }, remainTime);
      }
    });
  };

  _throttle.cancel = function() {
    if (timer) clearTimeout(timer);
    timer = null;
    lastTime = 0;
  };

  return _throttle;
}
</script>
<style scoped>
.slide-verify {
  position: relative;
}

/* 图片加载样式 */
.slider-verify-loading {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 999;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 9;
  }
}

.slide-verify-block {
  position: absolute;
  left: 0;
  top: 0;
}

.slide-verify-refresh-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 34px;
  height: 34px;
  cursor: pointer;
  background: url("../assets/icon_light.png") 0 -437px;
  background-size: 34px 471px;
}

.slide-verify-slider {
  position: relative;
  text-align: center;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin-top: 15px;
  background: #f7f9fa;
  color: #45494c;
  border: 1px solid #e4e7eb;
}

.slide-verify-slider-mask {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  border: 0 solid #1991fa;
  background: #d1e9fe;
}

.slide-verify-slider-mask-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background 0.2s linear;
}

.slide-verify-slider-mask-item:hover {
  background: #1991fa;
}

.slide-verify-slider-mask-item:hover .slide-verify-slider-mask-item-icon {
  background-position: 0 -13px;
}

.slide-verify-slider-mask-item-icon {
  position: absolute;
  top: 15px;
  left: 13px;
  width: 14px;
  height: 12px;
  background: url("../assets/icon_light.png") 0 -26px;
  background-size: 34px 471px;
}
.container-active .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid #1991fa;
}

.container-active .slide-verify-slider-mask {
  height: 38px;
  border-width: 1px;
}

.container-success .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid #52ccba;
  background-color: #52ccba !important;
}

.container-success .slide-verify-slider-mask {
  height: 38px;
  border: 1px solid #52ccba;
  background-color: #d2f4ef;
}

.container-success .slide-verify-slider-mask-item-icon {
  background-position: 0 0 !important;
}

.container-fail .slide-verify-slider-mask-item {
  height: 38px;
  top: -1px;
  border: 1px solid #f57a7a;
  background-color: #f57a7a !important;
}

.container-fail .slide-verify-slider-mask {
  height: 38px;
  border: 1px solid #f57a7a;
  background-color: #fce1e1;
}

.container-fail .slide-verify-slider-mask-item-icon {
  top: 14px;
  background-position: 0 -82px !important;
}

.container-active .slide-verify-slider-text,
.container-success .slide-verify-slider-text,
.container-fail .slide-verify-slider-text {
  display: none;
}
</style>

```
:::

## 相关文档

* [vue-monoplasty-slide-verify文档](https://www.npmjs.com/package/vue-monoplasty-slide-verify?activeTab=readme)

<footer-FooterLink :isShareLink="false" :isDaShang="true" />