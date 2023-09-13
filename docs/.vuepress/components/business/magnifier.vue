<template>
    <div>
        <div class="magnifier-container">
            <el-row>
                <el-col :span="24">
                        <el-card shadow="hover">
                            <div slot="header"><span>圆形放大镜</span></div>
                            <Magnifie
                                url="https://picsum.photos/1920/500?random=1"
                                type="circle">
                            </Magnifie>
                        </el-card>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-card shadow="hover">
                    <div slot="header"><span>方形放大镜</span></div>
                    <Magnifie
                        url="https://ae01.alicdn.com/kf/U8aa481ed3c244d728159a7d2e0806926e.jpg"
                        type="square"
                    ></Magnifie>
                    </el-card>
                </el-col>
            </el-row>  
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import magnifie from "./magnifie.vue";
    Vue.component('Magnifie', magnifie);
    export default {
        name:'magnifier',
    }
</script>

<style lang="scss" scoped>

</style>