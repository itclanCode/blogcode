<template>
  <div>
    <div class="split-wrap">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="输入携带参数的URL">
          <el-input v-model="inputUrl" clearable class="el-input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="queryString(inputUrl)">立即提参</el-button>
        </el-form-item>
      </el-form>
      <div class="result-text">提参结果:&nbsp;&nbsp;{{result}}</div>
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
      let regx = /([^&?=]+)=([^&?=]+)/g;
      if (regx.test(str)) {
        let obj = {};
        str.replace(regx, (...args) => {
          if (obj[args[1]]) {
            obj[args[1]] = Array.isArray(obj[args[1]])
              ? obj[args[1]]
              : [obj[args[1]]];
            obj[args[1]].push(args[2]);
          } else {
            obj[args[1]] = args[2];
          }
        });
        this.result = obj;
        this.inputUrl = "";
      } else {
        this.$message({
          showClose: true,
          message: "您输入的url有误,请重新输入",
          type: "error"
        });
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

.result-text {
  margin-bottom: 20px;
}

@media screen and (min-width: 960px) {
  .el-input {
    width: 480px;
  }
}

@media screen and (max-width: 768px) {
}
</style>
