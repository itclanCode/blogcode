<template>
  <div class="uploader">
    <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "uploadImg",
  data() {
    return {
        imageUrl: ''
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res);
      console.log(file);
      if (res.code != "20000") {
        this.$message({
          type: "error",
          message: res.msg,
        });
        return false;
      }
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isLt500K = file.size / 1024 < 500; // 限制图片的大小500K
      if (!isLt500K) {
        this.$message({
          message: "图片大小不能超过500K",
          type: "error",
        });
      }

      const isSize = new Promise(function (resolve, reject) {
        const img = new Image();
        const _URL = window.URL || window.webkitURl;
        img.onload = function () {
          file.width = img.with; // 图片的宽度
          file.height = img.height; // 图片高度
          const valid = img.width === 1920 && img.height === 1080; // 上传图片尺寸判定
          valid ? resolve() : reject(new Error("error"));
        };
        img.src = _URL.createObjectURL(file);
      }).then(
        () => {
          return file;
        },
        () => {
          // 提示图片大小尺寸
          this.$message({
            message: "上传图片尺寸必须为1920*1080",
            type: "error",
          });
          return Promise.reject(new Error("error"));
        }
      );

      return isLt500K && isSize;
    },


    // 预览图片击文件列表中已上传的文件时的钩子
    handlePictureCardPreview() {
      console.log("预览图片");
    },

    // 文件列表移除文件时的钩子
    handleRemove() {
      console.log("移除文件");
    },

    // 对上传列表进行控制
    hanleOnChange() {},
  },
};
</script>

<style lang="scss" scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

