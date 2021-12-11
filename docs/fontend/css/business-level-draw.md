---
title: 一级导航拖拽/二级拖拽
autoGroup-4: 业务型实例
---

## 一级导航拖拽/二级拖拽

## 快速导航

<TOC />

## 背景

在一些后台管理系统里,有时候需要一级拖拽排序,甚至二级拖拽排序

## 实例效果

<business-levelDraw />

## 具体实现

::: details 实例代码如下所示
```js
<template>
    <div class="tag-relation-wrap">
         <div class="tag-tab">
            <ul class="tag-tab-ul">
              <draggable v-model="firstTabLists" animation="1000">
                 <transition-group> 
                    <li v-for="(item) in firstTabLists" 
                        :key="item.id" 
                        class="tab-ul-li"
                        :class="{selectTab:curTab==item.id}" 
                        @click="handleLevel1TagLi(item.id)"
                    >
                        {{item.title}}
                    </li>
                 </transition-group>   
              </draggable>  
            </ul>
            <div class="second-tag-content">
                  <draggable v-model="secondTagLists" class="draggable" @start="handleOnStart" @end="handleOnEnd" animation="1000">
                    <transition-group>
                        <div class="second-tag-list" v-for="(item) in secondTagLists" :key="item.id">
                          <div v-if="curTab == item.parent.id">
                              <div>
                                 <img :src="item.logo" width="150" height="100" style="margin-right:10px;" alt="">
                              </div>
                              <div>{{item.title}}({{item.img_count}})</div>
                          </div>
                        </div>
                    </transition-group>  
                  </draggable> 
                  
            </div>
         </div>
    </div>
</template>

<script>
import draggable from 'vuedraggable'
    export default {
        name: 'levelDraw',
        components: {
            draggable
        },
        data() {
            return {
                curTab: 0,
                drag: false,
                firstTabLists: [],
                secondTagLists: [
                    {
                        id: "111",
                        logo: "https://t7.baidu.com/it/u=2604797219,1573897854&fm=193&f=GIF",
                        title: "自然风景",
                        img_count: "4",
                        parent: {
                            id: "0"
                        }
                    },
                    {
                        id: "112",
                        logo: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00607-2747.jpg",
                        title: "城市风光",
                        img_count: "5",
                        parent: {
                            id: "0",
                        }
                    },

                     {
                        id: "113",
                        logo: "https://img1.baidu.com/it/u=3359541483,3941166536&fm=26&fmt=auto",
                        title: "蓝天白云",
                        img_count: "6",
                        parent: {
                            id: "0",
                        }
                    },

                    {
                        id: "114",
                        logo: "https://img2.baidu.com/it/u=1986005730,948348151&fm=26&fmt=auto",
                        title: "浪漫大海",
                        img_count: "7",
                        parent: {
                            id: "0",
                        }
                    },

                    {
                        id: "115",
                        logo: "https://img1.baidu.com/it/u=4096324645,3052151476&fm=26&fmt=auto",
                        title: "幽静森林",
                        img_count: "8",
                        parent: {
                            id: "0",
                        }
                    },

                     {
                        id: "116",
                        logo: "https://img0.baidu.com/it/u=986567382,3731968355&fm=26&fmt=auto",
                        title: "风景",
                        img_count: "8",
                        parent: {
                            id: "1",
                        }
                    },
                    {
                        id: "117",
                        logo: "https://img2.baidu.com/it/u=3493136389,1353360279&fm=26&fmt=auto",
                        title: "人文",
                        img_count: "5",
                        parent: {
                            id: "1",
                        }
                    },

                    {
                        id: "118",
                        logo: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00237-960.jpg",
                        title: "植物",
                        img_count: "9",
                        parent: {
                            id: "1",
                        }
                    },

                     {
                        id: "119",
                        logo: "https://img1.baidu.com/it/u=3108395991,3014709597&fm=26&fmt=auto",
                        title: "动物",
                        img_count: "6",
                        parent: {
                            id: "1",
                        }
                    },

                     {
                        id: "120",
                        logo: "https://img2.baidu.com/it/u=2629675476,1507451532&fm=26&fmt=auto",
                        title: "绿色护眼",
                        img_count: "6",
                        parent: {
                            id: "2",
                        }
                    },

                     {
                        id: "121",
                        logo: "https://img1.baidu.com/it/u=2985957268,45475772&fm=26&fmt=auto",
                        title: "清新淡雅",
                        img_count: "6",
                        parent: {
                            id: "2",
                        }
                    },

                    {
                        id: "122",
                        logo: "https://img1.baidu.com/it/u=2433542901,3786348763&fm=15&fmt=auto",
                        title: "艺术作品",
                        img_count: "7",
                        parent: {
                            id: "3",
                        }
                    },

                     {
                        id: "123",
                        logo: "https://img0.baidu.com/it/u=3147964452,2678650339&fm=26&fmt=auto",
                        title: "二次元",
                        img_count: "8",
                        parent: {
                            id: "3",
                        }
                    },

                    {
                        id: "124",
                        logo: "https://img0.baidu.com/it/u=251703063,4193365027&fm=26&fmt=auto",
                        title: "打工人",
                        img_count: "8",
                        parent: {
                            id: "3",
                        }
                    }
                ],
            }
        },

        mounted() {
            this.mockFirstTabList();
            
        },

        

        methods: {
            handleLevel1TagLi(id) {
                console.log(id);
                this.curTab = id;

            },
            mockFirstTabList() {
                let firstLevelTitle = ["风景","摄影","花草","插画","影视","美女","汽车","简约"];
                for(let i = 0;i<=firstLevelTitle.length;i++) {
                    this.firstTabLists.push({
                        id: i,
                        title: firstLevelTitle[i]
                    })
                }
           },

            // 开始拖拽
            handleOnStart() {
                this.drag = true;
            },
            // 结束拖拽
            handleOnEnd() {
                this.drag = false;
            },
        }
    }
</script>

<style lang="scss" scoped>
.tag-relation-wrap {
  display: flex;
  justify-content: space-between;
  .tag-tab {
    flex: 1;
    margin-top: 20px;
    .second-tag-content {
       margin-top: 10px;
       .draggable {
         span {
            display: flex;
            flex-wrap: wrap;
            .second-tag-list {
              display:flex;
              flex-direction: column;
              align-items: center;
            //   margin-right: 10px;
              margin-bottom: 10px;
              cursor: move;
              text-align: center;
            }
         }
         
       }
      
    }

    .tag-tab-ul {
      display: flex;
      span{
        display: flex;
      }
      .tab-ul-li {
        margin-right: 25px;
      }
      .selectTab {
        color: #409EFF;
        cursor: move;
        border-bottom: 2px solid #409EFF;
      }
    }
  }
  /deep/ .el-tabs__nav-wrap::after {
    display:none;
  }
}
</style>
```

:::

::: tip 温馨提示
这里的拖拽主要借助`vuedraggable`组件,实现tab切换,主要是根据一级导航与二级导航相关联的`id`,实现的一个切换
:::

<footer-FooterLink :isShareLink="true" :isDaShang="true" />