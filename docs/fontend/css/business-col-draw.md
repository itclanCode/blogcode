---
title: 实现表格行的拖拽以及分页
autoGroup-4: 业务型实例
---

## 实现表格行的拖拽以及分页

## 快速导航

<TOC />

## 涉及到的知识

::: warning 涉及到的知识

1: 如何渲染表头数据以及表格数据

2: 最右侧管理的按钮(查看,编辑,上线,下线)是怎么插入进去的

3: 管理操作(查看,编辑,上线,下线)按钮的状态显示

4: 表格的分页数据展示

5: 表格的横向拖拽实现

:::


::: tip 操作按钮状态

它的状态是根据后端返回的具体`status`来决定显示,隐藏以及是否禁用

1: "待发布",即编辑状态,下线按钮置灰

2: "待上线",即编辑状态,上线,下线按钮置灰

3: "已上线",即上线按钮置灰,查看按钮隐藏

100: "已结束,查看按钮显示,上下线按钮置灰

具体内容,代码就是最好的解释哈
:::
## 具体实例效果(拖拽行)

<business-tableRowDraw />

##  行拖拽的具体实现

这里的拖拽主要借用的是`sortablejs`实现的,具体代码如下所示

```js
import Sortable from 'sortablejs'; // 引入sortable
// 拖拽方法
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

// 在mounted函数中
 // 表格拖拽
this.$nextTick(() => {
    this.dropRow((oldIndex,newIndex) => {
    const currRow = this.tableData.splice(oldIndex, 1)[0]
    this.tableData.splice(newIndex, 0, currRow);
    })
})
```

## 整个实例代码如下所示

:::: tabs type:border-card
::: tab tableRowDraw.vue lazy
```js
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
       this.pageNo = this.getStorageData("currentPage") || 1;
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

    setStorageData(key, value) {
      console.log(value);
      sessionStorage.setItem(key, value);
    },

    getStorageData(key) {
      const str = sessionStorage.getItem(key);
      if (typeof str == "string") {
        try {
          return JSON.parse(str);
        } catch (e) {
          return str;
        }
      }
      return str;
    },
    // 跳转页,currentPage 当前页改变时会触发
    pageCurrentChange(pageNo) {
      this.pageNo = pageNo;
      this.setStorageData("currentPage", this.pageNo);
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

```
:::
::: tab tableComp.vue lazy
```js
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
```
:::
::: tab tableColist.js lazy
```js
export const tableColist = [
    {
      label: "ID",
      prop: "id",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: false,
      dropHandle: true
    },
    {
      label: "投放模板",
      prop: "tname",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "项目名称",
      prop: "name",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label:"项目描述",
      prop: "reco_key",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "上线状态",
      prop: "status",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "投放渠道",
      prop: "pid_names",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "投放地区",
      prop: "areas",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "项目优先级",
      prop: "level",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "投放流量",
      prop: "pv_max",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "上线时间",
      prop: "start_time",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
    {
      label: "下线时间",
      prop: "end_time",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
  
    {
      label: "操作时间",
      prop: "update_time",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
  
    {
      label: "操作人",
      prop: "update_user",
      width: "auto",
      size: "medium",
      align: "center",
      showOverflowTooltip: true,
      dropHandle: true
    },
  ];
```
:::
::::

## 总结

表格中的数据是模拟的,具体在实际的业务里,根据后端返回的数据,前端请求后端接口,就可以了的,表格的分页也在上面

反正代码很简单,一看就懂~如有不明白的,可以喊我



<footer-FooterLink :isShareLink="false" :isDaShang="true" />