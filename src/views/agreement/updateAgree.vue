<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { ElMessage, FormRules } from "element-plus";

defineOptions({
  name: ""
});
const dialog = ref(false);
const title = ref("");
const defaultinfo = { title: "", content: "", id: null };
const info = ref({ ...defaultinfo });
const formRef = ref(null);

// 确认事件
const submit = formRef => {
  // 校验能否通过
  formRef.validate(valid => {
    if (valid) {
      if (info.value.id) {
        ElMessage.success("修改信息成功");
      } else {
        ElMessage.success("添加信息成功");
      }

      dialog.value = false;
      info.value = { ...defaultinfo };
    }
  });
};

// 取消事件
const cancel = () => {
  dialog.value = false;
  info.value = { ...defaultinfo };
};
const isdetail = computed(() => {
  return title.value.includes("详情");
});

// 表单校验
const rules = reactive<FormRules>({
  title: [{ required: true, message: "请输入标题", trigger: "blur" }],
  content: [{ required: true, message: "请输入内容", trigger: "blur" }]
});
defineExpose({
  title,
  dialog,
  info
});
</script>

<template>
  <el-dialog
    v-model="dialog"
    :title="title"
    destroy-on-close
    width="40%"
    @close="cancel"
  >
    <el-form :rules="rules" ref="formRef" :model="info">
      <el-form-item label="标题" prop="title">
        <el-input
          v-model="info.title"
          style="width: 80%"
          :disabled="isdetail"
        />
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="info.content" type="textarea" :disabled="isdetail" />
      </el-form-item>
    </el-form>
    <template #footer v-if="!isdetail">
      <div class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="submit(formRef)">确定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>
