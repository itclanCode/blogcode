<template>
  <div>
    <div class="wrap">
      <div v-for="item in earnplatform">
        <p class="list">
          <a :href="item.href" target="_blank" :title="item.text">
            <img
              width="100"
              height="44"
              class="img-pic"
              :src="item.imgSrc"
              :alt="item.alt"
            />
          </a>
        </p>
        <p>{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EarnMoney',
  data() {
    return {
      earnplatform: [
        {
          href: 'https://www.newrank.cn/',
          imgSrc: '/images/newrank-logo.png',
          alt: '新榜',
          text: '有赚-接广告/内容付费(卖课程/漫画/测评等)',
        },
        {
          href:
            'http://www.myleguan.com/media/orderSquareCon.html#/orderSquare',
          imgSrc: '/images/lgLogo.png',
          alt: '乐观',
          text: '乐观-广告主/流量主接单/代写软文赚钱',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.wrap {
  display: flex;
  justify-content:space-between;
  text-align: center;
  flex-wrap:wrap;
  .list {
    width: 200px;
    height: 65px;
    a {
      display: block;
      margin: 0 auto;
      img {
        display: inline-block;
        vertical-align: center;
        box-shadow:0px 0px 10px 5px rgba(0,0,0,0.5);
        &:hover{
          width: 200px;
          height: 75px;
          box-shadow: 0px 0px 50px 15px rgba(0,0,0,0.9);
          transition: box-shadow 0.5s;
        }
      }
    }
  }


}
</style>
