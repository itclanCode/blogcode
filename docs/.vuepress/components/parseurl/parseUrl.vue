<template>
  <div>
    <div class="split-wrap">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="输入URL">
          <el-input v-model="inputUrl" clearable class="el-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryString(inputUrl)">立即提参</el-button>
        </el-form-item>
      </el-form>
      <div>{{result}}</div>
    </div>
  </div>
</template>

<script>
import { Message } from "element-ui";
export default {
  name: "parseUrl",
  props: ["url"],
  data() {
    return {
      labelPosition: "left",
      inputUrl: this.url,
      result: ""
    };
  },

  methods: {
    queryString(str) {
      // 校验URL是不是网址
      let regUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/;
      if (regUrl.test(str)) {
        let params = str.split("?")[1]; //截取?号后的字符串即name=itclanCoder&study=css
        let param = params.split("&"); // 通过&符号进行分割即["name=itclanCoder", "study=css"]
        let obj = {}; // 用一个对象存储目标值
        for (let i = 0; i < param.length; i++) {
          // 循环遍历截取出来的param数组
          let paramsA = param[i].split("="); // 通过split,=继续对数组params每一项进行分割,生成数组["name", "itclanCoder"]
          let key = paramsA[0]; // 取数组项["name", "itclanCoder"]中第0位,即name
          let value = paramsA[1]; // 取数组项["name", "itclanCoder"]中第1位,即itclanCoder
          if (obj[key]) {
            // 主要是在这里做了一下处理,判断值是不是一个数组
            obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
            obj[key].push(value);
          } else {
            obj[key] = value;
          }
        }

        this.result = obj;
        this.inputUrl = "";
      } else {
        this.$message({
          showClose: true,
          message: "您输入的url有误,请重新输入",
          type: "error"
        });
        this.inputUrl = "";
      }
    }
  },

  mounted() {}
};
</script>

<style lang="scss" scoped>
.split-wrap {
  width: 100%;
}

@media screen and (min-width: 960px) {
  .el-input {
    width: 553px;
  }
}

@media screen and (max-width: 768px) {
}
</style>
