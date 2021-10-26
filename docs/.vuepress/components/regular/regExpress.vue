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

    // 校验身份证合法性
    checkID(str) {
      const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|(X|x))$/;
      if (!reg.test(str)) {
        this.errMessage("您输入的身份证有误,请重新输入");
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    // 合法密码 6-20位字母与数字组合
    checkPassword(str) {
      const pwdregex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      if (!pwdregex.test(str)) {
        this.errMessage("您输入的密码太简单,6-20位字母与数字组合,请重新输入");
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    // 小写字母
    validateLowerCase(str) {
      const reg = /^[a-z]+$/;
      if (!reg.test(str)) {
        this.errMessage("您输入的不是小写字母,请重新输入");
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    validateUpperCase(str) {
      const reg = /^[A-Z]+$/;
      if (!reg.test(str)) {
        this.errMessage("您输入的不是大写字母,请重新输入");
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    validatAlphabets(str) {
      const reg = /^[A-Za-z]+$/;
      if (!reg.test(str)) {
        this.errMessage("您输入的不是大小写字母,请重新输入");
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    validatAlphabetsAndNumber(str) {
      const reg = /^[A-Za-z0-9]+$/;
      if (!reg.test(str)) {
        this.errMessage("您输入的不是大小写字母及数字,请重新输入");
      } else {
        this.result = str;
        this.inputVal = "";
      }
    },

    validatNumber(str) {
      const reg = /^[0-9]+$/;
      if (!reg.test(str)) {
        this.errMessage("您输入的不是数字,请重新输入");
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
          break;
        case "ID":
          // 身份证
          this.checkID(str);
          break;
        case "password":
          this.checkPassword(str);
          break;
        case "lowercase":
          this.validateLowerCase(str);
          break;
        case "uppercase":
          this.validateUpperCase(str);
          break;
        case "lowerUppercase":
          this.validatAlphabets(str);
          break;
        case "alphabetssndnumber":
          this.validatAlphabetsAndNumber(str);
          break;
        case "number":
          this.validatNumber(str);
          break;
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