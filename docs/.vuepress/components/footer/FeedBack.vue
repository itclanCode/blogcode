<template>
  <div class="feedback-box">
    <div class="feedback-content">
      <div @click="handleShareCopy">
        <img
          src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598007853-icon-share.png"
        />分享
      </div>
      <div @click="handleFeedBack('http://itclancoder.mikecrm.com/WkvRFA4')">
        <img
          src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598092598-icon-experiense.png"
        />留言
      </div>
      <div @click="handleAnswer('http://itclancoder.mikecrm.com/wkgblhv')">
        <img
          src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598132714-icon-dspel.png"
        />解答
      </div>
      <div @click="handleColect">
        <img
          src="https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/feedback/1607598161589-icon-collect.png"
        />收藏
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedBack",
  data() {
    return {
      msgpath: `https://coder.itclan.cn${this.$route.path}`,
    };
  },

  methods: {
    // 复制分享
    handleShareCopy() {
      this.$copyText(this.msgpath).then(
        (e) => {
          this.$message({
            message: `恭喜您已成功复制到剪切板,试试与他人分享吧`,
            type: "success",
            duration: 4000,
            center: true,
          });
        },
        function (e) {
          alert("Can not copy");
        }
      );
    },
    // 留言
    handleFeedBack(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,您即将前往留言,是时候开始你真正的表达了",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleAnswer(openUrl) {
      this.$dialog
        .confirm({
          title: "温馨提示",
          message: "亲,此项为付费解答服务,我在等风,也在等你",
          theme: "round-button",
          showCancelButton: true,
          cancelButtonColor: "#ccc",
        })
        .then(() => {
          // on confirm 确认
          window.open(openUrl, "_blank");
        })
        .catch(() => {
          // on cancel // 取消
        });
    },

    handleColect() {
      this.$message({
        message: `键盘侠不止有ctrl+c,ctrl+v,还有ctrl+D`,
        type: "success",
        duration: 4000,
        center: true,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-box {
  .feedback-content {
    width: 96%;
    display: flex;
    color: #42b983;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    margin-top: 20px;
    div {
      cursor: pointer;
      img {
        display: inline-block;
        vertical-align: middle;
        width: 22px;
        height: 22px;
        margin-right: 5px;
      }
    }
  }
}
</style>