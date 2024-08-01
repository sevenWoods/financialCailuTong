<script setup lang="ts">
defineOptions({
  name: "updateAdmin"
});
import { ref, reactive, onMounted, computed } from "vue";
import { FormRules } from "element-plus";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import type { UploadFile } from "element-plus";
import at1 from "@/assets/images/at1.jpg";
import at2 from "@/assets/images/at2.jpg";
import at3 from "@/assets/images/at3.jpg";
// 表单数据
const dialog = ref(false);
const title = ref("");
const formRef = ref(null);
const defaultformData = {
  mobile: null,
  name: "",
  nickname: "",
  email: "",
  password: "",
  avatar: "",
  job: null,
  user_id: null
};
const staffUser = [
  {
    name: "倪仁龙(1224)",
    value: 1224,
    group: "staff"
  },
  {
    name: "金健(544)",
    value: 544,
    group: "staff"
  },

  {
    name: "刘欢(5)",
    value: 5,
    group: "quality"
  }
];
const formData = ref({ ...defaultformData });
// 表单校验
const validateName = (rule: any, value: any, callback: any) => {
  // 正则表达式，匹配中英文字符
  const reg = /^[A-Za-z0-9]+$/;
  if (reg.test(value)) {
    return callback();
  }
  callback(new Error("只能输入英文和数字"));
};

const rules = reactive<FormRules>({
  job: [{ required: true, message: "请您输入类型名称", trigger: "change" }],
  name: [
    { required: true, message: "请您输入用户名", trigger: "blur" },
    { validator: validateName, trigger: "blur" }
  ],
  mobile: [
    {
      required: true,
      message: "请您输入的手机号",
      trigger: "blur"
    }
  ],
  user_id: [{ required: true, message: "请您选择用户", trigger: "change" }]
  // email: [
  //   {
  //     required: true,
  //     message: "请填写邮箱",
  //     trigger: "blur"
  //   },
  //   {
  //     type: "email",
  //     message: "请输入正确的格式",
  //     trigger: "blur"
  //   }
  // ]
});

// 取消事件
const canceList = () => {
  formData.value = { ...defaultformData };
  formRef.value.resetFields();
  status.value =
    false; /* 必须重置，不然图片上传后，直接弹框关闭，是true,头像组件直接隐藏了 */
  dialog.value = false;
};

// 用户头像
const status = ref(false);
// 图片上传成功钩子
const onChange = file => {
  console.log("🚀 ~ onChange ~ file:", file);
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
onMounted(() => {});
defineExpose({
  dialog,
  formData,
  title,
  canceList
});
</script>

<template>
  <el-dialog
    destroy-on-close
    v-model="dialog"
    :title="title"
    width="40%"
    @close="canceList"
  >
    <el-form
      :model="formData"
      ref="formRef"
      label-width="auto"
      :rules="rules"
      class="pr-2 pl-2"
    >
      <el-form-item
        v-if="isShow"
        style="font-weight: 700"
        label="用户头像"
        prop="avatar"
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
      <el-form-item
        v-else
        style="font-weight: 700"
        label="用户头像"
        prop="avatar"
      >
        <el-image :src="formData.avatar" class="TableimgPic" />
      </el-form-item>

      <el-form-item label="类型" prop="job">
        <el-select
          v-model="formData.job"
          placeholder="请选择类型"
          style="width: 35%"
        >
          <el-option label="管理员" value="admin" />
          <el-option label="员工" value="staff" />
          <el-option label="大B" value="quality" />
        </el-select>
      </el-form-item>
      <template v-if="formData.job == 'staff' || formData.job == 'quality'">
        <el-form-item label="绑定用户" prop="user_id">
          <el-select v-model="formData.user_id" placeholder="请选择用户">
            <el-option
              v-for="item in staffUser"
              :key="item.value"
              :label="item.name"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
      </template>

      <el-form-item label="用户名" prop="name">
        <el-input
          v-model.trim="formData.name"
          placeholder="请输入用户名登录时需要—英文或者数字
"
        />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input
          v-model.trim="formData.mobile"
          autocomplete="off"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.trim="formData.password"
          placeholder="请输入登录密码"
        />
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model.trim="formData.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          v-model.email="formData.email"
          autocomplete="off"
          placeholder="请输入邮箱"
        />
      </el-form-item>
      <div class="flex justify-end">
        <el-button @click="canceList">取消</el-button>
        <el-button type="primary" @click="$emit('submitAdmin', formRef)">
          确定
        </el-button>
      </div>
    </el-form>
    <!-- <template #footer>
      <div class="dialog-footer">
        <el-button @click="canceList">取消</el-button>
        <el-button type="primary" @click="$emit('submitAdmin', formRef)">
          确定
        </el-button>
      </div>
    </template> -->
  </el-dialog>
</template>

<style lang="scss" scoped>
.TableimgPic {
  width: 90px;
  display: block;
  border-radius: 5px;
}
.hideImg {
  ::v-deep(.el-upload--picture-card) {
    display: none;
  }
}
</style>
