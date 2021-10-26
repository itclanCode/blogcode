<template>
  <div class="wrapper">
    <div class="list" v-for="item in listData" wx:key="index">
      <div class="list-name">{{ item.list_name }}</div>
      <div class="list-content">
        <div class="list-content-title">{{ item.list_title }}</div>
        <div>{{ item.list_desc }}</div>
        <div>
          <audio controls class="media">
            <source :src="item.list_source" />
          </audio>
        </div>
      </div>
      <div>
        <img
          class="medium-zoom lazy"
          :src="item.list_img"
          width="320"
          height="302"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import chuanchuanSource from "../../public/images/lingduSource/renrenlingdu-source.mp3";
import fanfanSource from "../../public/images/lingduSource/friendsfan.mp3";

export default {
  name: "lingduStar",
  data() {
    return {
      listData: [
        {
          list_name: "川川",
          list_title: "人人领读-发起人",
          list_desc:
            "itclan.cn/coder.itclan.cn站长,itclanCoder公众号博主,人人领读公众号发起人,一个具有情怀的技匠,路上正追逐斜杠青年的践行者",
          list_source: chuanchuanSource,
          list_img:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/lingdustar/1607597279256-chuanchuan.png",
        },

        {
          list_name: "晓帆",
          list_title: "人人领读-首位领读明星",
          list_desc:
            "全名K诗数十万听众,实习型声控主播,集颜值与才华并存的90后萌妹子一枚,专治各种不高兴",
          list_source: fanfanSource,
          list_img:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/lingdustar/1607597335044-fanfan.png",
        },
        {
          list_name: "虚位以待",
          list_title: "虚位以待",
          list_desc:
            "您的个人介绍将在这里尽情展示~快加入我们吧,期待下一个领读者就是你",
          list_source: chuanchuanSource,
          list_img:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/lingdustar/1607597367275-timg.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 960px) {
  .wrapper {
    margin: 20px 0 0 0;
    .list {
      display: flex;
      justify-content: space-between;
      box-shadow: 0px 0px 5px #333333;
      padding: 15px 0 0 25px;
      margin-bottom: 20px;
      .list-name {
        font-size: 1.6rem;
        color: #2b2c3f;
        padding: 20px 0 0 0;
        font-weight: bold;
      }
      .list-content {
        padding: 20px 0 0 0;
        color: #888;
        line-height: 30px;
        .list-content-title {
          color: #666;
        }
        .media {
          width: 230px;
          margin: 20px 0 0 0;
        }
      }
      div {
        flex: 1;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    margin: 20px 0 0 0;
    .list {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      box-shadow: 0px 0px 5px #333333;
      padding: 15px 0 0 25px;
      margin-bottom: 20px;
      .list-name {
        font-size: 1.6rem;
        color: #2b2c3f;
        padding: 20px 0 0 0;
        font-weight: bold;
      }
      .list-content {
        padding: 20px 0 0 0;
        color: #888;
        line-height: 30px;
        .list-content-title {
          color: #666;
        }
        .media {
          width: 230px;
          margin: 20px 0 0 0;
        }
      }
      div {
        flex: 1;
      }
    }
  }
}
</style>