<template>
  <div>
    <div class="flowbianxian-wrap">
      <div v-for="item in  FlowData" class="item" :key="item.alt">
        <p class="list">
          <a :href="item.href" :target="item.target" :title="item.alt">
            <img :width="item.width" :height="item.height" :class="item.class" :src="item.imgSrc" :alt="item.alt" />
          </a>
        </p>
        <p class="text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlowBianxian",
  data() {
    return {
      FlowData: [
        {
            href: "https://6v4.cn/reg.php?u=388604",
            imgSrc: "/images/latest/6v4-cn.png",
            alt: "网站注入流量统计即可变现",
            text: "易时代统计",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://union.baidu.com/",
            imgSrc: "/images/latest/union-baidu.png",
            alt: "百度联盟",
            text: "百度联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://www.google.com/adsense",
            imgSrc: "/images/latest/google.png",
            alt: "谷歌广告联盟",
            text: "谷歌广告联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "http://pc.huimee.com/affiliate/",
            imgSrc: "/images/latest/huimi.png",
            alt: "网站注入-cpm,cpv广告变现",
            text: "汇米网络",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
          {
            href: "https://invite.51.la/1OmoRh1t1?target=V6",
            imgSrc: "/images/latest/51la.png",
            alt: "51拉站长网站统计变现",
            text: "51啦统计",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
          {
            href: "https://70z.com/?pid=101330",
            imgSrc: "/images/latest/70z.png",
            alt: "麒麟广告联盟",
            text: "麒麟广告",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

          {
            href: "https://www.szlm.cc/?pid=104699",
            imgSrc: "/images/latest/szlm-cc.svg",
            alt: "神州联盟",
            text: "神州联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://www.xyhx.cc/register?from=EGD4d91ycr1",
            imgSrc: "/images/latest/sdlm.svg",
            alt: "闪电联盟",
            text: "闪电联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
            href: "http://www.558wap.com/",
            imgSrc: "/images/latest/558.jpg",
            alt: "558联盟",
            text: "558联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://www.smtlm.cc/?pid=100019",
            imgSrc: "/images/latest/smtwm-com.png",
            alt: "水蜜桃联盟",
            text: "水蜜桃联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "http://www.999lm.com/track/c/?rid=2921",
            imgSrc: "/images/latest/999lm.png",
            alt: "999联盟",
            text: "999联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
            href: "https://www.ztolm.com/?pid=100093",
            imgSrc: "/images/latest/ztolm-cc.png",
            alt: "ZT联盟",
            text: "ZT联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
            href: "https://www.ztolm.com/?pid=100093",
            imgSrc: "/images/latest/xrklm-com.png",
            alt: "向日葵联盟",
            text: "向日葵联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
            href: "https://8865.org/?pid=100090",
            imgSrc: "/images/latest/8865-org.png",
            alt: "胜利联盟",
            text: "胜利联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
            href: "https://www.trclm.com/?pid=100170",
            imgSrc: "/images/latest/trclm.png",
            alt: "TRC联盟",
            text: "TRC联盟",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .flowbianxian-wrap {
    display: flex;
    justify-content: start;
    text-align: center;
    flex-wrap: wrap;

    .item {
      .list {
        width: 200px;
        height: 65px;

        a {
          display: block;
          margin: 0 auto;

          img {
            display: inline-block;
            vertical-align: center;
          }
        }
      }

      .text {
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .flowbianxian-wrap {
    display: flex;
    justify-content: space-between;
    text-align: center;
    overflow-x: auto;

    .item {
      .list {
        width: 160px;
        height: 65px;

        a {
          display: block;
          margin: 0 auto;

          img {
            display: inline-block;
            vertical-align: center;
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
          }
        }
      }

      .text {
        width: 160px;
        display: -webkit-box;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; // 需要显示的行数
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
