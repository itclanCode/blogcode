<template>
  <div>
    <div class="wrap">
      <div class="left">
        <span>随笔川迹</span>
      </div>
      <div class="right">
        <span>itclanCoder</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hangeLabel"
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  background-color: #eee;
  height: 200px;
}
.left {
  width: 200px;
  height: 140px;
  position: absolute;
  top: -8px;
  left: -8px;
  overflow: hidden;
}

.left::before {
  position: absolute;
  left: 124px;
  border-radius: 8px 8px 0 0;
  width: 16px;
  height: 8px;
  background-color: #42b983;
  content: "";
}

.left::after {
  position: absolute;
  left: 0;
  top: 124px;
  border-radius: 0 8px 8px 0;
  width: 8px;
  height: 16px;
  background-color: #42b983;
  content: "";
}

.left span {
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  left: -50px;
  z-index: 2;
  overflow: hidden;
  -ms-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  border: 1px dashed #fff;
  box-shadow: 0 0 0 3px #42b983, 0 14px 7px -9px rgba(0, 0, 0, 0.6);
  background-color: #42b983;
  color: #fff;
}

.right {
  width: 140px;
  height: 200px;
  position: absolute;
  top: -8px;
  right: -8px;
  overflow: hidden;
}

.right::before {
  position: absolute;
  right: 124px;
  border-radius: 8px 8px 0 0;
  width: 16px;
  height: 8px;
  background-color: #42b983;
  content: "";
}

.right::after {
  position: absolute;
  right: 0;
  top: 124px;
  border-radius: 0 8px 8px 0;
  width: 8px;
  height: 16px;
  background-color: #42b983;
  content: "";
}

.right span {
  display: inline-block;
  text-align: center;
  width: 200px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 30px;
  right: -50px;
  z-index: 2;
  overflow: hidden;
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  border: 1px dashed #fff;
  box-shadow: 0 0 0 3px #42b983, 0 14px 7px -9px rgba(0, 0, 0, 0.6);
  background-color: #42b983;
  color: #fff;
}
</style>