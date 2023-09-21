<template>
    <div>
        <div>
            <el-select v-model="mingYanTypeVal" clearable placeholder="请选择名言类型" size="small" class="el-select">
                <el-option
                v-for="item in mingyanTypOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="returnNum" clearable placeholder="请选择返回数量" size="small" class="el-select">
                <el-option
                v-for="item in numOpts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-search" size="small" @click="handleBtnSearch" :disabled="isBtnDisabled">查询</el-button>
            <el-button type="primary" icon="el-icon-setting" size="small" @click="handleBtnReset">重置</el-button>
        </div>
        <!-- 结果展示 -->
        <div class="result-content" v-if="mingRenTableData.length != 0">
            <el-table :data="mingRenTableData.slice((page - 1) * pagesize, page * pagesize)">
                <el-table-column align="center" width="auto" property="typeid" label="typeid"></el-table-column>
                <el-table-column align="center" width="auto" property="content" label="内容">
                </el-table-column>
                <el-table-column align="center" width="auto" property="author" label="作者">   
                </el-table-column>
            </el-table>
            <el-pagination
                        class="el-pagination"
                        v-if="mingRenTableData.length != 0"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="page"
                        :page-sizes="[5, 10, 20, 30, 40, 50]"
                        :page-size="pagesize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalcount">
            </el-pagination>
        </div>
        <el-empty v-if="isResultNull == true?true:false" description="暂无数据">
                <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
            </el-empty>
        <div class="footer-btn">
            <el-button type="danger" size="small"  @click="handleJinQueFind('https://cesuan.itclan.pro/yunyincs/?spread=tui&dhid=720')">更精确姻缘测试查询</el-button>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'mingRenMingYan',
        data() {
            return {
                returnNum: '',
                mingYanTypeVal: '',
                isBtnDisabled: false,
                numOpts: [],
                mingRenTableData: [],
                isResultNull: false,
                page: 1,
                pagesize: 5,
                totalcount: null,
                mingyanTypOpts: [
                    {
                        value: 1,
                        label: '爱情'
                    },
                    {
                        value: 2,
                        label: '道德'
                    },
                    {
                        value: 3,
                        label: '青春'
                    },
                    {
                        value: 4,
                        label: '愿望'
                    },
                    {
                        value: 5,
                        label: '集体'
                    },
                    {
                        value: 6,
                        label: '理想'
                    },
                    {
                        value: 7,
                        label: '志向'
                    },
                    {
                        value: 8,
                        label: '人才'
                    },

                    {
                        value: 9,
                        label: '谦虚'
                    },

                    {
                        value: 10,
                        label: '人格'
                    },
                    {
                        value: 11,
                        label: '天才'
                    },
                    {
                        value: 12,
                        label: '青年'
                    },
                    {
                        value: 13,
                        label: '社会'
                    },
                    {
                        value: 14,
                        label: '国家'
                    },
                    {
                        value: 15,
                        label: '财富'
                    },
                     {
                        value: 16,
                        label: '智慧'
                    },

                    {
                        value: 17,
                        label: '修养'
                    },
                    {
                        value: 18,
                        label: '工作'
                    },
                    {
                        value: 19,
                        label: '妇女'
                    },
                    {
                        value: 20,
                        label: '儿童'
                    },
                    {
                        value: 21,
                        label: '思想'
                    },
                    {
                        value: 22,
                        label: '理智'
                    },

                    {
                        value: 23,
                        label: '学习'
                    },

                    {
                        value: 24,
                        label: '科学'
                    },

                    {
                        value: 25,
                        label: '信仰'
                    },

                    {
                        value: 26,
                        label: '诚信'
                    },

                    {
                        value: 27,
                        label: '读书'
                    },

                    {
                        value: 28,
                        label: '成败'
                    },

                    {
                        value: 29,
                        label: '奉献'
                    },

                    {
                        value: 30,
                        label: '劳动'
                    },

                    {
                        value: 31,
                        label: '节约'
                    },

                    {
                        value: 32,
                        label: '教育'
                    },

                    {
                        value: 33,
                        label: '企业'
                    },

                    {
                        value: 34,
                        label: '事业'
                    },

                    {
                        value: 35,
                        label: '时间'
                    },

                    {
                        value: 36,
                        label: '勤奋'
                    },

                    {
                        value: 37,
                        label: '民族'
                    },

                    {
                        value: 38,
                        label: '真理'
                    },

                    {
                        value: 39,
                        label: '友谊'
                    },

                    {
                        value: 40,
                        label: '自由'
                    },

                    {
                        value: 41,
                        label: '心理'
                    },

                    {
                        value: 42,
                        label: '心灵'
                    },

                    {
                        value: 43,
                        label: '人生'
                    },

                    {
                        value: 44,
                        label: '幸福'
                    },

                    {
                        value: 45,
                        label: '团结'
                    },

                ]
            }
        },
        mounted() {
            this.countNum();
        },
        methods: {
            countNum() {
                for(let i = 1; i <= 10; i++) {
                    this.numOpts.push({
                        value: `${i}`,
                        label: `${i}条`
                    })
                }
            },

            async handleBtnSearch() {
                this.isBtnDisabled = true;
                let development = process.env.NODE_ENV == 'development' ? true : false;
                console.log(development, 'development'); //true的时候为开发环境
                if (development) {
                   this.url = '/mingrenmingyanapi';
                } else {
                   this.url = 'https://apis.juhe.cn';
                }
               
                let params = {}
                if(this.returnNum) {
                    params = {
                       key:"7710a652df3e3c74158a79947314bb56",
                       num: this.returnNum,
                       
                   }
                }else if(this.mingYanTypeVal){
                    params = {
                       key:"7710a652df3e3c74158a79947314bb56",
                       typeid: this.mingYanTypeVal
                   }
                }else {
                    params = {
                       key:"7710a652df3e3c74158a79947314bb56",
                       num: 10
                   }
                }
                
                let res = await this.$axios.get(`${this.url}/fapigx/mingyan/query`,{params});
                console.log(res, 'res');
                if(res.status == 200 && res.data.error_code == 0) {
                    this.isBtnDisabled = false;
                    this.$message.success('名人名言查询成功');
                    const data = res.data.result;
                    this.mingRenTableData = data.list;
                    this.toutalcount = data.list.length;
                }else {
                    this.isResultNull = true;
                    this.$message.error("今日接口数据查询已上限,请明日来查询");
                }
            },

            handleBtnReset() {
                this.mingRenTableData = [];
                this.returnNum = '';
                this.mingYanTypeVal = '';
                this.isBtnDisabled = false;
            },

            handleSizeChange(val) {
                this.pagesize = val;
            },

            handleCurrentChange(val) {
                this.page = val;
            },

            handleJinQueFind(url) {
                window.open(url,'_blank');
            }


        }
    }
</script>

<style lang="scss" scoped>
.el-select {
    width: 140px;
}

.el-pagination {
    text-align: center;
    margin: 5px auto;
}

.result-content {
    margin-top: 5px;
}

.footer-btn {
    margin-top: 20px;
}
</style>