<template>
    <div class="wrap">
        <div>
            <el-radio-group v-model="skillVal" @change="handleRadio">
              <el-radio-button  v-for="(item,index) in lists" :key="index" :label="item">{{item}}</el-radio-button>
            </el-radio-group>
        </div>
       <div class="content">
          {{content}}
       </div>
    </div>
</template>

<script>
    export default {
        name: "tongjiElem",
        data() {
            return {
                skillVal: 'JavaScript',
                lists: ["JavaScript","HTML","CSS","Vue","React","Angular"],
                content: "JavaScript"
            }
        },

        methods: {
            handleRadio(data) {
                console.log(data);
                this.content = data;
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    margin: 20px 0;
}

.content {
    padding: 20px 0 0 0;
}
</style>