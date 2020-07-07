<template>
  <div>
    <div class="single-ellpsis-wrap">
      单行溢出省略号显示-固定宽度是必须的-文本内容超出部分溢出隐藏-text-overflow:ellipsis
    </div>
  </div>
</template>

<script>
export default {
  name: 'singleEllipsis',
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 960px) {
  .single-ellpsis-wrap {
    width: 500px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 40px;
    line-height: 40px;
    margin: 15px auto;
    border: 1px solid #ddd;
    padding: 15px;
  }
}

@media screen and (max-width: 414px) {
  .single-ellpsis-wrap {
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 40px;
    line-height: 40px;
    margin: 15px auto;
    border: 1px solid #ddd;
    padding: 15px;
  }
}
</style>
