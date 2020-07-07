<template>
  <div>
    <div class="wrap">
      <div class="multi-ellpsis-wrap">
        多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,多行溢出省略号显示-纵向显示列数,溢出部分末尾添加省略号,line-clamp指定显示多少列,弹性和模型，word-break:break-all允许在单词内换行
        box-sizing:border-box:增加padding与border不把它计算到里面去
      </div>
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
  .wrap {
    width: 500px;
    border: 1px solid #ddd;
    padding: 15px;
    margin: 30px auto;
    .multi-ellpsis-wrap {
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical; // 垂直方向
      -webkit-line-clamp: 3; // 只显示3列
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
      box-sizing: border-box;
    }
  }
}

@media screen and (max-width: 414px) {
  .wrap {
    width: 200px;
    border: 1px solid #ddd;
    padding: 15px;
    margin: 30px auto;
    .multi-ellpsis-wrap {
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical; // 垂直方向
      -webkit-line-clamp: 3; // 只显示3列
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
      box-sizing: border-box;
    }
  }
}
</style>
