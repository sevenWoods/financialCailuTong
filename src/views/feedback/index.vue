<script setup lang="ts">
defineOptions({
  /**
   *todo: 反馈信息
   *@author: 七木
   *@date: 2024/08/02
   */
  name: "feedback"
});
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import Pagination from "@/components/Pagination/index.vue";
import Search from "@/components/Search/index.vue";
import at1 from "@/assets/images/error.jpg";
import at2 from "@/assets/images/error1.jpg";
import at3 from "@/assets/images/at3.jpg";

// 表格数据
const searchRef = ref(null);
const openLoading = ref(false);
const feedbackList = ref([
  {
    id: 1,
    uid: 1,
    avatar: [at1, at3],
    content: "ddd",
    type: "商务投诉",
    update_time: "2024-04-01"
  },
  {
    id: 8,
    uid: 1004,
    avatar: [at2, at3],
    content: "验证码收不到",
    type: "系统投诉",
    update_time: "2024-04-01"
  }
]);

// 分页信息
const paginaRef = ref(null);

// 详情操作
const detFedBak = row => {};
// 删除操作
const delFedBak = row => {
  ElMessageBox.confirm("您确定要删除吗?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning"
  }).then(async () => {
    // 事件
    ElMessage.success("删除数据成功！");
    loading();
  });
};
// 加载中
const loading = () => {
  openLoading.value = true;
  setTimeout(() => {
    openLoading.value = false;
  }, 400);
};
onMounted(() => {
  paginaRef.value.total = 2;
});
</script>

<template>
  <el-card>
    <Search ref="searchRef" :isButton="false">
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
      :data="feedbackList"
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
      <el-table-column prop="uid" label="用户uid" />
      <el-table-column prop="avatar" label="图片">
        <template #default="{ row }">
          <div class="demo-image__preview">
            <el-image
              style="width: 100px; height: 100px"
              :src="row.avatar[0]"
              :zoom-rate="1.2"
              :max-scale="5"
              :min-scale="0.2"
              :preview-src-list="row.avatar"
              fit="cover"
              :preview-teleported="true"
              :hide-on-click-modal="true"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="content" label="内容" />
      <el-table-column prop="type" label="类型" />
      <el-table-column prop="update_time" label="更新时间" />
      <el-table-column fixed="right" width="230" label="操作">
        <template #default="{ row }">
          <el-button type="primary" @click="detFedBak(row)">查看</el-button>
          <el-button type="danger" @click="delFedBak(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="paginaRef" @refreshPage="loading" />
  </el-card>
</template>

<style lang="scss" scoped>
::v-deep(.el-button + .el-button) {
  margin-left: 2px;
}
::v-deep(.el-table td.el-table__cell div) {
  display: block;
  margin: auto;
}
</style>
