<template>
  <div class="table-wrap">
    <!-- 表格开始 -->
    <div class="table-container">
      <el-table :data="tableData"
      
      >
        <el-table-column label="文章id" 
                         size="medium" 
                         width="auto"
                         align="center"
                         prop="id"
                         sortable
                         :default-sort="{prop:'id',order:'descending'}"
                         column-key="id"
        >
            <template slot-scope="scope">
              <div>
               {{ scope.row.id }}
              </div>
            </template>
        </el-table-column>
        <el-table-column label="文章标题" 
                         size="medium" 
                         min-width="230"
                         align="center"
                         :showOverflowTooltip="true"
        >
            <template slot-scope="scope">
              <div>
                 <el-link type="primary" :underline="false" :href="scope.row.link" target="_blank">{{ scope.row.title }}</el-link>
              </div>
            </template>
        </el-table-column>
        <el-table-column label="文章描述" 
                         size="medium" 
                         width="auto"
                         align="center"
                         :showOverflowTooltip="true"
        >
            <template slot-scope="scope">
              <div>
               {{ scope.row.desc }}
              </div>
            </template>
        </el-table-column>
        <el-table-column label="作者" 
                         size="medium" 
                         width="auto"
                         align="center"
        >
            <template slot-scope="scope">
              <div>
               {{ scope.row.author }}
              </div>
            </template>
        </el-table-column>
        <el-table-column label="发布时间" 
                         size="medium" 
                         min-width="90"
                         align="center"
                         prop="update_time"
                         sortable
                         column-key="update_time"
                         :showOverflowTooltip="true"
                         :filters="dates"
                         :filter-method="filterHandler"
        >
            <template slot-scope="scope">
              <div>
               {{ scope.row.update_time }}
              </div>
            </template>
        </el-table-column>
        <el-table-column label="标签" 
                         size="medium" 
                         width="auto"
                         align="center"
                         :filters="tags"
                         :filter-method="filterTag"
                         filter-placement="bottom-end"
                         :scoped-slot="labelHead"
        >
            <template slot-scope="scope">
              <div>
               <el-tag :type="scope.row.tag=='JavaScript'?'primary':'success'">{{ scope.row.tag }}</el-tag>
              </div>
            </template>
        </el-table-column>
        <el-table-column label="管理" width="auto" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleLook(scope.row, scope.$index)"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 表格结束 -->
    <!-- 分页开始 -->
    <div class="pagination-container">
      <el-pagination
        v-if="tableData.length != 0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <!-- 分页结束 -->
  </div>
</template>

<script>
export default {
  name: "tableComp",
  props: {
    // 表头数据
    tableColist: [],
    // 列表数据
    tableData: [],
    tags: [],
    dates: [],
    // 页每条
    pageSize: {
      type: Number,
      default: 10,
    },
    // 当前页
    pageNo: {
      type: Number,
      default: 1,
    },
    // 总数
    total: [Number],
  },
  data() {
    return {
      pageSizeList: [5,10, 25, 40, 50], // 每页显示个数选择器的选项设置
    };
  },

  computed: {
  },

  methods: {
    // 查看
    handleLook(Row, Index) {
      this.$emit("look", Row, Index);
    },

    // 每页条数,pageSize 改变时会触发
    handleSizeChange(PageSize) {
      console.log(PageSize);
      this.$emit("pageSizeChange", PageSize);
    },
    // 跳转页,currentPage 当前页改变时会触发
    handleCurrentChange(pageNo) {
      console.log("跳转当当前页", pageNo);
      this.$emit("pageCurrentChange", pageNo);
    },

    filterTag(value, row) {
        return row.tag === value;
    },

    filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
    },

    // 解决表格表头文字过多换行的问题
    labelHead(h, { column }) {
      let l = column.label.length;
      let f = 16;
      column.minWidth = f * l;
      return h("div", { class: "table-head", style: { width: "100%" } }, [
        column.label,
      ]);
    },
  },
};
</script>

<style lang="scss" scoped>
.table-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  //  align-items: center;
  box-sizing: border-box;
  /deep/.table-container {
    flex: 1;
    height: 100%;
    .el-table__body-wrapper {
      height: auto !important;
      overflow-x: auto;
    }
  }

  .table-head {
    font-size: 14px !important; //设置固定的字体大小
  }
  .pagination-container {
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 30px;
  }
}
</style>