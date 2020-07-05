<template>
  <div>
    <div class="wrap">
      <div v-for="item in knowledgeData">
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
  name: 'KnowledgeRich',
  data() {
    return {
      knowledgeData: [
        {
          href: 'https://www.lizhiweike.com/',
          imgSrc: '/images/lz-weike-logo.png',
          alt: '荔枝微课',
          text: '荔枝微课-直播-录播-在线授课',
        },
        {
          href: 'https://www.weishi100.com/pc/home/',
          imgSrc: '/images/weishi-logo.png',
          alt: '微师',
          text: '微师-专注在线教育的工具',
        },

        {
          href: 'http://www.renrenjiang.cn/home/index.html',
          imgSrc: '/images/renren-logo.png',
          alt: '人人讲',
          text: '人人讲-免费在线知识变现工具',
        },

        {
          href: 'http://www.renrenjiang.cn/home/index.html',
          imgSrc: '/images/ds_logo.png',
          alt: '短书',
          text: '知识社群-直播授课-带货',
        },

        {
          href: 'http://www.ckjr001.com/',
          imgSrc: '/images/chuangke-jiangren-logo.png',
          alt: '创客匠人',
          text: '知识服务-付费音频/资料/专栏等',
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
