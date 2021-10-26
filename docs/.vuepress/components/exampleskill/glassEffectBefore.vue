<template>
  <div>
      <div class="filter">
          <div class="background">
            <div class="main">
              <p>结合背景图片叠加+伪类实现毛玻璃效果</p>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: "glassEffectBefore"
  }
</script>

<style lang="scss" scoped>
.filter {
    width: 100%;
    height: 250px;
  }

  .background {
    position: relative;
    width: 100%;
    height: 250px;
    background: url("/images/adslo.png") no-repeat 0 0/100% 100%;
  }

  .main {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 100%;
    height: 250px;
    z-index: 9;
    overflow: hidden;   // 隐藏超出的模糊边缘
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main::before {
    content: "";
    position: absolute;
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
    width: 400px;
    height: 200px;
    background: url("/images/adslo.png") no-repeat 0 0/100% 100%;;
    background-attachment: fixed;   // 使背景图片滚动时，模糊部分图片随之滚动
    z-index: -1;    // 使模糊部分不遮挡文本
    filter: blur(20px);
    margin: 0 auto;    // blur的值较大时，模糊边缘效果不理想，可以通过设置margin消除影响
  }

  .main p {
    font-size: 18px;
    line-height: 36px;
    color:#fff;
  }
</style>