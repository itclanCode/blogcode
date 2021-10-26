<template>
  <div>
    <el-input
      @blur="handleInputBlur(telephoneVal)"
      maxlength="11"
      class="el-input"
      placeholder="请输入手机号码"
      v-model.trim="telephoneVal"
      clearable
    ></el-input>
    <el-button :disabled="isSend" @click="handleGetCode">{{btnText}}</el-button>
    <div v-if="smscode != ''">获取到的验证码是: {{smscode}}</div>
  </div>
</template>

<script>
import { Input, Message } from "element-ui";
import axios from "axios";
export default {
  name: "formVertiyCode",
  data() {
    return {
      telephoneVal: "",
      btnText: "获取验证码",
      isSend: true,
      t: 60,
      smscode: ""
    };
  },
  watch: {
    // 监听表单电话输入框的值
    telephoneVal(v) {
      if ((this.t = 60)) {
        this.isSend = this._checkPhone(v);
      }

      this.$nextTick(() => {
        this.telephoneVal = v.replace(/[^0-9\.]+/g, "");
      });
    },
    // 监听倒计时
    t(v) {
      if (this.t < 60) {
        this.isSend = true;
      }
    }
  },
  methods: {
    /**
     * 发送验证码
     * */
    handleGetCode() {
      let baseUrl = `https://www.easy-mock.com/mock/5f4e532a66f90555e2209861/learn`;
      this.isSend = true;
      axios
        .get(`${baseUrl}/sendCode`, {
          params: {
            telephoneVal: this.telephoneVal
          }
        })
        .then(res => {
          const { smscode } = res.data.base;
          if (res.status == 200) {
            setTimeout(() => {
              this.smscode = smscode;
            }, 2000);
            this.btnText = this.t + "s后重新发送";
            let clock = window.setInterval(() => {
              this.t--;
              this.btnText = this.t + "s后重新发送";

              if (this.t < 0) {
                window.clearInterval(clock);
                this.isSend = false;
                this.btnText = "获取验证码";
                this.t = 60;
              }
            }, 1000);
          } else {
            this.$message({
              showClose: true,
              message: res.message,
              type: "error"
            });
            this.isSend = true;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    // 失去焦点
    handleInputBlur(value) {
      console.log("输入框失去焦点时");
      if (!/^1[3456789]\d{9}$/.test(value)) {
        this.$message({
          showClose: true,
          message: "您输入的电话号码有误",
          type: "error"
        });
        this.isSend = true;
        return false;
      } else {
        this.isSend = false;
      }
    },

    _checkPhone(textval) {
      const reg = /^1[3456789]\d{9}$/;
      return reg.test(textval);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 50%;
  margin-bottom: 10px;
}
</style>