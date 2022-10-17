<template>
    <div class="wrap">
        <div>
            <ul>
                <li v-for="(item,index) in lists" :key="index">{{item.name}}-{{item.lan}}-{{item.chengji}}</li>
            </ul>
        </div>
        <div class="btn">
            <el-button type="primary" @click="handleJiangxu">降序</el-button>
            <el-button type="primary" @click="handleShengxu">升序</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ascendDes',
        data() {
            return {
                lists: [
                    {
                        name: '小王',
                        lan: '语文',
                        chengji: 90
                    },
                    {
                        name: '小红',
                        lan: '语文',
                        chengji: '79'
                    },

                    {
                        name: '小李',
                        lan: '语文',
                        chengji: '71'
                    },

                    {
                        name: '小白',
                        lan: '语文',
                        chengji: '85'
                    }
                ]
            }
        },

        methods: {
            // 降序
            handleJiangxu() {
                this.lists = this.lists.sort((a, b) => a.chengji - b.chengji).reverse()    
            },
            // 升序
            handleShengxu() {
                this.lists = this.lists.sort((a,b)=>a.chengji-b.chengji);
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align: center;
}
.btn {
    margin-top: 20px;
}
</style>