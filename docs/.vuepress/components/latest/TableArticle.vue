<template>
    <div class="table-wrap">
        <div class="table-content">
            <tableComp
                :pageSize="pageSize"
                :pageNo="pageNo"
                :total="total * 1"
                :tableData="tableData.slice((pageNo - 1) * pageSize, pageNo * pageSize)"
                :table-colist="tableColist"
                :tags="tags"
                :dates="dates"
                @look="handleLook"
                @pageCurrentChange="pageCurrentChange"
                @pageSizeChange="pageSizeChange"
            >
            </tableComp>
        </div>   
    </div>
</template>

<script>
import { tableColist } from "./tableColist.js"; // 表格表头配置数据
import tableComp from "./tableComp.vue";
import {artTitles }  from "./artTitles.js";
    export default {
        name: "TableArticle",
        components: {
            tableComp
        },
        data() {
            return {
                tableColist, // 表格列表头数据
                // 当前页
                pageNo: 1,
                // 每页条数
                pageSize:5,
                // 总条数
                total: "",
                tableData: artTitles,
                tags: [],
                dates: [],
                isTable: true,
            }
        },

        mounted() {
            this.mockTable();
        },

        methods: {
             mockTable() {
                 this.total = artTitles.length;
                 let date = this.dates = artTitles.map((item) => {
                     return {
                         text: item.update_time,
                         value: item.update_time
                     }
                 })

                 let arts = artTitles.map((item) => {
                     return {
                         text: item.tag,
                         value: item.tag
                     }
                 })
                 // 去除数组对象中的重复值
                 this.tags = this.removeArrs(arts);
                 this.dates =  this.removeArrs(date)  
              
                //  for(let i = 0;i <= artTitles.length;i++) {
                //     this.tableData.push({
                //          id: i,
                //          title: artTitles[i].title,
                //          desc: artTitles[i].desc,
                //          author: artTitles[i].author,
                //          update_time: artTitles[i].update_time,
                //          link: artTitles[i].link,
                //          url: artTitles[i].url,
                //          tag: artTitles[i].tag
                //      })
                //  }
             },

             removeArrs(arrs) {
                 let result = [];
                 let obj = {};
                 for(var i =0; i<arrs.length; i++){
                    if(!obj[arrs[i].value]) {
                        result.push(arrs[i]);
                        obj[arrs[i].value] = true;
                    }
                 }
                 return result
             },

             handleLook(Row) {
                 console.log(Row);
                 const url = Row.url;
                  this.$router.push({
                    path: `${url}`,
                  });
            },

             // 跳转页,currentPage 当前页改变时会触发
            pageCurrentChange(pageNo) {
                this.pageNo = pageNo;
                console.log("跳转页,currentPage 当前页改变时会触发");
            },

            // 每页条数,pageSize 改变时会触发
            pageSizeChange(PageSize) {
                this.pageSize = PageSize;
                console.log("跳转页,currentPage 当前页改变时会触发");
            },

        }
    }
</script>

<style lang="scss" scoped>
.table-content {
    margin: 10px 0 10px 0;
}
@media screen and (min-width: 960px) {
    // 大于960px,显示
  .table-wrap {
    display: block;
  }
}

@media screen and (max-width: 768px) {
  // 小于768,隐藏  
  .table-wrap {
    display:none;
  }
}
</style>