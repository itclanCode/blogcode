<style scoped lang="scss">
.btn-container{
  padding:10px;
  .button{
    width:200px;
    height:60px;
    position: relative;
    background: #fff;
    margin:30px auto;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    &::before{
      content:'';
      width:0;
      height:0;
      background:  #00adb5;
      position: absolute;
      top:-1px;right:-1px;
      z-index: 0;
      transition: width .5s,height .5s;
    }
    &::after{
      content:'';
      width:0;
      height:0;
      background:  #00adb5;
      position: absolute;
      bottom:-1px;left:-1px;
      z-index: 0;
      transition: width .5s,height .5s;
    }
    &:hover::before{
      width:calc(100% + 2px);
      height:calc(100% + 2px);
    }
    &:hover::after{
      width:calc(100% + 2px);
      height:calc(100% + 2px);
    }

    .button__content{
      height:100%;
      width:100%;
      position: absolute;
      left:0;top:0;
      z-index: 1;
      background: #fff;
    }
  }
}
</style>

<template>
  <div class="btn-container">
    <div class="button">
      <div class="button__content">边框动画</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hoverBorder',
    data() {
      return {}
    }
  }
</script>
