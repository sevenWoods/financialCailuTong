<script setup lang="ts">
defineOptions({
  /**
   *todo: 首页banner图片
   */
  name: "banner"
});
import { onMounted, ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { initSort, upTableData } from "@/utils/drag";

import Pagination from "@/components/Pagination/index.vue";
import Search from "@/components/Search/index.vue";
import updateBanner from "./updateBanner.vue";
import at1 from "@/assets/images/banner.png";
import at2 from "@/assets/images/sanxiang.png";

// 表格数据
const searchRef = ref(null);
const openLoading = ref(false);
const updateBannerRef = ref(null);
const tableRef = ref(null);
const bannerList = ref([
  {
    id: 1,
    title: "三湘",
    image: at2,
    url: "https://y.qq.com/n/ryqq/playlist/9141033696",
    sort: 22,
    update_time: "2024-08-01",
    radio: "a"
  },
  {
    id: 7,
    title: "贷贷相传",
    image: at1,
    url: "https://y.qq.com/n/ryqq/playlist/9094276126",
    sort: 88,
    update_time: "2024-08-01",
    // 后加的做弹框判断
    radio: "b"
  }
]);
// 分页信息
const paginaRef = ref(null);

// 修改操作
const editBan = row => {
  updateBannerRef.value.title = "编辑轮播图";
  updateBannerRef.value.dialog = true;
  updateBannerRef.value.formData = { ...row };
  updateBannerRef.value.radio = row.radio;
};
// 删除操作
const delBan = row => {
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
// 添加操作
const addBanner = () => {
  updateBannerRef.value.title = "新增轮播图";
  updateBannerRef.value.dialog = true;
};
// 加载中
const loading = () => {
  openLoading.value = true;
  setTimeout(() => {
    openLoading.value = false;
  }, 400);
};
/* // 拖拽排序接口
const fnSort = async () => {
  const { code } = await apiBannerEdit({
    ...upTableData.value
  })
  if (code !== 200) return
  ElMessage.success("修改排序成功")
  getApiData()
} */
onMounted(() => {
  paginaRef.value.total = 2;
  initSort(bannerList, tableRef, loading);
});
</script>

<template>
  <el-card>
    <Search ref="searchRef" :isButton="false" :refresh-list="loading">
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
        <el-button type="primary" class="mr-2" @click="addBanner"
          >添加</el-button
        >
      </template>
    </Search>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      :data="bannerList"
      ref="tableRef"
      row-key="id"
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
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="image" label="图片">
        <template #default="{ row }">
          <el-image :src="row.image" class="TableimgPic" />
        </template>
      </el-table-column>
      <el-table-column prop="url" label="链接" />

      <el-table-column prop="sort" label="排序<拖拽>" />

      <el-table-column prop="update_time" label="更新时间" />
      <el-table-column fixed="right" width="230" label="操作">
        <template #default="{ row }">
          <el-button type="warning" @click="editBan(row)">修改</el-button>
          <el-button type="danger" @click="delBan(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination ref="paginaRef" @refreshPage="loading" />
    <updateBanner ref="updateBannerRef" @loading="loading" />
  </el-card>
</template>

<style lang="scss" scoped>
::v-deep(.el-table td.el-table__cell div) {
  display: block;
  margin: auto; //剧中展示
}
// 图片缩小
::v-deep(.el-image__inner) {
  width: 160px;
}
::v-deep(.el-button + .el-button) {
  margin-left: 2px;
}
</style>
