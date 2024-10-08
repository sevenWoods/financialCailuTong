<script setup lang="ts">
defineOptions({
  name: "administrator"
});
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

import Search from "@/components/Search/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import updateAdmin from "./updateAdmin.vue";
import { AdminData } from "@/utils/commonData";

// 搜索
const searchRef = ref(null);
const searchFormDtata = [
  { label: "角色", prop: "role_id", type: "select1" },
  { label: "职位", prop: "job", type: "select2" },
  { label: "开始时间", prop: "start", type: "timeStart" },
  { label: "结束时间", prop: "end", type: "timeEnd" }
];
const formSelect1 = [
  { label: "全部", value: "all" },
  { label: "员工角色", value: "staff" },
  { label: "开发角色", value: "develop" },
  { label: "经理角色", value: "admin" },
  { label: "马总角色", value: "manager" }
];
const formSelect2 = [
  { label: "全部", value: "all" },
  { label: "管理员", value: "admin" },
  { label: "员工", value: "staff" },
  { label: "大B", value: "quality" }
];

// 表格数据
const paginaRef = ref(null);
const openLoading = ref(false);
const adminData = ref(AdminData);
// 表格操作
const updateRef = ref(null);
// 删除
const delAdmin = row => {
  ElMessageBox.confirm("您确定要删除吗?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    // 事件
    ElMessage.success("删除数据成功！");
    openLoading.value = true;
    setTimeout(() => {
      openLoading.value = false;
    }, 400);
  });
};
// 修改按钮
const editAdmin = row => {
  updateRef.value.title = "修改管理员";
  updateRef.value.dialog = true;
  updateRef.value.formData = { ...row };
};
// 修改确认事件
const submitAdmin = formRef => {
  formRef.validate(valid => {
    if (valid) {
      if (updateRef.value.formData.id) {
        ElMessage.success("修改管理员成功！");
      } else {
        ElMessage.success("添加管理员成功！");
      }
      updateRef.value.dialog = false;
      openLoading.value = true;
      setTimeout(() => {
        openLoading.value = false;
      }, 400);
    }
  });
};
// 添加管理员
const addAdmin = () => {
  updateRef.value.title = "新增管理员";
  updateRef.value.dialog = true;
};
// 分配角色部分
const dialog = ref(false);
const formData = ref<any>({});
const allocateAdmin = row => {
  dialog.value = true;
  formData.value = { ...row };
};
// 分配确认
const submit = () => {
  dialog.value = false;
  openLoading.value = true;
  setTimeout(() => {
    openLoading.value = false;
  }, 400);
};
onMounted(() => {
  paginaRef.value.total = 3;
});
</script>

<template>
  <el-card>
    <Search
      ref="searchRef"
      :searchFormDtata="searchFormDtata"
      :formSelect1="formSelect1"
      :formSelect2="formSelect2"
      :refresh-list="submit"
    >
      <template #hint>
        <div class="w-60">
          <el-alert
            title="仅演示，操作后不生效"
            type="info"
            center
            :closable="false"
            show-icon
          />
        </div>
      </template>
      <template #btn>
        <el-button type="primary" @click="addAdmin" class="mr-2"
          >添加</el-button
        >
      </template>
    </Search>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      :data="adminData"
      max-height="550"
      style="width: 100%"
      :header-cell-style="{
        color: '#606266',
        'text-align': 'center',
        backgroundColor: '#f5f7fa',
        fontSize: '15px'
      }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="avatar" label="头像">
        <template #default="{ row }">
          <el-image :src="row.avatar" class="TableimgPic" />
        </template>
      </el-table-column>
      <el-table-column prop="role_name" label="角色名" />

      <el-table-column prop="mobile" label="手机号" />
      <el-table-column prop="job" label="职位">
        <template #default="{ row }">
          <span v-if="row.job == 'admin'">管理员</span>
          <span v-else-if="row.job == 'staff'">员工</span>
          <span v-else>大B</span>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" />
      <el-table-column fixed="right" width="230" label="操作">
        <template #default="{ row }">
          <el-button type="warning" @click="editAdmin(row)">修改</el-button>
          <el-button type="danger" @click="allocateAdmin(row)">分配</el-button>
          <el-button type="danger" @click="delAdmin(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="paginaRef" @refreshPage="submit" />
    <updateAdmin ref="updateRef" @submitAdmin="submitAdmin" />
    <!-- 分配弹框 -->
    <el-dialog destroy-on-close v-model="dialog" title="分配角色" width="45%">
      <el-form :model="formData" label-width="auto" style="max-width: 770px">
        <el-form-item label="用户名">
          <el-input v-model.trim="formData.name" disabled />
        </el-form-item>

        <el-form-item label="角色">
          <el-select
            v-model="formData.role_name"
            placeholder="请您选择分配的角色"
            style="width: 370px"
          >
            <el-option label="开发角色" value="开发角色" />
            <el-option label="马总角色" value="马总角色" />
            <el-option label="经理角色" value="经理角色" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialog = false">取消</el-button>
          <el-button type="primary" @click="submit"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<style scoped>
.TableimgPic {
  width: 90px;
  display: block;
  border-radius: 5px;
  margin: 0 auto;
}
::v-deep(.el-button + .el-button) {
  margin-left: 2px;
}
</style>
