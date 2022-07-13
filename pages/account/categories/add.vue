<template>
  <div class="category-add-page pt-20 px-6">
    <h1 class="uppercase font-bold text-3xl text-primary mb-14">Categories</h1>
    <div>
      <Form :model="category">
        <div class="mb-6">
          <div class="mb-4">
            <label for="category-img" class="font-roboto text-color_placeholder">Image</label>
            <Upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              id="category-img"
            >
              <img v-if="category.imageUrl" :src="category.imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </Upload>
          </div>
          <div class="mb-4">
            <Input v-model="category.name" placeholder="Email" />
          </div>
        </div>
        <div class="flex justify-end">
          <Button type="primary" class="text-lg w-40">Créer</Button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Input, Button, Upload } from "element-ui";
import { Icon } from "@iconify/vue2";
export default {
  name: "CategoryAddPage",
  layout: "FrontLayout",
  data() {
    return {
      category: {
        name: "",
        imageUrl: "",
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.category.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar picture must be JPG format!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar picture size can not exceed 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  components: { Form, Input, Button, Icon, Upload },
};
</script>

<style lang="scss">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
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
