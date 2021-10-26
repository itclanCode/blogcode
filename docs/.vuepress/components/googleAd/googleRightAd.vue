<template>
  <div>
     <div class="googleRightAd-container">
        <!-- 右侧固定广告 -->
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7281692919682421"
            data-ad-slot="5757764572"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
       </div>

     </div>

</template>

<script>
  export default {
    name: "googleRightAd"
  }
</script>

<style lang="scss" scoped>

@media screen and (min-width: 960px) {
  .googleRightAd-container {
    width: 140px;
    height: 300px;
    position: fixed;
    z-index: 1;
    right: 18px;
    top: 160px;
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {
  .googleRightAd-container {
    display: none;
  }
}
</style>