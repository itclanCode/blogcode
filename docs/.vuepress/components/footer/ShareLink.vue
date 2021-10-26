<template>
  <div>
    <div class="bshare-custom icon-medium">
      <a title="分享到" href="http://www.bShare.cn/" id="bshare-shareto" class="bshare-more">分享到</a>
      <a title="分享到微信" class="bshare-weixin"></a>
      <a title="分享到QQ好友" class="bshare-qqim"></a>
      <a title="分享到新浪微博" class="bshare-sinaminiblog"></a>
      <a title="更多平台" class="bshare-more bshare-more-icon more-style-addthis"></a>
      <span class="BSHARE_COUNT bshare-share-count">0</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShareLink"
};
</script>

<style lang="scss" scoped>
.bshare-custom {
  margin-top: 20px;
}
</style>
