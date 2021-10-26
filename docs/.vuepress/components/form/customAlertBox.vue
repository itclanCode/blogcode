<template>
  <div class="wrap">
    <div class="wrap-content" v-if="isMobile">
      <el-button :plain="true" @click="openSuccessPop">点击弹出成功提示框</el-button>
      <el-button type="text" @click="openMessageBox">点击打开 Message Box</el-button>
    </div>
    <div class="wrap-content" v-if="isMobileAlert">
      <van-button  @click="showPopup" type="primary">展示弹出层</van-button>
      <van-button  @click="showNotify" type="warning">展示提示框</van-button>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">底部弹出内容</van-popup>
  </div>
</template>

<script>
import { Notify } from 'vant'
export default {
  components: {
    Notify
  },
  name: "customAlertBox",
  data() {
    return {
      show: false,
      isMobile: true,
      isMobileAlert: true
    };
  },
  mounted() {
    this.isPC();
  },
  methods: {
    openSuccessPop() {
      this.$message({
        showClose: true,
        message: "这是一条成功消息",
        type: "success"
      });
    },
    openMessageBox() {
      this.$alert("你好哈,我是一个弹窗", "itclanCoder", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    showPopup() {
      this.show = true;
    },

    showNotify() {
      Notify({ type: 'danger', message: '通知内容' });
    },

    isPC() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
      if (isMobile) {
        this.isMobile = false;
        this.isMobileAlert = true;
        return console.log('mobile do not load model');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  .wrap-content {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
}
</style>