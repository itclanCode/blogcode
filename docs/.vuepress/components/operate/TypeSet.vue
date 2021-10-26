<template>
  <div>
    <div class="wrap">
      <div v-for="item in typeData" class="item">
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
        <p class="text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeSet",
  data() {
    return {
      typeData: [
        {
          href: "https://mdnice.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599252052-md-nice-logo.png",
          alt: "mdnice",
          text: "公众号/知乎/掘金/排版神器",
        },
        {
          href: "https://markdown.lovejade.cn/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599309075-md-pic.png",
          alt: "Arya-在线Markdown编辑器",
          text: "Arya-在线Markdown编辑器",
        },

        {
          href: "http://md.aclickall.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599366857-markdwon-logo.png",
          alt: "aclickall-markdwon编辑器",
          text: "md2All在线markdown编辑器",
        },

        {
          href: "https://www.wxmarkdown.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599400357-wx-logo.png",
          alt: "微信辅助工具",
          text: "各种辅助工具-插入B站/腾讯视频/等",
        },

        {
          href: "https://imgkr.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599489916-imgkr-logo.png",
          alt: "免费图床",
          text: "图壳图床-免费图床-好用",
        },

        {
          href: "https://www.picb.cc/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599524373-picbcc-logo.png",
          alt: "picb 免费图床",
          text: "picb 免费图床",
        },

        {
          href: "https://imgchr.com/",
          imgSrc:
            "https://cdn.jsdelivr.net/gh/itclanCode/blogImgAssets/operateImgs/1607599559331-imgchr-logo.png",
          alt: "imgchr 免费图床",
          text: "imgchr 免费图床",
        },
      ],
    };
  },
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
      margin: 0 20px;

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
