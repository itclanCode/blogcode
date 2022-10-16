<template>
    <div class="wrap">
        <div>
            <el-button type="primary" @click="handleClone">克隆</el-button>
        </div>
        <div class="img-content">
              <div class="myImg">
                <img class="img" src="https://img1.baidu.com/it/u=829829583,2565413602&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=661" width="150" height="100" alt=""></img>
                <img class="closeimg" @click="handleDelete" src="https://img0.baidu.com/it/u=3387898836,1597995708&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1666026000&t=e8de3885ef1563b4f8806bc4fcc3507b"  width="25" height="25" alt=""> 
              </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cloneNodeElem',
        data() {
            return {
                handleClone() {
                    let myImg = document.querySelector(".myImg");
                    if(myImg) {
                        // 克隆出新的元素
                        var newImg = myImg.cloneNode(true);
                        // 克隆节点,只会克隆元素，但新的节点不会将事件也复制进来,所以针对新添加的元素需要添加事件函数
                        // 标准浏览器是不复制事件的，防止循环引用无法释放内存。 IE使用attachEvent添加的事件可以复制，直接dom.onclick也无法复制。 重新给克隆的对象添加事件来解决
                        newImg.children[1].addEventListener('click',(event) => {
                            console.log(event);
                            let myImg = event.currentTarget.parentElement;
                            let imgContent =  myImg.parentElement;
                            imgContent.removeChild(myImg);
                        })
                        // 使用appendChild()函数进行挂载
                       document.querySelector(".img-content").appendChild(newImg);
                    } else {
                       alert('元素节点不存在,无法克隆新元素,请刷新页面,然后对原有的元素进行克隆');
                       location.reload()
                    }
                    
                },

                handleDelete(elem){
                    console.log(elem);
                    // 通过事件对象,cuurentTarget目标元素,parentElement找到父级元素,此时找到的是myImg元素
                    let myImg = elem.currentTarget.parentElement;
                    console.log(myImg);
                    // 在次通过parentElement找到muImg的父级元素,也就是imgContent
                    let imgContent =  myImg.parentElement;
                    console.log(imgContent)
                    // 通过removeChild()方法,删除对应的子元素
                    imgContent.removeChild(myImg);  
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrap {
    display:flex;
    flex-direction: column;
    align-items: center;
}
.img-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.img-content .myImg {
    position:relative;
}

.img-content .myImg .img  {
    margin-left: 10px;
    margin-top: 10px;
}

.closeimg {
    position:absolute;
    right: 5px;
    top: 17px;
    cursor:pointer;
}
</style>