<template>
  <div>
    <iframe  class="iframe" scrolling="no" src="https://tianqiapi.com/api.php?style=tz&skin=mango" frameborder="0" width="100%" height="32" allowtransparency="true"></iframe>
    <div class="clock-box"><FlipClock></FlipClock></div>
  </div>
</template>

<script>
  import FlipClock from './flipClock'
  export default {
    components: {
      FlipClock
    },
    name: "Weather"
  }
</script>

<style scoped>
.iframe {
  display:block;
}
.clock-box {
  margin: 10px 0 20px 0;
}
</style>