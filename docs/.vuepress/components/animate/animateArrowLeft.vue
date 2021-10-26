<template>
  <div>
    <div class="wrap">
      <div class="arrow"></div>
      <div class="text">朝左</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "animateArrowLeft",
    data() {
      return {
      }
      
    },
  }
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  .text {
    margin-top: 40px;
    margin-left: -25px;
  }
}
.arrow {
  display: block;
  width: 20px;
  height: 20px;
  margin-left: -11px;
  border: 3px solid transparent;
  border-left: 3px solid #42b983;
  border-bottom: 3px solid #42b983;
  z-index: 99;
  opacity: 0.8;
  -webkit-transform: rotate(45deg);
  -webkit-animation: arrow 1.5s infinite ease-in-out;
}

@-webkit-keyframes arrow {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 0px) rotate(45deg);
  }
  50% {
    opacity: 1;
    -webkit-transform: translate(0, -5px) rotate(45deg);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate(0, -10px) rotate(45deg);
  }
}

</style>