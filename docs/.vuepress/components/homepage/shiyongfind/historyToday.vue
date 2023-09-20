<template>
    <div>
         <div class="historytoday-wrap">
            <div class="el-select-wrap">
                <el-date-picker
                    clearable
                    v-model="datePickerVal"
                    align="center"
                    type="date"
                    size="small"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="M/d"
                    :default-value="defaultTimeVal"
                    :picker-options="pickerOptions">
                </el-date-picker>  
                <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isDisabled">查询</el-button>
                <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button> 
            </div> 
            <!-- 查询结果 -->
            <div class="result-content" v-if="historyTableData.length != 0">
                <el-table
                        :data="historyTableData.slice((page - 1) * pagesize, page * pagesize)"
                        border
                        style="width: 100%">
                        <el-table-column v-for="item in historyTableColist" :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                        :align="item.align"
                        :medium="item.medium"
                        :default-sort = "{prop: 'e_id', order: 'descending'}"
                        sortable
                        ></el-table-column>
                        <el-table-column align="center" label="查看详情" width="auto">
                            <template slot-scope="scope">
                                <p>
                                <el-button
                                    size="small"
                                    type="primary"
                                    @click="handleLook(scope.row.e_id, scope.$index)"
                                    >查看
                                </el-button>
                                </p>
                            </template>
                        </el-table-column>
                 </el-table>
                 <el-pagination
                        class="el-pagination"
                        v-if="historyTableData.length != 0"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="page"
                        :page-sizes="[5, 10, 20, 30, 40, 50]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalcount">
                </el-pagination>
            </div>
            <el-empty v-if="isResultNull == true?true:false" description="暂无数据,今日接口数据查询已上限,请明日来查询">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </el-empty>
            <div class="footer-btn">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </div>
            <el-dialog
                title="查看详情"
                :visible.sync="dialogVisible"
                width="60%">
                <el-table :data="historyDetailTableData">
                    <el-table-column align="center" width="auto" property="e_id" label="id"></el-table-column>
                    <el-table-column align="center" width="auto" property="title" label="事件标题">
                          <template slot-scope="scope">
                              <span>{{ scope.row.title}}</span>
                          </template>
                    </el-table-column>
                    <el-table-column align="center" width="auto" property="picNo" label="是否有图">
                        <template slot-scope="scope">
                            <span>{{ enumPicText[scope.row.picNo] }} </span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" width="auto" property="picUrl" label="图片信息">
                          <template slot-scope="scope">
                               <ul class="picurl-ul">
                                   <li  v-for="(item,index) in scope.row.picUrl" :key="index">
                                    <el-image  v-if="scope.row.picUrl.length != 0" style="width:100%;height:100%" :src="item.url" fit="contain" lazy></el-image>
                                   </li>
                               </ul>
                          </template>
                    </el-table-column>
                    <el-table-column align="center" width="auto" property="content" label="介绍信息" :show-overflow-tooltip="true">
                        <template slot-scope="scope">
                            <span >{{ scope.row.content}}</span>
                        </template>
                    </el-table-column>
                </el-table>
            </el-dialog>
         </div>
    </div>
</template>

<script>
import { historyTableColist } from "./historyTodayTableCol.js";
    export default {
        name: 'historyToday',
        data() {
            return {
                isDisabled: false,    // 查询按钮是否禁用
                dialogVisible: false, // 弹窗是否显示
                isResultNull: false,
                datePickerVal: this.forMateNowDate(),
                defaultTimeVal: this.forMateNowDate(),
                historyTableColist,
                historyTableData: [],
                historyDetailTableData: [],
                page: 1,
                pagesize: 5,
                totalcount: null,
                enumPicText: {
                    '0': '无图片',
                    '1': '有图片'
                },
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    },

                    shortcuts: [
                        {
                            text: '今天',
                            onClick(picker) {
                                picker.$emit('pick', new Date());
                            }
                        },     
                        {
                            text: '昨天',
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                picker.$emit('pick', date);
                            },
                        }, 

                        {
                            text: '前天',
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24*2);
                                picker.$emit('pick', date);
                            },
                        }, 

                        {
                            text: '一周前的今天',
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit('pick', date);
                            }
                        },
                 ]
                }    
            }
        },

        methods: {
            async handleBtnSearch() {
                this.isDisabled = true;
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                    this.url = '/historytodayapi';
                } else {
                this.url = 'https://v.juhe.cn';
                }
                const params = {
                    key: "1dc596bb4e4e56e058abaad7f14adb38",
                    date: this.datePickerVal
                }

                let res = await this.$axios.get(`${this.url}/todayOnhistory/queryEvent.php`,{params});
                console.log(res);
                if(res.status == 200 && res.data.error_code == 0) {
                    this.isDisabled = false;
                    this.$message.success("历史今天数据查询成功");
                    const data = res.data.result;
                    if(data.length > 0) {
                        this.historyTableData = data;
                        this.totalcount = data.length;
                    }else {
                        this.historyTableData = [];
                    }
                }else {
                    this.isResultNull = true;
                    this.$message.error("今日接口数据查询已上限,请明日来查询");
                }
            },

            forMateNowDate() {
                let nowDate = new Date();
                let month = nowDate.getMonth() + 1;
                let day = nowDate.getDate();
                let date =  month + '/' + day;
                return date;
            },

            handleBtnReset() {
                this.datePickerVal = this.forMateNowDate();
                this.historyTableData = [];
                this.isDisabled = false;
            },

            handleSizeChange(val) {
                this.pagesize = val;
            },

            handleCurrentChange(val) {
                this.page = val;
            },

           async handleLook(e_id) {
                console.log(e_id);
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                    this.url = '/historytodayapi';
                } else {
                    this.url = 'https://v.juhe.cn';
                }
                const params = {
                    key: "1dc596bb4e4e56e058abaad7f14adb38",
                    e_id
                }

                let res = await this.$axios.get(`${this.url}/todayOnhistory/queryDetail.php`,{params});
                console.log(res, 'res详情');   
                if(res.status == 200 && res.data.error_code == 0) {
                    this.dialogVisible = true;
                    const data = res.data.result;
                    if(data.length > 0 ) {
                        this.historyDetailTableData = data;
                    }else {
                        this.historyDetailTableData = [];
                    }
                }else {
                    this.$message.error(res.data.reason);
                }
            },

            handleJinQueFind(url) {
                window.open(url, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.result-content {
    margin: 5px auto;
}

.el-pagination {
    text-align: center;
    margin: 5px auto;
}

.picurl-ul {
    display:flex;
    justify-content: start;
    flex-wrap: wrap;
}

.picurl-ul li {
    margin-right: 5px;
    margin-bottom: 5px;
}

.footer-btn {
    margin-top: 20px;
}

</style>