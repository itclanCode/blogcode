<template>
  <div>
    <div class="bird">
      <div class="big"></div>
      <!-- 最外面的红色的圆圈 -->
      <div class="middle"></div>
      <!--中间白色的圈,黄色的圈,灰色的圈-->
      <div class="small"></div>
      <!--小嘴巴-->
    </div>
  </div>
</template>

<script>
export default {
  name: "bridRotate",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
// 去除默认外边距、内边距
* {
  margin: 0px;
  padding: 0px;
}

body {
  background: #27283b;
}

.bird {
  width: 200px;
  height: 200px;
  margin: 50px auto;
  position: relative;
}

.big, .middle, .small {
  position: absolute;
  transition: all 0.5s; /* 动画过渡 */
  border-radius: 50%;
  border-style: solid;
  transform: rotate(45deg); /* 旋转 */
}

.big {
  border-width: 100px;
  border-color: transparent transparent #d72928 #db3e3d;
  left: 0;
  top: 0;
}

.middle {
  border-width: 80px;
  border-color: #f8d245 transparent #f2f2f2 #fff;
  left: 10%;
  top: 10%;
}

.small {
  border-width: 40px;
  border-color: transparent #f7a703 transparent transparent;
  left: 30%;
  top: 30%;
}

.small:before { /* 小黑原点 */
  content: '';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000;
  position: absolute;
  top: -10px;
  right: 20px;
}

.bird:hover .big {
  transform: rotate(225deg);
  border-color: transparent transparent #1fe8b6 #16d7a7;
  cursor: pointer;
}

.bird:hover .middle { /* 逆时针炫转135度 */
  transform: rotate(-135deg);
  border-color: transparent #f8d245 #fff #f2f2f2;
  cursor: pointer;
}

.bird:hover .small { /* 小眼睛 */
  transform: rotate(135deg);
  cursor: pointer;
}
</style>