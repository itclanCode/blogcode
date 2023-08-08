<style scoped lang="scss">
.text-clip{
  display: inline-block;
  padding:30px 0;
  color:transparent;
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(45deg, rgba(0,173,181,1) 0%, rgba(0,173,181,.4)  100%);
  -webkit-background-clip: text;
}
</style>

<template>
  <div class="text-clip">
    两岸猿声啼不住<br/>轻舟已过万重山。
  </div>
</template>

<script>
  export default {
    name: 'textColor',
    data() {
      return {}
    }
  }
</script>
