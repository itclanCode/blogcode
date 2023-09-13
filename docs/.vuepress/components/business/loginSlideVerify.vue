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
  