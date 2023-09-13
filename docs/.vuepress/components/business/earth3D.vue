<template>
    <div class="globe3d-earth-container" >
         <div class="globe3d-earth"  ref="Globe3d"></div>
    </div>
</template>

<script>
    import Vue from "vue";
    import echarts from "echarts";
    import "echarts-gl";
    import option from './Globe3d.js'
    import { debounce } from "./debounce.js";
    Vue.prototype.echarts = echarts;
    export default {
        name: "earth3D",
        data() {
            return {
                myChart: null,
                resizeHandler: null
            }
        },
        mounted() {
            // 基于准备好的dom，初始化echarts实例
            this.myChart = echarts.init(this.$refs.Globe3d);
            // 使用刚指定的配置项和数据显示图表。可视化3D
            this.myChart.setOption(option);
            this.resizeHandler = debounce(() => {
                if (this.myChart) {
                    this.myChart.resize();
                }
            }, 100);
            this.initResizeEvent();
        },

        methods: {
            //监听resize
            initResizeEvent() {
                window.addEventListener("resize", this.resizeHandler);
            },
            //移除resize
            destroyResizeEvent() {
              window.removeEventListener("resize", this.resizeHandler);
            }
        },

        beforeDestroy() {
            this.destroyResizeEvent();
            if (!this.myChart) {
              return;
            }
            this.myChart.dispose();
            this.myChart = null;
        },

        activated() {
            this.initResizeEvent();
            if (this.myChart) {
              this.myChart.resize();
            }
        },

        deactivated() {
            this.destroyResizeEvent();
        }
    }       
</script>

<style lang="scss" scoped>
.globe3d-earth-container {
    width: 100%;
    height: 100%;
    background:#2d3a4b;
    .globe3d-earth {
        width: 100%;
        height: 702px;
    }
}
</style>