<script setup lang="ts">
defineOptions({
  /**
   * todo: 修改首页轮播图片
   *@author: 七木
   *@date: 2024/08/02
   */
  name: "updateBanner"
});
import { ref, reactive, onMounted, computed } from "vue";
import type { FormRules, UploadFile } from "element-plus";
import { ElMessage, ElMessageBox } from "element-plus";

import { BANNERFROM_TYPE } from "@/api/types";
import { Plus } from "@element-plus/icons-vue";

// 表单数据
const dialog = ref(false);
const title = ref("");
const formRef = ref(null);
const formData = ref<BANNERFROM_TYPE>({});
const radio = ref("a");

// 用户头像
const status = ref(false);
// 图片上传成功钩子
const onChange = file => {
  file.url ? (status.value = true) : (status.value = false);
};

// 删除图片
const onRemove = (file: UploadFile, vakl) => {
  // 删除要把状态恢复默认
  status.value = false;
};
const isShow = computed(() => {
  return title.value.includes("新增");
});

// 改变类型清空输入框,不然显示上一个
const changeRadio = () => {
  formData.value.url = "";
};
const rules = reactive<FormRules>({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  url: [
    { required: true, message: "请输入链接地址", trigger: ["blur", "change"] }
  ]
});
// 确认事件
const emits = defineEmits(["loading"]);
const submit = formRef => {
  formRef.validate(valid => {
    if (valid) {
      if (formData.value.id) {
        ElMessage.success("修改成功！");
      } else {
        if (!status.value) return ElMessage.error("请上传图片");
        ElMessage.success("新增成功！");
      }
      cancel();
      emits("loading");
    }
  });
};

// 取消事件
const cancel = () => {
  formData.value = {};
  formRef.value.resetFields();
  radio.value = "a";
  status.value =
    false; /* 必须重置，不然图片上传后，直接弹框关闭，是true,头像组件直接隐藏了 */
  dialog.value = false;
};
defineExpose({
  title,
  dialog,
  formData,
  radio
});
</script>

<template>
  <el-dialog
    destroy-on-close
    v-model="dialog"
    :title="title"
    width="30%"
    @close="cancel"
  >
    <el-form
      :model="formData"
      ref="formRef"
      :rules="rules"
      label-width="auto"
      class="pr-2 pl-2"
      style="width: 80%"
    >
      <el-form-item
        v-if="isShow"
        style="font-weight: 700"
        label="图片"
        prop="image"
      >
        <el-upload
          action="#"
          :limit="1"
          :on-change="onChange"
          :on-remove="onRemove"
          list-type="picture-card"
          :auto-upload="false"
          :class="{ hideImg: status }"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item v-else style="font-weight: 700" label="图片" prop="image">
        <el-image :src="formData.image" class="TableimgPic" />
      </el-form-item>

      <el-form-item label="标题" prop="title">
        <el-input v-model.trim="formData.title" placeholder="请输入标题" />
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="radio" @change="changeRadio">
          <el-radio label="a" value="a">产品详情</el-radio>
          <el-radio label="b" value="b">文章详情</el-radio>
          <el-radio label="c" value="c">链接地址</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="链接地址" v-if="radio == 'a'" prop="url">
        <el-select v-model="formData.url" filterable>
          <el-option
            label="三湘银行-湘业贷"
            value="https://y.qq.com/n/ryqq/playlist/9141033696"
          />
          <el-option label="苏宁银行-票e贷" value="苏宁银行-票e贷" />
        </el-select>
      </el-form-item>
      <el-form-item label="链接地址" v-if="radio == 'b'" prop="url">
        <el-select v-model="formData.url" filterable>
          <el-option
            label="天马行空"
            value="https://y.qq.com/n/ryqq/playlist/9094276126"
          />
          <el-option label="新政策" value="https://music.163.com/" />
        </el-select>
      </el-form-item>
      <el-form-item label="链接地址" v-if="radio == 'c'" prop="url">
        <el-input v-model.trim="formData.url" placeholder="请输入外链地址" />
      </el-form-item>
      <div class="flex justify-end">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit(formRef)"> 确定 </el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
