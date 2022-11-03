<template>
  <div>
    <div class="welcome-tip" :style="{color}">{{str}}</div>
    <iframe  class="iframe" v-if="src || false"  scrolling="no" :src="src" frameborder="0" width="100%" height="32" allowtransparency="true"></iframe>
    <div class="clock-box"><FlipClock></FlipClock></div>
  </div>
</template>

<script>
  import FlipClock from './flipClock'
  export default {
    components: {
      FlipClock
    },
    name: "Weather",
    data() {
      return {
        color: "#409eff",
        str: '', // 定义拼接的字符串变量
        src: "https://tianqiapi.com/api.php?style=tz&skin=mango"
      }
    },

    mounted() {
      this.welcomeTime();
    },

    methods: {
      welcomeTime() {
        let date = new Date();  // 获取当前的时间
        let hour = date.getHours();  // 得到小时数
        if(hour<12) {
          this.str = 'Hi,早上好,又是崭新的一天,打工人,要加油哦';
          this.color = "#409eff";
        }else if(hour >= 12 && hour < 13 ) { // 如果为12~13点,那么是中午
          this.str = 'Hi,中午好,在忙,也不要忘记眯一小会儿,不然下午会神游哦'
          this.color = "#67c23a";
        }else if(hour >=13 && hour <18) { // 13点到18点为下午
          this.str = "Hi,下午好,打起精神,该起来搬砖干活了";
          this.color = "#909399";
        }else if(hour >=18 && hour <22) { // 18-22点,晚上
          this.str = "Hi,晚上好,忙完了一天,该放下手机,电脑,好好休息下了"
          this.color = "#e6a23c";
        }else {
          this.str = "Hi,夜猫子好,熬最晚的夜,敷最贵的膜,不要熬夜哦,没了1,后面再多的零,也没有意义哈,狗命要紧";
          this.color = "#f56c6c";
        }
      }
    }
  }
</script>

<style scoped>
.iframe {
  display:block;
}
.clock-box {
  margin: 10px 0 20px 0;
}

.welcome-tip {
  margin: 0px 0 10px 0;
}
</style>