<template>
  <div>
    <div class="apply-wrap">
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
            href: "https://aihelp.aikelaikaifa.com/addons/wike_chatgpt/public/h5/?uniacid=1",
            imgSrc: "/images/latest/aihelp.png",
            alt: "AIChatGPT助手",
            text: "AIChatGPT助手",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
        },
        {
          href: "javascript:;",
          imgSrc: "/images/latest/aikelaizhinengzhushou.jpg",
          alt: "chatGPT智能助手,能绘画,能问答",
          text: "爱客来智能助手",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
            href: "https://video.itclan.pro",
            imgSrc: "/images/latest/videoitclanprologo.png",
            alt: "客来影视",
            text: "客来影视",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
        },
        {
            href: "https://tv.itclan.pro",
            imgSrc: "/images/latest/tvitclanprologo.png",
            alt: "精品影视",
            text: "精品影视",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
        },

         {
            href: "https://qun.aikelaikaifa.com/index.php?i=1&do=index&opt=index&act=index&m=dc_sqjd&spread=0#/",
            imgSrc: "/images/latest/kequnaikelaikaifa.png",
            alt: "拓展人脉圈子,每日更新微信社群",
            text: "客群基地H5",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
          href: "javascript:;",
          imgSrc: "/images/latest/kequnmincode.jpg",
          alt: "每日更新微信社群",
          text: "客群基地",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },
        {
            href: "https://tv.itclan.net",
            imgSrc: "/images/latest/tv-itclan-net.png",
            alt: "影视大全",
            text: "影视大全",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
        },
        {
            href: "https://faka.itclan.net",
            imgSrc: "/images/latest/shop.png",
            alt: "发卡商城",
            text: "发卡商城",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

         {
            href: "https://video.itclan.net",
            imgSrc: "/images/latest/video-itclan-net.ico",
            alt: "video影视",
            text: "video影视",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },

        //  {
        //   href: "https://game.itclan.net",
        //   imgSrc: "/images/games/kelaigame.png",
        //   alt: "客来游戏=h5小游戏",
        //   text: "客来游戏",
        //   width: "80",
        //   height: "80",
        //   target: "_blank",
        // },

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
            href: "https://nav.itclan.net",
            imgSrc: "/images/latest/nav-itclan-cn.png",
            alt: "IT资源导航",
            text: "IT资源导航",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },
         {
            href: "https://pay.aikelaikaifa.com",
            imgSrc: "/images/latest/payaikelaikaifa.png",
            alt: "爱支付-免签支付",
            text: "爱支付",
            width: "80",
            height: "80",
            target: "_blank",
            class: "lazy img-pic" 
         },
         {
            href: "https://bazihehun.itclan.net",
            imgSrc: "/images/latest/bazihehun.svg",
            alt: "测八字合婚",
            text: "测合婚",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://bazi.itclan.net",
            imgSrc: "/images/latest/bazi.svg",
            alt: "在线测八字",
            text: "测八字",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
        {
            href: "https://taohua.itclan.net",
            imgSrc: "/images/latest/taohua.svg",
            alt: "在线桃花",
            text: "测桃花",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
         },
         {
            href: "https://cesuan.itclan.net",
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
            href: "https://zhanji.itclan.net",
            imgSrc: "/images/latest/zhanjinet.svg",
            alt: "站集网-总有你不知道的好用的网站大全",
            text: "站集网",
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
            href: "https://shuiying.itclan.net",
            imgSrc: "/images/latest/addshuiyin.svg",
            alt: "图片打码",
            text: "图片水印",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
        },
        {
            href: "https://pingtu.itclan.net",
            imgSrc: "/images/latest/pingtu.png",
            alt: "将多张图片合并成一张图片",
            text: "在线拼图",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
        },

        {
            href: "https://shipin.itclan.net",
            imgSrc: "/images/latest/shipin-video.png",
            alt: "刷剧,刷动漫,电影,随意看",
            text: "视频网",
            width: "80",
            height: "80",
            target: "_blank",
            class:"lazy img-pic" 
        },
        {
            href: "javascript:;",
            imgSrc: "/images/latest/wifigongxiang.jpg",
            alt: "wifi共享密码",
            text: "wifi共享密码",
            width: "80",
            height: "80",
            target: "_self",
            class:"medium-zoom lazy img-pic" 
        },

        {
            href: "javascript:;",
            imgSrc: "/images/latest/jingxinmuyu.jpg",
            alt: "敲木鱼,盘珠,颂钵",
            text: "静心木鱼",
            width: "80",
            height: "80",
            target: "_self",
            class:"medium-zoom lazy img-pic" 
        },

        {
            href: "https://frontend.itclan.net",
            imgSrc: "/images/latest/fe-huise.png",
            alt: "前端资源导航",
            text: "前端资源导航",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },

         {
            href: "https://wen.renrenlingdu.com",
            imgSrc: "/images/latest/wenrenrenlingdu.png",
            alt: "文案网",
            text: "文案网",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },

         {
            href: "https://liangxing.aikelaidev.cn",
            imgSrc: "/images/latest/liangxing.png",
            alt: "两性知识网",
            text: "两性知识网",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },

         {
            href: "https://mianshi.aikelaikaifa.com",
            imgSrc: "/images/latest/mianshi-aikelaikaifa.png",
            alt: "面试网",
            text: "面试网",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },

         {
          href: "https://yingshi.itclan.net",
          imgSrc: "/images/latest/yingshi.png",
          alt: "影视网",
          text: "影视网",
          width: "80",
          height: "80",
          target: "_self",
          class:"lazy img-pic"
        },

        {
          href: "https://aitool.itclan.net",
          imgSrc: "/images/latest/aitoolicon.png",
          alt: "AI工具箱",
          text: "AI工具箱",
          width: "80",
          height: "80",
          target: "_self",
          class:"lazy img-pic"
        },

        {
          href: "javascript:;",
          imgSrc: "/images/latest/kequnxiaochengxu.jpg",
          alt: "客群基地-拓展人脉圈子",
          text: "客群基地小程序",
          width: "80",
          height: "80",
          target: "_self",
          class:"medium-zoom lazy img-pic"
        },

        {
            href: "https://juhelogin.aikelaidev.cn",
            imgSrc: "/images/latest/juhelogin.png",
            alt: "爱客来聚合登录",
            text: "爱客来聚合登录",
            width: "80",
            height: "80",
            target: "_self",
            class: "lazy img-pic" 
         },
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@media screen and (min-width: 960px) {
  .apply-wrap {
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
  .apply-wrap {
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
