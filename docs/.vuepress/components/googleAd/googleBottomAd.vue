<template>
  <div>
    <div class="googleAd-container">
        <ins class="adsbygoogle adrespose"
            style="display:block"
            data-ad-client="ca-pub-7281692919682421"
            data-ad-slot="6403797688"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>

    </div>
  </div>
</template>

<script>
//  (adsbygoogle = window.adsbygoogle || []).push({});
  export default {
    name: "googleBottomAd",
  }
</script>

<style lang="scss" scoped>
.googleAd-container {
  width: 100%;
}
/* 宽度不超过 500 像素的屏幕: 宽度100%x100 广告单元 */
.adrespose { width: 100%; height: 100px; cursor: pointer;}
/* 宽度在 500 像素到 799 像素之间的屏幕：宽度100%x60 广告单元。 */
@media(min-width: 500px) { .adrespose { width: 100%; height: 60px;cursor: pointer; } }
/* 宽度在 800 像素以上的屏幕：宽度100%x90 广告单元 */
@media(min-width: 800px) { .adrespose { width: 100%; height: 90px;cursor: pointer; } }
</style>