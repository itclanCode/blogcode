<template>
  <div>
    <div class="carousel">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in carouses" :key="item.id">
          <a :href="item.href" @click="linkFun">
            <img :src="item.imgUrl" :width="width" :height="height" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      close-on-click-modal="false"
      width="30%"
      center
      v-if="isDiaLog"
    >
      <span>如需合作:请您联系站长,添加微信:suibichuanji,期待我们合作愉快</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "ArticleAdvertiSpace",
  props: ["width", "height"],
  data() {
    return {
      carouses: [
        {
          imgUrl:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/AdvertiSpace/1607499461751-adslo.png",
          text: "广告位招租",
          id: "1",
          target: "_blank",
          href: "http://itclancoder.mikecrm.com/z1zXWvz",
        },

        {
          imgUrl:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/AdvertiSpace/1607499509358-adslocation.png",
          text: "广告位招租",
          id: "2",
          href: "/adverent/",
        },
      ],
      centerDialogVisible: false,
      isDiaLog: true,
    };
  },

  methods: {
    linkFun() {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? true
        : false;
      if (isMobile) {
        this.isDiaLog = false;
        this.$message({
          message: "如需合作,请您联系站长,期待我们合作愉快",
          type: "error",
          center: true,
          duration: 5000,
        });
        return console.log("移动端下不显示dialog");
      } else {
        this.carouses.forEach((item) => {
          if (item.href != "javascript:;") {
            item.href = item.href;
          } else {
            this.centerDialogVisible = true;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  text-align: center;
  margin: 30px;
}
</style>