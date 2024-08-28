<script setup lang="ts">
import { ref } from "vue";
import { taxreceiptList } from "@/utils/commonData";
import Search from "@/components/Search/index.vue";

defineOptions({
  name: "taxreceiptList"
});
const openLoading = ref(false);
const taxreceiptData = ref([...taxreceiptList]);
const searchFormDtata = ref([
  { label: "状态", prop: "status", type: "select1" },
  { label: "公司名称", prop: "name", type: "text" }
]);
const formSelect1 = [
  { label: "全部", value: "" },
  { label: "待登录", value: 1 },
  { label: "登录失败", value: 2 },
  { label: "采集中", value: 3 },
  { label: "采集失败", value: 4 }
];
// 加载中
const loading = () => {
  openLoading.value = true;
  setTimeout(() => {
    openLoading.value = false;
  }, 400);
};

// 弹框部分
const outerVisible = ref(false);
const URL = ref(null);
const checkTaxpt = ROW => {
  outerVisible.value = true;
  URL.value = ROW.detail_url;
};
</script>

<template>
  <el-card>
    <Search
      ref="searchRef"
      :searchFormDtata="searchFormDtata"
      :formSelect1="formSelect1"
      :refresh-list="loading"
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
    </Search>
    <el-table
      v-loading.lock="openLoading"
      element-loading-text="加载中..."
      :data="taxreceiptData"
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
      <el-table-column prop="uid" label="采集人UID" width="120" />
      <el-table-column prop="order_no" label="订单号" />
      <el-table-column prop="company_name" label="公司名称" />
      <el-table-column prop="credit_code" label="企业税号" />
      <el-table-column prop="status_name" label="状态" width="120" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="{ row }">
          <el-button-group size="small">
            <el-button
              v-if="row.detail_url"
              type="primary"
              @click="checkTaxpt(row)"
              >查看</el-button
            >
            <el-button type="info">备注</el-button>
          </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      align-center
      v-model="outerVisible"
      title="税票详情"
      width="600"
      class="dalg"
    >
      <iframe width="100%" height="600px" :src="URL" />
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="outerVisible = false">关闭</el-button>
        </div>
      </template>
    </el-dialog>
  </el-card>
</template>

<style lang="scss" scoped>
::v-deep(.dalg .ShareBtn) {
  width: 10%;
}
</style>
