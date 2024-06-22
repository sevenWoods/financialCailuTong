<script setup lang="ts">
defineOptions({
  name: "role"
});
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import Search from "@/components/Search/index.vue";
import Pagination from "@/components/Pagination/index.vue";

// 搜索
const searchRef = ref(null);
const searchFormDtata = [{ label: "角色", prop: "name", type: "text" }];
// 表格数据
const paginaRef = ref(null);
const openLoading = ref(false);
const roleData = ref([
  {
    id: 2,
    name: "马总",
    created_at: "2000-04-25",
    update_at: "2001-06-25"
  },
  {
    id: 6,
    name: "开发角色",
    created_at: "2001-04-25",
    update_at: "2001-06-25"
  },
  {
    id: 7,
    name: "经理角色",
    created_at: "2002-04-28",
    update_at: "2003-07-25"
  },
  {
    id: 8,
    name: "员工角色",
    created_at: "2003-04-28",
    update_at: "2003-09-28"
  }
]);
// 表格操作
// 删除
const delRole = row => {
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
onMounted(() => {
  paginaRef.value.total = 4;
});
</script>

<template>
  <el-card>
    <Search ref="searchRef" :searchFormDtata="searchFormDtata">
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
        <el-button type="primary" class="mr-2">添加</el-button>
      </template>
    </Search>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      :data="roleData"
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
      <el-table-column prop="id" label="ID" width="200" />
      <el-table-column prop="name" label="角色名" />
      <el-table-column prop="created_at" label="创建时间" />
      <el-table-column prop="update_at" label="修改时间" />
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="{ row }">
          <el-button-group size="small">
            <el-button type="warning" @click="editRole(row)">修改</el-button>
            <el-button type="danger" @click="delRole(row)">删除</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="paginaRef" />
  </el-card>
</template>

<style lang="scss" scoped></style>
