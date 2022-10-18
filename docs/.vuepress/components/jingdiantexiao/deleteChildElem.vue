<template>
    <div class="wrap">
         <div>
               <ul id="ul">
                  <li  v-for="(item,index) in lists" :key="index"><span>{{item}}</span><el-button  type="danger" @click="handleDelteItem(index)" size="mini">删除</el-button></li>
               </ul> 
         </div>
         <div class="deletAllBtn">
            <el-button type="primary" @click="handleDelete">删除所有元素</el-button>
         </div>   
    </div>
</template>

<script>
    export default {
        name: 'deleteChildELem',
        data() {
            return {
                lists: ["coder.itclan.cn",'itclan.cn','tv.itclan.cn','short.itclan.cn','aikelaidev.cn']
            }
        },

        methods: {
            handleDelete() {
                // this.lists = [];  // 如果是使用Vue编程思维,删除所有子元素,直接操作数组为空,就删除所有子元素了的
                // 这里用原生js实现,主要是演示操作子节点的方式,在vue项目里,操作DOM的话,那使用vue就没有任何意义价值了的
                var ul = document.getElementById('ul');// 获取父级元素的DOM
                // 判断是否包含子元素
                if(ul.hasChildNodes()) {
                    var len = ul.childNodes.length;  // 子元素的个数
                    for(var i = 0;i<len;i++) {
                        ul.removeChild(ul.childNodes[0]);  // 从第一个元素开始删除
                    }
                }

                // 也可以等价如下这样,逆向删除节点
                /**
                 *
                 *  for(var i = ul.childNodes.length-1;i>=0;i--) {
                        ul.removeChild(ul.childNodes[i])
                    }
                 * 
                 */

            },

            handleDelteItem(index) {
                // 如果是使用vue的话,那么直接操作数组的方法就可以了的,一行代码就可以可以解决
                this.lists.splice(index,1);
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    text-align:center;
}

span{
    display:inline-block;
    width: 200px;
}

ul>li {
  margin-bottom: 5px;
  border-bottom: 1px dashed #ccc;
}

.deletAllBtn {
    margin-top: 20px;
}
</style>