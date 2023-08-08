<template>
    <div>
        <div class='background'>
             <div class='main'>
                 <div :class='{active: isActive}' class="search">
                     <input placeholder='Search' type='text'>
                     <i @click="handleSearch" class='icon el-icon-search ion-ios-search'></i>
                     <i @click="handleClose" class='icon el-icon-close ion-ios-close-empty'></i>
                 </div>
                <div class='results'></div>
             </div>
        </div>
    </div>
 </template>
 <script>
export default {
    name: "transformMatrix3d",
    data(){
        return {
            isActive:false,
        }
    },
    methods: {
        handleSearch() {
            this.isActive = true;
        },
        handleClose() {
            this.isActive = false;
        }
    }
}
 </script>
 <style lang="scss" scoped>
.main {
     margin: 100px auto;
     width: 90%;
     max-width: 600px;
 }
 .search {
     width: 40px;
     height: 40px;
     border-radius: 50%;
     background-color: white;
     box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
     text-align: center;
     cursor: pointer;
     overflow: hidden;
     position: relative;
     animation: hide 500ms ease;
     margin: 0px auto;
 }
 .search input {
     display: none;
     position: absolute;
     top: 0;
     bottom: 0;
     position: absolute;
     left: 0px;
     width: 80%;
     border: 0;
     outline: 0;
     border-radius: 5px;
     padding: 5px 20px;
 }
 .search:hover {
     box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
     transform: translateY(-2px);
 }
 .search.active {
     width: 100%;
     border-radius: 5px;
     text-align: left;
     padding: 0 10px;
     animation: show 500ms ease;
     transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
 }
 .search.active input {
     display: block;
 }
 .search.active .ion-ios-search {
     display: none !important;
 }
 .search.active .ion-ios-close-empty {
     float: right;
     display: block !important;
 }
 .search .icon {
     font-size: 1.2em;
     line-height: 40px;
 }
 .search .icon.ion-ios-search {
     display: block;
 }
 .search .icon.ion-ios-close-empty {
     display: none;
     font-size: 1.6em;
     padding: 0px 10px;
 }
 @keyframes hide {
     0% {
         transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
     20% {
         transform: rotate(-5deg) matrix3d(0.8, 0, 0, 0, 0, 0.8, 0, 0, 0, 0, 1, 0, 0, -20, 1, 1);
     }
     100% {
         transform: rotate(0deg) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
 }
 @keyframes show {
     0% {
         transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
     10% {
         transform: rotate(10deg) matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 10, 1, 1);
     }
     80% {
         transform: rotate(-5deg) matrix3d(1, 0.1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
     100% {
         transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
     }
 }
 </style>