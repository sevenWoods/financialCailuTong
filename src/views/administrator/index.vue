<script setup lang="ts">
defineOptions({
  name: "administrator"
});
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";

import Search from "@/components/Search/index.vue";
import Pagination from "@/components/Pagination/index.vue";
import at1 from "@/assets/images/at1.jpg";
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
const openLoading = ref(false);

const adminData = ref([
  {
    id: 1,
    name: "administrator",
    mobile: "18211115325",
    email: "2942847@qq.com",
    job: "admin",
    role_name: "开发角色",
    avatar: at1
  },
  {
    id: 2,
    name: "ddx",
    mobile: "13166666666",
    email: "1462980@qq.com",
    job: "admin",
    role_name: "马总角色"
  },
  {
    id: 3,
    name: "18255145326",
    mobile: "18211115326",
    email: "2942847@qq.com",
    job: "admin",
    role_name: "经理角色"
  }
]);
</script>

<template>
  <el-card>
    <Search
      ref="searchRef"
      :searchFormDtata="searchFormDtata"
      :formSelect1="formSelect1"
      :formSelect2="formSelect2"
    >
      <template #btn>
        <el-button type="primary" style="margin: 0px 10px">添加</el-button>
      </template>
    </Search>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      :data="adminData"
      border
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
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="用户名" />
      <el-table-column prop="avatar" label="头像" width="150">
        <template #default="{ row }">
          <el-image :src="row.avatar" class="TableimgPic" />
        </template>
      </el-table-column>
      <el-table-column prop="role_name" label="角色名" />

      <el-table-column prop="mobile" label="手机号" width="120" />
      <el-table-column prop="job" label="职位" width="100">
        <template #default="{ row }">
          <span v-if="row.job == 'admin'">管理员</span>
          <span v-else-if="row.job == 'staff'">员工</span>
          <span v-else>大B</span>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180" />
    </el-table>
  </el-card>
</template>

<style scoped>
.TableimgPic {
  width: 90px;
}
</style>
