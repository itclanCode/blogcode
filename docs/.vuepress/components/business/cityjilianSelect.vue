<template>
    <div>
         <div class="postmen-wrap">
               <div class="postmen-select">
                     <el-select v-model="pidVal" @change="handlePidSelct" clearable placeholder="请选择省份" size="small" class="el-select">
                        <el-option
                        v-for="item in pidOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="cidVal" @change="handleCidSelect" clearable placeholder="请选择城市" size="small" class="el-select">
                        <el-option
                        v-for="item in cidOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-select v-model="didVal" clearable placeholder="请选择区域" size="small" class="el-select">
                        <el-option
                        v-for="item in didOptions"
                        :key="item.id"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <el-input class="el-input"  size="small" clearable  placeholder="请输入地名" v-model="inputVal">
                            <el-button slot="append" size="small"  icon="el-icon-search" @click="handleBtnFind" :disabled="isBtnDisabled">查询</el-button>
                    </el-input>
                    <el-button type="primary" size="small"  icon="el-icon-setting" @click="handleBtnReset">重置</el-button>
               </div>
               <!-- 输出结果表格展示 -->
               <div class="postmen-table-content" v-if="tableData.length != 0">
                    <el-table
                        :data="tableData"
                        border
                        style="width: 100%">
                        <el-table-column v-for="item in tableColist" :key="item.label"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                        :align="item.align"
                        :medium="item.medium"
                        ></el-table-column>
                    </el-table>
                    <el-pagination
                        class="el-pagination"
                        v-if="tableData.length != 0"
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
         </div>
    </div>
</template>

<script>
import { tableColist } from "./cityjilianSelectTabCol.js";
    export default {
        name: 'cityjilianSelect',
        data() {
            return {
                pidVal:'',
                cidVal: '',
                didVal: '',
                inputVal: '',
                isBtnDisabled: false,
                isResultNull: false,
                page: 1,
                pagesize: 5,  
                totalcount: null,
                totalpage: null,
                // 表头数据
                tableColist,
                pidOptions: [],
                cidOptions: [],
                didOptions: [],
                result: [],
                citySelectData: [],
                tableData: []
            }
        },

        mounted() {
            this.getPidCidDid();
        },
        methods: {
            async getPidCidDid() {
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/pidciddidapi';
                    } else {
                    this.url = 'https://v.juhe.cn';
                    }
                    const params = {
                        key: "db2983aef2b29eca4837783fc1c58211",
                    }
                    let res = await this.$axios.get(`${this.url}/postcode/pcd`,{params});
                    console.log(res, 'res');
                    if(res.status == 200 && res.data.error_code == 0) {
                        const data = res.data.result;
                        this.result = data;
                        // 取第一级省份的数据,id和名称
                        data.forEach((levels) => {
                            this.pidOptions.push({
                                label: levels.province,
                                value: levels.id
                            });
                        })

                    }else {
                        this.isResultNull = true;
                        this.$message.error("今日接口调用已上限,请明天再来吧");
                    }
                
            },

            async handleBtnFind() {
                   this.isBtnDisabled = true;
                   let isSelectOpt = this.pidVal && this.cidVal;
                   if(isSelectOpt) {
                    let development = process.env.NODE_ENV == 'development' ? true : false;
                    console.log(development, 'development'); //true的时候为开发环境
                    if (development) {
                      this.url = '/postmenfindapi';
                    } else {
                    this.url = 'https://v.juhe.cn';
                    }
                    const params = {
                        key: "db2983aef2b29eca4837783fc1c58211",
                        pid: this.pidVal,   // 省份ID
                        cid: this.cidVal,   // 城市ID
                        did: this.didVal,   // 区县ID
                        q: this.inputVal,   // 查询关键字
                        page: this.page,   // 页码
                        pagesize: this.pagesize,   // 每页显示条数
                    }
                    let res = await this.$axios.get(`${this.url}/postcode/search`,{params});
                    console.log(res, 'res');
                    if(res.status  ==  200 && res.data.error_code == 0 ) {
                       // this.$message.success("邮编数据查询成功");
                        this.isBtnDisabled = false;
                        const data = res.data.result;
                        const {currentpage, list, totalcount,totalpage} = data;
                        this.page = currentpage;
                        this.tableData = list;
                        this.totalcount = totalcount;
                        this.totalpage = totalpage;
                    }else {
                        this.isResultNull = true;
                        this.$message.error("今日接口数据查询已上限,请明日来查询");
                    }
                   }else {
                        this.$message.error("省份和城市不能为空");
                   }
                  
            },

            handleBtnReset() {
                this.isBtnDisabled = false;
                this.inputVal = '';
                this.tableData = [];
            },

            handlePidSelct(val) {
                console.log(val);
                this.pidVal = val;
                // 先清空
                this.cidVal = ''
                this.didVal = '';
                // 需要进行帅选
                let cityLevelData = this.result.filter((item) => {
                    return item.id == val;
                });
                console.log("第一层从31个省中帅选对应匹配的数据",cityLevelData);
                let citys = cityLevelData[0].city;
                console.log(citys);
                // 取城市列表数据
                this.cidOptions = citys.map((item) => {
                    return {
                        label: item.city,
                        value: item.id
                    }
                })
                console.log("城市列表数据-第二级",this.cidOptions);
                this.citySelectData = citys;
            },

            handleCidSelect(val) {
                console.log(val);
                this.cidVal = val;
                // 选中第二级时,先清空第三级数据
                this.didVal = '';
                let cidSecondData = this.citySelectData.filter((item) => {
                    return item.id == val;
                });
                console.log(cidSecondData);
                this.didOptions = cidSecondData[0].district.map((item) => {
                    return {
                        label: item.district,
                        value: item.id
                    }
                })
                console.log("区域数据-第三级",this.didOptions);
            },

            handleSizeChange(val) {
                console.log(val);
                this.pagesize = val;
                this.handleBtnFind();
            },

            handleCurrentChange(val) {
                this.page = val;
                this.handleBtnFind();
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
.postmen-wrap {
    margin-top: 20px;
}
.postmen-select {
    display: flex;
    justify-content: start;
}
.el-select {
    width: 120px;
    margin-right: 5px;
}
.el-input {
    width: 300px;
    margin-right: 5px;
}

.postmen-table-content{
    margin: 5px auto;
}

.el-pagination {
    margin: 5px auto;
    text-align:center;
}

</style>