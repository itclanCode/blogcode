<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item :label="labelText">
        <el-input v-model="inputVal" :type="inputType" clearable class="el-input"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleElBtn(inputVal,inputType)">{{btnText}}</el-button>
      </el-form-item>
    </el-form>
    <div>校验结果:&nbsp;&nbsp;{{result}}</div>
  </div>
</template>

<script>
import { message } from "element-ui";
export default {
  name: "regExpress",
  props: ["label", "input", "placeholer", "type", "btntext"],
  data() {
    return {
      result: "",
      labelText: this.label,
      inputVal: this.input,
      inputType: this.type,
      btnText: this.btntext
    };
  },

  methods: {
    // 检测URL
    checkUrl(str) {
      // 网址URL
      let regUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      if (regUrl.test(str)) {
        this.result = str;
        this.inputVal = "";
      } else {
        this.errMessage("您输入的url有误,请重新输入");
      }
    },

    // 检测电话号码
    checkPhone(str) {
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(str)) {
        this.errMessage("您输入的手机号码有误,请重新输入");
        return false;
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    // 检测邮箱
    checkEmail(str) {
      //let emailReg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; // 邮箱的正则
      let emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g;
      if (!emailReg.test(str)) {
        this.errMessage("您输入的邮箱有误,请重新输入");
        return false;
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    errMessage(errtext) {
      this.$message({
        showClose: true,
        message: errtext,
        type: "error"
      });
    },

    handleElBtn(str, type) {
      switch (type) {
        case "url":
          this.checkUrl(str);
          break;
        case "phone":
          // 电话号码
          this.checkPhone(str);
          break;
        case "email":
          // 邮箱
          this.checkEmail(str);
        default:
          break;
      }
    }
  },

  mounted() {
    // console.log(this);
  }
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .el-input {
    width: 500px;
  }
}

@media screen and (max-width: 768px) {
}
</style>