<template>
    <div>
         <div class="switch-tab">
            <el-switch
            @change="hanldeSwitchTab"
            v-model="switchVal"
            active-text="看城市"
            inactive-text="看地球"
            active-color="#42b983"
      >
       </el-switch> 
         </div>
         <div v-show="isWatchCity">
              <watchCity /> 
         </div>
         <div v-show="isEarth3D">
            <earth3D />
         </div>
    </div>
</template>
<script>
import watchCity from "./watchCity.vue";
import earth3D from "./earth3D.vue";
export default  {
    name: 'homeCityEarth',
    components: {
        watchCity,
        earth3D
    },
    data(){
        return {
            switchVal: true,
            isWatchCity: true,
            isEarth3D: false
        }
    },
    methods: {
        hanldeSwitchTab(value) {
            if(value) {
                this.isWatchCity = true;
                this.isEarth3D = false;
            }else {
                this.isEarth3D = true;
                this.isWatchCity = false;
            
            }
       }
    }

}
</script>
<style scoped>
.switch-tab {
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>