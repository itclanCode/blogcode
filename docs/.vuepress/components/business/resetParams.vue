<template>
    <div class="reset-params">
       <div class="movie-item">
          <el-select
            class="move-item"
            v-model="videoForms.ztid"
            placeholder="视频专题"
            clearable
            size="small"
          >
            <el-option
              v-for="item in videoZhuanTiOptions"
              :key="item.ztid"
              :label="item.label"
              :value="item.ztid"
            >
            </el-option>
          </el-select>
        </div>
        <div class="movie-select">
                <el-select
                    class="move-item"
                    v-model="videoForms.zd"
                    placeholder="视频名称"
                    clearable
                    size="small"
                >
                    <el-option
                    v-for="item in videoSelectOptions"
                    :key="item.zd"
                    :label="item.label"
                    :value="item.zd"
                    >
                    </el-option>
                </el-select>
                <el-input
                    class="key-input"
                    size="small"
                    v-model="videoForms.key"
                    placeholder="请输入关键字"
                 />
        </div>
        <div>
          <el-button type="primary" size="small" @click="handleSearch">搜 索</el-button>
        </div>
    </div>    
</template>
<script>
    export default {
        name: 'resetParams',
        data() {
            return {
                data: [],  // 电影列表数据,初始化
                // 把form表单接口条件相关联的放置到一个对象下面管理,便于接口字段的管理
                page:1,  // 默认第一页
                limit: 20, // 默认返回20条数据
                total: '', // 分页总数据
                videoForms: {
                    ztid: '',  // 视频专题
                    zd: '',    // 视频筛选
                    key:'',  // 视频输入框关键字
                    year: '', // 年份
                    area: '',  // 地区
                    lang: '', // 语言
                    pay: '1',  // 1,免费,2收费,后端接口定义,默认免费
                    reco: '1',// 1,不轮播,2轮播
                    app: '', // app端是否展示
                    order: '', // 排序方式
                    kstime:'', // 开始时间
                    jstime: '' // 结束时间
                },
                videoZhuanTiOptions: [
                    {
                    label: "精品电影",
                    ztid: "6",          // ztid: '1',  视频专题,1代表精品国漫
                    },
                    {
                      label: "好莱坞电影",
                      ztid: "5",
                    },
                    {
                      label: "盗墓影视",
                      ztid: "4",
                    },
                    {
                      label: "鬼片大王",
                      ztid: "3",
                    },
                     {
                       label: "星爷电影",
                       ztid: "2",
                    },
                    {
                      label: "精品国漫",
                      ztid: "1",
                    },
                ],

                videoSelectOptions: [
                    {
                    label: "视频ID",
                    zd: "id",         //  zd: '', 视频筛选
                    },
                    {
                      label: "视频导演",
                      zd: "director",
                    },
                    {
                      label: "视频主演",
                      zd: "actor",
                    },
                ],
            }
        },

        methods: {
            // 获取影视列表接口数据
            async getVideoList() {
                try {    // 这里使用了try..cartch
                    let params = {   // 向后端请求的实参数
                       page:this.page,
                       limit: this.limit,
                       ...this.videoForms,
                    }
                    // Ajax请求接口，第一个参数是接口地止,第二个就是具体的参数,这里使用的是axios发送get请求数据
                    let res = await this.$axios.get(Interface.getVideoList,{ params });
                    if(res.code == 0) { // 说明成功
                       const { data }  = res.data;
                       this.data = data;  // 表格需要渲染的数据
                       this.total = res.data.count;
                    }
    
                } catch (err) {
                    // 如果请求接口报错,则扔出一个异常
                    console.log(err);
                }
                
            },
            // 搜索,查询影视列表接口
            handleSearch() {
                // this.getVideoList();  // 调用请求影视列表查询接口
                const params = {
                    ...this.videoForms
                }
                const {ztid,zd,key,year,area,lang,pay,reco,app,order,kstime,jstime} = params
                console.log(`https://coder.itclan.cn?ztid=${ztid}&zd=${zd}&key=${key}`);
                this.$message({
                    message: '请求数据',
                    type: 'success'
                 });
            }  
        }
    }
</script>
<style scoped>
.reset-params {
    display:flex;
    justify-content: left;
}

.key-input {
    width: 150px;
}
</style>