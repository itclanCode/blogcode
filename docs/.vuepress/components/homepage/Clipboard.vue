<!--
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, itclanCoder. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product: 
 * @Mode Name: 
 * @Autor: vxPublic:itclanCoder
 * @Version: xxx.v1.0
 * @LastEditors: 川川
 * @Description: 自定义剪切: 
 见文档https://vuepress.github.io/zh/plugins/copyright/#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%89%AA%E8%B4%B4%E6%9D%BF
-->
<template>
  <div>
    <p>
      <span>MIT Licensed | {{ dateYear }}-present</span>
      <a href="/about/" target="_blank"
        >随笔川迹</a
      >
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
        <img
          src="/icons/icp.png"
          width="20"
          height="20"
          alt="公网备案"
        />京ICP备16017996号
      </a>
      <span>{{runTimeText}}</span>
    </p>
    <div v-html="html" />
  </div>
</template>
<style lang="stylus" scoped>
p {
  text-align: center;
  font-size: 16px;

  span {
    display: block;
  }

  a {
    margin-right: 3px;

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 2px;
      margin-left: 2px;
    }
  }
}
</style>
<script>
export default {
  name: 'Clipboard',
  props: ['html'],
  data() {
    return {
      dateYear: new Date().getFullYear(),
      runTimeText: '',
      timer: ''
    }
  },
  mounted() {
    this.timer = setInterval(this.runTime,1000);
  },
  methods: {
    runTime() {
        let X = new Date("01/06/2020 5:22:00"); // 设置的初始时间
        let Y = new Date();  // 当前时间
        let T = (Y.getTime()-X.getTime());
        let M =24*60*60*1000;
        let a = T/M;
        let A = Math.floor(a);
        let b = (a-A)*24;
        let B = Math.floor(b);
        let c = (b-B)*60;
        let C = Math.floor((b-B)*60);
        let D = Math.floor((c-C)*60);

        this.runTimeText = "本站已经稳定运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"
    }
  },
  created() {
    // this.location = window.location;
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
};
</script>
