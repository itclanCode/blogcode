<template>
  <div>
    <div class="flash-container">
      <img src="/images/itclancoder.jpeg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "pictureFlash"
};
</script>

<style lang="scss" scoped>
.flash-container {
  width: 148px;
  height: 148px;
  background: #333333;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    height: 150%;
    width: 25px;
    background: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.6;
    filter: blur(6px);
    animation: move 2s infinite ease-out;
  }

  &::hover {
    animation-play-state: paused;
  }
}

@keyframes move {
  0% {
    transform: translate(-200px, -200px) rotate(45deg);
  }
  100% {
    transform: translate(200px, 200px) rotate(45deg);
  }
}
</style>