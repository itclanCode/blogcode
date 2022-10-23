<template>
    <div class="wrap">
        <div class="content">
            <el-input placeholder="请输入内容" v-model="input" class="input-with"></el-input>
            <el-button slot="append" @click="handleAdd">添加</el-button>
            <el-button type="danger" @click="handleDelete">删除</el-button>
        </div>
        <div>
            <ul>
                <li v-for="(item,index) in lists" :key="index"><a :href="item.url || 'https://itclan.cn'">{{item.name}}</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'arrPushPop',
        data() {
            return {
                input: '',
                lists: [
                    {
                        name: 'itclanCoder',
                        url: 'https://coder.itclan.cn'
                    },
                    {
                        name: '客来影视TV',
                        url: 'https://video.itclan.cn'
                    },
                    {
                        name: '短链接生成',
                        url: 'https://short.itclan.cn'
                    },

                    {
                        name: 'IT资源导航',
                        url: 'https://nav.itclan.cn'
                    }
                ]
            }
        },
        methods: {
            // 添加
            handleAdd() {
                if(this.input) {
                   this.lists.push({
                    name: this.input
                   })
                   this.input = '';
                }else {
                    this.$message.error('输入框内容不能为空');
                }
               
            },

            // 删除
            handleDelete() {
                this.lists.pop();
            }

        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    .content {
        display:flex;
        margin-bottom: 10px;
        .input-with {
            width: 300px;
        }
    }
}
</style>