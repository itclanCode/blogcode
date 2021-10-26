<template>
  <div>
    <div class="underline">垂直方向上由中间向两侧展开</div>
  </div>
</template>

<script>
export default {
  name: 'hoverBorderVer',
};
</script>

<style lang="scss" scoped>
.underline {
  width: 210px;
  height: 50px;
  background: #eee;
  margin: 10px auto;
  text-align: center;
  line-height: 50px;
  position: relative;
  cursor: pointer;
}

.underline::after {
  content: '';
  width: 2px;
  height: 0;
  background: #42b983;
  position: absolute;
  top: 50%;
  left: 0%;
  transition: all 0.8s;
}

.underline:hover:after {
  top: 0%;
  height: 100%;
  transition: all 0.8s;
}
</style>
