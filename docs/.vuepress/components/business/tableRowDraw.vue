<template>
  <div>
    <!-- 表格内容展示开始 -->
    <div class="table-content">
      <tableComp
        :pageSize="pageSize"
        :pageNo="pageNo"
        :total="total * 1"
        :tableData="tableData.slice((pageNo - 1) * pageSize, pageNo * pageSize)"
        :table-colist="tableColist"
        @look="handleLook"
        @copy="handleCopy"
        @edit="handleEdit"
        @online="handleOnline"
        @offline="handleOffline"
        @pageCurrentChange="pageCurrentChange"
        @pageSizeChange="pageSizeChange"
      >
      </tableComp>
    </div>
    <!-- 表格内容展示结束 -->
    <!-- 点击表格上下线按钮弹出模态框开始 -->
    <el-dialog
      :visible.sync="isDialogModel"
      width="30%"
      center
      custom-class="dialog-model"
    >
      <p class="dalog-content">{{ popModelContent }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isDialogModel = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 点击表格上下线按钮弹出模态框结束 -->
  </div>
</template>

<script>
import { tableColist } from "./tableColist.js"; // 表格表头配置数据
import tableComp from "./tableComp.vue";
import Sortable from 'sortablejs'; // 表格拖拽

export default {
  components: {
    tableComp,
  },
  name: "tableRowDraw",
  data() {
    return {
      tableColist, // 表格列表头数据
      // 当前页
      pageNo: 1,
      // 每页条数
      pageSize:10,
      // 总条数
      total: "50",
      tableData: [],
      isDialogModel: false, // 上下线模态框
      popModelContent: "",
    };
  },

  created() {
    //    this.pageNo = this.getStorageData("currentPage") || 1;
  },

  mounted() {
     this.mockTableData();
    // 表格拖拽
    this.$nextTick(() => {
        this.dropRow((oldIndex,newIndex) => {
        const currRow = this.tableData.splice(oldIndex, 1)[0]
        this.tableData.splice(newIndex, 0, currRow);
        })
    })
  },

  methods: {

   dropRow(endHandle) {
    const tbody = document.querySelector(
        ".el-table__body-wrapper tbody"
    );
    if (tbody) {
        Sortable.create(tbody, {
        animation: 300,
        delay: 0,
        handle: '.drop_handle',
        onEnd: endHandle,
        });
    }
   },
    mathRandom(arr) {
        return arr[Math.floor(Math.random()*arr.length)]
    },  

    startTime() {
        return `${new Date().getFullYear()}-${new Date().getMonth() < 10?0+new Date().getMonth()+1:new Date().getMonth()+1}-${new Date().getDate()<10?0+new Date().getDate():new Date().getDate()}`
    },

    endTime() {
        return `${new Date().getFullYear()}-${new Date().getMonth() < 10?0+new Date().getMonth()+1:new Date().getMonth()+1}-${new Date().getDate()<10?0+new Date().getDate():new Date().getDate()}`
    },

    mockTableData() {
            const tnames = ["单图单链接","多图N链接","H5_iframe","视频模板"];
            const status = ["1","2","3","100"];
            const pidNames =  ["浏览器","安全卫士","全部"];
            const areas = ["北京","上海","广州","深圳","福建","杭州"];
            const levels = ["p0","p1","p2"];
            const updaters = ["张三","李四","王五","小河"];
            for(let i = 0;i<= 50;i++) {
               this.tableData.push({
                    id:i,
                    tname: `${this.mathRandom(tnames)}`,
                    name: 'xxx1项目',
                    reco_key: '项目描述....',
                    status: `${this.mathRandom(status)}`,
                    pid_names: `${this.mathRandom(pidNames)}`,
                    areas: `${this.mathRandom(areas)}`,
                    level: `${this.mathRandom(levels)}`,
                    pv_max: Math.floor(Math.random()*10000),
                    start_time: this.startTime(),
                    end_time: this.endTime(),
                    update_time: this.startTime(),
                    update_user: this.mathRandom(updaters)
                });
            }
    },
    // 编辑
    handleEdit(Row) {
    //   this.$router.push({
    //     path: "/newAddProject",
    //     query: { id: Row.id },
    //   });
       this.$message({
          message: "编辑项目",
          type: "success",
        });
    },
    // 上线
    handleOnline(Row) {
      const now_date = new Date().getTime(); // 当前时间
      const end_time = new Date(Row.end_time).valueOf(); // 结束时间
      console.log(now_date, end_time);
      if (now_date > end_time) {
        this.$message({
          message: "上线时间已过期，请重新编辑时间",
          type: "warning",
        });
      } else {
        this.isDialogModel = true;
        console.log(Row.id, Row.status);
        this.status = Row.status;
        console.log(this.status);
        this.id = Row.id;
        console.log("上线");
        this.popModelContent = "确定要上线当前项目,定时投放?";
      }
    },

    // 下线
    handleOffline(Row) {
      this.isDialogModel = true;
      this.popModelContent = "确定要下线当前项目,停止投放?";
      this.status = Row.status;
      //this.id = Row.id;
      console.log("下线");
    },

    // 确认上线与下线
    handleSubmit() {
      if (this.status == 1) {
        // 1-待发布，2-待上线,3-已上线，100-结束
        const params = {};
        params.id = this.id;
        params.status = 2;
        // this.updateStatus(params);
        this.isDialogModel = false;
        // this.getProjectList(); // 重新拉取一下列表数据
      } else if (this.status == 3) {
        const params = {};
        params.id = this.id;
        params.status = 100;
        // this.updateStatus(params);
        this.isDialogModel = false;
        // this.getProjectList(); // 重新拉取一下列表数据
        this.isDialogModel = false;
      }
    },
    // 查看
    handleLook(Row) {
    //   this.$router.push({
    //     path: "/newAddProject",
    //     query: { id: Row.id },
    //   });
    //   console.log("查看");
     this.$message({
          message: "查看项目",
          type: "success",
        });
    },

    // 复制
    handleCopy() {
      console.log("复制");
    },

    // setStorageData(key, value) {
    //   console.log(value);
    //   sessionStorage.setItem(key, value);
    // },

    // getStorageData(key) {
    //   const str = sessionStorage.getItem(key);
    //   if (typeof str == "string") {
    //     try {
    //       return JSON.parse(str);
    //     } catch (e) {
    //       return str;
    //     }
    //   }
    //   return str;
    // },
    // 跳转页,currentPage 当前页改变时会触发
    pageCurrentChange(pageNo) {
      this.pageNo = pageNo;
    //   this.setStorageData("currentPage", this.pageNo);
    //   this.getProjectList();
      console.log("跳转页,currentPage 当前页改变时会触发");
    },

    // 每页条数,pageSize 改变时会触发
    pageSizeChange(PageSize) {
      this.pageSize = PageSize;
    //   this.getProjectList();
      console.log("跳转页,currentPage 当前页改变时会触发");
    },
  },
};
</script>

<style lang="scss" scoped>

  .table-content {
    margin: 30px 0 0 0;
    flex: 1;
    overflow: auto;
  }

  .dialog-model {
    .dalog-content {
      text-align: center;
    }
  }
</style>
