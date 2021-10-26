<template>
  <div class="tab-box">
      <van-tabs animated swipeable>
        <van-tab v-for="tab in tabs" :title="tab" >
            <div class="tab-list">{{ tab }}</div>
        </van-tab>
      </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "tabScroll",
    data() {
      return {
        tabs: [
          "女装",
          "女鞋",
          "男鞋",
          "内衣",
          "母婴",
          "手机",
          "数码",
          "家电",
          "美妆",
          "箱包",
          "运动",
          "户外",
          "家装"
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.tab-box {
  margin: 20px 0 0 0;
}
.tab-list {
  padding: 40px 0 0 0;
  height: 40px;
  text-align: center;
}
</style>