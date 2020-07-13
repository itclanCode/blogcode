<template>
  <div>
    <iframe
      src="https://tool.lu/coderunner/embed/9jc.html"
      class="iframe-online-code"
      frameborder="0"
      mozallowfullscreen
      webkitallowfullscreen
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "lineTestCode"
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .iframe-online-code {
    width: 740px;
    height: 500px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 768px) {
  .iframe-online-code {
    width: 300px;
    height: 500px;
    margin: 0 auto;
  }
}
</style>