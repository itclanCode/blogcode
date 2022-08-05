<template>
  <div>
    <div class="wrap">
      <div v-for="item in applyData" class="item" :key="item.alt">
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
  name: "Apply",
  data() {
    return {
      applyData: [
        {
            href: "https://faka.itclan.cn",
            imgSrc: "/images/latest/shop.png",
            alt: "发卡商城",
            text: "发卡商城",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://pay.aikelaidev.cn",
            imgSrc: "/images/latest/payaikelaidev.svg",
            alt: "生成聚合支付码",
            text: "生成聚合支付码",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
          {
            href: "https://mh.aikelaidev.cn",
            imgSrc: "/images/latest/choumanghe.svg",
            alt: "抽盲盒",
            text: "抽盲盒",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },
         {
            href: "https://bazihehun.itclan.cn",
            imgSrc: "/images/latest/bazihehun.svg",
            alt: "测八字合婚",
            text: "测合婚",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://bazi.itclan.cn",
            imgSrc: "/images/latest/bazi.svg",
            alt: "在线测八字",
            text: "测八字",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
        {
            href: "https://taohua.itclan.cn",
            imgSrc: "/images/latest/taohua.svg",
            alt: "在线桃花",
            text: "测桃花",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "htttps://cesuan.itclan.cn",
            imgSrc: "/images/latest/cesuan.png",
            alt: "在线测运势,取名,姻缘,八字",
            text: "测算网",
            width: "80",
            height: "80",
            target: "_self",
            class:"lazy img-pic"
         },
         {
            href: "javascript:;",
            imgSrc: "/images/latest/kequnjide.png",
            alt: "客群基地,帮你拓展人脉,各行各业真实圈子,发广告,发名片等",
            text: "客群基地",
            width: "80",
            height: "80",
            target: "_self",
            class:"medium-zoom lazy img-pic"
         },
          {
            href: "javascript:;",
            imgSrc: "/images/latest/nuannuanliaotian.jpg",
            alt: "暖暖聊天恋爱对话-解救直男、直女,助力脱单",
            text: "暖暖聊天恋爱对话",
            width: "80",
            height: "80",
            target: "_self",
            class:"medium-zoom lazy img-pic"
         },
        //  {
        //     href: "javascript:;",
        //     imgSrc: "https://static01.imgkr.com/temp/f85d0cb9bc2d4138a91f08efcdadf5a6.jpg",
        //     alt: "让你平时的消费更省钱,日久越长,能省出一辆车",
        //     text: "外卖电影客惠劵",
        //     width: "85",
        //     height: "85",
        //     target: "_self",
        //     class:"medium-zoom lazy img-pic"
        //  },
         {
          href: "javascript:;",
          imgSrc: "/images/latest/gaoqingshangliaotian.jpg",
          alt: "高情商聊天对话,让撩妹,撩汉脱单更简单",
          text: "高情商聊天对话",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
          href: "javascript:;",
          imgSrc: "/images/latest/liaotianbiaoqingbao.jpg",
          alt: "暖暖聊天表情包",
          text: "暖暖聊天表情包",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
         {
          href: "javascript:;",
          imgSrc: "/images/latest/aikelaizhengjianzhao.jpg",
          alt: "爱客来证件照制作",
          text: "爱客来证件照制作",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
          href: "javascript:;",
          imgSrc: "/images/latest/qingjizhang.jpg",
          alt: "轻记账-一款轻松微信记账小工具",
          text: "轻记账",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
         {
          href: "javascript:;",
          imgSrc: "/images/latest/gaoqingqi.jpg",
          alt: "搞清亲戚称谓关系-知道亲戚称呼什么的一款工具",
          text: "搞清亲戚称谓关系",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        
         {
          href: "javascript:;",
          imgSrc: "/images/latest/susuanjisuanqi.jpg",
          alt: "速算计算器-一款简易的加减乘除计算器",
          text: "速算计算器",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },

          {
          href: "javascript:;",
          imgSrc: "/images/latest/yumingfanghong.jpg",
          alt: "域名防红-监测域名是否被微信禁用",
          text: "域名防红",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },

         {
            href: "https://video.itclan.cn",
            imgSrc: "/images/latest/kelaimovie.svg",
            alt: "客来影视TV",
            text: "客来影视TV",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic"  
        },

        {
            href: "https://img.itclan.cn",
            imgSrc: "/images/latest/kelaituchuang.svg",
            alt: "客来图床-免费存储图片",
            text: "客来图床",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic"  
        },

        {
            href: "https://zhanji.itclan.cn",
            imgSrc: "/images/latest/zhanjinet.svg",
            alt: "站集网-总有你不知道的好用的网站大全",
            text: "站集网",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
        },

        {
            href: "http://bhnk8.cn/884jt",
            imgSrc: "/images/latest/qun.svg",
            alt: "客群基地-寻找圈子,加各种资源群,发布广告,个人名片",
            text: "客群基地",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
        },
         {
          href: "javascript:;",
          imgSrc: "/images/latest/hongbao.jpg",
          alt: "玩红牌",
          text: "玩红牌",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
         {
          href: "javascript:;",
          imgSrc: "/images/latest/wanhejiu.jpg",
          alt: "玩喝酒",
          text: "玩喝酒",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
          href: "https://tv.itclan.cn",
          imgSrc: "/images/latest/jingpinyingshi.png",
          alt: "精品影视",
          text: "精品影视",
          width: "80",
          height: "80",
          target: "_self",
          class:"lazy img-pic"
        },
         {
          href: "javascript:;",
          imgSrc: "/images/latest/jisuqushuiyin.jpg",
          alt: "极速去水印工具",
          text: "极速去水印工具",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
         {
            href: "https://shuiying.itclan.cn",
            imgSrc: "/images/latest/addshuiyin.svg",
            alt: "图片打码",
            text: "图片水印",
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
  .wrap {
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
  .wrap {
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: nowrap;
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
