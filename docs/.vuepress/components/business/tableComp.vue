<template>
  <div class="table-wrap">
    <!-- 表格开始 -->
    <div class="table-container">
      <el-table :data="tableData" resizable border height="100%" row-key="id">
        <el-table-column
          v-for="(item, index) in tableColist"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :size="item.medium"
          :align="item.align"
          :width="item.width"
          :showOverflowTooltip="item.showOverflowTooltip"
          :scoped-slot="labelHead"
          :class-name="item.dropHandle ? 'drop_handle' : ''"
        >
          <template slot-scope="scope">
            <!-- <p>{{scope.row[scope.column.property]}}</p> -->
            <p v-if="item.prop === 'status'">
              {{ onlineStatusEnum[scope.row[item.prop]] }}
            </p>
            <p v-else-if="item.prop === 'pid_names'">
              {{ scope.row[item.prop] }}
            </p>
            <p v-else-if="item.prop === 'level'">
              {{ levelEnum[scope.row[item.prop]] }}
            </p>
            <p v-else-if="item.prop == 'pv_max'">
              {{ scope.row[item.prop] }}万
            </p>
            <p v-else-if="item.prop == 'areas'">
              {{ scope.row[item.prop] == "" ? "全部" : scope.row[item.prop] }}
            </p>
            <p v-else>{{ scope.row[item.prop] }}</p>
          </template>
        </el-table-column>
        <el-table-column label="管理" min-width="290" align="center">
          <template slot-scope="scope">
            <el-button
              v-if="scope.row.status == 100 ? true : false"
              type="primary"
              size="mini"
              @click="handleLook(scope.row, scope.$index)"
              >查看</el-button
            >
            <!-- <el-button
              v-if="scope.row.status == 100 ? true : false"
              type="info"
              size="mini"
              @click="handleCopy(scope.row, scope.$index)"
              >复制</el-button
            > -->
            <el-button
              :disabled="scope.row.status !== 100 ? false : true"
              type="primary"
              size="mini"
              @click="handleEdit(scope.row, scope.$index)"
              >编辑</el-button
            >
            <el-button
              :disabled="scope.row.status == 1 ? false : true"
              size="mini"
              type="success"
              @click="handleOnline(scope.row, scope.$index)"
              >上线</el-button
            >
            <el-button
              :disabled="scope.row.status == 3 ? false : true"
              size="mini"
              type="danger"
              @click="handleOffline(scope.row, scope.$index)"
              >下线</el-button
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
      pageSizeList: [10, 25, 40, 50], // 每页显示个数选择器的选项设置
      onlineStatusEnum: {
        1: "待发布",
        2: "待上线",
        3: "已上线",
        100: "已结束",
      },
      levelEnum: {
        p0: "P0（紧急项目）",
        p1: "P1（日常项目）",
        p2: "P2（兜底项目）",
      },
    };
  },

  methods: {
    // 编辑
    handleEdit(Row, Index) {
      this.$emit("edit", Row, Index);
    },

    // 上线
    handleOnline(Row, Index) {
      this.$emit("online", Row, Index);
    },

    // 下线
    handleOffline(Row, Index) {
      this.$emit("offline", Row, Index);
    },
    // 查看
    handleLook(Row, Index) {
      this.$emit("look", Row, Index);
    },

    // 复制
    handleCopy() {
      this.$emit("copy");
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
    margin: 30px auto 30px;
  }
}

  /* 手型 */
.drop_handle{
  cursor: cursor;
}
</style>