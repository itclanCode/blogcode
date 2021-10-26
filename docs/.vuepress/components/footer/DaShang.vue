<template>
  <div  @click="handleShangBtn('https://www.zhi12.cn/paycenter/reward/widget?entity=user&id=33813')">
        <el-tooltip class="item" effect="dark" content="如果我的文章对您有任何帮助,欢迎您的任何金额打赏鼓励" placement="top">
            <el-button class="shang-btn">赞</el-button>
         </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "DaShang",
  data() {
    return {};
  },

  methods: {
    handleShangBtn(openUrl) {
      window.open(openUrl, "_blank");
    }
  }
};
</script>

<style lang="stylus" scoped>
@keyframes shangBtn {
  0% {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 1px rgba(255, 37, 37, 0);
  }

  10% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px 2px rgba(255, 37, 37, 0.1);
  }

  20% {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0), 0px 0px 0px 4px rgba(255, 37, 37, 0.2);
  }

  40% {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 1px rgba(255, 37, 37, 0.1), 0px 0px 0px 4px rgba(0, 0, 0, 0), 0px 0px 0px 6px rgba(255, 37, 37, 0.3);
  }

  50% {
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px 3px rgba(255, 37, 37, 0.2), 0px 0px 0px 5px rgba(0, 0, 0, 0), 0px 0px 0px 8px rgba(255, 37, 37, 0.4);
  }

  60% {
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0), 0px 0px 0px 5px rgba(255, 37, 37, 0.3), 0px 0px 0px 6px rgba(0, 0, 0, 0), 0px 0px 0px 10px rgba(255, 37, 37, 0.5);
  }

  70% {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0), 0px 0px 0px 6px rgba(255, 37, 37, 0.4), 0px 0px 0px 7px rgba(0, 0, 0, 0), 0px 0px 0px 11px rgba(255, 37, 37, 0.4);
  }

  80% {
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0), 0px 0px 0px 7px rgba(255, 37, 37, 0.3), 0px 0px 0px 8px rgba(0, 0, 0, 0), 0px 0px 0px 12px rgba(255, 37, 37, 0.3);
  }

  90% {
    box-shadow: 0px 0px 0px 5px rgba(0, 0, 0, 0), 0px 0px 0px 6px rgba(255, 37, 37, 0.2), 0px 0px 0px 9px rgba(0, 0, 0, 0), 0px 0px 0px 13px rgba(255, 37, 37, 0.2);
  }

  100% {
    box-shadow: 0px 0px 0px 7px rgba(0, 0, 0, 0), 0px 0px 0px 7px rgba(255, 37, 37, 0.1), 0px 0px 0px 10px rgba(0, 0, 0, 0), 0px 0px 0px 14px rgba(255, 37, 37, 0);
  }
}

.shang-btn {
  width: 45px;
  height: 45px;
  padding: 10px;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  background: rgba(255, 37, 37, 0.6);
  color: #fff;
  text-decoration: none;
  border-radius: 100%;
  -webkit-animation: shangBtn 2s alternate infinite;
  margin-top: 40px;
  margin-bottom: 40px;
  font-weight: 500;
  border: none;
  outline: none;
  cursor pointer;
}
</style>